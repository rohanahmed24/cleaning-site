"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

// Animation variants that can be reused throughout the site
export const animations = {
  // Fade in animation
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  } as Variants,
  
  // Fade in with upward movement
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  } as Variants,
  
  // Fade in with rightward movement
  fadeInRight: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  } as Variants,
  
  // Fade in with leftward movement
  fadeInLeft: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  } as Variants,
  
  // Fade in with scale
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  } as Variants,
  
  // Container for staggered children animations
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  } as Variants,
  
  // Item in a staggered container
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  } as Variants,
  
  // Card animation with hover effect
  card: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  } as Variants,

  // Page transition - fade up
  pageTransitionFade: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeInOut" } }
  } as Variants,

  // Page transition - slide from right
  pageTransitionSlideRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3, ease: "easeIn" } }
  } as Variants,
  
  // Page transition with scale effect
  pageTransitionScale: {
    initial: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.96, transition: { duration: 0.3, ease: "easeIn" } }
  } as Variants,
  
  // Item transition - to be used for elements that appear when a page loads
  pageItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  } as Variants,
};

// Reusable animated components
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animations.fadeIn}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  );
}

export function AnimatedContainer({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      variants={animations.staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCard({ children, className = "" }: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      variants={animations.card}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({ children, className = "" }: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      variants={animations.staggerItem}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedFadeUp({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      variants={animations.fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedFadeLeft({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      variants={animations.fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedFadeRight({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      variants={animations.fadeInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedButton({ children, className = "" }: AnimatedSectionProps) {
  return (
    <motion.button
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}

export function AnimatedImage({ children, className = "" }: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      variants={animations.scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      {children}
    </motion.div>
  );
}
