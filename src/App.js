import React from "react";
import { useEffect } from "react";
import "./components/componentStyles.css";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
