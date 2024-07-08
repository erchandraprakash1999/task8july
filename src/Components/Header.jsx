import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles.css";

const Header = () => {
  return (
    <>
      <style>
        {`
          .active {
            color: red;
          }
        `}
      </style>
      <nav className="navbar sticky-top navbar-expand-md bg-dark">
        <a
          href="#"
          className="navbar-brand ml-5 text-light"
          style={{ fontSize: "x-large", fontWeight: "bolder" }}
        >
          LOGO@Dev
        </a>
        <button className="navbar-toggler text-danger" type="button" data-toggle="collapse" data-target="#col">
          <span>&#9776;</span>
        </button>
        <div className="collapse navbar-collapse" id="col">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link mx-2">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link mx-2">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link mx-2">
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
