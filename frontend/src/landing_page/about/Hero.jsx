import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 p-12 m-5">
      {/* Heading Section */}
      <div className="p-10 mt-15 mb-5">
        <h2 className="text-2xl md:text-3xl font-normal text-center leading-relaxed text-gray-600">
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row border-t border-gray-300 shadow-[0_-1px_2px_#eee] p-25 mt-5 text-gray-500 leading-[1.8] text-[1.2em] max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="md:w-1/2 p-5 space-y-6 ">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 p-5 space-y-6">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p>
            <a
              href=""
              className="text-blue-600 hover:text-blue-700 transition no-underline"
            >
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a
              href=""
              className="text-blue-600 hover:text-blue-700 transition no-underline"
            >
              blog
            </a>{" "}
            or see what the media is{" "}
            <a
              href=""
              className="text-blue-600 hover:text-blue-700 transition no-underline"
            >
              saying about us 
            </a>
            {" "}
            or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
