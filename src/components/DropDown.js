import React from "react";
import { useState } from "react";

const Slide = () => {
  return (
    <div className="slide">
      <div>fdsafdsafdsafasd</div>
    </div>
  );
};

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
      {open ? <Slide></Slide> : ""}
    </div>
  );
};

export default DropDown;
