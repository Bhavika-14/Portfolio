import React from "react";
import { profile } from "../data/profile";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 glass-nav transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-lg font-bold text-white shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300 group-hover:scale-105">
            B
          </div>
          <span className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 tracking-wide">
            {profile.name}
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-400 sm:flex">
          <a href="#experience" className="hover:text-white hover:text-shadow-sm transition-colors duration-200">
            Experience
          </a>
          <a href="#projects" className="hover:text-white hover:text-shadow-sm transition-colors duration-200">
            Projects
          </a>
          <a href="#skills" className="hover:text-white hover:text-shadow-sm transition-colors duration-200">
            Skills
          </a>
          <a href="#education" className="hover:text-white hover:text-shadow-sm transition-colors duration-200">
            Education
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="btn-primary"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}
