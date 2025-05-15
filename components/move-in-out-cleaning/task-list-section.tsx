"use client";
import React from "react";

export const MoveInOutTaskListSection = () => (
  <section className="my-16">
    <div className="w-full bg-green-600 rounded-xl shadow-lg p-8 text-white">
      <h3 className="text-lg font-bold mb-3 text-center">Our Home Cleaning Task List</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base">
        <li>✔ Deep clean all rooms</li>
        <li>✔ Inside cabinet cleaning</li>
        <li>✔ Appliance cleaning</li>
        <li>✔ Window cleaning</li>
        <li>✔ Baseboards & trim</li>
        <li>✔ Carpet cleaning</li>
        <li>✔ Wall spot cleaning</li>
        <li>✔ Dust and cobweb removal</li>
      </ul>
    </div>
  </section>
);
