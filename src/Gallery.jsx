import React from "react";

const Gallery = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative">
          <img
            src={image}
            alt={`Gallery ${index}`}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
