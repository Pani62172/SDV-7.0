import React, { useState } from "react";
import './Gallery.css';

import SAE1 from "../ASSETS/GalleryImages/SDVIMG1.JPG";
import SAE2 from "../ASSETS/GalleryImages/SDVIMG2.JPG";
import SAE3 from "../ASSETS/GalleryImages/SDVIMG3.JPG";
import SAE4 from "../ASSETS/GalleryImages/SDVIMG4.JPG";
import SAE5 from "../ASSETS/GalleryImages/SDVIMG5.JPG";
import SAE6 from "../ASSETS/GalleryImages/SDVIMG6.JPG";
import SAE7 from "../ASSETS/GalleryImages/SDVIMG7.JPG";
import SAE8 from "../ASSETS/GalleryImages/SDVIMG8.JPG";
import SAE9 from "../ASSETS/GalleryImages/SDVIMG9.JPG";
import SAE10 from "../ASSETS/GalleryImages/SDVIMG10.JPG";
import SAE11 from "../ASSETS/GalleryImages/SDVIMG11.JPG";
import SAE12 from "../ASSETS/GalleryImages/SDVIMG12.JPG";
import SAE13 from "../ASSETS/GalleryImages/SDVIMG13.JPG";
import SAE14 from "../ASSETS/GalleryImages/SDVIMG14.JPG";
import SAE15 from "../ASSETS/GalleryImages/SDVIMG15.JPG";
import SAE16 from "../ASSETS/GalleryImages/SDVIMG16.JPG";
import SAE17 from "../ASSETS/GalleryImages/SDVIMG17.JPG";
import SAE18 from "../ASSETS/GalleryImages/SDVIMG18.JPG";
import SAE19 from "../ASSETS/GalleryImages/SDVIMG19.JPG";
import SAE20 from "../ASSETS/GalleryImages/SDVIMG20.JPG";
import SAE21 from "../ASSETS/GalleryImages/SDVIMG21.JPG";
import SAE22 from "../ASSETS/GalleryImages/SDVIMG22.JPG";
import SAE23 from "../ASSETS/GalleryImages/SDVIMG23.JPG";
import SAE24 from "../ASSETS/GalleryImages/SDVIMG24.JPG";
import SAE25 from "../ASSETS/GalleryImages/SDVIMG25.JPG";
import SAE26 from "../ASSETS/GalleryImages/SDVIMG26.JPG";
import SAE27 from "../ASSETS/GalleryImages/SDVIMG27.JPG";
import SAE28 from "../ASSETS/GalleryImages/SDVIMG28.JPG";
import SAE29 from "../ASSETS/GalleryImages/SDVIMG29.JPG";
import SAE30 from "../ASSETS/GalleryImages/SDVIMG30.JPG";

const Gallery = () => {
  const images = [
    SAE1, SAE2, SAE3, SAE4, SAE5, SAE6, SAE7, SAE8, SAE9, SAE10,
    SAE11, SAE12, SAE13, SAE14, SAE15, SAE16, SAE17, SAE18, SAE19, SAE20,
    SAE21, SAE22, SAE23, SAE24, SAE25, SAE26, SAE27, SAE28, SAE29, SAE30
  ];

  const [expandedImage, setExpandedImage] = useState(null);

  const handleExpandImage = (img) => {
    setExpandedImage(img);
  };

  const handleCloseExpand = () => {
    setExpandedImage(null);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title ">Explore the SDV Gallery</h1>
      <br/><br/>
      {expandedImage && (
        <div className="expanded-view">
          <div className="overlay" onClick={handleCloseExpand}></div>
          <img src={expandedImage} alt="Expanded View" className="expanded-image" />
          <button
            className="close-btn"
            aria-label="Close expanded view"
            onClick={handleCloseExpand}
          >
            ×
          </button>
        </div>
      )}

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => handleExpandImage(img)}
          >
            <img src={img} alt={`Image ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
