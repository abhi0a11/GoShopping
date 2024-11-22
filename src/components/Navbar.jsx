import React, { useContext } from "react";
import { Context, server } from "../main";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
const Navbar = () => {
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
    } catch (error) {
      console.log("btn triggered", error);
      toast.error(err.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };
  return (
    <>
      <header
        class="navbar-sticky sticky-top container z-fixed px-2 my-3"
        data-sticky-element=""
      >
        <div class="navbar navbar-expand-lg flex-nowrap bg-body rounded-pill shadow ps-0 mx-1">
          <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark rounded-pill z-0 d-none d-block-dark"></div>

          {/* <!-- Mobile offcanvas menu toggler (Hamburger) --> */}
          <button
            type="button"
            class="navbar-toggler ms-3"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* <!-- Navbar brand (Logo) --> */}
          <a
            class="navbar-brand position-relative z-1 ms-4 ms-sm-5 ms-lg-4 me-2 me-sm-0 me-lg-3 px-5"
            href="/"
          >
            Abhishek Industries and Exports
          </a>

          {/* <!-- Main navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) --> */}
          <nav
            class="offcanvas offcanvas-start"
            id="navbarNav"
            tabindex="-1"
            aria-labelledby="navbarNavLabel"
          >
            <div class="offcanvas-header py-3">
              <h5 class="offcanvas-title" id="navbarNavLabel">
                Abhishek Industries and Exports
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body pt-3 pb-4 py-lg-0 mx-lg-auto">
              <ul class="navbar-nav position-relative">
                <li class="nav-item me-lg-n1 me-xl-0">
                  <a
                    class="nav-link fs-sm active"
                    aria-current="page"
                    href="/"
                    role="button"
                    data-bs-trigger="hover"
                    aria-expanded="false"
                  >
                    Home Interior
                  </a>
                </li>
                <li class="nav-item  position-static me-lg-n1 me-xl-0">
                  <a
                    class="nav-link  fs-sm"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-trigger="hover"
                    aria-expanded="false"
                  >
                    Furniture
                  </a>
                </li>
                <li class="nav-item me-lg-n1 me-xl-0">
                  <a
                    class="nav-link fs-sm"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-trigger="hover"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    Electronics
                  </a>
                </li>
                <li class="nav-item dropdown me-lg-n1 me-xl-0">
                  <a
                    class="nav-link  fs-sm"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-trigger="hover"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    Export
                  </a>
                </li>
                <li class="nav-item me-lg-n2 me-xl-0">
                  {/* <!-- Button group --> */}
                  <div class="d-flex gap-sm-1 position-relative z-1">
                    {/* <!-- Cart button --> */}
                    <button
                      type="button"
                      class="btn btn-icon fs-lg btn-outline-secondary border-0 rounded-circle animate-scale me-2"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#shoppingCart"
                      aria-controls="shoppingCart"
                      aria-label="Shopping cart"
                    >
                      <i class="ci-shopping-cart animate-target">
                        shopping cart
                      </i>
                    </button>
                  </div>
                </li>
                <li class="nav-item me-lg-n2 me-xl-0">
                  {isAuthenticated ? (
                    <button
                      type="button"
                      onClick={logoutHandler}
                      class="nav-link fs-sm"
                    >
                      Logout
                    </button>
                  ) : (
                    <a class="nav-link fs-sm" href="/login">
                      Login
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid d-flex justify-center">
          <a class="navbar-brand" href="#">
            NEERAJ INDUSTRIES & EXPORT
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div class={`navbar-nav ${styles.text}`}> */}
      {/*  */}
      {/* <a class={`nav-link active `} aria-current="page" href="#">
              Home
            </a> */}
      {/*  */}
      {/* <a class={`nav-link active `} aria-current="page" href="#">
                Home Interior
              </a>
              <a class="nav-link" href="#Furniture">
                Furniture
              </a>
              <a class="nav-link" href="#">
                Electronics
              </a>
              <a class="nav-link " href="#">
                Exports
              </a>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Navbar;
