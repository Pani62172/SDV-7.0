import React from "react";
import sdvImg from '../../ASSETS/SDV.png';

const SdvWorkshop = () => {
  return (
    <div className="relative flex flex-col items-center bg-gradient-to-b p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C10000] to-[#C10000] drop-shadow-lg">
          About SDV Workshop
        </h1>
      </div>

      <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 w-full px-4">
        <div className="flex justify-center w-full lg:w-1/2 flex-shrink-0">
          <img
            src={sdvImg}
            alt="Self-Driving Vehicles Workshop"
            className="w-full max-w-xs sm:max-w-sm h-auto rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105 object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-[#F5F5F5] tracking-wide leading-relaxed">
            <br className="hidden lg:block" />
            The 7th edition of <span className="text-red-500">SDV Workshop</span> is back with exciting projects such as manually operated bots, line-following bots, obstacle-avoiding bots, and controlling bot movement. Whether you're a beginner or have some experience, you'll gain valuable technical skills in robotics and IoT while learning to collaborate effectively with your team. This is more than just a hands-on experience; it's about growth, communication, and teamwork. Along the way, you'll develop problem-solving skills, make new friends, and create lasting memories. Don't miss this opportunity to dive into a world of innovation, creativity, and fun!
          </p>

          <style>{`
  .futuristic-button {
    --color: #C10000;
    font-family: inherit;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1.2rem;
    height: auto;
    min-height: 2.2rem;
    margin: 0.5rem;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border: 2px solid var(--color);
    transition: color 0.25s ease;
    z-index: 1;
    font-size: clamp(0.875rem, 2vw, 1.1rem);
    border-radius: 6px;
    font-weight: 500;
    color: var(--color);
    text-decoration: none;
    box-sizing: border-box;
    white-space: nowrap;
  }

  .futuristic-button:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }

  .futuristic-button:hover {
    color: #fff;
  }

  .futuristic-button:hover:before {
    top: -30px;
    left: -30px;
  }

  .futuristic-button:active:before {
    background: #3a0ca3;
    transition: background 0s;
  }

  @media (max-width: 640px) {
    .futuristic-button {
      padding: 0.4rem 1rem;
      margin: 0.4rem;
      min-height: 2rem;
    }
  }
          `}</style>

          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap justify-center items-center gap-4 w-full">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScqNUL-cC6L6F2z0VwNYbl62r5zgP53B0A7Dq029wKPapp4SA/viewform"
              target="_blank"
              rel="noreferrer"
              className="futuristic-button"
            >
              <div className="clip">
                <div className="corner rightTop"></div>
                <div className="corner leftTop"></div>
                <div className="corner leftBottom"></div>
                <div className="corner rightBottom"></div>
              </div>
              <span className="arrow leftArrow"></span>
              <span className="arrow rightArrow"></span>
              Register Now
            </a>

            <a
              href="/whysdv"
              rel="noreferrer"
              className="futuristic-button"
            >
              <div className="clip">
                <div className="corner rightTop"></div>
                <div className="corner leftTop"></div>
                <div className="corner leftBottom"></div>
                <div className="corner rightBottom"></div>
              </div>
              <span className="arrow leftArrow"></span>
              <span className="arrow rightArrow"></span>
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#E2F1E7] opacity-40 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-[#C10000] opacity-50 blur-2xl rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-[#C10000] opacity-30 blur-3xl rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default SdvWorkshop;