import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[rgb(250,250,250)]">
  <div className="container mx-auto border-white p-3 mt-5 px-4">
    
    {/* Top Footer */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
      
      {/* Logo Section */}
      <div>
        <img
          src="images/logo.svg"
          alt="Logo"
          className="w-1/2 mb-4"
        />

        <p className="text-gray-600 leading-7">
          &copy; 2010 - 2026, Not Zerodha Broking Ltd. All rights reserved.
        </p>
      </div>

      {/* Company */}
      <div>
        <p className="font-semibold mb-4 text-lg">Company</p>

        <div className="flex flex-col gap-2">
          <a href="" className="text-gray-600 hover:text-blue-600">
            About
          </a>
          <a href="" className="text-gray-600 hover:text-blue-600">
            Products
          </a>
          <a href="" className="text-gray-600 hover:text-blue-600">
            Pricing
          </a>
          <a href="" className="text-gray-600 hover:text-blue-600">
            Referral programme
          </a>
          <a href="" className="text-gray-600 hover:text-blue-600">
            Careers
          </a>
          <a href="" className="text-gray-600 hover:text-blue-600">
            Zerodha.tech
          </a>
          <a href="" className="text-gray-600 hover:text-blue-600">
            Press & media
          </a>
          <a href="" className="text-gray-600 hover:text-blue-600">
            Zerodha cares (CSR)
          </a>
        </div>
      </div>

      {/* Support */}
      <div>
        <p className="font-semibold mb-4 text-lg">Support</p>

        <div className="flex flex-col gap-2">
          <a href="" className="text-gray-600 hover:text-blue-600">
            Contact
          </a>
          <a href="" className="text-gray-600 hover:text-blue-600">
            Support portal
          </a>
          <a href="" className="text-gray-600 hover:text-blue-600">
            Z-Connect blog
          </a>
          <a href="" className="text-gray-600 hover:text-blue-600">
            List of charges
          </a>
          <a href="" className="text-gray-600 hover:text-blue-600">
            Downloads & resources
          </a>
        </div>
      </div>

      {/* Account */}
      <div>
        <p className="font-semibold mb-4 text-lg">Account</p>

        <div className="flex flex-col gap-2">
          <a href="" className="text-gray-600 hover:text-blue-600">
            Open an account
          </a>
          <a href="" className="text-gray-600 hover:text-blue-600">
            Fund transfer
          </a>
          <a href="" className="text-gray-600 hover:text-blue-600">
            60 day challenge
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Footer Text */}
    <div className="mt-10 text-gray-500 text-sm leading-7 space-y-5 pb-10">
      
      <p>
        Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
        INZ000031633 CDSL: Depository services through Zerodha Securities
        Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
        through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
        no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
        #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
        J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
        complaints pertaining to securities broking please write to
        complaints@zerodha.com, for DP related to dp@zerodha.com. Please
        ensure you carefully read the Risk Disclosure Document as prescribed
        by SEBI | ICF
      </p>

      <p>
        Procedure to file a complaint on SEBI SCORES: Register on SCORES
        portal. Mandatory details for filing complaints on SCORES: Name,
        PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
        Communication, Speedy redressal of the grievances
      </p>

      <p>
        Investments in securities market are subject to market risks; read
        all the related documents carefully before investing.
      </p>

      <p>
        "Prevent unauthorised transactions in your account. Update your
        mobile numbers/email IDs with your stock brokers. Receive
        information of your transactions directly from Exchange on your
        mobile/email at the end of the day. Issued in the interest of
        investors. KYC is one time exercise while dealing in securities
        markets - once KYC is done through a SEBI registered intermediary
        (broker, DP, Mutual Fund etc.), you need not undergo the same
        process again when you approach another intermediary." Dear
        Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Please write the Bank account number and sign the
        IPO application form to authorize your bank to make payment in case
        of allotment. In case of non allotment the funds will remain in your
        bank account. As a business we don't give stock tips, and have not
        authorized anyone to trade on behalf of others. If you find anyone
        claiming to be part of Zerodha and offering such services, please
        create a ticket here.
      </p>

    </div>
  </div>
</footer>
  )
}

export default Footer
