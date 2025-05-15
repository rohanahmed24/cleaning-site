"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { animations } from "@/components/animated-components";

export const SatisfactionGuarantee = () => {
  return (
    <motion.div 
      className="bg-green-50 p-6 rounded-xl shadow-md border border-green-100 h-full flex flex-col justify-between"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={animations.fadeIn}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <motion.div variants={animations.staggerContainer}>
        <motion.div 
          className="flex items-center gap-2 mb-3"
          variants={animations.fadeInUp}
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <CheckCircle size={24} className="text-green-600" />
          </motion.div>
          <motion.h3 
            className="text-2xl font-bold text-gray-900"
            variants={animations.fadeInUp}
          >
            100% Satisfaction Guarantee
          </motion.h3>
        </motion.div>
        
        <motion.p 
          className="text-gray-700 mb-6"
          variants={animations.fadeInUp}
          custom={1}
        >
          If you aren't completely satisfied with our service, we'll return and re-clean any areas at no extra charge.
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="mt-auto"
        variants={animations.staggerContainer}
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={animations.scaleIn}
        >
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
            alt="100% Satisfaction Guarantee"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
        </motion.div>
        
        <motion.div 
          className="flex items-center mt-4"
          variants={animations.fadeInUp}
          custom={2}
        >
          <motion.div 
            className="mr-3"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 3L29.5 18.5H46L32.5 28L37 43.5L25 33.5L13 43.5L17.5 28L4 18.5H20.5L25 3Z" fill="#16A34A" stroke="#16A34A" strokeWidth="2"/>
            </svg>
          </motion.div>
          <motion.div variants={animations.fadeInUp} custom={3}>
            <div className="font-bold text-gray-900">5-star Rating</div>
            <div className="text-sm text-gray-600">Based on 2,000+ reviews</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
