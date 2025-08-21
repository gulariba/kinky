"use client";

import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

// 🔹 Apne products import karo
import bdsmProducts from "@/app/data/bdsm";
import sexToyProducts from "@/app/data/sextoy";
import electroToyProducts from "@/app/data/electrotoy";
import bondageProducts from "@/app/data/bondageitem";

interface CategoryPageProps {
  params: { slug: string | string[] };
}

// ✅ Product type define
interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // ✅ Slug ko string me convert karna
  const slug = Array.isArray(params.slug) ? params.slug.join("-") : params.slug;
  const categoryName = slug.replace(/-/g, " ");

  // ✅ Slug ke hisaab se products choose karo
  let products: Product[] = [];
  switch (slug) {
    case "bdsm-wear":
      products = bdsmProducts;
      break;
    case "sex-toys":
      products = sexToyProducts;
      break;
    case "electro-play":
      products = electroToyProducts;
      break;
    case "bondage-items":
      products = bondageProducts;
      break;
    default:
      products = [];
  }

  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const addToCart = (id: number) => {
    if (!cart.includes(id)) {
      setCart((prev) => [...prev, id]);
      alert("Added to Cart!");
    }
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ✅ Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold capitalize">
            {categoryName}
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore our curated collection of {categoryName} products.
          </p>
        </div>

        {/* ✅ Product Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-zinc-900 border border-red-900 p-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition relative group"
              >
                {/* ✅ Image + Hover Buttons */}
                <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition"
                  />

                  {/* ✅ Hover Buttons */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition">
                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`p-3 rounded-full ${
                        wishlist.includes(product.id)
                          ? "bg-red-500 text-white"
                          : "bg-white text-black"
                      }`}
                    >
                      <Heart
                        size={20}
                        className={
                          wishlist.includes(product.id)
                            ? "fill-current"
                            : "stroke-current"
                        }
                      />
                    </button>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => addToCart(product.id)}
                      className="p-3 rounded-full bg-white text-black hover:bg-red-500 hover:text-white transition"
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>

                {/* ✅ Product Info */}
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-red-400 font-bold">${product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">No products found.</p>
        )}
      </div>
    </main>
  );
}
