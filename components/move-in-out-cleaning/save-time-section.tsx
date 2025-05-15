"use client";
import React from "react";
import Image from "next/image";

export const MoveInOutSaveTimeSection = () => (
  <section className="py-16">
    <div className="flex flex-col md:flex-row items-center gap-10">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Save Time and Stress with Professional Home Cleaning</h2>
        <p className="text-gray-600 mb-6">
          Moving is stressful enough without having to worry about cleaning. Our move in/out cleaning specialists ensure your old home is spotless for the next residents, or your new home is fresh and ready for your arrival.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
          alt="Move in/out cleaning professionals"
          width={500}
          height={400}
          className="rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  </section>
);
