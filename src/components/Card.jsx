import React from "react";
// import superEth from "../assets/11.png";

export default function Card({ image, series, title, price, tag, time }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="..." />
      </div>
      <div className="card-content">
        <div className="card-heading">
          <span className="card-series">{series}</span>
          <span className="card-top"></span>
        </div>
        <div className="card-details">
          <h4 className="card-title">{title}</h4>
          <div className="card-price">
            {/* <img src={superEth} alt="..." /> */}
            <h4>{price}</h4>
          </div>
        </div>
        <div className="card-sub-details">
          <span>{tag}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
