import React, { useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo.svg";
import { MdDownload } from "react-icons/md";

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

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
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#projects">PROJECT</a>
          </li>
          <li>
            <a href="#connect">CONNECT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
