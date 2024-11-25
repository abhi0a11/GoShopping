import React from "react";
import "./products/products.css";

const Card = ({ entry }) => {
  return (
    <>
      <div className="card d-inline-block">
        <img src={entry.images[0]} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{entry.title}</h5>
          <p className="card-text">{Math.round(entry.price * 40)} rs</p>
          <a href="#" className="btn btn-primary">
            Purchase
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
