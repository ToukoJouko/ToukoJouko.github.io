import React from "react";
import ProjectCard from "./ProjectCard";
import noice_image from "./images/noice.jpg";

const Projects = () => {
  return (
    <div>
      <div className="space" id="projects"></div>
      <div className="projects">
        <div className="projects_header">PROJECTS</div>
        <p className="projects_desc">
          Tähän selitystä että jpp tässä pari ptrojektia, lisää löytyy
          githubista bichhhh
        </p>
        <div className="project_cards">
          <ProjectCard
            name={"PROJECT NAME"}
            image={noice_image}
            demoLink={"https://www.youtube.com/watch?v=a8c5wmeOL9o"}
            repo={"https://www.youtube.com/watch?v=ubY0rEoe6JI"}
          />
          <ProjectCard
            name={"PROJECT NAME"}
            image={noice_image}
            demoLink={"https://www.youtube.com/watch?v=a8c5wmeOL9o"}
            repo={"https://www.youtube.com/watch?v=ubY0rEoe6JI"}
          />
          <ProjectCard
            name={"PROJECT NAME"}
            image={noice_image}
            demoLink={"https://www.youtube.com/watch?v=a8c5wmeOL9o"}
            repo={"https://www.youtube.com/watch?v=ubY0rEoe6JI"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
