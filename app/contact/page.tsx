import PageBanner from "@/components/common/PageBanner";
import FadeIn from "@/components/common/FadeIn";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <main className="w-full flex flex-col">
      <FadeIn direction="none">
        <PageBanner
          title="Contact Us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        />
      </FadeIn>
      <FadeIn>
        <ContactSection />
      </FadeIn>
    </main>
  );
}
