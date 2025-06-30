import React from 'react'

const Hero = () => {
  return (
    <div className='container py-5 my-5'>
        <div className='row text-center py-5 my-5'>
            <h1>Charges</h1>
            <p className='fs-3 text-muted p-3'>List of all charges and taxes</p>
        </div>
        <div className='row my-5'>
            <div className='col text-center '>
                <img src='media/pricingMF.svg'/>
                <p className='fs-1'>Free equity delivery</p>
                <p className='fs-4 text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col text-center mx-5'>
                <img src='media/other-trades.svg'/>
                <p className='fs-1'>Intraday and F&O trades</p>
                <p className='fs-4 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col text-center '>
                <img src='media/pricingMF.svg'/>
                <p className='fs-1'>Free direct MF</p>
                <p className='fs-4 text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero