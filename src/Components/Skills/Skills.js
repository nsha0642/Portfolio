import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  CommandLineIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import "./Skills.css";
import MascotAnimation from "../Mascot/MascotAnimation";
import { hoverLift, useSectionReveal } from "../../utils/animations";

const programmingSkills = [
  "Python",
  "JavaScript",
  "SQL",
  "React.js",
  "Node.js",
  "Express.js",
  "Bootstrap",
  "HTML",
  "CSS",
];

const engineeringSkills = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Time & Space Complexity",
  "RESTful API Design",
  "Component-Based Architecture",
  "State Management",
  "CI/CD",
  "Performance Optimization",
  "System Design Fundamentals",
  "Digital Experience",
  "Customer Experience",
];

const toolsAndConcepts = [
  "Git",
  "JIRA",
  "Confluence",
  "Figma",
  "Human-Computer Interaction",
  "Accessibility (WCAG)",
  "Responsive Design",
  "Cloud Basics",
];

const interests = [
  "Human-Computer Interaction",
  "Cyber Security",
  "Product Development",
  "Business Analysis",
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
          Skills
        </h2>

        <div className="skills-grid">
          <motion.article className="skills-card" {...hoverLift}>
            <h3 className="skills-subtitle">
              <CodeBracketIcon width={20} height={20} aria-hidden="true" /> Programming &amp;
              Frameworks
            </h3>
            <div className="skills-chip-group">
              {programmingSkills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>

          <motion.article className="skills-card" {...hoverLift}>
            <h3 className="skills-subtitle">
              <CommandLineIcon width={20} height={20} aria-hidden="true" /> Computer Science &amp;
              Software Engineering
            </h3>
            <div className="skills-chip-group">
              {engineeringSkills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>

          <motion.article className="skills-card" {...hoverLift}>
            <h3 className="skills-subtitle">
              <LightBulbIcon width={20} height={20} aria-hidden="true" /> Tools, Concepts &amp;
              Interests
            </h3>
            <div className="skills-chip-group">
              {[...toolsAndConcepts, ...interests].map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
      <MascotAnimation position="bottom-left" size={92} />
    </section>
  );
};

export default Skills;
