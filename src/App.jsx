import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import CartSidebar from "./components/CartSidebar";

// Pages
import Home from "./pages/Home"; // <--- Ye aapka naya Home page hai
import Menus from "./pages/Menus";
import Checkout from "./pages/Checkout";
import Offers from "./pages/Offers";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const newItem = {
      ...product,
      cartId: Date.now(),
      price:
        typeof product.price === "string" ? product.price : `₹${product.price}`,
    };
    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (cartId) => {
    setCartItems(cartItems.filter((item) => item.cartId !== cartId));
  };

  const clearCart = () => setCartItems([]);

  return (
    <div className="pb-20 md:pb-0 font-sans">
      <Navbar
        cartCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />

      <BottomNav
        cartCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />

      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* Menus Page Route */}
        <Route path="/menus" element={<Menus onAddToCart={addToCart} />} />

        <Route path="/offers" element={<Offers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/checkout"
          element={<Checkout cartItems={cartItems} clearCart={clearCart} />}
        />

        {/* Placeholder Routes */}
        <Route
          path="/about"
          element={
            <div className="p-20 text-center text-2xl font-bold">
              About Us Section
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="p-20 text-center text-2xl font-bold">
              Contact Us Section
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
