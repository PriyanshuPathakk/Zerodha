import React from 'react'

const Pricing = () => {
  return (
    <div className='container-fluid p-5 w-75'>
      <div className='row p-5 '>
        <div className='col-4'>
          <h1 className='mb-4'>Unbeatable pricing</h1>
          <p className='fs-3 text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href='' className='fs-3 mx-5'>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className='col-8 mt-5'>
          <div className='row'>
            <div className='col d-flex align-items-center'>
              <img src='media/pricingEquity.svg ' className='w-50'/>
              <p className='mt-4 text-muted'>Free account opening</p>
            </div>
            <div className='col d-flex align-items-center'>
              <img src='media/pricing0.svg ' className='w-50'/>
              <p className='mt-4 text-muted'>Free equity delivery and direct mutual funds</p>
            </div>
            <div className='col d-flex align-items-center'>
              <img src='media/other-trades.svg ' className='w-50'/>
              <p className='mt-4 text-muted'>Free equity delivery and direct mutual funds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing;