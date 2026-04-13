import React, { useRef } from "react";
import { motion } from "framer-motion";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import "./Education.css";
import MascotAnimation from "../Mascot/MascotAnimation";
import DonBosco from "../../assets/DonBosco.jpg";
import Srm from "../../assets/Srm.jpeg";
import Sydney from "../../assets/Sydney.png";
import { hoverLift, useSectionReveal } from "../../utils/animations";

const Education = () => {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, { targets: ".education-card" });

  return (
    <section id="education" className="education-section" ref={sectionRef}>
      <div className="floating-background">
        <div className="circle small"></div>
        <div className="circle medium"></div>
        <div className="circle large"></div>
      </div>

      <div className="container fade-in-page">
        <h2 className="section-title fade-in-section">Education</h2>

        <div className="education-timeline">
          <motion.article className="education-card" {...hoverLift}>
            <div className="edu-image">
              <img src={Sydney} alt="University of Sydney" />
            </div>
            <div className="edu-details">
              <h3>
                <AcademicCapIcon width={22} height={22} aria-hidden="true" /> Master of Computer
                Science
              </h3>
              <p className="edu-institute">The University of Sydney (2025 - Present)</p>
              <p className="edu-desc">
                Currently pursuing a specialization in{" "}
                <strong>Human-Computer Interaction (HCI)</strong>.
              </p>
            </div>
          </motion.article>

          <motion.article className="education-card" {...hoverLift}>
            <div className="edu-image">
              <img src={Srm} alt="SRM TRP Engineering College" />
            </div>
            <div className="edu-details">
              <h3>B.E. Mechanical Engineering</h3>
              <p className="edu-institute">SRM TRP Engineering College (2021)</p>
              <p className="edu-desc">
                Graduated with <strong>CGPA: 8.22 / 10</strong>.
              </p>
            </div>
          </motion.article>

          <motion.article className="education-card" {...hoverLift}>
            <div className="edu-image">
              <img src={DonBosco} alt="Don Bosco Matric Higher Secondary School" />
            </div>
            <div className="edu-details">
              <h3>Higher Secondary Education</h3>
              <p className="edu-institute">Don Bosco Mat. Hr. Sec. School</p>
              <p className="edu-desc">
                Completed schooling with strong STEM performance, including{" "}
                <strong>93.5%</strong> in secondary examinations and <strong>79.5%</strong> in
                higher secondary education.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
      <MascotAnimation position="bottom-left" size={96} />
    </section>
  );
};

export default Education;
