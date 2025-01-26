import React, { useRef } from "react";
import { FaAngleRight } from "react-icons/fa";
import {
  BiSolidChevronRightCircle,
  BiSolidChevronLeftCircle,
} from "react-icons/bi";

import Card from "./Card";
import "./products.css";

const Furniture = ({ furData }) => {
  const ScrollRef = useRef(0);
  const handleScrollLeft = scrollOfset => {
    ScrollRef.current.scrollLeft -= scrollOfset;
  };
  const handleScrollRight = scrollOfset => {
    ScrollRef.current.scrollLeft += scrollOfset;
  };
  return (
    <div className="main_cont" id="furniture" style={{ marginTop: "36px" }}>
      {/* <div className="d-flex justify-content-between">
        <h3 className="mx-5 mb-3" style={{ padding: "20px 0px 0px 0px" }}>
          Furniture{" "}
        </h3>
        <a
          href="/allProductsFurniture"
          className="more_btn mx-5 mb-3"
          style={{ marginRight: "24px", padding: "20px 0px 0px 0px" }}
        >
          see all
          <FaAngleRight />
        </a>{" "}
      </div> */}
      <section className="d-flex position-relative pb-xxl-3 flex-wrap card_box_div container">
        {/* <button
          className="position-absolute top-50 start-0 z-2 translate-middle mt-n5 d-none d-sm-inline-flex rounded-circle"
          style={{ marginLeft: "24px", border: "none" }}
          onClick={() => handleScrollLeft(400)}
        >
          <BiSolidChevronLeftCircle
            className="display-5"
            style={{ background: "transparent" }}
          />
        </button>
        <button
          className="position-absolute top-50 start-100 z-2 translate-middle mt-n5 d-none d-sm-inline-flex rounded-circle"
          style={{ marginLeft: "-24px", border: "none" }}
          onClick={() => handleScrollRight(400)}
        >
          <BiSolidChevronRightCircle
            className="display-5"
            style={{ background: "transparent" }}
          />
        </button> */}
        {/* <div
          className="d-flex flex-wrap justify-content-center"
          ref={ScrollRef}
        > */}
        {furData.map((entry, i) => (
          <Card key={i} entry={entry}></Card>
        ))}
        {/* </div> */}
      </section>
    </div>
  );
};

export default Furniture;
