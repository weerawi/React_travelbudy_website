import React from "react";
import Feedback from "./Feedback";
import Locations from "./Locations";
import Features from "./Features";
import "./discoverWorld.css";

const DiscoverWorld = () => {
  return (
    <div className="discover-world">
      <div className="discover-titles">Discover the world, together!</div>
      <Features />
      <Feedback />
      <Locations />
    </div>
  );
};

export default DiscoverWorld;
