import React, { useState } from "react";
import {
  CreditCard,
  MapPin,
  CheckCircle,
  QrCode,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cartItems, clearCart }) => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [showQR, setShowQR] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);

  const total = cartItems.reduce(
    (acc, item) => acc + parseInt(item.price.replace("₹", "")),
    0,
  );

  const handleConfirmOrder = () => {
    if (paymentMethod === "upi" && !showQR) {
      alert("Please generate and scan QR code first!");
      return;
    }
    setIsOrdered(true);
    clearCart();
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  if (isOrdered) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-6">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <CheckCircle size={60} />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Order Placed!</h1>
        <p className="text-gray-600 text-lg">
          Your delicious food is on the way. 🎉
        </p>
        <p className="text-sm text-gray-400 mt-4">Redirecting to home...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 my-10">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-500 hover:text-orange-600 mb-6 transition">
        <ArrowLeft size={20} /> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Address Section */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
              <MapPin className="text-orange-500" /> Delivery Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <textarea
                placeholder="Complete Address..."
                className="w-full p-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-orange-500 outline-none md:col-span-2"
                rows="2"></textarea>
            </div>
          </div>

          {/* Payment Section */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
              <CreditCard className="text-orange-500" /> Payment Method
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => {
                  setPaymentMethod("cod");
                  setShowQR(false);
                }}
                className={`p-4 rounded-2xl font-bold border-2 transition ${paymentMethod === "cod" ? "border-orange-500 bg-orange-50 text-orange-600" : "border-gray-100 text-gray-500"}`}>
                Cash on Delivery
              </button>
              <button
                onClick={() => setPaymentMethod("upi")}
                className={`p-4 rounded-2xl font-bold border-2 transition ${paymentMethod === "upi" ? "border-orange-500 bg-orange-50 text-orange-600" : "border-gray-100 text-gray-500"}`}>
                UPI / Online
              </button>
            </div>

            {paymentMethod === "upi" && (
              <div className="bg-gray-50 p-6 rounded-2xl text-center border border-dashed border-gray-300">
                {!showQR ? (
                  <button
                    onClick={() => setShowQR(true)}
                    className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-xl mx-auto hover:bg-black transition">
                    <QrCode size={20} /> Generate QR
                  </button>
                ) : (
                  <div className="space-y-4 animate-in fade-in zoom-in">
                    <p className="text-sm font-bold text-gray-500 uppercase">
                      Scan to pay ₹{total}
                    </p>
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=foodiehub@upi&am=${total}`}
                      alt="QR"
                      className="mx-auto bg-white p-2 rounded shadow-md"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl h-fit sticky top-24">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">
            Bill Details
          </h2>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-gray-400">
              <span>Items ({cartItems.length})</span>
              <span>₹{total}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Delivery</span>
              <span className="text-green-400">FREE</span>
            </div>
            <div className="border-t border-gray-700 pt-4 flex justify-between text-2xl font-black">
              <span>To Pay</span>
              <span className="text-orange-500">₹{total}</span>
            </div>
          </div>
          <button
            disabled={cartItems.length === 0}
            onClick={handleConfirmOrder}
            className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition active:scale-95 flex items-center justify-center gap-2">
            <CheckCircle size={22} /> Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
