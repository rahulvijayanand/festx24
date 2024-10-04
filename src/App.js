import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";

import Home from "./pages/Home";
import Event from "./pages/Event";
import Contact from "./pages/Contact";
import EventDetails from "./pages/EventDetails";
import Transition from "./components/Transition"; // Import the Transition component

function App() {
  // State to determine if the screen is mobile or not
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation(); // Get the current location for routing

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
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route
              path="/"
              element={
                <motion.div>
                  <Transition />
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/events"
              element={
                <motion.div>
                  <Transition />
                  <Event />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div>
                  <Transition />
                  <Contact />
                </motion.div>
              }
            />
            <Route
              path="/event-details"
              element={
                <motion.div>
                  <Transition />
                  <EventDetails />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
