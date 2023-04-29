import React from "react";
import LocationCard from "./LocationCard.jsx";
import images from "../../constants/images.js";

const Locations = () => {
  return (
    <div>
      <div className="discover-titles">where are we go</div>
      <div className="location-card-container">
        <LocationCard name="USA" image={images.usa} />
        <LocationCard name="canada" image={images.canada} />
        <LocationCard name="europe" image={images.europe} />
        <LocationCard name="asia" image={images.asia} />
        <LocationCard name="australia" image={images.australia} />
        <LocationCard name="africa" image={images.africa} />
        <LocationCard name="USA" image={images.Mountant} />
        <LocationCard name="USA" />
      </div>
    </div>
  );
};

export default Locations;
