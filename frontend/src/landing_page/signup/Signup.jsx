import React, { useState } from "react";
import InvestmentOptions from "./InvestmentOptions";

const signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your signup logic here
  };
  return (
    <>
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16 mt-8">
        <h1 className="text-4xl md:text-[42px] text-[#424242] font-medium mb-4">
          Open a free demat and trading account online
        </h1>
        <p className="text-lg md:text-[20px] text-gray-500">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      {/* Content Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center mt-16">
        {/* Left Side: Mockup Illustration Placeholder */}
        <div className="relative w-full aspect-5/4 rounded-lg flex items-center justify-center">
          <img
            src="images/account_open.svg"
            alt="zerodha and kite"
          />
        </div>

        {/* Right Side: Modified Signup Form */}
        <div className="max-w-md w-full mx-auto md:mx-0">
          <h2 className="text-[32px] text-[#424242] font-medium mb-1">
            Signup now
          </h2>
          <p className="text-[#9b9b9b] text-base mb-8">
            Or track your existing application
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full border border-gray-300 rounded-[3px] px-4 py-3 text-[20px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#387ed1] focus:ring-1 focus:ring-[#387ed1] transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full border border-gray-300 rounded-[3px] px-4 py-3 text-[20px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#387ed1] focus:ring-1 focus:ring-[#387ed1] transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full border border-gray-300 rounded-[3px] px-4 py-3 text-[20px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#387ed1] focus:ring-1 focus:ring-[#387ed1] transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#387ed1] hover:bg-[#2b65a8] text-white font-medium cursor-pointer text-[20px] py-2.5 rounded-[3px] mt-2 transition-colors duration-200"
            >
              Sign up
            </button>
          </form>

          <div className="mt-8 text-center text-[12px] text-[#9b9b9b]">
            <p>
              By proceeding, you agree to the Zerodha{" "}
              <a href="#terms" className="text-[#387ed1] hover:text-blue-700">
                terms
              </a>{" "}
              &{" "}
              <a href="#privacy" className="text-[#387ed1] hover:text-blue-700">
                privacy policy
              </a>
            </p>
            <p className="mt-4">
              Looking to open NRI account?{" "}
              <a href="#nri" className="text-[#387ed1] hover:text-blue-700">
                Click here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <InvestmentOptions/>
    </>
  );
};

export default signup;
