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
      <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center lg:justify-start body3">
        <div className="w-full lg:w-auto lg:pl-12">
          <div className="texthead text-6xl sm:text-7xl md:text-8xl tracking-[0.25em] text-left lg:text-9xl w-full p-4">
            Events
          </div>
        </div>
      </div>

      {/* Scrollable Image Card Section */}
      <div className="flex overflow-x-auto space-x-4 px-4 py-12 scrollbar-hide snap-x snap-mandatory">
        {images.map((imageSrc, index) => (
          <div
            key={index}
            className="snap-center flex-none w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%] px-2"
          >
            <ImageCard
              imageSrc={imageSrc}
              onButtonClick={() =>
                console.log(`View more clicked on Image ${index + 1}`)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;
