import { useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo.svg";
import { MdDownload } from "react-icons/md";
import { FaFileArrowDown } from "react-icons/fa6";

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
              DOWNLOAD CV
            </span>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="ProfessionalCV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Professional_CV.pdf"
                  >
                    Professional CV
                  </a>
                  <FaFileArrowDown size={22} />
                </li>
                <li>
                  <a
                    href="CreativeCV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Creative_CV.pdf"
                  >
                    Creative CV
                  </a>
                  <FaFileArrowDown size={22} />
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
            <a href="#projects">PROJECTS</a>
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
