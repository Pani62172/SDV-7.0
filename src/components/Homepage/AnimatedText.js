import React, { useEffect } from "react";

// Add this CSS globally BEFORE React renders to prevent any content flash
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    body.hide-content-during-load {
      overflow: hidden !important;
      background: #000 !important;
    }
    /* Hide all main content */
    body.hide-content-during-load #root,
    body.hide-content-during-load .App,
    body.hide-content-during-load main {
      background: #000 !important;
    }
    body.hide-content-during-load #root > div:not([id="loader-root"]),
    body.hide-content-during-load .App > div:not([id="loader-root"]) {
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
    }
  `;
  document.head.appendChild(style);
  document.body.classList.add('hide-content-during-load');
}

const AnimatedText = ({ onAnimationComplete }) => {
  useEffect(() => {
    const textElement = document.getElementById("animatedText");
    
    // Safety check - ensure element exists
    if (!textElement) {
      console.error("AnimatedText element not found");
      document.body.classList.remove('hide-content-during-load');
      if (onAnimationComplete) onAnimationComplete();
      return;
    }

    const startAnimation = () => {
      // Start with text hidden (high offset)
      textElement.style.transition = "none";
      textElement.style.strokeDashoffset = "1000";

      setTimeout(() => {
        // Animate to visible (0 offset)
        textElement.style.transition = "stroke-dashoffset 3s ease";
        textElement.style.strokeDashoffset = "0";

        setTimeout(() => {
          // Show all page content again after animation
          document.body.classList.remove('hide-content-during-load');
          
          if (onAnimationComplete) onAnimationComplete();
        }, 3500);
      }, 50);
    };

    startAnimation();

    // Cleanup function to ensure content is shown if component unmounts
    return () => {
      document.body.classList.remove('hide-content-during-load');
    };
  }, [onAnimationComplete]);

  return (
    <div 
      id="loader-root"
      style={{ 
        position: "fixed", 
        top: 0,
        left: 0,
        width: "100%", 
        height: "100vh", 
        backgroundColor: "#000",
        zIndex: 9999 // Ensure it's above everything
      }}
    >
      <style>{`
        .animated-text-svg {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: auto;
        }
        
        .animated-loader {
          position: absolute;
          top: 60%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        @media (min-width: 768px) {
          .animated-text-svg {
            top: 35%;
          }
          
          .animated-loader {
            top: 68%;
          }
        }
      `}</style>
      
      <svg
        viewBox="0 0 800 200"
        className="animated-text-svg"
      >
        <defs>
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
          fill="none"
          style={{
            fontFamily: '"Protest Guerrilla", sans-serif',
            fontSize: "150px",
            letterSpacing: "5px",
            stroke: "#CA3435",
            strokeWidth: "2px",
            strokeDasharray: "1000",
            strokeDashoffset: "1000",
            filter: "url(#glowFilter)",
            textAnchor: "middle",
          }}
        >
          SDV-7.0
        </text>
      </svg>

      {/* Loader */}
      <div className="animated-loader">
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