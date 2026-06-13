import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Right = ({ imageURL, productName, productDesription, learnMore }) => {
  return (
    <div className="container mx-auto px-8 py-20">
  
  <div className="flex flex-col md:flex-row items-center justify-between gap-24">
    
    {/* Left Section */}
    <div className="md:w-1/2 px-6">
      
      <h1 className="text-4xl font-medium text-gray-800 mb-8">
        {productName}
      </h1>

      <p className="text-gray-600 text-lg leading-10 tracking-wide mb-10">
        {productDesription}
      </p>

      <a
        href={learnMore}
        className="text-blue-600 hover:text-blue-700 text-xl transition inline-flex items-center gap-3"
      >
        Learn More
        <ArrowForwardIcon fontSize="sm" />
      </a>
    </div>

    {/* Right Section */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src={imageURL}
        alt={productName}
        className="w-full max-w-2xl"
      />
    </div>

  </div>
</div>
  );
};

export default Right;
