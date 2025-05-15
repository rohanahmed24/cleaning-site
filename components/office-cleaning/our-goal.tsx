"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Clock, CheckCircle } from "lucide-react";

export const OfficeOurGoal = () => {
  const locations = [
    { name: "New York", hours: "Mon-Fri: 8AM-7PM", weekend: "Sat-Sun: 9AM-5PM" },
    { name: "Chicago", hours: "Mon-Fri: 8AM-7PM", weekend: "Sat-Sun: 9AM-5PM" },
    { name: "Boston", hours: "Mon-Fri: 8:30AM-6:30PM", weekend: "Sat: 9AM-4PM" },
    { name: "Atlanta", hours: "Mon-Fri: 8AM-7PM", weekend: "Sat: 9AM-3PM" },
  ];

  return (
    <section className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Column */}
          <div className="md:w-1/2">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="inline-block w-10 h-1 bg-green-600 rounded-full"></span>
                Our Goal is to Wow You With Every Clean
              </h2>
              <p className="text-gray-600 mb-6">
                We're committed to delivering the highest quality office cleaning services that exceed your expectations. 
                Our professional cleaners ensure your workspace is always fresh, sanitized, and welcoming for employees and clients.
              </p>
              <Link
                href="/book-now"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition-colors inline-block"
              >
                Schedule Now
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                <Clock size={20} className="text-green-600" />
                BUSINESS HOURS - LOCATIONS
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {locations.map((location, index) => (
                  <div key={index} className="border-l-2 border-green-500 pl-3">
                    <div className="font-semibold text-gray-900 mb-1 flex items-center gap-1">
                      <MapPin size={16} className="text-green-600" />
                      {location.name}
                    </div>
                    <div className="text-sm text-gray-600">{location.hours}</div>
                    <div className="text-sm text-gray-600">{location.weekend}</div>
                  </div>
                ))}
              </div>
              
              <Link
                href="/locations"
                className="text-green-600 hover:text-green-700 font-medium text-sm mt-4 flex items-center gap-1"
              >
                <span>View all locations</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
