import React from "react";
import css_logo from "./images/css.png";
import html_logo from "./images/html.png";
import javascript_logo from "./images/javascript.png";
import python_logo from "./images/python.png";
import react_logo from "./images/react.png";
import node_logo from "./images/nodejs.png";
import express_logo from "./images/express.png";
import mongodb_logo from "./images/mongodb.png";
import wp_logo from "./images/wp.png";

const Skills = () => {
  return (
    <div>
      <div className="skills">
        <h2 className="skills_header">SKILLS</h2>
        <p className="skills_desc">
          These are the technologies i currently use/learn/know the basics of.
        </p>
        <div className="skills_grid">
          <div>
            <img className="skill_img" src={javascript_logo} alt="js-logo" />
            <div>Javascript</div>
          </div>
          <div>
            <img className="skill_img" src={python_logo} alt="python-logo" />
            <div>Python</div>
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
            <div id="projects">React.js</div>
          </div>
          <div>
            <img className="skill_img" src={node_logo} alt="node-logo" />
            <div>Node.js</div>
          </div>
          <div>
            <img className="skill_img" src={express_logo} alt="express-logo" />
            <div>Express.js</div>
          </div>
          <div>
            <img className="skill_img" src={mongodb_logo} alt="mogodb-logo" />
            <div>MongoDB</div>
          </div>
          <div>
            <img className="skill_img" src={wp_logo} alt="wp-logo" />
            <div>WordPress</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
