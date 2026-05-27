import React from 'react'

const Left = ({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mx-auto mt-5 px-4">
      
      <div className="flex flex-col md:flex-row items-center gap-15">
        
        {/* Left Section */}
        <div className="md:w-1/2 p-15 m-5">
          <img
            src={imageURL}
            alt={productName}
            className="w-full"
          />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 p-5 mt-5">
          
          <h1 className="text-4xl font-bold text-gray-900 mb-5">
            {productName}
          </h1>

          <p className="text-gray-600 leading-7 mb-5 text-lg">
            {productDesription}
          </p>

          {/* Links */}
          <div className="flex items-center gap-10 mb-5">
            
            <a
              href={tryDemo}
              className="text-blue-600 hover:text-blue-700 transition inline-flex items-center gap-2"
            >
              Try Demo
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a
              href={learnMore}
              className="text-blue-600 hover:text-blue-700 transition inline-flex items-center gap-2"
            >
              Learn More
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

          </div>

          {/* Store Buttons */}
          <div className="flex items-center gap-10 mt-3">
            
            <a href={googlePlay}>
              <img
                src="images/googlePlayBadge.svg"
                alt="Google Play"
                className="h-12"
              />
            </a>

            <a href={appStore}>
              <img
                src="images/appstoreBadge.svg"
                alt="App Store"
                className="h-12"
              />
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Left
