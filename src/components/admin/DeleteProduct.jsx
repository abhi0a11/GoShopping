import React from "react";
import { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Context, server } from "../../main";
import axios from "axios";
import "./add.css";
import { Navigate } from "react-router-dom";

const DeleteProduct = () => {
  const [name, setName] = useState("");
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const submitHandler = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.delete(
        `${server}/api/v1/admin/remove/${name}`,
        {
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      error?.response?.data?.auth &&
        setIsAuthenticated(error.response.data.auth);
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) return <Navigate to="/login" />;
  return (
    <>
      <form
        className="d-flex flex-column w-100 rounded-5"
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
          Delete Forever
        </button>
      </form>
    </>
  );
};

export default DeleteProduct;
