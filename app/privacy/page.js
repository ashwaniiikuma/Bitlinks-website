import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Page Heading with Modern Tracking */}
        <h1 className="text-3xl font-extrabold text-gray-950 tracking-tight mb-8 border-b pb-4">
          Privacy <span className="text-purple-600">Policy</span>
        </h1>

        {/* Text designed space layout */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          
          <p className="text-gray-600">
            Welcome to <span className="font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">Bitlinks</span>. Your privacy is critically important to us. This policy document outlines the types of basic information that is collected and recorded by Bitlinks and how we use it.
          </p>

          <div className="border-l-2 border-purple-500 pl-4 space-y-2">
            <h2 className="text-lg font-bold text-gray-900 tracking-wide uppercase text-xs text-purple-600">
              01. Information We Collect
            </h2>
            <p className="text-gray-700">
              We only collect minimal user information that is strictly required for the core features of the application. This includes your <span className="font-medium text-gray-900 underline decoration-purple-300 decoration-2">email address</span> when you sign in using secure Google Authentication.
            </p>
          </div>

          <div className="border-l-2 border-purple-500 pl-4 space-y-2">
            <h2 className="text-lg font-bold text-gray-900 tracking-wide uppercase text-xs text-purple-600">
              02. How We Use Your Data
            </h2>
            <p className="text-gray-700">
              Your data is completely secure and is only used to provide and improve the services of this application. We <span className="font-semibold text-red-600">do not sell, share, or rent</span> your personal data or your shortened link metrics with any third parties.
            </p>
          </div>

          <div className="border-l-2 border-purple-500 pl-4 space-y-2">
            <h2 className="text-lg font-bold text-gray-900 tracking-wide uppercase text-xs text-purple-600">
              03. Cookies and Tracking
            </h2>
            <p className="text-gray-700">
              Bitlinks uses basic session data to keep you securely logged in. Our analytics system tracks click information (such as <span className="italic text-purple-700 font-medium">location country</span>) solely for generating data on your user dashboard.
            </p>
          </div>

          <div className="border-l-2 border-purple-500 pl-4 space-y-2">
            <h2 className="text-lg font-bold text-gray-900 tracking-wide uppercase text-xs text-purple-600">
              04. Security Consent
            </h2>
            <p className="text-gray-700">
              We utilize industry-standard secure authentication methods to protect your data. By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>
          </div>

          {/* Action Footer Card */}
          <div className="border-t border-gray-100 pt-8 mt-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/70 border border-gray-100 p-5 rounded-2xl">
              <p className="text-sm text-gray-600 font-medium">
                If you have any questions regarding this policy, feel free to reach out.
              </p>
              <Link href="/contactus">
                <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition shadow-sm whitespace-nowrap">
                  Contact Support →
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}