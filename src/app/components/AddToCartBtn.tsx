"use client";

import { useCart } from "../context/CardContext";

type Product = {
  id: number;
  name: string;
  price: string;
  img: string;
};

export default function AddToCartBtn({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() =>
        addToCart({
          id: String(product.id), // ✅ CartItem ka id string hai
          name: product.name,
          price: Number(product.price), // ✅ number me convert
          image: product.img, // ✅ CartItem ka property name match
          
        })
      }
      className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition"
    >
      Add to Cart
    </button>
  );
}
