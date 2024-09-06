import React from "react";

const Cart = ({ cartItems, onRemoveItem, onCheckoutClick, cartRef }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div ref={cartRef} className="bg-white p-4 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">
                  Quantity: {item.quantity}
                </p>
              </div>
              <div>
                <p className="text-gray-700">${item.price * item.quantity}</p>
                <button
                  className="text-red-500 text-sm underline"
                  onClick={() => onRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
        </div>
      )}

      <button onClick={onCheckoutClick} className="w-full bg-black text-white py-2 rounded-lg">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
