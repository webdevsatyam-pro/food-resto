import React from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Tag } from "lucide-react";

// Dhyan de: Yahan brackets { } ke andar 'onCartClick' hona zaroori hai
const Navbar = ({ setSearchTerm, cartCount, onCartClick }) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* 1. Logo (Click karne pe Home pe jayega) */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-black text-orange-600 tracking-tighter group-hover:scale-105 transition-transform">
            FOODIE<span className="text-gray-800">HUB</span>
          </span>
        </Link>

        {/* 2. Search Bar (Food filter ke liye) */}
        <div className="flex-1 max-w-md relative">
          <input
            type="text"
            placeholder="Search for delicious food..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        {/* 3. Navigation Links & Actions */}
        <div className="flex items-center gap-5">
          {/* Offers Link */}
          <Link
            to="/offers"
            className="hidden md:flex items-center gap-1 text-gray-700 hover:text-orange-600 font-semibold transition">
            <Tag size={18} />
            Offers
          </Link>

          {/* Login Button */}
          <Link
            to="/login"
            className="flex items-center gap-1 text-gray-700 hover:text-orange-600 font-semibold transition border-l pl-5 border-gray-200">
            <User size={20} />
            <span className="hidden sm:inline">Login</span>
          </Link>

          {/* Cart Button (Ispe click se Sidebar khulega) */}
          <button
            onClick={onCartClick} // <--- Ye ab error nahi dega
            className="relative p-2.5 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition shadow-md shadow-orange-100 transform active:scale-90">
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
