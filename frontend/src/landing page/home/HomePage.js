import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats'
import OpenAccount from '../OpenAccount'
import Footer from '../Footer'

const HomePage = () => {
  return (
    <>
    <div><Navbar/></div>
    <div><Hero/></div>
    <div><Awards/></div>
    <div><Stats/></div>
    <div><Pricing/></div>
    <div><OpenAccount/></div>
    <div><Footer/></div>
    </>

  )
}

export default HomePage