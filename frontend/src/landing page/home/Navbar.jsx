import React from "react";
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="navbar bg-white fixed-top border-bottom shadow-sm" >
      <div className="container-fluid py-3">
        <Link className="navbar-brand" style={{paddingLeft : "15%"}} to={"/"}>
          <img
            src="media/logo.svg"
            alt="Logo"
            className=""
            style={{ width: "31%" }}
          />
        </Link>
        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 d-flex flex-row">
          <li className="nav-item mx-5">
            <Link className="nav-link active fs-4 text-muted" aria-current="page" to={"/signup"}>
              Signup
            </Link>
          </li>
          <li className="nav-item mx-5">
            <Link className="nav-link active fs-4 text-muted" aria-current="page" to={"/about"}>
              About
            </Link>
          </li>
          <li className="nav-item mx-5">
            <Link className="nav-link active fs-4 text-muted" aria-current="page" to={"/products"}>
              Products
            </Link>
          </li>
          <li className="nav-item mx-5">
            <Link className="nav-link active fs-4 text-muted" aria-current="page" to={"/pricing"}>
              Pricing
            </Link>
          </li>
          <li className="nav-item mx-5">
            <Link className="nav-link active fs-4 text-muted" aria-current="page" to={"/support"}>
              Support
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
