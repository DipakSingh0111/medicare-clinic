import AppointmentSection from "@/components/AppointmentSection";
import FadeIn from "@/components/common/FadeIn";
import PageBanner from "@/components/common/PageBanner";
import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/StatsSection";

export default function FaqPage() {
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
      <AppointmentSection />
      <HowItWorks />
      <StatsSection />
    </main>
  );
}
