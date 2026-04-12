import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center font-sans">
      {/* 404 Visual */}
      <div className="relative mb-8">
        <h1 className="text-[120px] md:text-[180px] font-black text-gray-100 leading-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl md:text-8xl animate-bounce">🍕</span>
        </div>
      </div>

      {/* Message */}
      <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 text-lg mb-10 max-w-md">
        Looks like the page you are looking for has been eaten by someone! Let's
        get you back to some real food.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-2xl font-black hover:bg-black transition-all shadow-lg active:scale-95">
          <Home size={20} />
          GO TO HOME
        </Link>
        <button
          onClick={() => window.history.back()}
          className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl font-black hover:bg-gray-200 transition-all active:scale-95">
          <ArrowLeft size={20} />
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default NotFound;
