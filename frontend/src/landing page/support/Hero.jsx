import React from "react";

const Hero = () => {
  return (
    <div style={{ backgroundColor: "rgba(38, 122, 212, 1)" }}>
      <div className="container-fluid w-75 py-5 my-5 ">
        <div className="row py-5 my-5">
          <div className="col text-white px-4">
            <p className="fs-1">Support Portal</p>
          </div>
          <div className="col text-end px-5">
            <p className="fs-3">
              <a href="#" className="text-white text-decoration-underline">
                Track Tikets
              </a>
            </p>
          </div>
        </div>
        <div className="row py-0 my-0">
          <div className="col text-white ">
            <p className="fs-1 p-2">
              Search for an answer or browse help topics to create a ticket
            </p>
            <input
              placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
              className="p-4 w-100 fs-4 rounded-2 my-3"
            ></input>
            <a href="#" className="text-white text-decoration-underline fs-3 py-5 ">
              Track account opening
            </a>
            <a href="#" className="text-white text-decoration-underline fs-3 py-5 px-5">
              Track segment activation
            </a>
            <a href="#" className="text-white text-decoration-underline fs-3 py-5 ">
               Intraday margins
            </a>
            <a href="#" className="text-white text-decoration-underline fs-3 py-5 px-5">
              Kite user manual
            </a>
          </div>
          <div className="col text-white px-5 mx-3">
            <p className="fs-2">Featured</p>
            <ol>
                <li className="fs-3 p-3"> <a href= "#" className="text-decoration-underline fs-3 text-white">Exclusion of F&O contracts on 8 securities from August 29, 2025 </a></li>
                <li className="fs-3 p-3"> <a href= "#" className="text-decoration-underline fs-3 text-white">Revision in expiry day of Index and Stock derivatives contracts</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
