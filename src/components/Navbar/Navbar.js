import React, { useState } from "react";
import "./navbar.css";
import logo from "../../Images/logo.jpg";
import { FaBars } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";
export const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="navbar-outer-container">
      <div className="navbar-inner-container">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
          <div className="bar-icon-container">
            <FaBars onClick={() => setShow(true)} />
          </div>

          <div
            className={show ? "nav-column-container" : "nav-links-container"}
          >
            <div className="nav-links-inner-container">
              <IoIosRemoveCircle
                className="remove-icn"
                onClick={() => setShow(false)}
              />

              <div className="home-container">HOME</div>
              <div className="about-us-container">ABOUT US</div>
              <div className="products-container">PRODUCTS</div>
              <div className="resources">RESOURCES</div>
              <div className="contact-us-container">CONTACT US</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
