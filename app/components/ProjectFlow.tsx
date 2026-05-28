"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

const phases = [
  {
    number: "01",
    title: "Site & Scope",
    description:
      "We walk the operation and talk to the people running it. Real constraints get pinned down in writing before a CAD file opens.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "All six disciplines coordinate on one model. You get one drawing pack, one BOM and one set of answers.",
  },
  {
    number: "03",
    title: "Manufacture",
    description:
      "Fabrication in-house and through partner shops we&rsquo;ve worked with for years. Short feedback cycles, weekly builds, no sea freight.",
  },
  {
    number: "04",
    title: "Commission",
    description:
      "Site install, sign-off, handover. Analytics stay live after we leave so the system can prove itself in running.",
  },
];

export default function ProjectFlow() {
  const headerRef = useScrollReveal(0.1);

  return (
    <section id="project-flow" className="relative py-28 lg:py-36 bg-grid">
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
              05 — Project Flow
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-5xl lg:text-6xl font-light text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              How a Project Moves
            </h2>
            <p
              className="text-[#6B6B6B] text-sm max-w-xs leading-relaxed"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Four phases. Tight scope. One point of contact through the whole
              thing. No surprises between the quote and commissioning day.
            </p>
          </div>
        </div>

        {/* Phase flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1E1E1E]">
          {phases.map((phase, i) => (
            <PhaseCard key={phase.number} phase={phase} index={i} />
          ))}
        </div>

        {/* Armour Glow field callout */}
        <FieldCallout />
      </div>
    </section>
  );
}

function PhaseCard({
  phase,
  index,
}: {
  phase: (typeof phases)[0];
  index: number;
}) {
  const ref = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className="animate-fade-in group bg-[#0D0D0D] p-8 lg:p-10 hover:bg-[#111111] transition-colors duration-300 relative"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Connector line between cards on desktop */}
      {index < 3 && (
        <div className="hidden lg:block absolute top-10 -right-px w-px h-px">
          <div className="absolute top-3 -right-2 w-2 h-px bg-[#C8922A]" />
        </div>
      )}

      <div className="absolute top-0 left-0 w-full h-px bg-[#C8922A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <span
        className="block text-[11px] tracking-[0.25em] text-[#C8922A] mb-6"
        style={{ fontFamily: "var(--font-dm-mono)" }}
      >
        {phase.number}
      </span>

      <h3
        className="text-2xl lg:text-3xl font-light text-white mb-4 group-hover:text-[#C8922A] transition-colors duration-300"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        {phase.title}
      </h3>

      <p
        className="text-[#6B6B6B] text-sm leading-relaxed"
        style={{ fontFamily: "var(--font-jost)" }}
        dangerouslySetInnerHTML={{ __html: phase.description }}
      />
    </div>
  );
}

function FieldCallout() {
  const ref = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className="animate-fade-in mt-16 border border-[#2A2A2A] p-8 lg:p-12 relative overflow-hidden"
    >
      {/* Gold corner */}
      <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-px bg-[#C8922A]" />
        <div className="absolute top-0 right-0 h-full w-px bg-[#C8922A]" />
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center gap-8">
        <div className="flex-1">
          <span
            className="block text-[11px] tracking-[0.25em] text-[#C8922A] uppercase mb-4"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Field Proven
          </span>
          <h3
            className="text-3xl lg:text-4xl font-light text-white mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            The Armour Glow LED runs across
            <br />
            <span className="text-[#C8922A] italic">
              open-pit and underground operations.
            </span>
          </h3>
          <p
            className="text-[#6B6B6B] text-sm leading-relaxed max-w-lg"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            From the top of Namibia to Cape Town. We have a failure rate of
            0.2% across all fields, with full replacement inside warranty date.
            If you want one, we will walk the pit with you first.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:items-end shrink-0">
          <div className="flex items-baseline gap-3">
            <span
              className="text-5xl font-light text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              0.2%
            </span>
            <span
              className="text-xs text-[#6B6B6B]"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Failure rate,
              <br />
              all fields
            </span>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 72, behavior: "smooth" });
            }}
            className="px-6 py-2.5 border border-[#C8922A] text-[#C8922A] text-sm font-medium tracking-wide hover:bg-[#C8922A] hover:text-[#0D0D0D] transition-all duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Book a Site Visit
          </button>
        </div>
      </div>
    </div>
  );
}
