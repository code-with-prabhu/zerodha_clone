import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="container mx-auto p-12 m-5">
      <div className="text-center flex flex-col items-center">
        <h4 className="mt-15 text-gray-600 text-3xl font-semibold">404</h4>
        <h1 className="mt-5 text-gray-500 text-3xl font-semibold">
          Kiaan couldn’t find that page
        </h1>
        <p className="text-gray-400 mt-2 text-2xl mb-4">
          We couldn’t find the page you were looking for.{" "}
          <Link to="/" className="text-blue-600 hover:text-blue-700 transition">
            Visit Zerodha’s home page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
