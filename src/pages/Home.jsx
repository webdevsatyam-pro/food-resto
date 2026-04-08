import React from "react";
import { Star, Clock, Plus, Flame } from "lucide-react";

const Home = ({ searchTerm = "", addToCart }) => {
  const foodItems = [
    {
      id: 1,
      name: "Special Biryani",
      price: 250,
      rating: 4.8,
      time: "30 min",
      img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400",
    },
    {
      id: 2,
      name: "Burger Combo",
      price: 180,
      rating: 4.5,
      time: "15 min",
      img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400",
    },
    {
      id: 3,
      name: "Cheese Pizza",
      price: 350,
      rating: 4.2,
      time: "25 min",
      img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400",
    },
    {
      id: 4,
      name: "Paneer Tikka",
      price: 210,
      rating: 4.6,
      time: "20 min",
      img: "https://images.unsplash.com/photo-1567184109115-46f34563a61c?w=400",
    },
  ];

  const filteredFoods = foodItems.filter((f) =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="w-full bg-gray-50 pt-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Banner Section */}
        <div className="bg-orange-500 rounded-3xl p-8 text-white mb-10 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl font-black mb-2 italic">Hungry?</h1>
            <p className="text-lg opacity-90">
              Order now and get 20% cashback!
            </p>
          </div>
          <div className="hidden md:block bg-white/20 p-4 rounded-full">
            <Flame size={60} />
          </div>
        </div>

        {/* Food Grid */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Popular Dishes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-20">
          {filteredFoods.map((food) => (
            <div
              key={food.id}
              className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 hover:shadow-xl transition-all">
              <img
                src={food.img}
                className="w-full h-40 object-cover rounded-2xl mb-4"
                alt={food.name}
              />
              <h3 className="font-bold text-gray-900">{food.name}</h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-black">₹{food.price}</span>
                <button
                  onClick={() => addToCart(food)}
                  className="bg-orange-500 text-white p-2 rounded-xl">
                  <Plus size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
