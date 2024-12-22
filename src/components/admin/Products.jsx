import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { RiAddCircleFill } from "react-icons/ri";
import axios from "axios";
import { server } from "../../main";
const Products = ({ setAdminService, setprod }) => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    const fetchAllData = async () => {
      const res = await axios.get(`${server}/api/v1/admin/allproducts`, {
        withCredentials: true,
      });
      setData(res.data);
      setSearchData(res.data);
    };
    fetchAllData();
  }, []);
  const refineSearch = (e, word) => {
    e.preventDefault();
    word = word.toLowerCase();
    if (word.length == 0) {
      setData(searchData);
      return;
    }
    const newData = searchData.filter(entry =>
      entry.name.toLowerCase().includes(word)
    );
    setData(newData);
  };
  const manageHandler = product => {
    setprod(product);
    setAdminService(6);
  };
  return (
    <>
      <section className={`${styles.cart_container} mx-auto overflow-scroll`}>
        <div
          className={`d-flex justify-content-between w-100 ${styles.heading}`}
        >
          <span className={`ms-3 ${styles.txt}`}>Products</span>
          <span className={`ms-3 ${styles.txt}`}>
            <RiAddCircleFill
              style={{ fontSize: "2rem", cursor: "pointer" }}
              onClick={() => setAdminService(2)}
            />
          </span>
        </div>

        <table className="table caption-top table-responsive overflow-scroll">
          <caption>
            <form
              className="form-inline"
              onSubmit={e => refineSearch(e, e.target.value)}
            >
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search handle of the user"
                aria-label="Search"
                onChange={e => refineSearch(e, e.target.value)}
              />
            </form>
          </caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Stock</th>
              <th scope="col">Price</th>
              <th scope="col" className="text-center">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>
                  <img
                    src={entry.pictures[0]}
                    alt=""
                    className={`${styles.cart_img}`}
                  />
                </td>
                <td>{entry.name}</td>
                <td>{entry.stock}</td>
                <td>{entry.price}</td>
                <td className="text-center">
                  <button
                    className="btn btn-success"
                    onClick={() => manageHandler(entry)}
                  >
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Products;
