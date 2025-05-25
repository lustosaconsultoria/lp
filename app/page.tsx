import AboutSection from "@/components/sections/AboutSection";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import LegalSupport from "@/components/sections/LegalSupport";
import StepSection from "@/components/sections/StepSection";
import { Subheadline } from "@/components/subheadline";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <StepSection />
      <AboutSection />
      <LegalSupport />
      <Faq />
    </div>
  );
}
