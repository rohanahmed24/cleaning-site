"use client";
import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/components/animated-components";

export const RecurringTaskListSection = () => {
  // Task item animations
  const taskItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };
  
  return (
  <motion.section 
    className="my-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
  >
    <motion.div 
      className="w-full bg-green-600 rounded-xl shadow-lg p-8 text-white"
      variants={animations.fadeIn}
      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
    >
      <motion.h3 
        className="text-lg font-bold mb-3 text-center"
        variants={animations.fadeInUp}
      >
        Our Home Cleaning Task List
      </motion.h3>
      <motion.ul 
        className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base"
        variants={animations.staggerContainer}
      >
        <motion.li
          variants={taskItemVariants}
          custom={0}
          whileHover={{ x: 5, transition: { duration: 0.2 } }}
        >
          ✔ Regular dusting
        </motion.li>
        <motion.li
          variants={taskItemVariants}
          custom={1}
          whileHover={{ x: 5, transition: { duration: 0.2 } }}
        >
          ✔ Vacuuming
        </motion.li>
        <motion.li
          variants={taskItemVariants}
          custom={2}
          whileHover={{ x: 5, transition: { duration: 0.2 } }}
        >
          ✔ Floor cleaning
        </motion.li>
        <motion.li
          variants={taskItemVariants}
          custom={3}
          whileHover={{ x: 5, transition: { duration: 0.2 } }}
        >
          ✔ Bathroom sanitizing
        </motion.li>
        <motion.li
          variants={taskItemVariants}
          custom={4}
          whileHover={{ x: 5, transition: { duration: 0.2 } }}
        >
          ✔ Kitchen cleaning
        </motion.li>
        <motion.li
          variants={taskItemVariants}
          custom={5}
          whileHover={{ x: 5, transition: { duration: 0.2 } }}
        >
          ✔ Garbage & waste removal
        </motion.li>
        <motion.li
          variants={taskItemVariants}
          custom={6}
          whileHover={{ x: 5, transition: { duration: 0.2 } }}
        >
          ✔ Surface wiping
        </motion.li>
        <motion.li
          variants={taskItemVariants}
          custom={7}
          whileHover={{ x: 5, transition: { duration: 0.2 } }}
        >
          ✔ Bed linen changes (upon request)
        </motion.li>
      </motion.ul>
    </motion.div>
  </motion.section>
  );
};
