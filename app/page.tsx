import HeroSection from "@/components/hero-section"
import MetricsSection from "@/components/metrics-section"
import HowItWorks from "@/components/how-it-works"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-section"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MetricsSection />
        <HowItWorks />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
