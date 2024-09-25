import React from "react";
import ImageCard from "../components/ImageCard"; // Assuming ImageCard component is imported

function Event() {
  // Array of image URLs
  const images = [
    "https://via.placeholder.com/350x400?text=Image+1",
    "https://via.placeholder.com/350x400?text=Image+2",
    "https://via.placeholder.com/350x400?text=Image+3",
    "https://via.placeholder.com/350x400?text=Image+4",
    "https://via.placeholder.com/350x400?text=Image+5",
    "https://via.placeholder.com/350x400?text=Image+6",
    "https://via.placeholder.com/350x400?text=Image+7",
    "https://via.placeholder.com/350x400?text=Image+8",
  ];

  return (
    <div>
      {/* Section for the "Events" header */}
      <div className="min-h-screen bg-cover bg-center bg-no-repeat items-center justify-center">
        <div className="body3 w-full flex items-center justify-center">
          <div className="texthead text-9xl tracking-[0.25em] text-left w-full pl-14">
            Events
          </div>
        </div>
      </div>

      {/* Scrollable Image Card Section */}
      <div className="flex overflow-x-scroll space-x-20 px-8 py-12 scrollbar-hide">
        {images.map((imageSrc, index) => (
          <ImageCard
            key={index}
            imageSrc={imageSrc}
            onButtonClick={() =>
              console.log(`View more clicked on Image ${index + 1}`)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Event;
