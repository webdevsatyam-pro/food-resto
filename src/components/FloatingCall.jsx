import React from "react";

const FloatingCall = () => {
  // Apna mobile number yahan likhein (bina space ke)
  const phoneNumber = "+917268875247";

  return (
    <div className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-[100]">
      {/* Outer Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-75"></span>

      {/* Main Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-orange-600 text-white rounded-full shadow-2xl hover:bg-black hover:scale-110 transition-all duration-300 group"
        title="Call Us Now">
        {/* Phone SVG Icon */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:rotate-12 transition-transform">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>

        {/* Tooltip Text (Optional) */}
        <span className="absolute right-full mr-3 bg-black text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          Contact Support
        </span>
      </a>
    </div>
  );
};

export default FloatingCall;
