import React, { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame
} from "framer-motion";

const Banner = () => {
  const x = useMotionValue(0);

  const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  useLayoutEffect(() => {
    if (textRef.current) {
      const width = textRef.current.offsetWidth;
      setTextWidth(width);
      x.set(-width);
    }
  }, []);
  const baseVelocity = -80;

  useAnimationFrame((_, delta) => {
    if (delta > 100 || textWidth === 0) return;
    let nextX = x.get() + baseVelocity * (delta / 1000);

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