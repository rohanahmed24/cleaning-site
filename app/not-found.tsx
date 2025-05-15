"use client";

import React from 'react';
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const path = usePathname();
  
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
        <div className="bg-red-50 p-12 rounded-xl max-w-2xl">
          <h1 className="text-5xl font-bold text-red-600 mb-6">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-6">
            The page <span className="font-medium text-gray-800">"{path}"</span> does not exist.
          </p>
          <p className="text-gray-600 mb-8">
            You might have mistyped the address or the page may have moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full transition-colors">
              Return to Home
            </Link>
            <Link href="/services" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-full transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
