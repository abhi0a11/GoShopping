import React from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = () => {
  return (
    <>
      <section className={`d-flex ${styles.main_container} container`}>
        <section className={`${styles.cart_container}  mx-auto`}>
          <div
            className={`d-flex justify-content-between w-100 ${styles.heading}`}
          >
            <span className={`ms-3 ${styles.txt}`}>Shopping Cart</span>
            <span className={`ms-3 ${styles.txt}`}>Price</span>
          </div>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <div
            className={`d-flex justify-content-end w-100 ${styles.heading_footer}`}
          >
            <span className="me-3">Subtotal (n itmes):Price</span>
          </div>
        </section>
        <section className={`${styles.payment_container}`}>
          <div>
            <div>Subtotal (n itmes):price</div>
            <button>Proceed to Buy</button>
          </div>
        </section>
      </section>
      <div className={`${styles.space}`}></div>
    </>
  );
};

export default Cart;
