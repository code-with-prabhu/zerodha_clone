import React from 'react'
import {useNavigate} from 'react-router-dom'
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-12 m-5">
      <div className='text-center flex flex-col items-center'>
            <img src="/images/HomeHero.svg" alt="Home Image" className='mb-5 max-h-[65vh]'/>
            <h1 className='mt-5 text-gray-600 text-3xl font-semibold'>Invest in everything</h1>

            <p className="text-gray-600 mt-2 text-2xl mb-4">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>

            <button onClick={() => navigate('/signup')} className="w-1/5 bg-[#387ed1] hover:bg-[#2b65a8] text-white font-medium cursor-pointer text-[20px] py-2.5 rounded-[3px] mt-2 transition-colors duration-200">Sign up for free</button>
          </div>
      </div>
  )
}

export default Hero;
