import PageBanner from "@/components/common/PageBanner";
import FadeIn from "@/components/ui/FadeIn";
import TeamSection from "@/components/team/TeamSection";
import rawData from "@/data/medicare.json";
import { MediCareTemplateData } from "@/types/medicare.types";

export default function TeamPage() {
  const templateData = rawData as unknown as MediCareTemplateData;
  const sectionData = templateData?.categories?.MediCare?.sections;

  if (!sectionData) return null;
  return (
    <main className="w-full flex flex-col">
      <FadeIn direction="none">
        <PageBanner
          title="Team"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Team" }]}
        />
      </FadeIn>
      <FadeIn>
        <TeamSection data={sectionData.Team?.variants?.MediCareTeam1} />
      </FadeIn>
    </main>
  );
}
