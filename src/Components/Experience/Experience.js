import React, { useRef } from "react";
import { motion } from "framer-motion";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import "./Experience.css";
import EYLogo from "../../assets/EY.png";
import COWRKSLogo from "../../assets/COWRKS.png";
import {
  hoverLift,
  listItemVariants,
  useSectionReveal,
} from "../../utils/animations";

const Experience = () => {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, {
    targets: ".experience-card, .experience-summary",
  });

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="floating-background">
        <div className="circle small"></div>
        <div className="circle medium"></div>
        <div className="circle large"></div>
      </div>

      <div className="container experience-container">
        <h2 className="section-title">Experience</h2>

        <p className="experience-summary">
          <span className="experience-summary-main">
            Systems Engineer with experience building scalable full-stack applications, RESTful
            APIs, and user-centric systems across frontend and backend architectures
          </span>
          <br />
          <span className="experience-summary-sub">
            Infosys Private Limited, Chennai (2 years and 8 months)
          </span>
        </p>

        <div className="experience-grid">
          <motion.article className="experience-card" {...hoverLift}>
            <header className="experience-card-header">
              <div className="experience-logo-wrapper">
                <img src={EYLogo} alt="EY logo" className="experience-logo" />
              </div>
              <div className="experience-heading">
                <h3>
                  <BriefcaseIcon width={22} height={22} aria-hidden="true" /> EY - Enterprise
                  Support Platform Modernisation
                </h3>
              </div>
            </header>

            <ul className="experience-list">
              {[
                "Refactored a large-scale ticket management platform by migrating legacy modules into a modular React-based architecture integrated with RESTful backend services.",
                "Designed reusable component architectures and state-driven workflows, improving maintainability and enabling scalable feature development.",
                "Re-architected ticket lifecycle workflows using user-centered design principles to improve usability and reduce navigation complexity.",
                "Developed dynamic dashboard modules with API-driven data rendering for near real-time system monitoring.",
                "Optimised application performance using lazy loading, memoisation, and efficient state updates to improve responsiveness.",
                "Collaborated with backend teams to define API contracts and ensure reliable integration across distributed systems.",
                "Participated in code reviews and design discussions, ensuring code quality, scalability, and testability.",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={listItemVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.4 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.article>

          <motion.article className="experience-card" {...hoverLift}>
            <header className="experience-card-header">
              <div className="experience-logo-wrapper">
                <img
                  src={COWRKSLogo}
                  alt="COWRKS logo"
                  className="experience-logo experience-logo-cowrks"
                />
              </div>
              <div className="experience-heading">
                <h3>
                  <BriefcaseIcon width={22} height={22} aria-hidden="true" /> CoWrks - Partner
                  Ecosystem Platform
                </h3>
              </div>
            </header>

            <ul className="experience-list">
              {[
                "Architected and developed a full-stack partner portal with a React frontend and RESTful backend integration supporting real-time content updates.",
                "Implemented role-based dashboards with conditional rendering and structured validation to improve usability.",
                "Designed session management and authentication flows to ensure secure and consistent user experiences.",
                "Applied accessibility best practices (WCAG) and responsive design across multiple devices.",
                "Diagnosed and resolved production issues using debugging and browser profiling tools.",
                "Wrote unit tests and performed regression testing to maintain system reliability.",
                "Supported UAT cycles and collaborated with stakeholders to ensure successful production deployment.",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={listItemVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
