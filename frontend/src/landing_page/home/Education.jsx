import React from 'react'

const Education = () => {
  return (
   <div className="container mx-auto mt-5 px-4">
  <div className="flex flex-col md:flex-row items-center gap-10">
    
    {/* Left Section */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src="images/education.svg"
        alt="Education"
        className="w-[70%]"
      />
    </div>

    {/* Right Section */}
    <div className="md:w-1/2">
      <h1 className="mb-3 text-3xl font-bold">
        Free and open market education
      </h1>

      <p className="text-gray-600 leading-7 mb-4">
        Varsity, the largest online stock market education book in the world
        covering everything from the basics to advanced trading.
      </p>

      <a
        href=""
        className="text-blue-600 hover:text-blue-700 transition flex items-center gap-2 w-fit"
      >
        Versity
        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </a>

      <p className="mt-5 text-gray-600 leading-7 mb-4">
        TradingQ&A, the most active trading and investment community in
        India for all your market related queries.
      </p>

      <a
        href=""
        className="text-blue-600 hover:text-blue-700 transition flex items-center gap-2 w-fit"
      >
        TradingQ&A
        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</div>
  )
}

export default Education
