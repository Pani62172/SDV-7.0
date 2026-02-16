import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showRegisterButton, setShowRegisterButton] = useState(false);

  useEffect(() => {
    // Delay the display of the register button by 1 second
    const timer = setTimeout(() => {
      setShowRegisterButton(true);
    }, 1000);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      // Ensure scroll is re-enabled when component unmounts
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    // Ensure scroll is properly set based on menu state
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [isMenuOpen]);

  const closeMenu = () => {
    const navContainer = document.querySelector(".nav-container");
    navContainer.classList.remove("menu-open");
    
    // Get the scroll position and restore it
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    
    // Restore scroll position
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    
    setIsMenuOpen(false);
  };

  const handleWheelClick = () => {
    const navItems = document.querySelector(".nav-items");
    const navContainer = document.querySelector(".nav-container");

    if (isMenuOpen) {
      navItems.classList.remove("open");
      navItems.classList.add("close");
      navContainer.classList.remove("menu-open");
      
      // Re-enable scrolling
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.documentElement.style.overflow = "";
      
      setTimeout(() => {
        navItems.classList.remove("visible");
        setIsMenuOpen(false);
      }, 200);
    } else {
      navItems.classList.add("visible", "open");
      navItems.classList.remove("close");
      navContainer.classList.add("menu-open");
      
      // Disable scrolling aggressively
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      
      setIsMenuOpen(true);
    }
  };

  return (
    <div className="nav-container">
      <style>{`
        .register-btn-wrapper {
          margin-right: 1rem;
        }
        
        .register-btn-wrapper button {
          font-size: 1rem;
          padding: 0.5em 1.6em;
          background-color: #000;
          border: 3px solid red;
          border-radius: 1em;
          color: #fff;
          font-weight: bolder;
          transition: cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s;
          box-shadow: -5px 5px 0px 0px red;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
        }

        .register-btn-wrapper button:hover {
          background-color: #FF474C;
        }
      `}</style>

      <div className="left-section">
        <div className="car-logo-container">
          <a href="/">
            <img
              src="https://i.ibb.co/fvZpdy8/SAE-Logo-White-3x.png"
              alt="SAE Logo"
              className="logo transformed-logo"
            />
          </a>
        </div>
        <div className="sdv-logo-container">
          <a href="/">
            <img
              src="/SDV-logo.png"
              alt="SDV Logo"
              className="logo sdv-logo"
            />
          </a>
        </div>
      </div>

      <div className="right-section">
        <button
          className={`toggle-icon md:hidden ${isMenuOpen ? "open" : ""}`}
          onClick={handleWheelClick}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <div
          className={`nav-items ${isMenuOpen ? "open" : ""}`}
          onClick={closeMenu}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/whysdv"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/components"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            onClick={closeMenu}
          >
            Kit
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            onClick={closeMenu}
          >
            Gallery
          </NavLink>
         {/*
          <NavLink
            to="/sponsors"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            onClick={closeMenu}
          >
            Sponsors
          </NavLink>
          */}
          <NavLink
            to="/dnd"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            onClick={closeMenu}
          >
            DnD
          </NavLink>
          {showRegisterButton && (
            <div className="register-btn-wrapper">
              <a
                href="https://forms.gle/3pDgpYBSUGXr3E5U8"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                <button>REGISTER</button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;