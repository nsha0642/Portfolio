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
          {/* Certifications */}
          <motion.article className="achievement-card" {...hoverLift}>
            <h3 className="achievement-subtitle">
              <SparklesIcon width={20} height={20} aria-hidden="true" /> Certifications
            </h3>
            <ul className="achievement-list">
              <motion.li variants={listItemVariants} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.4 }}>
                Infosys Certified React Professional
              </motion.li>
              <motion.li variants={listItemVariants} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.4 }}>
                Infosys Certified Front End Developer
              </motion.li>
              <motion.li variants={listItemVariants} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.4 }}>
                Infosys Certified Manual Tester
              </motion.li>
            </ul>
          </motion.article>

          {/* Impact & Recognition */}
          <motion.article className="achievement-card" {...hoverLift}>
            <h3 className="achievement-subtitle">
              <SparklesIcon width={20} height={20} aria-hidden="true" /> Impact &amp; Recognition
            </h3>
            <ul className="achievement-list">
              <motion.li variants={listItemVariants} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.4 }}>
                Recognized as Best Team Player of the Quarter for exceptional contributions as a
                Front-End Developer in the DX unit at Infosys.
              </motion.li>
              <motion.li variants={listItemVariants} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.4 }}>
                Spearheaded UI improvements that reduced page load time by 30% and increased
                end-user engagement, leading to positive feedback from clients and project leads.
              </motion.li>
            </ul>
          </motion.article>
        </div>
      </div>
      <MascotAnimation position="bottom-right" size={96} />
    </section>
  );
};

export default Achievements;


