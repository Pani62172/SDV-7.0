import React, { useRef, useEffect } from "react";
import WordFlick from "./WordFlick";
import "./Whysdv.css";

const Whysdv = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="why-container">
      <div className="why-heading">
        <h1>The Vision Behind SDV</h1>
      </div>
      <div>
        <WordFlick />
      </div>

      <div className="media-right">
        <div className="media-container h-auto w-full">
          <video 
            ref={videoRef}
            src="./sdvaboutvid.mp4" 
            autoPlay 
            loop 
            muted
            className="w-full h-auto"
          />
        </div>
        <br />
        
        <p>Welcome to SDV 7.0, a platform to grow beyond basic projects through collaboration, mentorship, and hands-on learning. In this edition, you’ll work with peers and seniors on projects like manually controlled bots, line-following bots, obstacle-avoiding bots, and cruise control systems while exploring robotics, IoT, and Arduino programming.

The program focuses on creativity, teamwork, and real-world problem solving, helping you develop system design thinking and effective debugging skills essential for modern engineering. Through interactive workshops, technical discussions, and mini challenges, you’ll strengthen your analytical and practical abilities, build confidence, and gain a solid foundation for future academic, research, and industry opportunities.
        </p>
     
        <h3>
          An event where creativity meets technology, allowing students to
          design, build, and test their own self-driving car prototypes.
        </h3>
      </div>
    </div>
  );
};

export default Whysdv;
