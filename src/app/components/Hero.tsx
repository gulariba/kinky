"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/bg.jpg" // 👈 apni high-quality background image ka path
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
          >
            Unlock Your <span className="text-red-500">Premium Desires</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md"
          >
            Explore seductive lingerie, luxury bondage gear, and toys crafted to
            perfection. Experience passion like never before — discreetly
            delivered to your doorstep.
          </motion.p>

          {/* Badges / Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <span className="bg-red-600/80 text-white text-sm font-medium px-4 py-2 rounded-full">
              Luxury Collection
            </span>
            <span className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
              100% Discreet
            </span>
            <span className="bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
              Premium Quality
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/shop"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border border-white hover:border-red-500 hover:text-red-500 px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Features / Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          <div className="flex flex-col items-center">
            <Truck className="h-10 w-10 text-red-500 mb-2" />
            <h3 className="font-semibold">Free Shipping</h3>
            <p className="text-gray-400 text-sm">On all orders above $99</p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="h-10 w-10 text-red-500 mb-2" />
            <h3 className="font-semibold">100% Privacy</h3>
            <p className="text-gray-400 text-sm">Discreet packaging guaranteed</p>
          </div>
          <div className="flex flex-col items-center">
            <Star className="h-10 w-10 text-red-500 mb-2" />
            <h3 className="font-semibold">Premium Quality</h3>
            <p className="text-gray-400 text-sm">Luxury you can trust</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
