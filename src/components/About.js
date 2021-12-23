import React from "react";
import picture from "./images/shrek.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="pic">
        <img src={picture} alt="kuva" width="200" height="200" />
      </div>
      <div className="about_text">
        <div className="about_header">ABOUT ME</div>
        <p>
          Tähän jotaki paskanjauhanttaa jeejeejeejeeejee joo jooj jooj jooooooo
          oooooooooooo oooooooooo oooooooo ooooooo oooooooooo ooooo oooooo
          ooooooo ooooo
        </p>
        <p>
          Tähän jotaki paskanjauhanttaa jeejeejeejeeejee joo jooj jooj
          jooooooooo ooooooo oooooooo oooooooooooo ooooo oooo oooooooo ooooo ooo
          ooooo ooo oooooo
        </p>
        <p>
          Tähän jotaki paskanjauhanttaa jeejeejeejeeejee joo jooj jooj
          joooooooooooo oooooooo ooooooooooooooooo oooooooooooo oooooooooooo
          ooooooooooo ooooo
        </p>
      </div>
    </div>
  );
};

export default About;
