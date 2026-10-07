import About from "@/components/common/AboutSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import FadeIn from "@/components/common/FadeIn";
import rawData from "@/data/medicare.json";
import { MediCareTemplateData } from "@/types/medicare.types";

export default function Home() {
  const templateData: MediCareTemplateData = rawData as MediCareTemplateData;
  const sectionData = templateData?.categories?.MediCare?.sections;

  if (!sectionData) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-0">
      <FadeIn direction="none">
        <HeroSection data={sectionData.HeroBanner?.variants?.MediCareHeroBanner1} />
      </FadeIn>
      <FadeIn>
        <About data={sectionData.AboutUs?.variants?.MediCareAboutUs1} />
      </FadeIn>
      <FadeIn>
        <Services data={sectionData.Services?.variants?.MediCareServices1 as any} />
      </FadeIn>
      <FadeIn>
        <StatsSection data={sectionData.Stats?.variants?.MediCareStats1 as any} />
      </FadeIn>
      <FadeIn>
        <TeamSection limit={4} data={sectionData.Team?.variants?.MediCareTeam1 as any} />
      </FadeIn>
      <FadeIn>
        <Testimonials data={sectionData.Testimonials?.variants?.MediCareTestimonials1 as any} />
      </FadeIn>
      <FadeIn>
        <FAQSection data={sectionData.Faq?.variants?.MediCareFaq1 as any} />
      </FadeIn>
    </div>
  );
}
