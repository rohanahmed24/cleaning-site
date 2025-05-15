"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

interface ServiceOptionProps {
  name: string;
  href: string;
  active?: boolean;
}

const ServiceOption = ({ name, href, active }: ServiceOptionProps) => (
  <div className="hover:translate-x-1 transition-transform">
    <Link href={href} className={`flex items-center justify-between p-3 rounded-lg border ${active ? 'bg-green-50 border-green-200' : 'border-gray-100 hover:bg-gray-50'}`}>
      <span className={`${active ? 'font-semibold text-green-900' : 'text-gray-700'}`}>{name}</span>
      {active && <CheckCircle size={16} className="text-green-600" />}
    </Link>
  </div>
);

export const PostConstructionServiceSidebar = () => {
  return (
    <div className="space-y-6 sticky top-4" style={{opacity: 1}}>
      {/* Service Selection */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:-translate-y-1 transition-transform">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Choose Any Service</h3>
        
        <div className="space-y-3">
          <ServiceOption name="House Cleaning" href="/services/house-cleaning" />
          <ServiceOption name="Office Cleaning" href="/services/office-cleaning" />
          <ServiceOption name="Deep Cleaning" href="/services/deep-cleaning" />
          <ServiceOption name="Move In/Out Cleaning" href="/services/move-in-out-cleaning" />
          <ServiceOption name="Post Construction" href="/services/post-construction" active />
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:-translate-y-1 transition-transform">
        <div className="flex justify-center mb-3">
          <div className="hover:scale-105 transition-transform">
            <Image 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80"
              alt="Post construction cleaning supplies"
              width={200}
              height={150}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-gray-900 mb-2">Looking for live cleaning schedule today?</h3>
          <p className="text-sm text-gray-600 mb-4">Contact us now!</p>
          
          <div className="flex items-center justify-center gap-2 hover:scale-105 transition-transform">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span className="font-medium">+1 (987) 654-3210</span>
          </div>
        </div>
      </div>
      
      {/* Check out our FAQ */}
      <div className="bg-yellow-100 p-6 rounded-xl hover:-translate-y-1 transition-transform">
        <h3 className="font-semibold text-gray-900 mb-2">Check out our FAQ for all the details and reasons you need...</h3>
        <button className="mt-3 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-md w-full transition-colors hover:scale-[1.03] active:scale-[0.97]">Read More</button>
      </div>
    </div>
  );
};
