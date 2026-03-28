import React from "react";
import { projects } from "../data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-padding relative z-10"
    >
      <div className="mx-auto max-w-6xl text-center">
        <header className="mb-16 motion-safe:animate-fade-in-up">
          <p className="text-sm font-bold uppercase tracking-widest text-purple-400">
            Showcase
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            A mix of social platforms, Web3 experiments, and full-stack products
            that reflect my passion for building.
          </p>
        </header>

        <div className="grid gap-8 text-left lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="glass-card flex flex-col rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-purple-500/10 motion-safe:animate-fade-in-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex h-full flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-purple-400/80">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-base leading-relaxed text-slate-300 flex-grow">
                  {project.description}
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-400">
                  {project.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-purple-500 shadow-[0_0_5px_rgba(168,85,247,0.8)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <div className="mt-6 flex">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline flex items-center gap-2 group-hover:border-purple-500/50 group-hover:bg-purple-500/10"
                    >
                      <span>View Source</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

