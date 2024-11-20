import React, { useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo.svg";
import { MdDownload } from "react-icons/md";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle dropdown visibility on hover
  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#home">
            <img src={logo} alt="Yoga's Logo" width={50} />
          </a>
          <div
            className="download-btn"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="download-icon-btn">
              <MdDownload size={28} />
            </button>
            <span className={`btn-text ${showDropdown ? "visible" : ""}`}>
              Download CV
            </span>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    Professional CV
                  </a>
                </li>
                <li>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    Creative CV
                  </a>
                </li>
              </ul>
            )}
          </div>
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
