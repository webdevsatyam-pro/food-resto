import React, { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";

const foodItems = [
  {
    id: 1,
    name: "Cheese Pizza",
    category: "Pizza",
    price: 299,
    rating: 4.5,
    img: "🍕",
  },
  {
    id: 2,
    name: "Veg Burger",
    category: "Burger",
    price: 149,
    rating: 4.2,
    img: "🍔",
  },
  {
    id: 3,
    name: "Paneer Tikka",
    category: "Main Course",
    price: 350,
    rating: 4.8,
    img: "🍛",
  },
  {
    id: 4,
    name: "Hakka Noodles",
    category: "Chinese",
    price: 199,
    rating: 4.0,
    img: "🍜",
  },
  {
    id: 5,
    name: "Choco Brownie",
    category: "Desserts",
    price: 120,
    rating: 4.9,
    img: "🍰",
  },
  {
    id: 6,
    name: "Coke",
    category: "Beverages",
    price: 45,
    rating: 4.1,
    img: "🥤",
  },
];

const categories = [
  "All",
  "Pizza",
  "Burger",
  "Main Course",
  "Chinese",
  "Desserts",
];

const Menus = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? foodItems
      : foodItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">
          Our <span className="text-orange-600">Menus</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition ${
                activeCategory === cat
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {item.img}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
              <div className="flex justify-center items-center gap-1 text-yellow-500 my-2">
                <Star size={16} fill="currentColor" />{" "}
                <span className="text-gray-600">{item.rating}</span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-2xl font-black text-gray-900">
                  ₹{item.price}
                </span>
                <button
                  onClick={() => onAddToCart(item)}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-xl transition active:scale-90 flex items-center gap-2 font-bold">
                  <ShoppingCart size={18} /> Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menus;
