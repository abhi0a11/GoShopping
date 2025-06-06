import { useContext, useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar.jsx";
import Services from "./components/Services";
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
import AdminNavbar from "./components/navbar/AdminNavbar.jsx";
import OrderHistory from "./components/order/OrderHistory.jsx";
import Profile from "./components/admin/Profile.jsx";
import LandingPage from "./components/LandingPage.jsx";
import ImageGallery from "./components/ImageGallery.jsx";

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
  const [adminService, setAdminService] = useState(3);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${server}/api/v1/admin/products/furniture`,
          {
            withCredentials: true,
          }
        );
        // console.log(res.data);
        setFurData(res.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    })();
    (async () => {
      try {
        const res = await axios.get(
          `${server}/api/v1/admin/products/kitchen-appliances`,
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
          `${server}/api/v1/admin/products/electronics`,
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
          `${server}/api/v1/admin/products/decoration`,
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
        setCartItemCnt(res?.data?.cart?.length);
      })
      .catch(e => {
        setUser({});
        setRole("");
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
                  <LandingPage></LandingPage>
                  <Services Page={1}></Services>
                  <ImageGallery></ImageGallery>
                  {/* <Swiper1 dir={false}></Swiper1> */}
                  <Furniture furData={furData}></Furniture>
                  {/* <Electronics ElecData={ElecData}></Electronics> */}
                  {/* <KitchenAppliances kitData={kitData} /> */}
                  {/* <Swiper1 dir={true}></Swiper1> */}
                  {/* <Decoration decoData={decoData}></Decoration> */}
                  <Services Page={2}></Services>
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
                  <article className="d-flex gap-5">
                    <AdminNavbar
                      setAdminService={setAdminService}
                    ></AdminNavbar>
                    <Admin
                      setAdminService={setAdminService}
                      adminService={adminService}
                    ></Admin>
                  </article>
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
              isAuthenticated ? (
                <>
                  <Navbar></Navbar>
                  <Cart />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            exact
            path="/allProductsFurniture"
            element={
              <>
                <Navbar></Navbar>
                <AllProducsFurniture />
              </>
            }
          />
          <Route
            exact
            path="/allProductsElectronics"
            element={
              <>
                <Navbar></Navbar>
                <AllProducsElectronics />
              </>
            }
          />
          <Route
            exact
            path="/allProductsDecoration"
            element={
              <>
                <Navbar></Navbar>
                <AllProducsDecoration />
              </>
            }
          />
          <Route
            exact
            path="/allProductsKitchen"
            element={
              <>
                <Navbar></Navbar>
                <AllProducsKitchen />
              </>
            }
          />
          <Route
            exact
            path="/orderHistory"
            element={
              isAuthenticated ? (
                <>
                  <Navbar></Navbar>
                  <Profile val={2} />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            exact
            path="/profile"
            element={
              // isAuthenticated ? (
              <>
                <Navbar></Navbar>
                <Profile val={1} />
              </>
              // ) : (
              //   <Navigate to="/login" />
              // )
            }
          />
        </Routes>
        <Toaster></Toaster>
      </Router>
    </>
  );
}

export default App;
