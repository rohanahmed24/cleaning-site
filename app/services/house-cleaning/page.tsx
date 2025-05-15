import React from 'react';
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/house-cleaning/hero-section";
import { SaveTimeSection } from "@/components/house-cleaning/save-time-section";
import { TaskListSection } from "@/components/house-cleaning/task-list-section";
import { ServiceSidebar } from "@/components/house-cleaning/service-sidebar";
import { CleaningProductsSection } from "@/components/house-cleaning/cleaning-products-section";
import { QuoteForm } from "@/components/house-cleaning/quote-form";
import { SatisfactionGuarantee } from "@/components/house-cleaning/satisfaction-guarantee";
import { OurGoal } from "@/components/house-cleaning/our-goal";
import Footer from "@/components/footer";

export default function HouseCleaningPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <SaveTimeSection />
            <TaskListSection />
            <CleaningProductsSection />
            <div className="flex flex-col lg:flex-row gap-8 my-16">
              <div className="lg:w-1/2">
                <QuoteForm />
              </div>
              <div className="lg:w-1/2">
                <SatisfactionGuarantee />
              </div>
            </div>
          </div>
          <div className="md:w-1/3 mt-12">
            <ServiceSidebar />
          </div>
        </div>
      </div>
      <OurGoal />
      <Footer />
    </main>
  );
}
