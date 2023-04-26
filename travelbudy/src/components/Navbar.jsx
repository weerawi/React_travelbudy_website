import React from "react";
import Links from "./Links";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="">
      <h1 className="">Travel Buddy</h1>
      <nav>
        {/* main page is destination page */}
        <li>
          <a href="/main" className="p-4">
            Destinations
          </a>
        </li>
        <li>
          <a href="/search" className="p-4">
            Travel Styles
          </a>
        </li>
        <li>
          <a href="/about" className="p-4">
            About
          </a>
        </li>
        <li>
          <a href="/contactUs" className="p-4">
            Get Inspired
          </a>
        </li>
        <li>
          <a href="/trip" className="p-4">
            Trip page
          </a>
        </li>
      </nav>
      <Links />
    </div>
  );
};

export default Navbar;
