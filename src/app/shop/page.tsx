"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "../data/product";


export default function ShopPage() {
  const [sort, setSort] = useState("latest");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);

  const filteredProducts = products
    .filter((p) => category === "all" || p.category === category)
    .sort((a, b) =>
      sort === "priceLowHigh"
        ? parseFloat(a.price) - parseFloat(b.price)
        : sort === "priceHighLow"
        ? parseFloat(b.price) - parseFloat(a.price)
        : b.id - a.id
    );

  const itemsPerPage = 8;
  const paginated = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <main className="bg-black text-white px-6 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-4xl font-bold">Shop</h1>

          <div className="flex gap-4">
            {/* Category Filter */}
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setPage(1);
              }}
              className="bg-gray-900 border border-gray-700 px-4 py-2 rounded"
            >
              <option value="all">All Categories</option>
              <option value="BDSM">BDSM</option>
              <option value="Bondage">Bondage</option>
              <option value="Sex Toys">Sex Toys</option>
              <option value="Electro">Electro</option>
            </select>

            {/* Sort Filter */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-gray-900 border border-gray-700 px-4 py-2 rounded"
            >
              <option value="latest">Latest</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {paginated.map((product) => (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={
                      product.img && product.img.trim()
                        ? product.img
                        : "/images/placeholder.png"
                    }
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-red-400 font-bold">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center mt-20 text-lg">
            No products found in this category.
          </p>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  page === i + 1
                    ? "bg-red-600 text-white"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}