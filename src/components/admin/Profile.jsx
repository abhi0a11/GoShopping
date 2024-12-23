import React, { useContext, useEffect, useState } from "react";
import styles from "./Profile.module.css";
import Field from "../../utils/Field";
import { Context } from "../../main";
import ProfileNavbar from "../navbar/ProfileNavbar";
import Input from "../../utils/Input";
import Button from "../../utils/Button";
import OrderHistory from "../order/OrderHistory";
const Profile = ({ val }) => {
  const [ProfileService, setProfileService] = useState(val);
  const [show, setShow] = useState(0);
  const { user } = useContext(Context);
  const [newName, setNewName] = useState();
  const [newDOB, setNewDOB] = useState();
  const [newEmail, setNewEmail] = useState();
  const [newPhone, setNewPhone] = useState();
  const [newStreet, setNewStreet] = useState();
  const [newCity, setNewCity] = useState();
  const [newState, setNewState] = useState();
  const [newpincode, setNewpincode] = useState();
  const [newPassword, setNewPassword] = useState();
  useEffect(() => {
    console.log(show);
  }, [show]);
  const deleteHandler = () => {};
  const profileHandler = () => {
    if (show == 1) {
      setShow(0);
      return;
    }
    setShow(1);
  };
  const ContactHandler = () => {
    if (show == 2) {
      setShow(0);
      return;
    }
    setShow(2);
  };
  const AddressHandler = () => {
    if (show == 3) {
      setShow(0);
      return;
    }
    setShow(3);
  };
  const PasswordHandler = () => {
    if (show == 4) {
      setShow(0);
      return;
    }
    setShow(4);
  };
  return (
    <main className={`${styles.main_container}`}>
      <ProfileNavbar setProfileService={setProfileService} />
      {ProfileService == 1 && (
        <section className="w-100 p-5" style={{ background: "#fff" }}>
          <section className={`${styles.personalDetail_section}`}>
            <div
              className={`d-flex justify-content-between ${styles.header_div}`}
            >
              <h4>Personal info</h4>
              <span
                onClick={() => {
                  profileHandler();
                }}
              >
                Edit
              </span>
            </div>
            {show != 1 ? (
              <>
                <Field text={user.name || "Abhishek kumawat"}></Field>
                <Field text={user.DOB || "12 Mar 2001"}></Field>
              </>
            ) : (
              <form className={`${styles.form}`}>
                <Input
                  type={"text"}
                  name={"Name"}
                  placeholder={"Name"}
                  Update={setNewName}
                ></Input>

                <Input
                  type={"date"}
                  name={"DOB"}
                  placeholder={"Date of Birth"}
                  Update={setNewDOB}
                ></Input>
                <Button />
              </form>
            )}
          </section>
          <section className={`${styles.contact_section}`}>
            <div
              className={`d-flex justify-content-between ${styles.header_div}`}
            >
              <h4>Contact Details</h4>
              <span
                onClick={() => {
                  ContactHandler();
                }}
              >
                Edit
              </span>
            </div>
            {show != 2 ? (
              <>
                <Field text={user.email || "abhishekkumawat.ak21@gmail.com"} />
                <Field text={user.phone || "+91 - 6367629058"} />
              </>
            ) : (
              <form className={`${styles.form}`}>
                <Input
                  type={"email"}
                  name={"Email"}
                  placeholder={"Email"}
                  Update={setNewEmail}
                ></Input>

                <Input
                  type={"number"}
                  name={"Phone"}
                  placeholder={"Phone number"}
                  Update={setNewPhone}
                ></Input>
                <Button />
              </form>
            )}
          </section>
          <section className={`${styles.address_section}`}>
            <div
              className={`d-flex justify-content-between ${styles.header_div}`}
            >
              <h4>Address</h4>
              <span
                onClick={() => {
                  AddressHandler();
                }}
              >
                Edit
              </span>
            </div>
            {show != 3 ? (
              <>
                {/* user.street1 + "," + user.street2 || */}
                <Field text={"4/55 geeta colony, Near fire station"}></Field>
                {/* // `${user.city} , ${user.state}` || */}
                <Field text={"new delhi , Delhi"}></Field>
                <Field text={user.pincode || "110031"}></Field>
              </>
            ) : (
              <form className={`${styles.form}`}>
                <Input
                  type={"text"}
                  name={"street"}
                  placeholder={"Street"}
                  Update={setNewStreet}
                />
                <Input
                  type={"text"}
                  name={"street2"}
                  placeholder={"City"}
                  Update={setNewCity}
                />
                <Input
                  type={"text"}
                  name={"street3"}
                  placeholder={"State"}
                  Update={setNewState}
                />
                <Input
                  type={"number"}
                  name={"Pin"}
                  placeholder={"Pin Code"}
                  Update={setNewpincode}
                />
                <Button />
              </form>
            )}
          </section>
          <section className={`${styles.password_section}`}>
            <div
              className={`d-flex justify-content-between ${styles.header_div}`}
            >
              <h4>Password</h4>
              <span
                onClick={() => {
                  PasswordHandler();
                }}
              >
                Edit
              </span>
            </div>
            {show != 4 ? (
              <>
                <Field text={"************"}></Field>
              </>
            ) : (
              <form className={`${styles.form}`}>
                <Input
                  type={"password"}
                  name={"Password"}
                  placeholder={"Password"}
                  Update={setNewPassword}
                ></Input>
                <Button />
              </form>
            )}
          </section>
          <section className={`${styles.delete_section}`}>
            <div
              className={`d-flex justify-content-between ${styles.header_div}`}
            >
              <h4>Delete Account</h4>
            </div>
            <span
              className="btn btn-outline-danger"
              onClick={() => deleteHandler()}
            >
              Delete
            </span>
          </section>
        </section>
      )}
      {ProfileService == 2 && <OrderHistory />}
    </main>
  );
};

export default Profile;
