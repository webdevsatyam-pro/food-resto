import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // 1. Scroll Position Check
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 2. Popup Detection Logic (MutationObserver)
    // Yeh body ke style ko watch karta hai, jaise hi overflow hidden hoga, icon hide ho jayega
    const observer = new MutationObserver(() => {
      if (document.body.style.overflow === "hidden") {
        setIsPopupOpen(true);
      } else {
        setIsPopupOpen(false);
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Agar scroll 300 se kam hai YA koi popup khula hai, toh mat dikhao
  if (!isVisible || isPopupOpen) return null;

  return (
    <div className="fixed bottom-24 left-6 md:bottom-10 md:left-10 z-[100] animate-in fade-in zoom-in duration-300">
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white border-2 border-orange-500 text-orange-500 rounded-full shadow-[0_10px_25px_rgba(234,88,12,0.3)] hover:bg-orange-600 hover:text-white transition-all duration-300 active:scale-75 group"
        title="Back to Top">
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
