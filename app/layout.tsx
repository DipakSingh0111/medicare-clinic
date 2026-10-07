import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/common/Topbar";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Suspense } from "react";

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
  return (
    <html lang="en" className={`${poppins.variable} ${dmSans.variable}`}>
      <body className="font-sans text-ink bg-white antialiased">
        <header className="sticky top-0 z-50 w-full flex flex-col shadow-sm">
          <Topbar />
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
