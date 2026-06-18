import React, { useState } from "react";
import axios from "axios";

const Signup = ({ switchToLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
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
        "myendpoint",
        formData,
        {
          withCredentials: true,
        }
      );

      setMessage(response.data.message);

      setFormData({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
        "Something went wrong"
      );
    }
  };

  return (
    <div className="max-w-md w-full mx-auto md:mx-0">
      <h2 className="text-[32px] text-[#424242] font-medium mb-1">
        Signup now
      </h2>

      <p className="text-[#9b9b9b] text-base mb-8">
        Or track your existing application
      </p>

      {message && (
        <p className="mb-4 text-center text-sm">
          {message}
        </p>
      )}

      <form className="space-y-5" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="w-full border border-gray-300 rounded-[3px] px-4 py-3 text-[20px]"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address"
          className="w-full border border-gray-300 rounded-[3px] px-4 py-3 text-[20px]"
          required
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full border border-gray-300 rounded-[3px] px-4 py-3 text-[20px]"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#387ed1] hover:bg-[#2b65a8] text-white text-[20px] py-2.5 rounded-[3px]"
        >
          Sign up
        </button>
      </form>

      <div className="mt-8 text-center text-[12px] text-[#9b9b9b]">
        <p>
          By proceeding, you agree to the Zerodha terms &
          privacy policy
        </p>

        <p className="mt-4">
          Already have an account?{" "}
          <button
            type="button"
            onClick={switchToLogin}
            className="text-[#387ed1] hover:text-blue-700 cursor-pointer"
          >
            Click here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;