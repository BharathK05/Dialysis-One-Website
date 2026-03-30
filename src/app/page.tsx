import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureBento from "@/components/FeatureBento";
import AccessibilitySection from "@/components/AccessibilitySection";
import PrivacySection from "@/components/PrivacySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-vitality-cyan selection:text-white">
      <Navbar />
      
      {/* Background Gradient Mesh is handled globally in globals.css */}
      
      <div className="relative z-10 flex flex-col gap-12 sm:gap-24 overflow-x-hidden">
        <HeroSection />
        <FeatureBento />
        <AccessibilitySection />
        <PrivacySection />
      </div>

      <Footer />
    </main>
  );
}
