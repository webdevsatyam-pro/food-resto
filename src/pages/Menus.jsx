import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  Star,
  Search,
  Utensils,
  Leaf,
  Zap,
  Coffee,
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  Flame,
} from "lucide-react";

const Menus = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const foodItems = [
    {
      id: 1,
      name: "Butter Chicken",
      category: "NON-VEG",
      price: 350,
      rating: 4.8,
      type: "NON-VEG",
      description:
        "A rich, creamy, and mildly spiced tomato-based curry with tender chicken pieces cooked in a buttery sauce.",
      images: [
        "data:image/jpeg;base64,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",
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800",
        "https://images.unsplash.com/photo-1626777553732-4806f0e51c13?w=800",
      ],
    },
    {
      id: 2,
      name: "Paneer Tikka",
      category: "VEG",
      price: 280,
      rating: 4.5,
      type: "VEG",
      description:
        "Fresh cottage cheese cubes marinated in special spices, yogurt, and grilled to perfection in a tandoor.",
      images: [
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800",
        "https://images.unsplash.com/photo-1666024276184-48f059b56326?w=800",
        "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800",
      ],
    },
    {
      id: 3,
      name: "Cheese Burger",
      category: "FAST FOOD",
      price: 150,
      rating: 4.2,
      type: "FAST FOOD",
      description:
        "Juicy double patty burger with melting cheddar, fresh lettuce, and our secret house-made signature sauce.",
      images: [
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
        "https://images.unsplash.com/photo-1547584385-8cd4275b68e2?w=800",
        "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
      ],
    },
    {
      id: 4,
      name: "Virgin Mojito",
      category: "DRINKS",
      price: 120,
      rating: 4.6,
      type: "DRINKS",
      description:
        "Refreshing mint leaves, lime juice, and chilled soda. The ultimate thirst quencher for any season.",
      images: [
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800",
        "https://images.unsplash.com/photo-1546173159-315724a9f440?w=800",
      ],
    },
  ];

  // Auto-scroll logic for slider
  useEffect(() => {
    let timer;
    if (selectedItem) {
      timer = setInterval(() => {
        setCurrentImgIndex((prev) => (prev + 1) % selectedItem.images.length);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [selectedItem]);

  const filteredItems = foodItems.filter((item) => {
    const matchesCategory =
      activeCategory === "ALL" || item.category === activeCategory;
    return (
      matchesCategory &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-20">
      {/* Search & Filter Header */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-[2rem] shadow-sm mb-12">
          <div className="relative w-full md:flex-1">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search dishes or drinks..."
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500/20"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto">
            {["ALL", "VEG", "NON-VEG", "DRINKS"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-orange-600 text-white shadow-lg shadow-orange-200"
                    : "bg-orange-50 text-orange-600"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedItem(item);
                setCurrentImgIndex(0);
              }}
              className="group bg-white rounded-[2.5rem] p-4 shadow-sm border border-gray-50 cursor-pointer hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 w-full rounded-[2rem] overflow-hidden mb-4">
                <img
                  src={item.images[0]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={item.name}
                />
                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-lg flex items-center gap-1">
                  <Star className="text-orange-500 fill-orange-500" size={12} />
                  <span className="text-xs font-black text-gray-800">
                    {item.rating}
                  </span>
                </div>
              </div>

              <div className="px-2">
                <h3 className="text-xl font-black text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed italic">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-gray-900">
                    ₹{item.price}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(item);
                    }}
                    className="p-3 bg-orange-600 text-white rounded-2xl hover:bg-black transition-all shadow-md active:scale-90">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- POPUP MODAL (FIXED SIZE) --- */}
      {selectedItem && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}></div>

          {/* Main Modal Box - FIXED HEIGHT for stability */}
          <div className="relative bg-white w-full max-w-4xl h-auto md:h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-5 right-5 z-[220] p-2 bg-white text-gray-900 rounded-full shadow-lg hover:bg-orange-600 hover:text-white transition-all">
              <X size={24} />
            </button>

            {/* Slider Section - FIXED DIMENSIONS */}
            <div className="relative h-[250px] md:h-full md:w-1/2 bg-gray-100 group shrink-0">
              <img
                src={selectedItem.images[currentImgIndex]}
                className="w-full h-full object-cover transition-opacity duration-500"
                alt="food"
              />

              {/* Controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImgIndex((prev) =>
                    prev === 0 ? selectedItem.images.length - 1 : prev - 1,
                  );
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 hover:bg-white transition-all">
                <ChevronLeft />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImgIndex(
                    (prev) => (prev + 1) % selectedItem.images.length,
                  );
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 hover:bg-white transition-all">
                <ChevronRight />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {selectedItem.images.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${i === currentImgIndex ? "w-6 bg-orange-600" : "w-1.5 bg-white/80"}`}
                  />
                ))}
              </div>
            </div>

            {/* Info Section - FIXED HEIGHT with INTERNAL SCROLL */}
            <div className="p-8 md:p-10 md:w-1/2 flex flex-col overflow-hidden">
              <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide">
                <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase mb-3">
                  <Flame size={14} /> {selectedItem.category}
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                  {selectedItem.name}
                </h2>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1 bg-orange-50 text-orange-600 px-3 py-1 rounded-lg font-bold">
                    <Star fill="currentColor" size={16} /> {selectedItem.rating}
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 font-medium">
                    <Clock size={16} /> 25 Min
                  </div>
                </div>
                <p className="text-gray-500 leading-relaxed mb-6 italic">
                  "{selectedItem.description}"
                </p>
                <p className="text-gray-400 text-sm">
                  Ingredients: Special House Spices, Fresh Farm Produce,
                  Authentic Masalas.
                </p>
              </div>

              {/* Footer - Stays at bottom */}
              <div className="mt-4 pt-6 border-t border-gray-100 flex items-center justify-between shrink-0">
                <div>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                    To Pay
                  </p>
                  <p className="text-3xl font-black text-gray-900">
                    ₹{selectedItem.price}
                  </p>
                </div>
                <button
                  onClick={() => {
                    onAddToCart(selectedItem);
                    setSelectedItem(null);
                  }}
                  className="bg-orange-600 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-black transition-all shadow-lg flex items-center gap-3 active:scale-95">
                  <ShoppingCart size={20} /> ORDER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menus;
