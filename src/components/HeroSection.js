import React from "react";
import { profile } from "../data/profile";
import profileImage from "./assets/profile-pic.jpeg";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-4rem] h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-12 px-6 py-20 md:flex-row md:items-center md:py-28 motion-safe:animate-fade-in-up">
        <div className="flex-1 space-y-7">
          <p className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
            Software Development Engineer
          </p>
          <div>
            <p className="text-sm text-slate-400">Hello, I&apos;m</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
              {profile.title}
            </p>
          </div>

          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            {profile.heroSummary}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
            >
              Let&apos;s connect on LinkedIn
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-slate-600 bg-slate-950/40 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
              >
                Download resume
              </a>
            )}
          </div>
        </div>

        <div className="relative flex flex-1 justify-center md:justify-end">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-slate-200 bg-slate-900/70 shadow-[0_0_55px_-18px_rgba(56,189,248,0.7)] sm:h-44 sm:w-44 md:h-48 md:w-48 motion-safe:animate-float">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(139,92,246,0.25),transparent_55%)]" />
            <img
              src={profileImage}
              alt={profile.name}
              className="relative h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

