import Link from "next/link";
import RanvaShell from "../../../components/ranva-shell";
import { RANVA_DATA } from "../../../lib/ranva-data.js";

export const metadata = {
  title: "Services & Engagement Models — Ranva Labs",
  description:
    "Custom web application development, SaaS engineering, and business automation by Ranva Labs.",
};

const TIERS = [
  {
    name: "Flagship Website + CMS",
    price: "৳18,000+",
    timeline: "5–7 Days Delivery",
    desc: "Ideal for clinics, consultants, and companies needing a custom high-trust website with a self-managed admin dashboard.",
    items: [
      "Bespoke Brand UI/UX Design",
      "Custom Admin CMS Dashboard",
      "WhatsApp & Lead Capture Workflows",
      "Technical SEO & Cloud Hosting Setup",
    ],
    featured: false,
  },
  {
    name: "Custom Web Application",
    price: "৳45,000+",
    timeline: "2–3 Weeks Delivery",
    desc: "Full-stack web software tailored to your exact operations—user roles, database workflows, booking engines, or client portals.",
    items: [
      "Everything in Flagship Website + CMS",
      "Custom Database Schema & REST APIs",
      "Multi-Role Auth (Admin / Staff / User)",
      "Interactive Analytics & Reporting",
      "30 Days Free Post-Launch Support",
    ],
    featured: true,
  },
  {
    name: "SaaS & MVP Engineering",
    price: "Custom Scope",
    timeline: "Milestone-Based",
    desc: "Dedicated product engineering for founders launching commercial SaaS platforms with subscription and multi-tenant logic.",
    items: [
      "End-to-End Product Architecture",
      "Payment Gateway & API Integrations",
      "Scalable Cloud Infrastructure",
      "Full Source Code & IP Ownership",
    ],
    featured: false,
  },
];

export default function ServicesPage() {
  return (
    <RanvaShell>
      {/* Header */}
      <section className="tech-grid border-b border-white/10 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BAF828]">
            Engineering Capabilities
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight">
            Software Built Around Your Business Logic.
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            We don’t rely on bloated templates. Every application is architected
            cleanly for fast load times, data security, and effortless daily
            management.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RANVA_DATA.services.map((srv) => (
            <div
              key={srv.number}
              className="p-8 rounded-3xl bg-[#0D2125] border border-white/10 space-y-4"
            >
              <span className="font-display font-bold text-sm text-[#BAF828]">
                {srv.number} /
              </span>
              <h2 className="font-display font-bold text-2xl text-white">
                {srv.title}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {srv.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                {srv.deliverables.map((d) => (
                  <span
                    key={d}
                    className="px-3 py-1 rounded-full bg-[#08181B] text-xs font-semibold text-[#BAF828]"
                  >
                    ✓ {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Models */}
        <div className="space-y-8 pt-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BAF828]">
              Engagement Models
            </span>
            <h2 className="font-display font-bold text-3xl text-white">
              Transparent Investment Tiers
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className={`rounded-3xl p-8 flex flex-col justify-between space-y-6 ${
                  t.featured
                    ? "bg-[#112A2E] border-2 border-[#BAF828]"
                    : "bg-[#0D2125] border border-white/10"
                }`}
              >
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-2xl text-white">
                    {t.name}
                  </h3>
                  <div>
                    <p className="font-display font-bold text-3xl text-[#BAF828]">
                      {t.price}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">{t.timeline}</p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4">
                    {t.desc}
                  </p>
                  <ul className="space-y-2 text-xs text-slate-200">
                    {t.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[#BAF828] font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`block w-full py-3.5 rounded-full text-center text-xs font-extrabold uppercase tracking-wider transition ${
                    t.featured
                      ? "bg-[#BAF828] text-[#08181B]"
                      : "bg-white/10 hover:bg-white hover:text-[#08181B] text-white"
                  }`}
                >
                  Start With This Plan →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RanvaShell>
  );
}
