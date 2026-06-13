import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Hero = () => {
  return (
    <div className="container mx-auto border-b border-gray-300 mb-5 p-12 m-12">
      <div className="text-center mt-5 p-15">
        <h1 className="text-4xl font-semibold text-gray-600">Zerodha Products</h1>

        <h3 className="text-gray-500 mt-3 text-2xl font-normal">
          Sleek, modern and intuitive trading platforms
        </h3>

        <p className="mt-3 mb-5 text-gray-600 text-lg">
          Check out our{" "}
          <a
            href=""
            className="text-blue-600 hover:text-blue-700 transition inline-flex items-center gap-2 no-underline"
          >
            investment offerings
            <ArrowForwardIcon fontSize="sm"/>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
