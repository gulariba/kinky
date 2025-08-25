// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "./context/CardContext";
import Navbar from "./components/Navbar";   // ✅ Navbar import
import Footer from "./components/Footer";   // ✅ Footer import

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          <Navbar />   {/* ✅ Navbar show hoga har page par */}
          {children}
          <Footer />   {/* ✅ Footer show hoga har page par */}
        </CartProvider>
      </body>
    </html>
  );
}
