import React, { useEffect, useState } from "react";
import Card from "../components/Card";

import axios from "axios";

const AllProducsDecoration = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products/?limit=0");
        const fur = res.data.products.filter(
          entry => entry.category === "home-decoration"
        );
        setData(fur);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <h1>Home Decor</h1>
      <div className="row row-cols-4">
        {data.map(entry => (
          <Card entry={entry}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllProducsDecoration;
