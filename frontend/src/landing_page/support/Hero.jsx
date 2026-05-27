import React from 'react'
import "../../index.css"
const Hero = () => {
  return (
    <section className="w-full bg-[#387ed1] text-white py-12" id="supportHero">
  
  <div className="max-w-7xl mx-auto px-6 p-2 mt-10">
    
    {/* Top Bar */}
    <div
      className="flex flex-col md:flex-row justify-between items-center  pb-6"
      id="supportWrapper"
    >
      <h4 className="text-2xl font-medium -ml-16">
        Support Portal
      </h4>

      <a
        href=""
        className="text-white underline underline-offset-4 hover:text-gray-200 transition"
      >
        Track Tickets
      </a>
    </div>

    {/* Main Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12">
      
      {/* Left Section */}
      <div className="space-y-8">
        
        <h1 className="text-3xl leading-relaxed font-medium max-w-xl">
          Search for an answer or browse help topics to create a ticket
        </h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Eg. how do I activate F&O"
          className="w-full max-w-xl px-5 py-4 rounded-md text-gray-700 outline-none text-lg shadow-sm bg-white"
        />

        {/* Links */}
        <div className="flex flex-wrap gap-6 text-[15px]">
          
          <a
            href=""
            className="underline underline-offset-4 hover:text-gray-200 transition"
          >
            Track account opening
          </a>

          <a
            href=""
            className="underline underline-offset-4 hover:text-gray-200 transition"
          >
            Track segment activation
          </a>

          <a
            href=""
            className="underline underline-offset-4 hover:text-gray-200 transition"
          >
            Intraday margins
          </a>

          <a
            href=""
            className="underline underline-offset-4 hover:text-gray-200 transition"
          >
            Kite user manual
          </a>

        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-8 ml-35">
        
        <h1 className="text-3xl font-medium">
          Featured
        </h1>

        <ol className="list-decimal pl-5 space-y-6 text-lg leading-8">
          
          <li>
            <a
              href=""
              className="underline underline-offset-4 hover:text-gray-200 transition"
            >
              Current Takeovers and Delisting - January 2024
            </a>
          </li>

          <li>
            <a
              href=""
              className="underline underline-offset-4 hover:text-gray-200 transition"
            >
              Latest Intraday leverages - MIS & CO
            </a>
          </li>

        </ol>
      </div>

    </div>
  </div>
</section>
  )
}

export default Hero
