import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import CartSidebar from "./components/CartSidebar";
import Footer from "./components/Footer";

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
import ContactUs from "./pages/Contact";
import ForgotPassword from "./Auth/ForgotPassword";
import ResetPassword from "./Auth/ResetPassword";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 1. Normal Add to Cart (Pehele se jo hai usme add karega)
  const addToCart = (product) => {
    const newItem = {
      ...product,
      cartId: Date.now(),
      price:
        typeof product.price === "string" && product.price.includes("₹")
          ? product.price
          : `₹${product.price}`,
    };
    setCartItems([...cartItems, newItem]);
  };

  // 2. BUY NOW Logic (Purana cart khali karke sirf naya item rakhega)
  const buyNow = (product) => {
    const newItem = {
      ...product,
      cartId: Date.now(),
      price:
        typeof product.price === "string" && product.price.includes("₹")
          ? product.price
          : `₹${product.price}`,
    };
    setCartItems([newItem]); // Array reset with single item
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
        {/* Home Route: buyNow function pass kiya gaya hai */}
        <Route
          path="/"
          element={<Home addToCart={addToCart} buyNow={buyNow} />}
        />

        {/* <Route path="/menus" element={<Menus onAddToCart={addToCart} />} /> */}
        <Route
          path="/menus"
          element={<Menus onAddToCart={addToCart} buyNow={buyNow} />}
        />

        <Route path="/offers" element={<Offers />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/checkout"
          element={<Checkout cartItems={cartItems} clearCart={clearCart} />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />

      <FloatingCall isCartOpen={isCartOpen} />
    </div>
  );
}

export default App;
