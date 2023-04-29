import React from "react";

const FeedbackCard = (props) => {
  return (
    <div className="feedback-card ">
      <img className="feedback-img" src={props.image} alt="" />
      <div className="feedback-name">{props.name}</div>
      <div className="feedback">{props.feedback}</div>
    </div>
  );
};

export default FeedbackCard;
