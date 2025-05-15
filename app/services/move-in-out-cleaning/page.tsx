import React from 'react';
import { Navbar } from "@/components/navbar";
import { MoveInOutHeroSection } from "@/components/move-in-out-cleaning/hero-section";
import { MoveInOutSaveTimeSection } from "@/components/move-in-out-cleaning/save-time-section";
import { MoveInOutTaskListSection } from "@/components/move-in-out-cleaning/task-list-section";
import { MoveInOutServiceSidebar } from "@/components/move-in-out-cleaning/service-sidebar";
import { MoveInOutCleaningProductsSection } from "@/components/move-in-out-cleaning/cleaning-products-section";
import { MoveInOutQuoteForm } from "@/components/move-in-out-cleaning/quote-form";
import { MoveInOutSatisfactionGuarantee } from "@/components/move-in-out-cleaning/satisfaction-guarantee";
import { MoveInOutOurGoal } from "@/components/move-in-out-cleaning/our-goal";
import Footer from "@/components/footer";

export default function MoveInOutCleaningPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <MoveInOutHeroSection />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <MoveInOutSaveTimeSection />
            <MoveInOutTaskListSection />
            <MoveInOutCleaningProductsSection />
            <div className="flex flex-col lg:flex-row gap-8 my-16">
              <div className="lg:w-1/2">
                <MoveInOutQuoteForm />
              </div>
              <div className="lg:w-1/2">
                <MoveInOutSatisfactionGuarantee />
              </div>
            </div>
          </div>
          <div className="md:w-1/3 mt-12">
            <MoveInOutServiceSidebar />
          </div>
        </div>
      </div>
      <MoveInOutOurGoal />
      <Footer />
    </main>
  );
}
