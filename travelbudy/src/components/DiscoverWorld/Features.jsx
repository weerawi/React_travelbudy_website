import React from "react";
import FeatureBox from "./FeatureBox";
import { icons } from "../../constants";

const Features = () => {
  return (
    <div className="feature-box-container">
      <FeatureBox
        image={icons.world}
        title="endless exploration"
        details="Richly varied landscapes, luxury accommodation Travel."
        bgcolor="rgb(179, 255, 15)"
      />
      <FeatureBox
        image={icons.dollar}
        title="Value for Money"
        details="Richly varied landscapes, luxury accommodation Travel."
        bgcolor="rgb(234, 4, 126)"
      />
      <FeatureBox
        image={icons.location}
        title="Beautiful Places"
        details="Richly varied landscapes, luxury accommodation Travel."
        bgcolor="rgb(62, 84, 172)"
      />
      <FeatureBox
        image={icons.calender}
        title="Fast Booking"
        details="Richly varied landscapes, luxury accommodation Travel."
        bgcolor="rgb(244, 80, 80)"
      />
      <FeatureBox
        image={icons.travel}
        title="Passionate Travel"
        details="Richly varied landscapes, luxury accommodation Travel."
        bgcolor="rgb(5, 191, 219)"
      />
      <FeatureBox
        image={icons.team}
        title="Support Team"
        details="Richly varied landscapes, luxury accommodation Travel."
        bgcolor="rgb(241, 103, 103)"
      />
    </div>
  );
};

export default Features;
