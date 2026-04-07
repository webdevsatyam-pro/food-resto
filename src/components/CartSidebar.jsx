import React from "react";
import { X, Trash2, ShoppingBag } from "lucide-react";

const CartSidebar = ({ isOpen, onClose, cartItems, removeFromCart }) => {
  // Total price calculate karne ke liye
  const total = cartItems.reduce(
    (acc, item) => acc + parseInt(item.price.replace("₹", "")),
    0,
  );

  return (
    <>
      {/* Background Overlay (Click karne par band ho jaye) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[60] transition-opacity"
          onClick={onClose}></div>
      )}

      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 md:w-96 bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-5 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <ShoppingBag className="text-orange-500" /> Your Cart
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} />
          </button>
        </div>

        <div className="p-5 h-[calc(100vh-200px)] overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center mt-10 text-gray-500">
              <p className="text-lg">Your cart is empty!</p>
              <button
                onClick={onClose}
                className="text-orange-500 font-bold mt-2 hover:underline">
                Start Ordering
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <div className="text-3xl bg-white p-2 rounded-lg">
                    {item.img}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">{item.name}</h4>
                    <p className="text-orange-600 font-bold">{item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-600 transition">
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Checkout Section */}
        {cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 w-full p-5 border-t bg-white">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 font-medium">Subtotal:</span>
              <span className="text-2xl font-bold text-gray-800">₹{total}</span>
            </div>
            <button className="w-full bg-orange-500 text-white font-bold py-3.5 rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-100">
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
