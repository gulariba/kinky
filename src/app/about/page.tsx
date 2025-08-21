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
    <main className="bg-black text-white px-6 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-red-500">
          About Us
        </h1>

        <p className="text-lg mb-8 leading-relaxed">
          At{" "}
          <span className="text-red-400 font-semibold">NOIR DESIRE</span>, we
          believe in crafting unforgettable experiences through our curated
          selection of premium products. Our mission is to blend elegance,
          quality, and passion in every piece we offer.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4">
              Founded with a vision to bring sophistication and boldness to your
              lifestyle, we have grown into a trusted name for high-quality,
              exclusive collections. Our dedication to craftsmanship and detail
              is unmatched.
            </p>
            <p className="mb-0">
              Every collection is carefully designed, ensuring it speaks to the
              unique desires of our customers. We are more than a brand — we are
              a lifestyle.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/bg.jpg"
              alt="Noir Desire premium products display"
              width={800}
              height={800}
              priority
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
