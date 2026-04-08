import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Tag } from "lucide-react";

const Navbar = ({ cartCount, onCartClick }) => {
  const [isAnimate, setIsAnimate] = useState(false);

  // Jab bhi cartCount badhega, icon bounce karega
  useEffect(() => {
    if (cartCount === 0) return;
    setIsAnimate(true);
    const timer = setTimeout(() => setIsAnimate(false), 300);
    return () => clearTimeout(timer);
  }, [cartCount]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group transition-all duration-300 transform hover:scale-105 active:scale-90">
          <span className="text-2xl font-black tracking-tighter">
            <span className="text-orange-600">FOODIE</span>
            <span className="text-gray-800">HUB</span>
          </span>
          <div className="w-2 h-2 bg-orange-500 rounded-full group-hover:animate-ping"></div>
        </Link>

        {/* Central Links */}
        <div className="hidden md:flex items-center gap-8 font-bold text-gray-700">
          <Link to="/menus" className="hover:text-orange-600 transition">
            Menus
          </Link>
          <Link to="/about" className="hover:text-orange-600 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-orange-600 transition">
            Contact Us
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-5">
          <Link
            to="/offers"
            className="hidden sm:flex items-center gap-1 text-gray-700 hover:text-orange-600 font-semibold transition">
            <Tag size={18} /> Offers
          </Link>

          <Link
            to="/login"
            className="flex items-center gap-1 text-gray-700 hover:text-orange-600 font-semibold transition border-l pl-5 border-gray-200">
            <User size={20} /> <span className="hidden sm:inline">Login</span>
          </Link>

          {/* Cart Button with Bounce */}
          <button
            onClick={onCartClick}
            className={`relative p-2.5 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition shadow-md transform active:scale-75 ${
              isAnimate ? "animate-bounce" : ""
            }`}>
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
