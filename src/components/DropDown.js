import React from "react";
import { useState } from "react";

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
      {open ? (
        <div className="slide">
          <div>fdsafdsafdsafasd</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DropDown;
