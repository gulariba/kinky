"use client";

export default function ContactPage() {
  return (
    <main className="bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-red-500">Contact Us</h1>
        <p className="text-lg text-gray-300 mb-8">
          Have questions or want to work with us? We&apos;d love to hear from you.
        </p>

        <form className="bg-gray-900 p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
