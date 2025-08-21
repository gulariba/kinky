"use client";

import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  // ✅ Wishlist toggle
  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  // ✅ Add to cart
  const addToCart = (id: number) => {
    if (!cart.includes(id)) {
      setCart((prev) => [...prev, id]);
      alert("Added to Cart!");
    }
  };

  return (
    <div className="bg-zinc-900 border border-red-900 p-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition relative group">
      
      {/* Product Image */}
      <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition"
        />

        {/* Hover Buttons */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition">
          {/* Wishlist */}
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
              className={wishlist.includes(product.id) ? "fill-current" : "stroke-current"}
            />
          </button>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(product.id)}
            className="p-3 rounded-full bg-white text-black hover:bg-red-500 hover:text-white transition"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-red-400 font-bold">${product.price}</p>
    </div>
  );
}
