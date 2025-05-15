import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { EcoDifference } from "@/components/eco-difference";
import { DiscountBanner } from "@/components/discount-banner";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { HowItWorks } from "@/components/how-it-works";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ReviewCardsSlider } from "@/components/review-cards-slider";
import { FaqSection } from "@/components/faq-section";
import { BookingForm } from "@/components/booking-form";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DiscountBanner />
      <HowItWorks />
      <EcoDifference />
      <TestimonialsSection />
      <ReviewCardsSlider />
      <BookingForm />
      <FaqSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
