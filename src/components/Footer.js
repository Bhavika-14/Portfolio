import React from "react";
import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/50 glass-nav z-20 relative backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} <span className="text-slate-300 font-semibold">{profile.name}</span>. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
             Crafted with <span className="text-red-400 animate-pulse">❤️</span> and Code
          </span>
        </div>
      </div>
    </footer>
  );
}
