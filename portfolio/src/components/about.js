import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Aws from "../assets/aws2.png"
import cssicon from "../assets/css.png"
import github from "../assets/git.png"
import htmlicon from "../assets/html.png"
import jsicon from "../assets/js.png"
import mongo from "../assets/leaf.png"
import MUI from "../assets/MUI.png"
import nodejs from "../assets/nodejs.png"
import python from "../assets/python.png"
import reacticon from "../assets/react.png"
import reduxicon from "../assets/redux.png"
import visualstudio from "../assets/visual-studio.png"
import WebRTC from "../assets/WebRTC.png"

const About = () => {
  return (
    <div className="port-about">
      <div className="port-about-left">
        <h1>Who Am I ?</h1>
        <p>
          I'm a motivated problem solver with a passion for clean code. I
          transitioned from a Service Desk Analyst role at HCL Technologies to
          full-time coding, specializing in the MERN stack. Currently, I work as
          a Product Engineer at Borderfree, enhancing the REVO web app. Coding
          is my creative outlet as I continue to explore my passions.
        </p>
        <Link to="/contact">
          <Button className="port-contact-btn" variant="outlined">Contact</Button>
        </Link>
      </div>
      <div className="port-about-right">
        <div className="port-about-img-container">
          <div className="port-about-img-top">
            <div>
            <img src={Aws} />
            <img src={cssicon} />
            <img src={github} />
            <img src={htmlicon} />
            </div>
            <div>
            <img src={jsicon} />
            <img src={mongo} />
            <img src={MUI} />
            <img src={nodejs} />
            </div>
            <div>
            <img src={python} />
            <img src={reacticon} />
            <img src={reduxicon} />
            <img src={visualstudio} />
            </div>
            <div>
            <img src={WebRTC} />   
            </div>  
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
