import React from "react";

const InvestmentOptions = () => {
  // Data for the investment options to keep the JSX clean
  const options = [
    {
      title: "Stocks",
      description: "Invest in all exchange-listed securities",
      imgSrc: "images/stocks-acop.svg", // Replace with your actual image path
    },
    {
      title: "Mutual funds",
      description: "Invest in commission-free direct mutual funds",
      imgSrc: "images/mf-acop.svg", // Replace with your actual image path
    },
    {
      title: "IPO",
      description: "Apply to the latest IPOs instantly via UPI",
      imgSrc: "images/ipo-acop.svg", // Replace with your actual image path
    },
    {
      title: "Futures & options",
      description:
        "Hedge and mitigate market risk through simplified F&O trading",
      imgSrc: "images/fo-acop.svg", // Replace with your actual image path
    },
  ];

  return (
    <section className="py-20 px-4 font-sans bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-center text-[32px] md:text-4xl font-medium text-[#424242] mb-20">
          Investment options with Zerodha demat account
        </h2>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14 p-5">
          {options.map((option, index) => (
            <div
              key={index}
              className="grid grid-cols-[150px_1fr] items-center gap-6 min-h-45"
            >
              <img
                src={option.imgSrc}
                alt={option.title}
                className="w-35 mx-auto"
              />

              <div>
                <h3 className="text-[24px] font-medium text-[#424242] mb-3">
                  {option.title}
                </h3>

                <p className="text-[16px] leading-7 text-[#666666]">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="text-center mt-16">
          <button className="bg-[#387ed1] hover:bg-[#2b65a8] text-white text-[20px] cursor-pointer font-medium px-10 py-3 rounded-[3px] transition-all duration-200">
            Explore Investments
          </button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptions;
