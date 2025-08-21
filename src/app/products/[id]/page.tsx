"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/CardContext";

// Add sample images URLs for demo purpose
const products = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: (20 + i * 5).toFixed(2),
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ex sit amet nibh facilisis, non laoreet risus ultricies.",
  img: ``,
}));

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));

  if (!product)
    return <div className="p-8 text-white">Product not found</div>;

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    const cartItem = {
      id: String(product.id),
      name: product.name,
      price: Number(product.price),
      image: product.img,
      quantity: 1,
    };
    addToCart(cartItem);
  };

  return (
    <main className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image container with relative and fixed height */}
          <div className="relative w-full h-[400px] rounded-lg shadow-lg overflow-hidden">
            <Image
              src={product.img}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl text-red-400 font-bold mb-6">
              ${product.price}
            </p>
            <p className="text-gray-300 mb-6">{product.description}</p>
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
                href={`/products/${r.id}`}
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
