import React, { useContext } from "react";
import styles from "./AdminNavbar.module.css";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";
import { BiSolidAddToQueue } from "react-icons/bi";
import { RiCoupon2Fill } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
const AdminNavbar = ({ setAdminService }) => {
  const { isAuthenticated, setIsAuthenticated, setUser, setRole, setLoading } =
    useContext(Context);
  const navigate = useNavigate();
  const logoutHandler = async () => {
    setLoading(true);
    try {
      await axios.get(`${server}/api/v1/auth/logout`, {
        withCredentials: true,
      });

      delete axios.defaults.headers.common["Authorization"];
      toast.success("Logged out successfully");
      setIsAuthenticated(false);
      setUser({});
      setRole("");
      setLoading(false);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };
  if (!isAuthenticated) return <Navigate to="/login"></Navigate>;
  return (
    <nav className={`d-flex flex-column ${styles.nav}`}>
      <div className={`${styles.logo}`}>GoShopping</div>
      <ul>
        <li
          className={`${styles.nav_items}`}
          onClick={() => setAdminService(1)}
        >
          <MdDashboard style={{ marginRight: "10px" }} /> Dashboard
        </li>
        <li
          className={`${styles.nav_items}`}
          onClick={() => setAdminService(2)}
        >
          <BiSolidAddToQueue style={{ marginRight: "10px" }} /> Add Product
        </li>
        <li
          className={`${styles.nav_items}`}
          onClick={() => setAdminService(3)}
        >
          <IoBag style={{ marginRight: "10px" }} /> Products
        </li>
        <li
          className={`${styles.nav_items}`}
          onClick={() => setAdminService(4)}
        >
          <FaUsers style={{ marginRight: "10px" }} /> Customers
        </li>
        <li
          className={`${styles.nav_items}`}
          onClick={() => setAdminService(5)}
        >
          <CgFileDocument style={{ marginRight: "10px" }} /> Transactions
        </li>
        <li
          className={`${styles.nav_items}`}
          onClick={() => setAdminService(5)}
        >
          <RiCoupon2Fill style={{ marginRight: "10px" }} /> Coupons
        </li>
        <li className={`${styles.nav_items}`} onClick={() => logoutHandler()}>
          <TbLogout2 style={{ marginRight: "10px" }} /> Logout
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
