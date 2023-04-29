import React, { useState } from "react";
import LocationCard from "./LocationCard.jsx";
import images from "../../constants/images.js";

const Locations = () => {
  const [viewAll, setViewAll] = useState(true);

  const toggleViewMore = () => {
    setViewAll(!viewAll);
  };

  const locationsArray = [
    { image: `${images.usa}`, name: "usa" },
    { image: `${images.canada}`, name: "canada" },
    { image: `${images.europe}`, name: "europe" },
    { image: `${images.asia}`, name: "asia" },
    { image: `${images.latinamerica}`, name: "latin america" },
    { image: `${images.australia}`, name: "australia" },
    { image: `${images.africa}`, name: "africa" },
  ];

  const locationCall = locationsArray.map((location, index) => {
    if (index < 5) {
      return <LocationCard name={location.name} image={location.image} />;
    }
  });

  const locationViewCall = locationsArray.map((location) => {
    return <LocationCard name={location.name} image={location.image} />;
  });

  return (
    <div>
      <div className="discover-titles">where are we go</div>
      <div className="location-card-container">
        {viewAll ? locationCall : locationViewCall}
        <div onClick={toggleViewMore}>
          <LocationCard
            name={viewAll ? "View all places" : "View less places"}
            image={images.mirage}
          />
        </div>
      </div>
    </div>
  );
};

export default Locations;
