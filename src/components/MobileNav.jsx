import React, { useState } from "react";
import hamburgerIcon from "../assets/hamburger.png";
import closeIcon from "../assets/close.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Icon */}
      <img
        src={hamburgerIcon}
        alt="Menu"
        className="fixed top-5 right-5 w-8 h-8 cursor-pointer z-50"
        onClick={toggleNavbar}
      />

      {/* Navbar Overlay */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-[#f4e0c6] shadow-lg flex flex-col p-5 z-40 transition-transform duration-300">
          <img
            src={closeIcon}
            alt="Close"
            className="absolute top-5 right-5 w-8 h-8 cursor-pointer"
            onClick={toggleNavbar}
          />
          <nav className="mt-12 flex flex-col space-y-4">
            <a href="/home" className="text-black text-lg font-semibold">
              Home
            </a>
            <a href="/events" className="text-black text-lg font-semibold">
              Events
            </a>
            <a href="/contact" className="text-black text-lg font-semibold">
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
