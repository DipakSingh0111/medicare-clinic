"use client";

import React from "react";
import Image from "next/image";
import siteData from "@/data/medicare.json";

const renderIcon = (icon: string) => {
  switch (icon) {
    case "target":
      return (
        <svg
          viewBox="0 0 48 48"
          className="w-7 h-7 stroke-[#042a4d] fill-none stroke-[2.2]"
        >
          <circle cx="24" cy="24" r="18" />
          <circle cx="24" cy="24" r="11" />
          <circle cx="24" cy="24" r="4" className="fill-[#042a4d]" />
          <path d="M35 13l7-7M37 6h5v5" strokeWidth="2.5" />
        </svg>
      );
    case "eye":
      return (
        <svg
          viewBox="0 0 48 48"
          className="w-7 h-7 stroke-[#00a859] fill-none stroke-[2.2]"
        >
          <path d="M6 24s6.5-12 18-12 18 12 18 12-6.5 12-18 12S6 24 6 24z" />
          <circle cx="24" cy="24" r="6" />
          <path d="M24 6v-3M13 10l-2-2M35 10l2-2" />
        </svg>
      );
    case "diamond":
      return (
        <svg
          viewBox="0 0 48 48"
          className="w-7 h-7 stroke-[#042a4d] fill-none stroke-[2.2]"
        >
          <path d="M12 18l12-10 12 10-12 22-12-22z" />
          <path d="M12 18h24M24 8v32M17 18l7 22M31 18l-7 22" />
          <path d="M8 12l2 2M40 12l-2 2M24 4v2" />
        </svg>
      );
    default:
      return null;
  }
};

export default function MissionVision({ data }: { data?: any }) {
  if (!data) return null;
  const { badge, description, list: items, image } = data;

  return (
    <section className="relative w-full py-10 lg:py-12 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* ── LEFT: Text Content & Cards (Span 7) ── */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="w-6 h-[2px] bg-[#00a859] rounded-full inline-block" />
            <span className="text-[13px] font-bold text-[#00a859] tracking-wider">
              {badge}
            </span>
            <span className="w-6 h-[2px] bg-[#00a859] rounded-full inline-block" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold leading-[1.15] tracking-tight mb-4">
            <span className="text-[#042a4d] block">{data.heading.main}</span>
            <span className="text-[#00a859]">{data.heading.highlight}</span>
          </h2>

          {/* Intro Description */}
          <p className="text-slate-500 text-sm sm:text-[14.5px] leading-relaxed mb-8 max-w-xl">
            {description}
          </p>

          {/* 3 Information Cards */}
          <div className="space-y-4">
            {items.map((item: any) => {
              const isVision = item.title.toLowerCase() === "vision";

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-[22px] p-5 sm:p-6 border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300 flex items-start gap-5"
                >
                  {/* Round Icon */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${
                      isVision ? "bg-[#e8f8f0]" : "bg-[#edf6fd]"
                    }`}
                  >
                    {renderIcon(item.icon)}
                  </div>

                  {/* Card Text */}
                  <div className="flex flex-col">
                    <h3
                      className={`text-[17px] font-bold mb-1.5 leading-snug ${
                        isVision ? "text-[#00a859]" : "text-[#042a4d]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-[13px] sm:text-[13.5px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT: Doctor Image With Proper Offset Background Cards ── */}
        <div className="lg:col-span-5 relative w-full flex justify-center py-10 px-6">
          <div className="relative w-full max-w-[480px]">
            {/* 1. TOP-RIGHT FADED LIGHT MINT GREEN SHAPE (Ab clearly visible hoga) */}
            <div className="absolute -top-7 -right-7 sm:-top-9 sm:-right-9 w-[60%] h-[55%] bg-[#d6f2e3] rounded-[36px] z-0 pointer-events-none" />

            {/* 2. BOTTOM-RIGHT DARK NAVY SOLID BLOCK */}
            <div className="absolute -bottom-8 -right-6 sm:-bottom-9 sm:-right-7 w-[42%] h-[40%] bg-[#042a4d] rounded-[28px] z-0 pointer-events-none" />

            {/* 3. MAIN DOCTOR IMAGE CONTAINER */}
            <div className="relative z-10 w-full aspect-[1/1.15] rounded-[34px] overflow-hidden bg-slate-100 shadow-2xl border-4 border-white">
              <Image
                src={image}
                alt="Medical Team Discussion"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
