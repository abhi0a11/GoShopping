import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaUserShield } from "react-icons/fa6";
import { TbTruckReturn } from "react-icons/tb";
import { LuPhoneCall } from "react-icons/lu";
import { GiThreeLeaves } from "react-icons/gi";
import { PiStoolFill } from "react-icons/pi";
import { FaBoxOpen } from "react-icons/fa";
const Services = ({ Page }) => {
  return (
    <>
      {Page == 1 && (
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
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
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

          <div className="container">
            <div className="row justify-content-around text-center">
              <div
                className="card col"
                style={{ width: "18rem", background: "#fff" }}
              >
                {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                <LiaShippingFastSolid
                  className="card-img-top"
                  style={{
                    fontSize: "8rem",
                    padding: "10px",
                    marginTop: "15px",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Free Shiping</h5>
                  <p className="card-text text-muted">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>

              <div
                className="card col"
                style={{ width: "18rem", background: "#fff" }}
              >
                <FaUserShield
                  className="card-img-top"
                  style={{
                    fontSize: "7rem",
                    padding: "15px",
                    marginTop: "15px",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Secure Payments</h5>
                  <p className="card-text text-muted">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div
                className="card col"
                style={{ width: "18rem", background: "#fff" }}
              >
                <TbTruckReturn
                  className="card-img-top"
                  style={{
                    fontSize: "8rem",
                    padding: "10px",
                    marginTop: "15px",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">30 days return</h5>
                  <p className="card-text text-muted">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div
                className="card col"
                style={{ width: "18rem", background: "#fff" }}
              >
                <LuPhoneCall
                  className="card-img-top"
                  style={{
                    fontSize: "8rem",
                    padding: "15px",
                    marginTop: "15px",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">27/7 support</h5>
                  <p className="card-text text-muted">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {Page == 2 && (
        <div className="container mt-5">
          <div className="row justify-content-around text-center">
            <div
              className="card col"
              style={{ width: "25rem", background: "#fff" }}
            >
              {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
              <GiThreeLeaves
                className="card-img-top"
                style={{ fontSize: "8rem", padding: "10px", marginTop: "15px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Eco-friendly</h5>
                <p className="card-text text-muted">
                  Decorate your space with eco-friendly furniture with low VOCs,
                  environmentally friendly materials and safe coatings.
                </p>
              </div>
            </div>

            <div
              className="card col"
              style={{ width: "25rem", background: "#fff" }}
            >
              <PiStoolFill
                className="card-img-top"
                style={{ fontSize: "7rem", padding: "15px", marginTop: "15px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Unbeatable quality</h5>
                <p className="card-text text-muted">
                  We choose raw materials from the best manufacturers, so our
                  furniture and decor are of the highest quality at the best
                  prices.
                </p>
              </div>
            </div>
            <div
              className="card col"
              style={{ width: "25rem", background: "#fff" }}
            >
              <FaBoxOpen
                className="card-img-top"
                style={{ fontSize: "8rem", padding: "10px", marginTop: "15px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Delivery to your door</h5>
                <p className="card-text text-muted">
                  We will deliver to your door anywhere in the world. If you're
                  not 100% satisfied, let us know within 30 days and we'll solve
                  the problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
