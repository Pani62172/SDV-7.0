import React from "react";
import WordFlick from "./WordFlick";
import "./Whysdv.css";
import sdvImage from '../ASSETS/sdvaboutimg.jpg';
const photos = [
  { src: "sdv1.jpg", alt: "Photo 1" },
  { src: "sdv12.jpg", alt: "Photo 2" },
  { src: "sdv2.jpg", alt: "Photo 2" },
  { src: "sdv13.jpg", alt: "Photo 9" },
  { src: "sdv3.jpg", alt: "Photo 3" },
  { src: "sdv14.jpg", alt: "Photo 10" },
  { src: "sdv4.jpg", alt: "Photo 4" },
  { src: "sdv15.jpg", alt: "Photo 11" },
  { src: "sdv5.jpg", alt: "Photo 5" },
  { src: "sdv16.jpg", alt: "Photo 12" },
  { src: "sdv6.jpg", alt: "Photo 6" },
  { src: "sdv17.jpg", alt: "Photo 13" },
  { src: "sdv7.jpg", alt: "Photo 7" },
  { src: "sdv18.jpg", alt: "Photo 14" },
  { src: "sdv8.jpg", alt: "Photo 15" },
  { src: "sdv19.jpg", alt: "Photo 20" },
  { src: "sdv9.jpg", alt: "Photo 16" },
  { src: "sdv20.jpg", alt: "Photo 21" },
  { src: "sdv10.jpg", alt: "Photo 17" },
  { src: "sdv21.jpg", alt: "Photo 22" },
  { src: "sdv11.jpg", alt: "Photo 18" },
  { src: "sdv22.jpg", alt: "Photo 19" },
];

const Whysdv = () => {
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
          <img src={sdvImage} alt="SDV preview" className="w-full max-w-md mx-auto h-auto" />
          </div>
          <br />
        <p>
          Welcome to SDV 7.0, a space designed to help you grow your skills and ideas beyond just building projects. In this 6th edition, you’ll collaborate with peers and learn from experienced seniors while working on hands-on projects like manually controlled bots, line-following bots, obstacle-avoiding bots, and cruise control systems. Dive into robotics, IoT, and Arduino programming through practical learning that encourages creativity, collaboration, and real-world skill development—shaping not just projects, but your future.
        </p>

<br />
{/* <h1 className="text-6xl upcoming-details">Exciting Details Coming Soon !!!</h1> */}
     
        <h3>
          An event where creativity meets technology, allowing students to
          design, build, and test their own self-driving car prototypes.
        </h3>
      </div>
    </div>
  );
};

export default Whysdv;
