import React from "react";
import Feedback from "./Feedback";
import Locations from "./Locations";
import Features from "./Features";
import "./discoverWorld.css";
import { images } from "../../constants";

const DiscoverWorld = () => {
  const feedbacks = [
    {
      image: `${images.profile}`,
      name: "kimmy",
      feedback: "lorem juhsd jhsd osjdg spohjo hiu mf how are u",
    },
    {
      image: `${images.Boat}`,
      name: "tharu",
      feedback: "lorem juhsd jhsd osjdg spohjo hiu mf how are u",
    },
    {
      image: `${images.Mountant}`,
      name: "methu",
      feedback: "lorem juhsd jhsd osjdg spohjo hiu mf how are u",
    },
    {
      image: `${images.TravelGirl}`,
      name: "sara",
      feedback: "lorem juhsd jhsd osjdg spohjo hiu mf how are u",
    },
    {
      image: `${images.profile}`,
      name: "hima",
      feedback: "lorem juhsd jhsd osjdg spohjo hiu mf how are u",
    },
  ];

  return (
    <div className="discover-world">
      <div className="discover-titles">Discover the world, together!</div>
      <Features />
      <Feedback feedbacks={feedbacks} />
      <Locations />
    </div>
  );
};

export default DiscoverWorld;
