"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RANVA_DATA } from "../lib/ranva-data.js";

export function RanvaLogo({ size = "md" }) {
  const boxSize =
    size === "sm" ? "h-9 w-9 rounded-xl" : "h-11 w-11 rounded-2xl";
  const svgSize = size === "sm" ? "w-5 h-5" : "w-6 h-6";

  return (
    <div className="inline-flex items-center gap-3 select-none">
      <div
        className={`${boxSize} bg-[#112A2E] border border-[#BAF828]/30 flex items-center justify-center shadow-lg shadow-black/30 shrink-0`}
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={svgSize}
        >
          <path
            d="M11 29V8H24V19"
            stroke="#BAF828"
            strokeWidth="3.4"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          <rect
            x="24"
            y="22.8"
            width="4.6"
            height="4.6"
            transform="rotate(45 24 22.8)"
            fill="#BAF828"
          />
        </svg>
      </div>

      <div className="flex items-baseline gap-1.5 tracking-tight">
        <span className="font-display font-bold text-white text-xl sm:text-2xl leading-none">
          {RANVA_DATA.name}
        </span>
        <span className="font-display font-bold text-[#BAF828] text-sm sm:text-base leading-none">
          {RANVA_DATA.suffix}
        </span>
      </div>
    </div>
  );
}

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work & SaaS" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RanvaShell({ children }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const cleanWaNumber = String(RANVA_DATA.contact.whatsappNumber || "").replace(
    /\D/g,
    "",
  );
  const quickWaUrl = `https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(
    "Hello Ranva Labs! I would like to discuss a project.",
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#08181B] text-white font-sans selection:bg-[#BAF828] selection:text-[#08181B]">
      {/* Sticky Agency Navbar */}
      <header className="sticky top-0 z-50 bg-[#08181B]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <RanvaLogo size="md" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-bold uppercase tracking-wider">
            {NAV_LINKS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition ${
                    active
                      ? "text-[#BAF828]"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={quickWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-[#BAF828] hover:bg-[#c8fc4c] text-[#08181B] text-xs font-extrabold uppercase tracking-wider transition"
            >
              WhatsApp Us →
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden px-4 py-2.5 rounded-xl bg-[#112A2E] border border-[#BAF828]/35 text-xs font-bold text-[#BAF828] cursor-pointer active:scale-95 transition"
            >
              {mobileOpen ? "✕ Close" : "☰ Menu"}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="md:hidden bg-[#0B2024] border-t border-b border-white/15 px-5 py-6 space-y-3 shadow-2xl">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2.5 px-3 rounded-xl text-sm font-bold transition ${
                  pathname === item.href
                    ? "bg-[#112A2E] text-[#BAF828]"
                    : "text-slate-200 hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={quickWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block w-full py-3.5 rounded-full bg-[#BAF828] text-[#08181B] text-center text-xs font-extrabold uppercase tracking-wider mt-3"
            >
              Chat on WhatsApp →
            </a>
          </div>
        )}
      </header>

      {/* Page Body */}
      <main className="flex-1">{children}</main>

      {/* Enterprise Agency Footer */}
      <footer className="bg-[#051012] border-t border-white/10 pt-14 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            <div className="md:col-span-5 space-y-4">
              <RanvaLogo size="sm" />
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                {RANVA_DATA.tagline}. We design and engineer full-stack web
                applications, SaaS platforms, and custom operational software.
              </p>
              <p className="text-xs text-slate-400">
                Leadership:{" "}
                <span className="text-white font-semibold">
                  {RANVA_DATA.ceo.name}
                </span>{" "}
                (CEO)
              </p>
            </div>

            <div className="md:col-span-3 space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#BAF828]">
                Company
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <Link href="/work" className="hover:text-white">
                    Work & Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Engineering Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About & Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Start a Project
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#BAF828]">
                Flagship Product & Contact
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <a
                    href={RANVA_DATA.flagshipSaas.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#BAF828] hover:underline font-semibold"
                  >
                    SerialDaw SaaS Platform ↗
                  </a>
                </li>
                <li>{RANVA_DATA.contact.email}</li>
                <li>{RANVA_DATA.contact.phoneDisplay}</li>
                <li className="text-slate-400">
                  {RANVA_DATA.contact.location}
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>© 2026 Ranva Labs. All rights reserved.</p>
            <p>Engineered in Bangladesh for Global & Local Businesses.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
