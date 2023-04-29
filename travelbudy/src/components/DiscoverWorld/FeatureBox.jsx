import React from "react";

const FeatureBox = (props) => {
  const bgcolorstyle = {
    backgroundColor: `${props.bgcolor}`,
  };
  return (
    <>
      <a style={bgcolorstyle} className="feature-box feature-box-link">
        <img className="feature-box-icons" src={props.image} alt="icons" />
        <div className="feature-box-title">{props.title}</div>
        <div className="feature-box-details">{props.details}</div>
      </a>
    </>
  );
};

export default FeatureBox;
