import React from "react";
import { profile } from "../data/profile";
import heroImage from "./assets/coder-girl-v4.png";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[90vh] flex items-center"
    >
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-16 px-6 py-20 lg:flex-row lg:items-center lg:py-28 motion-safe:animate-fade-in-up">
        {/* Text Content */}
        <div className="flex-1 space-y-8 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Software Development Engineer
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl/tight">
              Building scalable <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 drop-shadow-sm">
                backend systems
              </span>
            </h1>
            <p className="text-xl font-medium text-indigo-400">
              Hi, I'm {profile.name}.
            </p>
          </div>

          <p className="mx-auto max-w-xl text-base text-slate-400 leading-relaxed lg:mx-0">
            {profile.heroSummary}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4 lg:justify-start">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-cyan-500/40 transition-all hover:-translate-y-1"
            >
              Connect on LinkedIn
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full border border-indigo-500/50 text-slate-300 font-semibold hover:bg-indigo-500/10 hover:text-indigo-300 transition-all"
              >
                Download Resume
              </a>
            )}
          </div>
        </div>

        {/* Image Container without glare */}
        <div className="relative flex flex-1 justify-center lg:justify-end z-10">
          <div className="relative h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-[2.5rem] border border-slate-700/50 bg-slate-800/50 shadow-2xl backdrop-blur-sm transition-all duration-500 group">
            <img
              src={heroImage}
              alt="Animated Coder Girl"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
