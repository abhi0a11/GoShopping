import React, { useEffect, useState } from "react";
import Card from "../components/Card";

import axios from "axios";
import { server } from "../main";
import toast from "react-hot-toast";

const AllProducsDecoration = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${server}/api/v1/admin/products/decoration`,
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
      <h1>Home Decor</h1>
      <div className="row row-cols-4">
        {data.map((entry, i) => (
          <Card key={i} entry={entry}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllProducsDecoration;
