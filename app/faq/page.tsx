import PageBanner from "@/components/common/PageBanner";
import FadeIn from "@/components/common/FadeIn";

import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";

export default function FaqPage() {
  return (
    <main className="w-full flex flex-col pb-24">
      <FadeIn direction="none">
        <PageBanner
          title="FAQ"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        />
      </FadeIn>
      <FadeIn>
        <FAQSection />
      </FadeIn>
      <FadeIn>
        <StatsSection />
      </FadeIn>
    </main>
  );
}
