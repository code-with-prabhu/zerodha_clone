import React from 'react'

const Hero = () => {
  return (
    <div className="container mx-auto px-6 p-12 mt-20">
  
  {/* Heading Section */}
  <div className="p-5 mt-5 text-center">
    
    <h1 className="text-4xl font-medium text-gray-600">
     Charges
    </h1>

    <h3 className="text-gray-500 mt-4 mb-5 text-xl">
    List of all charges and taxes
    </h3>

  </div>

  {/* Pricing Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-5 mt-15 text-center [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:justify-start [&>div]:px-4">
    
    {/* Card 1 */}
    <div>
      <img
        src="images/pricingEquity.svg"
        alt="Free Equity Delivery"
        className="w-56 mb-8"
      />

      <h1 className="text-3xl font-medium text-gray-800 mb-5">
        Free equity delivery
      </h1>

      <p className="text-gray-500 text-lg leading-7 max-w-xs">
        All equity delivery investments (NSE, BSE), are absolutely free —
        ₹0 brokerage.
      </p>
    </div>

    {/* Card 2 */}
    <div>
      <img
        src="images/intradayTrades.svg"
        alt="Intraday Trades"
        className="w-56 mb-8"
      />

      <h1 className="text-3xl font-medium text-gray-800 mb-5">
        Intraday and F&O trades
      </h1>

      <p className="text-gray-500 text-lg leading-7 max-w-xs">
        Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
        intraday trades across equity, currency, and commodity trades.
      </p>
    </div>

    {/* Card 3 */}
    <div>
      <img
        src="images/pricingEquity.svg"
        alt="Free Direct MF"
        className="w-56 mb-8"
      />

      <h1 className="text-3xl font-medium text-gray-800 mb-5">
        Free direct MF
      </h1>

      <p className="text-gray-500 text-lg leading-7 max-w-xs">
        All direct mutual fund investments are absolutely free — ₹0
        commissions & DP charges.
      </p>
    </div>

  </div>
</div>
  )
}

export default Hero
