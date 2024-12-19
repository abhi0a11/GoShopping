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
        const res = await axios.get(
          `${server}/api/v1/admin/allproducts/furniture`,
          {
            withCredentials: true,
          }
        );
        console.log(res.data);
        setFurData(res.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    })();
    (async () => {
      try {
        const res = await axios.get(
          `${server}/api/v1/admin/allproducts/kitchen-appliances`,
          {
            withCredentials: true,
          }
        );
        setKitData(res.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    })();
    (async () => {
      try {
        const res = await axios.get(
          `${server}/api/v1/admin/allproducts/electronics`,
          {
            withCredentials: true,
          }
        );
        setElecData(res.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    })();
    (async () => {
      try {
        const res = await axios.get(
          `${server}/api/v1/admin/allproducts/decoration`,
          {
            withCredentials: true,
          }
        );

        setDecoData(res.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        console.log("ye le ");
        const { data } = await axios.get(`${server}/api/v1/auth/me`, {
          withCredentials: true,
        });

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
                  {/* <Swiper1 dir={false}></Swiper1> */}
                  <Furniture furData={furData}></Furniture>
                  {/* <Electronics ElecData={ElecData}></Electronics> */}
                  <KitchenAppliances kitData={kitData} />
                  {/* <Swiper1 dir={true}></Swiper1> */}
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
