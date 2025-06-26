import React from "react";

const Universe = () => {
  return (
    <div className="container-fluid w-75 my-5 py-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="fs-3 my-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row py-5 my-5 d-flex text-center">
        <div className="col-4 p-5">
          <img src="media/zerodhaFundhouse.png" className="w-50 my-4"></img>
          <p className="text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/sensibullLogo.svg" className="w-50 my-4"></img>
          <p className="text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/tijori.svg" className="w-50 my-2"></img>
          <p className="text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/streakLogo.png" className="w-50 my-4"></img>
          <p className="text-muted">
            Systematic trading platform
that allows you to create and backtest
strategies without coding.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/smallcaseLogo.png" className="w-50 my-4"></img>
          <p className="text-muted">
            Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/dittoLogo.png" className="w-50 my-4"></img>
          <p className="text-muted">
            Personalized advice on life
and health insurance. No spam
and no mis-selling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Universe;
