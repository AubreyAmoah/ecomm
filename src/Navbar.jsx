import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a href="/" className="flex items-center py-5 px-2 text-gray-700">
                <span className="font-bold">Open Fashion</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a href="/" className="py-5 px-3 text-gray-700">
                Home
              </a>
              <a href="/shop" className="py-5 px-3 text-gray-700">
                Shop
              </a>
              <a href="/about" className="py-5 px-3 text-gray-700">
                About
              </a>
              <a href="/contact" className="py-5 px-3 text-gray-700">
                Contact
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="/cart" className="py-5 px-3 text-gray-700">
              Cart
            </a>
            <a href="/login" className="py-2 px-3 bg-black text-white rounded">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
