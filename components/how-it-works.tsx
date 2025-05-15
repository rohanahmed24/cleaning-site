"use client";

import { Calendar, ClipboardCheck, Smile } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-[#FAFBF7]">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 font-parkinsans">How Does it Work?</h2>
      <div className="relative w-full max-w-3xl flex flex-col items-center">
        {/* Dotted Line */}
        <svg className="absolute left-1/2 -translate-x-1/2 top-8 md:top-12 z-0" width="4" height="440" viewBox="0 0 4 440" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 0 V440" stroke="#CFCFCF" strokeDasharray="8 12" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        {/* Steps */}
        <div className="relative z-10 flex flex-col md:grid md:grid-cols-2 gap-y-16 gap-x-8 w-full">
          <div className="flex flex-col items-center md:items-end md:col-start-2">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 rounded-xl p-4 mr-3 flex items-center justify-center relative">
                <Calendar className="w-8 h-8 text-gray-900" />
                <span className="absolute -top-2 -right-2 text-green-500">★</span>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold font-parkinsans mb-1">1. Book a Cleaning</h3>
              <p className="text-gray-600 font-outfit">Easily book an appointment using your computer or phone.</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start md:col-start-1 md:row-start-2">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 rounded-xl p-4 mr-3 flex items-center justify-center relative">
                <ClipboardCheck className="w-8 h-8 text-gray-900" />
                <span className="absolute -top-2 -right-2 text-green-500">★</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold font-parkinsans mb-1">2. Get a Confirmation</h3>
              <p className="text-gray-600 font-outfit">Fully insured & bonded cleaners will deliver the quality services that you expect.</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end md:col-start-2 md:row-start-3">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 rounded-xl p-4 mr-3 flex items-center justify-center relative">
                <Smile className="w-8 h-8 text-gray-900" />
                <span className="absolute -top-2 -right-2 text-green-500">★</span>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold font-parkinsans mb-1">3. Cleaners Arrives</h3>
              <p className="text-gray-600 font-outfit">Take back your free time by doing more of what you enjoy and less of what you don’t.</p>
            </div>
          </div>
        </div>
        {/* Book Button */}
        <div className="flex justify-center mt-16 w-full">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-8 rounded-full transition-colors font-outfit text-lg shadow-md">
            Book Your Service
          </button>
        </div>
      </div>
    </section>
  );
}
