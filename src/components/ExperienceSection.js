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
      className="bg-slate-950 py-16"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <header className="mb-10 motion-safe:animate-fade-in-up">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
            Experience
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Work experience
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Backend-focused work—services, migrations, and production—with an eye
            on how systems behave at scale across teams and boundaries.
          </p>
        </header>

        <div className="relative mx-auto max-w-3xl text-left">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-sky-500/40 via-slate-800 to-violet-500/40 md:left-6" />
          <div className="space-y-8">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}-${item.start}`}
                className="relative grid grid-cols-[auto,1fr] gap-4 pl-8 md:pl-10"
              >
                <div className="relative flex flex-col items-center pt-1">
                  {companyLogos[item.company] ? (
                    <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-slate-900 shadow-md ring-2 ring-sky-500/60">
                      <img
                        src={companyLogos[item.company]}
                        alt={item.company}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-violet-500 text-sm font-semibold text-slate-950 shadow-md">
                      {item.company.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-slate-900/80 p-[1px] shadow-sm shadow-slate-950/60 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-sky-500/50 hover:shadow-sky-950/20">
                  <div className="h-full w-full rounded-2xl bg-slate-950/85 p-5 sm:p-6">
                    <div className="flex flex-col justify-between gap-3 border-b border-slate-800/80 pb-4 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-slate-50">
                          {item.role}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-sky-400">
                          {item.company}
                        </p>
                      </div>
                      <p className="shrink-0 text-xs tabular-nums text-slate-500 sm:text-sm">
                        {item.start} – {item.end}
                      </p>
                    </div>

                    <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-300 sm:text-[0.95rem]">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span
                            className="mt-2 h-1 w-1 flex-none rounded-full bg-sky-400/90"
                            aria-hidden
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {item.tech && item.tech.length > 0 ? (
                      <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-800/80 pt-4">
                        <span className="mr-1 w-full text-[0.65rem] font-semibold uppercase tracking-wider text-slate-500 sm:w-auto sm:py-1">
                          Stack
                        </span>
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-slate-700/60 bg-slate-900/90 px-2.5 py-1 text-[0.7rem] font-medium text-slate-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

