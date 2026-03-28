import React from "react";
import { experience } from "../data/experience";
import flipkartLogo from "./assets/flipkart-icon.webp";
import emendoLogo from "./assets/emendo-icon.png";

const companyLogos = {
  Flipkart: flipkartLogo,
  Emendo: emendoLogo,
};

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-padding relative z-10"
    >
      <div className="mx-auto max-w-5xl text-center">
        <header className="mb-16 motion-safe:animate-fade-in-up">
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-400">
            Career Journey
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Where I've <span className="text-gradient">Contributed</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            Backend-focused work—services, migrations, and production—with an eye
            on how systems behave at scale.
          </p>
        </header>

        <div className="relative mx-auto max-w-3xl text-left">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 opacity-30 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
          
          <div className="space-y-12">
            {experience.map((item, index) => (
              <article
                key={`${item.company}-${item.role}-${item.start}`}
                className="relative grid grid-cols-[auto,1fr] gap-6 pl-12 md:pl-16 group"
              >
                {/* Timeline Dot/Logo */}
                <div className="absolute left-2 md:left-4 top-1 flex flex-col items-center">
                  {companyLogos[item.company] ? (
                    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-slate-900 shadow-xl ring-2 ring-indigo-500/50 group-hover:ring-indigo-400 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300">
                      <img
                         src={companyLogos[item.company]}
                         alt={item.company}
                         className="h-full w-full object-contain p-1"
                      />
                    </div>
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-sm font-bold text-white shadow-xl group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300">
                      {item.company.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-indigo-500/10">
                  <div className="flex flex-col justify-between gap-3 border-b border-slate-700/50 pb-5 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-white">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-base font-semibold text-indigo-400">
                        {item.company}
                      </p>
                    </div>
                    <p className="shrink-0 rounded-full bg-slate-800/50 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm sm:text-sm">
                      {item.start} – {item.end}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(6,182,212,0.8)]" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {item.tech && item.tech.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2 pt-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300 transition-colors hover:bg-indigo-500/20 hover:text-indigo-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

