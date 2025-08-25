"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  User,
  ShoppingCart,
  Heart,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

interface NavbarProps {
  cartCount?: number;
  wishlistCount?: number;
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const shopCategories = [
  { name: "BDSM", slug: "bdsm", description: "Restraints, cuffs & more" },
  { name: "Sex Toys", slug: "sex-toys", description: "Solo & couple toys" },
  { name: "Electro", slug: "electro", description: "E-stim kits & pads" },
  { name: "Bondage Items", slug: "bondage", description: "Ropes, gags, masks" },
];

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ cartCount = 0, wishlistCount = 0 }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setShopOpen(false);
  }, [pathname]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeClass = useMemo(
    () =>
      "relative text-zinc-200 hover:text-white after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:scale-x-0 after:bg-red-500 after:transition-transform hover:after:scale-x-100",
    []
  );

  function submitSearch(e?: React.FormEvent) {
    e?.preventDefault();
    const q = query.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-50 w-full text-white transition-all duration-300",
        scrolled ? "bg-black/95 border-b border-zinc-800" : "bg-black/90 border-b border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        {/* Left: Logo + Mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center justify-center rounded-lg p-1.5 md:hidden hover:bg-zinc-900 transition"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-xl font-bold tracking-wide">Noir Desire</span>
          </Link>
        </div>

        {/* Center: Desktop nav */}
        <nav className="hidden md:flex items-center gap-4">
          {/* Shop Dropdown */}
          <div
            className="group relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button
              className={cn(
                "inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-medium hover:bg-zinc-900 transition",
                activeClass
              )}
            >
              Shop <ChevronDown className="h-4 w-4" />
            </button>

            <AnimatePresence>
              {shopOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-[480px] rounded-xl border border-zinc-800 bg-black shadow-2xl"
                >
                  <div className="grid grid-cols-2 gap-1 p-2">
                    {shopCategories.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/categories/${c.slug}`}
                        className="flex items-start gap-3 rounded-lg p-3 hover:bg-zinc-900 transition"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded border border-zinc-800">
                          <div className="h-2 w-2 rounded-full bg-red-600" />
                        </div>
                        <div>
                          <span className="text-sm font-medium">{c.name}</span>
                          <p className="text-xs text-zinc-400">{c.description}</p>
                        </div>
                        <ChevronRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-2 py-1 text-sm font-medium hover:bg-zinc-900 transition",
                activeClass
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center gap-2">
          <form
            onSubmit={submitSearch}
            className="hidden md:flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-2 py-1"
          >
            <Search className="h-4 w-4 text-zinc-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search…"
              className="w-32 bg-transparent text-sm outline-none placeholder:text-zinc-500"
            />
          </form>

          <Link href="/account" className="rounded-lg p-1.5 hover:bg-zinc-900 hover:text-red-500">
            <User className="h-5 w-5" />
          </Link>
          <Link href="/wishlist" className="relative rounded-lg p-1.5 hover:bg-zinc-900 hover:text-red-500">
            <Heart className="h-5 w-5" />
            {wishlistCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-semibold">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link href="/cart" className="relative rounded-lg p-1.5 hover:bg-zinc-900 hover:text-red-500">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-semibold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-zinc-800 bg-black md:hidden"
          >
            <div className="p-3 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 hover:bg-zinc-900"
                >
                  {item.name}
                </Link>
              ))}
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 hover:bg-zinc-900">
                  Shop <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                </summary>
                <div className="mt-1 space-y-1 rounded-lg bg-zinc-950 p-2">
                  {shopCategories.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/categories/${c.slug}`}
                      className="flex items-center justify-between rounded px-3 py-2 text-sm hover:bg-zinc-900"
                    >
                      {c.name}
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </details>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
