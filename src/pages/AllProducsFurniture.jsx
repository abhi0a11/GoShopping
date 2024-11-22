import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import Card1 from "../components/Card1";
import sofa2 from "../assets/sofa_single.png";
import sofa3 from "../assets/single_sofa.png";
import sofa4 from "../assets/sofa_blue.png";
import bed from "../assets/bed.png";
import { Context } from "../main";
import axios from "axios";

const AllProducsFurniture = () => {
  const [data, setData] = useState([]);
  const { loading, setLoading } = useContext(Context);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://dummyjson.com/products/?limit=0");

        const fur = res.data.products.filter(
          entry => entry.category === "furniture"
        );
        setData(fur);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Furnitures</h1>
      <div className="row row-cols-4">
        {data.map(entry => (
          <Card entry={entry}></Card>
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
