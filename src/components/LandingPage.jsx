import React from "react";
import baseImg from "../assets/sofa_11.jpg";
import styles from "./LandingPage.module.css";
const LandingPage = () => {
  return (
    <div className={`${styles.img_box}`}>
      <img className={`${styles.landing_page_image}`} src={baseImg} alt="" />
    </div>
  );
};

export default LandingPage;
