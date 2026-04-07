import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";

// Pages
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import ForgotPassword from "./Auth/ForgotPassword";
import ResetPassword from "./Auth/ResetPassword";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Function: Cart me item add karne ke liye
  const addToCart = (food) => {
    // Har item ko ek unique ID dena zaroori hai (index use kar sakte hain agar ID na ho)
    setCartItems([...cartItems, { ...food, cartId: Date.now() }]);
  };

  // Function: Cart se item hatane ke liye
  const removeFromCart = (cartId) => {
    setCartItems(cartItems.filter((item) => item.cartId !== cartId));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Navbar: Har page pe dikhega */}
      <Navbar
        setSearchTerm={setSearchTerm}
        cartCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* 2. Cart Sidebar: Sirf tab dikhega jab isCartOpen true ho */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />

      {/* 3. Saare Pages ke Routes */}
      <main>
        <Routes>
          {/* Main Pages */}
          <Route
            path="/"
            element={<Home searchTerm={searchTerm} addToCart={addToCart} />}
          />
          <Route path="/offers" element={<Offers />} />

          {/* Auth Pages (Correctly Routed) */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
