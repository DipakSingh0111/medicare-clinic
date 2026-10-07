import AppointmentSection from "@/components/AppointmentSection";
import FadeIn from "@/components/common/FadeIn";
import PageBanner from "@/components/common/PageBanner";
import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/StatsSection";
import rawData from "@/data/medicare.json";
import { MediCareTemplateData } from "@/types/medicare.types";

export default function FaqPage() {
  const templateData = rawData as unknown as MediCareTemplateData;
  const sectionData = templateData?.categories?.MediCare?.sections;

  if (!sectionData) return null;
  return (
    <main className="w-full flex flex-col pb-24">
      <FadeIn direction="none">
        <PageBanner
          title="Book Appointment"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Book Appointment" },
          ]}
        />
      </FadeIn>
      <AppointmentSection data={sectionData.BookAppointment?.variants?.MediCareBookAppointment1} />
      <HowItWorks data={sectionData.WorkingProcess?.variants?.MediCareWorkingProcess1} />
      <StatsSection data={sectionData.Stats?.variants?.MediCareStats1} />
    </main>
  );
}
