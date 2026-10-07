import PageBanner from "@/components/common/PageBanner";
import FadeIn from "@/components/common/FadeIn";
import ContactSection from "@/components/ContactSection";
import rawData from "@/data/medicare.json";
import { MediCareTemplateData } from "@/types/medicare.types";

export default function ContactPage() {
  const templateData = rawData as unknown as MediCareTemplateData;
  const sectionData = templateData?.categories?.MediCare?.sections;

  if (!sectionData) return null;
  return (
    <main className="w-full flex flex-col">
      <FadeIn direction="none">
        <PageBanner
          title="Contact Us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        />
      </FadeIn>
      <FadeIn>
        <ContactSection data={sectionData.ContactPage?.variants?.MediCareContactPage1} />
      </FadeIn>
    </main>
  );
}
