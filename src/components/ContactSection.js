import React from "react";
import { profile } from "../data/profile";

export function ContactSection() {
  const { social } = profile;

  return (
    <section id="contact" className="bg-slate-950 py-16">
      <div className="mx-auto max-w-5xl px-6 text-center motion-safe:animate-fade-in-up">
        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
            Contact
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Let&apos;s get in touch
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
            I&apos;m open to backend and full‑stack roles, interesting product
            work, and collaborations. The best way to reach me is via email or
            LinkedIn.
          </p>
        </header>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {social.email && (
            <a
              href={social.email}
              className="inline-flex items-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
            >
              Email me
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
            >
              Connect on LinkedIn
            </a>
          )}
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
            >
              View GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

