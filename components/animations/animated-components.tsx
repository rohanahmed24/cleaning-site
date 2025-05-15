"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { 
  fadeIn, 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  staggerContainer, 
  springUp,
  scaleIn,
  hoverScale,
  listItemVariant,
  staggeredList
} from "@/lib/animations";

// Fade-in animation wrapper
export const FadeIn = ({ 
  children, 
  className = "", 
  delay = 0
}: { 
  children: ReactNode; 
  className?: string; 
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeIn}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

// Fade-in-up animation wrapper
export const FadeInUp = ({ 
  children, 
  className = "", 
  delay = 0
}: { 
  children: ReactNode; 
  className?: string; 
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

// Fade-in-left animation wrapper
export const FadeInLeft = ({ 
  children, 
  className = "", 
  delay = 0
}: { 
  children: ReactNode; 
  className?: string; 
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInLeft}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

// Fade-in-right animation wrapper
export const FadeInRight = ({ 
  children, 
  className = "", 
  delay = 0
}: { 
  children: ReactNode; 
  className?: string; 
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInRight}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

// Scale-in animation wrapper
export const ScaleIn = ({ 
  children, 
  className = "", 
  delay = 0
}: { 
  children: ReactNode; 
  className?: string; 
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={scaleIn}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

// Spring-up animation wrapper
export const SpringUp = ({ 
  children, 
  className = "", 
  delay = 0
}: { 
  children: ReactNode; 
  className?: string; 
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={springUp}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

// Staggered container for animating multiple children with staggered delays
export const StaggerContainer = ({ 
  children, 
  className = "" 
}: { 
  children: ReactNode; 
  className?: string; 
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={staggerContainer}
  >
    {children}
  </motion.div>
);

// Animated section for page sections
export const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0.2 
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
}) => (
  <motion.section
    className={className}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.section>
);

// Animated button
export const AnimatedButton = ({ 
  children, 
  className = "", 
  onClick 
}: { 
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <motion.button
    className={className}
    whileHover={hoverScale}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

// Animated link
export const AnimatedLink = ({ 
  href, 
  children, 
  className = "" 
}: { 
  href: string;
  children: ReactNode;
  className?: string;
}) => (
  <motion.a
    href={href}
    className={className}
    whileHover={hoverScale}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

// Staggered animated list
export const AnimatedList = ({ 
  children, 
  className = "" 
}: { 
  children: ReactNode; 
  className?: string;
}) => (
  <motion.ul
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={staggeredList}
  >
    {children}
  </motion.ul>
);

// Animated list item
export const AnimatedListItem = ({ 
  children, 
  className = "" 
}: { 
  children: ReactNode; 
  className?: string;
}) => (
  <motion.li
    className={className}
    variants={listItemVariant}
  >
    {children}
  </motion.li>
);

// Animated div for responsive hover effects
export const AnimatedDiv = ({ 
  children, 
  className = "" 
}: { 
  children: ReactNode; 
  className?: string;
}) => (
  <motion.div
    className={className}
    whileHover={{
      y: -5,
      transition: { type: "spring", stiffness: 300 }
    }}
  >
    {children}
  </motion.div>
);
