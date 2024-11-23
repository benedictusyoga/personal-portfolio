import { useState } from "react";
import "./HoverText.css";

interface HoverTextProps {
  text: string;
}

const HoverText = ({ text }: HoverTextProps) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const splitText = text.split("");

  return (
    <h1 className="hover-text">
      {splitText.map((char, index) => (
        <h1
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{
            color:
              hoverIndex !== null && index === hoverIndex
                ? "var(--accent-color)"
                : hoverIndex !== null &&
                  (index === hoverIndex - 1 || index === hoverIndex + 1)
                ? "#d987dc"
                : "var(--tertiary-color)",
            fontWeight:
              hoverIndex !== null && index === hoverIndex
                ? "800"
                : hoverIndex !== null &&
                  (index === hoverIndex - 1 || index === hoverIndex + 1)
                ? "600"
                : "normal",
            transition: "font-weight 0.3s ease, color 0.3s ease",
          }}
        >
          {char === " " ? "\u00A0" : char} {/* Handle spaces */}
        </h1>
      ))}
    </h1>
  );
};

export default HoverText;
