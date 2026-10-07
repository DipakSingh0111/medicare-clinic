import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import FadeIn from "@/components/common/FadeIn";

export default function ThankYouPage() {
  return (
    <main className="w-full min-h-[70vh] flex items-center justify-center bg-slate-50/50 py-20 relative overflow-hidden select-none">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#00a859]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#073260]/5 rounded-full blur-3xl" />
      
      {/* Dot Pattern (Top Right) */}
      <div className="absolute top-1/4 right-[15%] grid grid-cols-4 gap-2 opacity-10">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-[#00a859]" />
        ))}
      </div>
      
      {/* Dot Pattern (Bottom Left) */}
      <div className="absolute bottom-1/4 left-[15%] grid grid-cols-4 gap-2 opacity-10">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-[#073260]" />
        ))}
      </div>

      <FadeIn direction="up">
        <div className="relative z-10 bg-white rounded-[40px] shadow-[0_15px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 max-w-2xl w-full mx-4 px-8 py-16 flex flex-col items-center text-center">
          
          {/* Animated Checkmark Icon */}
          <div className="relative mb-10">
            {/* Outer rings */}
            <div className="absolute inset-0 bg-[#00a859]/20 rounded-full animate-ping opacity-20" style={{ animationDuration: '3s' }} />
            <div className="absolute -inset-4 border-2 border-[#00a859]/20 rounded-full border-dashed animate-spin-slow" style={{ animationDuration: '15s' }} />
            
            {/* Main Circle */}
            <div className="relative w-28 h-28 bg-[#00a859] rounded-full flex items-center justify-center shadow-lg shadow-[#00a859]/30">
              <Check className="w-14 h-14 text-white stroke-[3]" />
            </div>

            {/* Sparkles / Lines */}
            <div className="absolute top-0 right-[-10px] w-4 h-1 bg-[#00a859]/40 rounded-full rotate-45" />
            <div className="absolute top-[-10px] left-0 w-4 h-1 bg-[#00a859]/40 rounded-full -rotate-45" />
            <div className="absolute bottom-[20px] left-[-20px] w-5 h-1 bg-[#00a859]/40 rounded-full" />
            <div className="absolute bottom-[20px] right-[-20px] w-5 h-1 bg-[#00a859]/40 rounded-full" />
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 tracking-tight">
            <span className="text-[#073260]">Thank </span>
            <span className="text-[#00a859]">You!</span>
          </h1>

          {/* Subheading */}
          <h2 className="text-xl md:text-2xl font-bold text-[#073260] mb-6">
            Your Message Has Been Sent Successfully
          </h2>

          {/* Message text */}
          <p className="text-slate-500 text-[15px] md:text-[17px] leading-relaxed max-w-lg mb-10 font-medium">
            We appreciate you reaching out to us. Our team will get back
            to you as soon as possible. Your health and queries are
            important to us.
          </p>

          {/* Button */}
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 bg-[#00a859] hover:bg-[#008f4c] text-white text-[16px] font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-[#00a859]/20 hover:shadow-xl hover:-translate-y-1"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
            Back to Home
          </Link>
        </div>
      </FadeIn>
    </main>
  );
}
