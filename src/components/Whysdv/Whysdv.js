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
        
        <p>Welcome to SDV 7.0, a space designed to help you grow your skills and ideas beyond just building projects. In this 6th edition, you'll collaborate with peers and learn from experienced seniors while working on hands-on projects like manually controlled bots, line-following bots, obstacle-avoiding bots, and cruise control systems. Dive into robotics, IoT, and Arduino programming through practical learning that encourages creativity, collaboration, and real-world skill development—shaping not just projects, but your future. You will also gain exposure to problem-solving methodologies, system design thinking, and efficient debugging techniques essential for modern engineering challenges. SDV 7.0 encourages innovation through teamwork, mentorship, and experimentation, helping you build confidence, technical expertise, and a strong foundation for future academic, research, and industry opportunities. Participants will also engage in interactive workshops, technical discussions, and mini challenges that enhance analytical thinking and practical implementation skills, preparing them to adapt to evolving technologies and contribute effectively to multidisciplinary engineering environments.
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
