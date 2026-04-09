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

  // 1. Data with 3 Images for each item
  const foodItems = [
    {
      id: 101,
      name: "Butter Chicken",
      category: "NON-VEG",
      price: 350,
      rating: 4.8,
      type: "NON-VEG",
      description:
        "A rich, creamy, and mildly spiced tomato-based curry with tender chicken pieces.",
      images: [
        "https://images.unsplash.com/photo-1603894584202-933259bb0998?w=800",
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800",
        "https://images.unsplash.com/photo-1626777553732-4806f0e51c13?w=800",
      ],
    },
    {
      id: 102,
      name: "Paneer Tikka",
      category: "VEG",
      price: 280,
      rating: 4.5,
      type: "VEG",
      description:
        "Fresh cottage cheese cubes marinated in special spices and grilled to perfection.",
      images: [
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800",
        "https://images.unsplash.com/photo-1666024276184-48f059b56326?w=800",
        "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800",
      ],
    },
    {
      id: 103,
      name: "Cheese Burger",
      category: "FAST FOOD",
      price: 150,
      rating: 4.2,
      type: "FAST FOOD",
      description:
        "Juicy double patty burger with melting cheddar and secret house sauce.",
      images: [
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
        "https://images.unsplash.com/photo-1547584385-8cd4275b68e2?w=800",
        "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
      ],
    },
    {
      id: 104,
      name: "Virgin Mojito",
      category: "DRINKS",
      price: 120,
      rating: 4.6,
      type: "DRINKS",
      description:
        "Refreshing mint leaves, lime, and chilled soda. The perfect summer cooler.",
      images: [
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800",
        "https://images.unsplash.com/photo-1546173159-315724a9f440?w=800",
      ],
    },
  ];

  // 2. Auto-scroll logic for popup slider
  useEffect(() => {
    let timer;
    if (selectedItem) {
      timer = setInterval(() => {
        setCurrentImgIndex((prev) => (prev + 1) % selectedItem.images.length);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [selectedItem]);

  // 3. Logic to handle Cart correctly (Fixing Image URL)
  const handleAddToCart = (item) => {
    const productToAdd = {
      ...item,
      img: item.images[0], // image ko img me convert kiya taaki cart me photo dikhe
    };
    onAddToCart(productToAdd);
  };

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
      <div className="max-w-7xl mx-auto px-6 pt-10">
        {/* Search & Filter Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-[2rem] shadow-sm mb-12">
          <div className="relative w-full md:flex-1">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search dishes..."
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 rounded-2xl outline-none"
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
                    ? "bg-orange-600 text-white shadow-lg"
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
                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
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
                <p className="text-gray-500 text-xs line-clamp-2 mb-4 italic leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-gray-900 tracking-tight">
                    ₹{item.price}
                  </span>

                  {/* Cart Button: Direct Add (Popup nahi khulega) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Yeh popup rokne ke liye hai
                      handleAddToCart(item);
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

      {/* --- POPUP MODAL (Same as Home Page) --- */}
      {selectedItem && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}></div>

          <div className="relative bg-white w-full max-w-4xl h-auto md:h-[550px] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 z-[220] p-2 bg-white text-gray-900 rounded-full shadow-lg hover:bg-orange-600 hover:text-white transition-all">
              <X size={24} />
            </button>

            {/* Image Slider */}
            <div className="relative h-64 md:h-full md:w-1/2 bg-gray-100 group shrink-0">
              <img
                src={selectedItem.images[currentImgIndex]}
                className="w-full h-full object-cover transition-opacity duration-500"
                alt=""
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImgIndex((prev) =>
                    prev === 0 ? selectedItem.images.length - 1 : prev - 1,
                  );
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/50 rounded-full hover:bg-white transition-all">
                <ChevronLeft />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImgIndex(
                    (prev) => (prev + 1) % selectedItem.images.length,
                  );
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/50 rounded-full hover:bg-white transition-all">
                <ChevronRight />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {selectedItem.images.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${i === currentImgIndex ? "w-6 bg-orange-600" : "w-1.5 bg-white/80"}`}
                  />
                ))}
              </div>
            </div>

            {/* Info Part */}
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase mb-3">
                  <Flame size={14} /> {selectedItem.category}
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tighter">
                  {selectedItem.name}
                </h2>
                <div className="flex items-center gap-4 mb-6 text-sm">
                  <span className="flex items-center gap-1 bg-orange-50 text-orange-600 px-3 py-1 rounded-lg font-bold">
                    <Star fill="currentColor" size={16} /> {selectedItem.rating}
                  </span>
                  <span className="text-gray-400 font-medium">
                    <Clock size={16} className="inline mr-1" /> 25 Min
                  </span>
                </div>
                <p className="text-gray-500 leading-relaxed italic text-lg">
                  "{selectedItem.description}"
                </p>
              </div>

              <div className="mt-auto pt-6 border-t flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                    To Pay
                  </p>
                  <p className="text-4xl font-black text-gray-900">
                    ₹{selectedItem.price}
                  </p>
                </div>
                <button
                  onClick={() => {
                    handleAddToCart(selectedItem);
                    setSelectedItem(null);
                  }}
                  className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-black transition-all shadow-xl shadow-orange-100 flex items-center gap-3 active:scale-95">
                  <ShoppingCart size={24} /> ORDER NOW
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
