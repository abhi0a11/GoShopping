import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaAngleRight } from "react-icons/fa";
import {
  BiSolidChevronRightCircle,
  BiSolidChevronLeftCircle,
} from "react-icons/bi";

import axios from "axios";
import Card from "../Card";
import "./products.css";
import { server } from "../../main";

const Furniture = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
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
    fetchProducts();
  }, []);

  const ScrollRef = useRef(0);
  const handleScrollLeft = scrollOfset => {
    ScrollRef.current.scrollLeft -= scrollOfset;
  };
  const handleScrollRight = scrollOfset => {
    ScrollRef.current.scrollLeft += scrollOfset;
  };
  return (
    <div className="main_cont" id="furniture">
      <div className="d-flex justify-content-between">
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
      </div>
      <section className="d-flex position-relative mx-5 pb-xxl-3 overflow-hidden">
        <button
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
        </button>
        <div className="d-flex scroll_container" ref={ScrollRef}>
          {data.map((entry, i) => (
            <Card key={i} entry={entry}></Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Furniture;
