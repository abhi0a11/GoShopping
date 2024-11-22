import React, { useRef } from "react";
import styles from "../components/Products.module.css";
import { FaAngleRight } from "react-icons/fa";
import {
  BiSolidChevronRightCircle,
  BiSolidChevronLeftCircle,
} from "react-icons/bi";

import sofa2 from "../assets/sofa_single.png";
import sofa3 from "../assets/single_sofa.png";
import sofa4 from "../assets/sofa_blue.png";
import bed from "../assets/bed.png";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Card from "./Card";
import "./products.css";
const Products = ({ department }) => {
  const ScrollRef = useRef(0);
  const handleScrollLeft = scrollOfset => {
    console.log("left trigerred", ScrollRef.current.scrollLeft);
    ScrollRef.current.scrollLeft -= scrollOfset;
    console.log("left trigerred", ScrollRef.current.scrollLeft);
  };
  const handleScrollRight = scrollOfset => {
    // console.log("right trigerred", ScrollRef.current.scrollRight);
    ScrollRef.current.scrollLeft += scrollOfset;
    console.log("right trigerred", ScrollRef.current.scrollRight);
  };
  return (
    <div className="main_cont">
      <div className="d-flex justify-content-between">
        <h3 className="mx-5 mb-3">{department} </h3>
        <a href="#" className="more_btn" style={{ marginRight: "24px" }}>
          see all
          <FaAngleRight />
        </a>{" "}
      </div>
      <section className="d-flex position-relative mx-5 pb-xxl-3 overflow-hidden">
        <button
          className="position-absolute top-50 start-0 z-2 translate-middle mt-n5 d-none d-sm-inline-flex rounded-circle"
          style={{ marginLeft: "24px", border: "none" }}
          onClick={() => handleScrollLeft(1000)}
        >
          <BiSolidChevronLeftCircle
            className="display-5"
            style={{ background: "transparent" }}
          />
        </button>
        <button
          className="position-absolute top-50 start-100 z-2 translate-middle mt-n5 d-none d-sm-inline-flex rounded-circle"
          style={{ marginLeft: "-24px", border: "none" }}
          onClick={() => handleScrollRight(1000)}
        >
          <BiSolidChevronRightCircle
            className="display-5"
            style={{ background: "transparent" }}
          />
        </button>
        <div className="d-flex scroll_container" ref={ScrollRef}>
          <Card pic={bed}></Card>
          <Card pic={sofa2}></Card>
          <Card pic={sofa3}></Card>
          <Card pic={sofa4}></Card>
          <Card pic={sofa2}></Card>
          <Card pic={sofa4}></Card>
          <Card pic={bed}></Card>
          <Card pic={sofa3}></Card>
          <Card pic={sofa3}></Card>
          <Card pic={sofa2}></Card>
          <Card pic={bed}></Card>
          <Card pic={sofa4}></Card>
          <Card pic={sofa3}></Card>
          <Card pic={sofa2}></Card>
          <Card pic={bed}></Card>
          <Card pic={sofa4}></Card>
        </div>
      </section>
    </div>
  );
};

export default Products;

// const Products = () => {
//   return (
//     <>
//       {/* <section
//         class={`bg-body-tertiary min-vh-100 d-flex align-items-center overflow-hidden ${styles.cont}`}
//       >
//         <div class="container h-100 py-5 my-md-2 my-lg-3 my-xl-4 mb-xxl-5">
//           <h1 class={`display-4 text-center mx-auto mb-4 ${styles.head}`}>
//             Everything You Need for a Modern Interior
//           </h1>
//           <div class="row align-items-center justify-content-center gx-3 gx-sm-4 mb-3 mb-sm-4">

//             <div class="col-lg-1 col-xl-2 d-none d-lg-flex justify-content-end">
//               <div
//                 class={`position-relative user-select-none ${styles.slider}`}
//               >
//                 <span class="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-50 rounded-circle d-none-dark"></span>
//                 <span
//                   class="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-circle d-none-dark d-none d-block-dark"
//                   style={{{{ opacity: ".05" }}}}
//                 ></span>
//                 <div
//                   class="swiper position-relative z-2 opacity-60 rounded-circle pe-none swiper-coverflow swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress"
//                   id="thumbsPrev"
//                   data-swiper='{
//                   "allowTouchMove": false,
//                   "loop": true,
//                   "effect": "coverflow",
//                   "coverflowEffect": {
//                     "rotate": 0,
//                     "scale": 1.3,
//                     "depth": -200,
//                     "stretch": -100,
//                     "slideShadows": false
//                   }
//                 }'
//                 >
//                   <div
//                     class="swiper-wrapper"
//                     style={{{{ transform: "translate3d(0px, 0px, 0px)" }}}}
//                     id="swiper-wrapper-167c0b10d911d5fc"
//                     aria-live="polite"
//                   >
//                     <div
//                       class="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"
//                       style={{{{}}
//                         width: "262px",
//                         transform:
//                           "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)",
//                         zIndex: "1",
//                       }}
//                       role="group"
//                       aria-label="1 / 4"
//                       data-swiper-slide-index="0"
//                     >
//                       <div class="ratio ratio-1x1">
//                         <img src={sofa2} alt="Thumbnail" //>
//                       </div>
//                     </div>
//                     <div
//                       class="swiper-slide swiper-slide-next"
//                       style={{{{}}
//                         width: "262px",
//                         transform:
//                           "translate3d(100px, 0px, 200px) rotateX(0deg) rotateY(0deg) scale(1.3); z-index: 0",
//                       }}
//                       role="group"
//                       aria-label="2 / 4"
//                       data-swiper-slide-index="1"
//                     >
//                       <div class="ratio ratio-1x1">
//                         <img src={sofa3} alt="Thumbnail" //>
//                       </div>
//                     </div>
//                     <div
//                       class="swiper-slide"
//                       style={{{{}}
//                         width: "262px",
//                         transform:
//                           "translate3d(200px, 0px, 400px) rotateX(0deg) rotateY(0deg) scale(1.6)",
//                         zIndex: "-1",
//                       }}
//                       role="group"
//                       aria-label="3 / 4"
//                       data-swiper-slide-index="2"
//                     >
//                       <div class="ratio ratio-1x1">
//                         <img src={sofa4} alt="Thumbnail" //>
//                       </div>
//                     </div>
//                     <div
//                       class="swiper-slide"
//                       role="group"
//                       aria-label="4 / 4"
//                       style={{{{}}
//                         width: "262px",
//                         transform:
//                           "translate3d(300px, 0px, 600px) rotateX(0deg) rotateY(0deg) scale(1.9)",
//                         zIndex: "-2",
//                       }}
//                       data-swiper-slide-index="3"
//                     >
//                       <div class="ratio ratio-1x1">
//                         <img
//                           src="assets/img/home/furniture/hero-slider/th03.png"
//                           alt="Thumbnail/"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <span
//                     class="swiper-notification"
//                     aria-live="assertive"
//                     aria-atomic="true"
//                   ></span>
//                   <span
//                     class="swiper-notification"
//                     aria-live="assertive"
//                     aria-atomic="true"
//                   ></span>
//                 </div>
//               </div>
//             </div>

//             <div class="col-auto col-sm-1 order-1 order-lg-2 d-flex align-items-center justify-content-center">
//               <button
//                 type="button"
//                 class="btn-prev btn btn-lg btn-icon btn-outline-secondary rounded-circle animate-slide-start"
//                 aria-label="Previous slide"
//                 tabindex="0"
//                 aria-controls="swiper-wrapper-d393d71105895b9fd"
//               >
//                 <i class="ci-chevron-left fs-xl animate-target"></i>
//               </button>
//             </div>

//             <div class="col-sm-10 col-lg-8 col-xl-6 order-3">
//               <div
//                 class="swiper user-select-none rounded-pill swiper-coverflow swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress"
//                 data-swiper='{
//                 "loop": true,
//                 "grabCursor": true,
//                 "speed": 600,
//                 "controlSlider": ["#thumbsPrev", "#thumbsNext", "#captions"],
//                 "effect": "coverflow",
//                 "coverflowEffect": {
//                   "rotate": 0,
//                   "scale": 1.3,
//                   "depth": -200,
//                   "stretch": -100,
//                   "slideShadows": false
//                 },
//                 "navigation": {
//                   "prevEl": ".btn-prev",
//                   "nextEl": ".btn-next"
//                 }
//               }'
//               >
//                 <div
//                   class="swiper-wrapper"
//                   style={{{{}}
//                     cursor: "grab",
//                     transform: "translate3d(0px, 0px, 0px)",
//                   }}
//                   id="swiper-wrapper-d393d71105895b9fd"
//                   aria-live="polite"
//                 >
//                   <div
//                     class="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"
//                     data-swiper-binded="#description1"
//                     style={{{{}}
//                       width: "636px",
//                       transform:
//                         "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)",
//                       zIndex: "1",
//                     }}
//                     role="group"
//                     aria-label="1 / 4"
//                     data-swiper-slide-index="0"
//                   >
//                     <div class={`ratio ${styles.sw}`}>
//                       <img
//                         src="assets/img/home/furniture/hero-slider/01.png"
//                         alt="Image/"
//                       />
//                     </div>
//                   </div>
//                   <div
//                     class="swiper-slide swiper-slide-next"
//                     data-swiper-binded="#description2"
//                     style={{{{}}
//                       width: "636px",
//                       transform:
//                         "translate3d(100px, 0px, 200px) rotateX(0deg) rotateY(0deg) scale(1.3)",
//                       zIndex: "0",
//                     }}
//                     role="group"
//                     aria-label="2 / 4"
//                     data-swiper-slide-index="1"
//                   >
//                     <div class={`ratio ${styles.sw}`}>
//                       <img
//                         src="assets/img/home/furniture/hero-slider/02.png"
//                         alt="Image/"
//                       />
//                     </div>
//                   </div>
//                   <div
//                     class="swiper-slide"
//                     data-swiper-binded="#description3"
//                     style={{{{}}
//                       width: "636px",
//                       transform:
//                         "translate3d(200px, 0px, 400px) rotateX(0deg) rotateY(0deg) scale(1.6)",
//                       zIndex: "-1",
//                     }}
//                     role="group"
//                     aria-label="3 / 4"
//                     data-swiper-slide-index="2"
//                   >
//                     <div class={`ratio ${styles.sw}`}>
//                       <img
//                         src="assets/img/home/furniture/hero-slider/03.png"
//                         alt="Image/"
//                       />
//                     </div>
//                   </div>
//                   <div
//                     class="swiper-slide"
//                     data-swiper-binded="#description4"
//                     role="group"
//                     aria-label="4 / 4"
//                     style={{{{}}
//                       width: "636px",
//                       transform:
//                         "translate3d(300px, 0px, 600px) rotateX(0deg) rotateY(0deg) scale(1.9)",
//                       zIndex: "-2",
//                     }}
//                     data-swiper-slide-index="3"
//                   >
//                     <div class={`ratio ${styles.sw}`}>
//                       <img
//                         src="assets/img/home/furniture/hero-slider/04.png"
//                         alt="Image/"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <span
//                   class="swiper-notification"
//                   aria-live="assertive"
//                   aria-atomic="true"
//                 ></span>
//               </div>
//             </div>

//             <div class="col-auto col-sm-1 order-2 order-sm-3 order-lg-4 d-flex align-items-center justify-content-center">
//               <button
//                 type="button"
//                 class="btn-next btn btn-lg btn-icon btn-outline-secondary rounded-circle animate-slide-end"
//                 aria-label="Next slide"
//                 tabindex="0"
//                 aria-controls="swiper-wrapper-d393d71105895b9fd"
//               >
//                 <i class="ci-chevron-right fs-xl animate-target"></i>
//               </button>
//             </div>

//             <div class="col-lg-1 col-xl-2 order-lg-5 d-none d-lg-block">
//               <div
//                 class="position-relative user-select-none"
//                 style={{{{ width: "262px" }}}}
//               >
//                 <span class="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-50 rounded-circle d-none-dark"></span>
//                 <span
//                   class="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-circle d-none-dark d-none d-block-dark"
//                   style={{{{ opacity: ".05" }}}}
//                 ></span>
//                 <div
//                   class="swiper position-relative z-2 opacity-60 rounded-circle pe-none swiper-coverflow swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress"
//                   id="thumbsNext"
//                   data-swiper='{
//                   "allowTouchMove": false,
//                   "loop": true,
//                   "effect": "coverflow",
//                   "coverflowEffect": {
//                     "rotate": 0,
//                     "scale": 1.3,
//                     "depth": -200,
//                     "stretch": -100,
//                     "slideShadows": false
//                   }
//                 }'
//                 >
//                   <div
//                     class="swiper-wrapper"
//                     style={{{{ transform: "translate3d(0px, 0px, 0px)" }}}}
//                     id="swiper-wrapper-ba881072dc4a5e96d"
//                     aria-live="polite"
//                   >
//                     <div
//                       class="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"
//                       style={{{{}}
//                         width: "262px",
//                         transform:
//                           "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)",
//                         zIndex: "1",
//                       }}
//                       role="group"
//                       aria-label="1 / 4"
//                       data-swiper-slide-index="0"
//                     >
//                       <div class="ratio ratio-1x1">
//                         <img
//                           src="assets/img/home/furniture/hero-slider/th02.png"
//                           alt="Thumbnail/"
//                         />
//                       </div>
//                     </div>
//                     <div
//                       class="swiper-slide swiper-slide-next"
//                       style={{{{}}
//                         width: "262px",
//                         transform:
//                           "translate3d(100px, 0px, 200px) rotateX(0deg) rotateY(0deg) scale(1.3)",
//                         zIndex: "0",
//                       }}
//                       role="group"
//                       aria-label="2 / 4"
//                       data-swiper-slide-index="1"
//                     >
//                       <div class="ratio ratio-1x1">
//                         <img
//                           src="assets/img/home/furniture/hero-slider/th03.png"
//                           alt="Thumbnail/"
//                         />
//                       </div>
//                     </div>
//                     <div
//                       class="swiper-slide"
//                       style={{{{}}
//                         width: "262px",
//                         transform:
//                           "translate3d(200px, 0px, 400px) rotateX(0deg) rotateY(0deg) scale(1.6)",
//                         zIndex: "-1",
//                       }}
//                       role="group"
//                       aria-label="3 / 4"
//                       data-swiper-slide-index="2"
//                     >
//                       <div class="ratio ratio-1x1">
//                         <img
//                           src="assets/img/home/furniture/hero-slider/th04.png"
//                           alt="Thumbnail/"
//                         />
//                       </div>
//                     </div>
//                     <div
//                       class="swiper-slide"
//                       role="group"
//                       aria-label="4 / 4"
//                       style={{{{}}
//                         width: "262px",
//                         transform:
//                           "translate3d(300px, 0px, 600px) rotateX(0deg) rotateY(0deg) scale(1.9)",
//                         zIndex: "-2",
//                       }}
//                       data-swiper-slide-index="3"
//                     >
//                       <div class="ratio ratio-1x1">
//                         <img
//                           src="assets/img/home/furniture/hero-slider/th01.png"
//                           alt="Thumbnail/"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <span
//                     class="swiper-notification"
//                     aria-live="assertive"
//                     aria-atomic="true"
//                   ></span>
//                   <span
//                     class="swiper-notification"
//                     aria-live="assertive"
//                     aria-atomic="true"
//                   ></span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div
//             class="swiper swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden"
//             id="captions"
//             data-swiper='{
//             "allowTouchMove": false,
//             "loop": true,
//             "effect": "fade"
//           }'
//           >
//             <div
//               class="swiper-wrapper"
//               id="swiper-wrapper-ca6da74a710e8fa0f"
//               aria-live="polite"
//             >
//               <div
//                 class="swiper-slide bg-body-tertiary text-center swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"
//                 style={{{{}}
//                   width: " 1296px",
//                   opacity: "1",
//                   transform: "translate3d(0px, 0px, 0px)",
//                 }}
//                 role="group"
//                 aria-label="1 / 4"
//                 data-swiper-slide-index="0"
//               >
//                 <h3 class="text-secondary-emphasis fs-base fw-normal mb-2">
//                   Navy blue low sofa for relaxation
//                 </h3>
//                 <p class="h4 mb-4">$1,250.00</p>
//                 <a
//                   class="btn btn-lg btn-dark rounded-pill"
//                   href="shop-product-furniture.html"
//                 >
//                   Shop now
//                   <i class="ci-chevron-right fs-lg ms-2 me-n2"></i>
//                 </a>
//               </div>
//               <div
//                 class="swiper-slide bg-body-tertiary text-center swiper-slide-next"
//                 style={{{{}}
//                   width: "1296px",
//                   opacity: "0",
//                   transform: "translate3d(-1296px, 0px, 0px)",
//                 }}
//                 role="group"
//                 aria-label="2 / 4"
//                 data-swiper-slide-index="1"
//               >
//                 <h3 class="text-secondary-emphasis fs-base fw-normal mb-2">
//                   Armchair with wooden legs 70x120 cm
//                 </h3>
//                 <p class="h4 mb-4">$269.99</p>
//                 <a
//                   class="btn btn-lg btn-dark rounded-pill"
//                   href="shop-product-furniture.html"
//                 >
//                   Shop now
//                   <i class="ci-chevron-right fs-lg ms-2 me-n2"></i>
//                 </a>
//               </div>
//               <div
//                 class="swiper-slide bg-body-tertiary text-center"
//                 style={{{{}}
//                   width: "1296px",
//                   opacity: "0",
//                   transform: " translate3d(-2592px, 0px, 0px)",
//                 }}
//                 role="group"
//                 aria-label="3 / 4"
//                 data-swiper-slide-index="2"
//               >
//                 <h3 class="text-secondary-emphasis fs-base fw-normal mb-2">
//                   Bed frame light gray 140x200 cm
//                 </h3>
//                 <p class="h4 mb-4">$760.00</p>
//                 <a
//                   class="btn btn-lg btn-dark rounded-pill"
//                   href="shop-product-furniture.html"
//                 >
//                   Shop now
//                   <i class="ci-chevron-right fs-lg ms-2 me-n2"></i>
//                 </a>
//               </div>
//               <div
//                 class="swiper-slide bg-body-tertiary text-center"
//                 role="group"
//                 aria-label="4 / 4"
//                 style={{{{}}
//                   width: "1296px",
//                   opacity: " 0",
//                   transform: "translate3d(-3888px, 0px, 0px)",
//                 }}
//                 data-swiper-slide-index="3"
//               >
//                 <h3 class="text-secondary-emphasis fs-base fw-normal mb-2">
//                   Blue armchair with iron legs
//                 </h3>
//                 <p class="h4 mb-4">$220.00</p>
//                 <a
//                   class="btn btn-lg btn-dark rounded-pill"
//                   href="shop-product-furniture.html"
//                 >
//                   Shop now
//                   <i class="ci-chevron-right fs-lg ms-2 me-n2"></i>
//                 </a>
//               </div>
//             </div>
//             <span
//               class="swiper-notification"
//               aria-live="assertive"
//               aria-atomic="true"
//             ></span>
//             <span
//               class="swiper-notification"
//               aria-live="assertive"
//               aria-atomic="true"
//             ></span>
//           </div>
//         </div>
//       </section> */}

//       <section class="container pb-5 mt-md-n2 mb-2 mb-sm-3 mb-md-4 mb-xl-5">
//         {/* <!-- Heading --> */}
//         <div class="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4">
//           <h2 class="h3 mb-0">Popular products</h2>
//           <div class="nav ms-3">
//             <a
//               class="nav-link animate-underline px-0 py-2"
//               href="shop-catalog-furniture.html"
//             >
//               <span class="animate-target">View all</span>
//               <IoIosArrowForward class="ci-chevron-right fs-base ms-1" />
//             </a>
//           </div>
//         </div>

//         {/* <!-- Product carousel --> */}
//         <div class="position-relative pb-xxl-3">
//           {/* <!-- External slider prev/next buttons visible on screens > 500px wide (sm breakpoint) --> */}
//           <button
//             type="button"
//             class="popular-prev btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-start position-absolute top-50 start-0 z-2 translate-middle mt-n5 d-none d-sm-inline-flex"
//             aria-label="Previous slide"
//             tabindex="0"
//             aria-controls="swiper-wrapper-545965366dac4f87"
//           >
//             <IoIosArrowBack />
//           </button>
//           <button
//             type="button"
//             class="popular-next btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-end position-absolute top-50 start-100 z-2 translate-middle mt-n5 d-none d-sm-inline-flex"
//             aria-label="Next slide"
//             tabindex="0"
//             aria-controls="swiper-wrapper-545965366dac4f87"
//           >
//             <IoIosArrowForward class="ci-chevron-right fs-lg animate-target" />
//           </button>

//           {/* <!-- Slider --> */}
//           <div
//             class="swiper pt-3 pt-sm-4 swiper-initialized swiper-horizontal swiper-backface-hidden"
//             data-swiper='{
//             "slidesPerView": 2,
//             "spaceBetween": 24,
//             "loop": true,
//             "navigation": {
//               "prevEl": ".popular-prev",
//               "nextEl": ".popular-next"
//             },
//             "breakpoints": {
//               "768": {
//                 "slidesPerView": 3
//               },
//               "992": {
//                 "slidesPerView": 4
//               }
//             }
//           }'
//           >
//             <div
//               class="swiper-wrapper"
//               id="swiper-wrapper-545965366dac4f87"
//               aria-live="polite"
//             >
//               {/* <!-- Item --> */}
//               <div
//                 class="swiper-slide swiper-slide-active"
//                 style={{ width: "306px", marginRight: "24px" }}
//                 role="group"
//                 aria-label="1 / 6"
//                 data-swiper-slide-index="0"
//               >
//                 <div class="animate-underline">
//                   <a
//                     class="hover-effect-opacity ratio ratio-1x1 d-block mb-3"
//                     href="shop-product-furniture.html"
//                   >
//                     <img
//                       src="assets/img/shop/furniture/04.png"
//                       class="hover-effect-target opacity-100"
//                       alt="Product"
//                     />
//                     <img
//                       src="assets/img/shop/furniture/04-hover.jpg"
//                       class="position-absolute top-0 start-0 hover-effect-target opacity-0 rounded-4"
//                       alt="Room"
//                     />
//                   </a>
//                   <div class="d-flex gap-2 mb-3">
//                     <input
//                       type="radio"
//                       class="btn-check"
//                       name="colors-4"
//                       id="color-4-1"
//                       checked=""
//                     />
//                     <label
//                       for="color-4-1"
//                       class="btn btn-color fs-base"
//                       style={{ color: "#384043" }}
//                     >
//                       <span class="visually-hidden">Dark gray</span>
//                     </label>
//                     <input
//                       type="radio"
//                       class="btn-check"
//                       name="colors-4"
//                       id="color-4-2"
//                     />
//                     <label
//                       for="color-4-2"
//                       class="btn btn-color fs-base"
//                       style={{ color: "#bdc5da" }}
//                     >
//                       <span class="visually-hidden">Light gray</span>
//                     </label>
//                     <input
//                       type="radio"
//                       class="btn-check"
//                       name="colors-4"
//                       id="color-4-3"
//                     />
//                     <label
//                       for="color-4-3"
//                       class="btn btn-color fs-base"
//                       style={{ color: "#526f99" }}
//                     >
//                       <span class="visually-hidden">Bluish gray</span>
//                     </label>
//                   </div>
//                   <h3 class="mb-2">
//                     <a
//                       class="d-block fs-sm fw-medium text-truncate"
//                       href="shop-product-furniture.html"
//                     >
//                       <span class="animate-target">
//                         Bed frame light gray 140x200 cm
//                       </span>
//                     </a>
//                   </h3>
//                   <div class="h6">$760.00</div>
//                   <div class="d-flex gap-2">
//                     <button
//                       type="button"
//                       class="btn btn-dark w-100 rounded-pill px-3"
//                     >
//                       Add to cart
//                     </button>
//                     <button
//                       type="button"
//                       class="btn btn-icon btn-secondary rounded-circle animate-pulse"
//                       aria-label="Add to wishlist"
//                     >
//                       <i class="ci-heart fs-base animate-target"></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* <!-- Item --> */}
//               <div
//                 class="swiper-slide swiper-slide-next"
//                 style={{ width: "306px", marginRight: "24px" }}
//                 role="group"
//                 aria-label="2 / 6"
//                 data-swiper-slide-index="1"
//               >
//                 <div class="animate-underline">
//                   <a
//                     class="hover-effect-opacity ratio ratio-1x1 d-block mb-3"
//                     href="shop-product-furniture.html"
//                   >
//                     <img
//                       src={sofa2}
//                       class="hover-effect-target opacity-100"
//                       alt="Product"
//                     />
//                     <img
//                       src="assets/img/shop/furniture/05-hover.jpg"
//                       class="position-absolute top-0 start-0 hover-effect-target opacity-0 rounded-4"
//                       alt="Room"
//                     />
//                   </a>
//                   <div class="d-flex gap-2 mb-3">
//                     <input
//                       type="radio"
//                       class="btn-check"
//                       name="colors-5"
//                       id="color-5-1"
//                       checked=""
//                     />
//                     <label
//                       for="color-5-1"
//                       class="btn btn-color fs-base"
//                       style={{ color: "#3a94b5" }}
//                     >
//                       <span class="visually-hidden">Blue</span>
//                     </label>
//                     <input
//                       type="radio"
//                       class="btn-check"
//                       name="colors-5"
//                       id="color-5-2"
//                     />
//                     <label
//                       for="color-5-2"
//                       class="btn btn-color fs-base"
//                       style={{ color: "#777d7E" }}
//                     >
//                       <span class="visually-hidden">Gray</span>
//                     </label>
//                   </div>
//                   <h3 class="mb-2">
//                     <a
//                       class="d-block fs-sm fw-medium text-truncate"
//                       href="shop-product-furniture.html"
//                     >
//                       <span class="animate-target">
//                         Blue armchair with iron legs
//                       </span>
//                     </a>
//                   </h3>
//                   <div class="h6">$220.00</div>
//                   <div class="d-flex gap-2">
//                     <button
//                       type="button"
//                       class="btn btn-dark w-100 rounded-pill px-3"
//                     >
//                       Add to cart
//                     </button>
//                     <button
//                       type="button"
//                       class="btn btn-icon btn-secondary rounded-circle animate-pulse"
//                       aria-label="Add to wishlist"
//                     >
//                       <i class="ci-heart fs-base animate-target"></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* <!-- Item --> */}
//               <div
//                 class="swiper-slide"
//                 style={{ width: " 306px", marginRight: "24px" }}
//                 role="group"
//                 aria-label="3 / 6"
//                 data-swiper-slide-index="2"
//               >
//                 <div class="animate-underline">
//                   <a
//                     class="hover-effect-opacity ratio ratio-1x1 d-block mb-3"
//                     href="shop-product-furniture.html"
//                   >
//                     <div class="position-absolute top-0 start-0 z-2 mt-2 mt-sm-3 ms-2 ms-sm-3">
//                       <span class="badge text-bg-danger">-13%</span>
//                     </div>
//                     <img
//                       src={sofa3}
//                       class="hover-effect-target opacity-100"
//                       alt="Product"
//                     />
//                     <img
//                       src="assets/img/shop/furniture/06-hover.jpg"
//                       class="position-absolute top-0 start-0 hover-effect-target opacity-0 rounded-4"
//                       alt="Room"
//                     />
//                   </a>
//                   <div class="d-flex gap-2 mb-3">
//                     <input
//                       type="radio"
//                       class="btn-check"
//                       name="colors-6"
//                       id="color-6-1"
//                       checked=""
//                     />
//                     <label
//                       for="color-6-1"
//                       class="btn btn-color fs-base"
//                       style={{ color: " #bdaB9e" }}
//                     >
//                       <span class="visually-hidden">Beige</span>
//                     </label>
//                     <input
//                       type="radio"
//                       class="btn-check"
//                       name="colors-6"
//                       id="color-6-2"
//                     />
//                     <label
//                       for="color-6-2"
//                       class="btn btn-color fs-base"
//                       style={{ color: "#d65c46" }}
//                     >
//                       <span class="visually-hidden">Terracotta</span>
//                     </label>
//                     <input
//                       type="radio"
//                       class="btn-check"
//                       name="colors-6"
//                       id="color-6-3"
//                     />
//                     <label
//                       for="color-6-3"
//                       class="btn btn-color fs-base"
//                       style={{ color: " #e0e5eb" }}
//                     >
//                       <span class="visually-hidden">White</span>
//                     </label>
//                   </div>
//                   <h3 class="mb-2">
//                     <a
//                       class="d-block fs-sm fw-medium text-truncate"
//                       href="shop-product-furniture.html"
//                     >
//                       <span class="animate-target">
//                         {/* Loft-style =lamp 120x80 cm */}
//                       </span>
//                     </a>
//                   </h3>
//                   <div class="h6">
//                     $140.00{" "}
//                     <del class="fs-sm fw-normal text-body-tertiary">
//                       $160.00
//                     </del>
//                   </div>
//                   <div class="d-flex gap-2">
//                     <button
//                       type="button"
//                       class="btn btn-dark w-100 rounded-pill px-3"
//                     >
//                       Add to cart
//                     </button>
//                     <button
//                       type="button"
//                       class="btn btn-icon btn-secondary rounded-circle animate-pulse"
//                       aria-label="Add to wishlist"
//                     >
//                       <i class="ci-heart fs-base animate-target"></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* <!-- Item --> */}
//               <div
//                 class="swiper-slide"
//                 style={{ width: " 306px", marginRight: " 24px" }}
//                 role="group"
//                 aria-label="4 / 6"
//                 data-swiper-slide-index="3"
//               >
//                 <div class="animate-underline">
//                   <a
//                     class="hover-effect-opacity ratio ratio-1x1 d-block mb-3"
//                     href="shop-product-furniture.html"
//                   >
//                     <img
//                       src={bed}
//                       class="hover-effect-target opacity-100"
//                       alt="Product"
//                     />
//                     <img
//                       src="assets/img/shop/furniture/08-hover.jpg"
//                       class="position-absolute top-0 start-0 hover-effect-target opacity-0 rounded-4"
//                       alt="Room"
//                     />
//                   </a>
//                   <div class="d-flex gap-2 mb-3">
//                     <input
//                       type="radio"
//                       class="btn-check"
//                       name="colors-8"
//                       id="color-8-1"
//                       checked=""
//                     />
//                     <label
//                       for="color-8-1"
//                       class="btn btn-color fs-base"
//                       style={{ color: "#305853" }}
//                     >
//                       <span class="visually-hidden">Green</span>
//                     </label>
//                     <input
//                       type="radio"
//                       class="btn-check"
//                       name="colors-8"
//                       id="color-8-2"
//                     />
//                     <label
//                       for="color-8-2"
//                       class="btn btn-color fs-base"
//                       style={{ color: " #34598f" }}
//                     >
//                       <span class="visually-hidden">Blue</span>
//                     </label>
//                   </div>
//                   <h3 class="mb-2">
//                     <a
//                       class="d-block fs-sm fw-medium text-truncate"
//                       href="shop-product-furniture.html"
//                     >
//                       <span class="animate-target">
//                         Armchair with wooden legs 60x100 cm
//                       </span>
//                     </a>
//                   </h3>
//                   <div class="h6">$320.50</div>
//                   <div class="d-flex gap-2">
//                     <button
//                       type="button"
//                       class="btn btn-dark w-100 rounded-pill px-3"
//                     >
//                       Add to cart
//                     </button>
//                     <button
//                       type="button"
//                       class="btn btn-icon btn-secondary rounded-circle animate-pulse"
//                       aria-label="Add to wishlist"
//                     >
//                       <i class="ci-heart fs-base animate-target"></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* <!-- Item --> */}
//               <div
//                 class="swiper-slide"
//                 style={{ width: "306px", marginRight: "24px" }}
//                 role="group"
//                 aria-label="5 / 6"
//                 data-swiper-slide-index="4"
//               >
//                 <div class="animate-underline">
//                   <a
//                     class="hover-effect-opacity ratio ratio-1x1 d-block mb-3"
//                     href="shop-product-furniture.html"
//                   >
//                     <img
//                       src="assets/img/shop/furniture/02.png"
//                       class="hover-effect-target opacity-100"
//                       alt="Product"
//                     />
//                     <img
//                       src="assets/img/shop/furniture/02-hover.jpg"
//                       class="position-absolute top-0 start-0 hover-effect-target opacity-0 rounded-4"
//                       alt="Room"
//                     />
//                   </a>
//                   <div class="d-flex gap-2 mb-3">
//                     <input
//                       type="radio"
//                       class="btn-check"
//                       name="colors-2"
//                       id="color-2-1"
//                       checked=""
//                     />
//                     <label
//                       for="color-2-1"
//                       class="btn btn-color fs-base"
//                       style={{ color: "#6a6f7b" }}
//                     >
//                       <span class="visually-hidden">Gray</span>
//                     </label>
//                     <input
//                       type="radio"
//                       class="btn-check"
//                       name="colors-2"
//                       id="color-2-2"
//                     />
//                     <label
//                       for="color-2-2"
//                       class="btn btn-color fs-base"
//                       style={{ color: "#373b42" }}
//                     >
//                       <span class="visually-hidden">Dark gray</span>
//                     </label>
//                     <input
//                       type="radio"
//                       class="btn-check"
//                       name="colors-2"
//                       id="color-2-3"
//                     />
//                     <label
//                       for="color-2-3"
//                       class="btn btn-color fs-base"
//                       style={{ color: "#216aae" }}
//                     >
//                       <span class="visually-hidden">Blue</span>
//                     </label>
//                     <input
//                       type="radio"
//                       class="btn-check"
//                       name="colors-2"
//                       id="color-2-4"
//                     />
//                     <label
//                       for="color-2-4"
//                       class="btn btn-color fs-base"
//                       style={{ color: "#187c1c" }}
//                     >
//                       <span class="visually-hidden">Green</span>
//                     </label>
//                   </div>
//                   <h3 class="mb-2">
//                     <a
//                       class="d-block fs-sm fw-medium text-truncate"
//                       href="shop-product-furniture.html"
//                     >
//                       <span class="animate-target">
//                         Decorative flowerpot with a plant
//                       </span>
//                     </a>
//                   </h3>
//                   <div class="h6">$107.50</div>
//                   <div class="d-flex gap-2">
//                     <button
//                       type="button"
//                       class="btn btn-dark w-100 rounded-pill px-3"
//                     >
//                       Add to cart
//                     </button>
//                     <button
//                       type="button"
//                       class="btn btn-icon btn-secondary rounded-circle animate-pulse"
//                       aria-label="Add to wishlist"
//                     >
//                       <i class="ci-heart fs-base animate-target"></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* <!-- Item --> */}
//               <div
//                 class="swiper-slide"
//                 role="group"
//                 aria-label="6 / 6"
//                 data-swiper-slide-index="5"
//                 style={{ width: "306px", marginRight: "24px" }}
//               >
//                 <div class="animate-underline">
//                   <a
//                     class="hover-effect-opacity ratio ratio-1x1 d-block mb-3"
//                     href="shop-product-furniture.html"
//                   >
//                     <img
//                       src="assets/img/shop/furniture/07.png"
//                       class="hover-effect-target opacity-100"
//                       alt="Product"
//                     />
//                     <img
//                       src="assets/img/shop/furniture/07-hover.jpg"
//                       class="position-absolute top-0 start-0 hover-effect-target opacity-0 rounded-4"
//                       alt="Room"
//                     />
//                   </a>
//                   <div class="d-flex gap-2 mb-3">
//                     <input
//                       type="radio"
//                       class="btn-check"
//                       name="colors-7"
//                       id="color-7-1"
//                       checked=""
//                     />
//                     <label
//                       for="color-7-1"
//                       class="btn btn-color fs-base"
//                       style={{ color: " #71706c" }}
//                     >
//                       <span class="visually-hidden">Dark gray</span>
//                     </label>
//                     <input
//                       type="radio"
//                       class="btn-check"
//                       name="colors-7"
//                       id="color-7-2"
//                     />
//                     <label
//                       for="color-7-2"
//                       class="btn btn-color fs-base"
//                       style={{ color: "#c1c3b8" }}
//                     >
//                       <span class="visually-hidden">Light gray</span>
//                     </label>
//                   </div>
//                   <h3 class="mb-2">
//                     <a
//                       class="d-block fs-sm fw-medium text-truncate"
//                       href="shop-product-furniture.html"
//                     >
//                       <span class="animate-target">
//                         Chair with a cushion for the legs
//                       </span>
//                     </a>
//                   </h3>
//                   <div class="h6">$435.00</div>
//                   <div class="d-flex gap-2">
//                     <button
//                       type="button"
//                       class="btn btn-dark w-100 rounded-pill px-3"
//                     >
//                       Add to cart
//                     </button>
//                     <button
//                       type="button"
//                       class="btn btn-icon btn-secondary rounded-circle animate-pulse"
//                       aria-label="Add to wishlist"
//                     >
//                       <i class="ci-heart fs-base animate-target"></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <span
//               class="swiper-notification"
//               aria-live="assertive"
//               aria-atomic="true"
//             ></span>
//           </div>
//         </div>

//         {/* <!-- External slider prev/next buttons visible on screens < 500px wide (sm breakpoint) --> */}
//         <div class="d-flex justify-content-center gap-2 mt-1 pt-4 d-sm-none">
//           <button
//             type="button"
//             class="popular-prev btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-start me-1"
//             aria-label="Previous slide"
//             tabindex="0"
//             aria-controls="swiper-wrapper-545965366dac4f87"
//           >
//             <i class="ci-chevron-left fs-lg animate-target"></i>
//           </button>
//           <button
//             type="button"
//             class="popular-next btn btn-icon btn-outline-secondary bg-body rounded-circle animate-slide-end"
//             aria-label="Next slide"
//             tabindex="0"
//             aria-controls="swiper-wrapper-545965366dac4f87"
//           >
//             <i class="ci-chevron-right fs-lg animate-target"></i>
//           </button>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Products;
