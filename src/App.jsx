import { useContext, useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";
import Swiper1 from "./components/Swiper1";
import axios from "axios";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { Context, server } from "./main";
import Admin from "./pages/Admin";

function App() {
  const { setIsAuthenticated, setUser, setLoading, setRole } =
    useContext(Context);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${server}/api/v1/auth/me`, {
        withCredentials: true,
      })
      .then(res => {
        setLoading(false);
        setUser(res.data.user);
        setIsAuthenticated(true);
        setRole(res.data.user.role);
      })
      .catch(err => {
        setRole("");
        setUser({});
        setLoading(false);
        setIsAuthenticated(false);
      });
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Services></Services>
                <Swiper1></Swiper1>
                <Products department={"Furniture"}></Products>
                <Products department={"Electronnics"}></Products>
                <Products department={"Kitchen Appliances"}></Products>
                <Products department={"Decoration"}></Products>

                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login></Login>
              </>
            }
          />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/admin" element={<Admin></Admin>} />
        </Routes>
        <Toaster></Toaster>
      </Router>
    </>
  );
}

export default App;
