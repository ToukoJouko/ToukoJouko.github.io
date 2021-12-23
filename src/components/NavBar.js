import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 381.000000 380.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,380.000000) scale(0.100000,-0.100000)"
            fill="rgb(0, 140, 255)"
            stroke="none"
          >
            <path
              d="M30 1895 l0 -1885 1880 0 1880 0 0 1885 0 1885 -1880 0 -1880 0 0
        -1885z m3530 0 l0 -1645 -1650 0 -1650 0 0 1645 0 1645 1650 0 1650 0 0 -1645z"
            />
            <path
              d="M1250 1990 l0 -70 193 -2 192 -3 3 -752 2 -753 75 0 75 0 2 752 3
        753 193 3 193 2 -3 68 -3 67 -462 3 -463 2 0 -70z"
            />
            <path
              d="M2420 1235 l0 -825 73 0 72 0 0 312 0 313 230 6 c127 3 244 11 262
        17 108 36 199 116 250 220 27 55 28 63 31 244 4 209 -4 259 -59 348 -57 93
        -168 164 -283 181 -33 5 -177 9 -318 9 l-258 0 0 -825z m577 670 c70 -21 127
        -66 163 -127 l30 -53 0 -174 c0 -200 -8 -230 -82 -296 -71 -65 -90 -69 -322
        -73 -167 -3 -210 -1 -217 10 -14 22 -11 702 3 716 19 19 360 16 425 -3z"
            />
          </g>
        </svg>
      </div>
      <nav className="standard_nav">
        <ul className="nav_links">
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
      <nav className="mobile_nav">
        <ul className="mobile_nav_links">
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
