import React, { useState } from "react"; // useState add kiya modal ke liye
import { Link } from "react-router-dom";

const About = () => {
  const [selectedChef, setSelectedChef] = useState(null); // Popup state

  // Chef Data
  const chefs = [
    {
      id: 1,
      name: "Chef Vikram Rathore",
      role: "Executive Chef",
      exp: "15+ Years",
      specialty: "Authentic Indian & Tandoor",
      bio: "Chef Vikram is the soul of our kitchen. He believes that spices are not just ingredients, but stories that bring people together.",
      img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500",
    },
    {
      id: 2,
      name: "Chef Elena Rodriguez",
      role: "Pastry Specialist",
      exp: "10+ Years",
      specialty: "Desserts & Continental",
      bio: "Elena brings a touch of European magic to our desserts. Her signature chocolate lava cake is a must-try for everyone.",
      img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=500",
    },
    {
      id: 3,
      name: "Chef Sameer Ali",
      role: "Head of Chinese",
      exp: "12+ Years",
      specialty: "Pan-Asian Cuisine",
      bio: "Sameer is a master of the wok. His ability to balance flavors in Hakka noodles and Manchurian is unmatched.",
      img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=500",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* 1. Hero Section */}
      <section className="relative py-20 md:py-28 bg-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <span className="bg-orange-200 text-orange-700 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
              Our Journey
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
              We Don't Just Deliver Food, We Deliver{" "}
              <span className="text-orange-600 italic">Happiness.</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
              Founded in 2023, Foodie Hub was born out of a simple passion:
              connecting people with the flavors they love, fast and fresh.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-50"></div>
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800"
              alt="Chef Cooking"
              className="rounded-[3rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatBox number="50k+" label="Orders Delivered" />
          <StatBox number="120+" label="Restaurant Partners" />
          <StatBox number="4.9" label="User Rating" />
          <StatBox number="25" label="Cities Reached" />
        </div>
      </section>

      {/* 3. Our Mission & Vision */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-gray-50">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
              className="rounded-[3rem] shadow-xl w-full h-[500px] object-cover"
              alt="Restaurant Interior"
            />
          </div>
          <div className="space-y-8 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Our <span className="text-orange-600">Mission</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              At <span className="text-orange-600 font-bold">Foodie Hub</span>,
              our mission is to redefine the food delivery experience. We
              believe that everyone deserves high-quality, delicious meals
              without the wait.
            </p>
            <div className="space-y-6">
              <Feature
                icon={FreshIcon}
                title="Fresh Ingredients"
                desc="We only partner with restaurants that prioritize quality and freshness."
              />
              <Feature
                icon={SpeedIcon}
                title="Lightning Fast"
                desc="Our delivery partners are trained to get your food to you in 30 mins or less."
              />
              <Feature
                icon={HeartIcon}
                title="Customer First"
                desc="Your satisfaction is our priority. Our support is available 24/7."
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. Meet Our Chefs Section (NEW) --- */}
      <section className="py-24 px-6 bg-[#FDFDFD]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
              Meet Our{" "}
              <span className="text-orange-600 italic">Culinary Masters</span>
            </h2>
            <p className="text-gray-500 font-medium">
              The magic makers behind every delicious bite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {chefs.map((chef) => (
              <div
                key={chef.id}
                onClick={() => setSelectedChef(chef)}
                className="group bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 text-center">
                <div className="h-64 w-full overflow-hidden rounded-[2rem] mb-6 shadow-inner">
                  <img
                    src={chef.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={chef.name}
                  />
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-1">
                  {chef.name}
                </h4>
                <p className="text-orange-600 font-bold text-sm uppercase tracking-widest">
                  {chef.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-3xl rounded-full"></div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10 leading-tight">
            Ready to taste the <br />{" "}
            <span className="text-orange-500 italic">Extraordinary?</span>
          </h2>
          <Link
            to="/menus"
            className="inline-flex items-center gap-3 bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-orange-600 transition-all shadow-xl active:scale-95 relative z-10">
            EXPLORE OUR MENU
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </section>

      {/* --- CHEF POPUP MODAL (NEW) --- */}
      {selectedChef && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedChef(null)}></div>

          <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in duration-300">
            <button
              onClick={() => setSelectedChef(null)}
              className="absolute top-5 right-5 z-10 p-2 bg-gray-100 hover:bg-orange-600 hover:text-white rounded-full transition-all">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 md:h-auto">
                <img
                  src={selectedChef.img}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="p-8 md:p-10 md:w-1/2">
                <p className="text-orange-600 font-bold text-xs uppercase tracking-widest mb-2">
                  {selectedChef.role}
                </p>
                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  {selectedChef.name}
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800">Experience:</span>
                    <span className="text-gray-500">{selectedChef.exp}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800">Specialty:</span>
                    <span className="text-orange-600 font-medium">
                      {selectedChef.specialty}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed italic border-l-4 border-orange-500 pl-4">
                    "{selectedChef.bio}"
                  </p>
                </div>

                <button
                  onClick={() => setSelectedChef(null)}
                  className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-all">
                  Close Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Sub Components ---
const StatBox = ({ number, label }) => (
  <div className="space-y-2">
    <p className="text-4xl md:text-5xl font-black text-orange-600 tracking-tighter">
      {number}
    </p>
    <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">
      {label}
    </p>
  </div>
);

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="flex gap-5 group">
    <div className="bg-orange-50 p-4 rounded-2xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all h-fit">
      <Icon />
    </div>
    <div>
      <h4 className="text-xl font-black text-gray-900 mb-1">{title}</h4>
      <p className="text-gray-500 font-medium">{desc}</p>
    </div>
  </div>
);

// --- SVG Icons ---
const FreshIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a7 7 0 0 1-10 10Z"></path>
    <path d="M7 21a7 7 0 0 1-4-10c5 2 7 2 10 7z"></path>
  </svg>
);
const SpeedIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
  </svg>
);
const HeartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

export default About;
