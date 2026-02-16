import React, { useEffect, useState } from "react";

// Add this CSS globally BEFORE React renders to prevent any content flash
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap');
    
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
  
  // FIXED: Increased timeout from 50ms to 600ms to prevent navbar flash
  setTimeout(() => {
    if (document.body.classList.contains('hide-content-during-load')) {
      console.warn('Emergency cleanup: Removing hide-content-during-load after timeout');
      document.body.classList.remove('hide-content-during-load');
    }
  }, 600);
}

const AnimatedText = ({ onAnimationComplete }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Track when component actually mounts
    const mountTime = Date.now();
    
    const textElement = document.getElementById("animatedText");
    
    // Safety check - ensure element exists
    if (!textElement) {
      console.error("AnimatedText element not found");
      document.body.classList.remove('hide-content-during-load');
      if (onAnimationComplete) onAnimationComplete();
      return;
    }

    const startAnimation = async () => {
      // Wait for fonts to load (with timeout)
      try {
        if (document.fonts && document.fonts.ready) {
          await Promise.race([
            document.fonts.ready,
            new Promise(resolve => setTimeout(resolve, 300))
          ]);
        }
      } catch (e) {
        console.log("Font loading skipped:", e);
      }

      // Ensure minimum 200ms delay so loader is visible
      const elapsed = Date.now() - mountTime;
      const remainingDelay = Math.max(200 - elapsed, 0);
      await new Promise(resolve => setTimeout(resolve, remainingDelay));

      // Mark as ready to show
      setIsReady(true);

      // Small delay to ensure render
      await new Promise(resolve => setTimeout(resolve, 50));

      // Start with text hidden (high offset)
      textElement.style.transition = "none";
      textElement.style.strokeDashoffset = "1000";

      // Force a reflow
      textElement.getBoundingClientRect();

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

    // Cleanup function - CRITICAL: Always remove the class when component unmounts
    return () => {
      console.log("AnimatedText unmounting - removing hide class");
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
        zIndex: 9999,
        opacity: isReady ? 1 : 1 // Always visible, but controls internal elements
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
        
        /* FIXED: Make text bigger on small screens */
        @media (max-width: 767px) {
          #animatedText {
            font-size: 220px !important;
          }
        }
        
        @media (max-width: 480px) {
          #animatedText {
            font-size: 210px !important;
          }
        }
        
        @media (max-width: 360px) {
          #animatedText {
            font-size: 200px !important;
          }
        }
      `}</style>
      
      <svg
        viewBox="0 0 800 200"
        className="animated-text-svg"
        style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.3s ease' }}
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
      <div className="animated-loader" style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.3s ease' }}>
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