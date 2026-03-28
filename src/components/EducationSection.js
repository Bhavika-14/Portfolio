import React from "react";
import { education } from "../data/education";

export function EducationSection() {
  return (
    <section
      id="education"
      className="section-padding relative z-10"
    >
      <div className="mx-auto max-w-5xl text-center">
        <header className="mb-12 motion-safe:animate-fade-in-up">
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-400">
            Education
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Academic <span className="text-gradient">Background</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            Formal training that underpins how I approach systems and software.
          </p>
        </header>
        <div className="glass-card mx-auto max-w-2xl rounded-3xl p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-indigo-500/10 motion-safe:animate-fade-in-up">
          <h3 className="text-xl font-bold tracking-tight text-white">
            {education.degree}
          </h3>
          <p className="mt-2 inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            {education.start} – {education.end}
          </p>
          <p className="mt-6 text-base leading-relaxed text-slate-300">
            Graduated in Computer Science Engineering with a CGPA of{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{education.cgpa}</span>, building a
            strong foundation in computer science fundamentals, algorithms, and
            problem solving.
          </p>
        </div>
      </div>
    </section>
  );
}

