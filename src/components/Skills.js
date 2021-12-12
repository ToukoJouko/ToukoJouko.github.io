import React from "react";
import css_logo from "./images/css.png";
import html_logo from "./images/html.png";
import javascript_logo from "./images/javascript.png";
import python_logo from "./images/python.png";
import react_logo from "./images/react.png";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills_header">SKILLS</div>
      <div className="skills_grid">
        <div>
          <img className="skill_img" src={javascript_logo} alt="js-logo" />
          <div>JAVASCRIPT</div>
        </div>
        <div>
          <img className="skill_img" src={python_logo} alt="python-logo" />
          <div>PYTHON</div>
        </div>
        <div>
          <img className="skill_img" src={html_logo} alt="html-logo" />
          <div>HTML</div>
        </div>
        <div>
          <img className="skill_img" src={css_logo} alt="css-logo" />
          <div>CSS</div>
        </div>
        <div>
          <img className="skill_img" src={react_logo} alt="react-logo" />
          <div>REACT.JS</div>
        </div>
        <div>
          <img className="skill_img" src={css_logo} alt="css-logo" />
        </div>
        <div>
          <img className="skill_img" src={css_logo} alt="css-logo" />
        </div>
        <div>
          <img className="skill_img" src={css_logo} alt="css-logo" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
