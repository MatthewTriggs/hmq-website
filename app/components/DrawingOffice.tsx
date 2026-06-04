"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

const disciplines = [
  {
    number: "01",
    title: "Mechanical",
    description:
      "Gearboxes, drives, weldments, shaft assemblies. If it rotates, transmits torque or carries a load, our mechanical team specs it, tolerances it and signs it off.",
    image: "/images/disc-mechanical.jpg",
    imageAlt: "Mechanical engineering reference image",
    lightBg: false,
  },
  {
    number: "02",
    title: "Sheet Metal",
    description:
      "IP-rated enclosures, panel boxes, brackets, chassis, cabinetry. Drawings go straight to our local fabricators. We know which lines run which processes.",
    image: "/images/disc-sheetmetal.jpg",
    imageAlt: "Sheet metal cabinetry reference",
    lightBg: false,
  },
  {
    number: "03",
    title: "Electrical",
    description:
      "Control panels, MCC integrations, PCB and battery assemblies, field wiring looms, PLC-ready schematics. Built to industrial standards, ready for first-pass commissioning.",
    image: "/images/disc-electrical.jpg",
    imageAlt: "Electrical battery and PCB assembly reference",
    lightBg: false,
  },
  {
    number: "04",
    title: "Structural & Steel",
    description:
      "Pipe racks, access platforms, conveyor supports, load-bearing infrastructure. Calculated, stamped, ready to cut.",
    image: "/images/disc-structural.jpg",
    imageAlt: "Structural steel reference model",
    lightBg: false,
  },
  {
    number: "05",
    title: "Architectural",
    description:
      "Control rooms, workshops, change houses, process buildings, industrial and residential builds. Functional structures designed around how they&rsquo;re actually used.",
    image: "/images/disc-architectural.jpg",
    imageAlt: "Architectural building model reference",
    lightBg: false,
  },
  {
    number: "06",
    title: "Engineering Validation",
    description:
      "Independent FEA, stress analysis and design review. We verify the numbers before they reach the shop floor — yours or ours.",
    image: "/images/disc-validation.jpg",
    imageAlt: "Engineering validation and structural analysis on a CAD model",
    lightBg: false,
  },
];

export default function DrawingOffice() {
  const headerRef = useScrollReveal(0.1);

  return (
    <section id="drawing-office" className="relative py-28 lg:py-36">
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
              04 — Engineering Disciplines
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-5xl lg:text-6xl font-light text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Multi-disciplinary
              <br />
              Drawing Office
            </h2>
            <p
              className="text-[#6B6B6B] text-sm max-w-sm leading-relaxed"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Six engineering disciplines under one roof. One coordinated
              drawing set means fewer handoffs, fewer gaps, and drawings that
              match what gets built.
            </p>
          </div>
        </div>

        {/* Disciplines grid — 3 col on desktop, image on hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E1E1E]">
          {disciplines.map((disc, i) => (
            <DisciplineCard key={disc.number} disc={disc} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DisciplineCard({
  disc,
  delay,
}: {
  disc: (typeof disciplines)[0];
  delay: number;
}) {
  const ref = useScrollReveal(0.08);

  return (
    <div
      ref={ref}
      className="animate-fade-in group relative bg-[#0D0D0D] overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Reference image — revealed on hover */}
      <div className={`relative aspect-[4/3] overflow-hidden ${disc.lightBg ? "bg-[#D8D4CC]" : "bg-[#0A0A0A]"}`}>
        <Image
          src={disc.image}
          alt={disc.imageAlt}
          fill
          className={`object-cover transition-all duration-500 group-hover:scale-105 ${
            disc.lightBg
              ? "opacity-85 group-hover:opacity-100 mix-blend-multiply"
              : "opacity-60 group-hover:opacity-90"
          }`}
        />
        {/* Dark overlay fades on hover — only for dark-bg images */}
        {!disc.lightBg && (
          <div className="absolute inset-0 bg-[#0D0D0D]/50 group-hover:bg-[#0D0D0D]/20 transition-colors duration-500" />
        )}

        {/* Number badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="w-4 h-px bg-[#C8922A]" />
          <span
            className="text-[10px] tracking-[0.2em] text-[#C8922A] uppercase"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            {disc.number}
          </span>
        </div>
      </div>

      {/* Text content */}
      <div className="p-6 lg:p-8 border-t border-[#1E1E1E] group-hover:border-[#C8922A]/30 transition-colors duration-300">
        <h3
          className="text-2xl font-light text-white mb-3 group-hover:text-[#C8922A] transition-colors duration-300"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {disc.title}
        </h3>
        <p
          className="text-[#6B6B6B] text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-jost)" }}
          dangerouslySetInnerHTML={{ __html: disc.description }}
        />
      </div>
    </div>
  );
}
