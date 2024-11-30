import React, { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaAngleRight } from "react-icons/fa";
import {
  BiSolidChevronRightCircle,
  BiSolidChevronLeftCircle,
} from "react-icons/bi";

import sofa2 from "../../assets/sofa_single.png";
import sofa3 from "../../assets/single_sofa.png";
import sofa4 from "../../assets/sofa_blue.png";
import bed from "../../assets/bed.png";
import axios from "axios";
import Card from "../Card";
import Card1 from "../Card1";
import "./products.css";
import { Context, server } from "../../main";

const Furniture = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${server}/api/v1/admin/allproducts/furniture`,
          {
            withCredentials: true,
          }
        );
        setData(res.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchData();
  }, []);

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
    <div className="main_cont" id="furniture">
      <div className="d-flex justify-content-between">
        <h3 className="mx-5 mb-3" style={{ padding: "20px 0px 0px 0px" }}>
          Furniture{" "}
        </h3>
        <a
          href="/allProductsFurniture"
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
          {data.map((entry, i) => (
            <Card key={i} entry={entry}></Card>
          ))}

          <Card1 pic={sofa2}></Card1>
          <Card1 pic={sofa3}></Card1>
          <Card1 pic={sofa4}></Card1>
          <Card1 pic={bed}></Card1>
        </div>
      </section>
    </div>
  );
};

export default Furniture;
