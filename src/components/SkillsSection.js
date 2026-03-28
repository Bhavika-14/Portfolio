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
      className="section-padding relative z-10"
    >
      <div className="mx-auto max-w-5xl text-center">
        <header className="mb-12 motion-safe:animate-fade-in-up">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            Skills
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            My <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            Technologies and tools I use most often when building and scaling
            products.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((name, index) => {
            const Icon = iconMap[name] || null;
            return (
              <div
                key={name}
                className="group flex items-center gap-3 glass-card rounded-full px-5 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-cyan-500/20 motion-safe:animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {Icon ? (
                  <Icon className="h-5 w-5 text-slate-300 transition-colors duration-300 group-hover:text-cyan-400" />
                ) : (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-[10px] font-bold text-slate-300 group-hover:text-cyan-400 transition-colors">
                    {name.charAt(0)}
                  </div>
                )}
                <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

