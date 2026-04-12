import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Star,
  Plus,
  Minus,
  Flame,
  Play,
  ArrowRight,
  Truck,
  ShieldCheck,
  Clock,
  X,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  CheckCircle2,
} from "lucide-react";

const Home = ({ searchTerm = "", addToCart, buyNow }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // 1. AAPKA DATA
  const foodItems = [
    {
      id: 1,
      name: "Special Biryani",
      price: 250,
      rating: 4.8,
      time: "30 min",
      images: [
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800",
        "https://i.pinimg.com/1200x/55/7e/2b/557e2bc0a6b57a247264d1968f6d0d2a.jpg",
        "https://i.pinimg.com/736x/30/2c/00/302c00a4daa39edc339d94fb20b2d9a8.jpg",
      ],
      description:
        "Aromatic basmati rice cooked with premium spices and tender meat pieces.",
    },
    {
      id: 2,
      name: "Burger Combo",
      price: 180,
      rating: 4.5,
      time: "15 min",
      images: [
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800",
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
        "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
      ],
      description:
        "Double patty cheesy burger served with crispy fries and a chilled drink.",
    },
    {
      id: 3,
      name: "Cheese Pizza",
      price: 350,
      rating: 4.2,
      time: "25 min",
      images: [
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800",
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
        "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800",
      ],
      description:
        "Freshly baked thin-crust dough topped with premium mozzarella cheese.",
    },
    {
      id: 4,
      name: "Paneer Tikka",
      price: 210,
      rating: 4.6,
      time: "20 min",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9tC5sOxSUzsCHVLWLjMY7HnphyZe_HiDhw&s",
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800",
        "https://images.unsplash.com/photo-1666024276184-48f059b56326?w=800",
      ],
      description:
        "Soft cubes of paneer marinated in spicy yogurt and grilled to perfection.",
    },
  ];

  // --- AUTO-OPEN LOGIC ---
  useEffect(() => {
    if (location.state && location.state.openDishId) {
      const dishId = location.state.openDishId;
      const dishToOpen = foodItems.find((f) => f.id === dishId);
      if (dishToOpen) {
        setSelectedItem(dishToOpen);
        setQuantity(1);
        setCurrentImgIndex(0);
        setTimeout(() => {
          const element = document.getElementById(`home-dish-${dishId}`);
          if (element)
            element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    }
  }, [location.state]);

  // Scroll Lock Logic
  useEffect(() => {
    document.body.style.overflow = selectedItem ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedItem]);

  // Auto-Slider logic
  useEffect(() => {
    let timer;
    if (selectedItem) {
      timer = setInterval(
        () => setCurrentImgIndex((p) => (p + 1) % selectedItem.images.length),
        3000,
      );
    }
    return () => clearInterval(timer);
  }, [selectedItem]);

  const filteredFoods = foodItems.filter((f) =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleAddDirect = (item) => {
    if (typeof addToCart === "function") {
      addToCart({ ...item, img: item.images[0] });
    }
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

  return (
    <div className="w-full bg-[#FBFBFB] pt-6 pb-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 text-gray-900">
        {/* 1. Banner */}
        <div className="bg-orange-500 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 text-white mb-10 flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-black mb-2 italic">
              Hungry?
            </h1>
            <p className="text-base md:text-lg opacity-90 font-medium">
              Order now and get 20% cashback!
            </p>
          </div>
          <div className="hidden md:block bg-white/20 p-5 rounded-full animate-bounce">
            <Flame size={60} />
          </div>
        </div>

        {/* 2. Popular Dishes */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-3xl font-black tracking-tight uppercase">
            Popular Dishes
          </h2>
          <Link
            to="/menus"
            className="flex items-center gap-1 text-orange-600 font-bold hover:underline text-xs md:text-sm uppercase tracking-tighter">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {filteredFoods.map((food) => (
            <div
              id={`home-dish-${food.id}`}
              key={food.id}
              onClick={() => {
                setSelectedItem(food);
                setCurrentImgIndex(0);
                setQuantity(1);
              }}
              className="group bg-white rounded-[2rem] p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-xl transition-all active:scale-95">
              <div className="overflow-hidden rounded-[1.5rem] mb-4 h-40 md:h-44">
                <img
                  src={food.images[0]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt=""
                />
              </div>
              <h3 className="font-bold text-base md:text-lg">{food.name}</h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl md:text-2xl font-black font-sans">
                  ₹{food.price}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddDirect(food);
                  }}
                  className="bg-orange-500 text-white p-2 md:p-2.5 rounded-xl hover:bg-black transition-all shadow-md active:scale-90">
                  <Plus size={22} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Video Banner */}
        <div className="mb-16 text-center">
          <div className="relative h-[250px] md:h-[400px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover">
              <source src="./Zomato.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6 text-white text-2xl md:text-5xl font-black italic tracking-tighter uppercase leading-tight">
              Experience <br className="md:hidden" />{" "}
              <span className="text-orange-500 md:ml-2">Pure Flavor</span>
            </div>
          </div>
        </div>

        {/* 4. Why Choose Us (Mobile Responsive Color Fix) */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          <FeatureCard
            icon={<Truck />}
            title="Fast Delivery"
            desc="30 mins delivery."
          />
          <FeatureCard
            icon={<ShieldCheck />}
            title="Safe & Clean"
            desc="Best Hygiene."
          />
          <FeatureCard
            icon={<Clock />}
            title="24/7 Service"
            desc="Always ready."
          />
        </div>

        {/* 5. Split Section */}
        <div className="pb-24 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative h-[280px] md:h-[450px]">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800"
              className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl"
              alt="Food"
            />
            <div className="absolute -bottom-4 -right-2 md:-right-4 bg-white p-4 md:p-5 rounded-2xl shadow-xl flex items-center gap-2">
              <CheckCircle2 className="text-green-600" />
              <p className="font-bold text-gray-800 text-[10px] md:text-sm">
                Fresh Ingredients Only
              </p>
            </div>
          </div>
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tighter text-gray-900">
              We Don't Just Cook, <br />
              <span className="text-orange-600 italic">
                We Create Memories.
              </span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Delicious meals served with love.
            </p>
            <Link
              to="/menus"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black hover:bg-orange-600 transition-all active:scale-95 shadow-lg">
              Check Our Menus <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Popup Modal (Full Responsive) */}
      {selectedItem && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}></div>
          <div className="relative bg-white w-full max-w-4xl h-auto md:h-[550px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in duration-300">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-[220] p-2 bg-white text-gray-900 rounded-full shadow-lg hover:bg-orange-600 hover:text-white transition-all">
              <X size={20} />
            </button>
            <div className="relative h-56 sm:h-64 md:h-full md:w-1/2 bg-gray-100 shrink-0">
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
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/50 rounded-full text-gray-800">
                <ChevronLeft />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImgIndex(
                    (p) => (p + 1) % selectedItem.images.length,
                  );
                }}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 bg-white/50 rounded-full text-gray-800">
                <ChevronRight />
              </button>
            </div>
            <div className="p-6 md:p-12 md:w-1/2 flex flex-col justify-between overflow-y-auto md:overflow-hidden text-gray-900 bg-white">
              <div>
                <h2 className="text-2xl md:text-4xl font-black tracking-tighter leading-none mb-4">
                  {selectedItem.name}
                </h2>
                <div className="flex items-center gap-4 mb-4 font-sans font-bold text-xs md:text-sm">
                  <span className="flex items-center gap-1 bg-orange-50 text-orange-600 px-2.5 py-1 rounded-lg font-black font-sans">
                    ★ {selectedItem.rating}
                  </span>
                  <span className="text-gray-400 font-bold font-sans">
                    🕒 {selectedItem.time}
                  </span>
                </div>
                <p className="text-gray-500 text-sm md:text-lg mb-6 italic leading-snug">
                  "{selectedItem.description}"
                </p>
                <div className="flex flex-col gap-2 mb-6 font-sans">
                  <p className="text-xs font-black uppercase text-gray-400 tracking-widest">
                    Select Quantity
                  </p>
                  <div className="flex items-center gap-6 bg-gray-50 w-fit p-2 rounded-2xl border border-gray-100">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl shadow-sm hover:bg-orange-500 hover:text-white transition-all active:scale-90 flex items-center justify-center font-sans border border-gray-100">
                      <Minus size={18} />
                    </button>
                    <span className="text-lg md:text-xl font-black font-sans">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl shadow-sm hover:bg-orange-500 hover:text-white transition-all active:scale-90 flex items-center justify-center font-sans border border-gray-100">
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t pt-6">
                <div>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-tighter">
                    Total Price
                  </p>
                  <span className="text-2xl md:text-3xl font-black text-gray-900 font-sans">
                    ₹{selectedItem.price * quantity}
                  </span>
                </div>
                <button
                  onClick={() => handleOrderNow(selectedItem)}
                  className="bg-orange-600 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-2xl font-black hover:bg-black transition-all shadow-lg active:scale-95 uppercase text-xs md:text-sm tracking-widest">
                  <ShoppingCart size={18} /> Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Internal Sub-component for Responsive Features
const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-orange-600 text-white md:bg-orange-50/60 md:text-gray-800 p-8 rounded-[2rem] md:rounded-[2.5rem] text-center border border-orange-100 transition-all md:hover:bg-orange-500 md:hover:text-white group">
    <div className="bg-white text-orange-600 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 md:group-hover:bg-white md:group-hover:text-orange-500 transition-all">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <h4 className="text-lg font-black mb-2">{title}</h4>
    <p className="opacity-95 md:text-gray-500 md:group-hover:text-white text-sm font-bold">
      {desc}
    </p>
  </div>
);

export default Home;
