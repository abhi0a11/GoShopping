import React from "react";
import "./products/products.css";

const Card1 = ({ pic }) => {
  return (
    <>
      <div className="card d-inline-block">
        <img src={pic} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Sofa </h5>
          <p className="card-text">12000 rs</p>
          <a href="#" className="btn btn-secondary">
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default Card1;
