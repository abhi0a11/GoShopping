import React from "react";
import styles from "./CartItem.module.css";
import sofa2 from "../../assets/sofa_single.png";
import { FaPlus, FaMinus } from "react-icons/fa6";
const CartItem = () => {
  return (
    <div className={`${styles.cartItem_container}`}>
      <img src={sofa2} alt="" className={`${styles.cart_img}`} />
      <div className="d-flex justify-content-between w-100">
        <div className={`${styles.metadata}`}>
          <h6>Name of Product</h6>
          <div>in stock</div>
          <div>Color</div>
          <div>Description</div>
          <div className={`${styles.btn_grp}`}>
            <button className={`btn px-1`}>
              <FaMinus />
            </button>
            <span className={`${styles.cnt} px-1`}>Cnt</span>
            <button className={`btn px-1`}>
              <FaPlus />
            </button>
          </div>
        </div>
        <div className={`${styles.metadata} me-3`}>
          <div>Price</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
