import About from "@/components/common/AboutSection";
import PageBanner from "@/components/common/PageBanner";
import FadeIn from "@/components/common/FadeIn";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";
import rawData from "@/data/medicare.json";
import { MediCareTemplateData } from "@/types/medicare.types";

export default function ServicesPage() {
  const templateData = rawData as unknown as MediCareTemplateData;
  const sectionData = templateData?.categories?.MediCare?.sections;

  if (!sectionData) return null;
  return (
    <main className="w-full flex flex-col pb-24">
      <FadeIn direction="none">
        <PageBanner
          title="Services"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        />
      </FadeIn>
      <FadeIn>
        <Services data={sectionData.Services?.variants?.MediCareServices1} />
      </FadeIn>
      <FadeIn>
        <StatsSection data={sectionData.Stats?.variants?.MediCareStats1} />
      </FadeIn>
    </main>
  );
}
