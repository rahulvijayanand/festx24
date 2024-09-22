import React from "react";
import Logo from "../assets/festxlogo.png";
import SSEC from "../assets/ssec.png";
import CSBS from "../assets/csbslogo.png";
import ButtonImage from "../assets/button.png";
import Arrow from "../assets/arrow.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat items-center justify-center">
      <div className="body2">
        <div className="text-center pt-64">
          <div className="texttitle text-3xl text-[#424242]">
            SRI SAIRAM ENGINEERING COLLEGE
          </div>
          <div className="texttitle text-3xl mt-2 text-[#424242]">
            DEPARTMENT OF COMPUTER
          </div>
          <div className="texttitle text-3xl mt-2 text-[#424242]">
            SCIENCE AND BUSINESS SYSTEMS
          </div>

          <div className="texttitle text-xl mt-8 text-[#424242]">Presents</div>

          <div className="texthead text-9xl mt-8 text-[#5e5e5e]">FESTX'24</div>
          <div className="texttitle text-3xl mt-10 text-[#424242]">
            FESTX Tagline
          </div>
          <div className="texttitle text-3xl mt-4 text-[#424242]">
            October 17th 2024
          </div>
          <div className="flex justify-center mt-12">
            <button className="relative flex items-center justify-center text-white text-2xl font-bold group">
              <img
                src={ButtonImage}
                alt="Button"
                className="w-[340px] h-[90px] rounded-2xl transition-all duration-300 group-hover:brightness-150 group-hover:sepia"
              />
              <span className="absolute flex items-center text-white transition-all duration-300 group-hover:text-black">
                <span className="texttitle mr-2">Register now</span>
                <img
                  src={Arrow}
                  alt="arrow"
                  className="w-[25px] h-[25px] mt-1 ml-3 transition-all duration-300 transform group-hover:rotate-45 group-hover:invert"
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full pt-10">
          <div className="flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4">
            <img
              className="xl:mt-20 2xl:mt-16 h-[250px] lg:mt-32 sm:h-[250px] rounded-2xl mx-auto my-4 pointer-events-none"
              src={Logo}
              alt="/"
            />
            <div className="xl:col-span-2 flex flex-col justify-center">
              <p className="texttitle text-justify 2xl:pr-auto px-10 lg:text-2xl lg:mt-20 md:text-xl sm:text-1xl mt-10">
                FESTX is an annual symposium hosted by the Department of
                Computer Science and Business Systems of Sri Sairam Engineering
                College to promote the spirit of Entrepreneurship and to explore
                the latest tech trends. FESTX'23 is a two day programme hosted
                by the Department of Computer Science and Business Systems which
                has 7 unique inter-collegiate events.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4">
          <div className="xl:col-span-2 flex flex-col justify-center">
            <div className="block lg:hidden lg:pt-52">
              <img
                src={SSEC}
                alt="sseclogo"
                className="xl:mt-20 w-[250px] 2xl:mt-16 h-[250px] lg:mt-32 rounded-2xl mx-auto my-4 pointer-events-none"
              />
            </div>
            <p className="texttitle text-justify 2xl:pr-auto px-10 lg:text-2xl md:text-xl sm:text-1xl mt-10">
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
              className="lg:w-[1500px] h-[250px] md:w-[1500px] rounded-2xl mx-auto my-4 pointer-events-none"
              src={SSEC}
              alt="/"
            />
          </div>
        </div>
      </div>

      <br />
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-center gap-2 max-w-7xl mx-auto prose dark:prose-dark text-justify p-4">
          <img
            className="xl:mt-20 w-[250px] 2xl:mt-16 h-[250px] lg:mt-32 rounded-2xl mx-auto my-4 pointer-events-none"
            src={CSBS}
            alt="/"
          />
          <div className="xl:col-span-2 flex flex-col justify-center ">
            <p className="texttitle  text-justify px-10 2xl:pr-auto lg:text-2xl md:text-xl sm:text-1xl mt-10">
              CSBS is a steadily growing department and is gaining popularity
              among students and parents likewise as Candidates from this field
              play a vital role in software development and possess the
              appropriate managerial skills, which will unlock a lot of career
              opportunities such as being a consultant and much more.It is
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