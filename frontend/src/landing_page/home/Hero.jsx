import React from 'react'

const Hero = () => {
  return (
    <div className="container mx-auto p-12 m-5">
      <div className='text-center flex flex-col items-center'>
            <img src="/images/HomeHero.svg" alt="Home Image" className='mb-5 max-h-[65vh]'/>
            <h1 className='mt-5 text-gray-600 text-3xl font-semibold'>Invest in everything</h1>

            <p className="text-gray-600 mt-2 text-2xl mb-4">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>

            <button className="p-2 bg-blue-500 hover:bg-blue-700 text-white text-lg rounded-md mb-5 w-1/5 mx-auto transition mt-5">Sign up for free</button>
          </div>
      </div>
  )
}

export default Hero;
