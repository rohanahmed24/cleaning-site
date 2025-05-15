"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const PostConstructionHeroSection = () => {
  return (
    <section className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 pr-0 md:pr-10">
            <div className="text-sm text-green-600 font-medium mb-2">SERVICES</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Post construction cleaning</h1>
            <p className="text-gray-600 mb-6 max-w-lg">
              Have your through post-build professional clean to make your space spotless.
            </p>
            <Link
              href="#quote"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded-full transition-colors inline-block"
            >
              Free Quote
            </Link>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <Image
              src="https://images.unsplash.com/photo-1621886292650-520f76c747d6?auto=format&fit=crop&w=800&q=80"
              alt="Post construction cleaning"
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
