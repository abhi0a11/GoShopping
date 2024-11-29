import React, { useContext } from "react";
import "./products/products.css";
import { Context, server } from "../main";
import axios from "axios";
import toast from "react-hot-toast";

const Card = ({ entry }) => {
  const { user, setUser } = useContext(Context);
  const HandleAddToCart = async () => {
    try {
      if (!user || !Array.isArray(user.cart)) {
        toast.error("Please Login First!");
      } else {
        let newUser = user;
        let product = entry;
        let isPresent = 0;
        for (const prod of newUser?.cart) {
          // console.log(prod);
          if (prod.title === entry.title) {
            prod.cnt = prod.cnt + 1;
            console.log("yes");
            setUser(newUser);
            isPresent = 1;
            break;
          }
        }
        if (!isPresent) {
          product.cnt = 1;
          newUser.cart.push(product);
        }
        console.log(newUser.cart);
        const { data } = await axios.put(
          `${server}/api/v1/user/add/${entry.title}`,
          newUser,
          { withCredentials: true }
        );
        toast.success(data);

        setUser(newUser);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className="card d-inline-block">
        <img src={entry.images[0]} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{entry.title}</h5>
          <p className="card-text">{Math.round(entry.price * 40)} rs</p>
          <button
            className="btn btn-secondary"
            onClick={() => HandleAddToCart()}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
