"use client";

import { useState } from "react";
import RanvaShell from "../../../components/ranva-shell";
import { RANVA_DATA } from "../../../lib/ranva-data.js";

export default function ContactPage() {
  const [service, setService] = useState("Custom Web Application");
  const [budget, setBudget] = useState("৳45,000 – ৳80,000");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [details, setDetails] = useState("");

  const cleanWaNumber = String(RANVA_DATA.contact.whatsappNumber || "").replace(
    /\D/g,
    "",
  );

  const formattedMsg = `Hello Ranva Labs! I'd like to initiate a project inquiry.\n\n• Name: ${
    name || "Not specified"
  }\n• Company/Practice: ${
    company || "N/A"
  }\n• Project Type: ${service}\n• Estimated Budget: ${budget}\n• Project Brief: ${
    details || "Want to discuss requirements"
  }`;

  const whatsappHref = `https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(
    formattedMsg,
  )}`;

  return (
    <RanvaShell>
      <section className="tech-grid border-b border-white/10 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-3 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#BAF828]">
            Start a Project
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white">
            Let’s Architect Your Next Digital System.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">
            Share a brief overview of what you want to build. Our team responds
            within a few hours with a clear technical roadmap and timeline.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Interactive Project Form */}
        <div className="lg:col-span-8 rounded-3xl bg-[#0D2125] border border-white/10 p-7 sm:p-10 space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
              Select Solution Category
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                "Custom Web Application",
                "SaaS Product / MVP",
                "Clinic / SerialDaw Integration",
                "Business Dashboard / CMS",
                "Flagship Website",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setService(item)}
                  className={`px-4 py-2 rounded-full text-xs font-bold border transition cursor-pointer ${
                    service === item
                      ? "bg-[#BAF828] border-[#BAF828] text-[#08181B]"
                      : "bg-[#08181B] border-white/15 text-slate-300 hover:border-white/30"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
              Estimated Investment Range
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                "৳18,000 – ৳35,000",
                "৳45,000 – ৳80,000",
                "৳80,000 – ৳1,50,000+",
                "Need Consultation First",
              ].map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => setBudget(range)}
                  className={`px-4 py-2 rounded-full text-xs font-bold border transition cursor-pointer ${
                    budget === range
                      ? "bg-white border-white text-[#08181B]"
                      : "bg-[#08181B] border-white/15 text-slate-300"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#08181B] border border-white/15 text-sm text-white focus:outline-none focus:border-[#BAF828]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Company / Organization
              </label>
              <input
                type="text"
                placeholder="Company or Clinic name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#08181B] border border-white/15 text-sm text-white focus:outline-none focus:border-[#BAF828]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Project Requirements
            </label>
            <textarea
              rows={4}
              placeholder="Describe key features, user roles, or goals..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#08181B] border border-white/15 text-sm text-white focus:outline-none focus:border-[#BAF828]"
            />
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#BAF828] hover:bg-[#c8fc4c] text-[#08181B] text-xs font-extrabold uppercase tracking-widest transition"
          >
            Submit Brief via WhatsApp →
          </a>
        </div>

        {/* Direct Contact Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl bg-[#112A2E] border border-[#BAF828]/30 p-7 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#BAF828]">
              Direct Desk
            </span>
            <h2 className="font-display font-bold text-2xl text-white">
              Ranva Labs Studio
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 pt-2 border-t border-white/10">
              <p>
                <strong className="text-white block">Executive Contact:</strong>
                {RANVA_DATA.ceo.name} (CEO)
              </p>
              <p>
                <strong className="text-white block">Phone / WhatsApp:</strong>
                {RANVA_DATA.contact.phoneDisplay}
              </p>
              <p>
                <strong className="text-white block">Email:</strong>
                {RANVA_DATA.contact.email}
              </p>
              <p>
                <strong className="text-white block">Operations:</strong>
                {RANVA_DATA.contact.location}
              </p>
            </div>
          </div>
        </div>
      </section>
    </RanvaShell>
  );
}
