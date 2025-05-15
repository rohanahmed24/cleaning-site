"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { animations } from "@/components/animated-components";

export const RecurringHeroSection = () => {
  // Custom variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };
  return (
    <motion.section 
      className="bg-green-50 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animations.fadeIn}
    >
      <motion.div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center"
          variants={animations.staggerContainer}
        >
          <motion.div 
            className="md:w-1/2 pr-0 md:pr-10"
            variants={animations.fadeInRight}
          >
            <motion.div 
              className="text-sm text-green-600 font-medium mb-2"
              variants={animations.fadeInUp} 
            >
              SERVICES
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              variants={animations.fadeInUp}
            >
              Recurring cleaning
            </motion.h1>
            <motion.p 
              className="text-gray-600 mb-6 max-w-lg"
              variants={animations.fadeInUp}
            >
              Keep your living or work space consistently clean with our reliable recurring cleaning services.
            </motion.p>
            <motion.div
              variants={animations.fadeInUp}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#quote"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded-full transition-colors inline-block"
                >
                  Free Quote
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 mt-10 md:mt-0"
            variants={animations.fadeInLeft}
          >
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                alt="Recurring cleaning professionals"
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
