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

  useEffect(() => {
    setMobileOpen(false);
    setShopOpen(false);
  }, [pathname]);

  const activeClass = useMemo(
    () =>
      "relative text-zinc-200 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-red-500 after:transition-transform hover:after:scale-x-100",
    []
  );

  function submitSearch(e?: React.FormEvent) {
    e?.preventDefault();
    const q = query.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/90 backdrop-blur-md text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:py-4">
        {/* Left: Logo + Mobile menu toggle */}
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center justify-center rounded-xl p-2 md:hidden hover:bg-zinc-900"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Noir Desire Logo"
              width={72}
              height={72}
              className="h-16 w-16 md:h-20 md:w-20"
            />
            <span className="text-2xl md:text-4xl font-bold tracking-wide">Noir Desire</span>
          </Link>
        </div>

        {/* Center: Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Shop Dropdown */}
          <div
            className="group relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button
              className={cn(
                "inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-medium hover:bg-zinc-900",
                activeClass
              )}
            >
              Shop <ChevronDown className="h-4 w-4" />
            </button>

            <AnimatePresence>
              {shopOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 mt-2 w-[520px] rounded-2xl border border-zinc-800 bg-black shadow-2xl"
                >
                  <div className="grid grid-cols-2 gap-2 p-2">
                    {shopCategories.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/categories/${c.slug}`}
                        className="group/item flex items-start gap-3 rounded-xl p-4 hover:bg-zinc-900"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800">
                          <div className="h-2 w-2 rounded-full bg-red-600" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">{c.name}</span>
                          {c.description && (
                            <span className="text-xs text-zinc-400">{c.description}</span>
                          )}
                        </div>
                        <ChevronRight className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover/item:opacity-100" />
                      </Link>
                    ))}
                  </div>

                  <div className="border-t border-zinc-800 p-3 text-xs text-zinc-400">
                    Trending:{" "}
                    <Link className="text-red-400 hover:underline" href="/shop/bdsm">
                      Leather cuffs
                    </Link>
                    ,{" "}
                    <Link className="text-red-400 hover:underline" href="/shop/sex-toys">
                      Wand massager
                    </Link>
                    ,{" "}
                    <Link className="text-red-400 hover:underline" href="/shop/electro">
                      E-stim kit
                    </Link>
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
                "rounded-xl px-3 py-2 text-sm font-medium hover:bg-zinc-900",
                activeClass
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right: Icons + Search */}
        <div className="flex min-w-0 items-center gap-2 md:gap-3">
          <form
            onSubmit={submitSearch}
            className="hidden min-w-[220px] flex-1 items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3 py-2 md:flex"
          >
            <Search className="h-4 w-4 shrink-0 text-zinc-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
            />
          </form>

          <Link href="/account" className="rounded-xl p-2 text-zinc-200 hover:text-white hover:bg-zinc-900" aria-label="Account">
            <User className="h-5 w-5" />
          </Link>
          <Link href="/wishlist" className="relative rounded-xl p-2 text-zinc-200 hover:text-white hover:bg-zinc-900" aria-label="Wishlist">
            <Heart className="h-5 w-5" />
            {wishlistCount > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-semibold">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link href="/cart" className="relative rounded-xl p-2 text-zinc-200 hover:text-white hover:bg-zinc-900" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-semibold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-zinc-800 bg-black md:hidden"
          >
            {/* Mobile search */}
            <form onSubmit={submitSearch} className="mx-4 mt-4 flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2">
              <Search className="h-5 w-5 text-zinc-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products…"
                className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
              />
            </form>

            <div className="px-2 py-2">
              {/* Collapsible Shop */}
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-3 font-medium hover:bg-zinc-900">
                  <span>Shop</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-1 space-y-1 rounded-xl bg-zinc-950 p-2">
                  {shopCategories.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/categories/${c.slug}`}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-zinc-900"
                    >
                      <span>{c.name}</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </details>

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-3 font-medium hover:bg-zinc-900"
                >
                  {item.name}
                </Link>
              ))}

              {/* Quick actions */}
              <div className="mt-2 grid grid-cols-3 gap-2 px-2">
                <Link href="/account" className="rounded-xl border border-zinc-800 p-3 text-center hover:bg-zinc-900">
                  <User className="mx-auto h-5 w-5" />
                  <span className="mt-1 block text-xs">Account</span>
                </Link>
                <Link href="/wishlist" className="relative rounded-xl border border-zinc-800 p-3 text-center hover:bg-zinc-900">
                  <Heart className="mx-auto h-5 w-5" />
                  {wishlistCount > 0 && (
                    <span className="absolute right-2 top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-semibold">
                      {wishlistCount}
                    </span>
                  )}
                  <span className="mt-1 block text-xs">Wishlist</span>
                </Link>
                <Link href="/cart" className="relative rounded-xl border border-zinc-800 p-3 text-center hover:bg-zinc-900">
                  <ShoppingCart className="mx-auto h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute right-2 top-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-semibold">
                      {cartCount}
                    </span>
                  )}
                  <span className="mt-1 block text-xs">Cart</span>
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
