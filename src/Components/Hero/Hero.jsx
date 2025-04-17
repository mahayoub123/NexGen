import React from "react";
import Button1 from "../../assets/images/Button-1.svg";
import Button2 from "../../assets/images/Button.svg";
import homeheroImg from "../../assets/images/home-hero-image.png";
import arrowIcon from "../../assets/images/arrow.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroBox">
        <div className="heroContent">
          <div className="heroFirstSection">
            <h2 className="titleStyle">Digital Solutions That Drive Success</h2>
            <img src={Button1} alt="button" />
          </div>
          <div className="parStyle">
            At NexGen, we believe in the transformative power of digital
            solutions. Our team of experts is dedicated to helping businesses
            like yours thrive in the fast-paced digital landscape.
          </div>
        </div>
        <div className="heroSecondSection">
          <div className="imgContainer">
            <img src={homeheroImg} alt="heroimg" />
            <img src={Button2} alt="heroBtn2" className="imgStyle" />
            <div>
              <p className="parStyle2">Estatein Real Estate</p>
              <p className="parStyle3">Web Development</p>
            </div>
          </div>
        </div>
      </div>
      <div className="heroDataContainer">
        <div className="textContainer">
          <p className="txtStyle">Clients</p>
          <p className="heroDataStyle">200+</p>
        </div>
        <div className="textContainer">
          <p className="txtStyle">Projects</p>
          <p className="heroDataStyle">280+</p>
        </div>
        <div className="textContainer">
          <p className="txtStyle">Happy Clients</p>
          <p className="heroDataStyle">100%</p>
        </div>
        <div className="textContainer">
          <p className="txtStyle">Followes</p>
          <p className="heroDataStyle">420k+</p>
        </div>
        <div className="textContainer">
          <p className="txtStyle">Years Of Experience</p>
          <p className="heroDataStyle">10+</p>
        </div>
        <button className="heroBtnStyle">
          {" "}
          <img className="arrowIconStyle" src={arrowIcon} alt="arrow" />
          Know More
        </button>
      </div>
    </div>
  );
};

export default Hero;
