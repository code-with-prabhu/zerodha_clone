import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Stats from './Stats'
import Awards from './Awards'
import Education from './Education'
import Pricing from './Pricing'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Stats/>
      <Awards/>
      <Education/>
      <Pricing/>
    </div>
  )
}

export default HomePage
