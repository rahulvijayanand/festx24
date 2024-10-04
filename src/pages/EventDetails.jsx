import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import ButtonImage from "../assets/button.png";
import Arrow from "../assets/arrow.png";

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay,
        duration: 0.5, // Duration of the animation
      },
    },
  };
};

const EventDetails = () => {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to control form modal visibility
  const location = useLocation();
  const { imageLink, name, description, mode, rounds, genre, link } =
    location.state || {};

  const handleRegisterClick = () => {
    // Open modal if form exists, else open link
    if (link) {
      window.open(link, "_blank"); // Open the form link in a new tab
    } else {
      setIsFormOpen(true); // Show form in a modal
    }
  };

  const closeModal = () => {
    setIsFormOpen(false); // Close form modal
  };

  return (
    <div>
      <div className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center lg:justify-center body3">
        <div className="flex w-full">
          {/* Left Div with Image */}
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            animate="show"
            className="w-1/2 flex items-center justify-center"
          >
            <img
              src={imageLink} // Use image link from props
              alt="Event"
              className="rounded-lg shadow-lg max-w-full h-[500px]"
            />
          </motion.div>

          {/* Right Div with Glassmorphism Box */}
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            animate="show"
            className="w-1/2 flex flex-col items-center justify-center p-6"
          >
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-lg w-full max-w-lg h-[500px]">
              <h2 className="text-4xl font-bold mb-4 text-center text-black texthead">
                {name}
              </h2>
              <p
                className="texttitle text-justify lg:text-2xl lg:mt-20 md:text-xl sm:text-1xl mt-10 overflow-y-auto h-[300px]"
                style={{ overflowY: "auto" }} // Scrollable description
              >
                {description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Register Button */}
        <button
          className="relative flex items-center justify-center text-white text-xl sm:text-2xl font-bold group mt-6"
          onClick={handleRegisterClick}
        >
          <img
            src={ButtonImage}
            alt="Button"
            className="w-[250px] sm:w-[340px] h-[70px] sm:h-[90px] rounded-2xl transition-all duration-300 group-hover:brightness-150 group-hover:sepia"
          />
          <span className="absolute flex items-center text-white transition-all duration-300 group-hover:text-black">
            <span className="texttitle mr-2">Register</span>
            <img
              src={Arrow}
              alt="arrow"
              className="w-[20px] sm:w-[25px] h-[20px] sm:h-[25px] mt-1 ml-3 transition-all duration-300 transform group-hover:rotate-45 group-hover:invert"
            />
          </span>
        </button>

        {/* Modal for the form */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-lg w-full">
              <h2 className="text-2xl font-bold mb-4">Register for the Event</h2>
              {/* You can replace this iframe with a form */}
              <iframe
                src={link}
                title="Registration Form"
                className="w-full h-[400px] border-none"
              ></iframe>
              <button
                className="mt-4 text-white bg-blue-500 px-4 py-2 rounded-lg"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
