import React from 'react';
import { Navbar } from "@/components/navbar";
import { DeepHeroSection } from "@/components/deep-cleaning/hero-section";
import { DeepSaveTimeSection } from "@/components/deep-cleaning/save-time-section";
import { DeepTaskListSection } from "@/components/deep-cleaning/task-list-section";
import { DeepServiceSidebar } from "@/components/deep-cleaning/service-sidebar";
import { DeepCleaningProductsSection } from "@/components/deep-cleaning/cleaning-products-section";
import { DeepQuoteForm } from "@/components/deep-cleaning/quote-form";
import { DeepSatisfactionGuarantee } from "@/components/deep-cleaning/satisfaction-guarantee";
import { DeepOurGoal } from "@/components/deep-cleaning/our-goal";
import Footer from "@/components/footer";

export default function DeepCleaningPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <DeepHeroSection />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <DeepSaveTimeSection />
            <DeepTaskListSection />
            <DeepCleaningProductsSection />
            <div className="flex flex-col lg:flex-row gap-8 my-16">
              <div className="lg:w-1/2">
                <DeepQuoteForm />
              </div>
              <div className="lg:w-1/2">
                <DeepSatisfactionGuarantee />
              </div>
            </div>
          </div>
          <div className="md:w-1/3 mt-12" style={{opacity: 1}}>
            <DeepServiceSidebar />
          </div>
        </div>
      </div>
      <DeepOurGoal />
      <Footer />
    </main>
  );
}
