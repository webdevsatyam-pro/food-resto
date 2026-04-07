import React from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  ArrowRight,
  UtensilsCrossed,
  ChefHat,
} from "lucide-react";

const Signup = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-50 px-4 py-10">
      {/* Compact Card */}
      <div className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 p-8 md:p-10 relative">
        {/* --- FOOD THEMED HEADER --- */}
        <div className="text-center mb-10 relative">
          {/* Food Icon: Star ki jagah Utensils lagaya hai */}
          <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl mb-4 rotate-12 hover:rotate-0 transition-transform duration-300 shadow-sm">
            <UtensilsCrossed size={30} />
          </div>

          <h2 className="text-4xl font-black text-gray-900 tracking-tighter leading-tight mb-2 uppercase">
            Create <span className="text-orange-500">Account</span>
          </h2>

          <div className="flex flex-col items-center gap-1">
            <p className="text-gray-500 font-medium text-sm">
              Start your food journey with
            </p>
            {/* Highlighted Badge */}
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full font-black text-xs shadow-lg shadow-orange-200 flex items-center gap-1 animate-bounce mt-1">
              <ChefHat size={14} /> FOODIEHUB
            </span>
          </div>
        </div>
        {/* --- END OF HEADER --- */}

        <form className="space-y-4">
          {/* Full Name */}
          <div className="relative group">
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400 group-focus-within:text-orange-500 transition-colors">
              <User size={18} />
            </span>
            <input
              type="text"
              className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:bg-white outline-none transition-all text-sm font-medium shadow-inner"
              placeholder="Your Full Name"
              required
            />
          </div>

          {/* Email & Phone */}
          <div className="space-y-4">
            <div className="relative group">
              <span className="absolute inset-y-0 left-4 flex items-center text-gray-400 group-focus-within:text-orange-500 transition-colors">
                <Mail size={18} />
              </span>
              <input
                type="email"
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:bg-white outline-none transition-all text-sm font-medium shadow-inner"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="relative group">
              <span className="absolute inset-y-0 left-4 flex items-center text-gray-400 group-focus-within:text-orange-500 transition-colors">
                <Phone size={18} />
              </span>
              <input
                type="tel"
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:bg-white outline-none transition-all text-sm font-medium shadow-inner"
                placeholder="Phone Number"
                required
              />
            </div>
          </div>

          {/* Delivery Address */}
          <div className="relative group">
            <span className="absolute top-4 left-4 text-gray-400 group-focus-within:text-orange-500 transition-colors">
              <MapPin size={18} />
            </span>
            <textarea
              className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:bg-white outline-none transition-all text-sm font-medium shadow-inner"
              placeholder="Full Delivery Address"
              rows="2"
              required></textarea>
          </div>

          {/* Password */}
          <div className="relative group">
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400 group-focus-within:text-orange-500 transition-colors">
              <Lock size={18} />
            </span>
            <input
              type="password"
              ocean
              className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-transparent rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:bg-white outline-none transition-all text-sm font-medium shadow-inner"
              placeholder="Create Secure Password"
              required
            />
          </div>

          {/* BUTTON WITH PRESSED EFFECT (CLICK EFFECT) */}
          <button
            type="submit"
            className="
              w-full bg-orange-500 text-white font-black py-4 rounded-2xl 
              hover:bg-orange-600 transition-all duration-300 
              active:scale-90 active:shadow-inner
              shadow-xl shadow-orange-100 flex items-center justify-center gap-3
              mt-6 text-sm uppercase tracking-[0.2em]
            ">
            Join the Foodies (Signup)
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-500 font-medium">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-600 font-black hover:underline hover:scale-105 inline-block transition-transform ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
