import React from 'react';
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6 text-green-800">Our Cleaning Services</h1>
        <p className="text-xl mb-12 max-w-2xl mx-auto">Choose from our range of professional cleaning services</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ServiceCard 
            title="House Cleaning" 
            href="/services/house-cleaning" 
            description="Complete residential cleaning services for homes of any size."
          />
          <ServiceCard 
            title="Office Cleaning" 
            href="/services/office-cleaning" 
            description="Professional cleaning for commercial spaces and offices."
          />
          <ServiceCard 
            title="Deep Cleaning" 
            href="/services/deep-cleaning" 
            description="Thorough cleaning that reaches all those hard-to-clean areas."
          />
          <ServiceCard 
            title="Move In/Out Cleaning" 
            href="/services/move-in-out-cleaning" 
            description="Get your new space ready or leave your old one spotless."
          />
          <ServiceCard 
            title="Post Construction" 
            href="/services/post-construction" 
            description="Clean up after construction or renovation projects."
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}

function ServiceCard({ title, href, description }: { title: string; href: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg">
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        href={href}
        className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
      >
        Learn More
      </Link>
    </div>
  );
}
