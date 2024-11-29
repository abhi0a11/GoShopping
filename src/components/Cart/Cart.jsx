import React, { useContext, useEffect, useState } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import { Context } from "../../main";
const Cart = () => {
  const { user } = useContext(Context);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const calculateTotal = () => {
      let t = 0;
      user?.cart?.map(data => {
        t += Math.round(data.price * 40) * data.cnt;
      });
      setTotal(t);
    };
    calculateTotal();
  }, [user]);
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
          {user?.cart?.map(data => {
            return <CartItem Item={data} total={total} setTotal={setTotal} />;
          })}

          <div
            className={`d-flex justify-content-end w-100 ${styles.heading_footer}`}
          >
            <span className={`me-3`}>
              Subtotal ({user?.cart?.length} itmes):{" "}
              <span className={`${styles.pr}`}>&#8377;{total}</span>
            </span>
          </div>
        </section>
        <section className={`${styles.payment_container}`}>
          <div>
            <p>
              Subtotal ({user?.cart?.length} itmes):{" "}
              <span className={`${styles.pr}`}>&#8377;{total}</span>
            </p>
            <button className="btn btn-outline-success">Proceed to Buy</button>
          </div>
        </section>
      </section>
      <div className={`${styles.space}`}></div>
    </>
  );
};

export default Cart;
