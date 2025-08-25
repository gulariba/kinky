"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-300">
            Have questions or want to collaborate with us?  
            We’d love to hear from you!
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
          <div className="flex gap-6 mt-6">
            <a href="#" className="hover:text-red-500 transition">
              <Instagram size={28} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Facebook size={28} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Twitter size={28} />
            </a>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-900 p-8 rounded-2xl shadow-2xl space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-lg font-semibold transition shadow-lg"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </main>
  );
}
