import React from "react";
import DropDown from "./DropDown";

const ProjectCard = (props) => {
  return (
    <div className="project_card">
      <div className="project_name">{props.name}</div>
      <DropDown>
        This is a great application which includes many amazing features.
      </DropDown>
      <div className="image_container">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="project_links">
        <a href={props.demoLink}>
          <div className="link_button">DEMO</div>
        </a>
        <a href={props.repo}>
          <div className="link_button">GITHUB</div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
