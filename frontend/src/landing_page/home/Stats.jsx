import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Stats = () => {
  return (
    <div className="container mx-auto p-5 px-4 mt-5">
      <div className="flex flex-col md:flex-row p-5 items-center">
        {/* Left Section */}
        <div className="md:w-1/2 p-5">
          <h2 className="text-3xl  text-gray-500 font-semibold mb-5">Trust with confidence</h2>

          <h3 className="text-gray-600 text-2xl font-semibold mb-2">Customer-first always</h3>
          <p className="text-gray-400 text-lg mb-5 leading-7">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h3 className="text-gray-600 text-2xl font-semibold mb-2">No spam or gimmicks</h3>
          <p className="text-gray-400 text-lg mb-5 leading-7">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
            <a href="" className="text-blue-600 hover:text-blue-700 transition">
              Our philosophies.
            </a>
          </p>

          <h3 className="text-gray-600 text-2xl font-semibold mb-2">The Zerodha universe</h3>
          <p className="text-gray-400 text-lg  mb-5 leading-7">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h3 className="text-gray-600 text-2xl font-semibold mb-2">Do better with money</h3>
          <p className="text-gray-400 leading-7 text-lg">
            With initiatives like{" "}
            <a href="" className="text-blue-600 hover:text-blue-700 transition">
              Nudge
            </a>{" "}
            and{" "}
            <a href="" className="text-blue-600 hover:text-blue-700 transition">
              Kill Switch
            </a>
            , we don't just facilitate transactions, but actively help you do
            better with your money.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-5 flex flex-col items-center">
          <img src="images/ecosystem.png" alt="Ecosystem" className="w-[90%]" />

          <div className="text-center mt-6 flex flex-col sm:flex-row gap-4 sm:gap-10">
            <a
              href=""
              className="text-blue-600 hover:text-blue-700 transition flex items-center gap-2"
            >
              Explore our products
              <ArrowForwardIcon fontSize="sm"/>
            </a>

            <a
              href=""
              className="text-blue-600 hover:text-blue-700 transition flex items-center gap-2"
            >
              Try Kite demo
              <ArrowForwardIcon fontSize="sm"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
