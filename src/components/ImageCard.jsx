import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const ImageCard = ({ event }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/event-details",{state:event}); // Navigate to the EventDetails page
  };
  return (
    <div className="image-card w-full max-w-[400px] h-auto bg-cover bg-no-repeat rounded-lg flex flex-col items-center justify-end pb-6 shadow-2xl mx-4">
      {/* Image Placeholder */}
      <div className="w-full h-[auto] aspect-w-3 aspect-h-4 bg-black mt-2 flex items-center justify-center rounded-md overflow-hidden hover:cursor-pointer" onClick={handleButtonClick}>
        {event && event.imageLink ? (
            <img
            src={event.imageLink} 
              alt="Placeholder"
              className="w-full h-full object-cover rounded-md"
            />
        ) : null}
      </div>

      {/* View More Button */}
      <button
        onClick={handleButtonClick}
        className="texttitle mt-4 text-2xl text-black lg:text-3xl"
      >
        {event.name}
      </button>
    </div>
  );
};

ImageCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
};

ImageCard.defaultProps = {
  onButtonClick: () => alert("View more clicked!"),
};

export default ImageCard;
