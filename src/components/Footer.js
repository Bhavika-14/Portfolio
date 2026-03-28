import React from "react";
import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-xs text-slate-500">Designed with ❤️</span>
        </div>
      </div>
    </footer>
  );
}
