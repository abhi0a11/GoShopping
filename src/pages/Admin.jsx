import React, { useContext, useEffect, useState } from "react";

import "./admin.css";
import AdminHeuristics from "../components/admin/AdminHeuristics";
import AdminFeatures from "../components/admin/AdminFeatures";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
const Admin = () => {
  return (
    <>
      <AdminFeatures></AdminFeatures>
      <AdminHeuristics></AdminHeuristics>
    </>
  );
};

export default Admin;
