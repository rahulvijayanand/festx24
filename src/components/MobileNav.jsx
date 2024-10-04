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
      {/* Conditionally render Hamburger Icon when navbar is closed */}
      {!isOpen && (
        <img
          src={hamburgerIcon}
          alt="Menu"
          className="fixed top-5 right-5 w-14 h-14 cursor-pointer z-50"
          onClick={toggleNavbar}
        />
      )}

      {/* Navbar Overlay */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#f4e0c6] shadow-lg flex flex-col p-5 z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <img
          src={closeIcon}
          alt="Close"
          className="absolute top-5 right-5 w-14 h-14 cursor-pointer"
          onClick={toggleNavbar}
        />

        {/* Navigation Links */}
        <nav className="mt-12 flex flex-col space-y-6 pt-5">
          <a href="/" className="textnav text-black text-lg font-semibold">
            Home
          </a>
          <a href="/events" className="textnav text-black text-lg font-semibold">
            Events
          </a>
          <a href="/contact" className="textnav text-black text-lg font-semibold">
            Contact Us
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
