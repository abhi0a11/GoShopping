import React, { useState } from "react";
import styles from "./OrderHistory.module.css";
import CartItem from "../Cart/CartItem";
const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  return (
    <>
      <section className={`d-flex ${styles.main_container} container`}>
        <section className={`${styles.cart_container}  mx-auto p-5`}>
          <div
            className={`d-flex justify-content-between w-100 ${styles.heading}`}
          >
            <span className={`${styles.txt}`}>Order History</span>
          </div>
          {orders.length > 0 ? (
            user?.cart?.map((data, i) => {
              return (
                <CartItem
                  key={i}
                  Item={data}
                  total={total}
                  setTotal={setTotal}
                />
              );
            })
          ) : (
            <span style={{ marginTop: "20px" }}>No Order Yet!</span>
          )}
        </section>
      </section>
    </>
  );
};

export default OrderHistory;
