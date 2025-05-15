"use client";

import React from "react";

export const QuoteForm = () => {
  return (
    <div id="quote" className="bg-yellow-100 p-6 rounded-xl shadow-md border border-yellow-200">
      <h3 className="text-2xl font-bold mb-4 text-gray-900">Get a Free Quote</h3>
      
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="john@example.com"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input 
            type="tel" 
            id="phone" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="(555) 123-4567"
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Cleaning Service</label>
          <select 
            id="service" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          >
            <option value="">Select a Service</option>
            <option value="standard">Standard House Cleaning</option>
            <option value="deep">Deep Cleaning</option>
            <option value="move">Move In/Out Cleaning</option>
            <option value="recurring">Recurring Service</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Special Requirements</label>
          <textarea 
            id="message" 
            rows={3} 
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Tell us about any specific needs or areas that require special attention"
          ></textarea>
        </div>
        
        <div className="flex items-center">
          <input type="checkbox" id="terms" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            By submitting this form, you agree to be contacted by a representative regarding your inquiry.
          </label>
        </div>
        
        <button type="submit" className="w-full bg-gray-900 hover:bg-black text-white py-2 px-4 rounded-md shadow transition duration-200 font-medium">
          Get a Quote
        </button>
      </form>
    </div>
  );
};
