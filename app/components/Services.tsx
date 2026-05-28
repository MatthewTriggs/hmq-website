"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Capabilities() {
  const headerRef = useScrollReveal(0.1);
  const principleRef = useScrollReveal(0.1);

  return (
    <section id="capabilities" className="relative py-28 lg:py-36">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div ref={headerRef} className="animate-fade-in mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#C8922A]" />
            <span
              className="text-[11px] tracking-[0.25em] text-[#C8922A] uppercase"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              02 — Capabilities
            </span>
          </div>
          <h2
            className="text-5xl lg:text-6xl font-light text-white"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Three things, in service
            <br />
            <span className="text-[#C8922A] italic">of one outcome.</span>
          </h2>
        </div>

        {/* Operating Principle */}
        <div
          ref={principleRef}
          className="animate-fade-in grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 pb-20 border-b border-[#1E1E1E]"
        >
          <div>
            <span
              className="block text-[11px] tracking-[0.25em] text-[#C8922A] uppercase mb-5"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              01 — Operating Principle
            </span>
            <h3
              className="text-3xl lg:text-4xl font-light text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Systems that exceed
              <br />
              environmental brutality.
            </h3>
            <p
              className="text-[#6B6B6B] text-sm leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Off-the-shelf hardware fails on South African mining and
              high-grade industrial sites. Dust ingress, vibration, surface
              temperature, voltage spikes — the operational envelope here is
              brutal, and most equipment is not specced for it.
            </p>
            <p
              className="text-[#6B6B6B] text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              We engineer to that envelope from the start. Every drawing, panel
              and chassis we ship is held to one test: will it still be there
              next shift.
            </p>
          </div>

          {/* Cable harness — Operating Principle visual */}
          <div className="relative aspect-[4/3] bg-[#F5F5F0] border border-[#1E1E1E] overflow-hidden group">
            <Image
              src="/images/cable-harness.jpg"
              alt="HMQ engineered cable harness with sealed Deutsch connector"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle dark vignette at edges to blend with page */}
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(13,13,13,0.5)]" />
          </div>
        </div>

        {/* Three capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1E1E1E]">
          <CapabilityCard
            number="01"
            slug="systems"
            title="Systems Hardware"
            description="LED identification, safety control units, E-stop assemblies, sealed harness work and integrated field hardware. Built to IP68 where it matters, specced against the actual dust, vibration and temperature of the site it&rsquo;s going to."
            cta="Discuss a system"
            tags={["IP68 Rated", "LED Identification", "Safety Systems", "E-Stop Assemblies"]}
            delay={0}
          />
          <CapabilityCard
            number="02"
            slug="design"
            title="Full Engineering Stack"
            description="Mechanical, electrical, structural, sheet metal, architectural and engineering validation. All six disciplines sit in the same drawing office, on the same drawing set. No version drift, no handoff gaps, fabrication drawings that go straight to the shop floor."
            cta="See the drawing office"
            tags={["Mechanical", "Electrical", "Structural", "Architectural"]}
            delay={100}
          />
          <CapabilityCard
            number="03"
            slug="analytics"
            title="Mine Data, Worked Hard"
            description="Predictive maintenance, fleet overview, safety risk analysis, fuel and production insights. Live dashboards and alerting that sit alongside the hardware, so the numbers running past the control room actually mean something."
            cta="See the analytics stack"
            tags={["Predictive Maintenance", "Fleet Overview", "Live Dashboards", "Safety Risk"]}
            delay={200}
          />
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({
  number,
  title,
  description,
  cta,
  tags,
  delay,
}: {
  number: string;
  slug: string;
  title: string;
  description: string;
  cta: string;
  tags: string[];
  delay: number;
}) {
  const ref = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className="animate-fade-in group relative bg-[#0D0D0D] p-8 lg:p-10 hover:bg-[#111111] transition-colors duration-300 flex flex-col"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-[#C8922A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <span
        className="block text-[11px] tracking-[0.25em] text-[#3A3530] mb-6"
        style={{ fontFamily: "var(--font-dm-mono)" }}
      >
        {number}
      </span>

      <h3
        className="text-3xl font-light text-white mb-4 group-hover:text-[#C8922A] transition-colors duration-300"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        {title}
      </h3>

      <p
        className="text-[#6B6B6B] text-sm leading-relaxed mb-6 flex-1"
        style={{ fontFamily: "var(--font-jost)" }}
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] tracking-[0.15em] text-[#4A4540] border border-[#2A2A2A] px-2.5 py-1 uppercase"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            {tag}
          </span>
        ))}
      </div>

      <span
        className="text-[11px] tracking-[0.15em] text-[#C8922A] uppercase flex items-center gap-2 group-hover:gap-3 transition-all duration-200"
        style={{ fontFamily: "var(--font-dm-mono)" }}
      >
        {cta}
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
          <path d="M0 5h10M7 2l3 3-3 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </div>
  );
}
