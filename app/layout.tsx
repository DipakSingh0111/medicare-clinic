import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/common/Topbar";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Suspense } from "react";
import rawData from "@/data/medicare.json";
import { MediCareTemplateData } from "@/types/medicare.types";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "MediCare Clinic – Your Health Our Priority",
  description: "MediCare Clinic, New Delhi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const templateData = rawData as MediCareTemplateData;
  const sectionData = templateData?.categories?.MediCare?.sections;

  return (
    <html lang="en" className={`${poppins.variable} ${dmSans.variable}`}>
      <body className="font-sans text-ink bg-white antialiased">
        <header className="sticky top-0 z-50 w-full flex flex-col shadow-sm">
          <Topbar data={sectionData?.Topbar?.variants?.MediCareTopbar1} />
          <Suspense fallback={null}>
            <Navbar data={sectionData?.Header?.variants?.MediCareHeader1} />
          </Suspense>
        </header>
        {children}
        <Footer data={sectionData?.Footer?.variants?.MediCareFooter1} />
      </body>
    </html>
  );
}
