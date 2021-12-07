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
                <img className="skill_img" src={javascript_logo} alt="css-logo"/>
                <img className="skill_img" src={python_logo} alt="css-logo"/>
                <img className="skill_img" src={html_logo} alt="html-logo"/>
                <img className="skill_img" src={css_logo} alt="css-logo"/>
                <img className="skill_img" src={react_logo} alt="css-logo"/>
                <img className="skill_img" src={css_logo} alt="css-logo"/>
                <img className="skill_img" src={css_logo} alt="css-logo"/>
                <img className="skill_img" src={css_logo} alt="css-logo"/>            
            </div>
        </div>
    )
}

export default Skills;