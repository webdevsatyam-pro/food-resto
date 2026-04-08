import React, { useState } from "react";
import {
  Ticket,
  Tag,
  Zap,
  Gift,
  CreditCard,
  Copy,
  CheckCircle,
} from "lucide-react";

const Offers = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const offersData = [
    {
      id: 1,
      code: "WELCOME50",
      discount: "50% OFF",
      desc: "On your first 3 orders",
      icon: <Zap className="text-yellow-500" />,
      color: "bg-orange-50",
    },
    {
      id: 2,
      code: "PARTY100",
      discount: "₹100 OFF",
      desc: "Orders above ₹499",
      icon: <Gift className="text-pink-500" />,
      color: "bg-pink-50",
    },
    {
      id: 3,
      code: "FREEFOOD",
      discount: "FREE DELIVERY",
      desc: "On all orders today",
      icon: <Zap className="text-blue-500" />,
      color: "bg-blue-50",
    },
    {
      id: 4,
      code: "SBI200",
      discount: "₹200 OFF",
      desc: "Using SBI Credit Cards",
      icon: <CreditCard className="text-indigo-500" />,
      color: "bg-indigo-50",
    },
    {
      id: 5,
      code: "CHAITIME",
      discount: "20% OFF",
      desc: "Special Evening Snacks deal",
      icon: <Tag className="text-green-500" />,
      color: "bg-green-50",
    },
    {
      id: 6,
      code: "STEALDEAL",
      discount: "60% OFF",
      desc: "Up to ₹120 on select items",
      icon: <Zap className="text-red-500" />,
      color: "bg-red-50",
    },
  ];

  // --- YE HAI ACTUAL COPY LOGIC ---
  const handleCopy = async (code) => {
    try {
      // Browser ke clipboard mein text bhej raha hai
      await navigator.clipboard.writeText(code);

      // UI update kar raha hai
      setCopiedCode(code);

      // 2 second baad wapis "Copy" dikhayega
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
      alert("Failed to copy code. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Banner Section */}
      <div className="bg-orange-500 py-16 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 text-white text-center md:text-left">
          <div>
            <h1 className="text-5xl font-black italic tracking-tighter mb-4">
              GRAB THE <br /> BEST DEALS!
            </h1>
            <p className="text-orange-100 text-lg font-medium">
              Delicious food is just a coupon away. 🎉
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/30 mt-8 md:mt-0 shadow-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em]">
              Mega Offer
            </span>
            <div className="text-6xl font-black my-2 tracking-tight">
              UP TO 60%
            </div>
            <p className="font-bold opacity-90 italic">
              No minimum order value!
            </p>
          </div>
        </div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-orange-400 rounded-full opacity-50"></div>
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-orange-600 rounded-full opacity-50"></div>
      </div>

      {/* Coupon Grid */}
      <div className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offersData.map((offer) => (
            <div
              key={offer.id}
              className={`${offer.color} rounded-[2rem] shadow-xl overflow-hidden flex flex-col relative border border-white hover:translate-y-[-5px] transition-all duration-300 group`}>
              {/* Header */}
              <div className="p-8 pb-4 flex items-center justify-between">
                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:rotate-6 transition-transform">
                  {offer.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-gray-800 tracking-tight">
                    {offer.discount}
                  </div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest italic">
                    Discount
                  </div>
                </div>
              </div>

              {/* Desc */}
              <div className="px-8 mb-6">
                <h3 className="text-gray-700 font-bold leading-tight h-10">
                  {offer.desc}
                </h3>
              </div>

              {/* Dashed Divider */}
              <div className="flex items-center px-4 relative">
                <div className="w-8 h-8 bg-gray-50 rounded-full -ml-8 shadow-inner border-r border-gray-100"></div>
                <div className="flex-1 border-t-2 border-dashed border-gray-200"></div>
                <div className="w-8 h-8 bg-gray-50 rounded-full -mr-8 shadow-inner border-l border-gray-100"></div>
              </div>

              {/* Bottom (Copy Section) */}
              <div className="p-6 bg-white/60 backdrop-blur-sm flex items-center justify-between mt-auto">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Apply Code
                  </p>
                  <p className="text-xl font-black text-gray-900 tracking-tighter italic">
                    {offer.code}
                  </p>
                </div>

                {/* INTERACTIVE COPY BUTTON */}
                <button
                  onClick={() => handleCopy(offer.code)}
                  className={`
                    flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-sm transition-all duration-200
                    active:scale-90 active:bg-opacity-80
                    ${
                      copiedCode === offer.code
                        ? "bg-green-500 text-white shadow-lg shadow-green-100"
                        : "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-100"
                    }
                  `}>
                  {copiedCode === offer.code ? (
                    <>
                      <CheckCircle size={18} /> COPIED!
                    </>
                  ) : (
                    <>
                      <Copy size={18} /> COPY CODE
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Banner */}
      <div className="max-w-4xl mx-auto text-center mt-20 px-6">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 inline-block relative">
          <Ticket className="text-orange-500 absolute -top-6 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 w-12 h-12 shadow-md border" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-2">
            New Deals Every Weekend!
          </h2>
          <p className="text-gray-500 font-medium">
            Keep ordering to unlock exclusive membership rewards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
