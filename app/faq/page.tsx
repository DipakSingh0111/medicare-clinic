import PageBanner from "@/components/common/PageBanner";
import FadeIn from "@/components/common/FadeIn";


import FAQSection from "@/components/FAQSection";
import rawData from "@/data/medicare.json";
import { MediCareTemplateData } from "@/types/medicare.types";

export default function FaqPage() {
  const templateData = rawData as unknown as MediCareTemplateData;
  const sectionData = templateData?.categories?.MediCare?.sections;

  if (!sectionData) return null;
  return (
    <main className="w-full flex flex-col">
      <FadeIn direction="none">
        <PageBanner
          title="FAQ"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        />
      </FadeIn>
      <FadeIn>
        <FAQSection data={sectionData.Faq?.variants?.MediCareFaq1} />
      </FadeIn>

    </main>
  );
}
