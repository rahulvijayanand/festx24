import React, { useState, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import hat from "../assets/hat.png";
import cam from "../assets/camera.png";
import pic from "../assets/pic.png";

const Navbar = () => {
  const navRef = useRef();
  const [navs, setNav] = useState(false);

  const handleNav = () => {
    setNav(!navs);
  };

  const handleLinkClick = () => {
    setNav(false);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="gradient fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-auto bg-opacity-90 shadow-2xl rounded-2xl px-20 py-4 flex justify-between items-center">
      {/* Desktop Menu */}
      <nav
        className={`hidden lg:flex space-x-10 text-lg font-semibold text-black`}
      >
        <Link
          to="/"
          className="textnav zoom p-3 transition-transform duration-300 mx-auto hover:scale-150 text-lg"
          onClick={() => scrollToTop()}
        >
          Home
        </Link>
        <Link
          to="/events"
          className="textnav zoom p-3 transition-transform duration-300 mx-auto hover:scale-150 text-lg"
          onClick={() => scrollToTop()}
        >
          Events
        </Link>
        <Link
          to="/contact"
          className="textnav zoom p-3 transition-transform duration-300 mx-auto hover:scale-150 text-lg"
          onClick={() => scrollToTop()}
        >
          Contact Us
        </Link>
      </nav>

      <div className="hidden lg:block">
        <img
          className="absolute h-[120px] bottom-8 -right-16 mx-auto transition-transform duration-300 transform hover:rotate-12 hover:translate-x-4 hover:translate-y-[-10px] pointer-events-auto"
          src={hat} // Ensure this is the correct source for your hat image
          alt="/"
        />
      </div>

      <div className="hidden lg:block group">
        <div className="absolute h-[60px] top-12 -left-7 z-10 pointer-events-auto">
          <img className="h-full" src={cam} alt="/" />
        </div>
        <img
          className="absolute h-[35px] top-24 -left-3 transition-transform duration-300 transform -translate-y-full group-hover:translate-y-0 group-hover:opacity-100"
          src={pic}
          alt="/"
        />
      </div>

      {/* Mobile Hamburger Icon */}
      <div onClick={handleNav} className="lg:hidden block ml-4">
        {navs ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          navs
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#f5e0c0] bg-opacity-90 ease-in-out duration-700 lg:hidden"
            : "fixed left-[-100%] top-0 w-[60%] h-full border-r border-gray-900 bg-[#f5e0c0] bg-opacity-90 ease-in-out duration-700 lg:hidden"
        }
      >
        <nav className="text-lg font-semibold p-4 flex flex-col">
          <Link
            to="/"
            className="p-4 border-b border-gray-300"
            onClick={() => {
              handleLinkClick();
              scrollToTop();
            }}
          >
            HOME
          </Link>
          <Link
            to="/events"
            className="p-4 border-b border-gray-300"
            onClick={() => {
              handleLinkClick();
              scrollToTop();
            }}
          >
            EVENTS
          </Link>
          <Link
            to="/contact"
            className="p-4"
            onClick={() => {
              handleLinkClick();
              scrollToTop();
            }}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
