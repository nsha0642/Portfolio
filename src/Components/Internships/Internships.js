import React, { useRef } from "react";
import { motion } from "framer-motion";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import "./Internships.css";
import MascotAnimation from "../Mascot/MascotAnimation";
import MGLogo from "../../assets/MG Motors.png";
import GELogo from "../../assets/General Electric.png";
import BCGLogo from "../../assets/BCG.png";
import { hoverLift, useSectionReveal } from "../../utils/animations";

const Internships = () => {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, { targets: ".internship-card" });

  return (
    <section id="internships" className="internships-section" ref={sectionRef}>
      <div className="floating-background">
        <div className="circle small"></div>
        <div className="circle medium"></div>
        <div className="circle large"></div>
      </div>

      <div className="container internships-container">
        <h2 className="section-title">Internships</h2>

        <div className="internships-grid">
          {/* MG Nurture */}
          <motion.article className="internship-card" {...hoverLift}>
            <header className="internship-card-header">
              <div className="internship-logo-wrapper">
                <img src={MGLogo} alt="MG Nurture, Morris Garage Motor India" className="internship-logo" />
              </div>
              <div className="internship-heading">
                <h3>
                  <BuildingOffice2Icon width={20} height={20} aria-hidden="true" /> MG Nurture, Morris Garage Motor India
                </h3>
              </div>
            </header>

            <motion.p
              className="internship-text"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              Analysed customer behaviour patterns through primary survey design and data
              synthesis. Created actionable reports to support marketing strategy using Excel
              dashboards, ensuring alignment with digital outreach goals. Collaborated with
              business teams to visualize KPIs and helped refine lead conversion models through
              data segmentation.
            </motion.p>
          </motion.article>

          {/* General Electric */}
          <motion.article className="internship-card" {...hoverLift}>
            <header className="internship-card-header">
              <div className="internship-logo-wrapper">
                <img src={GELogo} alt="General Electric" className="internship-logo" />
              </div>
              <div className="internship-heading">
                <h3>
                  <BuildingOffice2Icon width={20} height={20} aria-hidden="true" /> General Electric
                </h3>
              </div>
            </header>

            <motion.p
              className="internship-text"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Mapped critical business processes using BPMN methodology and constructed Fishbone
              (Ishikawa) Diagrams to identify root causes in operational inefficiencies.
              Facilitated workshops to validate process flows and proposed optimization points.
              Explored automation opportunities using lean process design principles to eliminate
              redundant steps in quality control.
            </motion.p>
          </motion.article>

          {/* BCG */}
          <motion.article className="internship-card" {...hoverLift}>
            <header className="internship-card-header">
              <div className="internship-logo-wrapper">
                <img src={BCGLogo} alt="BCG" className="internship-logo" />
              </div>
              <div className="internship-heading">
                <h3>
                  <BuildingOffice2Icon width={20} height={20} aria-hidden="true" /> BCG
                </h3>
              </div>
            </header>

            <motion.p
              className="internship-text"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Completed hands-on modules in Strategic and Experience Design. Applied customer
              journey mapping and empathy analysis to simulate real-world design thinking
              challenges. Evaluated user-centric solutions for digital transformation case
              studies. Built personas and wireframes using insights from case briefs, emphasizing
              usability and engagement.
            </motion.p>
          </motion.article>
        </div>
      </div>
      <MascotAnimation position="bottom-left" size={96} />
    </section>
  );
};

export default Internships;


