import React from 'react'

const Team = () => {
  return (
    <div className="container mx-auto">
  
  {/* Heading */}
  <div className="p-10 mt-5 border-t border-gray-300 shadow-[0_-1px_2px_#eee]  max-w-6xl mx-auto">
  </div>

  {/* Content */}
  <div className="flex flex-col md:flex-row p-3 text-gray-500 leading-[1.8] text-[1.2em]">
    
    {/* Left Section */}
    <div className="md:w-1/2 p-3 text-center flex flex-col items-center">
      <img
        src="images/nithinKamath.jpg"
        alt="Nithin Kamath"
        className="rounded-full w-1/2"
      />

      <h4 className="mt-5 text-2xl font-semibold text-black">
        Nithin Kamath
      </h4>

      <h6 className="text-lg">
        Founder, CEO
      </h6>
    </div>

    {/* Right Section */}
    <div className="md:w-1/2 p-5 mt-7 mr-10">
      <p className="mb-5">
        Nithin bootstrapped and founded Zerodha in 2010 to overcome the
        hurdles he faced during his decade long stint as a trader. Today,
        Zerodha has changed the landscape of the Indian broking industry.
      </p>

      <p className="mb-5">
        He is a member of the SEBI Secondary Market Advisory Committee
        (SMAC) and the Market Data Advisory Committee (MDAC).
      </p>

      <p className="mb-5">
        Playing basketball is his zen.
      </p>

      <p>
        Connect on{" "}
        <a href="" className="text-blue-600 hover:text-blue-700">
          Homepage
        </a>{" "}
        /{" "}
        <a href="" className="text-blue-600 hover:text-blue-700">
          TradingQnA
        </a>{" "}
        /{" "}
        <a href="" className="text-blue-600 hover:text-blue-700">
          Twitter
        </a>
      </p>
    </div>

  </div>
</div>
  )
}

export default Team
