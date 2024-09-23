import React from "react";
import PropTypes from "prop-types";

const ImageCard = ({ imageSrc, onButtonClick }) => {
  return (
    <div className="image-card w-[300px] h-[450px] bg-cover bg-no-repeat rounded-lg flex flex-col items-center justify-end pb-8 shadow-lg">
      {/* Image Placeholder */}
      <div className="w-[250px] h-[300px] bg-black mt-2 flex items-center justify-center rounded-md">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Placeholder"
            className="w-full h-full object-cover rounded-md"
          />
        ) : null}
      </div>

      {/* View More Button */}
      <button
        onClick={onButtonClick}
        className="mt-12 text-3xl text-black texttitle"
      >
        View more
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
