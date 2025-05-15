"use client";

import React from "react";
import Image from "next/image";

export const PostConstructionSatisfactionGuarantee = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col">
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          100% Satisfaction Guarantee
        </h3>
        
        <p className="text-gray-700 mb-6">
          If your post-construction cleaning doesn't meet your expectations, we'll return and re-clean any areas at no extra charge. We're committed to making your new or renovated space perfectly clean and ready to use.
        </p>
      </div>
      
      <div className="mt-auto">
        <Image
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80"
          alt="100% Satisfaction Guarantee"
          width={400}
          height={300}
          className="rounded-lg object-cover"
        />
        
        <div className="flex items-center mt-4">
          <div className="mr-3">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 3L29.5 18.5H46L32.5 28L37 43.5L25 33.5L13 43.5L17.5 28L4 18.5H20.5L25 3Z" fill="#16A34A" stroke="#16A34A" strokeWidth="2"/>
            </svg>
          </div>
          <div>
            <div className="font-bold text-gray-900">5-star Rating</div>
            <div className="text-sm text-gray-600">Based on 1,200+ reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};
