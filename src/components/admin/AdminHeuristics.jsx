import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../../pages/admin.css";
import { Context, server } from "../../main";
import { Navigate } from "react-router-dom";
const AdminHeuristics = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const HandleUserAction = async email => {
    try {
      const { data } = await axios.delete(
        `${server}/api/v1/admin/delete/${email}`
      );
      setRefresh(!refresh);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const HandleBlock = async email => {
    try {
      const { data } = await axios.put(`${server}/api/v1/admin/block/${email}`);
      setRefresh(!refresh);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const HandleUnBlock = async email => {
    try {
      const { data } = await axios.put(
        `${server}/api/v1/admin/unblock/${email}`
      );
      setRefresh(!refresh);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
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
  }, [refresh]);

  if (!isAuthenticated) return <Navigate to="/login"></Navigate>;
  return (
    <div
      className="cont d-flex justify-content-center rounded-5 p-5"
      id="adminHeuristics"
    >
      <table className="table caption-top table-responsive overflow-scroll">
        <caption>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search handle of the user"
              aria-label="Search"
            />
          </form>
        </caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Handle</th>
            <th scope="col">Remove</th>
            <th scope="col">Block</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, i) => (
            <>
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>
                  {" "}
                  <button
                    key={i}
                    className="btn btn-outline-danger btn-b"
                    onClick={() => HandleUserAction(entry.email)}
                  >
                    Remove
                  </button>{" "}
                </td>
                <td>
                  {entry.block ? (
                    <button
                      key={i}
                      className="btn btn-outline-danger"
                      onClick={() => HandleUnBlock(entry.email)}
                    >
                      Unblock
                    </button>
                  ) : (
                    <button
                      key={i}
                      className="btn btn-outline-danger"
                      onClick={() => HandleBlock(entry.email)}
                    >
                      Block
                    </button>
                  )}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminHeuristics;
