"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";

import { bdsmProducts } from "../../data/bdsm";
import { bondageProducts } from "../../data/bondage";
import { sexToysProducts } from "../../data/sex-toys";
import { electroProducts } from "../../data/electro";

export default function ProductDetailPage() {
  const { id } = useParams();
  const productId = id ? parseInt(id) : null;

  const allProducts = [
    ...bdsmProducts,
    ...bondageProducts,
    ...sexToysProducts,
    ...electroProducts,
  ];

  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <main className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
        <p className="text-gray-400 text-lg">Product not found.</p>
        <Link href="/" className="text-red-500 mt-4 underline">
          Go Back Home
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image
          src={product.img}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-lg"
        />
        <div className="flex flex-col justify-start">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-red-400 font-bold text-2xl mb-6">${product.price}</p>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            condimentum tortor sem, in semper nisl bibendum eu. Duis nec
            vulputate justo. 
          </p>
          <button className="bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
            Add to Cart
          </button>
          <Link href={`/collection/${product.slug}`} className="mt-6 text-gray-400 underline">
            Back to {product.slug.replace(/-/g, " ")} Collection
          </Link>
        </div>
      </div>
    </main>
  );
}
