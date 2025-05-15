"use client";
import React from "react";
import Image from "next/image";

export const DeepSaveTimeSection = () => (
  <section className="py-16">
    <div className="flex flex-col md:flex-row items-center gap-10">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Save Time and Stress with Professional Home Cleaning</h2>
        <p className="text-gray-600 mb-6">
          Our deep cleaning experts tackle the toughest dirt and grime that regular cleaning misses. From baseboards to ceiling fans, we reach every corner and crevice to restore your home to pristine condition.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
          alt="Deep cleaning professionals at work"
          width={500}
          height={400}
          className="rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  </section>
);
