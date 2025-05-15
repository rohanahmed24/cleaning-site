"use client";

import React from "react";
import Image from "next/image";

export const SaveTimeSection = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Save Time and Stress with Professional Home Cleaning
          </h2>
          <p className="text-gray-600 mb-4">
            Our eco-friendly house cleaning service goes above and beyond to ensure fresh, orderly, and exceptional 
            quality. Each team member undergoes a thorough personal interview, rigorous training, and extensive 
            background checks to guarantee your complete satisfaction and safety.
          </p>
          <p className="text-gray-600 mb-4">
            We use innovative, effective, and environmentally-responsible cleaning products with our proven family-
            friendly cleaning methods, delivering top results that align with your values. With a strong reputation and 
            growing testimonials from prior customers, cleaning is never a chore for us and we're looking forward 
            to serving you. We know cleaning can be stressful—that's why we're here to make your life easier with our 
            conscious cleaners in the city.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Professional cleaners at work"
            width={500}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};
