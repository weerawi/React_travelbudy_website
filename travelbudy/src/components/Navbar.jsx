import React, { useEffect, useState } from "react";
import Links from "./Links";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 1 ? setStickyClass("navbar-sticky") : setStickyClass(" ");
    }
  };

  return (
    <div>
      <div className={`navbar ${stickyClass}`}>
        <h1 className="">Travel Buddy</h1>
        <nav className={isNavExpanded ? "expanded " : "close "}>
          <button
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
            className="nav-btn nav-close-btn"
          >
            <FaTimes />{" "}
          </button>
          {/* main page is destination page */}
          <a href="/main" className="p-4">
            Destinations
          </a>
          <a href="/search" className="p-4">
            Travel Styles
          </a>

          <a href="/about" className="p-4">
            About
          </a>

          <a href="/contactUs" className="p-4">
            Get Inspired
          </a>

          <a href="/trip" className="p-4">
            Trip page
          </a>
        </nav>
        <button
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
          className="nav-btn"
        >
          <FaBars />{" "}
        </button>
      </div>
      <Links />
    </div>
  );
};

export default Navbar;
