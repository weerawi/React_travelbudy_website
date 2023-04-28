import React from "react";
import Card from "./Card";
import { images } from "../constants";
import "./RecentlyViewedTrips.css";

const MostPopularTrips = () => {
  return (
    <div className="bg-rvtrips">
      <div className="recenttrip-title">Most Popular Trips</div>
      <div className="grid RecentlyViewedTrips">
        <Card
          image={images.Mountant}
          title="Recently Viewed Trips"
          date="October 28, 2022"
          price="100"
          places="32"
          countries="10"
        />
        <Card
          image={images.MainBg}
          title=" Trips"
          date="October 28, 2022"
          places="32"
          countries="10"
          price="2000"
          txt="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          porro cum illum voluptates aspernatur hic sed, ut deserunt esse.
          Ratione eligendi illum dignissimos enim quod beatae corrupti esse
          exercitationem aspernatur! "
        />
        <Card
          image={images.Boat}
          title="Recently Viewed Trips"
          date="October 28, 2022"
          price="100"
          places="32"
          countries="10"
        />
        <Card
          image={images.TravelGirl}
          title=" Trips"
          date="October 28, 2022"
          price="2000"
          places="32"
          countries="10"
        />
      </div>
    </div>
  );
};

export default MostPopularTrips;
