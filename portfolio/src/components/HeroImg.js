import "./HeroImg.css";
import React from "react";
import BGImage from "../assets/BGImage.png";

const HeroImg = () => {
  return (
    <div className="port-hero-root">
      <div className="port-img-container">
        <img className="port-hero-img" src={BGImage} />
      </div>
      <div className="port-hero-text">
        <p>Hi, my</p>
        <div className="port-hero-text2">
          <p>name is </p>
          <p id="name" className="port-text-name">
            Yashdeep Rathi
          </p>
        </div>
        <p>Software Developer</p>
      </div>
    </div>
  );
};

export default HeroImg;
