import { useContext, useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Swiper1 from "./components/Swiper1";
import axios from "axios";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { Context, server } from "./main";
import Admin from "./pages/Admin";

import AllProducsFurniture from "./pages/AllProducsFurniture";
import AllProducsElectronics from "./pages/AllProducsElectronics";
import AllProducsDecoration from "./pages/AllProducsDecoration";
import AllProducsKitchen from "./pages/AllProducsKitchen";
import Furniture from "./components/products/Furniture";
import KitchenAppliances from "./components/products/KitchenAppliances";
import Decoration from "./components/products/Decoration";

function App() {
  const {
    isAuthenticated,
    setIsAuthenticated,
    setUser,
    setLoading,
    setRole,
    setToken,
    role,
  } = useContext(Context);

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
        setToken(res.data.token);
      })
      .catch(err => {
        setUser({});
        setLoading(false);
        setIsAuthenticated(false);
      });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              role == "Admin" ? (
                <Navigate to="/admin" />
              ) : (
                <>
                  <Navbar></Navbar>
                  <Services></Services>
                  {/* <Swiper1></Swiper1> */}
                  <Furniture></Furniture>
                  {/* <Electronics></Electronics> */}
                  <KitchenAppliances></KitchenAppliances>
                  <Decoration></Decoration>
                  <Footer></Footer>
                </>
              )
            }
          />
          <Route
            exact
            path="/login"
            element={
              <>
                <Navbar></Navbar>
                <Login></Login>
              </>
            }
          />
          <Route
            exact
            path="/register"
            element={
              <>
                <Navbar></Navbar>
                <Register></Register>
              </>
            }
          />

          <Route
            exact
            path="/admin"
            element={
              isAuthenticated ? (
                <>
                  <Navbar></Navbar>
                  <Admin></Admin>
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            exact
            path="/allProductsFurniture"
            element={<AllProducsFurniture />}
          />
          <Route
            exact
            path="/allProductsElectronics"
            element={<AllProducsElectronics></AllProducsElectronics>}
          />
          <Route
            exact
            path="/allProductsDecoration"
            element={<AllProducsDecoration></AllProducsDecoration>}
          />
          <Route
            exact
            path="/allProductsKitchen"
            element={<AllProducsKitchen></AllProducsKitchen>}
          />
        </Routes>
        <Toaster></Toaster>
      </Router>
    </>
  );
}

export default App;
