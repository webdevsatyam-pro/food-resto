import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Console log check karne ke liye (Aap inspect karke dekh sakte hain scroll ho raha hai ya nahi)
      // console.log(window.scrollY);

      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-24 left-6 md:bottom-10 md:left-10"
      style={{ zIndex: 9999 }} // Sabse upar dikhane ke liye
    >
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white border-2 border-orange-500 text-orange-500 rounded-full shadow-[0_10px_25px_rgba(234,88,12,0.3)] hover:bg-orange-600 hover:text-white transition-all duration-300 active:scale-75 group">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:-translate-y-1 transition-transform">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default BackToTop;
