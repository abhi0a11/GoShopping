import React from "react";
import Add from "./Add.jsx";
import "./admin.css";
import { useState } from "react";

import Search from "./Products.jsx";
import DeleteProduct from "./DeleteProduct.jsx";
import AdminHeuristics from "./AdminHeuristics.jsx";

const AdminFeatures = () => {
  const [formAction, setFormAction] = useState(0);
  return (
    <div
      className="p-3 p-md-5 m-md-5 text-center bg-body-tertiary bg-color-primary d-flex justify-content-center rounded-5 admin_container"
      style={{ border: "2px solid #e7e7e7" }}
    >
      <div className="d-flex flex-column p-lg-5 mx-1 my-5 btn-container">
        <button className="btn-custom" onClick={() => setFormAction(0)}>
          Heuristics
        </button>
        <button className="btn-custom" onClick={() => setFormAction(1)}>
          Add Product
        </button>
        <button className="btn-custom" onClick={() => setFormAction(2)}>
          Update Product
        </button>
        <button className="btn-custom" onClick={() => setFormAction(3)}>
          Remove Product
        </button>
      </div>

      <section className="d-flex justify-content-center form_container">
        {formAction == 0 && <AdminHeuristics></AdminHeuristics>}
        {formAction == 1 && <Add></Add>}
        {formAction == 2 && <Search></Search>}
        {formAction == 3 && <DeleteProduct />}
      </section>
    </div>
  );
};

export default AdminFeatures;
