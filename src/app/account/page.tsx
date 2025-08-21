"use client";

import Link from "next/link";

export default function AccountPage() {
  // ✅ Future: Fetch user data from API
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    joined: "January 2024",
  };

  const orders = [
    { id: "ORD1234", date: "2025-08-10", total: 59.99, status: "Delivered" },
    { id: "ORD5678", date: "2025-07-15", total: 129.5, status: "Processing" },
  ];

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      Delivered: "bg-green-600",
      Processing: "bg-yellow-500",
      Cancelled: "bg-red-600",
    };
    return (
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          colors[status] || "bg-gray-500"
        }`}
      >
        {status}
      </span>
    );
  };

  return (
    <main className="bg-black text-white px-6 py-20 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 border-b border-gray-700 pb-4">
          My Account
        </h1>

        {/* Profile Info */}
        <section className="bg-gray-900 p-6 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
          <div className="space-y-2 text-gray-300">
            <p>
              <span className="font-semibold text-white">Name:</span>{" "}
              {user.name}
            </p>
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              {user.email}
            </p>
            <p>
              <span className="font-semibold text-white">Member Since:</span>{" "}
              {user.joined}
            </p>
          </div>
          <Link
            href="/account/edit"
            className="inline-block mt-5 px-5 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
          >
            Edit Profile
          </Link>
        </section>

        {/* Order History */}
        <section className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Order History</h2>
          {orders.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-3 px-2">Order ID</th>
                    <th className="py-3 px-2">Date</th>
                    <th className="py-3 px-2">Total</th>
                    <th className="py-3 px-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-gray-700 hover:bg-gray-800 transition-colors"
                    >
                      <td className="py-3 px-2">{order.id}</td>
                      <td className="py-3 px-2">{order.date}</td>
                      <td className="py-3 px-2">{formatCurrency(order.total)}</td>
                      <td className="py-3 px-2">{getStatusBadge(order.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center text-gray-400 py-10">
              <p className="mb-4">You have no orders yet.</p>
              <Link
                href="/shop"
                className="px-5 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
