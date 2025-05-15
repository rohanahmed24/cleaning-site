"use client";

import React from "react";
import Image from "next/image";

export const CleaningProductsSection = () => {
  return (
    <section className="py-12 relative">
      {/* Decorative leaves */}
      <div className="absolute -right-10 top-10 z-0 opacity-30">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M75 10C90 40 110 30 130 20C120 70 140 100 120 130C90 120 60 140 40 130C30 100 10 70 20 30C40 40 60 30 75 10Z" fill="#DEEEDE"/>
        </svg>
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Right Home Cleaning Products
          </h2>
          <p className="text-gray-600 mb-4">
            Our commitment to your family's health doesn't stop at thorough cleaning. We're dedicated to 
            using eco-friendly and natural-based cleaners that get the job done without harsh chemicals or strong odors. 
            Your wellbeing is our priority, which is why we choose biodegradable, low-impact products that are safe for
            your children, pets, and the environment.
          </p>
          <p className="text-gray-600 mb-4">
            For stubborn stains or high-traffic areas, we carefully select effective products that balance 
            power and safety. Our teams are trained in proper product application and safety procedures, so you can rest 
            easy knowing the clean you're getting isn't costing your family's health.
          </p>
          <p className="text-gray-600">
            If you have specific product preferences or sensitivities, just let us know. We're happy to accommodate
            special requests and can tailor our cleaning routine to meet your unique needs and preferences.
          </p>
        </div>
        <div className="md:w-1/2 relative">
          <div className="absolute -top-10 -left-5 z-0 opacity-30">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="40" fill="#E1F5E1"/>
            </svg>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
            alt="Eco-friendly cleaning products"
            width={500}
            height={400}
            className="rounded-lg shadow-md object-cover relative z-10"
          />
        </div>
      </div>
    </section>
  );
};
