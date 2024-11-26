import React from "react";
import { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Context, server } from "../../main";
import axios from "axios";
import "./add.css";
import Update from "./Update";
import { Navigate } from "react-router-dom";

const Search = () => {
  const [name, setName] = useState("");
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);
  const [flag, setFlag] = useState(0);

  const submitHandler = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${server}/api/v1/admin/products/${name}`,
        {
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setLoading(false);
      setFlag(data.success);
    } catch (error) {
      error?.response?.data?.auth &&
        setIsAuthenticated(error.response.data.auth);
      setLoading(false);
      toast.error(error.response.data.message);
      setFlag(data.success);
    }
  };
  if (!isAuthenticated) return <Navigate to="/login"></Navigate>;
  return (
    <>
      {flag == 0 ? (
        <form
          className="d-flex flex-column w-100 rounded-5 search_form"
          onSubmit={submitHandler}
        >
          <h1 className="head display-6">Enter Name of the product</h1>
          <input
            className="my-2 form_input"
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            placeholder="Enter Product Name"
            required
          />

          <button
            type="submit"
            className="form_btn"
            disabled={loading}
            onClick={submitHandler}
          >
            Search Product
          </button>
        </form>
      ) : (
        <Update Name={name}></Update>
      )}
    </>
  );
};

export default Search;
