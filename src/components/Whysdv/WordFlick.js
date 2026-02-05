import React, { useEffect, useState, useMemo } from "react";

const WordFlick = () => {
  const words = useMemo(
    () => [
      "Explore world of Robotics",
      "Hands on learning",
      "Collaborate and grow together",
      "Build , learn and have fun.",
    ],
    []
  );

  const [part, setPart] = useState("");
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);

  const skipDelay = 15;
  const speed = 70;

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset < words[index].length) {
          setOffset(offset + 1);
        } else if (skipCount < skipDelay) {
          setSkipCount(skipCount + 1);
        } else {
          setForwards(false);
          setSkipCount(0);
        }
      } else {
        if (offset > 0) {
          setOffset(offset - 1);
        } else {
          setForwards(true);
          setIndex((index + 1) % words.length);
        }
      }

      setPart(words[index].substring(0, offset));
    }, speed);

    return () => clearInterval(interval);
  }, [index, offset, forwards, skipCount, words]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ color: "white", fontSize: "2.4rem" }}>{part}</div>
    </div>
  );
};

export default WordFlick;
