"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export const SatisfactionGuarantee = () => {
  return (
    <div className="bg-green-50 p-6 rounded-xl shadow-md border border-green-100 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle size={24} className="text-green-600" />
          <h3 className="text-2xl font-bold text-gray-900">100% Satisfaction Guarantee</h3>
        </div>
        
        <p className="text-gray-700 mb-6">
          If you aren't completely satisfied with our service, we'll return and re-clean any areas at no extra charge.
        </p>
      </div>
      
      <div className="mt-auto">
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
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
            <div className="text-sm text-gray-600">Based on 2,000+ reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};
