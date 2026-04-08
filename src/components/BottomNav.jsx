import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home as HomeIcon, Tag, ShoppingBag, User } from "lucide-react";

const BottomNav = ({ cartCount, onCartClick }) => {
  const location = useLocation();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 z-50 flex justify-between items-center shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
      <Link
        to="/"
        className={`flex flex-col items-center ${location.pathname === "/" ? "text-orange-500" : "text-gray-400"}`}>
        <HomeIcon size={24} />
        <span className="text-[10px] font-bold">Home</span>
      </Link>

      <Link
        to="/offers"
        className={`flex flex-col items-center ${location.pathname === "/offers" ? "text-orange-500" : "text-gray-400"}`}>
        <Tag size={24} />
        <span className="text-[10px] font-bold">Offers</span>
      </Link>

      <button
        onClick={onCartClick}
        className="flex flex-col items-center text-gray-400 relative">
        <ShoppingBag size={24} />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
            {cartCount}
          </span>
        )}
        <span className="text-[10px] font-bold">Cart</span>
      </button>

      <Link
        to="/login"
        className={`flex flex-col items-center ${location.pathname === "/login" ? "text-orange-500" : "text-gray-400"}`}>
        <User size={24} />
        <span className="text-[10px] font-bold">Account</span>
      </Link>
    </div>
  );
};

export default BottomNav;
