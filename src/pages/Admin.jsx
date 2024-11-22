import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import toast from "react-hot-toast";
import "./admin.css";
const Admin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${server}/api/v1/admin/all`, {
          withCredentials: true,
        });
        setData(res.data);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="cont">
      <table class="table caption-top table-responsive">
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
            <tr>
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

export default Admin;
