"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { animations } from "./animated-components";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  isOpen?: boolean;
}

const faqItems: FaqItem[] = [
  {
    id: "included",
    question: "What's included in a clean?",
    answer: "A standard cleaning includes dusting, vacuuming, mopping, and wiping surfaces in all rooms; cleaning kitchen countertops, sinks, and appliance exteriors; and sanitizing bathrooms, including toilets, sinks, and showers. Additional services like deep cleaning or appliance cleaning are available for an extra fee—let us know your needs!",
    isOpen: true
  },
  {
    id: "supplies",
    question: "Are the cleaning supplies included?",
    answer: "Yes! Our professional team brings all necessary cleaning supplies and equipment needed for a thorough cleaning. We use eco-friendly, high-quality products that are effective yet safe for your family and pets. If you have specific products you'd prefer us to use due to allergies or preferences, please let us know in advance."
  },
  {
    id: "cancel",
    question: "What if I need to cancel my appointment?",
    answer: "We understand that plans can change! You can cancel or reschedule your appointment with no penalty as long as you give us at least 24 hours' notice. For cancellations with less notice, a small fee may apply. You can cancel through our app, website, or by calling our customer service team."
  },
  {
    id: "bonded",
    question: "Are you bonded and insured?",
    answer: "Absolutely! All our cleaning professionals are fully bonded and insured up to $2,000,000. This protects both our team and your property in the unlikely event of an accident or damage. We carefully screen all our employees and maintain rigorous training standards to ensure the highest quality service."
  },
  {
    id: "cost",
    question: "How much does it cost to clean my home?",
    answer: "The cost depends on several factors including the size of your home, number of bedrooms and bathrooms, and the type of cleaning service you select. Our prices start at $150 for a standard cleaning of a one-bedroom apartment. For an accurate quote, you can use our online booking system which calculates the price based on your specific needs."
  },
  {
    id: "pets",
    question: "What about my pets?",
    answer: "We love pets! There's no need to remove your furry friends from the home during cleaning. However, we do ask that you inform us about any pets in advance so our cleaners can be prepared. If your pet is anxious around strangers, you might want to keep them in a separate room during the cleaning service for their comfort and safety."
  }
];

export function FaqSection() {
  const [faqs, setFaqs] = useState<FaqItem[]>(faqItems);
  
  const toggleFaq = (id: string) => {
    setFaqs(
      faqs.map(faq => 
        faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };
  
  // Animation variants
  const accordionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <motion.section 
      className="w-full bg-white py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animations.fadeIn}
    >
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={animations.staggerContainer}
      >
        <motion.div 
          className="text-center mb-12"
          variants={animations.fadeInUp}
        >
          <span className="uppercase text-xs tracking-wider text-gray-500 font-parkinsans">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold font-parkinsans mt-2 mb-2">
            Frequently Asked Questions
          </h2>
        </motion.div>
        
        <motion.div className="space-y-4" variants={animations.staggerContainer}>
          {faqs.map(faq => (
            <motion.div 
              key={faq.id}
              className="border border-gray-200 rounded-xl overflow-hidden"
              variants={animations.staggerItem}
              whileHover={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)" }}
            >
              <motion.button
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                onClick={() => toggleFaq(faq.id)}
                whileTap={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
              >
                <span className="font-medium text-lg text-gray-800 font-outfit">{faq.question}</span>
                <span className="ml-4">
                  <AnimatePresence mode="wait" initial={false}>
                    {faq.isOpen ? (
                      <motion.div
                        key="minus"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Minus className="w-5 h-5 text-gray-500" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="plus"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Plus className="w-5 h-5 text-gray-500" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>
              </motion.button>
              
              <AnimatePresence initial={false}>
                {faq.isOpen && (
                  <motion.div 
                    className="overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={accordionVariants}
                  >
                    <div className="p-5 pt-0 text-gray-600 font-outfit leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
