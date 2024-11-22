import { useState, useEffect } from "react";
import "./Home.css";

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

  return (
    <div className="home-container" id="home">
      <div className="left-text">
        <h1>Hello There! I'm</h1>
        <span>Yoga</span>
      </div>
      <div className="right-text">
        <p>
          I am a programmer with a specialization in <br />
          <span className="typewriter"> {text}</span>.
        </p>
      </div>
    </div>
  );
};

export default Home;
