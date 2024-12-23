import React from "react";
import styles from "./Button.module.css";
const Button = () => {
  return (
    <>
      <div className="d-flex gap-2">
        <button className="btn btn-success"> Save </button>
        <button className="btn btn-danger"> Cancel </button>
      </div>
    </>
  );
};

export default Button;
