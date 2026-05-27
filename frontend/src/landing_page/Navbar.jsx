import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 w-full bg-white shadow-[2px_1px_2px_#eee] leading-[1.7]">
  <div className="container mx-auto flex items-center-safe justify-between p-5">
    
    {/* Logo */}
    <Link to='/' className="flex items-center">
      <img
        src="images/logo.svg"
        alt="Logo"
        className="w-32 md:w-40 align-middle"
      />
    </Link>

    {/* Navigation Links */}
    <div>
      <ul className="flex items-center gap-9 text-gray-500 font-normal">
        <li>
          <Link to="/signup" className="hover:text-blue-600 transition">
            Signup
          </Link>
        </li>

        <li>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
        </li>

        <li>
          <Link to="/product" className="hover:text-blue-600 transition">
            Product
          </Link>
        </li>

        <li>
          <Link to="/pricing" className="hover:text-blue-600 transition">
            Pricing
          </Link>
        </li>

        <li>
          <Link to="support" className="hover:text-blue-600 transition">
            Support
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
