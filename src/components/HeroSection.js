import React from "react";
import { profile } from "../data/profile";
import profileImage from "./assets/profile-pic.jpeg";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Animated glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: "4s" }}></div>

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
            <p className="text-xl font-medium text-indigo-400">
              Hi, I'm {profile.name}.
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl/tight">
              Building scalable <br className="hidden lg:block" />
              <span className="text-gradient drop-shadow-sm">
                backend systems
              </span>
            </h1>
          </div>

          <p className="mx-auto max-w-xl text-base text-slate-400 leading-relaxed lg:mx-0">
            {profile.heroSummary}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4 lg:justify-start">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Connect on LinkedIn
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                Download Resume
              </a>
            )}
          </div>
        </div>

        {/* Image Container */}
        <div className="relative flex flex-1 justify-center z-10">
          <div className="relative h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-[2.5rem] border border-slate-700/50 bg-slate-800/50 shadow-2xl backdrop-blur-sm motion-safe:animate-float transition-all duration-500 hover:shadow-indigo-500/20 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={profileImage}
              alt={profile.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

