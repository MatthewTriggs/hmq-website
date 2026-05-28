"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const HERO_IMAGE = "/images/hero-bg.jpg";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headingRef.current, subRef.current, ctaRef.current, barRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      setTimeout(() => {
        if (!el) return;
        el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 300 + i * 160);
    });
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = (el as HTMLElement).offsetTop - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Background image layer */}
      <div className="absolute inset-0 z-0 bg-[#0D0D0D]">
        <Image
          src={HERO_IMAGE}
          alt="HMQ engineered system in active mining operation"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Multi-layer gradient overlay for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.05) 30%, rgba(13,13,13,0.45) 65%, rgba(13,13,13,0.97) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(92deg, rgba(13,13,13,0.65) 0%, rgba(13,13,13,0.0) 55%)",
          }}
        />
      </div>

      {/* Fallback grid (shows if no image) */}
      <div className="absolute inset-0 z-0 bg-grid opacity-40" />

      {/* Radial gold glow */}
      <div
        className="absolute top-0 left-1/3 w-[500px] h-[300px] pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(200,146,42,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content — bottom-anchored like their site */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-28 pt-48">
        {/* Kicker */}
        <div className="flex items-center gap-3 mb-7">
          <span className="w-8 h-px bg-[#C8922A]" />
          <span
            className="text-[11px] tracking-[0.28em] text-white/85 uppercase"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            HMQ Group · Gauteng, ZA
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headingRef}
          className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.92] tracking-tight text-white mb-9"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Mine-grade.
          <br />
          <span className="text-gold-gradient font-semibold">
            Nothing less.
          </span>
        </h1>

        {/* Sub */}
        <div ref={subRef}>
          <p
            className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-[540px]"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            We design, build and support the hardware, drawings and data tools
            that keep mining and high-grade industrial operations running.
            Engineered to outlast the environment they&rsquo;re deployed in.
          </p>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-wrap gap-4 mb-20">
          <button
            onClick={() => scrollTo("#capabilities")}
            className="px-8 py-3.5 bg-[#C8922A] text-[#0D0D0D] text-sm font-semibold tracking-wider uppercase hover:bg-[#DBA84A] transition-colors duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            What We Build
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3.5 border border-white/25 text-white text-sm font-medium tracking-wider uppercase hover:border-[#C8922A] hover:text-[#C8922A] transition-all duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Brief Us on a Project
          </button>
        </div>

        {/* Bottom info bar */}
        <div
          ref={barRef}
          className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10"
        >
          <div className="flex items-center gap-3">
            <span
              className="w-2 h-2 rounded-full bg-[#C8922A] shadow-[0_0_8px_#C8922A]"
              style={{ animation: "pulse 2s ease infinite" }}
            />
            <span
              className="text-[11px] tracking-[0.22em] text-white/80 uppercase"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Active on 10+ sites
            </span>
          </div>
          <span
            className="text-[11px] tracking-[0.22em] text-white/50 uppercase hidden sm:block"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Proud Level 4 B-BBEE Contributor
          </span>
          <button
            onClick={() => scrollTo("#capabilities")}
            className="flex items-center gap-2 text-[11px] tracking-[0.22em] text-white/50 uppercase hover:text-[#C8922A] transition-colors cursor-pointer"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Scroll
            <svg width="10" height="20" viewBox="0 0 10 20" fill="none">
              <path d="M5 3 L5 17 M5 17 L2 14 M5 17 L8 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
