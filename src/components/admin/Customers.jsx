import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../../pages/admin.css";
import { Context, server } from "../../main";
import { Navigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { TbLockOff } from "react-icons/tb";
import { TbLock } from "react-icons/tb";
const AdminHeuristics = () => {
  const { isAuthenticated, setIsAuthenticated, user } = useContext(Context);
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [searchData, setSearchData] = useState([]);

  const HandleUserAction = async email => {
    try {
      if (user.email === email) {
        toast.error("Cannot Delete Yourself");
        return;
      }
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
      if (user.email === email) {
        toast.error("Cannot Block Yourself");
        return;
      }
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
        setSearchData(res.data);
      } catch (error) {
        setIsAuthenticated(error.response.data.auth);
        toast.error(error);
      }
    };
    fetchData();
  }, [refresh]);

  if (!isAuthenticated) return <Navigate to="/login"></Navigate>;

  const handleSearch = (e, word) => {
    e.preventDefault();
    word = word.toLowerCase();
    if (word.length == 0) {
      setData(searchData);
      return;
    }
    const newData = searchData.filter(d => d.name.toLowerCase().includes(word));
    setData(newData);
  };
  return (
    <article className="d-flex flex-column w-100">
      {/* <div className="d-flex flex-column w-100 px-5">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search handle of the user"
            aria-label="Search"
          />
        </form>
        <div className="border-bottom my-3">
          <div className="row">
            <div className="col">#</div>
            <div className="col">Name</div>
            <div className="col">Handle</div>
            <div className="col">Action</div>
            <div className="col">Role</div>
          </div>
        </div>

        {data.map((entry, i) => {
          return (
            <>
              <div key={i} className="border-bottom my-3">
                <div className="row">
                  <div className="col">{i + 1}</div>
                  <div className="col">{entry.name}</div>
                  <div className="col">{entry.email}</div>
                  <div className="col">
                    <button
                      key={i}
                      className="btn btn-outline-danger btn-b"
                      onClick={() => HandleUserAction(entry.email)}
                    >
                      Remove
                    </button>{" "}
                  </div>
                  <div className="col">
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
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div> */}
      <table className="table caption-top table-responsive overflow-scroll">
        <caption>
          <form
            className="form-inline"
            onSubmit={e => {
              handleSearch(e, e.target.value);
            }}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search handle of the user"
              aria-label="Search"
              onChange={e => handleSearch(e, e.target.value)}
            />
          </form>
        </caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Handle</th>
            <th scope="col">Role</th>
            <th scope="col" className="text-center">
              Remove
            </th>
            <th scope="col" className="text-center">
              Block
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, i) => (
            <>
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.role}</td>
                <td className="text-center">
                  {" "}
                  <MdDelete
                    style={{ fontSize: "1.5rem", cursor: "pointer" }}
                    key={i}
                    onClick={() => HandleUserAction(entry.email)}
                  />
                </td>
                <td className="text-center">
                  {entry.block ? (
                    <TbLockOff
                      style={{ fontSize: "1.5rem", cursor: "pointer" }}
                      key={i}
                      onClick={() => HandleUnBlock(entry.email)}
                    />
                  ) : (
                    <TbLock
                      style={{ fontSize: "1.5rem", cursor: "pointer" }}
                      key={i}
                      onClick={() => HandleBlock(entry.email)}
                    />
                  )}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </article>
  );
};

export default AdminHeuristics;
