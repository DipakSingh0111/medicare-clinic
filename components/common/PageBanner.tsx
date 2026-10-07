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

      {/* Social Icons (Right) */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#00a859] transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
          </svg>
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#00a859] transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#00a859] transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        </a>
        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#00a859] transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3L10 15z" />
          </svg>
        </a>
      </div>

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
            href="tel:0000000000"
            className="flex items-center gap-3 bg-[#00c9c9] hover:bg-[#00b0b0] text-white px-6 py-[14px] rounded-full transition-colors relative z-10"
          >
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shrink-0">
              <Phone className="w-[18px] h-[18px] text-[#073260] fill-current" />
            </div>
            <span className="font-semibold text-[17px] tracking-wide pr-2">
              00000 00000
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
