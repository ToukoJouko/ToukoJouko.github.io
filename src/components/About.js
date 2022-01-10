import React from "react";
import picture from "./images/naamakuva.png";

const About = () => {
  return (
    <div>
      <div className="space_about" id="about"></div>
      <div className="about">
        <div className="pic">
          <img src={picture} alt="kuva" width="220" height="300" />
        </div>
        <div className="about_text">
          <h2 className="about_header">ABOUT ME</h2>
          <p>
            I am a second year computer science student at the University of
            Eastern Finland in Joensuu. In the beginning of 2020 i got
            interested in programming, and it started to feel like something i
            would like to do professionally. Eventually i decided to change my
            major in the fall of 2020 from chemistry to computer science.
          </p>
          <br />
          <p>
            Currently my main focus is in learning fullstack-development through
            my studies and my leisure projects. Web-development is something i
            really enjoy, because it is a process which includes both design and
            problem-solving. I also like working with web-development related
            technologies like Javascript, React and CSS. The combination of
            versatility and interesting technologies make web-development fun
            for me.
          </p>
          <br />
          <p id="skills">
            In addition to my studies and programming, i like to play the
            guitar, play videogames, watch movies and train calisthenics. I am
            also member of the Skripti ry (CS subject organization in Joensuu)
            board as an event and sports organizer. Student events are an
            important part of student life for me, and i enjoy both attending
            and organizing them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
