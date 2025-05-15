"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Clock, CheckCircle } from "lucide-react";

export const OurGoal = () => {
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
                We're committed to delivering the highest quality cleaning services that exceed your expectations. 
                Our professional cleaners are trained to pay attention to every detail in your home.
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
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={16} className="text-green-600" />
                      <span className="font-medium text-gray-900">{location.name}</span>
                    </div>
                    <div className="pl-6 text-sm text-gray-600 space-y-1">
                      <p>{location.hours}</p>
                      <p>{location.weekend}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                <CheckCircle size={20} className="text-green-600" />
                <div>
                  <div className="text-sm font-medium">Call us toll-free</div>
                  <Link href="tel:+18005678990" className="text-lg font-bold text-green-600">
                    +1 (800) 567-8990
                  </Link>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-500">
                <Link href="/accessibility" className="hover:underline">Accessibility Statement</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
