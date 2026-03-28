import React from "react";
import { projects } from "../data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-16"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <header className="mb-10 motion-safe:animate-fade-in-up">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
            Projects
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Selected work
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
            A mix of social platforms, Web3 experiments, and full‑stack products
            that reflect how I build and ship software.
          </p>
        </header>

        <div className="grid gap-7 text-left md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-slate-900/80 p-[1px] shadow-sm shadow-slate-950/60 transition-transform duration-300 hover:-translate-y-1 hover:border-sky-400/70 hover:shadow-sky-500/30 motion-safe:animate-fade-in-up"
            >
              <div className="flex h-full flex-col rounded-2xl bg-slate-950/85 p-5">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-50">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-300">
                  {project.description}
                </p>

                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {project.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-xs text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-slate-600 px-4 py-1.5 text-xs font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

