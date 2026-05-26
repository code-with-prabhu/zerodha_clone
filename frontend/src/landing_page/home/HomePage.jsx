import React from 'react'
import Hero from './Hero'
import Stats from './Stats'
import Education from './Education'
import Pricing from './Pricing'
import OpenAcc from '../OpenAcc'


const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Stats/>
      <Pricing/>
      <Education/>
      <OpenAcc/>
    </div>
  )
}

export default HomePage
