import React from 'react'

const Pricing = () => {
  return (
    <div className="container mx-auto p-5 px-4">
  <div className="flex flex-col md:flex-row items-start gap-10">
    
    {/* Left Section */}
    <div className="md:w-1/3">
      <h1 className="mb-3 text-3xl font-bold">
        Unbeatable pricing
      </h1>

      <p className="text-gray-600 leading-7 mb-4">
        We pioneered the concept of discount broking and price transparency
        in India. Flat fees and no hidden charges.
      </p>

      <a
        href=""
        className="text-blue-600 hover:text-blue-700 transition flex items-center gap-2"
      >
        See Pricing
        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </a>
    </div>

    {/* Right Section */}
    <div className="md:w-2/3 mb-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 text-center gap-5">
        
        <div className="p-5 border rounded-lg shadow-sm">
          <h1 className="mb-3 text-4xl font-bold">
            ₹0
          </h1>

          <p className="text-gray-600">
            Free equity delivery and
            <br />
            direct mutual funds
          </p>
        </div>

        <div className="p-5 border rounded-lg shadow-sm">
          <h1 className="mb-3 text-4xl font-bold">
            ₹20
          </h1>

          <p className="text-gray-600">
            Intraday and F&O
          </p>
        </div>

      </div>
    </div>
  </div>
</div>
  )
}

export default Pricing
