import React, { useContext } from "react";
import "./products.css";
import { Context, server } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";

const Card = ({ entry }) => {
  const { user, setUser, setLoading, loading, setCartItemCnt } =
    useContext(Context);
  const HandleAddToCart = async () => {
    setLoading(true);
    try {
      if (!user || !Array.isArray(user.cart)) {
        toast.error("Please Login First!");
      } else {
        let newUser = user;
        let product = entry;
        let isPresent = 0;
        for (const prod of newUser?.cart) {
          if (prod.name === entry.name) {
            prod.cnt = prod.cnt + 1;
            setUser(newUser);
            isPresent = 1;
            break;
          }
        }
        if (!isPresent) {
          product.cnt = 1;
          newUser.cart.push(product);
        }
        const { data } = await axios.put(
          `${server}/api/v1/user/add/${entry.name}`,
          newUser,
          { withCredentials: true }
        );
        toast.success(data);
        setLoading(false);
        setCartItemCnt(newUser.cart.length);
        setUser(newUser);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className="card d-flex justify-content-evenly">
        <img
          src={entry.pictures[0]}
          className="card-img-top"
          alt="..."
          loading="lazy"
        />
        <div className="card-body d-flex flex-column justify-content-end align-items-baseline">
          <h5 className="card-title">{entry.name}</h5>
          <p className="card-text">{Math.round(entry.price).toFixed(2)} rs</p>
          <button
            className="btn btn-secondary"
            onClick={() => HandleAddToCart()}
            diabled={loading.toString()}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
