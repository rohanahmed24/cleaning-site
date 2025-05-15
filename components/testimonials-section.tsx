"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { animations } from "./animated-components";

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
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  };
  
  const next = () => {
    setDirection(1);
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  };
  
  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  return (
    <motion.section 
      className="w-full bg-[#32A41C] py-20 px-4 md:px-6 flex flex-col items-center relative mb-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animations.fadeIn}
    >
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl w-full mx-auto"
        variants={animations.staggerContainer}
      >
        {/* Interior Image + Testimonial */}
        <motion.div 
          className="relative w-full md:w-[55%] max-h-[380px] rounded-3xl shadow-lg overflow-hidden"
          variants={animations.fadeInRight}
        >
          {/* Navigation buttons */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
            <motion.button 
              onClick={prev} 
              className="bg-white bg-opacity-80 rounded-full shadow p-1.5 hover:bg-opacity-100 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </motion.button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
            <motion.button 
              onClick={next} 
              className="bg-white bg-opacity-80 rounded-full shadow p-1.5 hover:bg-opacity-100 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </motion.button>
          </div>
          
          {/* Background image */}
          <div className="relative h-[380px] w-full rounded-3xl overflow-hidden">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween", duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={t.backgroundImage}
                  alt="Interior space"
                  fill
                  className="object-cover object-center rounded-3xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Testimonial bubble */}
          <div className="absolute bottom-8 right-8 z-10 max-w-[320px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-5"
              >
                <p className="text-gray-800 font-outfit text-base mb-3">{t.text}</p>
                <div className="flex items-center gap-3">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                    <Image 
                      src={t.personImage} 
                      alt={t.name} 
                      width={40} 
                      height={40} 
                      className="rounded-full border border-gray-200" 
                    />
                  </motion.div>
                  <div>
                    <span className="block text-sm font-bold text-gray-900 font-parkinsans">{t.name}</span>
                    <span className="block text-xs text-gray-500 font-outfit">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
        
        {/* Review text and logos */}
        <motion.div 
          className="flex-1 md:w-[40%] text-white flex flex-col gap-6"
          variants={animations.fadeInLeft}
        >
          <span className="uppercase text-xs tracking-wider font-parkinsans opacity-80">Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold font-parkinsans mb-2">Trusted by Thousand of People & Companies</h2>
          <p className="text-white text-opacity-90 font-outfit mb-4">
            Our dedicated customer service team is always here to provide prompt and helpful assistance with any questions or concerns you might have.
          </p>
          
          <motion.div 
            className="flex gap-8 mt-2"
            variants={animations.staggerContainer}
          >
            {logos.map((logo, i) => (
              <motion.div 
                key={i} 
                className="opacity-80"
                variants={animations.staggerItem}
                whileHover={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image src={logo.src} alt={logo.alt} width={88} height={32} className="object-contain" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Rating badge */}
      <motion.div 
        className="absolute left-0 right-0 mx-auto bottom-[-150px] bg-white rounded-2xl shadow-lg px-8 py-4 flex flex-col items-center w-[320px] max-w-[95%] z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
      >
        <motion.div 
          className="flex items-center gap-1 mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + (i * 0.1) }}
            >
              <Star className="w-5 h-5 text-yellow-400" />
            </motion.div>
          ))}
        </motion.div>
        <span className="text-green-700 font-bold font-parkinsans text-base">Exceptional 4.8 rating</span>
        <span className="text-xs text-gray-500 font-outfit">Rating score: 5 of 5, based on 480 reviews</span>
      </motion.div>
    </motion.section>
  );
}
