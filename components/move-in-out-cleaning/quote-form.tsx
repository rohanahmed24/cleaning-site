"use client";

import React from "react";

export const MoveInOutQuoteForm = () => {
  return (
    <div className="bg-yellow-100 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">Get a Quote</h3>
      
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" 
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" 
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input 
            type="tel" 
            id="phone" 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500" 
            placeholder="(123) 456-7890"
          />
        </div>
        
        <div>
          <label htmlFor="service-type" className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
          <select 
            id="service-type" 
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
          >
            <option value="">Select service type</option>
            <option value="move-in">Move-In Cleaning</option>
            <option value="move-out">Move-Out Cleaning</option>
            <option value="both">Both Move-In and Move-Out</option>
          </select>
        </div>
        
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="terms" 
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-xs text-gray-600">
            By submitting, you agree to be contacted about your experience.
          </label>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Get a Quote
        </button>
      </form>
    </div>
  );
};
