import React, { useState } from "react";

const useFade = (props) => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  const hoverStyle = !hover
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.3)) ,url(${props.image})`,
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center ",
        height: "200px",
      }
    : {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.1)),url(${props.image}) `,
        backgroundRepeat: " no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center ",
        height: "200px",
      };

  return { hoverStyle, onMouseEnter, onMouseLeave };
};

const LocationCard = (props, { styles }) => {
  const { hoverStyle, ...fadeProps } = useFade(props);

  return (
    <a style={{ ...hoverStyle }} {...fadeProps} className="location-card">
      <div className="location-name">{props.name}</div>
    </a>
  );
};

export default LocationCard;
