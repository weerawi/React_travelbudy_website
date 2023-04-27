import React from "react";
import Card from "./Card";
import { images } from "../constants";
import "./RecentlyViewedTrips.css";

const RecentlyViewedTrips = () => {
  return (
    <div className="grid RecentlyViewedTrips">
      <Card image={images.Mountant} title="Recently Viewed Trips" price="100" />
      <Card image={images.MainBg} title=" Trips" price="2000" />
      <Card image={images.Mountant} title="Recently Viewed Trips" price="100" />
      <Card image={images.MainBg} title=" Trips" price="2000" />
    </div>
  );
};

export default RecentlyViewedTrips;
