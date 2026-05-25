import React from 'react'
import Hero from './Hero'
import Stats from './Stats'
import Education from './Education'
import Pricing from './Pricing'
import Navbar from '../Navbar'
import OpenAcc from '../OpenAcc'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Stats/>
      <Pricing/>
      <Education/>
      <OpenAcc/>
    </div>
  )
}

export default HomePage
