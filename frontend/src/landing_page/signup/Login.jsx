import React, { useState } from "react";
import axios from "axios";
const Login = ({ switchToSignup }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/login`,
      formData,
      {
        withCredentials: true,
      }
    );

    console.log(response.data);

    setMessage(response.data.message);

    setFormData({
      email: "",
      password: "",
    });
  } catch (error) {
    console.error(error);

    setMessage(
      error.response?.data?.message ||
      "Something went wrong"
    );
  }
};

  return (
    <div className="max-w-md w-full mx-auto md:mx-0">
      <h2 className="text-[32px] text-[#424242] font-medium mb-1">
        Login
      </h2>

      <p className="text-[#9b9b9b] text-base mb-8">
        Access your account
      </p>

      {message && (
        <p className="mb-4 text-center text-sm text-red-500">
          {message}
        </p>
      )}

      <form className="space-y-5" onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>

      <div className="mt-8 text-center text-[12px] text-[#9b9b9b]">
        <p>
          Forgot your password?{" "}
          <button
            type="button"
            className="text-[#387ed1] hover:text-blue-700 cursor-pointer"
          >
            Reset here
          </button>
        </p>

        <p className="mt-4">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={switchToSignup}
            className="text-[#387ed1] hover:text-blue-700 cursor-pointer"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;