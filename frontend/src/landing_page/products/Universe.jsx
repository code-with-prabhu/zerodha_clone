import React from "react";

const Universe = () => {
  return (
   <div className="container max-w-5xl mx-auto mt-20 px-6 font-sans">
  
  {/* Heading Section */}
  <div className="text-center mb-16">
    <h1 className="text-3xl font-medium text-[#424242] mb-4">
      The Zerodha Universe
    </h1>
    <p className="text-[1.05rem] text-[#424242] leading-relaxed">
      Extend your trading and investment experience even further with our
      partner platforms
    </p>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 justify-items-center">
    
    {/* Card 1 */}
    <div className="flex flex-col items-center text-center max-w-70">
      <img
        src="https://zerodha.com/static/images/partners/zerodhafundhouse.png"
        alt="Zerodha Fund House"
        className="h-12 w-auto object-contain mb-5"
      />
      <p className="text-[#666666] text-[14px] leading-[1.7] max-w-62.5 mx-auto">
        Our asset management venture that is creating simple and transparent
        index funds to help you save for your goals.
      </p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center text-center max-w-70">
      <img
        src="https://zerodha.com/static/images/products/sensibull-logo.svg"
        alt="Sensibull"
        className="h-10 w-auto object-contain mb-5"
      />
      <p className="text-[#666666] text-[14px] leading-[1.7] max-w-62.5 mx-auto">
        Options trading platform that lets you create strategies, analyze
        positions, and examine data points like open interest, FII/DII, and
        more.
      </p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center text-center max-w-70">
      <img
        src="https://zerodha.com/static/images/partners/tijori.svg"
        alt="Tijori"
        className="h-10 w-auto object-contain mb-5"
      />
      <p className="text-[#666666] text-[14px] leading-[1.7] max-w-62.5 mx-auto">
        Investment research platform that offers detailed insights on
        stocks, sectors, supply chains, and more.
      </p>
    </div>

    {/* Card 4 */}
    <div className="flex flex-col items-center text-center max-w-70">
      <img
        src="https://zerodha.com/static/images/products/streak-logo.png"
        alt="Streak"
        className="h-12 w-auto object-contain mb-5"
      />
      <p className="text-[#666666] text-[14px] leading-[1.7] max-w-62.5 mx-auto">
        Systematic trading platform that allows you to create and backtest
        strategies without coding.
      </p>
    </div>

    {/* Card 5 */}
    <div className="flex flex-col items-center text-center max-w-70">
      <img
        src="https://zerodha.com/static/images/products/smallcase-logo.png"
        alt="Smallcase"
        className="h-12 w-auto object-contain mb-5"
      />
      <p className="text-[#666666] text-[14px] leading-[1.7] max-w-62.5 mx-auto">
        Thematic investing platform that helps you invest in diversified
        baskets of stocks on ETFs.
      </p>
    </div>

    {/* Card 6 */}
    <div className="flex flex-col items-center text-center max-w-70">
      <img
        src="https://zerodha.com/static/images/products/ditto-logo.png"
        alt="Ditto"
        className="h-10 w-auto object-contain mb-5"
      />
      <p className="text-[#666666] text-[14px] leading-[1.7] max-w-62.5 mx-auto">
        Personalized advice on life and health insurance. No spam and no
        mis-selling.
      </p>
    </div>

  </div>

  {/* Button */}
  <div className="flex justify-center mt-16 mb-10">
    <button className="bg-[#387ed1] hover:bg-[#2268ba] text-white text-[1.1rem] font-medium px-8 py-2.5 rounded transition">
      Sign up for free
    </button>
  </div>
</div>
  );
};

export default Universe;
