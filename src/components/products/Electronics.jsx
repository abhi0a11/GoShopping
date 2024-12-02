import React, { useContext, useEffect, useRef, useState } from "react";

import { FaAngleRight } from "react-icons/fa";
import {
  BiSolidChevronRightCircle,
  BiSolidChevronLeftCircle,
} from "react-icons/bi";

import Card from "../Card";
import "./products.css";
const Electronics = ({ ElecData }) => {
  const ScrollRef = useRef(0);
  const handleScrollLeft = scrollOfset => {
    ScrollRef.current.scrollLeft -= scrollOfset;
  };
  const handleScrollRight = scrollOfset => {
    ScrollRef.current.scrollLeft += scrollOfset;
  };

  return (
    <div className="main_cont" id="electronics">
      <div className="d-flex justify-content-between">
        <h3 className="mx-5 mb-3">Electronics </h3>
        <a
          href="/allProductsElectronics"
          className="more_btn"
          style={{ marginRight: "24px" }}
        >
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
          {ElecData.map((entry, i) => (
            <Card key={i} entry={entry} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Electronics;
