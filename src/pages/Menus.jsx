import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  Minus,
  Plus,
} from "lucide-react";

const Menus = ({ onAddToCart, buyNow }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // --- Background Scroll Lock Logic ---
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden"; // Scroll band
    } else {
      document.body.style.overflow = "unset"; // Scroll chalu
    }
    // Cleanup function: Taki agar component unmount ho to scroll wapas sahi ho jaye
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedItem]);

  // AAPKA PURA DATA (8 Items)
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
        "https://i.pinimg.com/736x/22/26/0a/22260acab33ad32c1073fb10f751a4e3.jpg",
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800",
        "https://i.pinimg.com/736x/31/a0/89/31a08950a23cbbd84ca459956cb906fb.jpg",
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
        "https://i.pinimg.com/736x/00/3b/92/003b9297eb09884d3a1bef75c33b602c.jpg",
        "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800",
      ],
    },
    {
      id: 103,
      name: "Cheese Burger",
      category: "VEG",
      price: 150,
      rating: 4.2,
      type: "VEG",
      description:
        "Juicy double patty burger with melting cheddar and secret house sauce.",
      images: [
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
        "https://i.pinimg.com/736x/43/11/dd/4311ddfa45ec7ab600367eba32bc4795.jpg",
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
        "https://i.pinimg.com/736x/df/db/e4/dfdbe4f347971c75b7dd3fe36c0ba40e.jpg",
      ],
    },
    {
      id: 105,
      name: "Pizza",
      category: "FAST FOOD",
      price: 230,
      rating: 4.6,
      type: "FAST FOOD",
      description:
        "Fresh cottage cheese cubes marinated in special spices and grilled to perfection.",
      images: [
        "https://i.pinimg.com/1200x/15/f1/d9/15f1d9c15a0e9f18ab4156e6918bd31b.jpg",
        "https://i.pinimg.com/736x/df/11/13/df11137f7ea78702571c15bccc691eb6.jpg",
        "https://i.pinimg.com/1200x/80/e5/9d/80e59ddd335067ac9aad370dc04917b9.jpg",
      ],
    },
    {
      id: 106,
      name: "Neapolitan Pizza",
      category: "FAST FOOD",
      price: 140,
      rating: 4.2,
      type: "FAST FOOD",
      description:
        "Juicy double patty burger with melting cheddar and secret house sauce.",
      images: [
        "https://i.pinimg.com/736x/77/9d/f4/779df467abbf72f50024cd423d585b55.jpg",
        "https://i.pinimg.com/736x/8a/eb/ef/8aebef89fdfd973e6d7c7b2c3b3f5a90.jpg",
        "https://i.pinimg.com/736x/9b/a3/7a/9ba37af9633041a73f49d5de3f5daa27.jpg",
      ],
    },
    {
      id: 107,
      name: "Wine",
      category: "DRINKS",
      price: 620,
      rating: 5,
      type: "DRINKS",
      description: "Premium chilled drinks for your perfect evening.",
      images: [
        "https://i.pinimg.com/736x/a1/0e/a2/a10ea2a59a7c668f1c4b2520a8ab7f9f.jpg",
        "https://i.pinimg.com/736x/d8/4b/50/d84b502be2bfa3eaf8b4ce4f5a4809b4.jpg",
        "https://i.pinimg.com/736x/4c/c4/5a/4cc45a6552e87b0a1c49ffc496937137.jpg",
      ],
    },
    {
      id: 108,
      name: "Biryani",
      category: "NON-VEG",
      price: 200,
      rating: 4.5,
      type: "VEG",
      description:
        "Aromatic basmati rice cooked with authentic spices and grilled to perfection.",
      images: [
        "https://i.pinimg.com/1200x/83/bb/85/83bb85eb92f512451e6891502a820db3.jpg",
        "https://i.pinimg.com/1200x/9b/75/ac/9b75ace0207a1a882a440b6059dd9c13.jpg",
        "https://i.pinimg.com/1200x/55/7e/2b/557e2bc0a6b57a247264d1968f6d0d2a.jpg",
      ],
    },
  ];

  // Auto-scroll logic for images
  useEffect(() => {
    let timer;
    if (selectedItem) {
      timer = setInterval(
        () =>
          setCurrentImgIndex((prev) => (prev + 1) % selectedItem.images.length),
        3000,
      );
    }
    return () => clearInterval(timer);
  }, [selectedItem]);

  const handleAddToCart = (item) => {
    onAddToCart({ ...item, img: item.images[0] });
  };

  const handleOrderNow = (item) => {
    if (typeof buyNow === "function") {
      buyNow({
        ...item,
        img: item.images[0],
        price: item.price * quantity,
        name: quantity > 1 ? `${item.name} (x${quantity})` : item.name,
      });
      setSelectedItem(null);
      navigate("/checkout");
    }
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
    <div className="min-h-screen bg-[#F8F9FA] pb-20 md:pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6 md:pt-10 text-gray-900">
        {/* SMALL HEADER */}
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">
            Our Delicious <span className="text-orange-600 italic">Menus</span>
          </h1>
          <p className="text-gray-500 font-medium mt-1">
            Explore flavors crafted just for you.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-3 md:p-4 rounded-[1.5rem] md:rounded-[2rem] shadow-sm mb-8 md:mb-12 border border-gray-50">
          <div className="relative w-full md:flex-1 group">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Search dishes..."
              className="w-full pl-12 pr-4 py-3 md:py-3.5 bg-gray-50 rounded-2xl border-2 border-transparent outline-none focus:border-orange-500 focus:bg-white transition-all font-bold"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {["ALL", "VEG", "NON-VEG", "DRINKS", "FAST FOOD"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 md:px-6 py-2.5 md:py-3 rounded-xl text-xs md:text-sm font-black whitespace-nowrap transition-all duration-300 ${activeCategory === cat ? "bg-orange-600 text-white shadow-lg shadow-orange-200" : "bg-orange-50 text-orange-600 hover:bg-orange-100"}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedItem(item);
                setCurrentImgIndex(0);
                setQuantity(1);
              }}
              className="group bg-white rounded-[2rem] p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-xl transition-all duration-300 active:scale-95">
              <div className="relative h-40 md:h-48 w-full rounded-[1.5rem] overflow-hidden mb-4">
                <img
                  src={item.images[0]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt=""
                />
                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <Star className="text-orange-500 fill-orange-500" size={12} />
                  <span className="text-xs font-black">{item.rating}</span>
                </div>
              </div>
              <div className="px-1 md:px-2">
                <h3 className="text-lg md:text-xl font-black mb-1 group-hover:text-orange-600 transition-colors uppercase tracking-tight">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-[11px] md:text-xs line-clamp-2 mb-4 italic leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl md:text-2xl font-black text-gray-900 font-sans">
                    ₹{item.price}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(item);
                    }}
                    className="p-2.5 md:p-3 bg-orange-600 text-white rounded-2xl hover:bg-black transition-all shadow-md active:scale-90">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      {selectedItem && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}></div>
          <div className="relative bg-white w-full max-w-4xl h-auto md:h-[550px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in duration-300 border border-white/20">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-[220] p-2 bg-white text-gray-900 rounded-full shadow-lg hover:bg-orange-600 hover:text-white transition-all">
              <X size={20} />
            </button>

            <div className="relative h-56 sm:h-64 md:h-full md:w-1/2 bg-gray-100 group shrink-0 overflow-hidden">
              <img
                src={selectedItem.images[currentImgIndex]}
                className="w-full h-full object-cover transition-opacity duration-500"
                alt=""
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImgIndex((p) =>
                    p === 0 ? selectedItem.images.length - 1 : p - 1,
                  );
                }}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-1.5 md:p-2 bg-white/50 rounded-full text-gray-800 hover:bg-white transition-all">
                <ChevronLeft />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImgIndex(
                    (p) => (p + 1) % selectedItem.images.length,
                  );
                }}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-1.5 md:p-2 bg-white/50 rounded-full text-gray-800 hover:bg-white transition-all">
                <ChevronRight />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
                {selectedItem.images.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 md:h-1.5 rounded-full transition-all ${i === currentImgIndex ? "w-4 md:w-6 bg-orange-500" : "w-1 md:w-1.5 bg-white/80"}`}
                  />
                ))}
              </div>
            </div>

            <div className="p-6 md:p-12 md:w-1/2 flex flex-col justify-between overflow-y-auto md:overflow-hidden bg-white">
              <div>
                <div className="flex items-center gap-2 text-orange-600 font-black text-[10px] md:text-xs uppercase mb-2 md:mb-3">
                  <Flame size={12} /> {selectedItem.category}
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-2 md:mb-4 tracking-tighter uppercase">
                  {selectedItem.name}
                </h2>
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 text-xs md:text-sm">
                  <span className="flex items-center gap-1 bg-orange-50 text-orange-600 px-2.5 py-1 rounded-lg font-black">
                    <Star fill="currentColor" size={14} /> {selectedItem.rating}
                  </span>
                  <span className="text-gray-400 font-bold flex items-center gap-1 font-sans">
                    <Clock size={14} /> 25 Min Delivery
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed italic text-sm md:text-lg mb-6 leading-relaxed">
                  "{selectedItem.description}"
                </p>

                {/* QUANTITY */}
                <div className="flex flex-col gap-2 mb-4">
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest font-sans">
                    Select Quantity
                  </p>
                  <div className="flex items-center gap-6 bg-gray-50 w-fit p-1.5 rounded-2xl border border-gray-100 text-gray-800">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl shadow-sm hover:bg-orange-500 hover:text-white transition-all active:scale-90 flex items-center justify-center border border-gray-100">
                      <Minus size={16} />
                    </button>
                    <span className="text-lg md:text-xl font-black font-sans">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl shadow-sm hover:bg-orange-500 hover:text-white transition-all active:scale-90 flex items-center justify-center border border-gray-100">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4 md:pt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest font-sans">
                    Total Price
                  </p>
                  <p className="text-2xl md:text-4xl font-black text-gray-900 leading-none font-sans">
                    ₹{selectedItem.price * quantity}
                  </p>
                </div>
                <button
                  onClick={() => handleOrderNow(selectedItem)}
                  className="bg-orange-600 text-white px-6 md:px-10 py-3.5 md:py-5 rounded-2xl font-black text-xs md:text-lg hover:bg-black transition-all shadow-xl shadow-orange-100 flex items-center gap-2 active:scale-95 uppercase tracking-tighter">
                  <ShoppingCart size={18} /> ORDER NOW
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
