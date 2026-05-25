import React from "react";

const Awards = () => {
  return (
    <div className="container mx-auto mt-15 px-4 p-5">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-5">
          <img
            src="images/largestBroker.svg"
            alt="Largest Broker"
            className="w-full"
          />
        </div>

        <div className="md:w-1/2 p-5 mt-7">
          <h1 className="text-4xl font-bold mb-4">
            Largest stock broker in India
          </h1>

          <p className="mb-5 text-gray-600 leading-7">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <div className="sm:w-1/2">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>

            <div className="sm:w-1/2">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>

          <img
            src="images/pressLogos.png"
            alt="Press Logos"
            className="w-[90%] mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Awards;
