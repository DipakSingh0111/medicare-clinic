import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FadeIn from "@/components/common/FadeIn";

export const metadata: Metadata = {
  title: "Thank You – MediCare Clinic",
  description: "Your message has been sent successfully.",
};

const rays = [
  "M36 26l-10-10",
  "M26 60H12",
  "M36 94l-10 10",
  "M184 26l10-10",
  "M194 60h14",
  "M184 94l10 10",
];

export default function ThankYouPage() {
  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-br from-[#f4fbf9] via-white to-[#f1f8fb] py-16 sm:py-20 lg:py-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-24 top-16 h-[420px] w-[420px] rounded-full bg-[#e3f5ef] opacity-70" />
      <div className="pointer-events-none absolute -right-32 top-24 h-[480px] w-[480px] rounded-full bg-[#e8f4f8] opacity-80" />
      <div className="pointer-events-none absolute left-12 top-10 h-16 w-16 rounded-full bg-[#e8f4f8]" />
      <div className="pointer-events-none absolute right-16 bottom-10 h-14 w-14 rounded-full bg-[#e8f4f8]" />

      <svg
        viewBox="0 0 200 260"
        className="pointer-events-none absolute -left-4 bottom-0 hidden h-[280px] w-[220px] md:block"
        fill="#cdeee2"
      >
        <path d="M100 260C96 200 80 140 40 90" stroke="#bfe6d8" strokeWidth="3" fill="none" />
        <path d="M70 130C30 130 8 100 4 60c40 4 66 30 66 70z" opacity="0.8" />
        <path d="M86 180c-40 6-70-14-84-50 42-4 74 14 84 50z" opacity="0.6" />
        <path d="M60 104C58 66 72 34 104 14c12 38 0 70-44 90z" opacity="0.7" />
        <path d="M94 210c8-40 36-62 76-66-4 40-30 62-76 66z" opacity="0.6" />
      </svg>

      <div className="pointer-events-none absolute right-12 top-36 hidden grid-cols-5 gap-4 lg:grid">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#bfe3e3]" />
        ))}
      </div>

      <svg
        viewBox="0 0 160 200"
        className="pointer-events-none absolute right-10 top-1/2 hidden h-[200px] w-[160px] lg:block"
        fill="none"
      >
        <path d="M150 4C80 30 30 90 10 196" stroke="#bfe3e3" strokeWidth="2" strokeDasharray="6 8" />
      </svg>

      <FadeIn>
        <div className="relative z-10 mx-auto max-w-[640px] px-4">
          <div className="rounded-[28px] border border-slate-100 bg-white px-6 py-12 text-center shadow-[0_20px_60px_rgba(4,42,77,0.08)] sm:px-14 sm:py-14">
            {/* Success icon */}
            <div className="relative mx-auto mb-8 h-[120px] w-[120px]">
              <svg
                viewBox="0 0 220 120"
                className="absolute left-1/2 top-0 h-[120px] w-[220px] -translate-x-1/2"
                fill="none"
                stroke="#00a859"
                strokeWidth="3"
                strokeLinecap="round"
              >
                {rays.map((d) => (
                  <path key={d} d={d} />
                ))}
              </svg>
              <div className="absolute inset-0 rounded-full bg-[#e3f7ee]" />
              <div className="absolute inset-[14px] rounded-full bg-[#c9efdc]" />
              <div className="absolute inset-[24px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#16b86a] to-[#00a050] shadow-[0_8px_20px_rgba(0,168,89,0.35)]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-10 w-10"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </div>
            </div>

            <h1 className="mb-4 text-5xl font-extrabold tracking-tight sm:text-6xl">
              <span className="text-[#042a4d]">Thank</span>{" "}
              <span className="text-[#00a859]">You!</span>
            </h1>

            <h2 className="mb-5 text-lg font-semibold text-[#042a4d] sm:text-[22px]">
              Your Message Has Been Sent Successfully
            </h2>

            <p className="mx-auto mb-9 max-w-[480px] text-[15px] leading-relaxed text-slate-500 sm:text-base">
              We appreciate you reaching out to us. Our team will get back to you as soon as
              possible. Your health and queries are important to us.
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-lg bg-[#00a859] px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(0,168,89,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#009a51]"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
