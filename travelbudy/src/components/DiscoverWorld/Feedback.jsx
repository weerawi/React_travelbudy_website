import React, { useState } from "react";
import FeedbackCard from "./FeedbackCard";
import { icons } from "../../constants";

const Feedback = ({ feedbacks }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goPrevious = () => {
    const isFistSlide = currentIndex === 0;
    const newIndex = isFistSlide ? feedbacks.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const goNext = () => {
    const isLastSlide = currentIndex === feedbacks.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="main-feedback-container">
      <div className="discover-titles">what travellers are saying</div>

      <img
        className="feedbackarrow fleftArrow"
        src={icons.chevronLeft}
        alt="left"
        onClick={goPrevious}
      ></img>
      <img
        className="feedbackarrow frightArrow"
        src={icons.chevronRight}
        alt="right"
        onClick={goNext}
      ></img>

      <div className="feedback-card-container">
        {feedbacks.slice(0, 2).map((slide, slideIndex) => (
          <div
            className=""
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <FeedbackCard
              key={slideIndex}
              image={slide.image}
              feedback={slide.feedback}
              name={slide.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
