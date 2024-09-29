import ComingUp from "@/components/ComingUp";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <CTASection
        title="Symptom Analyzer"
        description="Analyze your symptoms and get a list of possible conditions and recommended actions."
        ctaLink="/symptom-analyzer"
        ctaText="Get started"
        image="/images/symptomDetection.webp"
        key={1}
      />

      <CTASection
        title="Diabetic Retnoapthy Detection"
        description="Upload an image of your eye and get a prediction of whether you have diabetic retinopathy."
        ctaLink="/diabetic-eye-detection"
        ctaText="Get started"
        image="/images/diabeticAnalyzer.webp"
        right
        key={2}
      />

      <ComingUp />

      <FAQSection />
      <Footer />
    </>
  );
}
