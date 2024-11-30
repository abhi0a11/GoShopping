import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import Card1 from "../components/Card1";
import sofa2 from "../assets/sofa_single.png";
import sofa3 from "../assets/single_sofa.png";
import sofa4 from "../assets/sofa_blue.png";
import bed from "../assets/bed.png";
import { Context, server } from "../main";
import axios from "axios";
import toast from "react-hot-toast";

const AllProducsFurniture = () => {
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

  return (
    <div className="container">
      <h1>Furnitures</h1>
      <div className="row row-cols-4">
        {data.map((entry, i) => (
          <Card key={i} entry={entry}></Card>
        ))}
        <Card1 pic={sofa2}></Card1>
        <Card1 pic={sofa3}></Card1>
        <Card1 pic={sofa4}></Card1>
        <Card1 pic={bed}></Card1>
      </div>
    </div>
  );
};

export default AllProducsFurniture;
