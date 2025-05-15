"use client";

import React from "react";
import Image from "next/image";

export const OfficeCleaningProductsSection = () => {
  return (
    <section className="relative my-16">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="md:w-1/2 z-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Right Office Cleaning Products</h2>
          <p className="text-gray-600 mb-4">
            We use eco-friendly, commercial-grade cleaning solutions that effectively sanitize your workspace without harsh chemicals. Our products are safe for employees, clients, and the environment.
          </p>
          <p className="text-gray-600 mb-4">
            From HEPA-filtered vacuums to microfiber technology, we invest in professional equipment that reaches even the most difficult areas in your office.
          </p>
          <div className="bg-green-100 rounded-lg p-4 border-l-4 border-green-600">
            <p className="text-green-800 text-sm">
              All cleaning products are carefully selected to be effective against germs and viruses common in office environments.
            </p>
          </div>
        </div>
        <div className="relative md:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80"
            alt="Eco-friendly office cleaning products"
            width={500}
            height={400}
            className="rounded-lg shadow-md object-cover relative z-0"
          />
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-green-100 rounded-full z-30">
            <svg className="w-full h-full text-green-500 p-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
