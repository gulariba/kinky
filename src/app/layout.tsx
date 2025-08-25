import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "./context/CardContext";
import Navbar from "@/app/components/Navbar";   // ✅ Navbar import
import Footer from "@/app/components/Footer";   // ✅ Footer import

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Noir Desire – Kink Fashion",
  description: "Explore your desires with elegant, premium kink products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <CartProvider>
          <Navbar />   {/* ✅ Har page pe show hoga */}
          <main className="min-h-screen">{children}</main>
          <Footer />   {/* ✅ Har page pe show hoga */}
        </CartProvider>
      </body>
    </html>
  );
}
