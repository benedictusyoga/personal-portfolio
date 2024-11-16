import React from "react";
import "./NavBar.css";
import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#home">
            <img src={logo} alt="Yoga's Logo" width={50} />
          </a>
        </div>
        <ul className="navbar-anchors">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#connect">Connect</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
