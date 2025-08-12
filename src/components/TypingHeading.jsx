import { useState, useEffect } from "react";

function TypingHeading({ text, speed = 100, className }) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((c) => !c);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <h1 className={className}>
      {displayed}
      <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </h1>
  );
}

export default TypingHeading;
