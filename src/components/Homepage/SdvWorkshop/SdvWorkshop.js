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

      <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8">
        <div className="flex justify-center sm:w-1/2 sm:pl-4 md:pl-6">
          <img
            src={sdvImg}
            alt="Self-Driving Vehicles Workshop"
            className="w-full max-w-[400px] h-auto rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105 object-contain mt-6"
          />
        </div>

        <div className="sm:w-1/2 text-center sm:text-left sm:pr-4 md:pr-6">
          <p className="text-sm sm:text-base md:text-sm lg:text-2xl text-[#F5F5F5] tracking-wide leading-relaxed">
            <br />
            The 7th edition of <span className="text-red-500">SDV Workshop</span> is back with exciting projects such as manually operated bots, line-following bots, obstacle-avoiding bots, and controlling bot movement. Whether you're a beginner or have some experience, you'll gain valuable technical skills in robotics and IoT while learning to collaborate effectively with your team. This is more than just a hands-on experience; it's about growth, communication, and teamwork. Along the way, you'll develop problem-solving skills, make new friends, and create lasting memories. Don't miss this opportunity to dive into a world of innovation, creativity, and fun!
          </p>

          <style>{`
            .futuristic-button {
              position: relative;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              min-width: 12rem;
              padding: 0.9em 1.6em;
              height: auto;
              outline: none;
              transition: 0.12s ease;
              background-color: transparent;
              border: none;
              font-size: 16px;
              font-weight: bold;
              color: #ddebf0;
              cursor: pointer;
            }

            .clip {
              --color: #C10000;
              position: absolute;
              top: 0;
              overflow: hidden;
              width: 100%;
              height: 100%;
              border: 5px double var(--color);
              box-shadow: inset 0px 0px 15px #C10000;
              clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
            }

            .arrow {
              position: absolute;
              transition: 0.2s;
              background-color: #C10000;
              top: 35%;
              width: 11%;
              height: 30%;
            }

            .leftArrow {
              left: -13.5%;
              clip-path: polygon(100% 0, 100% 100%, 0 50%);
            }

            .rightArrow {
              clip-path: polygon(100% 49%, 0 0, 0 100%);
              left: 102%;
            }

            .futuristic-button:hover .rightArrow {
              background-color: #FF6B6B;
              left: -15%;
              animation: 0.6s ease-in-out both infinite alternate rightArrow8;
            }

            .futuristic-button:hover .leftArrow {
              background-color: #FF6B6B;
              left: 103%;
              animation: 0.6s ease-in-out both infinite alternate leftArrow8;
            }

            .corner {
              position: absolute;
              width: 3.5em;
              height: 3.5em;
              background-color: #C10000;
              box-shadow: inset 1px 1px 8px #C10000;
              transform: scale(1) rotate(45deg);
              transition: 0.2s;
            }

            .rightTop {
              top: -1.98em;
              left: 91%;
            }

            .leftTop {
              top: -1.96em;
              left: -3.0em;
            }

            .leftBottom {
              top: 2.10em;
              left: -2.15em;
            }

            .rightBottom {
              top: 45%;
              left: 88%;
            }

            .futuristic-button:hover .leftTop {
              animation: 0.1s ease-in-out 0.05s both changeColor8,
              0.2s linear 0.4s both lightEffect8;
            }

            .futuristic-button:hover .rightTop {
              animation: 0.1s ease-in-out 0.15s both changeColor8,
              0.2s linear 0.4s both lightEffect8;
            }

            .futuristic-button:hover .rightBottom {
              animation: 0.1s ease-in-out 0.25s both changeColor8,
              0.2s linear 0.4s both lightEffect8;
            }

            .futuristic-button:hover .leftBottom {
              animation: 0.1s ease-in-out 0.35s both changeColor8,
              0.2s linear 0.4s both lightEffect8;
            }

            .futuristic-button:hover .corner {
              transform: scale(1.25) rotate(45deg);
            }

            .futuristic-button:hover .clip {
              animation: 0.2s ease-in-out 0.55s both greenLight8;
              --color: #FF6B6B;
            }

            @keyframes changeColor8 {
              from {
                background-color: #C10000;
              }
              to {
                background-color: #FF6B6B;
              }
            }

            @keyframes lightEffect8 {
              from {
                box-shadow: 1px 1px 5px #FF6B6B;
              }
              to {
                box-shadow: 0 0 2px #FF6B6B;
              }
            }

            @keyframes greenLight8 {
              from {
              }
              to {
                box-shadow: inset 0px 0px 32px #FF6B6B;
              }
            }

            @keyframes leftArrow8 {
              from {
                transform: translate(0px);
              }
              to {
                transform: translateX(10px);
              }
            }

            @keyframes rightArrow8 {
              from {
                transform: translate(0px);
              }
              to {
                transform: translateX(-10px);
              }
            }

            @media (max-width: 640px) {
              .futuristic-button {
                min-width: 12rem;
                padding: 1em 2em;
                font-size: 15px;
                justify-content: center;
                align-items: center;
              }
            }

            /* Extra spacing for button wrapper */
            .button-wrapper {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0.5em 1em;
            }

            @media (max-width: 1023px) {
              .button-wrapper {
                padding: 0.4em 0;
                justify-content: center;
                align-items: center;
                display: flex;
                
              }
            }
          `}</style>

          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col flex-nowrap sm:flex-wrap justify-center items-center gap-4 px-4 sm:px-8 md:px-12 lg:px-20 w-80% sm:w-full mx-auto">
            <div className="button-wrapper flex-1">
              <a 
                href='https://docs.google.com/forms/d/e/1FAIpQLScqNUL-cC6L6F2z0VwNYbl62r5zgP53B0A7Dq029wKPapp4SA/viewform' 
                target="_blank" 
                rel="noreferrer"
              >
                <button className="futuristic-button w-full">
                  <div className="clip">
                    <div className="corner rightTop"></div>
                    <div className="corner leftTop"></div>
                    <div className="corner leftBottom"></div>
                    <div className="corner rightBottom"></div>
                  </div>
                  <span className="arrow leftArrow"></span>
                  <span className="arrow rightArrow"></span>
                  Register Now
                </button>
              </a>
            </div>

            <div className="button-wrapper flex-1">
              <a 
                href='/whysdv'
                rel="noreferrer"
              >
                <button className="futuristic-button w-full">
                  <div className="clip">
                    <div className="corner rightTop"></div>
                    <div className="corner leftTop"></div>
                    <div className="corner leftBottom"></div>
                    <div className="corner rightBottom"></div>
                  </div>
                  <span className="arrow leftArrow"></span>
                  <span className="arrow rightArrow"></span>
                  Learn More
                </button>
              </a>
            </div>
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