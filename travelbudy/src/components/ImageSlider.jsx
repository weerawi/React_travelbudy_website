import React, { useEffect, useRef, useState } from "react";
import { icons } from "../constants";
import "./ImageSliderStyle.css";

const ImageSlider = ({ slides, autoPlay }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = goNext;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, autoPlay * 1000);
    return () => clearInterval(interval);
  }, []);

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center ",
    height: "100%",
    overflow: "hidden",
    padding: "20px 0",
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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="sliderStyles">
      <img
        className="arrow leftArrow"
        src={icons.chevronLeft}
        alt="left"
        onClick={goPrevious}
      ></img>
      <img
        className="arrow rightArrow"
        src={icons.chevronRight}
        alt="right"
        onClick={goNext}
      ></img>
      {/* 
      /////////////// slider text and others type on this div /////////////  */}
      <div style={slideStyles}>
        <div className="space"></div>
        <div className="title">Dreamy summer holidays </div>

        <div className="searchTips">search tips</div>

        <div className="sliderSearchBar">search bars </div>

        <div className="dotsContainer">
          {slides.map((slide, slideIndex) => (
            <div
              className={`dot  ${
                currentIndex == slideIndex ? "current-dot" : ""
              }`}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ◉{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
