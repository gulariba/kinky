"use client";

import { useCart } from "@/app/context/CardContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "credit-card",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate order placing
    alert(`Thank you, ${formData.name}! Your order of $${totalPrice.toFixed(2)} is placed.`);
    clearCart();
    setOrderPlaced(true);
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
        <p>Your cart is empty. Please add products to checkout.</p>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="mb-6">We have sent a confirmation email to {formData.email}.</p>
        <a href="/" className="text-red-500 hover:underline">Back to Home</a>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>

      {/* Cart Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        <div className="bg-gray-900 rounded-lg p-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-gray-700 py-3"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-400">
                  Qty: {item.quantity} × ${item.price.toFixed(2)}
                </p>
              </div>
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}

          <div className="flex justify-between font-bold text-lg pt-4">
            <p>Total:</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </section>

      {/* Checkout Form */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Shipping & Payment Details</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-900 text-white outline-none border border-gray-700 focus:border-red-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-900 text-white outline-none border border-gray-700 focus:border-red-500"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="address" className="block mb-1 font-medium">
              Shipping Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-900 text-white outline-none border border-gray-700 focus:border-red-500"
              placeholder="123 Main Street, City, Country"
            />
          </div>

          <div>
            <label htmlFor="paymentMethod" className="block mb-1 font-medium">
              Payment Method
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-gray-900 text-white outline-none border border-gray-700 focus:border-red-500"
            >
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold py-3 rounded"
          >
            Place Order
          </button>
        </form>
      </section>
    </main>
  );
}
