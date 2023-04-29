import React from "react";

const LocationCard = (props) => {
  const LocationCardStyles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.3)) ,url(${props.image})`,
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center ",
    height: "200px",
  };

  return (
    <a style={LocationCardStyles} className="location-card">
      <div className="location-name">{props.name}</div>
    </a>
  );
};

export default LocationCard;
