"use client";
import React from "react";

export const DeepTaskListSection = () => (
  <section className="my-16">
    <div className="w-full bg-green-600 rounded-xl shadow-lg p-8 text-white">
      <h3 className="text-lg font-bold mb-3 text-center">Our Home Cleaning Task List</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base">
        <li>✔ Dusting ceiling fans</li>
        <li>✔ Baseboards cleaning</li>
        <li>✔ Inside cabinet cleaning</li>
        <li>✔ Behind appliances</li>
        <li>✔ Deep carpet cleaning</li>
        <li>✔ Cleaning inside oven</li>
        <li>✔ Scrubbing bathroom tiles</li>
        <li>✔ Dust and cobweb removal</li>
      </ul>
    </div>
  </section>
);
