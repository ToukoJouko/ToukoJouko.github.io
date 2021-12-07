import React from "react";
import "./components/componentStyles.css";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <About />
      <Skills />
    </div>
  );
};

export default App;
