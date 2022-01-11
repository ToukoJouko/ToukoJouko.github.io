import React from "react";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

const DropDown = (props) => {
  const [open, setOpen] = useState(false);
  const closedText = "SHOW INFO";
  const openText = "HIDE INFO";

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <div className="dropdown_button" onClick={handleClick}>
        {open ? openText : closedText}
      </div>
      <CSSTransition in={open} timeout={300} classNames="slide" unmountOnExit>
        <div>{open && props.children}</div>
      </CSSTransition>
    </div>
  );
};

export default DropDown;
