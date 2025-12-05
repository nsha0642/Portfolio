import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import "./Home.css";
import MascotAnimation from "../Mascot/MascotAnimation";
// Local bubble background component (fallback since remote package was unavailable)
import { BubbleBackground } from "../AnimateUI/BubbleBackground";
import profilePic from "../../assets/profilePic.JPG";
import heroIllustration from "../../assets/undraw_collaboration.svg";
import { buttonMotion, useSectionReveal } from "../../utils/animations";

const Home = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const buttonsRef = useRef(null);
  const sectionRef = useRef(null);

  useSectionReveal(sectionRef, { targets: ".home-animate" });

  // === Toggle Button Handlers ===
  const handleProjectsClick = (e) => {
    e.stopPropagation(); // don't let the global listener close immediately
    if (showProjects) {
      setShowProjects(false);
      setShowContact(false);
      document.body.style.overflow = "hidden";
    } else {
      setShowProjects(true);
      setShowContact(false);
      document.body.style.overflow = "auto";
    }
  };

  const handleContactClick = (e) => {
    e.stopPropagation();
    if (showContact) {
      setShowProjects(false);
      setShowContact(false);
      document.body.style.overflow = "hidden";
    } else {
      setShowContact(true);
      setShowProjects(false);
      document.body.style.overflow = "auto";
    }
  };

  // === Global click listener: close if click is outside buttons + open section ===
  useEffect(() => {
    const handleClickAnywhere = (e) => {
      const insideButtons = !!buttonsRef.current?.contains(e.target);
      const insideProjects = !!projectsRef.current?.contains(e.target);
      const insideContact = !!contactRef.current?.contains(e.target);

      // If click is NOT inside any of the interactive regions, reset to home
      if (!insideButtons && !insideProjects && !insideContact) {
        if (showProjects || showContact) {
          setShowProjects(false);
          setShowContact(false);
          document.body.style.overflow = "hidden";
        }
      }
    };

    document.addEventListener("click", handleClickAnywhere);
    return () => document.removeEventListener("click", handleClickAnywhere);
  }, [showProjects, showContact]);

  return (
    <section id="home" className="home-section" ref={sectionRef}>
      {/* Decorative bubble background (subtle, non-interactive) */}
      <BubbleBackground interactive={false} className="absolute inset-0 pointer-events-none" />
      {/* Floating Background */}
      <div className="animated-bg">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="circle"></div>
        ))}
      </div>

      {/* Intro */}
      <div className="content container">
        <div className="text-area home-animate">
          <h1 className="intro-title">
            Hi, I’m <span className="highlight">Nishanth Shanmugasundaram</span>
          </h1>
          <h2 className="intro-role">
            Web Development | Business Analysis | Testing | Researcher
          </h2>
          <p className="intro-desc">
            I’m currently pursuing my <strong>Master of Computer Science</strong> at{" "}
            <strong>The University of Sydney</strong>, specializing in{" "}
            <em>Human-Computer Interaction</em> and <em>Cyber Security</em>. With 2.5 years of work experience
            at <strong>Infosys</strong>, I’ve worked on UI development, business analysis, and
            testing for clients such as EY and CoWrks. I love building solutions that blend
            technology, design, and real-world problem solving.
          </p>

          <div className="button-group" ref={buttonsRef}>
            <motion.button
              onClick={handleProjectsClick}
              className={`btn-main ${showProjects ? "active-btn" : ""}`}
              {...buttonMotion}
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={handleContactClick}
              className={`btn-outline ${showContact ? "active-btn" : ""}`}
              {...buttonMotion}
            >
              Contact Me
            </motion.button>
          </div>
        </div>

        {/* Mascot: bottom-right corner, small and subtle */}
        <MascotAnimation position="bottom-right" size={110} />

        {/* Photo + Illustration */}
        <div className="image-area home-animate">
          <div className="photo-frame pulse">
            <img src={profilePic} alt="Nishanth Shanmugasundaram" className="profile-photo wave" />
          </div>
          <motion.img
            src={heroIllustration}
            alt="Creative collaboration illustration"
            className="hero-illustration"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Projects */}
      {showProjects && (
        <motion.div
          className="projects-section home-animate"
          ref={projectsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
        >
          <h3 className="section-title">ElderCare AI Agent</h3>
          <p className="project-tech">
            <strong>Technologies:</strong> React.js, Python, Open AI SDK, Docker
          </p>
          <div className="project-description">
          <p>
            Designed and implemented an intelligent ElderCare AI Agent as part of a human-centered
            prototype supporting elderly patients, caregivers, and clinicians. The system applied
            Model-Based Software Design principles to ensure traceable architecture and modular
            functionality across ten integrated use cases. The AI agent was architected using the
            OpenAI SDK and Python (FastAPI backend), interfacing with a React.js front-end to deliver
            adaptive, safe, and context-aware user interactions.
         </p>

         <p>
  Developed agentic capabilities that enable personalized companionship, health timeline
  summarization, and proactive safety checks. Leveraged prompt engineering and rule-based
  safety filters to enforce non-medical boundaries while preserving empathy and context
  sensitivity. Integrated the AI agent with FHIR based health data and event-driven modules
  such as Geofencing Alerts and Shared Health Timeline, allowing the agent to reason over
  real-time data and respond to critical events with contextual awareness.
</p>

<p>
  Applied agile methodologies through Jira-based task management, iterative testing, and
  structured feedback cycles. The AI component was validated through manual test cases
  measuring safety, latency, and content reliability. The final ElderCare AI Agent demonstrated
  the ability to provide real time emotional support, intelligent summarization of health
  records, and situational awareness for emergency events positioning it as a novel
  human-assistive system that bridges empathetic AI communication with healthcare compliance
  and system interoperability.
</p>

          </div>
          {/* <motion.div className="project-cta" whileHover={{ x: 4 }}>
            <ArrowTopRightOnSquareIcon width={22} height={22} />
            <span>Detailed case study available on request</span>
          </motion.div> */}
        </motion.div>
      )}

      {/* Contact */}
      {showContact && (
        <motion.div
          className="contact-section home-animate"
          ref={contactRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
        >
          <h3 className="section-title">Contact Information</h3>
          <ul className="contact-list">
            <li>
              <EnvelopeIcon width={22} height={22} aria-hidden="true" />
              <span>snishanthnirmala@gmail.com</span>
            </li>
            <li>
              <PhoneIcon width={22} height={22} aria-hidden="true" />
              <span>0422252053</span>
            </li>
            <li>
              <GlobeAltIcon width={22} height={22} aria-hidden="true" />
              <a
                href="https://www.linkedin.com/in/nishanth-shanmugasundaram-11a99017a/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn — Nishanth Shanmugasundaram
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </section>
  );
};

export default Home;
