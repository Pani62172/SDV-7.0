import React, { useState, useEffect } from "react";
import "./Homepage.css";
import AnimatedText from "./AnimatedText";
// import AtAGlance from "./AtAGlance";
import { CalendarDays, MapPin } from "lucide-react";
import WhySdv from "./WhySdv/WhySdv";
import Banner from "./Banner";
import Countdown from "./Countdown";
import SdvWorkshop from "./SdvWorkshop/SdvWorkshop";

const Homepage = () => {
  const [showAnimatedText, setShowAnimatedText] = useState(false);
  const [showOtherContent, setShowOtherContent] = useState(false);

  const handleAnimationComplete = () => {
    setShowAnimatedText(false);
    setShowOtherContent(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimatedText(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="homepage min-h-screen flex flex-col overflow-x-hidden">
      <div className="w-full text-center">
        {showAnimatedText && (
          <AnimatedText onAnimationComplete={handleAnimationComplete} />
        )}
      </div>

      {showOtherContent && (
        <div className="md:flex md:flex-col w-full overflow-x-hidden">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 px-3 sm:px-6 md:px-12 w-full max-w-full box-border">
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left w-full max-w-full">
              <p className="sdv-heading font-calsans leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#C10000] to-[#C10000] drop-shadow-lg break-words">
                Self Driving Vehicle Workshop 7.0
              </p>
              {/*<div className="text-2xl font-calsans flex flex-col md:flex-row text-white justify-center items-center mt-4">
                <span className="italic">Powered by</span>
                <p className="text-center text-red-500"><a href="/sponsors" rel="noreferrer">&nbsp;The Dopamine Store</a></p>
              </div>*/}

              <p className="font-calsans text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl text-[#FAFAFA] mt-4 tracking-wider break-words leading-relaxed">
                Get ready for an exciting journey filled with fun, creativity,
                and new connections ,SDV 7.0 is where big ideas come to life!
              </p>

              <div className="mt-6 w-full">
                <p className="flex items-center justify-center md:justify-start gap-2 lg:gap-3 flex-wrap">
                  <MapPin className="text-[#C10000] w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 flex-shrink-0" />
                  <span className="font-Manrope text-white text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl tracking-wider break-words">
                    SAC Auditorium, NIT Durgapur
                  </span>
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2 mt-3 sm:mt-4 lg:gap-3 flex-wrap">
                  <CalendarDays className="text-[#C10000] w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 flex-shrink-0" />
                  <span className="font-Manrope text-white text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl tracking-wider break-words">
                    6th - 8th March, 2026
                  </span>
                </p>
              </div>
            </div>

            <div className="flex-1 w-full md:w-auto flex justify-center mt-4 md:mt-0">
              <img
                src="https://i.ibb.co/r0bz453/1-removebg.png"
                alt="SDV Workshop"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl"
              />
            </div>
          </div>
          <Banner />
          <Countdown />
          <SdvWorkshop />
          <WhySdv />
          {/* <AtAGlance /> */}
        </div>
      )}
    </div>
  );
};

export default Homepage;