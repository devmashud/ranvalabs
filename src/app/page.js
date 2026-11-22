import Link from "next/link";
import RanvaShell from "../../components/ranva-shell";
import { RANVA_DATA } from "../../lib/ranva-data.js";

export default function HomePage() {
  const { flagshipSaas, services, projects, ceo } = RANVA_DATA;

  return (
    <RanvaShell>
      {/* Hero Section */}
      <section className="tech-grid relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[680px] h-[340px] rounded-full bg-[#BAF828]/10 blur-[130px]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 relative">
          <div className="max-w-3xl space-y-7">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#112A2E] border border-[#BAF828]/30 text-xs font-semibold text-[#BAF828]">
              <span className="h-2 w-2 rounded-full bg-[#BAF828] animate-pulse" />
              Full-Stack Web Applications & SaaS Product Studio
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-6xl text-white leading-[1.08] tracking-tight">
              We Build Scalable{" "}
              <span className="text-[#BAF828]">Web Apps & SaaS Products</span>{" "}
              That Power Modern Operations.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Ranva Labs is a software engineering studio crafting custom web
              applications, automated booking platforms, and enterprise
              dashboards—from initial architecture to cloud launch.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="px-7 py-4 rounded-full bg-[#BAF828] hover:bg-[#c8fc4c] text-[#08181B] text-xs font-extrabold uppercase tracking-widest shadow-xl shadow-[#BAF828]/15 transition"
              >
                Discuss Your Project →
              </Link>
              <Link
                href="/work"
                className="px-7 py-4 rounded-full bg-[#112A2E] hover:bg-[#16363B] border border-white/15 text-white text-xs font-bold uppercase tracking-widest transition"
              >
                Explore Products & Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Live SaaS Spotlight: SerialDaw */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-[#112A2E] to-[#0A1D20] border border-[#BAF828]/35 p-7 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#BAF828] text-[#08181B] text-[10px] font-extrabold uppercase tracking-widest">
              {flagshipSaas.badge}
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              {flagshipSaas.name} — {flagshipSaas.tagline}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {flagshipSaas.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs font-semibold text-slate-200">
              {flagshipSaas.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <span className="text-[#BAF828]">✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href={flagshipSaas.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#BAF828] hover:bg-[#c8fc4c] text-[#08181B] text-xs font-extrabold uppercase tracking-wider transition"
              >
                Launch SerialDaw Live ↗
              </a>
              <Link
                href="/work"
                className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-[#BAF828] transition"
              >
                View All Case Studies →
              </Link>
            </div>
          </div>

          {/* Live SaaS UI Preview Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#08181B] border border-white/15 p-6 space-y-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold text-white">
                  serial-daw.vercel.app
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#BAF828]">
                  <span className="h-2 w-2 rounded-full bg-[#BAF828] animate-ping" />
                  ONLINE
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#112A2E] border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">
                      Active Queue Engine
                    </p>
                    <p className="font-display font-bold text-lg text-white mt-0.5">
                      Automated Serial #01 — #45
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-[#BAF828]/15 text-[#BAF828] text-xs font-bold">
                    Live Sync
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#0E2327] border border-white/10">
                    <p className="text-slate-400 text-[11px]">Architecture</p>
                    <p className="font-bold text-white mt-1">
                      Cloud Multi-User
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0E2327] border border-white/10">
                    <p className="text-slate-400 text-[11px]">Built By</p>
                    <p className="font-bold text-[#BAF828] mt-1">Ranva Labs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="border-y border-white/10 bg-[#0A1E22] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BAF828]">
                Capabilities
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
                End-to-End Software Engineering
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs font-bold uppercase tracking-wider text-[#BAF828] hover:underline"
            >
              View Service Scopes & Pricing →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((srv) => (
              <div
                key={srv.number}
                className="p-7 rounded-2xl bg-[#08181B] border border-white/10 hover:border-[#BAF828]/40 transition space-y-3"
              >
                <span className="font-display font-bold text-xs text-[#BAF828]">
                  {srv.number} /
                </span>
                <h3 className="font-display font-bold text-xl text-white">
                  {srv.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BAF828]">
              Portfolio
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Systems Engineered by Ranva Labs
            </h2>
          </div>
          <Link
            href="/work"
            className="text-xs font-bold uppercase tracking-wider text-[#BAF828] hover:underline"
          >
            Explore All Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="p-7 rounded-3xl bg-[#0D2125] border border-white/10 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#BAF828]">
                  {p.category}
                </span>
                <h3 className="font-display font-bold text-xl text-white">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {p.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                {p.liveUrl ? (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-extrabold uppercase tracking-wider text-[#BAF828] hover:underline"
                  >
                    Visit Live App ↗
                  </a>
                ) : (
                  <Link
                    href="/work"
                    className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white"
                  >
                    Case Details →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Studio Credibility Strip */}
      <section className="border-t border-white/10 bg-[#0A1E22] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BAF828]">
              Studio Leadership
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white leading-snug">
              “{ceo.headline}”
            </h2>
            <p className="text-sm text-slate-300">
              — <strong className="text-white">{ceo.name}</strong>, {ceo.role}
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              href="/about"
              className="px-7 py-4 rounded-full border border-[#BAF828]/40 hover:bg-[#BAF828] hover:text-[#08181B] text-[#BAF828] text-xs font-extrabold uppercase tracking-wider transition"
            >
              About Ranva Labs & CEO →
            </Link>
          </div>
        </div>
      </section>
    </RanvaShell>
  );
}
