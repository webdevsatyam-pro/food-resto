import React, { useState } from "react";

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFB] font-sans text-gray-900 pb-20">
      {/* 1. Header Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-600 pt-12 pb-24 md:pt-14 md:pb-28 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="bg-white/10 backdrop-blur-md text-orange-400 border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
            Contact Us
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-3 text-white">
            Have a Question?{" "}
            <span className="text-orange-500 italic">Let's Talk.</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto font-medium opacity-90">
            Visit our office or drop a message. We are here to help you.
          </p>
        </div>
      </section>

      {/* 2. Main Balanced Content Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Side Contact Details (Height Balanced) - 4 Columns */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <ContactCard
              icon={<LocationIcon />}
              title="Our Location"
              detail="Inflection ORG PVT LTD, Mirzapur, UP"
            />
            <ContactCard
              icon={<PhoneIcon />}
              title="Call Us"
              detail="+91 98765 43210"
              link="tel:+919876543210"
            />
            <ContactCard
              icon={<MailIcon />}
              title="Email Us"
              detail="help@inflection.org"
              link="mailto:help@inflection.org"
            />
          </div>

          {/* Contact Form Section - 8 Columns */}
          <div className="lg:col-span-8">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-orange-900/5 border border-gray-50 h-full">
              <h3 className="text-3xl font-black mb-8 text-gray-900">
                Send us a <span className="text-orange-600">Message</span>
              </h3>

              {isSubmitted ? (
                <div className="bg-green-50 text-green-600 p-6 rounded-2xl font-bold flex items-center gap-3 animate-in zoom-in">
                  <CheckIcon /> Message sent successfully! We'll get back to you
                  soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium border-gray-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium border-gray-100"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Subject
                    </label>
                    <div className="relative">
                      <select
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium appearance-none cursor-pointer border-gray-100">
                        <option value="">Select a reason</option>
                        <option value="delivery">Delivery Issue</option>
                        <option value="catering">Bulk / Catering Query</option>
                        <option value="feedback">General Feedback</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Type your message here..."
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium resize-none border-gray-100"></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto bg-orange-600 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-black transition-all shadow-xl shadow-orange-100 active:scale-95">
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Map Section (Actual Google Map Integrated) */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="h-[450px] w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.9611525961063!2d82.5138768753391!3d25.238233377684473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fe9de1bae336b%3A0xf903b167fbf71bf0!2sInflection%20ORG%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1775738824218!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Inflection ORG Location"
            className="rounded-[2.8rem]"></iframe>
        </div>
      </section>
    </div>
  );
};

// --- Sub-component for Info Cards ---
const ContactCard = ({ icon, title, detail, link }) => (
  <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex-1 flex flex-col justify-center">
    <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-3">
      {icon}
    </div>
    <h4 className="text-lg font-black text-gray-900 mb-1">{title}</h4>
    {link ? (
      <a
        href={link}
        className="text-gray-500 text-sm font-medium hover:text-orange-600 transition-colors">
        {detail}
      </a>
    ) : (
      <p className="text-gray-500 text-sm font-medium">{detail}</p>
    )}
  </div>
);

// --- Icons ---
const LocationIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);
const PhoneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);
const MailIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);
const CheckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default ContactUs;
