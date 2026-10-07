import About from "@/components/common/AboutSection";
import PageBanner from "@/components/common/PageBanner";
import FadeIn from "@/components/common/FadeIn";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";

export default function ServicesPage() {
  return (
    <main className="w-full flex flex-col pb-24">
      <FadeIn direction="none">
        <PageBanner
          title="Services"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        />
      </FadeIn>
      <FadeIn>
        <Services />
      </FadeIn>
      <FadeIn>
        <StatsSection />
      </FadeIn>
    </main>
  );
}
