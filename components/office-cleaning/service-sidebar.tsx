"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const OfficeServiceSidebar = () => {
  return (
    <div className="space-y-6 sticky top-4">
      {/* Service Selection */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Choose Any Service</h3>
        
        <div className="space-y-3">
          <ServiceOption name="House Cleaning" href="/services/house-cleaning" />
          <ServiceOption name="Office Cleaning" href="/services/office-cleaning" active />
          <ServiceOption name="Deep Cleaning" href="/services/deep-cleaning" />
          <ServiceOption name="Move In/Out Cleaning" href="/services/move-in-out-cleaning" />
          <ServiceOption name="Post Construction" href="/services/post-construction" />
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <div className="flex justify-center mb-3">
          <Image 
            src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=400&q=80"
            alt="Office cleaning supplies"
            width={200}
            height={150}
            className="rounded-lg"
          />
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-gray-900 mb-2">Looking for office cleaning schedule today?</h3>
          <p className="text-sm text-gray-600 mb-4">Contact us now!</p>
          
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span className="font-medium">+1 (987) 654-3210</span>
          </div>
        </div>
      </div>
      
      {/* Check out our FAQ */}
      <div className="bg-yellow-100 p-6 rounded-xl">
        <h3 className="font-semibold text-gray-900 mb-2">Check out our FAQ for all the details and reasons you need...</h3>
        <button className="mt-3 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-md w-full transition-colors">Read More</button>
      </div>
    </div>
  );
};

interface ServiceOptionProps {
  name: string;
  href: string;
  active?: boolean;
}

const ServiceOption = ({ name, href, active }: ServiceOptionProps) => (
  <Link href={href} className={`flex items-center justify-between p-3 rounded-lg border ${active ? 'bg-green-50 border-green-200' : 'border-gray-100 hover:bg-gray-50'}`}>
    <span className={`${active ? 'font-semibold text-green-900' : 'text-gray-700'}`}>{name}</span>
    {active && <CheckCircle size={16} className="text-green-600" />}
  </Link>
);
