import About from "@/components/common/AboutSection";
import PageBanner from "@/components/common/PageBanner";
import MissionVision from "@/components/MissionVision";
import WhyChooseUs from "@/components/WhyChooseUs";
import FadeIn from "@/components/common/FadeIn";
import rawData from "@/data/medicare.json";
import { MediCareTemplateData } from "@/types/medicare.types";

export default function AboutPage() {
  const templateData = rawData as unknown as MediCareTemplateData;
  const sectionData = templateData?.categories?.MediCare?.sections;

  if (!sectionData) return null;

  return (
    <main className="w-full flex flex-col">
      <FadeIn direction="none">
        <PageBanner
          title="About Us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        />
      </FadeIn>
      <FadeIn>
        <About data={sectionData.AboutUs?.variants?.MediCareAboutUs1} />
      </FadeIn>
      <FadeIn>
        <MissionVision data={sectionData.MissionAndVision?.variants?.MediCareMissionAndVision1} />
      </FadeIn>
      <FadeIn>
        <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.MediCareWhyChooseUs1} />
      </FadeIn>
    </main>
  );
}
