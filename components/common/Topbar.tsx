import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import headerData from "@/data/medicare.json";

export default function Topbar() {
  const { topBar } = headerData;

  return (
    <div className="w-full bg-[#043365] text-white text-[14px] py-3 sm:py-3.5 px-4 sm:px-8 md:px-14">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left: Address & Timings */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-200">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-[18px] h-[18px] text-sky-400 shrink-0" />
            <span>{topBar.address}</span>
          </div>
        </div>

        {/* Right: Phone */}
        <div className="flex items-center gap-6">
          <span className="hidden md:inline-block text-slate-400/50">|</span>
          <div className="flex items-center gap-2.5 font-medium text-slate-100 hover:text-white transition">
            <Phone className="w-[18px] h-[18px] text-sky-400 shrink-0" />
            <a href={`tel:${topBar.phone.replace(/\s+/g, "")}`}>
              {topBar.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
