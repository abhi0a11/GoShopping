import React, { useState } from "react";
import styles from "./Admin.module.css";
import Customers from "../components/admin/Customers";
import Add from "../components/admin/Add";
import Products from "../components/admin/Products";
import Update from "../components/admin/Update";
const Admin = ({ adminService, setAdminService }) => {
  const [prod, setprod] = useState();
  return (
    <>
      <section
        className={`d-flex justify-content-center ${styles.admin_section}`}
      >
        {/* {adminService == 1 && <DeleteProduct prod={prod} />} */}
        {adminService == 2 && <Add></Add>}
        {adminService == 3 && (
          <Products setAdminService={setAdminService} setprod={setprod} />
        )}
        {adminService == 4 && <Customers />}
        {/* {adminService == 5 && <DeleteProduct prod={prod} />} */}
        {adminService == 6 && <Update prod={prod} />}
      </section>
    </>
  );
};

export default Admin;
