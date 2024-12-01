import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { server } from "../main";
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
      </div>
    </div>
  );
};

export default AllProducsFurniture;
