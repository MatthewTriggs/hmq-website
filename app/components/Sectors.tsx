"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

const sectors = [
  {
    number: "01",
    title: "Coal",
    description:
      "Open-cut and underground coal operations. Identification, safety systems and analytics deployments across active South African coal sites.",
  },
  {
    number: "02",
    title: "Iron Ore",
    description:
      "High-tonnage iron ore processing and haulage environments. Hardware specced for the dust loads and haul-road vibration profiles specific to iron ore operations.",
  },
  {
    number: "03",
    title: "Platinum",
    description:
      "Deep-level platinum and PGM operations in the Bushveld Igneous Complex. Systems engineered around underground atmosphere, heat and pressure constraints.",
  },
  {
    number: "04",
    title: "Chrome",
    description:
      "Chrome ore and ferrochrome plant environments. Control systems, identification hardware and analytics for UG2 and Merensky reef operations.",
  },
  {
    number: "05",
    title: "Gold",
    description:
      "Gold mining and processing — from Witwatersrand basin producers to newer greenfield projects. Mine-grade hardware that holds through the full shift cycle.",
  },
  {
    number: "06",
    title: "Industrial",
    description:
      "High-grade industrial facilities, manufacturing plants and process environments where uptime and safety standards match those of the mining sector.",
  },
  {
    number: "07",
    title: "Agriculture",
    description:
      "Large-scale agricultural operations requiring the same environmental ruggedness as mining — remote installs, rough terrain, exposure to dust and vibration.",
  },
];

export default function Sectors() {
  const headerRef = useScrollReveal(0.1);

  return (
    <section id="sectors" className="relative py-28 lg:py-36">
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
              Where We Work
            </span>
          </div>
          <h2
            className="text-5xl lg:text-6xl font-light text-white"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Industry Sectors
          </h2>
        </div>

        {/* Sectors list */}
        <div className="flex flex-col gap-0 divide-y divide-[#1E1E1E]">
          {sectors.map((sector, i) => (
            <SectorRow key={sector.number} sector={sector} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectorRow({
  sector,
  index,
}: {
  sector: (typeof sectors)[0];
  index: number;
}) {
  const ref = useScrollReveal(0.08);

  return (
    <div
      ref={ref}
      className="animate-fade-in group py-8 lg:py-10 flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-16 hover:bg-[#0F0F0F] transition-colors duration-300 px-4 lg:px-0 -mx-4 lg:mx-0"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Number + Title */}
      <div className="flex items-baseline gap-5 lg:w-56 shrink-0">
        <span
          className="text-[11px] tracking-[0.2em] text-[#3A3530]"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          {sector.number}
        </span>
        <h3
          className="text-3xl lg:text-4xl font-light text-white group-hover:text-[#C8922A] transition-colors duration-300"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {sector.title}
        </h3>
      </div>

      {/* Description */}
      <p
        className="text-[#6B6B6B] text-sm leading-relaxed max-w-lg"
        style={{ fontFamily: "var(--font-jost)" }}
      >
        {sector.description}
      </p>
    </div>
  );
}
