import React from "react";

const CheckoutForm = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-gray-900 font-bold text-2xl mb-4">Checkout</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name on Card</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Card Number</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-700">Exp Month</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700">Exp Year</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">CVV</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button className="w-full bg-black text-white py-2 rounded-lg">
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
