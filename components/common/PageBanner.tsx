import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Phone } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export default function PageBanner({
  title,
  breadcrumbs,
  bgImage = "/images/medicare_01.jpg",
}: PageBannerProps) {
  return (
    <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden flex items-center justify-center font-sans select-none">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Banner Background"
        fill
        sizes="100vw"
        className="object-cover object-top"
        priority
      />

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-[#073260]/85" />



      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-[-20px]">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-sm">
          {title}
        </h1>
        <div className="flex items-center justify-center text-[15px] font-bold">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && (
                <ChevronRight className="w-4 h-4 mx-2 text-white stroke-[3]" />
              )}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="text-[#00c5c5] hover:text-white transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Floating Bottom Right Phone Badge */}
      <div className="absolute bottom-0 right-6 sm:right-16 md:right-32 lg:right-48 z-20 flex items-end">
        {/* Left Inverted Curve */}
        <svg
          className="w-8 h-8 text-white translate-x-[1px]"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path d="M32 32V0C32 17.673 17.673 32 0 32H32Z" />
        </svg>

        <div className="bg-white px-3 pt-3 pb-0 rounded-t-[40px] relative">
          <a
            href="tel:+10000000000"
            className="flex items-center gap-3 bg-[#00c9c9] hover:bg-[#00b0b0] text-white px-6 py-[14px] rounded-full transition-colors relative z-10"
          >
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shrink-0">
              <Phone className="w-[18px] h-[18px] text-[#073260] fill-current" />
            </div>
            <span className="font-semibold text-[17px] tracking-wide pr-2">
              +1 00000 00000
            </span>
          </a>
        </div>

        {/* Right Inverted Curve */}
        <svg
          className="w-8 h-8 text-white -translate-x-[1px]"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path d="M0 32V0C0 17.673 14.327 32 32 32H0Z" />
        </svg>
      </div>
    </div>
  );
}
