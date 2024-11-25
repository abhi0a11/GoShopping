import React, { useEffect, useState } from "react";

import "./admin.css";
import AdminHeuristics from "../components/admin/AdminHeuristics";
import AdminFeatures from "../components/admin/AdminFeatures";
const Admin = () => {
  return (
    <>
      <AdminFeatures></AdminFeatures>
      <AdminHeuristics></AdminHeuristics>
    </>
  );
};

export default Admin;
