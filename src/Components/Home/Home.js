import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import "./Home.css";
import { BubbleBackground } from "../AnimateUI/BubbleBackground";
import profilePic from "../../assets/profilePic.png";
import { buttonMotion, useSectionReveal } from "../../utils/animations";

const projects = [
  {
    title: "ElderCare Assist System",
    tech: "React.js, FastAPI, OpenAI SDK",
    description: [
      "Led the design and development of a full-stack healthcare platform supporting patients, caregivers, and doctors with features such as health tracking and geofencing alerts.",
      "Architected and built backend services using FastAPI to manage health data, alerts, and user workflows while integrating an AI-powered assistant for routines, reminders, and conversational support.",
      "Applied layered and service-oriented architecture patterns and managed Agile delivery through user stories, sprint planning, testing, and coordinated release execution.",
    ],
  },
  {
    title: "Developer Portfolio Website",
    tech: "React.js, Framer Motion, Bootstrap, Responsive UI",
    description: [
      "Built a personal developer portfolio to showcase engineering projects, UI and UX work, and software systems in a clean interactive format.",
      "Designed the site to highlight technical projects, system thinking, and polished front-end presentation while staying easy to maintain and publish on GitHub Pages.",
    ],
  },
];

const Home = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const buttonsRef = useRef(null);
  const sectionRef = useRef(null);

  useSectionReveal(sectionRef, { targets: ".home-animate" });

  const handleProjectsClick = (e) => {
    e.stopPropagation();
    if (showProjects) {
      setShowProjects(false);
      setShowContact(false);
      document.body.style.overflow = "hidden";
    } else {
      setShowProjects(true);
      setShowContact(false);
      document.body.style.overflow = "auto";
    }
  };

  const handleContactClick = (e) => {
    e.stopPropagation();
    if (showContact) {
      setShowProjects(false);
      setShowContact(false);
      document.body.style.overflow = "hidden";
    } else {
      setShowContact(true);
      setShowProjects(false);
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    const handleClickAnywhere = (e) => {
      const insideButtons = !!buttonsRef.current?.contains(e.target);
      const insideProjects = !!projectsRef.current?.contains(e.target);
      const insideContact = !!contactRef.current?.contains(e.target);

      if (!insideButtons && !insideProjects && !insideContact) {
        if (showProjects || showContact) {
          setShowProjects(false);
          setShowContact(false);
          document.body.style.overflow = "hidden";
        }
      }
    };

    document.addEventListener("click", handleClickAnywhere);
    return () => document.removeEventListener("click", handleClickAnywhere);
  }, [showProjects, showContact]);

  return (
    <section id="home" className="home-section" ref={sectionRef}>
      <BubbleBackground interactive={false} className="absolute inset-0 pointer-events-none" />

      <div className="animated-bg">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="circle"></div>
        ))}
      </div>

      <div className="home-hero home-animate">
        <div className="home-hero-media">
          <div className="photo-panel">
            <img src={profilePic} alt="Nishanth Shanmugasundaram" className="profile-photo" />
          </div>
        </div>

        <div className="home-hero-copy">
          <h1 className="intro-title">
            Hi, I'm <span className="highlight">Nishanth Shanmugasundaram</span>
          </h1>
          <h2 className="intro-role">
            Systems Engineer | Front-End Developer | Business Analyst
          </h2>
          <p className="intro-desc">
            I'm a Systems Engineer with 2+ years of experience building scalable full-stack
            applications and RESTful APIs, currently pursuing a{" "}
            <strong>Master of Computer Science</strong> at <strong>The University of Sydney</strong>.
            I bring a strong foundation in data structures, algorithms, and system design, with
            hands-on experience developing performant, user-centric systems across frontend and
            backend architectures.
          </p>

          <div className="button-group" ref={buttonsRef}>
            <motion.button
              onClick={handleProjectsClick}
              className={`btn-main ${showProjects ? "active-btn" : ""}`}
              {...buttonMotion}
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={handleContactClick}
              className={`btn-outline ${showContact ? "active-btn" : ""}`}
              {...buttonMotion}
            >
              Contact Me
            </motion.button>
          </div>
        </div>
      </div>

      {showProjects && (
        <motion.div
          className="projects-section home-animate"
          ref={projectsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
        >
          <h3 className="section-title">Projects</h3>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h4 className="project-card-title">{project.title}</h4>
                <p className="project-tech">
                  <strong>Technologies:</strong> {project.tech}
                </p>
                <div className="project-description">
                  {project.description.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      )}

      {showContact && (
        <motion.div
          className="contact-section home-animate"
          ref={contactRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
        >
          <h3 className="section-title">Contact Information</h3>
          <ul className="contact-list">
            <li>
              <EnvelopeIcon width={22} height={22} aria-hidden="true" />
              <span>snishanthnirmala@gmail.com</span>
            </li>
            <li>
              <PhoneIcon width={22} height={22} aria-hidden="true" />
              <span>0422252053</span>
            </li>
            <li>
              <MapPinIcon width={22} height={22} aria-hidden="true" />
              <span>Harris Park, Sydney, NSW, Australia</span>
            </li>
            <li>
              <GlobeAltIcon width={22} height={22} aria-hidden="true" />
              <a
                href="https://www.linkedin.com/in/nishanth-shanmugasundaram-11a99017a/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn - Nishanth Shanmugasundaram
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </section>
  );
};

export default Home;
