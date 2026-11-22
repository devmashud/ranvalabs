import Link from "next/link";
import RanvaShell from "../../../components/ranva-shell";
import { RANVA_DATA } from "../../../lib/ranva-data.js";

export const metadata = {
  title: "About & Leadership — Ranva Labs",
  description: "Learn about Ranva Labs and Founder & CEO Mashudul Hoque.",
};

export default function AboutPage() {
  const { ceo } = RANVA_DATA;

  return (
    <RanvaShell>
      {/* Studio Mission Header */}
      <section className="tech-grid border-b border-white/10 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-5 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BAF828]">
            About Ranva Labs
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight">
            Engineering Practical Software With Clarity & Precision.
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Ranva Labs was established with a clear focus: bridging the gap
            between complex enterprise software and everyday usability. Whether
            building an automated serial SaaS like SerialDaw or a custom
            business portal, we prioritize speed, clean architecture, and
            measurable operational impact.
          </p>
        </div>
      </section>

      {/* Executive Leadership Profile: Mashudul Hoque */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-16">
        <div className="rounded-3xl bg-[#112A2E] border border-[#BAF828]/35 p-7 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Executive Portrait Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-[#08181B] border border-[#BAF828]/30 p-7 text-center space-y-4 shadow-xl">
              <div className="w-44 h-48 mx-auto rounded-2xl overflow-hidden bg-[#112A2E] border-2 border-[#BAF828]/45 shadow-lg">
                <img
                  src={ceo.photo || "/ceo.jpg"}
                  alt={ceo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl text-white">
                  {ceo.name}
                </h2>
                <p className="text-xs font-bold uppercase tracking-wider text-[#BAF828] mt-1">
                  {ceo.role}
                </p>
              </div>
              <p className="text-xs text-slate-400 pt-2 border-t border-white/10">
                Ranva Labs · Bangladesh
              </p>
            </div>
          </div>

          {/* CEO Bio & Vision */}
          <div className="lg:col-span-8 space-y-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BAF828]">
              Executive Leadership
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-snug">
              {ceo.headline}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {ceo.bio}
            </p>

            <div className="space-y-2 pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Focus Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {ceo.highlights.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 rounded-full bg-[#08181B] border border-white/10 text-xs font-semibold text-slate-200"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-[#0D2125] border border-white/10 space-y-2">
            <span className="text-xs font-bold text-[#BAF828]">01 / SPEED</span>
            <h4 className="font-display font-bold text-xl text-white">
              Zero-Bloat Performance
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Built on modern Next.js and edge cloud infrastructure so every
              dashboard and web page loads instantaneously even on mobile
              networks.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#0D2125] border border-white/10 space-y-2">
            <span className="text-xs font-bold text-[#BAF828]">
              02 / OWNERSHIP
            </span>
            <h4 className="font-display font-bold text-xl text-white">
              Self-Managed Control
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We equip clients with intuitive admin panels and clean
              documentation so non-technical staff can operate the system
              effortlessly.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#0D2125] border border-white/10 space-y-2">
            <span className="text-xs font-bold text-[#BAF828]">
              03 / RELIABILITY
            </span>
            <h4 className="font-display font-bold text-xl text-white">
              Direct Engineering Accountability
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              You collaborate directly with our core engineering leadership from
              requirement scoping through deployment and post-launch scaling.
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-full bg-[#BAF828] hover:bg-[#c8fc4c] text-[#08181B] text-xs font-extrabold uppercase tracking-widest transition"
          >
            Work With Ranva Labs →
          </Link>
        </div>
      </section>
    </RanvaShell>
  );
}
