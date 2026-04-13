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
          <motion.article className="internship-card" {...hoverLift}>
            <header className="internship-card-header">
              <div className="internship-logo-wrapper">
                <img
                  src={MGLogo}
                  alt="MG Nurture, Morris Garage Motor India"
                  className="internship-logo"
                />
              </div>
              <div className="internship-heading">
                <h3>
                  <BuildingOffice2Icon width={20} height={20} aria-hidden="true" /> MG Nurture,
                  Morris Garage Motor India
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
              Designed and analysed structured customer data using survey instrumentation and
              segmentation techniques. Built KPI dashboards in Excel to identify lead conversion
              bottlenecks and support data-driven marketing optimisation.
            </motion.p>
          </motion.article>

          <motion.article className="internship-card" {...hoverLift}>
            <header className="internship-card-header">
              <div className="internship-logo-wrapper">
                <img src={GELogo} alt="General Electric" className="internship-logo" />
              </div>
              <div className="internship-heading">
                <h3>
                  <BuildingOffice2Icon width={20} height={20} aria-hidden="true" /> General
                  Electric
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
              Modelled enterprise workflows using BPMN methodology and root cause analysis through
              Fishbone diagrams. Identified automation opportunities and proposed system-level
              optimisations to reduce operational inefficiencies in quality control processes.
            </motion.p>
          </motion.article>

          <motion.article className="internship-card" {...hoverLift}>
            <header className="internship-card-header">
              <div className="internship-logo-wrapper">
                <img src={BCGLogo} alt="BCG" className="internship-logo" />
              </div>
              <div className="internship-heading">
                <h3>
                  <BuildingOffice2Icon width={20} height={20} aria-hidden="true" /> BCG -
                  Experience Design Module
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
              Applied design thinking and HCI methodologies to construct personas, user journeys,
              and wireframes for digital transformation scenarios. Evaluated usability trade-offs
              and proposed scalable, user-centred solutions grounded in behavioural insights.
            </motion.p>
          </motion.article>
        </div>
      </div>
      <MascotAnimation position="bottom-left" size={96} />
    </section>
  );
};

export default Internships;
