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
            Work Experience (Frontend Developer  I  Business Analyst  I  Application Testing)
          </span>
          <br />
          <span className="experience-summary-sub">
            Infosys Private Limited, Chennai (2 years and 8 months)
          </span>
        </p>

        <div className="experience-grid">
          {/* EY */}
          <motion.article className="experience-card" {...hoverLift}>
            <header className="experience-card-header">
              <div className="experience-logo-wrapper">
                <img src={EYLogo} alt="EY logo" className="experience-logo" />
              </div>
              <div className="experience-heading">
                <h3>
                  <BriefcaseIcon width={22} height={22} aria-hidden="true" /> EY
                </h3>
              </div>
            </header>

            <ul className="experience-list">
              <motion.li
                variants={listItemVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.4 }}
              >
                Led the development of a customer-facing portal for EY where support teams could
                track and manage raised tickets. Created proof-of-concepts (POCs) for new
                components and dashboards, and assisted in migrating legacy components to new
                modules within the application.
              </motion.li>
              <motion.li
                variants={listItemVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.4 }}
              >
                Re-engineered an existing ticket management page to fix UI/UX issues and
                functional bugs. This involved redesigning the flow to improve user clarity and
                reduce navigation errors, ensuring a more reliable support interface.
              </motion.li>
              <motion.li
                variants={listItemVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.4 }}
              >
                Translated EY’s dashboard requirements into pixel-perfect React.js components
                using Figma designs. Implemented reusable UI elements and handled state
                management to ensure seamless integration with ticketing APIs and improved
                responsiveness across screen sizes.
              </motion.li>
            </ul>
          </motion.article>

          {/* COWRKS */}
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
                  <BriefcaseIcon width={22} height={22} aria-hidden="true" /> COWRKS
                </h3>
              </div>
            </header>

            <ul className="experience-list">
              <motion.li
                variants={listItemVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                Developed the CoWrks Partner Portal and dashboards from scratch, integrating them
                with the company website through shared login and real-time sync. Built fully
                responsive React.js interfaces and dashboards using Figma mockups, ensuring
                consistency across web and mobile platforms.
              </motion.li>
              <motion.li
                variants={listItemVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                Architected the portal so that internal CoWrks members could dynamically manage
                partner content, which updated instantly on the live site using React state
                management and RESTful API integrations with conditional rendering and form
                validations.
              </motion.li>
              <motion.li
                variants={listItemVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                Collaborated with the UX design team to review Figma prototypes, provided
                feedback on navigation improvements, and implemented pixel-perfect UI elements.
                Debugged and optimized components to enhance interactivity and responsiveness.
              </motion.li>
              <motion.li
                variants={listItemVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                Diagnosed and resolved critical bugs in both legacy modules and newly developed
                features. Applied component lifecycle analysis and browser console profiling to
                improve reliability and reduce client-side errors.
              </motion.li>
              <motion.li
                variants={listItemVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                Authored comprehensive business use cases after directly gathering client
                requirements. Ensured alignment between business logic and technical design for
                both mobile and web apps, increasing clarity for developers and reducing rework.
              </motion.li>
              <motion.li
                variants={listItemVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                Demonstrated functional versions of the mobile and web applications to clients
                prior to UAT. Took part in multiple review cycles and incorporated feedback,
                ensuring feature completeness. Supported client-side UAT and coordinated final
                sign-off through bug tracking and resolution.
              </motion.li>
              <motion.li
                variants={listItemVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                After go-live, received positive feedback from stakeholders. Based on internal
                metrics and surveys, achieved a Customer Satisfaction Score (CSAT) of 4.6/5 and
                observed a 30% boost in partner engagement within the first quarter
                post-deployment.
              </motion.li>
            </ul>
          </motion.article>
        </div>
      </div>
      <MascotAnimation position="bottom-right" size={100} />
    </section>
  );
};

export default Experience;


