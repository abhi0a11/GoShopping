import React from "react";
import styles from "./Field.module.css";
const Field = ({ text }) => {
  return (
    <div className="row">
      <div className={`col ${styles.text_field}`}>{text}</div>
    </div>
  );
};

export default Field;
