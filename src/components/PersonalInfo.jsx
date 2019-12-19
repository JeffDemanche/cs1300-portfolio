import React from "react";
import me from "../img/me.jpg";
import "./PersonalInfo.css";

import linkedin from "../img/icons/in.png";
import insta from "../img/icons/insta.png";
import twitter from "../img/icons/twitter.png";

export const PersonalInfo = () => {
  return (
    <div>
      <div className="personal-info-container">
        <img src={me} alt="me"></img>
        <br></br>
        <span className="name">JEFF DEMANCHE</span>
        <br></br>
        <span className="occupation">
          a digital creative /<br></br>
          designer / developer<br></br>
        </span>
        <br></br>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/jeff-demanche-574259139/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-icon" src={linkedin} alt="linkedin"></img>
          </a>
          <a
            href="https://twitter.com/JeffDemanche"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-icon" src={twitter} alt="twitter"></img>
          </a>
          <a
            href="https://www.instagram.com/jeffgripsisonline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="social-icon" src={insta} alt="instagram"></img>
          </a>
        </div>
      </div>
    </div>
  );
};
