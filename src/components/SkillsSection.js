import React from "react";
import { skills } from "../data/skills";
import {
  SiDocker,
  SiExpress,
  SiGit,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSequelize,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiAmazonwebservices,
} from "react-icons/si";
import { FaDatabase, FaJava, FaEthereum } from "react-icons/fa";

const iconMap = {
  Java: FaJava,
  TypeScript: SiTypescript,
  Python: SiPython,
  "Spring Boot": SiSpringboot,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  AWS: SiAmazonwebservices,
  Kubernetes: SiKubernetes,
  Docker: SiDocker,
  SQL: FaDatabase,
  MongoDB: SiMongodb,
  Git: SiGit,
  Sequelize: SiSequelize,
  "Ethers.js": FaEthereum,
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-16"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <header className="mb-8 motion-safe:animate-fade-in-up">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
            Skills
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            My toolkit
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
            Technologies and tools I use most often when building and scaling
            products.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((name) => {
            const Icon = iconMap[name] || null;
            return (
              <div
                key={name}
                className="group flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs text-slate-200 shadow-sm shadow-slate-950/70 transition-transform duration-300 hover:-translate-y-0.5 hover:border-sky-400/70 hover:shadow-sky-500/20 motion-safe:animate-fade-in-up"
              >
                {Icon ? (
                  <Icon className="h-4 w-4 text-slate-100/90 group-hover:text-sky-300" />
                ) : (
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-800 text-[9px] font-semibold text-slate-100">
                    {name.charAt(0)}
                  </div>
                )}
                <span>{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

