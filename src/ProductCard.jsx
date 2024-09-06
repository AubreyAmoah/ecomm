import React from "react";

const ProductCard = ({ image, title, price, onAddToCart, ref }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover object-center"
        src={image}
        alt={title}
      />
      <div className="px-6 py-4">
        <h2 className="text-gray-900 font-bold text-xl">{title}</h2>
        <p className="text-gray-700 text-base">${price}</p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <button
          onClick={onAddToCart}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add to Basket
        </button>
        <p className="text-gray-700 text-sm">Size: 6, 8, 9, 10, 11</p>
      </div>
    </div>
  );
};

export default ProductCard;
