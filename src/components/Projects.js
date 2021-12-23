import React from "react";
import ProjectCard from "./ProjectCard";
import noice_image from "./images/noice.jpg";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects_header">PROJECTS</div>
      <p className="projects_desc">
        Tähän selitystä että jpp tässä pari ptrojektia, lisää löytyy githubista
        bichhhh
      </p>
      <div className="project_cards">
        <ProjectCard name={"PROJECT NAME"} image={noice_image} />
        <ProjectCard name={"PROJECT NAME"} image={noice_image} />
        <ProjectCard name={"PROJECT NAME"} image={noice_image} />
      </div>
    </div>
  );
};

export default Projects;
