import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../../pages/admin.css";
import { Context, server } from "../../main";
import { Navigate } from "react-router-dom";
const AdminHeuristics = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${server}/api/v1/admin/all`, {
          withCredentials: true,
        });
        setData(res.data);
      } catch (error) {
        setIsAuthenticated(error.response.data.auth);
        toast.error(error);
      }
    };
    fetchData();
  }, []);

  if (!isAuthenticated) return <Navigate to="/login"></Navigate>;
  return (
    <div className="cont">
      <table className="table caption-top table-responsive">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Handle</th>
            <th scope="col">Role</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{entry.name}</td>
              <td>{entry.email}</td>
              <td>{entry.role}</td>
              <td>Active</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminHeuristics;
