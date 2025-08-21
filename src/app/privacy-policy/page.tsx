"use client";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black text-white  px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-red-500">Privacy Policy</h1>
        <p className="text-gray-300 mb-6">
          This Privacy Policy explains how NOIR DESIRE collects, uses, and protects your 
          personal information.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="text-gray-400 mb-6">
          We collect information you provide directly to us, such as when you create an account, 
          make a purchase, or contact us for support.
        </p>

        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="text-gray-400 mb-6">
          We use the information to process your orders, improve our services, and communicate 
          with you regarding promotions and updates.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Your Privacy Rights</h2>
        <p className="text-gray-400 mb-6">
          You can request access, correction, or deletion of your personal data at any time by 
          contacting us.
        </p>

        <p className="text-gray-500 text-sm mt-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </main>
  );
}
