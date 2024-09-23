import React from "react";
import ImageCard from "../components/EventComp";

function Event() {
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

      {/* Image Card Section */}
      <div className="flex justify-center my-12">
        <ImageCard
          imageSrc="" // Empty or pass actual image URL like './assets/sample-event.jpg'
          onButtonClick={() => console.log("View more clicked!")}
        />
      </div>
    </div>
  );
}

export default Event;
