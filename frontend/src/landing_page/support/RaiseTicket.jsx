import React from 'react'

const RaiseTicket = () => {
  return (
    <div className="container mx-auto px-6 py-16">
  
  {/* Heading */}
  <div className="mb-16">
    
    <h1 className="text-4xl font-medium text-gray-800">
      To create a ticket, select a relevant topic
    </h1>

  </div>

  {/* Topics Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-10">
    
    {/* Card 1 */}
    <div className="space-y-4">
      
      <h4 className="text-2xl font-medium text-gray-800 flex items-center gap-3">
        <i className="fa fa-plus-circle text-blue-600" aria-hidden="true"></i>
        Account Opening
      </h4>

      <div className="flex flex-col">
        
        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Online Account Opening
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Offline Account Opening
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Company, Partnership and HUF Account Opening
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          NRI Account Opening
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Charges at Zerodha
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Zerodha IDFC FIRST Bank 3-in-1 Account
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Getting Started
        </a>

      </div>
    </div>

    {/* Card 2 */}
    <div className="space-y-4">
      
      <h4 className="text-2xl font-medium text-gray-800 flex items-center gap-3">
        <i className="fa fa-plus-circle text-blue-600" aria-hidden="true"></i>
        Your Zerodha Account
      </h4>

      <div className="flex flex-col">
        
        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Your Profile
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Account Modification
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Client Master Report
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Nomination
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Transfer and Conversion of Securities
        </a>

      </div>
    </div>

    {/* Card 3 */}
    <div className="space-y-4">
      
      <h4 className="text-2xl font-medium text-gray-800 flex items-center gap-3">
        <i className="fa fa-plus-circle text-blue-600" aria-hidden="true"></i>
        Kite
      </h4>

      <div className="flex flex-col">
        
        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          IPO
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Trading FAQs
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Margin Trading Facility
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Charts and Orders
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Alerts and Nudges
        </a>

      </div>
    </div>

    {/* Card 4 */}
    <div className="space-y-4">
      
      <h4 className="text-2xl font-medium text-gray-800 flex items-center gap-3">
        <i className="fa fa-plus-circle text-blue-600" aria-hidden="true"></i>
        Funds
      </h4>

      <div className="flex flex-col">
        
        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Add Money
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Withdraw Money
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Add Bank Accounts
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          eMandates
        </a>

      </div>
    </div>

    {/* Card 5 */}
    <div className="space-y-4">
      
      <h4 className="text-2xl font-medium text-gray-800 flex items-center gap-3">
        <i className="fa fa-plus-circle text-blue-600" aria-hidden="true"></i>
        Console
      </h4>

      <div className="flex flex-col">
        
        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Portfolio
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Corporate Actions
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Funds Statement
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Reports
        </a>

      </div>
    </div>

    {/* Card 6 */}
    <div className="space-y-4">
      
      <h4 className="text-2xl font-medium text-gray-800 flex items-center gap-3">
        <i className="fa fa-plus-circle text-blue-600" aria-hidden="true"></i>
        Coin
      </h4>

      <div className="flex flex-col">
        
        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Mutual Funds
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          SIPs
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Redemption
        </a>

        <a href="" className="text-blue-600 hover:text-blue-700 leading-10 transition">
          Coin App
        </a>

      </div>
    </div>

  </div>
</div>
  )
}

export default RaiseTicket
