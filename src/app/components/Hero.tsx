"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/bg.jpg" // 👈 apni high-quality image ka path lagayein
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center min-h-screen">
        <div className="max-w-2xl bg-black/50 p-6 rounded-lg md:bg-transparent md:p-0">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
          >
            Explore Your <span className="text-red-500">Desires</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md"
          >
            Discover premium bondage gear, seductive lingerie, and toys that
            push boundaries.
          </motion.p>

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
              href="/collections"
              className="bg-transparent border border-white hover:border-red-500 hover:text-red-500 px-6 py-3 rounded-full font-semibold transition-colors"
            >
              View Collections
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
