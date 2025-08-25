"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Mail, Phone, Youtube } from "lucide-react";

// ✅ Dummy Data
const categories = [
  { id: 1, name: "BDSM Wear", img: "/images/bdsm.jpg" },
  { id: 2, name: "Sex Toys", img: "/images/sextoys.jpg" },
  { id: 3, name: "Electro", img: "/images/electrotoy.jpg" },
  { id: 4, name: "Bondage Items", img: "/images/bondage.jpg" },
];

const newArrivals = [
  { id: 1, name: "Luxury Leather Handcuffs", price: 99.99, img: "/images/handcuffs.jpg" },
  { id: 2, name: "Silicone Whip", price: 79.99, img: "/images/whip.jpg" },
  { id: 3, name: "Bondage Rope Set", price: 59.99, img: "/images/rope.jpg" },
  { id: 4, name: "Electro Stimulation Kit", price: 149.99, img: "/images/vibrators.jpg" },
];

const bestSellers = [
  { id: 5, name: "Premium Blindfold", price: 29.99, img: "/images/blindfold.jpg" },
  { id: 6, name: "Stockings", price: 89.99, img: "/images/stockings.jpg" },
  { id: 7, name: "Vibrating Wand", price: 129.99, img: "/images/wand.jpg" },
  { id: 8, name: "Collar & Leash Set", price: 49.99, img: "/images/collar.jpg" },
];

const testimonials = [
  { id: 1, name: "Ava R.", text: "Absolutely love the quality. This brand redefines premium kink fashion." },
  { id: 2, name: "James L.", text: "Fast delivery & elegant designs. My go-to for everything luxurious." },
  { id: 3, name: "Sophia M.", text: "Incredible service and stunning products. Highly recommend!" },
];

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
     
      {/* ✅ Hero Section */}
      <section className="relative h-[70vh] md:h-[90vh] flex items-center justify-center">
        <Image src="/images/bg.jpg" alt="Hero Banner" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-7xl font-bold mb-6 tracking-wide"
          >
            Unleash Your Desires
          </motion.h1>
          <Link
            href="/shop"
            className="bg-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* ✅ Sale Banner (Clickable) */}
      <Link href="/shop" className="block relative w-full h-[250px] md:h-[320px] mt-12 px-4">
        <Image src="/images/sale.jpg" alt="Sale Banner" fill className="object-cover object-center rounded-xl" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl">
          <h2 className="text-3xl md:text-5xl font-bold">🔥 50% Off – Limited Time 🔥</h2>
        </div>
      </Link>

      {/* ✅ Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.id}`}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={cat.img}
                alt={cat.name}
                width={400}
                height={400}
                className="object-cover w-full h-56 group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-lg font-semibold">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ✅ New Arrivals */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-b from-black via-zinc-900 to-black rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-10 text-center">New Arrivals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {newArrivals.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className="bg-zinc-900 p-4 rounded-lg shadow-lg hover:shadow-red-600/40 transition"
            >
              <div className="relative w-full h-40 mb-4">
                <Image src={p.img} alt={p.name} fill className="object-cover rounded-md" />
              </div>
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-red-400 font-bold">${p.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ✅ Best Sellers */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Best Sellers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {bestSellers.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className="bg-zinc-900 p-4 rounded-lg shadow-lg hover:shadow-red-600/40 transition"
            >
              <div className="relative w-full h-40 mb-4">
                <Image src={p.img} alt={p.name} fill className="object-cover rounded-md" />
              </div>
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-red-400 font-bold">${p.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ✅ Testimonials */}
      <section className="bg-zinc-900 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-black p-6 rounded-xl shadow-lg">
              <p className="italic text-zinc-300 mb-4">“{t.text}”</p>
              <h4 className="font-semibold text-red-400">— {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-gradient-to-b from-black via-zinc-950 to-black border-t border-zinc-800 pt-16 px-6">
        <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-zinc-400">
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-4">Noir Desire</h3>
            <p className="mb-6">Luxury & elegance in kink fashion. Designed for bold souls.</p>
            <div className="flex space-x-4">
              <Link href="#"><Instagram className="w-6 h-6 hover:text-red-500 transition" /></Link>
              <Link href="#"><Twitter className="w-6 h-6 hover:text-red-500 transition" /></Link>
              <Link href="#"><Facebook className="w-6 h-6 hover:text-red-500 transition" /></Link>
              <Link href="#"><Youtube className="w-6 h-6 hover:text-red-500 transition" /></Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/shop" className="hover:text-white transition">Shop</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition">Policies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Customer Support</h4>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@noirdesire.com</p>
            <p className="flex items-center gap-2 mt-2"><Phone className="w-4 h-4" /> +1 (800) 123-456</p>
            <p className="mt-4">Mon - Fri: 9am - 6pm</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Stay Updated</h4>
            <p className="mb-3">Sign up for exclusive offers & news.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your Email" className="px-3 py-2 rounded-full text-black flex-1" />
              <button className="bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition">Join</button>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-12 py-6 text-center text-sm text-zinc-500">
          <p>© 2025 Noir Desire. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/terms" className="hover:text-white">Terms</Link> ·{" "}
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
