import React from 'react'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Awards from './Awards.jsx'
import Stats from './Stats.jsx'
import OpenAccount from '../OpenAccount.jsx'
import Footer from '../Footer.jsx'
import Pricing from './Pricing.jsx'
import Education from './Education.jsx'

const HomePage = () => {
  return (
    <>
    <div><Hero/></div>
    <div><Awards/></div>
    <div><Stats/></div>
    <div><Pricing/></div>
    <div><Education/></div>
    <div><OpenAccount/></div>
    </>

  )
}

export default HomePage