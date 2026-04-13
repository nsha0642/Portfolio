import React, { useRef } from "react";
import { motion } from "framer-motion";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import "./Experience.css";
import MascotAnimation from "../Mascot/MascotAnimation";
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
            Software Engineer with experience across front-end engineering, business analysis, and
            application testing
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
                "Refactored a ticket management platform used by enterprise support teams, migrating legacy modules into a modular React-based architecture integrated with RESTful APIs.",
                "Designed reusable component libraries and state-driven UI workflows, improving maintainability and reducing feature development time by approximately 25%.",
                "Re-architected ticket lifecycle flows using usability feedback and Human-Computer Interaction principles, improving task completion efficiency and reducing navigation errors.",
                "Developed proof-of-concept dashboard analytics modules with dynamic rendering and API-driven data visualisation, enabling near real-time monitoring of ticket metrics.",
                "Optimised performance through lifecycle analysis, memoisation strategies, lazy loading, and structured state management to improve responsiveness and page load time.",
                "Collaborated with backend teams to define API contracts, manage error handling, and ensure reliable integration between frontend modules and enterprise systems.",
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
                "Architected and developed an end-to-end partner portal integrated with centralised authentication and real-time content synchronisation via RESTful services.",
                "Designed role-based dashboards with conditional rendering and robust form validation logic, improving operational efficiency for internal content management teams.",
                "Implemented session handling and shared login flows to maintain data consistency across web and mobile platforms.",
                "Applied HCI principles to optimize information architecture, accessibility alignment, and responsive behaviour across multiple device types.",
                "Reduced client-side production errors through systematic debugging, structured error handling, and browser profiling.",
                "Wrote unit tests and regression checks for critical components, improving code quality and reducing production regressions.",
                "Led UAT coordination, resolved production issues, and ensured successful go-live; achieved CSAT 4.6/5 and increased partner engagement by approximately 30% within the first quarter post deployment.",
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
      <MascotAnimation position="bottom-right" size={100} />
    </section>
  );
};

export default Experience;
