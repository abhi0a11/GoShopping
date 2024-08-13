import React from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
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
            class="navbar-brand position-relative z-1 ms-4 ms-sm-5 ms-lg-4 me-2 me-sm-0 me-lg-3"
            href="index.html"
          >
            Neeraj Industries & Export
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
                Neeraj Industries & Export
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
                    href="#"
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
                    href="#"
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
                    href="#"
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
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-trigger="hover"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    Export
                  </a>
                </li>
                {/* <li class="nav-item me-lg-n2 me-xl-0">
                  <a class="nav-link fs-sm" href="docs/installation.html">
                    Docs
                  </a>
                </li>
                <li class="nav-item me-lg-n2 me-xl-0">
                  <a class="nav-link fs-sm" href="docs/typography.html">
                    Components
                  </a>
                </li> */}
              </ul>
            </div>
          </nav>

          {/* <!-- Button group --> */}
          <div class="d-flex gap-sm-1 position-relative z-1">
            {/* <!-- Theme switcher (light/dark/auto) --> */}
            {/* <div class="dropdown">
              <button
                type="button"
                class="theme-switcher btn btn-icon btn-outline-secondary fs-lg border-0 rounded-circle animate-scale"
                data-bs-toggle="dropdown"
                data-bs-display="dynamic"
                aria-expanded="false"
                aria-label="Toggle theme (light)"
              >
                <span class="theme-icon-active d-flex animate-target">
                  <i class="ci-sun"></i>
                </span>
              </button>
              <ul
                class="dropdown-menu start-50 translate-middle-x"
                style="--cz-dropdown-min-width: 9rem; --cz-dropdown-spacer: 1rem"
              >
                <li>
                  <button
                    type="button"
                    class="dropdown-item active"
                    data-bs-theme-value="light"
                    aria-pressed="true"
                  >
                    <span class="theme-icon d-flex fs-base me-2">
                      <i class="ci-sun"></i>
                    </span>
                    <span class="theme-label">Light</span>
                    <i class="item-active-indicator ci-check ms-auto"></i>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="dropdown-item"
                    data-bs-theme-value="dark"
                    aria-pressed="false"
                  >
                    <span class="theme-icon d-flex fs-base me-2">
                      <i class="ci-moon"></i>
                    </span>
                    <span class="theme-label">Dark</span>
                    <i class="item-active-indicator ci-check ms-auto"></i>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="dropdown-item"
                    data-bs-theme-value="auto"
                    aria-pressed="false"
                  >
                    <span class="theme-icon d-flex fs-base me-2">
                      <i class="ci-auto"></i>
                    </span>
                    <span class="theme-label">Auto</span>
                    <i class="item-active-indicator ci-check ms-auto"></i>
                  </button>
                </li>
              </ul>
            </div> */}

            {/* <!-- Cart button --> */}
            {/* <button
              type="button"
              class="btn btn-icon fs-lg btn-outline-secondary border-0 rounded-circle animate-scale me-2"
              data-bs-toggle="offcanvas"
              data-bs-target="#shoppingCart"
              aria-controls="shoppingCart"
              aria-label="Shopping cart"
            >
              <i class="ci-shopping-cart animate-target"></i>
            </button> */}

            {/* <!-- Search --> */}
            {/* <div class="dropdown">
              <button
                type="button"
                class="btn btn-icon fs-lg btn-secondary rounded-circle animate-scale"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-label="Toggle search bar"
              >
                <i class="ci-search animate-target"></i>
              </button>
              <div
                class="dropdown-menu dropdown-menu-end p-3"
                style={{
                  "--cz-dropdown-min-width": "20rem",
                  "--cz-dropdown-spacer": "1rem",
                }}
              >
                <form class="position-relative">
                  <input
                    type="search"
                    class="form-control rounded-pill"
                    placeholder="Search..."
                    data-autofocus="dropdown"
                  />
                  <button
                    type="submit"
                    class="btn btn-icon btn-sm fs-lg btn-secondary rounded-circle position-absolute top-0 end-0 mt-1 me-1"
                    aria-label="Search"
                  >
                    <i class="ci-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
