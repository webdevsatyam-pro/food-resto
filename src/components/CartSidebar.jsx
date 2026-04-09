import React from "react";
import { X, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({ isOpen, onClose, cartItems, removeFromCart }) => {
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + parseInt(item.price.replace("₹", "") || 0),
    0,
  );

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          onClick={onClose}></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 md:w-[400px] bg-white z-[70] shadow-2xl transform transition-all duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6 border-b flex justify-between items-center bg-orange-500 text-white">
          <div className="flex items-center gap-2">
            <ShoppingBag size={24} />
            <h2 className="text-xl font-bold">
              My Basket ({cartItems.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="hover:rotate-90 transition-transform bg-white/20 p-1 rounded-full">
            <X size={24} />
          </button>
        </div>

        <div className="p-4 h-[calc(100vh-180px)] overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full opacity-50">
              <img
                src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
                className="w-32 mb-4"
                alt="empty"
              />
              <p className="text-lg font-medium">Cart is empty</p>
            </div>
          ) : (
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.cartId}
                  className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
                  {/* FIX: Yahan span ki jagah img tag laga diya hai */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">{item.name}</h4>
                    <p className="text-orange-600 font-bold">{item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.cartId)}
                    className="p-2 text-gray-400 hover:text-red-500 transition">
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 w-full p-6 border-t bg-gray-50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 font-medium text-lg">
                Total Amount:
              </span>
              <span className="text-2xl font-black text-gray-900">
                ₹{total}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-orange-500 text-white font-bold py-4 rounded-2xl hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg">
              Go to Checkout <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
