import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Internships from "./Components/Internships/Internships";
import Achievements from "./Components/Achievements/Achievements";
import Skills from "./Components/Skills/Skills";
import AskMe from "./Components/AskMe/AskMe";
import { setupLenis } from "./utils/animations";

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.45, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    const cleanup = setupLenis();
    return () => cleanup();
  }, []);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/education"
            element={
              <PageWrapper>
                <Education />
              </PageWrapper>
            }
          />
          <Route
            path="/experience"
            element={
              <PageWrapper>
                <Experience />
              </PageWrapper>
            }
          />
          <Route
            path="/internships"
            element={
              <PageWrapper>
                <section id="internships">
                  <Internships />
                </section>
              </PageWrapper>
            }
          />
          <Route
            path="/achievements"
            element={
              <PageWrapper>
                <section id="achievements">
                  <Achievements />
                </section>
              </PageWrapper>
            }
          />
          <Route
            path="/skills"
            element={
              <PageWrapper>
                <section id="skills">
                  <Skills />
                </section>
              </PageWrapper>
            }
          />
          <Route
            path="/ask-me"
            element={
              <PageWrapper>
                <AskMe />
              </PageWrapper>
            }
          />
      </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => (
  <Router>
    <AppRoutes />
    </Router>
  );

export default App;

