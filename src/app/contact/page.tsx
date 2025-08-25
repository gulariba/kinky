"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="relative bg-black text-white px-6 py-20 overflow-hidden">
      {/* Background Gradient + Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-black to-black opacity-90"></div>
      <div className="absolute inset-0 bg-[url('/images/noise-texture.png')] opacity-10"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-red-600 via-red-400 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
            Let’s Connect
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Have questions, ideas, or collaboration requests?  
            We’re always ready to talk. Your journey with us starts here.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="text-red-500" size={28} />
              <span className="text-gray-300">123 Premium Street, New York, USA</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-red-500" size={28} />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-red-500" size={28} />
              <span className="text-gray-300">support@yourbrand.com</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-6 mt-8">
            <a href="#" className="hover:text-red-500 transition transform hover:scale-110">
              <Instagram size={28} />
            </a>
            <a href="#" className="hover:text-red-500 transition transform hover:scale-110">
              <Facebook size={28} />
            </a>
            <a href="#" className="hover:text-red-500 transition transform hover:scale-110">
              <Twitter size={28} />
            </a>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-xl bg-gray-900/70 p-8 rounded-2xl shadow-[0_0_25px_rgba(255,0,0,0.2)] border border-gray-800 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-lg font-semibold transition transform hover:scale-[1.02] shadow-lg"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Footer Tagline */}
      <div className="relative max-w-6xl mx-auto text-center mt-12 text-gray-400 text-sm">
        💬 We’re here for you — <span className="text-red-500">24/7 Support</span>
      </div>
    </main>
  );
}

