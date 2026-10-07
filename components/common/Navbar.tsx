"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { HeaderData } from "@/types/medicare.types";

export default function Navbar({ data }: { data?: HeaderData }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  if (!data) return null;
  const { menu: navLinks, cta: ctaButton } = data;

  return (
    <nav className="w-full bg-white shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-14 py-5 sm:py-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo (1).png"
            alt="MediCare Clinic Logo"
            width={320}
            height={80}
            className="w-auto h-16 md:h-[68px] object-contain"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-base font-semibold">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`group relative py-2 transition-all duration-300 ${
                  isActive
                    ? "text-[#0070ba]"
                    : "text-[#2d3748] hover:text-[#0070ba]"
                }`}
              >
                {link.label}
                {/* Animated Indicator Underline */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-[#0070ba] rounded-full transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href={ctaButton.href}
            className="hidden sm:inline-flex items-center gap-2.5 bg-[#043365] hover:bg-[#032347] text-white px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-lg text-[14px] sm:text-[15px] font-semibold transition-all duration-200 shadow-sm hover:shadow"
          >
            <span>{ctaButton.label}</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden p-2 text-[#043365] hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[100%] left-0 w-full bg-white border-b border-slate-100 shadow-lg flex flex-col py-4 px-6 z-50 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3 text-[16px] font-semibold border-b border-slate-50 last:border-none transition-colors ${
                  isActive ? "text-[#0070ba]" : "text-[#2d3748]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          
          {/* Mobile CTA Button */}
          <Link
            href={ctaButton.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="sm:hidden mt-4 inline-flex items-center justify-center gap-2 bg-[#043365] hover:bg-[#032347] text-white px-6 py-3.5 rounded-lg text-[15px] font-semibold shadow-sm"
          >
            <span>{ctaButton.label}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      )}
    </nav>
  );
}
