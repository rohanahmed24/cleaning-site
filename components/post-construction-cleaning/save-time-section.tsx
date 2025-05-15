"use client";
import React from "react";
import Image from "next/image";

export const PostConstructionSaveTimeSection = () => (
  <section className="py-16">
    <div className="flex flex-col md:flex-row items-center gap-10">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Save Time and Stress with Professional Home Cleaning</h2>
        <p className="text-gray-600 mb-6">
          Construction work leaves behind dust, debris, and residue that can be challenging to remove. Our post-construction cleaning specialists have the tools and expertise to tackle even the toughest post-build messes, ensuring your new or renovated space is spotless and ready to use.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
          alt="Post construction cleaning professionals"
          width={500}
          height={400}
          className="rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  </section>
);
