import React from 'react';
import { Navbar } from "@/components/navbar";
import { OfficeHeroSection } from "@/components/office-cleaning/hero-section";
import { OfficeSaveTimeSection } from "@/components/office-cleaning/save-time-section";
import { OfficeTaskListSection } from "@/components/office-cleaning/task-list-section";
import { OfficeServiceSidebar } from "@/components/office-cleaning/service-sidebar";
import { OfficeCleaningProductsSection } from "@/components/office-cleaning/cleaning-products-section";
import { OfficeQuoteForm } from "@/components/office-cleaning/quote-form";
import { OfficeSatisfactionGuarantee } from "@/components/office-cleaning/satisfaction-guarantee";
import { OfficeOurGoal } from "@/components/office-cleaning/our-goal";
import Footer from "@/components/footer";

export default function OfficeCleaningPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <OfficeHeroSection />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <OfficeSaveTimeSection />
            <OfficeTaskListSection />
            <OfficeCleaningProductsSection />
            <div className="flex flex-col lg:flex-row gap-8 my-16">
              <div className="lg:w-1/2">
                <OfficeQuoteForm />
              </div>
              <div className="lg:w-1/2">
                <OfficeSatisfactionGuarantee />
              </div>
            </div>
          </div>
          <div className="md:w-1/3 mt-12" style={{opacity: 1}}>
            <OfficeServiceSidebar />
          </div>
        </div>
      </div>
      <OfficeOurGoal />
      <Footer />
    </main>
  );
}
