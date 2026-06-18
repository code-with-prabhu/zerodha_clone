import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import InvestmentOptions from "./InvestmentOptions";

const SignupPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16 mt-8">
          <h1 className="text-4xl md:text-[42px] text-[#424242] font-medium mb-4">
            Open a free demat and trading account online
          </h1>

          <p className="text-lg md:text-[20px] text-gray-500">
            Start investing brokerage free and join a community
            of 1.6+ crore investors and traders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center mt-16">
          {/* Left side stays unchanged */}
          <div className="relative w-full aspect-5/4 rounded-lg flex items-center justify-center">
            <img
              src="images/account_open.svg"
              alt="zerodha and kite"
            />
          </div>

          {/* Right side changes */}
          {isLogin ? (
            <Login
              switchToSignup={() => setIsLogin(false)}
            />
          ) : (
            <Signup
              switchToLogin={() => setIsLogin(true)}
            />
          )}
        </div>
      </div>

      <InvestmentOptions />
    </>
  );
};

export default SignupPage;