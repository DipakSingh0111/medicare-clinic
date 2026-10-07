"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Plus } from "lucide-react";
import siteData from "@/data/medicare.json";

export default function TeamSection({ limit }: { limit?: number }) {
  const { doctorsSection } = siteData;
  const { badge, titlePrefix, titleSuffix, description, doctorsList } =
    doctorsSection;

  const displayDoctors = limit ? doctorsList.slice(0, limit) : doctorsList;

  return (
    <section className="relative w-full pt-16 pb-10 lg:pt-24 lg:pb-14 bg-white overflow-hidden select-none">
      {/* ── Background Soft Plus & Dot Accents ── */}
      <div className="absolute top-10 left-6 text-sky-100/70 pointer-events-none -z-10">
        <Plus className="w-16 h-16 stroke-[3.5]" />
      </div>
      <div className="absolute top-16 left-36 w-20 h-16 bg-[radial-gradient(#bae6fd_2px,transparent_2px)] [background-size:8px_8px] opacity-70 -z-10" />

      <div className="absolute top-10 right-8 text-sky-100/70 pointer-events-none -z-10">
        <Plus className="w-16 h-16 stroke-[3.5]" />
      </div>
      <div className="absolute bottom-12 right-6 w-20 h-16 bg-[radial-gradient(#bae6fd_2px,transparent_2px)] [background-size:8px_8px] opacity-70 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-14">
        {/* ── Heading Header Area ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-[2px] bg-[#00a859] rounded-full inline-block" />
            <span className="text-[14px] font-bold text-[#00a859] tracking-wide">
              {badge}
            </span>
            <span className="w-8 h-[2px] bg-[#00a859] rounded-full inline-block" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold leading-[1.18] tracking-tight mb-4">
            <span className="text-[#073260]">{titlePrefix}</span>{" "}
            <span className="text-[#00a859]">{titleSuffix}</span>
          </h2>

          {/* Sub-text */}
          <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed">
            {description}
          </p>
        </div>

        {/* ── Doctors Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayDoctors.map((doctor: any) => (
            <div
              key={doctor.id}
              className="group relative rounded-[26px] bg-white border-2 border-slate-100 hover:border-[#073260] hover:shadow-[0_16px_36px_rgba(7,50,96,0.18)] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Doctor Image Container */}
              <div className="p-3 pb-0">
                <div className="relative w-full aspect-[1/1.05] rounded-[20px] overflow-hidden bg-slate-100">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Hover Par Aane Wala "Appointment Now" Cyan Button */}
                  <div className="absolute inset-x-3 bottom-3 z-10 flex justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <Link
                      href={doctor.appointmentLink}
                      className="w-full py-2.5 px-4 bg-[#00b4d8] hover:bg-[#0096c7] text-white text-[13px] font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg transition-colors"
                    >
                      <Calendar className="w-4 h-4 stroke-[2.2]" />
                      <span>Appointment Now</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom Info Area: Normal white, Hover par Navy Blue */}
              <div className="p-5 flex items-center justify-between transition-colors duration-300 group-hover:bg-[#073260]">
                {/* Doctor Name & Specialty */}
                <div>
                  <h3 className="text-[17px] font-bold text-[#073260] group-hover:text-white transition-colors duration-300 leading-snug">
                    {doctor.name}
                  </h3>
                  <p className="text-[13px] font-medium text-[#0090ff] group-hover:text-slate-300 transition-colors duration-300">
                    {doctor.specialty}
                  </p>
                </div>

                {/* Arrow Button */}
                <Link
                  href={doctor.appointmentLink}
                  aria-label={`View ${doctor.name} profile`}
                  className="w-9 h-9 rounded-xl bg-[#073260] group-hover:bg-white text-white group-hover:text-[#073260] flex items-center justify-center transition-all duration-300 shrink-0 shadow-sm"
                >
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
