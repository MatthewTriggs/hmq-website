"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

const stats = [
  { value: "0.2%", label: "Field failure rate", sub: "Across all deployed units" },
  { value: "10+", label: "Active mine sites", sub: "Namibia to Cape Town" },
  { value: "24h", label: "Enquiry response", sub: "Real engineer, same day" },
  { value: "100%", label: "Local manufacturing", sub: "Every unit built in Gauteng" },
];

export default function About() {
  const headerRef = useScrollReveal(0.1);
  const storyRef = useScrollReveal(0.1);
  const imageRef = useScrollReveal(0.1);
  const statsRef = useScrollReveal(0.1);
  const bbeeRef = useScrollReveal(0.15);

  return (
    <section id="about" className="relative py-28 lg:py-36 bg-grid">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="animate-fade-in mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#C8922A]" />
            <span
              className="text-[11px] tracking-[0.25em] text-[#C8922A] uppercase"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              About
            </span>
          </div>
          <h2
            className="text-5xl lg:text-6xl font-light text-white"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Started with Identification.
            <br />
            <span className="text-[#C8922A] italic">
              Developed into Engineering.
            </span>
          </h2>
        </div>

        {/* Two-column: story + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <div ref={storyRef} className="animate-fade-in flex flex-col gap-5">
            <p
              className="text-lg text-[#9A9289] leading-relaxed"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              HMQ has engineered its own products and services to surpass client
              expectations and constantly outperform against environmental
              elements.
            </p>
            <p
              className="text-sm text-[#6B6B6B] leading-relaxed"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              If you are replacing systems, wiring or components within a few
              months, you need realistic engineered solutions. Today we operate
              with a team of highly qualified engineers and fabricators across
              project design, engineering and analytics.
            </p>
            <p
              className="text-sm text-[#6B6B6B] leading-relaxed"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Our manufacturing is done in-house and under one roof in Gauteng —
              from small to large mining solutions, we have you covered.
            </p>

            {/* Analytics callout */}
            <div className="mt-4 p-6 border border-[#2A2A2A] bg-[#0A0A0A]">
              <span
                className="block text-[10px] tracking-[0.2em] text-[#C8922A] uppercase mb-2"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Data & Analytics
              </span>
              <p
                className="text-sm text-[#6B6B6B] leading-relaxed"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Live dashboards and alerting sit alongside the hardware — so the
                numbers running past the control room actually mean something.
                Predictive maintenance, fleet overview, safety risk analysis,
                fuel and production insights.
              </p>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="animate-fade-in relative aspect-[4/3] lg:aspect-auto bg-[#111111] border border-[#1E1E1E] overflow-hidden group min-h-[320px]">
            <Image
              src="/images/analytics-dashboard.jpg"
              alt="Operational analytics dashboard showing fleet, safety and production metrics"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/70 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span
                className="text-[10px] tracking-[0.2em] text-[#C8922A] uppercase"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Live fleet & production dashboard
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="animate-fade-in grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1E1E1E] mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0D0D0D] px-8 py-10 flex flex-col gap-1"
            >
              <span
                className="text-4xl lg:text-5xl font-light text-white"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {stat.value}
              </span>
              <span
                className="text-sm text-[#9A9289]"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                {stat.label}
              </span>
              <span
                className="text-[10px] tracking-[0.1em] text-[#4A4540] uppercase"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

        {/* B-BBEE Callout */}
        <div
          ref={bbeeRef}
          className="animate-fade-in relative border border-[#2A2A2A] p-8 lg:p-10 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-16 h-16">
            <div className="absolute top-0 left-0 w-full h-px bg-[#C8922A]" />
            <div className="absolute top-0 left-0 h-full w-px bg-[#C8922A]" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <span
                className="block text-[11px] tracking-[0.25em] text-[#C8922A] uppercase mb-3"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                B-BBEE Status
              </span>
              <h3
                className="text-4xl lg:text-5xl font-semibold text-white mb-2"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Level 4 Contributor
              </h3>
              <p
                className="text-[#6B6B6B] text-sm"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Broad-Based Black Economic Empowerment
              </p>
            </div>
            <div className="lg:border-l lg:border-[#2A2A2A] lg:pl-10">
              <p
                className="text-sm text-[#6B6B6B] leading-relaxed max-w-sm"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                HMQ Group holds a verified B-BBEE Level 4 rating, supporting
                our clients&rsquo; procurement compliance and transformation
                objectives within the South African regulatory framework.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
