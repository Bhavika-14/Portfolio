import React from "react";

export function CodingSection() {
  const items = [
    {
      label: "Strive for greatness.",
      text: "I love exploring distributed systems, microservices, and event-driven architecture — and bringing those ideas into real products.",
    },
    {
      label: "</code>",
      text: "Clean, readable code that future me (and my teammates) will thank me for.",
    },
    {
      label: "{…shipFast}",
      text: "Bias for action: experiment, learn, ship, and iterate with safety and reliability in mind.",
    },
  ];

  return (
    <section className="section-padding relative z-10">
      <div className="mx-auto max-w-6xl text-center">
        <header className="mb-12 motion-safe:animate-fade-in-up">
          <p className="text-sm font-bold uppercase tracking-widest text-purple-400">
            Beyond the resume
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            How I think about <span className="text-gradient">Code</span>
          </h2>
        </header>
        <div className="grid gap-6 text-left md:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={item.label}
              className="glass-card relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-purple-500/20 motion-safe:animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="pointer-events-none absolute -right-10 top-0 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl transition-opacity duration-300 group-hover:bg-purple-500/20" />
              <div className="relative z-10">
                <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-mono">
                  {item.label}
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-300">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

