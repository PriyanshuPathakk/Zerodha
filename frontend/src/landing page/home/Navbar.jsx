import React from "react";
const Navbar = () => {
  return (
    <nav className="navbar bg-white fixed-top border-bottom" >
      <div className="container-fluid py-3">
        <a className="navbar-brand" style={{paddingLeft : "15%"}} href="">
          <img
            src="media/logo.svg"
            alt="Logo"
            className=""
            style={{ width: "31%" }}
          />
        </a>
        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 d-flex flex-row">
          <li className="nav-item mx-5">
            <a className="nav-link active fs-4 text-muted" aria-current="page" href="">
              Signup
            </a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link active fs-4 text-muted" aria-current="page" href="">
              About
            </a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link active fs-4 text-muted" aria-current="page" href="">
              Products
            </a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link active fs-4 text-muted" aria-current="page" href="">
              Pricing
            </a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link active fs-4 text-muted" aria-current="page" href="">
              Support
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
