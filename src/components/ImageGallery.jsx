import React from "react";
import styles from "./ImageGallery.module.css";
import sofa1 from "../assets/sofa_1.jpg";
import sofa2 from "../assets/sofa_2.jpg";
import sofa3 from "../assets/sofa_3.webp";
import sofa4 from "../assets/sofa_4.jpg";
import sofa5 from "../assets/sofa_5.jpg";
import sofa9 from "../assets/sofa_9.jpg";

import sofa14 from "../assets/1_sofa.jpg";
import sofa15 from "../assets/2_sofa.jpg";
import sofa16 from "../assets/3_sofa.jpg";
import sofa17 from "../assets/4_sofa.jpg";
import sofa18 from "../assets/5_sofa.jpg";
import sofa19 from "../assets/6_sofa.jpg";
import sofa20 from "../assets/7_sofa.jpg";
import sofa21 from "../assets/8_sofa.jpg";
import sofa22 from "../assets/9_sofa.jpg";
import sofa23 from "../assets/10_sofa.jpg";
import sofa24 from "../assets/11_sofa.jpg";
import sofa25 from "../assets/12_sofa.jpg";

const ImageGallery = () => {
  return (
    <div
      className={` ${styles.image_gallery_container} gap-3 border-3 container`}
    >
      <img className={`${styles.image_}`} src={sofa14} alt="" />
      <img className={`${styles.image_}`} src={sofa1} alt="" />
      <img className={`${styles.image_}`} src={sofa3} alt="" />
      <img className={`${styles.image_}`} src={sofa23} alt="" />
      <img className={`${styles.image_}`} src={sofa4} alt="" />
      <img className={`${styles.image_}`} src={sofa15} alt="" />
      <img className={`${styles.image_}`} src={sofa16} alt="" />
      <img className={`${styles.image_}`} src={sofa17} alt="" />
      <img className={`${styles.image_}`} src={sofa18} alt="" />
      <img className={`${styles.image_}`} src={sofa19} alt="" />
      <img className={`${styles.image_}`} src={sofa20} alt="" />
      <img className={`${styles.image_}`} src={sofa21} alt="" />
      <img className={`${styles.image_}`} src={sofa22} alt="" />
      <img className={`${styles.image_}`} src={sofa2} alt="" />
      <img className={`${styles.image_}`} src={sofa5} alt="" />
    </div>
  );
};

export default ImageGallery;
