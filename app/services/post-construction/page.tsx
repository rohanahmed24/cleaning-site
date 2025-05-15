import React from 'react';
import { Navbar } from "@/components/navbar";
import { PostConstructionHeroSection } from "@/components/post-construction-cleaning/hero-section";
import { PostConstructionSaveTimeSection } from "@/components/post-construction-cleaning/save-time-section";
import { PostConstructionTaskListSection } from "@/components/post-construction-cleaning/task-list-section";
import { PostConstructionServiceSidebar } from "@/components/post-construction-cleaning/service-sidebar";
import { PostConstructionCleaningProductsSection } from "@/components/post-construction-cleaning/cleaning-products-section";
import { PostConstructionQuoteForm } from "@/components/post-construction-cleaning/quote-form";
import { PostConstructionSatisfactionGuarantee } from "@/components/post-construction-cleaning/satisfaction-guarantee";
import { PostConstructionOurGoal } from "@/components/post-construction-cleaning/our-goal";
import Footer from "@/components/footer";

export default function PostConstructionPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PostConstructionHeroSection />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <PostConstructionSaveTimeSection />
            <PostConstructionTaskListSection />
            <PostConstructionCleaningProductsSection />
            <div className="flex flex-col lg:flex-row gap-8 my-16">
              <div className="lg:w-1/2">
                <PostConstructionQuoteForm />
              </div>
              <div className="lg:w-1/2">
                <PostConstructionSatisfactionGuarantee />
              </div>
            </div>
          </div>
          <div className="md:w-1/3 mt-12" style={{opacity: 1}}>
            <PostConstructionServiceSidebar />
          </div>
        </div>
      </div>
      <PostConstructionOurGoal />
      <Footer />
    </main>
  );
}
