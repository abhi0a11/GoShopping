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
import Cart from "./components/Cart/Cart";

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
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${server}/api/v1/auth/me`, {
          withCredentials: true,
        });
        setLoading(false);
        setUser(data.user);
        setIsAuthenticated(true);
        setRole(data.user.role);
        setToken(data.token);
      } catch (error) {
        setUser({});
        setLoading(false);
        setIsAuthenticated(false);
      }
    };
    fetchUserData();
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
                  <Navbar role={"User"}></Navbar>
                  <Services></Services>
                  <Swiper1 dir={false}></Swiper1>
                  <Furniture></Furniture>
                  {/* <Electronics></Electronics> */}
                  <KitchenAppliances />
                  <Swiper1 dir={true}></Swiper1>
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
                <Navbar role={"User"}></Navbar>
                <Login></Login>
              </>
            }
          />
          <Route
            exact
            path="/register"
            element={
              <>
                <Navbar role={"User"}></Navbar>
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
                  <Navbar role={"Admin"}></Navbar>
                  <Admin></Admin>
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            exact
            path="/cart"
            element={
              <>
                <Navbar role={"User"}></Navbar>
                <Cart />
              </>
            }
          />
          <Route
            exact
            path="/allProductsFurniture"
            element={
              <>
                <Navbar role={"User"}></Navbar>
                <AllProducsFurniture />
              </>
            }
          />
          <Route
            exact
            path="/allProductsElectronics"
            element={
              <>
                <Navbar role={"User"}></Navbar>
                <AllProducsElectronics />
              </>
            }
          />
          <Route
            exact
            path="/allProductsDecoration"
            element={
              <>
                <Navbar role={"User"}></Navbar>
                <AllProducsDecoration />
              </>
            }
          />
          <Route
            exact
            path="/allProductsKitchen"
            element={
              <>
                <Navbar role={"User"}></Navbar>
                <AllProducsKitchen />
              </>
            }
          />
        </Routes>
        <Toaster></Toaster>
      </Router>
    </>
  );
}

export default App;
