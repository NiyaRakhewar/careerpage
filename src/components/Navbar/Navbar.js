import React from "react";
import "./navbar.css";
import logo from "../../Images/logo.jpg";

import { FaBars } from "react-icons/fa";
export const Navbar = () => {
  return (
    <div className="navbar-outer-container">
      <div className="navbar-inner-container">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
          <div className="bar-icon-container">
            <FaBars />
          </div>
          <div className="nav-links-container">
            <div className="home-container">HOME</div>
            <div className="about-us-container">ABOUT US</div>
            <div className="products-container">PRODUCTS</div>
            <div className="resources">RESOURCES</div>
            <div className="contact-us-container">CONTACT US</div>
          </div>
        </div>
      </div>
    </div>
  );
};
