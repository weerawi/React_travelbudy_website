import React from "react";
import "./Main.css";
import ImageSlider from "../../components/ImageSlider";
import { images } from "../../constants";
import RecentlyViewedTrips from "../../components/RecentlyViewedTrips";

const Main = () => {
  const slides = [
    { url: `${images.MainBg}`, title: "Main-bg" },
    { url: `${images.Boat}`, title: "Boat" },
    { url: `${images.Mountant}`, title: "Mountant" },
    { url: `${images.TravelGirl}`, title: "TravelGirl" },
  ];

  return (
    <div className="main-img-bg">
      <ImageSlider slides={slides} autoPlay={3} />
      <RecentlyViewedTrips />
    </div>
  );
};

export default Main;
