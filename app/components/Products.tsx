"use client";

import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

const products = [
  {
    number: "01",
    title: "Armour Glow LED",
    description: "360° vehicle identification unit with magnet feet for tool-free deployment. Optional beacon light and battery backup.",
    image: "/images/armour-glow-led.jpg",
    imageAlt: "Armour Glow LED 360 degree vehicle identification unit",
    features: ["360° viewing angle", "Magnet feet, 135 kg pull force", "Beacon light (optional)", "Battery backup (optional)"],
    specs: [
      { label: "Environmental", value: "IP68" },
      { label: "Voltage", value: "12 / 24 V" },
      { label: "Op. Temp", value: "-20 to +65 °C" },
      { label: "Dimensions", value: "Varies" },
    ],
  },
  {
    number: "02",
    title: "Illuminated E-Stop",
    description: "Interactive LED safety assembly with 180° visibility and bolt-through mounting for permanent installation.",
    image: "/images/illuminated-estop.jpg",
    imageAlt: "HMQ Illuminated E-Stop safety assembly with interactive LED",
    features: ["180° viewing angle", "2mm mild steel housing", "Interactive LED indicator", "M6 bolt-through mounting"],
    specs: [
      { label: "Environmental", value: "IP68" },
      { label: "Voltage", value: "12 / 24 V" },
      { label: "Dimensions", value: "154 × 160 × 125 mm" },
      { label: "Weight", value: "1.5 kg" },
      { label: "Op. Temp", value: "-20 to +65 °C" },
    ],
  },
  {
    number: "03",
    title: "Armour Glow Single",
    description: "100–200 m visibility with anti-vibration mounts and optional battery backup. Modular design for easy field servicing.",
    image: "/images/armour-glow-single.jpg",
    imageAlt: "Armour Glow Single LED panel mounted to vehicle",
    features: ["100 – 200 m visibility", "Anti-vibration mounts", "Battery backup (optional)", "Modular design"],
    specs: [
      { label: "Environmental", value: "IP68" },
      { label: "Voltage", value: "12 / 24 V" },
      { label: "Op. Temp", value: "-20 to +65 °C" },
      { label: "Dimensions", value: "Varies" },
    ],
  },
  {
    number: "04",
    title: "OEM Replacement Harness",
    description: "Flame-resistant braided harness with sealed Deutsch connectors. Built to spec and drawing, with documentation included.",
    image: "/images/oem-harness.jpg",
    imageAlt: "HMQ OEM replacement engineered cable harness with braided sleeve and sealed Deutsch connector",
    lightBg: true,
    features: ["Flame-resistant braiding", "IP68 in mated state", "Build to spec, build to design", "Drawings included"],
    specs: [
      { label: "Environmental", value: "IP68 mated" },
      { label: "Voltage", value: "Varies" },
      { label: "Op. Temp", value: "-15 to +125 °C" },
      { label: "Dimensions", value: "Varies" },
    ],
  },
];

export default function Products() {
  const headerRef = useScrollReveal(0.1);

  return (
    <section id="products" className="relative py-28 lg:py-36 bg-grid">
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
              03 — Engineered Hardware
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-5xl lg:text-6xl font-light text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Flagship Products
            </h2>
            <p
              className="text-[#6B6B6B] text-sm max-w-xs leading-relaxed"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Field-ready hardware, manufactured locally and specced for
              high-grade industrial and mining duty cycles.
            </p>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1E1E1E]">
          {products.map((product, i) => (
            <ProductCard key={product.number} product={product} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  delay,
}: {
  product: (typeof products)[0];
  delay: number;
}) {
  const ref = useScrollReveal(0.08);

  return (
    <div
      ref={ref}
      className="animate-fade-in group bg-[#0D0D0D] hover:bg-[#0F0F0F] transition-colors duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className={`relative aspect-[16/9] overflow-hidden ${product.lightBg ? "bg-[#F5F5F0]" : "bg-[#111111]"}`}>
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
        <span
          className="absolute top-4 left-4 text-[10px] tracking-[0.2em] text-[#C8922A] bg-[#0D0D0D]/80 px-2 py-1 uppercase"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          {product.number}
        </span>
      </div>

      {/* Content */}
      <div className="p-8 lg:p-10">
        {/* Gold top rule on hover */}
        <div className="w-8 h-px bg-[#C8922A] mb-6" />

        <h3
          className="text-3xl font-light text-white mb-3 group-hover:text-[#C8922A] transition-colors duration-300"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {product.title}
        </h3>

        <p
          className="text-[#6B6B6B] text-sm leading-relaxed mb-6"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          {product.description}
        </p>

        <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-6">
          {/* Features */}
          <div>
            <span
              className="block text-[10px] tracking-[0.2em] text-[#4A4540] uppercase mb-2"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Features
            </span>
            <ul className="flex flex-col gap-1">
              {product.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-xs text-[#6B6B6B]"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C8922A] shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Specs */}
          <div>
            <span
              className="block text-[10px] tracking-[0.2em] text-[#4A4540] uppercase mb-2"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Specifications
            </span>
            <dl className="flex flex-col gap-1">
              {product.specs.map((s) => (
                <div key={s.label} className="flex justify-between items-baseline gap-2">
                  <dt
                    className="text-[10px] tracking-[0.1em] text-[#4A4540] uppercase shrink-0"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {s.label}
                  </dt>
                  <dd
                    className="text-xs text-[#9A9289] text-right"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
