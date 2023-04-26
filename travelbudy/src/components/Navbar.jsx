import React, { useState } from "react";
import Links from "./Links";
import { useRef } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div>
      <div className="navbar">
        <h1 className="">Travel Buddy</h1>
        <nav className={isNavExpanded ? "expanded" : "close"}>
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
