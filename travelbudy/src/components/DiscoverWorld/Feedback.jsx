import React from "react";
import { images } from "../../constants";
import FeedbackCard from "./FeedbackCard";

const Feedback = () => {
  return (
    <>
      <div className="feedback-container">
        <div className="discover-titles">what travellers are saying</div>
      </div>
      <div className="feedback-card-container">
        <FeedbackCard
          image={images.TravelGirl}
          feedback="lorem dsfg iusdh oijshd oijs doi sdoifjso foisjf "
          name="Kimmy"
        />
        <FeedbackCard
          image={images.TravelGirl}
          feedback="lorem dsfg iusdh oijshd oijs doi sdoifjso foisjf "
        />
      </div>
    </>
  );
};

export default Feedback;
