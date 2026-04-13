import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";
import profilePic from "../../assets/profilePic.png";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const currentPath = location.pathname.replace("/", "") || "home";
    setActiveLink(currentPath);
  }, [location]);

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "education", label: "Education", path: "/education" },
    { id: "experience", label: "Experience", path: "/experience" },
    { id: "internships", label: "Internships", path: "/internships" },
    { id: "achievements", label: "Achievements", path: "/achievements" },
    { id: "skills", label: "Skills", path: "/skills" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={profilePic} alt="Nishanth Shanmugasundaram" className="profile-pic" />
          <span className="ms-2 fw-bold">Nishanth Shanmugasundaram</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <motion.div whileHover={{ y: -2 }}>
                  <Link
                    to={item.path}
                    className={`nav-link ${activeLink === item.id ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
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
