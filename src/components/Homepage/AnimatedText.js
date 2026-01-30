import React, { useEffect } from "react";

const AnimatedText = ({ onAnimationComplete }) => {
  useEffect(() => {
    // Hide navbar and footer during animation
    const navbar = document.querySelector('nav, header, .navbar, .header');
    const footer = document.querySelector('footer, .footer');
    
    if (navbar) navbar.style.display = 'none';
    if (footer) footer.style.display = 'none';

    const textElement = document.getElementById("animatedText");

    const restartAnimation = () => {
      textElement.style.transition = "none";
      textElement.style.strokeDashoffset = "0";

      setTimeout(() => {
        textElement.style.transition = "stroke-dashoffset 3s ease";
        textElement.style.strokeDashoffset = "1000";

        setTimeout(() => {
          // Show navbar and footer again after animation
          if (navbar) navbar.style.display = '';
          if (footer) footer.style.display = '';
          
          if (onAnimationComplete) onAnimationComplete();
        }, 3500);
      }, 50);
    };

    restartAnimation();

    // Cleanup function to ensure navbar/footer are shown if component unmounts
    return () => {
      if (navbar) navbar.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, [onAnimationComplete]);

  return (
    <div style={{ 
      position: "fixed", 
      top: 0,
      left: 0,
      width: "100%", 
      height: "100vh", 
      backgroundColor: "#000",
      zIndex: 9999 // Ensure it's above everything
    }}>
      <svg
        viewBox="0 0 800 200"
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "auto",
        }}
      >
        <defs>
          <pattern id="imagePattern" patternUnits="userSpaceOnUse" width="400" height="400">
            <image
              href="https://iili.io/20FHSCN.png"
              x="0"
              y="0"
              width="400"
              height="400"
            />
          </pattern>

          <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blurred" />
            <feOffset in="blurred" dx="0" dy="0" result="offsetBlurred" />
            <feFlood floodColor="#CA3435" result="glowColor" />
            <feComposite in="glowColor" in2="offsetBlurred" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <text
          id="animatedText"
          x="50%"
          y="150"
          style={{
            fill: "url(#imagePattern)",
            fontFamily: '"Protest Guerrilla", sans-serif',
            fontSize: "150px",
            letterSpacing: "5px",
            stroke: "#CA3435",
            strokeWidth: "1px",
            strokeDasharray: "500",
            strokeDashoffset: "500",
            filter: "url(#glowFilter)",
            textAnchor: "middle",
          }}
        >
          SDV-7.0
        </text>
      </svg>

      {/* Loader */}
      <div style={{
        position: "absolute",
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}>
        <style>{`
          .semicircle,
          .semicircle div {
            width: 70px;
            height: 70px;
            animation: 6s rotate141 infinite linear;
            background-repeat: no-repeat;
            border-radius: 50%;
            position: relative;
            overflow: hidden;
          }
          
          .semicircle div {
            position: absolute;
            top: 5%;
            left: 5%;
            width: 90%;
            height: 90%;
          }
          
          .semicircle:before,
          .semicircle div:before {
            content: '';
            width: 100%;
            height: 50%;
            display: block;
            background: radial-gradient(transparent, transparent 65%, #CA3435 65%, #CA3435);
            background-size: 100% 200%;
          }
          
          @keyframes rotate141 {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
        <div className="semicircle">
          <div>
            <div>
              <div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>   
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;