import React from 'react'

const Stats = () => {
  return (
    <div className='container-fluid p-5 w-75'>
      <div className='row'>
        <div className='col-6 p-5 mt-5'>
          <h1 className='mb-5 fs-1'>Trust with confidence</h1>
          <h2 className='mt-5'>Customer-first always</h2>
          <p className='fs-3 text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
          <h2 className='mt-5'>No spam or gimmicks</h2>
          <p className='fs-3 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
          <h2 className='mt-5'>The Zerodha universe</h2>
          <p className='fs-3 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          <h2 className='mt-5'>Do better with money</h2>
          <p className='fs-3 text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className='col-6 p-5'>
          <img src='media/ecosystem.png' className=''/>
          <div className='text-center'>
            <a href='' className='fs-3 mx-5'>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href='' className='fs-3 mx-5'>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
      <div className='row p-5'>
        <img src='media/pressLogos.png' className='w-75 mx-auto'/>
      </div>
    </div>
  )
}

export default Stats