import React from "react";

const Hero = () => {
  return (
    <div className="container" style={{marginTop : "9%"}}>
      <div className="row justify-content-center text-center">
          <img
            src="media/homeHero.png"
            alt="Hero"
            className="rounded mx-auto d-block w-100 mb-5"
          />
          <h1 className="mb-3">Invest in everything</h1>
          <p className="fs-3">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <button type="button" class="btn btn-primary w-25 mt-5 py-2 fs-3">Sign up for free</button>
      </div>
    </div>
  );
};

export default Hero;
