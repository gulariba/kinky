"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/app/context/CardContext";

import { bdsmProducts } from "../../data/bdsm";
import { bondageProducts } from "@/app/data/bondageitem";
import { sexToysProducts } from "@/app/data/sextoy";
import { electroProducts } from "@/app/data/electrotoy";

type Product = {
  id: number;
  name: string;
  price: string;
  category: string;
  slug: string;
  img: string;
  description?: string;
};

// Merge all products
const allProducts: Product[] = [
  ...bdsmProducts,
  ...bondageProducts,
  ...sexToysProducts,
  ...electroProducts,
];

export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // ✅ Ensure slug and id are strings
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const idStr = Array.isArray(params.id) ? params.id[0] : params.id;
  const productId = idStr ? parseInt(idStr) : null;

  const product = allProducts.find(
    (p) => p.slug === slug && p.id === productId
  );

  if (!product)
    return (
      <main className="bg-black text-white min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-lg">Product not found</p>
      </main>
    );

  const related = allProducts.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    const cartItem = {
      id: String(product.id),
      name: product.name,
      price: Number(product.price),
      image: product.img,
      quantity,
    };
    addToCart(cartItem);
  };

  return (
    <main className="bg-black text-white px-6 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative w-full h-[400px] rounded-lg shadow-lg overflow-hidden">
            <Image
              src={product.img}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-2xl text-red-400 font-bold">${product.price}</p>
            <p className="text-gray-300">
              {product.description || "No description available."}
            </p>
            <p className="text-gray-300">
              Category:{" "}
              <Link
                href={`/categories/${product.slug}`}
                className="text-red-500 hover:underline"
              >
                {product.category}
              </Link>
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((r) => (
              <Link
                href={`/products/${r.slug}/${r.id}`}
                key={r.id}
                className="group bg-gray-900 rounded-lg overflow-hidden shadow hover:shadow-xl transition"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={r.img}
                    alt={r.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{r.name}</h3>
                  <p className="text-red-400 font-bold">${r.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
