import React, { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

const Banner = () => {
  // Motion values
  const x = useMotionValue(0);

  // Scroll tracking
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 120,
    stiffness: 900,
    mass: 0.2
  });

  // Measure text width once
  const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  useLayoutEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, []);

  // Movement config
  const baseVelocity = 100; // px/sec
  const direction = useMotionValue(1); // 1 = right→left, -1 = left→right

  useAnimationFrame((_, delta) => {
    if (delta > 100 || textWidth === 0) return;

    const v = smoothVelocity.get();

    // Decide target direction from scroll
    let targetDir = direction.get();
    if (v < -30) targetDir = 1;
    else if (v > 30) targetDir = -1;

    // Smooth direction interpolation
    const currentDir = direction.get();
    direction.set(currentDir + (targetDir - currentDir) * 0.08);

    // Move
    let nextX =
      x.get() + direction.get() * baseVelocity * (delta / 1000);

    // Seamless wrap
    if (nextX <= -textWidth) nextX += textWidth;
    if (nextX >= 0) nextX -= textWidth;

    x.set(nextX);
  });

  const text =
    "----- SELF-DRIVING VEHICLE WORKSHOP 7.0 SAEINDIA NIT DURGAPUR ----- ";

  return (
    <div className="relative mt-10 overflow-hidden bg-red-600 text-white py-6">
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        style={{ x }}
      >
        {[...Array(6)].map((_, i) => (
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
