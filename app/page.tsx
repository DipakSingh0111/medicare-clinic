import About from "@/components/common/AboutSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import FadeIn from "@/components/common/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <FadeIn direction="none">
        <HeroSection />
      </FadeIn>
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Services />
      </FadeIn>
      <FadeIn>
        <StatsSection />
      </FadeIn>
      <FadeIn>
        <TeamSection limit={4} />
      </FadeIn>
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <FadeIn>
        <FAQSection />
      </FadeIn>
    </div>
  );
}
