import { Outlet, Link } from "react-router-dom";
import React from "react";

const NavigationMenu = ({ logout }) => {
  return (
    <>
      <nav className="navigation">
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            listStyleType: "none",
          }}
        >
          <li>
            <Link
              style={{ textDecoration: "none", paddingRight: "30px" }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", paddingRight: "30px" }}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", paddingRight: "30px" }}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <button
              style={{ textDecoration: "none", paddingRight: "30px" }}
              onClick={logout}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavigationMenu;
