import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-loc-icon">
            <p>
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              New Delhi, India - 110068
            </p>
          </div>
          <div className="phone">
            <p>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 836 895 4192
            </p>
          </div>
          <div className="phone">
            <p>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              yashdeeprathi09@gmail.com
            </p>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            Hi this is Yashdeep Rathi. A software developer by profession and a
            gymrat by heart. I solve tech problems.
          </p>
          <div className="social">
            <a href="https://twitter.com/roroNoaYash">
            <FaTwitter
              size={20}
              style={{ color: "white", marginRight: "1rem" }}
            />
            </a>
            <a href="https://www.linkedin.com/in/yashdeeprathi">
            <FaLinkedin
              size={20}
              style={{ color: "white", marginRight: "1rem" }}
            />
            </a>
            <a href="https://github.com/strawhatYashdeepRathi">
            <FaGithub
              size={20}
              style={{ color: "white", marginRight: "1rem" }}
            />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
