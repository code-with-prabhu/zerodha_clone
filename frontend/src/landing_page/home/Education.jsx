import React from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Education = () => {
  return (
   <div className="container mx-auto mt-5 px-4">
  <div className="flex flex-col md:flex-row items-center gap-10">
    
    {/* Left Section */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src="images/education.svg"
        alt="Education"
        className="w-[70%] p-4"
      />
    </div>

    {/* Right Section */}
    <div className="md:w-1/2 mt-10">
      <h1 className="text-3xl md:text-[32px] font-medium text-[#424242] mb-5 leading-tight">
        Free and open market education
      </h1>

      <p className="text-lg text-[#424242] leading-relaxed mb-3">
        Varsity, the largest online stock market education book in the world
        covering everything from the basics to advanced trading.
      </p>

      <a
        href=""
        className="text-[#387ed1] hover:text-[#2d65a8] text-lg transition-colors duration-200 inline-flex items-center gap-1"
      >
        Versity
        <ArrowForwardIcon fontSize="sm"/>
      </a>

      <p className="text-lg text-[#424242] leading-relaxed mb-3 mt-3">
        TradingQ&A, the most active trading and investment community in
        India for all your market related queries.
      </p>

      <a
        href=""
        className="text-[#387ed1] hover:text-[#2d65a8] text-lg  transition-colors duration-200 inline-flex items-center gap-1"
      >
        TradingQ&A
        <ArrowForwardIcon fontSize="sm"/>
      </a>
    </div>
  </div>
</div>
  )
}

export default Education
