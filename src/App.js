import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Achievements from "./Components/Achievements/Achievements";
import Skills from "./Components/Skills/Skills";
import ScrollPortrait from "./Components/AnimateUI/ScrollPortrait";
import { setupLenis } from "./utils/animations";

const App = () => {
  useEffect(() => setupLenis(), []);

  return (
    <>
      <Navbar />
      <ScrollPortrait />
      <main>
        <Home />
        <Experience />
        <Education />
        <Skills />
        <Achievements />
      </main>
    </>
  );
};

export default App;
