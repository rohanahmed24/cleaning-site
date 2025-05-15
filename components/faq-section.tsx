"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
  
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="uppercase text-xs tracking-wider text-gray-500 font-parkinsans">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold font-parkinsans mt-2 mb-2">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map(faq => (
            <div 
              key={faq.id}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="font-medium text-lg text-gray-800 font-outfit">{faq.question}</span>
                <span className="ml-4">
                  {faq.isOpen ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </span>
              </button>
              
              {faq.isOpen && (
                <div className="p-5 pt-0 text-gray-600 font-outfit leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
