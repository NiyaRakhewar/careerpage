import React from "react";
import "./footer.css";
import logo from "../../Images/logo.jpg";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner-container">
        <div className="footer-logo-container">
          <img src={logo} alt="" className="footer-logo" />
        </div>

        <div className="footer-options-container">
          <p>Careers</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>security</p>
        </div>

        <div className="footer-social-container">
          <BsTwitter className="footer-icn" />
          <BsLinkedin className="footer-icn" />
          <BsYoutube className="footer-icn" />
          <BsFacebook className="footer-icn" />
        </div>
      </div>
    </div>
  );
};
