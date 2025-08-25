"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

import { bdsmProducts } from "../../data/bdsm";
import { bondageProducts } from "../../data/bondage";
import { sexToysProducts } from "../../data/sex-toys";
import { electroProducts } from "../../data/electro";

export default function CollectionPage() {
  const { slug } = useParams();
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);

  const slugStr = slug ? String(slug) : "";

  const allProducts = [
    ...bdsmProducts,
    ...bondageProducts,
    ...sexToysProducts,
    ...electroProducts,
  ];

  const filteredProducts = allProducts
    .filter((p) => p.slug === slugStr)
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
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl font-bold capitalize">{slugStr.replace(/-/g, " ")} Collection</h1>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-gray-900 border border-gray-700 px-4 py-2 rounded mt-4 md:mt-0"
          >
            <option value="latest">Latest</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
          </select>
        </div>

        {paginated.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {paginated.map((product) => (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <Image
                  src={product.img}
                  alt={product.name}
                  width={500}
                  height={192}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ height: "192px" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-red-400 font-bold">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center mt-20 text-lg">No products found in this collection.</p>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  page === i + 1 ? "bg-red-600 text-white" : "bg-gray-800 hover:bg-gray-700"
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
