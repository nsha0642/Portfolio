import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";
import profilePic from "../../assets/profilePic.png";

const navItems = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveLink(entry.target.id)),
      { rootMargin: "-35% 0px -55%", threshold: 0 }
    );
    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavigation = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (!section) return;
    setActiveLink(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#home" onClick={(event) => handleNavigation(event, "home")}>
          <img src={profilePic} alt="Nishanth Shanmugasundaram" className="profile-pic" />
          <span className="ms-2 fw-bold">Nishanth Shanmugasundaram</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <motion.div whileHover={{ y: -2 }}>
                  <a href={`#${item.id}`} onClick={(event) => handleNavigation(event, item.id)} className={`nav-link ${activeLink === item.id ? "active" : ""}`}>{item.label}</a>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
