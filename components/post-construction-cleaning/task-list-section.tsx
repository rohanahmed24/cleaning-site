"use client";
import React from "react";

export const PostConstructionTaskListSection = () => (
  <section className="my-16">
    <div className="w-full bg-green-600 rounded-xl shadow-lg p-8 text-white">
      <h3 className="text-lg font-bold mb-3 text-center">Our Home Cleaning Task List</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base">
        <li>✔ Dust removal from surfaces</li>
        <li>✔ Paint splatter cleanup</li>
        <li>✔ Window & glass cleaning</li>
        <li>✔ Floor cleaning & polishing</li>
        <li>✔ Fixture cleaning</li>
        <li>✔ Cabinet interior cleaning</li>
        <li>✔ Adhesive residue removal</li>
        <li>✔ Trash and debris removal</li>
      </ul>
    </div>
  </section>
);
