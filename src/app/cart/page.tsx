"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CardContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="bg-black text-white px-6 py-16 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-red-500">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-400">
            Your cart is empty.{" "}
            <Link href="/shop" className="text-red-500 underline">
              Go shopping
            </Link>
            .
          </p>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-gray-900 p-4 rounded-lg"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div className="flex-1">
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-gray-400">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <input
                        type="number"
                        value={item.quantity}
                        min={1}
                        onChange={(e) =>
                          updateQuantity(item.id, Number(e.target.value))
                        }
                        className="w-16 bg-black border border-gray-700 rounded px-2 py-1"
                      />
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
              <div className="flex gap-4">
                <button
                  onClick={clearCart}
                  className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
                >
                  Clear Cart
                </button>
                <Link href="/checkout">
                  <button className="bg-red-600 px-6 py-2 rounded hover:bg-red-500">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
