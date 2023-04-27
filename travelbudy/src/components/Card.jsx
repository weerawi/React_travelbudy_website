import React from "react";
import { images } from "../constants";
import "./Card.css";

const Card = (props) => {
  // const viewDetails = (() = {
  //   rawcontent().slice(0,10);
  // })

  return (
    <div className="card-container">
      <div className="img-container">
        <img className="card-img" src={props.image} alt="ref"></img>
        <span className="card-price">From {props.price}$</span>
      </div>

      <div className="card-info-container">
        <div className="card-title">{props.title}</div>
        <div className="card-info">
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          porro cum illum voluptates aspernatur hic sed, ut deserunt esse.
          Ratione eligendi illum dignissimos enim quod beatae corrupti esse
          exercitationem aspernatur!
        </div>
      </div>

      <hr className="card-hr"></hr>

      <button className="card-view-btn">View Details</button>
    </div>
  );
};

export default Card;
