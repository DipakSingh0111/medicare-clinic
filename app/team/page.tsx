import PageBanner from "@/components/common/PageBanner";
import FadeIn from "@/components/common/FadeIn";
import TeamSection from "@/components/TeamSection";

export default function TeamPage() {
  return (
    <main className="w-full flex flex-col">
      <FadeIn direction="none">
        <PageBanner
          title="Team"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Team" }]}
        />
      </FadeIn>
      <FadeIn>
        <TeamSection />
      </FadeIn>
    </main>
  );
}
