import React, { useContext } from "react";
import { Context, server } from "../main";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { Link } from "react-scroll";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = ({ role }) => {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);
  const logoutHandler = async () => {
    setLoading(true);
    try {
      await axios.get(`${server}/api/v1/auth/logout`, {
        withCredentials: true,
      });
      toast.success("Logged out successfully");
      setIsAuthenticated(false);
      setLoading(false);
      navigate("/");
    } catch (error) {
      toast.error(err.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };
  return (
    <>
      <header
        className="navbar-sticky sticky-top container z-fixed px-2 my-3"
        data-sticky-element=""
      >
        <div className="navbar navbar-expand-lg flex-nowrap bg-body rounded-pill shadow ps-0 mx-1">
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark rounded-pill z-0 d-none d-block-dark"></div>

          {/* <!-- Mobile offcanvas menu toggler (Hamburger) --> */}
          <button
            type="button"
            className="navbar-toggler ms-3"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <!-- Navbar brand (Logo) --> */}
          <a
            className="navbar-brand position-relative z-1 ms-4 ms-sm-5 ms-lg-4 me-2 me-sm-0 me-lg-3 px-5"
            href="/"
          >
            GoShopping
          </a>

          {/* <!-- Main navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) --> */}
          <nav
            className="offcanvas offcanvas-start"
            id="navbarNav"
            tabIndex="-1"
            aria-labelledby="navbarNavLabel"
          >
            <div className="offcanvas-header py-3">
              <h5 className="offcanvas-title" id="navbarNavLabel">
                GoShopping
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body pt-3 pb-4 py-lg-0 justify-content-end">
              <ul className="navbar-nav position-relative me-4 me-sm-5 me-lg-4 ms-2 ms-sm-0 ms-lg-3">
                {role == "User" && (
                  <>
                    <li className="nav-item me-lg-n1 me-xl-0">
                      <Link
                        className="nav-link fs-sm"
                        to="furniture"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-trigger="hover"
                        smooth={true}
                        offset={-150}
                        duration={100}
                        aria-expanded="false"
                      >
                        Furniture
                      </Link>
                    </li>

                    <li className="nav-item me-lg-n1 me-xl-0">
                      <Link
                        className="nav-link fs-sm"
                        aria-current="page"
                        role="button"
                        data-bs-trigger="hover"
                        aria-expanded="false"
                        to="electronics"
                        smooth={true}
                        offset={-150}
                        duration={100}
                      >
                        Electronics
                      </Link>
                    </li>
                    <li className="nav-item me-lg-n1 me-xl-0">
                      <Link
                        to="KitchenAppliances"
                        className="nav-link fs-sm"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-trigger="hover"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                        smooth={true}
                        offset={-150}
                        duration={100}
                      >
                        Kitchen Appliances
                      </Link>
                    </li>
                    <li className="nav-item me-lg-n1 me-xl-0">
                      <Link
                        to="Decoration"
                        className="nav-link fs-sm"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-trigger="hover"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                        smooth={true}
                        offset={-150}
                        duration={100}
                      >
                        Decoration
                      </Link>
                    </li>
                    <li className="nav-item me-lg-n2 me-xl-0 d-flex">
                      {/* <!-- Button group --> */}
                      <div className="d-flex">
                        {/* <!-- Cart button --> */}
                        <button
                          type="button"
                          className="btn btn-icon fs-lg border-0 rounded-circle justify-center"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#shoppingCart"
                          aria-controls="shoppingCart"
                          aria-label="Shopping cart"
                        >
                          <FaShoppingCart />
                        </button>
                      </div>
                    </li>
                  </>
                )}
                <li className="nav-item me-lg-n2 me-xl-0">
                  {isAuthenticated ? (
                    <button
                      type="button"
                      onClick={logoutHandler}
                      className="nav-link fs-sm"
                      disabled={loading}
                    >
                      Logout
                    </button>
                  ) : (
                    <a className="nav-link fs-sm" href="/login">
                      Login
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
