import { useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo.svg";
import { MdDownload } from "react-icons/md";
import { FaFileArrowDown } from "react-icons/fa6";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    text: "",
  });
  const handleMouseEnterTT = (e: React.MouseEvent, text: string) => {
    const { clientX, clientY } = e;
    setTooltip({ visible: true, x: clientX, y: clientY, text });
  };

  const handleMouseMoveTT = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setTooltip((prev) => ({ ...prev, x: clientX, y: clientY }));
  };

  const handleMouseLeaveTT = () => {
    setTooltip({ visible: false, x: 0, y: 0, text: "" });
  };

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
                    <div className="cv-text">
                      Professional CV <FaFileArrowDown size={20} />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="CreativeCV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Creative_CV.pdf"
                  >
                    <div className="cv-text">
                      Creative CV <FaFileArrowDown size={20} />
                    </div>
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
        <ul className="navbar-anchors">
          {[
            { id: "home", text: "Go to the homepage" },
            { id: "about", text: "Learn about me" },
            { id: "projects", text: "See my projects" },
            { id: "connect", text: "Connect with me" },
          ].map((item) => (
            <li
              key={item.id}
              onMouseEnter={(e) => handleMouseEnterTT(e, item.text)}
              onMouseMove={handleMouseMoveTT}
              onMouseLeave={handleMouseLeaveTT}
            >
              <a href={`#${item.id}`}>{item.id.toUpperCase()}</a>
            </li>
          ))}
        </ul>
        {tooltip.visible && (
          <div
            className="tooltip"
            style={{ left: tooltip.x + 80, top: tooltip.y + 50 }}
          >
            {tooltip.text}
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
