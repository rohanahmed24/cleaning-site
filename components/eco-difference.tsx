"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export function EcoDifference() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-12 py-16 bg-white">
      {/* Left: Text Content */}
      <div className="max-w-lg w-full flex flex-col gap-6 px-4 md:px-0">
        <span className="uppercase text-xs tracking-wider text-gray-500 font-parkinsans mb-2">Why Us</span>
        <h2 className="text-3xl md:text-4xl font-bold font-parkinsans mb-4">The Clany Eco Difference</h2>
        <p className="text-gray-600 font-outfit mb-6">
          Our trained professionals deliver exceptional results. Using powerful cleaning agents and proven techniques,
          we meticulously clean every corner, banish dust and dirt, eliminate stubborn grime, and leave your home spotless and refreshed.
        </p>
        <ul className="flex flex-col gap-4">
          <li className="flex items-center text-lg font-outfit text-gray-900 border-b border-gray-200 pb-3 last:border-b-0 last:pb-0">
            <CheckCircle className="text-green-500 w-6 h-6 mr-3" />
            Friendly and enthusiastic
          </li>
          <li className="flex items-center text-lg font-outfit text-gray-900 border-b border-gray-200 pb-3 last:border-b-0 last:pb-0">
            <CheckCircle className="text-green-500 w-6 h-6 mr-3" />
            Insured up to $2,000,000
          </li>
          <li className="flex items-center text-lg font-outfit text-gray-900">
            <CheckCircle className="text-green-500 w-6 h-6 mr-3" />
            No contracts or commitments
          </li>
        </ul>
      </div>
      {/* Right: Image */}
      <div className="relative w-full max-w-xl h-[340px] md:h-[360px] flex items-center justify-center">
        {/* Decorative leaves (optional, can be improved with SVGs/images) */}
        <span className="hidden md:block absolute -top-8 left-1/4 z-10 rotate-12">
          <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="24" cy="12" rx="24" ry="12" fill="#7BC47F" fillOpacity="0.45" />
          </svg>
        </span>
        <span className="hidden md:block absolute top-1/2 -left-8 z-10 -rotate-12">
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="16" cy="8" rx="16" ry="8" fill="#7BC47F" fillOpacity="0.35" />
          </svg>
        </span>
        <span className="hidden md:block absolute bottom-4 left-1/2 z-10 rotate-3">
          <svg width="36" height="18" viewBox="0 0 36 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="18" cy="9" rx="18" ry="9" fill="#7BC47F" fillOpacity="0.3" />
          </svg>
        </span>
        <Image
          src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&w=800&q=80"
          alt="Smiling professional cleaners in green uniforms"
          fill
          className="object-cover object-center rounded-3xl shadow-lg"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>
    </section>
  );
}
