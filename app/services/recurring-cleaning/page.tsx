import React from 'react';
import { Navbar } from "@/components/navbar";
import { RecurringHeroSection } from "@/components/recurring-cleaning/hero-section";
import { RecurringSaveTimeSection } from "@/components/recurring-cleaning/save-time-section";
import { RecurringTaskListSection } from "@/components/recurring-cleaning/task-list-section";
import { RecurringServiceSidebar } from "@/components/recurring-cleaning/service-sidebar";
import { RecurringCleaningProductsSection } from "@/components/recurring-cleaning/cleaning-products-section";
import { RecurringQuoteForm } from "@/components/recurring-cleaning/quote-form";
import { RecurringSatisfactionGuarantee } from "@/components/recurring-cleaning/satisfaction-guarantee";
import { RecurringOurGoal } from "@/components/recurring-cleaning/our-goal";
import Footer from "@/components/footer";

export default function RecurringCleaningPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <RecurringHeroSection />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <RecurringSaveTimeSection />
            <RecurringTaskListSection />
            <RecurringCleaningProductsSection />
            <div className="flex flex-col lg:flex-row gap-8 my-16">
              <div className="lg:w-1/2">
                <RecurringQuoteForm />
              </div>
              <div className="lg:w-1/2">
                <RecurringSatisfactionGuarantee />
              </div>
            </div>
          </div>
          <div className="md:w-1/3 mt-12" style={{opacity: 1}}>
            <RecurringServiceSidebar />
          </div>
        </div>
      </div>
      <RecurringOurGoal />
      <Footer />
    </main>
  );
}
