"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { animations } from "@/components/animated-components";

export const RecurringSaveTimeSection = () => {
  // Image animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  return (
  <motion.section 
    className="py-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={animations.fadeIn}
  >
    <motion.div 
      className="flex flex-col md:flex-row items-center gap-10"
      variants={animations.staggerContainer}
    >
      <motion.div 
        className="md:w-1/2"
        variants={animations.fadeInRight}
      >
        <motion.h2 
          className="text-2xl font-bold text-gray-900 mb-4"
          variants={animations.fadeInUp}
        >
          Save Time and Stress with Professional Home Cleaning
        </motion.h2>
        <motion.p 
          className="text-gray-600 mb-6"
          variants={animations.fadeInUp}
          custom={1}
        >
          Our recurring cleaning service provides consistent, reliable cleaning on your schedule. Whether you need weekly, bi-weekly, or monthly cleaning, we'll ensure your space stays spotlessly clean without you having to worry about it. Free up your valuable time and enjoy a consistently clean environment.
        </motion.p>
      </motion.div>
      <motion.div 
        className="md:w-1/2 flex justify-center"
        variants={animations.fadeInLeft}
      >
        <motion.div
          variants={imageVariants}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        >
          <Image
            src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80"
            alt="Regular cleaning professionals"
            width={500}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </motion.section>
  );
};
