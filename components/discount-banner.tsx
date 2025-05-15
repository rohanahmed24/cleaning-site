"use client";

import { Check } from "lucide-react";

export function DiscountBanner() {
  return (
    <section className="w-full flex justify-center py-10 bg-[#FAFBF7]">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Weekly Services */}
        <div className="relative flex flex-col items-center justify-center w-[280px] h-[170px] bg-gradient-to-br from-yellow-200 via-yellow-300 to-yellow-100 rounded-[2rem] shadow-md">
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 border border-gray-200 shadow flex items-center justify-center">
            <Check className="text-green-500 w-6 h-6" />
          </span>
          <span className="text-gray-800 font-medium font-outfit mb-1 mt-6 text-lg">Weekly Services</span>
          <span className="text-3xl font-bold text-gray-900 font-parkinsans">30% OFF!</span>
        </div>
        {/* Recurring Services */}
        <div className="relative flex flex-col items-center justify-center w-[340px] h-[190px] bg-gradient-to-br from-yellow-200 via-yellow-300 to-green-100 rounded-[2rem] shadow-md">
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 border border-gray-200 shadow flex items-center justify-center">
            <Check className="text-green-500 w-6 h-6" />
          </span>
          <span className="text-gray-800 font-medium font-outfit mb-1 mt-6 text-lg">Big Savings On</span>
          <span className="text-4xl font-bold text-gray-900 font-parkinsans">Recurring Services</span>
        </div>
        {/* Bi-Weekly Services */}
        <div className="relative flex flex-col items-center justify-center w-[280px] h-[170px] bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 rounded-[2rem] shadow-md">
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 border border-gray-200 shadow flex items-center justify-center">
            <Check className="text-green-500 w-6 h-6" />
          </span>
          <span className="text-gray-800 font-medium font-outfit mb-1 mt-6 text-lg">Bi-Weekly Services</span>
          <span className="text-3xl font-bold text-gray-900 font-parkinsans">25% OFF!</span>
        </div>
      </div>
    </section>
  );
}


