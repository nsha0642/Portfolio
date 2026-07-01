import React, { useRef } from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, MapPinIcon, PhoneIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import "./Home.css";
import { BubbleBackground } from "../AnimateUI/BubbleBackground";
import profilePic from "../../assets/profilePic.png";
import HorizonBackground from "../AnimateUI/HorizonBackground";
import { buttonMotion, useSectionReveal } from "../../utils/animations";

const projects = [
  {
    title: "ElderCare Assist System",
    date: "October 2025",
    tech: "React | FastAPI | OpenAI SDK",
    points: [
      "Led the design and development of an AI-powered healthcare platform for patients, caregivers, and doctors, delivering critical modules including shared health tracking, geo-fencing alerts, and intelligent care workflows.",
      "Defined user stories, functional requirements, and system design models (DSM/UML) to translate healthcare use cases into scalable technical implementation.",
      "Architected and developed backend services using FastAPI, integrating AI-driven conversational workflows and healthcare data interactions to support reminders, alerts, and patient assistance.",
      "Collaborated in an Agile development environment, contributing to sprint planning, task execution, testing, and iterative delivery of a modular full-stack healthcare solution.",
    ],
  },
  {
    title: "Personal Portfolio",
    date: "December 2025",
    tech: "React | JavaScript | HTML | CSS | GitHub Pages",
    points: [
      "Designed and developed a personal portfolio website to showcase technical projects, professional experience, and skills through a responsive and user-focused web interface.",
      "Built reusable frontend components and structured navigation to create a clean, maintainable, and accessible user experience across devices.",
      "Deployed and maintained the application using GitHub Pages, managing version control, iterative enhancements, and production updates independently.",
    ],
  },
];

const Home = () => {
  const sectionRef = useRef(null);
  useSectionReveal(sectionRef, { targets: ".home-animate" });

  return (
    <section id="home" className="home-section" ref={sectionRef}>
      <HorizonBackground />
      <BubbleBackground interactive={false} className="absolute inset-0 pointer-events-none" />
      <div className="animated-bg">{[...Array(10)].map((_, i) => <div key={i} className="circle" />)}</div>

      <div className="home-hero home-animate">
        <div className="home-hero-media">
          <motion.div className="photo-panel" whileHover={{ rotate: 0, scale: 1.02 }}>
            <img src={profilePic} alt="Nishanth Shanmugasundaram" className="profile-photo" />
          </motion.div>
        </div>
        <div className="home-hero-copy">
          <p className="hero-eyebrow">SYDNEY / AVAILABLE FOR OPPORTUNITIES</p>
          <h1 className="intro-title">I build systems that feel <span className="highlight">remarkably human.</span></h1>
          <p className="hero-signature">Nishanth Shanmugasundaram</p>
          <h2 className="intro-role">Systems Engineer | Front-End Developer | HCI Specialist</h2>
          <p className="intro-desc">Computer Science student at The University of Sydney, specialising in Human-Computer Interaction, with 2.8 years of professional experience delivering digital solutions at Infosys.</p>
          <div className="button-group">
            <motion.a href="#projects" className="btn-main" {...buttonMotion}>Explore my work</motion.a>
            <motion.a href="#contact" className="btn-outline" {...buttonMotion}>Contact me</motion.a>
          </div>
          <div className="hero-proof" aria-label="Career highlights">
            <div><strong>2.8</strong><span>years at Infosys</span></div>
            <div><strong>300+</strong><span>deliveries completed</span></div>
            <div><strong>71</strong><span>current USYD WAM</span></div>
          </div>
        </div>
      </div>

      <div id="projects" className="projects-section home-animate">
        <p className="section-kicker">SELECTED WORK</p>
        <h2 className="section-title">Projects built around real people</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article key={project.title} className="project-card" whileHover={{ y: -8 }}>
              <span className="project-number">0{index + 1}</span>
              <p className="project-date">{project.date}</p>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-tech">{project.tech}</p>
              <ul className="project-points">{project.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </motion.article>
          ))}
        </div>
      </div>

      <div id="contact" className="contact-section home-animate">
        <p className="section-kicker">LET'S BUILD SOMETHING USEFUL</p>
        <h2 className="section-title">Start a conversation</h2>
        <ul className="contact-list">
          <li><EnvelopeIcon width={22} /><a href="mailto:snishanthnirmala@gmail.com">snishanthnirmala@gmail.com</a></li>
          <li><PhoneIcon width={22} /><a href="tel:+61422252053">+61 422 252 053</a></li>
          <li><MapPinIcon width={22} /><span>Sydney, NSW, Australia</span></li>
          <li><GlobeAltIcon width={22} /><a href="https://www.linkedin.com/in/nishanth-shanmugasundaram-11a99017a/" target="_blank" rel="noreferrer">LinkedIn profile -&gt;</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
