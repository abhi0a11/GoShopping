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
import toast, { Toaster } from "react-hot-toast";
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
    setCartItemCnt,
  } = useContext(Context);

  const [furData, setFurData] = useState([]);
  const [kitData, setKitData] = useState([]);
  const [ElecData, setElecData] = useState([]);
  const [decoData, setDecoData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        console.log("before call");
        const res = await axios.get(`${server}/api/v1/admin/allproducts`, {
          withCredentials: true,
        });

        console.log("after call");
        let data = res.data.filter(d => d.category === "furniture");
        setFurData(data);
        data = res.data.filter(d => d.category === "kitchen-appliances");
        setKitData(data);
        data = res.data.filter(d => d.category === "electronics");
        setElecData(data);
        data = res.data.filter(d => d.category === "decoration");
        setDecoData(data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${server}/api/v1/auth/me`, {
          withCredentials: true,
        });
        console.log(data);
        setLoading(false);
        setUser(data.user);
        setIsAuthenticated(true);
        setRole(data.user.role);
        setToken(data.token);
        setCartItemCnt(data?.cart?.length);
      } catch (error) {
        setUser({});
        setLoading(false);
        setIsAuthenticated(false);
      }
    })();
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
                  <Furniture furData={furData}></Furniture>
                  {/* <Electronics ElecData={ElecData}></Electronics> */}
                  <KitchenAppliances kitData={kitData} />
                  <Swiper1 dir={true}></Swiper1>
                  <Decoration decoData={decoData}></Decoration>
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
