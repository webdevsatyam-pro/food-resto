import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Header Section */}
        <div className="bg-orange-500 p-8 text-center text-white">
          <h2 className="text-3xl font-bold">Welcome Back!</h2>
          <p className="mt-2 text-orange-100">
            Login to order your favorite food
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <form className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <Mail size={18} />
                </span>
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition bg-gray-50"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-semibold text-gray-700">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  size={14}
                  className="text-xs font-bold text-orange-600 hover:text-orange-700">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <Lock size={18} />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition bg-gray-50"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-orange-500">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button className="w-full bg-orange-500 text-white font-bold py-3.5 rounded-xl hover:bg-orange-600 transform transition active:scale-95 shadow-lg shadow-orange-200 flex items-center justify-center gap-2">
              Login Now
              <ArrowRight size={20} />
            </button>
          </form>

          {/* Social Login (Optional UI) */}
          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-400 font-medium">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="w-full py-2.5 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 transition font-medium text-gray-700">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                className="w-5 h-5 mr-2"
                alt="google"
              />
              Google
            </button>
          </div>

          {/* Footer Link */}
          <p className="mt-8 text-center text-gray-600 font-medium">
            New here?{" "}
            <Link
              to="/signup"
              className="text-orange-600 font-bold hover:underline underline-offset-4">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
