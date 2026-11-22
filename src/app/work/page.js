import Link from "next/link";
import RanvaShell from "../../../components/ranva-shell";
import { RANVA_DATA } from "../../../lib/ranva-data.js";

export const metadata = {
  title: "Work & SaaS Products — Ranva Labs",
  description:
    "Explore SerialDaw and custom web applications engineered by Ranva Labs.",
};

export default function WorkPage() {
  const { flagshipSaas, projects } = RANVA_DATA;

  return (
    <RanvaShell>
      {/* Header */}
      <section className="tech-grid border-b border-white/10 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BAF828]">
            Products & Engineering Portfolio
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight">
            Production SaaS & Custom Web Systems.
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            From our flagship appointment automation SaaS to bespoke operational
            portals, every system is engineered for speed, reliability, and
            intuitive user adoption.
          </p>
        </div>
      </section>

      {/* Featured SaaS Deep Dive: SerialDaw */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-14">
        <div className="rounded-3xl bg-[#112A2E] border-2 border-[#BAF828]/50 p-7 sm:p-12 space-y-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#BAF828] text-[#08181B] text-[10px] font-extrabold uppercase tracking-widest">
                {flagshipSaas.badge}
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white pt-1">
                {flagshipSaas.name}
              </h2>
              <p className="text-sm text-[#BAF828] font-semibold">
                {flagshipSaas.tagline}
              </p>
            </div>

            <a
              href={flagshipSaas.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-7 py-4 rounded-full bg-[#BAF828] hover:bg-[#c8fc4c] text-[#08181B] text-xs font-extrabold uppercase tracking-wider text-center transition"
            >
              Open Live Application ↗
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-display font-bold text-lg text-white">
                Product Overview & Problem Solved
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {flagshipSaas.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {flagshipSaas.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-[#08181B] border border-white/10 text-xs font-semibold text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#08181B] rounded-2xl p-6 border border-white/10 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[#BAF828]">
                Core Capabilities
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                {flagshipSaas.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="text-[#BAF828] font-bold">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Other Client & System Builds */}
        <div className="space-y-6">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Additional Systems & Client Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter((p) => p.id !== "serialdaw")
              .map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-3xl bg-[#0D2125] border border-white/10 p-7 sm:p-8 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#BAF828]">
                      {proj.category}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-white">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {proj.summary}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {proj.impact.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg bg-white/5 text-xs font-semibold text-slate-200"
                        >
                          ✓ {tag}
                        </span>
                      ))}
                    </div>

                    {proj.liveUrl ? (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 rounded-full bg-[#BAF828] text-[#08181B] text-xs font-extrabold uppercase tracking-wider"
                      >
                        View Live Demo ↗
                      </a>
                    ) : (
                      <Link
                        href="/contact"
                        className="inline-block px-6 py-3 rounded-full bg-white/10 hover:bg-white hover:text-[#08181B] text-white text-xs font-bold uppercase tracking-wider transition"
                      >
                        Request Similar System →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </RanvaShell>
  );
}
