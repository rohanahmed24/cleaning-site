"use client";
import React from "react";

export const OfficeTaskListSection = () => (
  <section className="my-16">
    <div className="w-full bg-green-600 rounded-xl shadow-lg p-8 text-white">
      <h3 className="text-lg font-bold mb-3 text-center">Our Office Cleaning Task List</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base">
        <li>✔ Desk & workstation cleaning</li>
        <li>✔ Trash removal</li>
        <li>✔ Restroom sanitization</li>
        <li>✔ Floor vacuuming & mopping</li>
        <li>✔ Kitchen/breakroom cleaning</li>
        <li>✔ Window & glass cleaning</li>
        <li>✔ High-touch surface disinfection</li>
        <li>✔ Meeting room cleaning</li>
      </ul>
    </div>
  </section>
);
