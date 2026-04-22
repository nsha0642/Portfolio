import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  CircleStackIcon,
  CodeBracketIcon,
  CommandLineIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import "./Skills.css";
import { hoverLift, useSectionReveal } from "../../utils/animations";

const programmingSkills = ["JavaScript", "Python"];

const frontendSkills = ["React.js", "HTML", "CSS", "Responsive Design"];

const backendSkills = ["Node.js", "FastAPI", "RESTful APIs"];

const coreSkills = [
  "Data Structures & Algorithms",
  "Object-Oriented Design",
  "System Design Fundamentals",
];

const databaseSkills = ["SQL"];

const toolsAndOther = [
  "Git",
  "JIRA",
  "Confluence",
  "Figma",
  "Accessibility (WCAG)",
  "Agile Methodologies",
  "LLMs",
];

const interests = [
  "Human-Computer Interaction",
  "Cyber Security",
  "Scalable Systems",
  "Product Development",
];

const skillSections = [
  {
    title: "Programming",
    icon: CodeBracketIcon,
    items: programmingSkills,
  },
  {
    title: "Frontend",
    icon: LightBulbIcon,
    items: frontendSkills,
  },
  {
    title: "Backend",
    icon: CommandLineIcon,
    items: backendSkills,
  },
  {
    title: "Core CS",
    icon: CircleStackIcon,
    items: coreSkills,
  },
  {
    title: "Databases",
    icon: CircleStackIcon,
    items: databaseSkills,
  },
  {
    title: "Tools & Other",
    icon: CommandLineIcon,
    items: toolsAndOther,
  },
  {
    title: "Interests",
    icon: LightBulbIcon,
    items: interests,
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, { targets: ".skills-card, .section-title" });

  return (
    <section className="skills-section" ref={sectionRef}>
      <div className="floating-background">
        <div className="circle small"></div>
        <div className="circle medium"></div>
        <div className="circle large"></div>
      </div>

      <div className="container skills-container">
        <h2 className="section-title text-2xl font-semibold text-pink-400">
          Skills &amp; Interests
        </h2>

        <div className="skills-grid">
          {skillSections.map((section) => {
            const Icon = section.icon;
            return (
              <motion.article key={section.title} className="skills-card" {...hoverLift}>
                <h3 className="skills-subtitle">
                  <Icon width={20} height={20} aria-hidden="true" /> {section.title}
                </h3>
                <div className="skills-chip-group">
                  {section.items.map((item) => (
                    <span key={item} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
