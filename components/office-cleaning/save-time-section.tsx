"use client";
import React from "react";
import Image from "next/image";

export const OfficeSaveTimeSection = () => (
  <section className="py-16">
    <div className="flex flex-col md:flex-row items-center gap-10">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Save Time and Stress with Professional Office Cleaning</h2>
        <p className="text-gray-600 mb-6">
          Our office cleaning experts ensure your workspace is always fresh, sanitized, and welcoming. From desks to meeting rooms, we handle every detail so you can focus on your business.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          alt="Office cleaners at work"
          width={500}
          height={400}
          className="rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  </section>
);
