import React from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import CheckoutForm from "./CheckoutForm";
import Gallery from "./Gallery";
import Cart from "./Cart";

// Sample images for gallery
const galleryImages = [
  "https://cdn.pixabay.com/photo/2018/11/22/12/48/clothing-3831827_640.jpg",
  "https://cdn.pixabay.com/photo/2019/09/30/06/06/fashion-4514908_640.jpg",
  "https://cdn.pixabay.com/photo/2018/11/22/12/48/clothing-3831826_640.jpg",
  "https://cdn.pixabay.com/photo/2019/09/30/06/06/fashion-4514908_640.jpg",
];

// Sample product data
const products = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2020/01/21/15/26/jacket-4783125_640.jpg",
    title: "Recycle Boucle Knit Cardigan",
    price: 120,
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2020/01/22/15/10/cardigan-4785525_640.jpg",
    title: "Reversible Angora Cardigan",
    price: 120,
  },
];

function App() {
  const [cartItems, setCartItems] = React.useState([]); // State for cart items

  // Function to handle adding to cart
  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to handle removing from cart
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar Component */}
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Gallery Component */}
        <h2 className="text-2xl font-bold mb-4">Gallery</h2>
        <Gallery images={galleryImages} />

        {/* Product Cards */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>

        {/* Cart View */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          <Cart cartItems={cartItems} onRemoveItem={handleRemoveItem} />
        </div>

        {/* Checkout Form */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Checkout</h2>
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}

export default App;
