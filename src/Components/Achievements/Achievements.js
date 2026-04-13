import React, { useRef } from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/outline";
import "./Achievements.css";
import MascotAnimation from "../Mascot/MascotAnimation";
import {
  hoverLift,
  listItemVariants,
  useSectionReveal,
} from "../../utils/animations";

const Achievements = () => {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, { targets: ".achievement-card, .section-title" });

  return (
    <section className="achievements-section" ref={sectionRef}>
      <div className="floating-background">
        <div className="circle small"></div>
        <div className="circle medium"></div>
        <div className="circle large"></div>
      </div>

      <div className="container achievements-container">
        <h2 className="section-title text-2xl font-semibold text-pink-400">
          Achievements
        </h2>

        <div className="achievements-grid">
          <motion.article className="achievement-card" {...hoverLift}>
            <h3 className="achievement-subtitle">
              <SparklesIcon width={20} height={20} aria-hidden="true" /> Certifications
            </h3>
            <ul className="achievement-list">
              {[
                "Infosys Certified React Professional",
                "Infosys Certified Manual Tester",
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

          <motion.article className="achievement-card" {...hoverLift}>
            <h3 className="achievement-subtitle">
              <SparklesIcon width={20} height={20} aria-hidden="true" /> Impact &amp; Recognition
            </h3>
            <ul className="achievement-list">
              {[
                "Recognised as Best Team Player of the Quarter for consistent delivery of production-ready software components and effective collaboration within the DX unit at Infosys.",
                "Promoted modular design practices and reusable architecture patterns across project modules, improving scalability of feature development and reducing technical debt.",
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
        </div>
      </div>
      <MascotAnimation position="bottom-right" size={96} />
    </section>
  );
};

export default Achievements;
