import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Tag, MoreVertical, X } from "lucide-react";

const Navbar = ({ cartCount, onCartClick }) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cart Animation Logic (Laptop ke liye)
  useEffect(() => {
    if (cartCount === 0) return;
    setIsAnimate(true);
    const timer = setTimeout(() => setIsAnimate(false), 300);
    return () => clearTimeout(timer);
  }, [cartCount]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* 1. Logo (Dono mein dikhega) */}
        <Link
          to="/"
          className="flex items-center gap-2 group transition-all duration-300 transform hover:scale-105 active:scale-90">
          <span className="text-2xl font-black tracking-tighter">
            <span className="text-orange-600">FOODIE</span>
            <span className="text-gray-800">HUB</span>
          </span>
        </Link>

        {/* 2. LAPTOP ONLY: Center Links */}
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

        {/* 3. Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-5">
          {/* LAPTOP ONLY: Login & Cart (md:flex ka matlab laptop par dikhega, hidden matlab phone par hide) */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              to="/offers"
              className="flex items-center gap-1 text-gray-700 hover:text-orange-600 font-semibold transition">
              <Tag size={18} /> Offers
            </Link>

            <Link
              to="/login"
              className="flex items-center gap-1 text-gray-700 hover:text-orange-600 font-semibold transition border-l pl-5 border-gray-200">
              <User size={20} />
              <span>Login</span>
            </Link>

            <button
              onClick={onCartClick}
              className={`relative p-2.5 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition transform active:scale-75 ${
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

          {/* MOBILE ONLY: Three Dots (md:hidden matlab laptop par hide ho jayega) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition">
            {isMenuOpen ? (
              <X size={28} className="text-orange-600" />
            ) : (
              <MoreVertical size={28} />
            )}
          </button>
        </div>
      </div>

      {/* 4. MOBILE DROPDOWN: Menu Links (Three dots click karne pe) */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col p-4 gap-4 font-bold text-gray-700">
          <Link
            to="/menus"
            onClick={() => setIsMenuOpen(false)}
            className="p-2 hover:text-orange-600">
            Menus
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="p-2 hover:text-orange-600">
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="p-2 hover:text-orange-600">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
