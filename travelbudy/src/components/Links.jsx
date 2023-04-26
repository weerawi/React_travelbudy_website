import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Main/Main";
import About from "../pages/About/About";
import Trip from "../pages/Trip/Trip";
import Search from "../pages/Search/Search";
import ContactUs from "../pages/ContactUs/ContactUs";
const Links = () => {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/trip" element={<Trip />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/contactUs" element={<ContactUs />}></Route>
      </Routes>
    </Router>
  );
};

export default Links;
