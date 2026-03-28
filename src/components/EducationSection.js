import React from "react";
import { education } from "../data/education";

export function EducationSection() {
  return (
    <section
      id="education"
      className="bg-slate-950 py-16"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <header className="mb-8 motion-safe:animate-fade-in-up">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
            Education
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Academic background
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
            Formal training that underpins how I approach systems and software.
          </p>
        </header>
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-left text-sm text-slate-300 shadow-sm shadow-slate-950/40">
          <p className="text-sm font-semibold text-slate-50">
            {education.degree}
          </p>
          <p className="mt-1 text-xs text-slate-400">
            {education.start} – {education.end}
          </p>
          <p className="mt-2 text-sm">
            Graduated in Computer Science Engineering with a CGPA of{" "}
            <span className="font-semibold">{education.cgpa}</span>, building a
            strong foundation in computer science fundamentals, algorithms, and
            problem solving.
          </p>
        </div>
      </div>
    </section>
  );
}

