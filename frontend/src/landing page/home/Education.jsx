import React from 'react'

const Education = () => {
  return (
    <div className='container-fluid w-75'>
      <div className='row mt-5'>
        <div className='col'>
          <img src='media/education.svg' className='w-75'></img>
        </div>
        <div className='col mt-5'>
          <h1 className='mb-5 mt-3'>Free and open market education</h1>
          <p className='fs-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href='' className='fs-3'>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          <p className='fs-3 mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href='' className='fs-3'>TradingQ&A  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education