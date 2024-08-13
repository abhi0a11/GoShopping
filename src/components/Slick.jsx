import React from "react";
import Slider from "react-slick";
import sofa from "../assets/sofa.jpg";
import sofa2 from "../assets/sofa_single.png";
import sofa3 from "../assets/single_sofa.png";
import sofa4 from "../assets/sofa_blue.png";
import bed from "../assets/bed.png";
import styles from "../components/Services.module.css";
function Slick({ dir, vdir }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    rtl: dir,
    pauseOnDotsHover: true,
    vertical: vdir,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={sofa} className={`${styles.image}`} />
        </div>
        <div>
          <img src={sofa2} className={`${styles.image}`} />
        </div>
        <div>
          <img src={sofa3} className={`${styles.image}`} />
        </div>
        <div>
          <img src={sofa4} className={`${styles.image}`} />
        </div>
        <div>
          <img src={bed} className={`${styles.image}`} />
        </div>
        {/* <div>
          <img src={sofa} />
        </div> */}
      </Slider>
    </div>
  );
}

export default Slick;
