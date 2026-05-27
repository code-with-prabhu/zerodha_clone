import React from "react";

const Brokerage = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5 mt-10 text-center border-t border-gray-300">
        {/* Left Section */}
        <div className="md:col-span-2 p-4">
          <a
            href=""
            className="text-blue-600 hover:text-blue-700 transition no-underline"
          >
            <h3 className="text-xl font-medium mb-6 -ml-35">Brokerage calculator</h3>
          </a>

          <ul className="text-left leading-10 text-lg text-gray-500 list-disc pl-5 space-y-2">
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>

            <li>Digital contract notes will be sent via e-mail.</li>

            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>

            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>

            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>

            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="p-4 flex items-start justify-center">
          <a
            href=""
            className="text-blue-600 hover:text-blue-700 transition no-underline"
          >
            <h3 className="text-xl font-medium -ml-35">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
