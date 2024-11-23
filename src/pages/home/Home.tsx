import { useState, useEffect } from "react";
import "./Home.css";
import { delay, motion } from "framer-motion";

const Home = () => {
  const words = [
    "Software Engineering",
    "Web Development",
    "UI/UX Design",
    "Frontend Development",
  ];
  const [currIndex, setCurrIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [text, setText] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (text.length < words[currIndex].length) {
        timeout = setTimeout(() => {
          setText(words[currIndex].slice(0, text.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      if (text.length > 0) {
        setTimeout(() => {
          setText(text.slice(0, -1));
        }, 50);
      } else {
        setCurrIndex((currIndex + 1) % words.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, typing, currIndex, words]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1200px)"); // Match your CSS media query
    const handleMediaChange = () => setIsSmallScreen(mediaQuery.matches);
    handleMediaChange(); // Set initial state
    mediaQuery.addEventListener("change", handleMediaChange); // Listen for changes
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const leftTextVariants = {
    hidden: {
      y: isSmallScreen ? 50 : 50,
      opacity: 0,
      scale: isSmallScreen ? 1.3 : 1,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: isSmallScreen ? 1.3 : 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightTextVariants = {
    hidden: {
      y: isSmallScreen ? 50 : 50,
      opacity: 0,
      scale: isSmallScreen ? 1.3 : 1,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: isSmallScreen ? 1.3 : 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 1 },
    },
  };

  return (
    <div className="home-container" id="home">
      <motion.div
        className="left-text"
        initial="hidden"
        animate="visible"
        variants={leftTextVariants}
      >
        <h1>Hello There! I'm</h1>
        <span>Yoga</span>
      </motion.div>
      <motion.div
        className="right-text"
        initial="hidden"
        animate="visible"
        variants={rightTextVariants}
      >
        <p>
          I am a programmer with a specialization in <br />
          <span className="typewriter">{text}</span>.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
