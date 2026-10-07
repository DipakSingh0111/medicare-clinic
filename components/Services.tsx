"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { ServicesData } from "@/types/medicare.types";

export default function Services({ data }: { data?: ServicesData }) {
  if (!data) return null;
  const { badge, description, list: servicesList } = data;

  return (
    <section className="relative w-full py-8 bg-white overflow-hidden select-none">
      {/* ── Background Subtle Medical Plus Icons & Dots Accent ── */}
      <div className="absolute top-8 left-6 text-sky-100/70 pointer-events-none -z-10">
        <Plus className="w-16 h-16 stroke-[4]" />
      </div>
      <div className="absolute top-20 left-16 text-sky-100/60 pointer-events-none -z-10">
        <Plus className="w-12 h-12 stroke-[4]" />
      </div>
      <div className="absolute top-12 left-32 w-16 h-16 bg-[radial-gradient(#bae6fd_2px,transparent_2px)] [background-size:8px_8px] opacity-70 -z-10" />

      <div className="absolute top-10 right-28 text-sky-100/60 pointer-events-none -z-10">
        <Plus className="w-12 h-12 stroke-[4]" />
      </div>
      <div className="absolute top-16 right-10 text-sky-100/80 pointer-events-none -z-10">
        <Plus className="w-20 h-20 stroke-[4]" />
      </div>
      <div className="absolute top-24 right-44 w-20 h-16 bg-[radial-gradient(#bae6fd_2px,transparent_2px)] [background-size:8px_8px] opacity-70 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-14">
        {/* ── Header Section (Badge, Heading, Subtitle) ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          {/* Subtitle Badge with horizontal bars */}
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#00a859] rounded-full inline-block" />
            <span className="text-[14px] font-bold text-[#00a859] tracking-wide">
              {badge}
            </span>
            <span className="w-8 h-[2px] bg-[#00a859] rounded-full inline-block" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold leading-[1.18] tracking-tight mb-4">
            <span className="text-[#073260]">{data.heading.main}</span>{" "}
            <span className="text-[#00a859]">{data.heading.highlight}</span>
          </h2>

          {/* Description */}
          <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed">
            {description}
          </p>
        </div>

        {/* ── Services Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service: any) => (
            <div
              key={service.id}
              className="bg-white rounded-[24px] border border-sky-100/80 shadow-[0_4px_20px_rgba(2,132,199,0.06)] hover:shadow-[0_12px_30px_rgba(2,132,199,0.12)] transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Card Image */}
              <div className="p-3 pb-0">
                <div className="relative w-full aspect-[1.35/1] rounded-[18px] overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[17px] font-extrabold text-[#073260] mb-2.5 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed line-clamp-3 mb-5">
                    {service.description}
                  </p>
                </div>

                {/* Read More Button with Circle Arrow */}
                <div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-[13px] font-bold text-[#00a859] group-hover:text-[#008f4c] transition-colors"
                  >
                    <span>Read More</span>
                    <span className="w-6 h-6 rounded-full bg-[#e6f7ef] flex items-center justify-center group-hover:bg-[#00a859] group-hover:text-white transition-all duration-200">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
