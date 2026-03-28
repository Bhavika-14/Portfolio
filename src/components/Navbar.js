import React from "react";
import { profile } from "../data/profile";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#hero" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-violet-500 text-sm font-semibold text-slate-950 shadow-sm">
            B
          </div>
          <span className="text-sm font-semibold text-slate-100">
            {profile.name}
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 dark:text-slate-300 sm:flex">
          <a href="#experience" className="hover:text-sky-300">
            Experience
          </a>
          <a href="#projects" className="hover:text-sky-300">
            Projects
          </a>
          <a href="#skills" className="hover:text-sky-300">
            Skills
          </a>
          <a href="#education" className="hover:text-sky-300">
            Education
          </a>
          <a href="#contact" className="hover:text-sky-300">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-full bg-sky-500 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-sm shadow-sky-500/40 transition hover:bg-sky-400 sm:text-sm"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
