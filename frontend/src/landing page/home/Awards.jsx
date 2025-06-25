import React from 'react'

const Awards = () => {
  return (
    <div className='container-fluid mt-5 p-5'>
      <div className='row '>
        <div className='col-6 mt-5'>
          <img src='media/largestBroker.svg' className='mx-auto d-block w-50' />
        </div>
        <div className='col-6 p-5'>
          <h1>Largest stock broker in India </h1>
          <p className='fs-4 mb-5 mt-3'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in :</p>
          <div className='row'>
            <div className='col'>
              <ul className='fs-4'>
            <li>
              <p>Futures and Options</p>
            </li>
            <li>
              <p>Commodity derivatives</p>
            </li>
            <li>
              <p>Currency derivatives</p>
            </li>
          </ul>
            </div>
            <div className='col'>
              <ul className='fs-4'>
            <li>
              <p>Stocks and IPOs</p>
            </li>
            <li>
              <p>Direct mutual funds</p>
            </li>
            <li>
              <p>Bonds and Govt. Securities</p>
            </li>
          </ul>
            </div>
          </div>
          <img src='media/pressLogos.png' className='mt-5'/>
        </div>
      </div>

    </div>
  )
}

export default Awards