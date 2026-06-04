"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Products", href: "#products" },
  { label: "Drawing Office", href: "#drawing-office" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = (target as HTMLElement).offsetTop - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#2A2A2A]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center group"
        >
          <Image
            src="/images/logo.png"
            alt="HMQ Group"
            width={160}
            height={64}
            className="h-16 w-auto object-contain mix-blend-screen brightness-150"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm tracking-wide text-[#A09A8E] hover:text-[#C8922A] transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#contact")}
            className="ml-2 px-5 py-2 text-sm font-medium border border-[#C8922A] text-[#C8922A] hover:bg-[#C8922A] hover:text-[#0D0D0D] transition-all duration-200 tracking-wide cursor-pointer"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-[#E8E4DC] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-[#E8E4DC] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-[#E8E4DC] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#0D0D0D]/98 border-b border-[#2A2A2A] ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-left text-base text-[#A09A8E] hover:text-[#C8922A] transition-colors py-1 cursor-pointer"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#contact")}
            className="mt-2 px-5 py-2 text-sm font-medium border border-[#C8922A] text-[#C8922A] hover:bg-[#C8922A] hover:text-[#0D0D0D] transition-all duration-200 w-full cursor-pointer"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  );
}
