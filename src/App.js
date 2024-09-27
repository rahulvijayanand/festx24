// src/App.js
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";

import Home from "./pages/Home";
import Event from "./pages/Event";
import Contact from "./pages/Contact";

function App() {
  // State to determine if the screen is mobile or not
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Show Navbar for desktop view and MobileNav for mobile view */}
      {isMobile ? <MobileNav /> : <Navbar />}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Event />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
