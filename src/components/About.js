import React from "react";
import picture from "./images/shrek.png";


const About = () => {
    return (
        <div className="about" id="about">
            <div className="pic">
                <img src={picture} alt="kuva" width="250" height="200"/>
            </div>
            <div className="about_text">
                <div className="about_header">ABOUT ME</div>
                <p>Oon vitun hyvä javassa ja abstractPrinterFactory on mun lempikomento. TRA on mun lempikurssi ja kaikki jotka ei pääse sitä läpi on ala-arvosia paskoja :DDD. Juu ei mulla muuta oon kohta laitoksen johtaja hehehehehe. Puuro on hyvää.</p>
                <p>Oon vitun hyvä javassa ja abstractPrinterFactory on mun lempikomento. TRA on mun lempikurssi ja kaikki jotka ei pääse sitä läpi on ala-arvosia paskoja :DDD. Juu ei mulla muuta oon kohta laitoksen johtaja hehehehehe. Puuro on hyvää.</p>
                <p>Oon vitun hyvä javassa ja abstractPrinterFactory on mun lempikomento. TRA on mun lempikurssi ja kaikki jotka ei pääse sitä läpi on ala-arvosia paskoja :DDD. Juu ei mulla muuta oon kohta laitoksen johtaja hehehehehe. Puuro on hyvää.</p>

            </div>
        </div>
    )
}

export default About;