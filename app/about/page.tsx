import About from "@/components/common/AboutSection";
import PageBanner from "@/components/common/PageBanner";
import MissionVision from "@/components/MissionVision";
import WhyChooseUs from "@/components/WhyChooseUs";
import FadeIn from "@/components/common/FadeIn";

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col">
      <FadeIn direction="none">
        <PageBanner
          title="About Us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        />
      </FadeIn>
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <MissionVision />
      </FadeIn>
      <FadeIn>
        <WhyChooseUs />
      </FadeIn>
    </main>
  );
}
