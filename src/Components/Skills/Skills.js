import React, { useRef } from "react";
import { motion } from "framer-motion";
import { CodeBracketIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import "./Skills.css";
import MascotAnimation from "../Mascot/MascotAnimation";
import { hoverLift, useSectionReveal } from "../../utils/animations";

const softwareSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "Node.js",
  "JIRA",
  "React.js",
  "Excel",
  "Confluence",
];

const interests = [
  "Human Computer Interactions",
  "Cyber Security",
  "Product development and Business Analysis",
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
              <CodeBracketIcon width={20} height={20} aria-hidden="true" /> Software skills
            </h3>
            <div className="skills-chip-group">
              {softwareSkills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>

          <motion.article className="skills-card" {...hoverLift}>
            <h3 className="skills-subtitle">
              <LightBulbIcon width={20} height={20} aria-hidden="true" /> Interests
            </h3>
            <div className="skills-chip-group">
              {interests.map((interest) => (
                <span key={interest} className="skill-chip">
                  {interest}
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


