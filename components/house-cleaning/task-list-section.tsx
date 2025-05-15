"use client";

import React from "react";
import { Check } from "lucide-react";

export const TaskListSection = () => {
  const leftTasks = [
    "Dusting all surfaces",
    "Vacuuming",
    "Mopping",
    "Bathroom cleaning",
    "Kitchen deep cleaning"
  ];
  
  const rightTasks = [
    "Cleaning inside/outside fridge",
    "Cleaning all rooms",
    "Organizing kitchen",
    "Window cleaning",
    "Trash and recycling removal"
  ];

  return (
    <section className="py-12">
      <div className="bg-green-600 rounded-xl py-12 px-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0">
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M150 0L0 150V0H150Z" fill="rgba(255,255,255,0.05)"/>
          </svg>
        </div>
        
        <div className="flex justify-center mb-4">
          <div className="bg-white rounded-full p-3 shadow-lg inline-block">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12h6v10" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-6">Our Home Cleaning Task List</h2>
        <p className="text-center text-white/80 mb-10 max-w-2xl mx-auto">
          Here are the household tasks we'll take care of for you. Our pros take care of the
          cleaning checklist so you can take care of your day.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-500/30 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            {leftTasks.map((task, index) => (
              <div key={index} className="flex items-center mb-4 last:mb-0">
                <div className="bg-white rounded-full p-1 mr-3">
                  <Check size={16} className="text-green-600" />
                </div>
                <span>{task}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-green-500/30 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            {rightTasks.map((task, index) => (
              <div key={index} className="flex items-center mb-4 last:mb-0">
                <div className="bg-white rounded-full p-1 mr-3">
                  <Check size={16} className="text-green-600" />
                </div>
                <span>{task}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
