"use client";

import React from "react";
import Image from "next/image";
import siteData from "@/data/medicare.json";

// Vector icons matching the exact style from the screenshot
const renderCardIcon = (icon: string, color: string) => {
  const isGreen = color === "green";
  const strokeColor = isGreen ? "#00a859" : "#0284c7";

  switch (icon) {
    case "users":
      return (
        <svg
          viewBox="0 0 48 48"
          className="w-6 h-6 stroke-[2.2] fill-none"
          stroke={strokeColor}
        >
          <circle cx="24" cy="14" r="5" />
          <path d="M14 36v-3a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v3" />
          <circle cx="12" cy="18" r="4" />
          <path d="M6 34v-2a5 5 0 0 1 5-5h1" />
          <circle cx="36" cy="18" r="4" />
          <path d="M42 34v-2a5 5 0 0 0-5-5h-1" />
        </svg>
      );
    case "cross-hand":
      return (
        <svg
          viewBox="0 0 48 48"
          className="w-6 h-6 stroke-[2.2] fill-none"
          stroke={strokeColor}
        >
          <path d="M24 8v10M19 13h10" />
          <rect x="17" y="6" width="14" height="14" rx="3" />
          <path d="M12 36l8-4a6 6 0 0 1 5 0l11 5" />
          <path d="M10 26l7 4 7-3" />
        </svg>
      );
    case "hospital":
      return (
        <svg
          viewBox="0 0 48 48"
          className="w-6 h-6 stroke-[2.2] fill-none"
          stroke={strokeColor}
        >
          <rect x="12" y="10" width="24" height="30" rx="3" />
          <path d="M6 22h6v18H6zM36 22h6v18h-6z" />
          <path d="M20 18h8M24 14v8" strokeWidth="2.5" />
          <circle cx="18" cy="28" r="1.5" className="fill-current" />
          <circle cx="30" cy="28" r="1.5" className="fill-current" />
          <rect x="21" y="32" width="6" height="8" rx="1" />
        </svg>
      );
    case "heart":
      return (
        <svg
          viewBox="0 0 48 48"
          className="w-6 h-6 stroke-[2.2] fill-none"
          stroke={strokeColor}
        >
          <path d="M24 38s-13-8-13-17a7 7 0 0 1 12-4.5L24 18l1-1.5A7 7 0 0 1 37 21c0 9-13 17-13 17z" />
          <path
            d="M16 23h4l2-3 3 6 2-3h5"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg
          viewBox="0 0 48 48"
          className="w-6 h-6 stroke-[2.2] fill-none"
          stroke={strokeColor}
        >
          <path d="M24 6l14 5v11c0 10-6.5 17-14 20-7.5-3-14-10-14-20V11l14-5z" />
          <path
            d="M18 24l4 4 8-8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "hand-heart":
      return (
        <svg
          viewBox="0 0 48 48"
          className="w-6 h-6 stroke-[2.2] fill-none"
          stroke={strokeColor}
        >
          <circle cx="20" cy="14" r="3" />
          <circle cx="28" cy="14" r="3" />
          <path d="M14 24a5 5 0 0 1 9-2 5 5 0 0 1 9 2c0 4-6 8-9 10-3-2-9-6-9-10z" />
          <path d="M10 32l10 4 10-3 8 4" />
        </svg>
      );
    default:
      return null;
  }
};

export default function WhyChooseUs() {
  const { whyChooseUsSection } = siteData;
  const {
    badge,
    titlePrefix,
    titleSuffix,
    description,
    doctorImage,
    features,
  } = whyChooseUsSection;

  return (
    <section className="relative w-full py-10 lg:py-12 bg-white overflow-hidden select-none">
      {/* Background Soft Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ecf9fb]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* ── LEFT: Doctor with Patient Image + Navy & Green Blocks (Span 4) ── */}
        <div className="lg:col-span-4 relative flex justify-center py-6 px-4">
          <div className="relative w-full max-w-[360px] lg:max-w-none">
            {/* 1. TOP-LEFT SOLID NAVY BLOCK */}
            <div className="absolute -top-6 -left-6 w-[55%] h-[45%] bg-[#042a4d] rounded-[28px] z-0 pointer-events-none" />

            {/* 2. BOTTOM-RIGHT SOLID EMERALD GREEN BLOCK */}
            <div className="absolute -bottom-6 -right-5 w-[48%] h-[38%] bg-[#00a859] rounded-[26px] z-0 pointer-events-none" />

            {/* 3. MAIN PATIENT & DOCTOR IMAGE */}
            <div className="relative z-10 w-full aspect-[1/1.22] rounded-[30px] overflow-hidden bg-slate-100 shadow-2xl border-4 border-white">
              <Image
                src={doctorImage}
                alt="Doctor with Elderly Patient"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 34vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* ── RIGHT: Headings & 6 Feature Cards Grid (Span 8) ── */}
        <div className="lg:col-span-8 flex flex-col">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#00a859] rounded-full inline-block" />
            <span className="text-[13px] font-bold text-[#00a859] tracking-wider uppercase">
              {badge}
            </span>
            <span className="w-6 h-[2px] bg-[#00a859] rounded-full inline-block" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold leading-[1.18] tracking-tight mb-4">
            <span className="text-[#042a4d]">{titlePrefix}</span>{" "}
            <span className="text-[#00a859]">{titleSuffix}</span>
          </h2>

          {/* Intro Paragraph */}
          <p className="text-slate-500 text-sm sm:text-[14.5px] leading-relaxed mb-10 max-w-2xl">
            {description}
          </p>

          {/* 6 Feature Cards Grid (3 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((item: any) => {
              const isGreen = item.iconColor === "green";

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-[22px] p-6 border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_32px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
                >
                  {/* Circular Icon Container */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-transform ${
                      isGreen ? "bg-[#e8f8f0]" : "bg-[#eaf4fd]"
                    }`}
                  >
                    {renderCardIcon(item.icon, item.iconColor)}
                  </div>

                  {/* Title */}
                  <h3 className="text-[16px] font-bold text-[#042a4d] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-[12.5px] sm:text-[13px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
