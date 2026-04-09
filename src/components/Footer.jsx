import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Aapka WhatsApp Number yahan change karein (format: country code + number)
  const whatsappNumber = "7268875247";

  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-12 px-6 md:px-10 mt-20 font-sans border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Logo & Socials */}
        <div className="space-y-6">
          <Link to="/" className="text-3xl font-black tracking-tighter">
            <span className="text-orange-500">FOODIE</span>
            <span className="text-white">HUB</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed font-medium">
            Delicious meals from the best restaurants delivered fresh to your
            doorstep in minutes.
          </p>

          {/* Social Icons Section */}
          <div className="flex gap-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/itz_satyam_02x/"
              className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-orange-600 transition-all group">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* WhatsApp (Direct Link) */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-green-500 transition-all group">
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.134 1.417 4.735 1.418 5.4 0 9.793-4.393 9.795-9.792 0-2.618-1.02-5.079-2.873-6.932s-4.314-2.87-6.932-2.87c-5.4 0-9.791 4.394-9.794 9.793-.001 1.688.455 3.336 1.32 4.757l-.895 3.27 3.346-.877zm11.723-8.01c-.327-.164-1.933-.953-2.232-1.062-.3-.11-.518-.164-.736.164-.218.327-.844 1.062-1.035 1.281-.19.219-.381.246-.708.082-.327-.164-1.38-.508-2.63-1.623-.972-.867-1.628-1.938-1.819-2.265-.19-.327-.02-.504.145-.668.148-.148.327-.381.491-.572.164-.19.218-.327.327-.546.109-.219.055-.409-.027-.572-.082-.164-.736-1.775-1.008-2.43-.265-.638-.535-.551-.736-.561-.19-.011-.409-.013-.627-.013-.218 0-.572.082-.872.409-.3.327-1.144 1.118-1.144 2.725 0 1.607 1.171 3.161 1.335 3.379.164.218 2.303 3.516 5.577 4.926.779.335 1.387.535 1.859.684.782.249 1.494.214 2.056.13.627-.094 1.933-.79 2.205-1.554.271-.764.271-1.419.19-1.554-.082-.136-.3-.218-.627-.382z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-widest border-b-2 border-orange-500 w-10 pb-1">
            Menu
          </h4>
          <ul className="space-y-4 text-gray-400 font-bold">
            <li>
              <Link to="/" className="hover:text-orange-500 transition">
                Home Page
              </Link>
            </li>
            <li>
              <Link to="/menus" className="hover:text-orange-500 transition">
                Our Menus
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-500 transition">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-widest border-b-2 border-orange-500 w-10 pb-1">
            Contact
          </h4>
          <ul className="space-y-5 text-gray-400 font-bold">
            {/* Location */}
            <li className="flex items-center gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ea580c"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Khamaria,Bhadohi</span>
            </li>
            {/* Phone */}
            <li className="flex items-center gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ea580c"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>726887247</span>
            </li>
            {/* Email (New) */}
            <li className="flex items-center gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ea580c"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>satyam143142@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-widest border-b-2 border-orange-500 w-10 pb-1">
            Stay
          </h4>
          <p className="text-gray-400 mb-4 text-sm font-bold italic">
            Join for weekly offers!
          </p>
          <div className="flex bg-gray-800 rounded-xl overflow-hidden p-1 border border-gray-700 focus-within:border-orange-500 transition-all">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent pl-4 py-2 w-full outline-none text-sm text-white"
            />
            <button className="bg-orange-600 px-4 py-2 rounded-lg font-black text-sm hover:bg-orange-700 transition-all">
              Go
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs font-bold tracking-[0.2em]">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-orange-500">FOODIE HUB</span>. ALL RIGHTS
          RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
