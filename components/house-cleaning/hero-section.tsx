"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { animations } from "@/components/animated-components";

export const HeroSection = () => {
  return (
    <motion.section 
      className="bg-green-50 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animations.fadeIn}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 pr-0 md:pr-10"
            variants={animations.fadeInRight}
          >
            <motion.div 
              className="text-sm text-green-600 font-medium mb-2"
              variants={animations.fadeInUp}
              custom={0}
            >
              SERVICES
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              variants={animations.fadeInUp}
              custom={1}
            >
              House cleaning
            </motion.h1>
            <motion.p 
              className="text-gray-600 mb-6 max-w-lg"
              variants={animations.fadeInUp}
              custom={2}
            >
              Never get caught with a dirty home again! Professional cleaners to keep your spaces spotless.
            </motion.p>
            <motion.div
              variants={animations.fadeInUp}
              custom={3}
            >
              <Link href="#quote">
                <motion.span
                  className="bg-yellow-400 text-black font-medium py-2 px-6 rounded-full inline-block"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "#fbbf24",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Free Quote
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 mt-10 md:mt-0"
            variants={animations.fadeInLeft}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
                alt="Professional house cleaning"
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
