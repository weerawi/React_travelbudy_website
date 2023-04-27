import React, { useState } from "react";
import "./ImageSlider.css";
import { icons } from "../constants";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
    margin: "0",
  };

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center ",
    height: "90vh",
  };

  const leftArrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    left: "32px",
    width: "45px",
    height: "45px",
    zIndex: 1,
    cursor: "pointer",
    border: "2px solid rgb(211, 211, 211)",
    borderRadius: "50%",
  };
  const rightArrow = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    right: "32px",
    width: "45px",
    height: "45px",
    zIndex: 1,
    cursor: "pointer",
    border: "2px solid black",
    borderRadius: "50%",
  };

  const goPrevious = () => {
    const isFistSlide = currentIndex === 0;
    const newIndex = isFistSlide ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const goNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  return (
    <div style={sliderStyles}>
      <img
        src={icons.chevronLeft}
        alt="left"
        style={leftArrow}
        onClick={goPrevious}
      ></img>
      <img
        src={icons.chevronRight}
        alt="right"
        style={rightArrow}
        onClick={goNext}
      ></img>
      <div style={slideStyles}>hi</div>
    </div>
  );
};

export default ImageSlider;
