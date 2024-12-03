import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaUserShield } from "react-icons/fa6";
import { TbTruckReturn } from "react-icons/tb";
import { LuPhoneCall } from "react-icons/lu";
const Services = () => {
  return (
    <>
      <div className="position-relative overflow-hidden text-center bg-body-tertiary bg-color-primary d-flex rounded-5 container mb-5">
        <div className=" mx-auto">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="https://res.cloudinary.com/daiwqouix/raw/upload/q_auto,f_auto,w_800/v1733073973/ddrye7qjh4cazkm0awlv.png"
                  srcSet="
                    https://res.cloudinary.com/daiwqouix/raw/upload/q_auto,f_auto,w_400/v1733073973/ddrye7qjh4cazkm0awlv.png 400w,
                    https://res.cloudinary.com/daiwqouix/raw/upload/q_auto,f_auto,w_800/v1733073973/ddrye7qjh4cazkm0awlv.png 800w,
                    https://res.cloudinary.com/daiwqouix/raw/upload/q_auto,f_auto,w_1200/v1733073973/ddrye7qjh4cazkm0awlv.png 1200w,
                    https://res.cloudinary.com/daiwqouix/raw/upload/q_auto,f_auto,w_1600/v1733073973/ddrye7qjh4cazkm0awlv.png 1600w
                  "
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                  className="d-block"
                  alt="..."
                />

                {/* <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div> */}
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="https://res.cloudinary.com/daiwqouix/raw/upload/q_auto,f_auto,w_800/v1733074083/yzel2eumyeu53qbaxtuz.png"
                  srcSet="
                    https://res.cloudinary.com/daiwqouix/raw/upload/q_auto,f_auto,w_400/v1733074083/yzel2eumyeu53qbaxtuz.png 400w,
                    https://res.cloudinary.com/daiwqouix/raw/upload/q_auto,f_auto,w_800/v1733074083/yzel2eumyeu53qbaxtuz.png 800w,
                    https://res.cloudinary.com/daiwqouix/raw/upload/q_auto,f_auto,w_1200/v1733074083/yzel2eumyeu53qbaxtuz.png 1200w,
                    https://res.cloudinary.com/daiwqouix/raw/upload/q_auto,f_auto,w_1600/v1733074083/yzel2eumyeu53qbaxtuz.png 1600w
                  "
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                  className="d-block"
                  alt="..."
                />
                {/* <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div> */}
              </div>
              <div className="carousel-item">
                <img
                  src="https://res.cloudinary.com/daiwqouix/raw/upload/q_auto,f_auto,w_800/v1733074161/at82pywqbkoo6c403iec.png"
                  srcSet="
                    https://res.cloudinary.com/daiwqouix/raw/upload/q_auto,f_auto,w_400/v1733074161/at82pywqbkoo6c403iec.png 400w,
                    https://res.cloudinary.com/daiwqouix/raw/upload/q_auto,f_auto,w_800/v1733074161/at82pywqbkoo6c403iec.png 800w,
                    https://res.cloudinary.com/daiwqouix/raw/upload/q_auto,f_auto,w_1200/v1733074161/at82pywqbkoo6c403iec.png 1200w,
                    https://res.cloudinary.com/daiwqouix/raw/upload/q_auto,f_auto,w_1600/v1733074161/at82pywqbkoo6c403iec.png 1600w
                  "
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
                  className="d-block"
                  alt="..."
                />

                {/* <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div> */}
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* <div style={{ margin: "50px 0px" }}>
        <Slick dir={false} />
      </div>
      <div style={{ margin: "0px 0px 25px 0px" }}>
        <Slick dir={true} />
      </div> */}

      {/* <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://res.cloudinary.com/daiwqouix/raw/upload/q_auto,f_auto,w_800/v1733074161/at82pywqbkoo6c403iec.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Most Seller Product
            </h1>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/*  */}

      <div class="container">
        <div class="row justify-content-around text-center">
          <div class="card col" style={{ width: "18rem", background: "#fff" }}>
            {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
            <LiaShippingFastSolid
              class="card-img-top"
              style={{ fontSize: "8rem", padding: "10px", marginTop: "15px" }}
            />
            <div class="card-body">
              <h5 class="card-title">Free Shiping</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div class="card col" style={{ width: "18rem", background: "#fff" }}>
            <FaUserShield
              class="card-img-top"
              style={{ fontSize: "7rem", padding: "15px", marginTop: "15px" }}
            />
            <div class="card-body">
              <h5 class="card-title">Secure Payments</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card col" style={{ width: "18rem", background: "#fff" }}>
            <TbTruckReturn
              class="card-img-top"
              style={{ fontSize: "8rem", padding: "10px", marginTop: "15px" }}
            />
            <div class="card-body">
              <h5 class="card-title">30 days return</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card col" style={{ width: "18rem", background: "#fff" }}>
            <LuPhoneCall
              class="card-img-top"
              style={{ fontSize: "8rem", padding: "15px", marginTop: "15px" }}
            />
            <div class="card-body">
              <h5 class="card-title">27/7 support</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      {/* <div className="container my-5 bg-color-primary " id="Furniture">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Furniture Store
            </h1>
            <p className="lead">
              Quickly design and customize Sofa sets , Dining Table and much
              more at affordable rates
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Visit Store
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src={sofa} alt="" width="720" />
          </div>
        </div>
      </div> */}
      {/* <div className="container my-5 bg-color-primary">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-4 m-0 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src={sofa} alt="" width="720" />
          </div>
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Electromics Store
            </h1>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Visit store
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="container my-5 bg-color-primary">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Home Interior Designing
            </h1>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Primary
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src={sofa} alt="" width="720" />
          </div>
        </div>
      </div> */}
      {/* <div className="container my-5 bg-color-primary">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-4 m-0 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src={sofa} alt="" width="720" />
          </div>
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Export</h1>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Visit store
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="container my-5 bg-color-primary">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Home Interior Designing
            </h1>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src={sofa} alt="" width="720" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Services;
