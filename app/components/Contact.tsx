"use client";

import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const sectors = [
  "Coal",
  "Iron Ore",
  "Platinum",
  "Chrome",
  "Gold",
  "High-Grade Industrial",
  "Agriculture",
  "Logistics",
  "Contractor",
  "Other",
];

const scopes = [
  "Systems / Hardware",
  "Engineering Design",
  "Analytics / Data",
  "Full Project",
  "Not Sure Yet",
];

export default function Contact() {
  const headerRef = useScrollReveal(0.1);
  const cardsRef = useScrollReveal(0.1);
  const formRef = useScrollReveal(0.1);

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    sector: "",
    scope: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36">
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
              Contact
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-5xl lg:text-6xl font-light text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Tell us what you need.
            </h2>
            <p
              className="text-[#6B6B6B] text-sm max-w-xs leading-relaxed"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Send us the environment, the constraint and the failure cost. We
              respond to every new enquiry inside one working day.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact cards */}
          <div ref={cardsRef} className="animate-fade-in flex flex-col gap-6">
            <ContactPersonCard
              name="Tiaan Marais"
              role="Finance Director · Head of Analytics"
              email="info@hmqgroup.co.za"
            />
            <ContactPersonCard
              name="Jacques"
              role="Engineering & Operations"
              email="info@hmqgroup.co.za"
              phone="+27 82 521 7100"
            />

            {/* Workshop details */}
            <div className="mt-2 p-6 border border-[#1E1E1E] bg-[#0A0A0A]">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span
                    className="block text-[10px] tracking-[0.2em] text-[#4A4540] uppercase mb-1.5"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    Workshop
                  </span>
                  <span
                    className="text-sm text-[#9A9289]"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    Gauteng, South Africa
                  </span>
                </div>
                <div>
                  <span
                    className="block text-[10px] tracking-[0.2em] text-[#4A4540] uppercase mb-1.5"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    Hours
                  </span>
                  <span
                    className="text-sm text-[#9A9289]"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    07:00 — 17:00 SAST
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className="animate-fade-in">
            {status === "sent" ? (
              <div className="flex flex-col gap-4 py-12">
                <div className="w-12 h-px bg-[#C8922A] mb-4" />
                <h3
                  className="text-4xl font-light text-white"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Enquiry Received
                </h3>
                <p
                  className="text-[#6B6B6B] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  Thank you for reaching out. A real engineer will respond
                  inside one working day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="Name" name="name" type="text" value={form.name} onChange={handleChange} required />
                  <FormField label="Company" name="company" type="text" value={form.company} onChange={handleChange} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                  <FormField label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SelectField label="Sector" name="sector" value={form.sector} onChange={handleChange} options={sectors} />
                  <SelectField label="Scope" name="scope" value={form.scope} onChange={handleChange} options={scopes} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-[10px] tracking-[0.2em] text-[#4A4540] uppercase"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    About the Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe the environment, the constraint and the failure cost..."
                    className="bg-[#111111] border border-[#2A2A2A] text-[#E8E4DC] text-sm px-4 py-3 outline-none focus:border-[#C8922A] transition-colors duration-200 placeholder:text-[#3A3A3A] resize-none"
                    style={{ fontFamily: "var(--font-jost)" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 px-8 py-3.5 bg-[#C8922A] text-[#0D0D0D] text-sm font-semibold tracking-wider uppercase hover:bg-[#DBA84A] disabled:opacity-60 transition-all duration-200 self-start cursor-pointer"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  {status === "sending" ? "Sending…" : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24 pt-8 border-t border-[#1E1E1E]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex flex-col gap-1">
            <span
              className="text-[11px] tracking-[0.2em] text-[#3A3530] uppercase"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              © {new Date().getFullYear()} HMQ Group (PTY) Ltd
            </span>
            <span
              className="text-[11px] tracking-[0.15em] text-[#2A2520] uppercase"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Engineered in South Africa · Level 4 B-BBEE
            </span>
          </div>
          <span
            className="text-[11px] tracking-[0.2em] text-[#3A3530] uppercase"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Systems · Design · Analytics
          </span>
        </div>
      </div>
    </section>
  );
}

function ContactPersonCard({
  name,
  role,
  email,
  phone,
}: {
  name: string;
  role: string;
  email: string;
  phone?: string;
}) {
  return (
    <div className="border border-[#2A2A2A] p-6 hover:border-[#C8922A]/40 transition-colors duration-300 group">
      <div className="mb-4">
        <h3
          className="text-2xl font-light text-white group-hover:text-[#C8922A] transition-colors duration-300"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {name}
        </h3>
        <span
          className="text-[10px] tracking-[0.15em] text-[#4A4540] uppercase"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          {role}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <a
          href={`mailto:${email}`}
          className="text-sm text-[#9A9289] hover:text-[#C8922A] transition-colors"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          {email}
        </a>
        {phone && (
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="text-sm text-[#9A9289] hover:text-[#C8922A] transition-colors"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            {phone}
          </a>
        )}
      </div>
    </div>
  );
}

function FormField({
  label,
  name,
  type,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-[10px] tracking-[0.2em] text-[#4A4540] uppercase"
        style={{ fontFamily: "var(--font-dm-mono)" }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-[#111111] border border-[#2A2A2A] text-[#E8E4DC] text-sm px-4 py-3 outline-none focus:border-[#C8922A] transition-colors duration-200 placeholder:text-[#3A3A3A]"
        style={{ fontFamily: "var(--font-jost)" }}
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-[10px] tracking-[0.2em] text-[#4A4540] uppercase"
        style={{ fontFamily: "var(--font-dm-mono)" }}
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-[#111111] border border-[#2A2A2A] text-[#E8E4DC] text-sm px-4 py-3 outline-none focus:border-[#C8922A] transition-colors duration-200 appearance-none cursor-pointer"
        style={{ fontFamily: "var(--font-jost)" }}
      >
        <option value="" disabled className="text-[#3A3A3A]">
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
