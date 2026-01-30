import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = Array.from(
    { length: 30 },
    (_, i) => `/GalleryImages/SDVIMG${i + 1}.JPG`
  );

  const [expandedImage, setExpandedImage] = useState(null);

  const openImage = (img) => {
    setExpandedImage(img);
  };

  const closeImage = () => {
    setExpandedImage(null);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Explore the SDV Gallery</h1>

      {expandedImage && (
        <div className="expanded-view">
          <div
            className="overlay"
            onClick={closeImage}
            aria-hidden="true"
          ></div>

          <img
            src={expandedImage}
            alt="Expanded SDV event photograph"
            className="expanded-image"
          />

          <button
            className="close-btn"
            onClick={closeImage}
            aria-label="Close expanded image"
          >
            ×
          </button>
        </div>
      )}

      <div className="gallery-grid">
        {images.map((img, index) => (
          <button
            key={img}
            className="gallery-item"
            onClick={() => openImage(img)}
            aria-label={`View SDV gallery image ${index + 1}`}
          >
            <img
              src={img}
              alt={`SDV gallery ${index + 1}`}
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
