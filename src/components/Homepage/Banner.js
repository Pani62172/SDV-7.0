import React, { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame
} from "framer-motion";

const Banner = () => {
  // Motion value for horizontal position - start off-screen left
  const x = useMotionValue(0);

  // Measure text width once
  const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  useLayoutEffect(() => {
    if (textRef.current) {
      const width = textRef.current.offsetWidth;
      setTextWidth(width);
      // Start with text off-screen to the left
      x.set(-width);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Movement config - left to right infinite scroll
  const baseVelocity = 80; // positive = left to right (px/sec) - smooth speed

  useAnimationFrame((_, delta) => {
    if (delta > 100 || textWidth === 0) return;

    // Move continuously from left to right
    let nextX = x.get() + baseVelocity * (delta / 1000);

    // Seamless wrap - when text scrolls fully right, reset to left
    if (nextX >= 0) {
      nextX -= textWidth;
    }

    x.set(nextX);
  });

  const text =
    "| SELF-DRIVING VEHICLE WORKSHOP 7.0 SAEINDIA NIT DURGAPUR | ";

  return (
    <div className="relative mt-10 overflow-hidden bg-red-500 text-black py-6">
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        style={{ x }}
      >
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            ref={i === 0 ? textRef : null}
            className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest uppercase font-stardos"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Banner;