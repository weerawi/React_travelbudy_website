import React, { useState } from "react";
import "./Card.css";
import { icons } from "../constants";
import Stars from "./Stars";

const Card = (props) => {
  let text =
    "Trip.com is a rapidly-growing global online travel agency. Trip.com is here to help you plan the perfect trip. Whether you're going on holiday, taking a business trip, or looking to set up a corporate travel account, Trip.com is here to help you travel the world with cheap flights, discount hotels, and train tickets.  ";
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  // const { stars, reviews } = StarRate;

  return (
    <div className="card-container">
      <div className="img-container">
        <img className="card-img" src={props.image} alt="card-image"></img>
        <span className="card-price">From {props.price}$</span>
      </div>

      <div className="card-info-container">
        <div className="card-title">{props.title}</div>
        <Stars />
        <div className="card-publish-details">
          <div className="card-publish-icon">
            <img src={icons.calender} alt="date" />
            {props.date}
          </div>
          <div className="card-publish-icon">
            <img src={icons.location} alt="places" />
            {props.places} Places
          </div>
          <div className="card-publish-icon">
            <img src={icons.world} alt="countries" />
            {props.countries} Countries
          </div>
        </div>

        <div className="card-info">
          {isReadMore ? text.slice(0, 100) : text}
          <span onClick={toggleReadMore} className="read-or-hide">
            {isReadMore ? "...    read more" : " show less"}
          </span>
        </div>
      </div>

      <hr className="card-hr"></hr>

      <button className="card-view-btn">View Details</button>
    </div>
  );
};

export default Card;
