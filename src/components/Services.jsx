import React from "react";
import sofa from "../assets/sofa.jpg";
import sofa2 from "../assets/sofa_single.png";
import sofa3 from "../assets/single_sofa.png";
import sofa4 from "../assets/sofa_blue.png";
import bed from "../assets/bed.png";
import styles from "../components/Services.module.css";
import Slick from "./Slick";
import TypedJs from "./TypedJs";
const Services = () => {
  return (
    <>
      <div
        class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary bg-color-primary d-flex rounded-5"
        style={{ marginLeft: "30px" }}
      >
        <div class=" p-lg-5 mx-auto my-5">
          <h1 class={`display-3 fw-bold ${styles.text}`}>
            {/* NEERAJ <br /> INDUSTRIES & EXPORT */}
            Best Selling products display
          </h1>
          {/* <h3 class="fw-normal text-muted mb-3 bg-color-primary">
            Build anything you want with Trust since 2023.
          </h3> */}
          <div
            class="d-flex gap-3 justify-content-center fw-bold my-5"
            style={{ fontSize: "5rem" }}
          >
            <TypedJs />
          </div>
        </div>
      </div>
      {/* <div style={{ margin: "50px 0px" }}>
        <Slick dir={false} />
      </div>
      <div style={{ margin: "0px 0px 25px 0px" }}>
        <Slick dir={true} />
      </div> */}

      {/* <marquee
        behavior="scroll"
        direction="left"
        scrollamount="50"
        loop=""
        height="350px"
        scrolldelay="6"
      >
        <img src={sofa} />
        <img src={sofa} />
        <img src={sofa} />
        <img src={sofa} />
        <img src={sofa} />
      </marquee> */}
      {/* <marquee
        behavior="scroll"
        direction="right"
        height="350px"
        scrollamount="50"
        loop=""
        scrolldelay="6"
        // scrolldelay="6"
      >
        <img src={sofa} style={{ "aspect-ractio": "3/2 " }} />
        <img src={sofa} />
        <img src={sofa} />
        <img src={sofa} />
        <img src={sofa} />
      </marquee> */}
      {/* <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={sofa}
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Responsive left-aligned hero with image
            </h1>
            <p class="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Primary
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div class="container my-5 bg-color-primary " id="Furniture">
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis">
              Furniture Store
            </h1>
            <p class="lead">
              Quickly design and customize Sofa sets , Dining Table and much
              more at affordable rates
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Visit Store
              </button>
            </div>
          </div>
          <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img class="rounded-lg-3" src={sofa} alt="" width="720" />
          </div>
        </div>
      </div>
      <div class="container my-5 bg-color-primary">
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div class="col-lg-4 m-0 p-0 overflow-hidden shadow-lg">
            <img class="rounded-lg-3" src={sofa} alt="" width="720" />
          </div>
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis">
              Electromics Store
            </h1>
            <p class="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Visit store
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div class="container my-5 bg-color-primary">
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis">
              Home Interior Designing
            </h1>
            <p class="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Primary
              </button>
            </div>
          </div>
          <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img class="rounded-lg-3" src={sofa} alt="" width="720" />
          </div>
        </div>
      </div> */}
      {/* <div class="container my-5 bg-color-primary">
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div class="col-lg-4 m-0 p-0 overflow-hidden shadow-lg">
            <img class="rounded-lg-3" src={sofa} alt="" width="720" />
          </div>
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis">Export</h1>
            <p class="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Visit store
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div class="container my-5 bg-color-primary">
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis">
              Home Interior Designing
            </h1>
            <p class="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Primary
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
          <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img class="rounded-lg-3" src={sofa} alt="" width="720" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Services;
