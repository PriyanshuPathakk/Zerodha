import React from "react";

const RightSection = ({
  productName,
  productDescription,
  productImgSrc,
  link,
  linkName,
}) => {
  return (
    <div className="container-fluid w-75 my-5 p-5">
      <div className="row">
        <div className="col p-5 m-5">
          <p className="fs-1">{productName} </p>
          <p className="fs-3">{productDescription} </p>
          <a href={link} className="fs-3">{linkName}  <i className="fa fa-long-arrow-right p-1" aria-hidden="true"></i> </a>
        </div>
        <div className="col">
          <img className="w-100" src={productImgSrc} />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
