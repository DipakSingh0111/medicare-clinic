import PageBanner from "@/components/common/PageBanner";
import FadeIn from "@/components/common/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import siteData from "@/data/medicare.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { servicesSection } = siteData;
  const { servicesList } = servicesSection;

  return servicesList.map((service: any) => ({
    slug: service.link.replace("/services/", ""),
  }));
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { servicesSection } = siteData;
  const { servicesList } = servicesSection;

  const service = servicesList.find(
    (s: any) =>
      s.link === `/services/${slug}` ||
      s.slug === slug ||
      s.title.toLowerCase().replace(/\s+/g, "-") === slug,
  );

  if (!service) {
    return notFound();
  }

  const details = (service as any).details || {
    overview:
      service.description ||
      `Our specialized ${service.title.toLowerCase()} program offers innovative treatments, cutting-edge technology, and personalized care plans to ensure the best possible outcomes. We are dedicated to providing comprehensive support from diagnosis to recovery.`,
    overviewImage:
      service.image ||
      "/images/medicare_12.jpg",
    keyServicesTitle: `Key offerings in ${service.title}`,
    keyServices: [
      {
        title: "Specialized care:",
        description:
          `Advanced therapies and personalized treatments specifically for ${service.title.toLowerCase()}.`,
      },
      {
        title: "Expert consultation:",
        description:
          "Comprehensive care plans designed by our experienced medical professionals.",
      },
      {
        title: "Preventative measures:",
        description:
          "Regular screenings and wellness programs to maintain optimal health.",
      },
      {
        title: "Ongoing support:",
        description:
          "Continuous monitoring and follow-up care tailored to individual needs.",
      },
    ],
    advancedCareTitle: `Why choose our ${service.title}?`,
    advancedCare: [
      {
        title: "Technology and facilities:",
        description:
          "We use state-of-the-art equipment and telemedicine platforms to deliver exceptional care.",
      },
      {
        title: "Patient-centered approach:",
        description:
          "Every patient receives a customized treatment plan created by a multidisciplinary team.",
      },
      {
        title: "Collaborative care team:",
        description:
          "Our dedicated team includes experienced physicians, therapists, and support staff.",
      },
    ],
    advancedCareImage:
      "/images/medicare_13.jpg",
    additionalInfoTitle: `More about ${service.title}`,
    additionalInfo: [
      {
        title: "Commitment to quality care:",
        description:
          "We focus on delivering evidence-based medical practices to ensure every patient receives the highest standard of care.",
      },
      {
        title: "Focus on holistic healing:",
        description:
          "Beyond treating physical ailments, we address emotional and mental well-being.",
      },
    ],
  };

  return (
    <main className="w-full flex flex-col pb-24">
      <FadeIn direction="none">
        <PageBanner
          title={service.title}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: service.title }]}
        />
      </FadeIn>

      <div className="container mx-auto px-4 md:px-8 mt-16 max-w-7xl flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <div className="w-full lg:w-1/3 xl:w-[30%] shrink-0">
          <div className="bg-[#073260] rounded-xl overflow-hidden p-6 lg:p-8 sticky top-24">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-6">
              Popular Services
            </h3>
            <ul className="flex flex-col gap-3">
              {servicesList.map((s: any, i: number) => {
                const linkHref =
                  s.link === "/service-details"
                    ? `/services/${s.title.toLowerCase().replace(/\s+/g, "-")}`
                    : s.link;

                return (
                  <li key={i}>
                    <Link
                      href={linkHref}
                      className={`w-full flex items-center justify-between bg-white px-5 py-4 text-[14px] md:text-[15px] font-medium transition-colors rounded ${
                        service.id === s.id
                          ? "text-[#00c9c9] shadow-sm"
                          : "text-gray-700 hover:text-[#00c9c9]"
                      }`}
                    >
                      {s.title}
                      <ArrowRight
                        className={`w-4 h-4 ${service.id === s.id ? "text-[#00c9c9]" : "text-gray-400"}`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-2/3 xl:w-[70%] flex flex-col gap-12 text-gray-600 text-[15px] md:text-[16px]">
          <section>
            <h2 className="text-[#073260] text-3xl md:text-4xl font-extrabold mb-6">
              Overview of services
            </h2>
            <p className="leading-relaxed mb-8">{details.overview}</p>
            <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden">
              <Image
                src={details.overviewImage}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section>
            <h2 className="text-[#073260] text-3xl md:text-4xl font-extrabold mb-6">
              {details.keyServicesTitle}
            </h2>
            <div className="flex flex-col gap-6">
              {details.keyServices.map((item: any, i: number) => (
                <div key={i}>
                  <h4 className="font-bold text-[#073260] mb-2">
                    {item.title}
                  </h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[#073260] text-3xl md:text-4xl font-extrabold mb-6">
              {details.advancedCareTitle}
            </h2>
            <div className="flex flex-col gap-6 mb-8">
              {details.advancedCare.map((item: any, i: number) => (
                <div key={i}>
                  <h4 className="font-bold text-[#073260] mb-2">
                    {item.title}
                  </h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden">
              <Image
                src={details.advancedCareImage}
                alt={`${service.title} Details`}
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section>
            <h2 className="text-[#073260] text-3xl md:text-4xl font-extrabold mb-6">
              {details.additionalInfoTitle}
            </h2>
            <div className="flex flex-col gap-6">
              {details.additionalInfo.map((item: any, i: number) => (
                <div key={i}>
                  <h4 className="font-bold text-[#073260] mb-2">
                    {item.title}
                  </h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
