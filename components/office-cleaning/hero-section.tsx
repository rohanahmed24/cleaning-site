"use client";
import React from "react";
import Image from "next/image";

export const OfficeHeroSection = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Office cleaning</h1>
        <p className="text-gray-600 mb-6">
          Have you thought about hiring professional cleaners to keep your workspace spotless?
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition-colors">Free Quote</button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80"
          alt="Office cleaning professional"
          width={320}
          height={250}
          className="rounded-lg shadow-lg object-cover"
          priority
        />
      </div>
    </div>
  </section>
);
