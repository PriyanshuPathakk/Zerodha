import React from 'react'

const LeftSection = ({ productImgSrc , productName , productDescription , tryDemo , learnMore , googlePlayLink , appStoreLink}) => {
  return (
    <div className='container-fluid w-75'>
        <div className='row py-5'>
            <div className='col p-5 m-5'>
              <img src={productImgSrc} className='w-100'></img>
            </div>
            <div className='col p-5 my-5'>
                <div className='w-75 m-5'>
                <p className='fs-1'>{productName}</p>
                <p className='fs-3'>{productDescription} </p>
                <a href={learnMore} className='fs-3 '>Try demo  <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href={tryDemo} className='fs-3 mx-5'>Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <div className='py-5'>
                <a href={googlePlayLink} ><img style = {{width : "35%"}} src='media/googlePlayBadge.svg' className='googlePlayBadge'/></a>
                <a href={appStoreLink} className='mx-5'><img className='appStoreBadge' style = {{width : "33%"}}  src='media/appstoreBadge.svg' /></a>

                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftSection