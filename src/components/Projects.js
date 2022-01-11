import React from "react";
import ProjectCard from "./ProjectCard";
import säju_image from "./images/säju.png";
import dict_image from "./images/dict.png";
import vs_image from "./images/vs.png";

const Projects = () => {
  return (
    <div>
      <div className="projects">
        <h2 className="projects_header">PROJECTS</h2>
        <p className="projects_desc">
          Here are some of the projects i have created. Feel free to check out
          my <a href="https://github.com/ToukoJouko">github</a> for more.
        </p>
        <div className="project_cards">
          <ProjectCard
            name={"DICTIONARY APP"}
            image={dict_image}
            alt={"dictapp image"}
            info={
              "Simple dictionary application made with react. Goal here was to make an app which fetches data from an API, and practice using state and effect hooks."
            }
            demoLink={"https://dictionary---app.herokuapp.com/"}
            demoButton={"DEMO"}
            repo={"https://github.com/ToukoJouko/react-dictionary-app"}
          />
          <ProjectCard
            name={"VsBOSTRO"}
            image={vs_image}
            alt={"vscode image"}
            info={
              "A VS Code extension which allows the user to print student restaurant menus to the VS Code console. Made if for fun and to learn javascript, but it turned out to be somewhat useful and i plan to add more menus to the extension in the future."
            }
            demoLink={
              "https://marketplace.visualstudio.com/items?itemName=ToukoJouko.vsbostro-extension&ssr=false#overview"
            }
            demoButton={"VS MARKET"}
            repo={"https://github.com/ToukoJouko/VsBostro"}
          />
          <ProjectCard
            name={"SÄHKÖINEN JULKAISEMINEN"}
            image={säju_image}
            alt={"wp site image"}
            info={
              "Website made with Wordpress which includes information about HTML and CSS. The goal of this project was to learn the basics of Wordpress, and how to create simple and user friendly websites."
            }
            demoLink={"https://sahkoinenjulkaiseminen677578811.wordpress.com/"}
            demoButton={"DEMO"}
            repo={"https://github.com/ToukoJouko/Sahkoinen-julkaiseminen"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
