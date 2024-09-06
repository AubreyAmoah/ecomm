import React from "react";

const LoginForm = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full bg-black text-white py-2 rounded-lg">
          Login
        </button>

        <button className="w-full bg-red-600 text-white py-2 rounded-lg flex items-center justify-center">
          <svg
            className="w-6 h-6 mr-2"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            {/* Gmail Icon */}
            <path
              fill="#EA4335"
              d="M24 9.5c3.9 0 7.1 1.4 9.6 3.8l7.1-7.1C35.7 2.3 30.2 0 24 0 14.8 0 7.1 5.8 4.1 13.8l8 6.2C13.6 14.4 18.3 9.5 24 9.5z"
            ></path>
            <path
              fill="#34A853"
              d="M46.1 24.5c0-1.6-.1-3.2-.4-4.7H24v9.3h12.5c-.5 2.5-2 4.7-4.2 6.1l6.5 5.1c3.8-3.5 6-8.6 6-14.8z"
            ></path>
          </svg>
          Login with Gmail
        </button>

        <button className="w-full bg-green-500 text-white py-2 rounded-lg flex items-center justify-center">
          <svg
            className="w-6 h-6 mr-2"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            {/* WhatsApp Icon */}
            <path
              fill="#25D366"
              d="M24 0C10.8 0 0 10.8 0 24c0 5.4 1.7 10.4 4.9 14.7L0 48l9.5-4.8C13.6 43.5 18.7 45 24 45c13.2 0 24-10.8 24-24C48 10.8 37.2 0 24 0zm-1 36h-3v-3h3v3zm0-5h-3v-3h3v3zm0-5h-3v-3h3v3z"
            />
          </svg>
          Login with WhatsApp
        </button>
      </form>
    </>
  );
};

export default LoginForm;
