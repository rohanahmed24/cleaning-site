"use client";

import React from 'react';
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { animations } from "@/components/animated-components";

export default function ServicesPage() {
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <motion.div 
        className="container mx-auto px-4 py-10 md:py-16 text-center"
        initial="hidden"
        animate="visible"
        variants={pageVariants}
      >
        <motion.h1 
          className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-green-800"
          variants={headerVariants}
        >
          Our Cleaning Services
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto"
          variants={headerVariants}
        >
          Choose from our range of professional cleaning services
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
          variants={animations.staggerContainer}
        >
          <ServiceCard 
            title="House Cleaning" 
            href="/services/house-cleaning" 
            description="Complete residential cleaning services for homes of any size."
            index={0}
          />
          <ServiceCard 
            title="Office Cleaning" 
            href="/services/office-cleaning" 
            description="Professional cleaning for commercial spaces and offices."
            index={1}
          />
          <ServiceCard 
            title="Deep Cleaning" 
            href="/services/deep-cleaning" 
            description="Thorough cleaning that reaches all those hard-to-clean areas."
            index={2}
          />
          <ServiceCard 
            title="Move In/Out Cleaning" 
            href="/services/move-in-out-cleaning" 
            description="Get your new space ready or leave your old one spotless."
            index={3}
          />
          <ServiceCard 
            title="Post Construction" 
            href="/services/post-construction" 
            description="Clean up after construction or renovation projects."
            index={4}
          />
          <ServiceCard 
            title="Recurring Cleaning" 
            href="/services/recurring-cleaning" 
            description="Regular scheduled cleaning services to keep your space consistently clean."
            index={5}
          />
        </motion.div>
      </motion.div>
      <Footer />
    </main>
  );
}

function ServiceCard({ 
  title, 
  href, 
  description,
  index 
}: { 
  title: string; 
  href: string; 
  description: string;
  index: number;
}) {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.05 * index
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delay: 0.1,
        duration: 0.3
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#15803d",
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div 
      className="bg-white p-5 md:p-6 rounded-lg md:rounded-xl shadow-md border border-gray-100"
      variants={cardVariants}
      whileHover="hover"
    >
      <motion.h3 
        className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 + (0.05 * index) }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-gray-600 text-sm md:text-base mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 + (0.05 * index) }}
      >
        {description}
      </motion.p>
      <Link href={href}>
        <motion.span 
          className="inline-block bg-green-600 text-white font-medium py-2 px-4 rounded-md text-sm md:text-base w-full sm:w-auto"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
        >
          Learn More
        </motion.span>
      </Link>
    </motion.div>
  );
}
