import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";

export default function Gallery({images}) {


  // Responsive breakpoints for the masonry grid
  const breakpointColumns = {
    default: 4,
    1100: 3,
    768: 2,
    500: 1
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">      
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex w-full -ml-4"
        columnClassName="pl-4 bg-clip-padding"
      >
        {images.slice(0, 20).map((image,index) => (
          <div 
            key={index}
            className={`mb-4 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${
              image.width === 2 ? 'col-span-2' : 'col-span-1'
            }`}
          >
            <img
              src={image}
              alt={"No Image"}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}