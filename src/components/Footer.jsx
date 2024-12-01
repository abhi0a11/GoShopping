import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
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
              style={{ color: "rgba(0,0,0,0.65)" }}
            >
              Furniture
            </Link>
          </li>
          {/* <li className="nav-item">
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
              style={{ color: "rgba(0,0,0,0.65)" }}
            >
              Electronics
            </Link>
          </li> */}
          <li className="nav-item">
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
              style={{ color: "rgba(0,0,0,0.65)" }}
            >
              Kitchen Appliances
            </Link>
          </li>
          <li className="nav-item">
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
              style={{ color: "rgba(0,0,0,0.65)" }}
            >
              Decoration
            </Link>
          </li>
        </ul>
        <p className="text-center text-body-secondary">
          © 2024 GoShopping Pvt. Ltd., Inc
        </p>
      </footer>
    </div>
  );
};

export default Footer;
