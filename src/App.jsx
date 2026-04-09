import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import CartSidebar from "./components/CartSidebar";
import Footer from "./components/Footer"; // <--- Footer Import kiya

// Pages
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import Checkout from "./pages/Checkout";
import Offers from "./pages/Offers";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import ScrollToTop from "./components/ScrollToTop";
import FloatingCall from "./components/FloatingCall";
import About from "./pages/About";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // App.jsx ke andar addToCart function:
  const addToCart = (product) => {
    const newItem = {
      ...product,
      cartId: Date.now(),
      // Price hamesha ₹ ke saath string honi chahiye jaisa CartSidebar ko chahiye
      price:
        typeof product.price === "string" && product.price.includes("₹")
          ? product.price
          : `₹${product.price}`,
    };
    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (cartId) => {
    setCartItems(cartItems.filter((item) => item.cartId !== cartId));
  };

  const clearCart = () => setCartItems([]);

  return (
    <div className="pb-20 md:pb-0 font-sans">
      <ScrollToTop />
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
        <Route path="/" element={<Home addToCart={addToCart} />} />

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
        <Route path="/about" element={<About />} />
        <Route
          path="/contact"
          element={
            <div className="p-20 text-center text-2xl font-bold">
              Contact Us Section
            </div>
          }
        />
      </Routes>

      <Footer />

      <FloatingCall />
    </div>
  );
}

export default App;
