import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/festxlogo.png";
import SSEC from "../assets/ssec.png";
import CSBS from "../assets/csbslogo.png";
import ButtonImage from "../assets/button.png";
import Arrow from "../assets/arrow.png";
import FrameImage from "../assets/doublex.png";
import LeftFrame from "../assets/doublexleft.png";
import RightFrame from "../assets/doublexright.png";
import MobileBackground from "../assets/mobileframe.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  
  const calculateTimeLeft = () => {
    const targetDate = new Date("November 5, 2024 09:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const zoomFactor = 0.75;

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (event.clientX - rect.left) / zoomFactor,
      y: (event.clientY - rect.top) / zoomFactor,
    });
  };

  // Ref for observing elements
  const fadeElementsRef = useRef([]);

  // Scroll Observer function
  const handleScrollObserver = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Apply the show class to fade in
      }
    });
  };

  useEffect(() => {
    const elements = fadeElementsRef.current; // Store current ref in a local variable

    const observer = new IntersectionObserver(handleScrollObserver, {
      threshold: 0.1, // Trigger when 10% of the element is in view
    });

    elements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);
  const navigate=useNavigate();
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat items-center justify-center">
      
      <div
  className="body2 relative"
  onMouseMove={handleMouseMove}
  style={{
    backgroundImage: window.innerWidth < 768 ? `none` : "none",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  }}
>
<img
    src={LeftFrame}
    alt="Frame 1"
    className="absolute left-0 slide-in-left sm:pt-0 pt-96" // Add padding for mobile view
    style={{ top: 0, zIndex: -10 }}
  />
  <img
    src={RightFrame}
    alt="Frame 2"
    className="absolute right-0 slide-in-right sm:pt-0 pt-96" // Add padding for mobile view
    style={{ top: 0, zIndex: -10 }}
  />
  
  {/* Existing content here */}


        <div className="text-center pt-40 pb-12 md:pt-32 lg:pt-64">
          <div className="texttitle text-2xl sm:text-3xl text-white">
            SRI SAIRAM ENGINEERING COLLEGE
          </div>
          <div className="texttitle text-2xl sm:text-3xl mt-2 text-white">
            DEPARTMENT OF COMPUTER
          </div>
          <div className="texttitle text-2xl sm:text-3xl mt-2 text-white">
            SCIENCE AND BUSINESS SYSTEMS
          </div>

          <div className="texttitle text-xl mt-8 text-white">Presents</div>

          <div className="texthead text-6xl sm:text-9xl mt-8 text-white">
            FESTX'24
          </div>
          <div className="texttitle text-2xl sm:text-3xl mt-10 text-white">
            Non-Stop Kondattam
          </div>
          <div className="texttitle text-2xl sm:text-3xl mt-4 text-white">
            November 5th 2024
          </div>
          <div className="flex justify-center mt-12">
            <button
              className="relative flex items-center justify-center text-white text-xl sm:text-2xl font-bold group"
              onClick={() => navigate("/events")}
            >
              <img
                src={ButtonImage}
                alt="Button"
                className="w-[250px] sm:w-[340px] h-[70px] sm:h-[90px] rounded-2xl transition-all duration-300 group-hover:brightness-150 group-hover:sepia"
              />
              <span className="absolute flex items-center text-white transition-all duration-300 group-hover:text-black">
                <span className="texttitle mr-2">Register now</span>
                <img
                  src={Arrow}
                  alt="arrow"
                  className="w-[20px] sm:w-[25px] h-[20px] sm:h-[25px] mt-1 ml-3 transition-all duration-300 transform group-hover:rotate-45 group-hover:invert"
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="text-center mt-12 text-3xl sm:text-4xl text-white">
        <div className="texttitle text-2xl sm:text-3xl mt-4">
          Soon in Silver Screens
        </div>
        <div className="texttitle text-5xl sm:text-8xl mt-4">
          {timeLeft.days}d: {timeLeft.hours}h: {timeLeft.minutes}m:{" "}
          {timeLeft.seconds}s
        </div>
      </div>
      {/* Fade-in Section */}
      <div>
        <div className="w-full pt-2">
          <div
            ref={(el) => (fadeElementsRef.current[0] = el)}
            className="fade-in flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4"
          >
            <img
              className="xl:mt-20 2xl:mt-16 h-[200px] sm:h-[250px] lg:h-[250px] rounded-2xl mx-auto my-4 pointer-events-none"
              src={Logo}
              alt="/"
            />
            <div className="xl:col-span-2 flex flex-col justify-center">
              <p className="texttitle text-justify 2xl:pr-auto px-10 lg:text-2xl lg:mt-20 md:text-xl sm:text-1xl mt-10 text-white">
                FESTX is an annual symposium hosted by the Department of
                Computer Science and Business Systems of Sri Sairam Engineering
                College to promote the spirit of Entrepreneurship and to explore
                the latest tech trends. FESTX'24 is a program hosted by
                the Department of Computer Science and Business Systems which
                has 8 unique inter-collegiate events.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Fade-in Section */}
      <div className="w-full">
        <div
          ref={(el) => (fadeElementsRef.current[1] = el)}
          className="fade-in flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4"
        >
          <div className="xl:col-span-2 flex flex-col justify-center">
            <div className="block lg:hidden lg:pt-52">
              <img
                src={SSEC}
                alt="sseclogo"
                className="xl:mt-20 w-[200px] sm:w-[250px] 2xl:mt-16 h-[200px] sm:h-[250px] lg:mt-32 rounded-2xl mx-auto my-4 pointer-events-none"
              />
            </div>
            <p className="texttitle text-justify 2xl:pr-auto px-10 lg:text-2xl md:text-xl sm:text-1xl mt-10 text-white">
              Sri Sairam Engineering College, Chennai, established in the year
              1995 by MJF.Ln.Leo Muthu, Chairman of Sapthagiri Educational
              Trust, is a non-profitable and a non-minority institution. A
              well-defined vision, highly committed mission and a dedicated
              leadership facilitate Sri Sairam Engineering College to be in the
              best of educational institutions in the country. The institution
              is affiliated to Anna University and approved by the All India
              Council for Technical Education (AICTE), New Delhi.
            </p>
          </div>
          <div className="hidden lg:block">
            <img
              className="lg:w-[1500px] h-[250px] md:w-[1500px] rounded-2xl mx-auto my-4 pointer-events-none object-contain"
              src={SSEC}
              alt="/"
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div
          ref={(el) => (fadeElementsRef.current[2] = el)}
          className="fade-in flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4"
        >
          <img
            className="xl:mt-20 w-[200px] sm:w-[250px] 2xl:mt-16 h-[200px] sm:h-[250px] lg:mt-32 rounded-2xl mx-auto my-4 pointer-events-none object-contain"
            src={CSBS}
            alt="/"
          />
          
          <div className="xl:col-span-2 flex flex-col justify-center ">
            <p className="texttitle text-justify px-10 2xl:pr-auto lg:text-2xl md:text-xl sm:text-1xl mt-10 text-white">
              CSBS is a steadily growing department and is gaining popularity
              among students and parents likewise as Candidates from this field
              play a vital role in software development and possess the
              appropriate managerial skills, which will unlock a lot of career
              opportunities such as being a consultant and much more. It is
              curated to create business engineers that ensures their futuristic
              and holistic development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
