import React from "react";
import { Link } from "react-router-dom";
import hat from "../assets/hat.png";
import cam from "../assets/camera.png";
import pic from "../assets/pic.png";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="gradient fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-auto bg-opacity-90 shadow-2xl rounded-2xl px-20 py-4 flex justify-between items-center">
      <nav
        className={`hidden lg:flex space-x-10 text-lg font-semibold text-black`}
      >
        <Link
          to="/"
          className="textnav zoom p-3 transition-transform duration-300 mx-auto hover:scale-150 font-bold text-2xl"
          onClick={() => scrollToTop()}
        >
          Home
        </Link>
        <Link
          to="/events"
          className="textnav zoom p-3 transition-transform duration-300 mx-auto hover:scale-150 font-bold text-2xl"
          onClick={() => scrollToTop()}
        >
          Events
        </Link>
        <Link
          to="/contact"
          className="textnav zoom p-3 transition-transform duration-300 mx-auto hover:scale-150 font-bold text-2xl"
          onClick={() => scrollToTop()}
        >
          Contact Us
        </Link>
      </nav>

      {/* Desktop Hat and Image Animations */}
      <div className="hidden lg:block">
        <img
          className="absolute h-[120px] bottom-8 -right-16 mx-auto transition-transform duration-300 transform hover:rotate-12 hover:translate-x-4 hover:translate-y-[-10px] pointer-events-auto"
          src={hat}
          alt="/"
        />
      </div>

      <div className="hidden lg:block group">
        <div className="absolute h-[60px] top-12 -left-7 z-10 pointer-events-auto">
          <img className="h-full" src={cam} alt="/" />
        </div>
        <img
          className="absolute h-[35px] top-24 -left-3 transition-transform duration-300 transform -translate-y-full group-hover:translate-y-0 group-hover:opacity-100 pointer-events-auto"
          src={pic}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Navbar;
