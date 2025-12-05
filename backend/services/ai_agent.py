import os
from typing import Dict, List, Optional
from dotenv import load_dotenv

from openai import OpenAI

from backend.db.logging import log_interaction

# Load .env file
load_dotenv()


RESUME_KNOWLEDGE: Dict[str, str] = {
  "overview": (
    "Name: Nishanth Shanmugasundaram. Location: Harris Park, NSW, Australia. "
    "Contact: Mobile 0422252792, Email snishanthnirmala@gmail.com. "
    "Roles: Frontend Developer, Business Analyst, Application Testing."
  ),
  "education": (
    "Master of Computer Science at The University of Sydney (2025*, currently pursuing), "
    "specializing in Cybersecurity and Human-Computer Interaction (HCI). "
    "B.E. Mechanical Engineering from SRM TRP Engineering College (2021) with CGPA 8.22/10. "
    "Higher Secondary Education at Don Bosco Mat. Hr. Sec. School: 79.5% in 2017 and 93.5% in 2015, "
    "STEM focus with Maths 85 and Science 100."
  ),
  "experience_ey": (
    "Infosys Private Limited, Chennai – EY project: "
    "Led development of a customer-facing portal to track and manage support tickets. "
    "Created proof-of-concepts for new components and dashboards, and helped migrate "
    "legacy components to new modules. Re-engineered a ticket management page to fix UI/UX "
    "issues and functional bugs, improving clarity and reducing navigation errors. "
    "Translated EY dashboard requirements into pixel-perfect React.js components based on "
    "Figma designs. Implemented reusable UI components, state management, and integration "
    "with ticketing APIs, ensuring responsiveness across devices."
  ),
  "experience_cowrks": (
    "Infosys Private Limited, Chennai – CoWrks project: "
    "Developed the CoWrks Partner Portal and dashboards from scratch, integrating them with "
    "the main company website through shared login and real-time sync. Built fully responsive "
    "React.js interfaces using Figma mockups, ensuring consistency across web and mobile. "
    "Architected the portal so internal CoWrks members could dynamically manage partner content "
    "and see instant updates on the live site using React state management and RESTful APIs. "
    "Collaborated with UX designers to review Figma prototypes, improve navigation, and "
    "implement pixel-perfect UI. Debugged and optimized components to enhance interactivity "
    "and responsiveness. Diagnosed and resolved critical bugs in legacy and new modules using "
    "component lifecycle analysis and browser profiling. Authored comprehensive business use "
    "cases after gathering client requirements, aligning business logic with technical design. "
    "Demonstrated functional versions of mobile and web apps to clients prior to UAT, handled "
    "review cycles and bug tracking, and supported UAT and final sign-off. After go-live, "
    "the solution achieved a Customer Satisfaction Score (CSAT) of 4.6/5 and around a 30% "
    "boost in partner engagement within the first quarter."
  ),
  "internships": (
    "MG Nurture, Morris Garage Motor India: Analysed customer behaviour patterns using primary "
    "surveys and data synthesis, built Excel dashboards for KPIs to support marketing strategy "
    "and digital outreach alignment, and helped refine lead conversion models via data segmentation. "
    "General Electric: Mapped business processes using BPMN, constructed Fishbone (Ishikawa) "
    "Diagrams to identify root causes of operational inefficiencies, facilitated workshops to "
    "validate process flows, and proposed optimisation and automation using lean principles. "
    'BCG: Completed hands-on modules in Strategic and Experience Design, applied customer journey '
    "mapping and empathy analysis to digital transformation case studies, and built personas and "
    "wireframes emphasising usability and engagement."
  ),
  "certifications": (
    "Certifications: Infosys Certified React Professional, Infosys Certified Front End Developer, "
    "Infosys Certified Manual Tester."
  ),
  "achievements": (
    "Achievements: Recognised as Best Team Player of the Quarter in the DX unit at Infosys. "
    "Spearheaded UI improvements that reduced page load time by 30% and increased end-user "
    "engagement, leading to positive feedback from clients and project leads."
  ),
  "skills_interests": (
    "Software skills: HTML, CSS, JavaScript, Bootstrap, Node.js, JIRA, React.js, Excel, Confluence. "
    "Interests: Human Computer Interaction, Cybersecurity, Product Development, Business Analysis."
  ),
}


SECTION_KEYWORDS: Dict[str, List[str]] = {
  "overview": ["name", "who are you", "location", "where", "contact", "email", "phone", "mobile", "about"],
  "education": [
    "education", "degree", "university", "college", "school", "cgpa", "gpa", "marks", "percentage", 
    "sydney", "srm", "background", "undergraduate", "ug", "bachelor", "master", "study", "studied",
    "don bosco", "mechanical engineering", "computer science", "hci", "cybersecurity"
  ],
  "experience_ey": [
    "ey", "ticket", "support", "portal", "dashboard", "customer-facing", "infosys", "react",
    "work experience", "experience", "ey project", "previous work", "job", "worked"
  ],
  "experience_cowrks": [
    "cowrks", "partner portal", "portal", "engagement", "csat", "infosys", "partner",
    "cowrks project", "dashboard", "react", "responsive"
  ],
  "internships": [
    "intern", "internship", "mg", "morris garage", "general electric", "bcg", "training",
    "ge", "mg motors", "morris garage motor india", "strategic design", "business analysis"
  ],
  "certifications": ["certified", "certification", "certificate", "certifications"],
  "achievements": [
    "achievement", "award", "best team player", "page load", "30%", "recognition",
    "achievement", "csat", "engagement", "boost", "improvements", "improvements"
  ],
  "skills_interests": [
    "skill", "skills", "technology", "technologies", "interests", "javascript", "react", "html", "css",
    "tech stack", "programming", "language", "tool", "framework", "library", "node", "bootstrap",
    "jira", "excel", "confluence", "soft skills"
  ],
}


SAFE_REFUSAL = (
  "I'm only able to answer based on the information in my resume, and this specific "
  "detail is not included there."
)


def is_potential_jailbreak(question: str) -> bool:
  lowered = question.lower()
  jailbreak_markers = [
    "ignore previous instructions",
    "forget previous instructions",
    "system prompt",
    "reveal your instructions",
    "api key",
    "password",
    "bypass",
  ]
  return any(marker in lowered for marker in jailbreak_markers)


def build_context(question: str) -> str:
  q = question.lower()
  matched_sections: List[str] = []

  # First pass: keyword matching
  for section, keywords in SECTION_KEYWORDS.items():
    if any(kw in q for kw in keywords):
      matched_sections.append(RESUME_KNOWLEDGE[section])

  # If asking about contact/personal details, always include overview
  contact_keywords = ["email", "phone", "mobile", "contact", "address", "location"]
  if any(kw in q for kw in contact_keywords) and RESUME_KNOWLEDGE["overview"] not in "".join(matched_sections):
    matched_sections.insert(0, RESUME_KNOWLEDGE["overview"])

  # If nothing triggered, fall back to including high-level overview for generic questions
  if not matched_sections and any(word in q for word in ["about you", "about yourself", "profile", "who"]):
    matched_sections.append(RESUME_KNOWLEDGE["overview"])

  return "\n\n".join(matched_sections)


def get_openai_client() -> OpenAI:
  # OPENAI_API_KEY is read implicitly from environment; do not hardcode secrets.
  return OpenAI()


def generate_answer(question: str) -> str:
  """Generate an answer based strictly on resume context with strong guardrails."""
  
  try:
    # Safety checks
    if is_potential_jailbreak(question):
      return SAFE_REFUSAL

    # Build context from resume
    context = build_context(question)
    if not context.strip():
      return SAFE_REFUSAL

    client = get_openai_client()

    # Strict system prompt with better context understanding
    system_prompt = (
      "You are Nishanth Shanmugasundaram's AI assistant on his portfolio. "
      "Your job is to answer questions about Nishanth's resume and background. "
      "IMPORTANT: Answer ONLY based on the resume information provided. "
      "Never make up or invent information. "
      "If someone asks about 'UG background', respond with 'Mechanical Engineering' if that's in the resume. "
      "Be conversational, helpful, and speak in first person as Nishanth. "
      "If information is not available, clearly say 'I don't have that information in my resume.'"
    )

    user_prompt = (
      "RESUME INFORMATION:\n"
      f"{context}\n\n"
      "QUESTION:\n"
      f"{question}\n\n"
      "INSTRUCTIONS:\n"
      "1. Answer ONLY with information from the resume above.\n"
      "2. Understand variations like 'UG' = undergraduate, 'experience' = work experience, etc.\n"
      "3. Provide specific details from the resume.\n"
      "4. If information is not in resume, say you don't have it.\n"
      "5. Be conversational and friendly."
    )

    completion = client.chat.completions.create(
      model="gpt-4o-mini",
      temperature=0,
      max_tokens=300,
      messages=[
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_prompt},
      ],
    )
    
    answer = completion.choices[0].message.content.strip()
    log_interaction(question, answer)
    return answer
    
  except Exception as e:
    error_str = str(e)
    print(f"ERROR: {error_str}")
    
    # Provide helpful error messages
    if "api_key" in error_str.lower() or "401" in error_str:
      return "Error: API key not configured. Check backend/.env"
    elif "rate_limit" in error_str.lower():
      return "Error: Rate limit. Please try again in a moment."
    else:
      return f"Error: {error_str[:80]}"




