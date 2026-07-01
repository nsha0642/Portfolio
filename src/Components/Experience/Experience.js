import React, { useRef } from "react";
import { motion } from "framer-motion";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import "./Experience.css";
import MGLogo from "../../assets/MG Motors.png";
import GELogo from "../../assets/General Electric.png";
import BCGLogo from "../../assets/BCG.png";
import UberLogo from "../../assets/Uber.png";
import InfosysLogo from "../../assets/Infosys.jpg";
import { useSectionReveal } from "../../utils/animations";

const experiences = [
  {
    company: "Infosys Private Limited",
    role: "Systems Engineer",
    period: "NOV 2021 — SEP 2024",
    logo: InfosysLogo,
    label: "Professional",
    points: [
      "Contributed to the development and enhancement of web-based business applications, building features that supported user workflows such as meeting room booking, booking management, and internal business operations.",
      "Contributed across different stages of the software lifecycle, including requirement analysis, development, testing, issue resolution, deployment support, and continuous improvements to enhance system reliability and user experience.",
      "Collaborated with developers, designers, testers, business stakeholders, and clients to gather requirements, refine features, resolve implementation issues, and support successful delivery of business applications.",
      "Investigated, debugged, and resolved application issues in production environments, improving system stability and supporting uninterrupted business operations.",
      "Contributed to code reviews, software testing, and implementation improvements to maintain code quality, enhance maintainability, and support reliable software delivery.",
      "Adapted to evolving project requirements, changing business needs, and new responsibilities, ensuring consistent delivery and effective contribution across multiple project phases.",
      "Demonstrated completed application modules to stakeholders, incorporated feedback, and supported successful feature acceptance prior to delivery.",
    ],
  },
  {
    company: "Uber Eats",
    role: "Delivery Partner · Part-time, Australia",
    period: "CURRENT",
    logo: UberLogo,
    label: "Customer operations",
    points: [
      "Completed 300+ deliveries with 96% customer satisfaction, 90% acceptance, 88% on-time performance, and only 1% cancellation.",
      "Applied communication, time management, adaptability, and real-time problem solving in a fast-paced service environment.",
    ],
  },
  {
    company: "MG Nurture",
    role: "Customer Research Internship",
    period: "MAY — JUL 2019",
    logo: MGLogo,
    label: "Internship",
    points: ["Conducted customer research for upcoming SUV launches and translated survey findings into structured product and marketing insights."],
  },
  {
    company: "General Electric",
    role: "Process Analysis Internship",
    period: "DEC 2019 — FEB 2020",
    logo: GELogo,
    label: "Internship",
    points: ["Modelled enterprise workflows using BPMN and Fishbone analysis, identifying automation opportunities in quality-control processes."],
  },
  {
    company: "BCG",
    role: "Experience Design Module",
    period: "APR — JUN 2020",
    logo: BCGLogo,
    label: "Internship",
    points: ["Created personas, user journeys, and wireframes using design thinking and HCI methods for digital-transformation scenarios."],
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, { targets: ".experience-summary" });

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="container experience-container">
        <p className="section-kicker">THE JOURNEY SO FAR</p>
        <h2 className="section-title">Experience, all in one timeline</h2>
        <p className="experience-summary">2.8 years of engineering experience, complemented by customer-facing work and cross-disciplinary internships.</p>
        <div className="experience-grid">
          {experiences.map((item) => (
            <motion.article className="experience-card" key={`${item.company}-${item.period}`} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .55, ease: "easeOut" }}>
              <span className="timeline-dot" />
              <div className="experience-card-header">
                <div className="experience-logo-wrapper">
                  {item.logo ? <img src={item.logo} alt="" className="experience-logo" /> : <BriefcaseIcon width={30} />}
                </div>
                <div className="experience-heading">
                  <span className="experience-label">{item.label}</span>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>
                <time>{item.period}</time>
              </div>
              <ul className="experience-list">{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
