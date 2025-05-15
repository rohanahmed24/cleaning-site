"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    // Interior/home images
    backgroundImage: "https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&w=1200&q=80",
    personImage: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&w=100&q=80",
    text: "Amazing and highly efficient, left my duplex in pristine conditions!",
    name: "Jessica Clark",
    role: "Customer",
  },
  {
    backgroundImage: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&w=1200&q=80",
    personImage: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&w=100&q=80",
    text: "Friendly staff and reliable service. Will book again!",
    name: "Michael Lee",
    role: "Customer",
  },
  {
    backgroundImage: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&w=1200&q=80",
    personImage: "https://images.pexels.com/photos/1139785/pexels-photo-1139785.jpeg?auto=compress&w=100&q=80",
    text: "Prompt, professional, and left everything spotless.",
    name: "Sara Ahmed",
    role: "Customer",
  },
];

const logos = [
  { src: "/placeholder-logo.svg", alt: "Swift Line" },
  { src: "/placeholder-logo.svg", alt: "EagleElite" },
  { src: "/placeholder-logo.svg", alt: "FABRIK" },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="w-full bg-[#32A41C] py-20 px-4 md:px-6 flex flex-col items-center relative">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl w-full mx-auto">
        {/* Interior Image + Testimonial */}
        <div className="relative w-full md:w-[55%] max-h-[380px] rounded-3xl shadow-lg overflow-hidden">
          {/* Navigation buttons */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
            <button 
              onClick={prev} 
              className="bg-white bg-opacity-80 rounded-full shadow p-1.5 hover:bg-opacity-100 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
            <button 
              onClick={next} 
              className="bg-white bg-opacity-80 rounded-full shadow p-1.5 hover:bg-opacity-100 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          
          {/* Background image */}
          <div className="relative h-[380px] w-full rounded-3xl overflow-hidden">
            <Image
              src={t.backgroundImage}
              alt="Interior space"
              fill
              className="object-cover object-center rounded-3xl"
            />
          </div>
          
          {/* Testimonial bubble */}
          <div className="absolute bottom-8 right-8 z-10 max-w-[320px]">
            <div className="bg-white rounded-2xl shadow-lg p-5">
              <p className="text-gray-800 font-outfit text-base mb-3">{t.text}</p>
              <div className="flex items-center gap-3">
                <Image 
                  src={t.personImage} 
                  alt={t.name} 
                  width={40} 
                  height={40} 
                  className="rounded-full border border-gray-200" 
                />
                <div>
                  <span className="block text-sm font-bold text-gray-900 font-parkinsans">{t.name}</span>
                  <span className="block text-xs text-gray-500 font-outfit">{t.role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Review text and logos */}
        <div className="flex-1 md:w-[40%] text-white flex flex-col gap-6">
          <span className="uppercase text-xs tracking-wider font-parkinsans opacity-80">Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold font-parkinsans mb-2">Trusted by Thousand of People & Companies</h2>
          <p className="text-white text-opacity-90 font-outfit mb-4">
            Our dedicated customer service team is always here to provide prompt and helpful assistance with any questions or concerns you might have.
          </p>
          <div className="flex gap-8 mt-2">
            {logos.map((logo, i) => (
              <div key={i} className="opacity-80">
                <Image src={logo.src} alt={logo.alt} width={88} height={32} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Rating badge */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 bg-white rounded-t-2xl rounded-b-2xl shadow-lg px-8 py-4 flex flex-col items-center min-w-[320px]">
        <div className="flex items-center gap-1 mb-1">
          <Star className="w-5 h-5 text-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400" />
        </div>
        <span className="text-green-700 font-bold font-parkinsans text-base">Exceptional 4.8 rating</span>
        <span className="text-xs text-gray-500 font-outfit">Rating score: 5 of 5, based on 480 reviews</span>
      </div>
    </section>
  );
}
