import React from "react";

const Offers = () => {
  const coupons = [
    {
      code: "FIRST50",
      desc: "50% OFF on your first order",
      color: "bg-blue-500",
    },
    {
      code: "FOODIE100",
      desc: "Flat ₹100 OFF above ₹500",
      color: "bg-green-500",
    },
    {
      code: "WEEKEND",
      desc: "Free Delivery on Weekends",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Special Offers & Coupons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coupons.map((c, i) => (
          <div
            key={i}
            className={`${c.color} text-white p-8 rounded-2xl flex flex-col justify-center relative overflow-hidden`}>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 italic">CODE: {c.code}</h3>
              <p className="text-lg opacity-90">{c.desc}</p>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-20 text-9xl font-black">
              SALE
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
