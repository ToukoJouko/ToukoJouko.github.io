import React from "react";

const SingleContact = (props) => {
  return (
    <div>
      <a href={props.link}>
        <div className="content">
          {props.svg}
          <h3>{props.name}</h3>
        </div>
      </a>
    </div>
  );
};

export default SingleContact;
