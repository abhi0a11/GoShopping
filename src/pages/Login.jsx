import React, { useContext, useState } from "react";
import "./login.css";
import axios from "axios";
import { Context, server } from "../main";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

import styles from "../components/Services.module.css";
import TypedJs from "../components/TypedJs";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [role, setRole] = useState("User");
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);
  const submitHandler = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${server}/api/v1/auth/login`,
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      setLoading(false);
      setIsAuthenticated(true);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
      setLoading(false);
      console.error(error);
    }
  };
  if (isAuthenticated)
    return role === "User" ? (
      <Navigate to="/"></Navigate>
    ) : (
      <Navigate to="/admin"></Navigate>
    );
  return (
    <div className="d-flex justify-content-center ">
      <div
        className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary bg-color-primary d-flex rounded-5"
        style={{ marginLeft: "30px" }}
      >
        <div className=" p-lg-5 mx-auto my-5 brand_container">
          <h1 className={`display-5 fw-bold ${styles.text}`}>
            {/* NEERAJ <br /> INDUSTRIES & EXPORT */}
            Abhishek Industries and Exports
          </h1>
          <h3
            className="fw-normal text-muted mb-3 bg-color-primary"
            style={{ fontSize: "1rem" }}
          >
            Build anything you want with Trust since 2023.
          </h3>
          <div
            className="d-flex gap-3 justify-content-center fw-bold my-5"
            style={{ fontSize: "2rem" }}
          >
            <TypedJs />
          </div>
        </div>

        <section className="d-flex justify-content-center form_container">
          <form
            className="d-flex flex-column w-100 rounded-5 login_form"
            onSubmit={submitHandler}
          >
            <h1 className="head">Welcome Back!</h1>
            <input
              className="my-2 form_input"
              value={email}
              onChange={e => setemail(e.target.value)}
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="my-2 form_input"
              value={password}
              onChange={e => setpassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
            <select
              name="role"
              id="Role"
              value={role}
              onChange={e => setRole(e.target.value)}
              className="my-2 form_input"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
              required
            </select>
            <button type="submit" className="form_btn" disabled={loading}>
              Login
            </button>
            <h6 className="mt-3 mb-1">New User?</h6>
            <a href={"/register"}> Sign Up</a>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
