// app/about/page.tsx
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Noir Desire",
  description:
    "Discover Noir Desire's story — a brand built on elegance, boldness, and premium craftsmanship. Learn about our journey and passion for quality.",
};

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 md:px-12 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-red-500 text-center md:text-left">
          About Us
        </h1>
        <p className="text-lg md:text-xl mb-12 leading-relaxed text-gray-300 text-center md:text-left">
          At <span className="text-red-400 font-semibold">NOIR DESIRE</span>, we craft
          unforgettable experiences through our curated selection of premium
          products. Our mission is to blend elegance, quality, and passion in
          every piece we offer.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-red-400">Our Story</h2>
            <p className="mb-4 text-gray-300">
              Founded with a vision to bring sophistication and boldness to your
              lifestyle, we have grown into a trusted name for high-quality,
              exclusive collections. Our dedication to craftsmanship and detail
              is unmatched.
            </p>
            <p className="mb-6 text-gray-300">
              Every collection is carefully designed, ensuring it speaks to the
              unique desires of our customers. We are more than a brand — we are
              a lifestyle.
            </p>
            <div className="bg-red-600/10 border border-red-600 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-red-500">Our Vision</h3>
              <p className="text-gray-300 text-sm">
                To redefine luxury kink fashion with elegance, quality, and
                discreet experiences — inspiring confidence and passion in every customer.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/bg.jpg"
              alt="Noir Desire premium products display"
              width={800}
              height={800}
              priority
              className="rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>

        <section className="mt-20 text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-8 text-red-400">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/70 p-6 rounded-xl shadow-lg hover:shadow-red-600/40 transition">
              <h3 className="font-semibold text-lg mb-2">Elegance</h3>
              <p className="text-gray-300 text-sm">
                Every product exudes sophistication and refined taste.
              </p>
            </div>
            <div className="bg-zinc-900/70 p-6 rounded-xl shadow-lg hover:shadow-red-600/40 transition">
              <h3 className="font-semibold text-lg mb-2">Quality</h3>
              <p className="text-gray-300 text-sm">
                Premium materials and craftsmanship in every piece.
              </p>
            </div>
            <div className="bg-zinc-900/70 p-6 rounded-xl shadow-lg hover:shadow-red-600/40 transition">
              <h3 className="font-semibold text-lg mb-2">Discretion</h3>
              <p className="text-gray-300 text-sm">
                Ensuring privacy with every purchase and delivery.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
