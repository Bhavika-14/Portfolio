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
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <header className="mb-8 motion-safe:animate-fade-in-up">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
            Beyond the resume
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            How I think about code
          </h2>
        </header>
        <div className="grid gap-5 text-left md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.label}
              className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-sky-500/60 motion-safe:animate-fade-in-up"
            >
              <div className="pointer-events-none absolute inset-0 opacity-40">
                <div className="absolute -right-10 top-0 h-20 w-20 rounded-full bg-sky-500/10 blur-xl" />
              </div>
              <div className="relative">
                <p className="text-sm font-semibold text-sky-300">
                  {item.label}
                </p>
                <p className="mt-3 text-sm text-slate-300">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

