import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onCartClick, onLoginClick, onProductClick }) => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <Link
                to="/"
                className="flex items-center py-5 px-2 text-gray-700"
              >
                <span className="font-bold">Open Fashion</span>
              </Link>
            </div>
            <Link to="/profile" className="py-5 px-3 text-gray-700">
              Profile
            </Link>
            <div className="md:flex items-center space-x-1">
              {/* <button
                onClick={onProductClick}
                className="py-5 px-3 text-gray-700"
              >
                Product
              </button> */}
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <button onClick={onCartClick} className="py-5 px-3 text-gray-700">
              Cart
            </button>
            <button
              onClick={onLoginClick}
              className="py-2 px-3 bg-black text-white rounded"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
