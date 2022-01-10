import React from "react";
import DropDown from "./DropDown";

const ProjectCard = (props) => {
  return (
    <div className="project_card">
      <div className="project_name">{props.name}</div>
      <DropDown>
        <p className="project_info">{props.info}</p>
      </DropDown>
      <div className="image_container">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="project_links">
        <a href={props.demoLink}>
          <div className="link_button">{props.demoButton}</div>
        </a>
        <a href={props.repo}>
          <div className="link_button">GITHUB</div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
