import React from "react";

const foodData = [
  {
    id: 1,
    name: "Cheese Burger",
    price: "₹149",
    category: "Fast Food",
    img: "🍔",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: "₹299",
    category: "Pizza",
    img: "🍕",
  },
  {
    id: 3,
    name: "Paneer Tikka",
    price: "₹250",
    category: "North Indian",
    img: "🍢",
  },
  {
    id: 4,
    name: "Chicken Biryani",
    price: "₹320",
    category: "Main Course",
    img: "🍛",
  },
  {
    id: 5,
    name: "Chocolate Brownie",
    price: "₹120",
    category: "Dessert",
    img: "🍰",
  },
];

const Home = ({ searchTerm, addToCart }) => {
  const filteredFood = foodData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Popular Dishes</h1>

      {filteredFood.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFood.map((food) => (
            <div
              key={food.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-100">
              <div className="h-40 bg-orange-50 flex items-center justify-center text-6xl">
                {food.img}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {food.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{food.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-orange-600">
                    {food.price}
                  </span>
                  <button
                    onClick={() => addToCart(food)} // Sirf food pass karein
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl">
            Oops! No food found for "{searchTerm}"
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
