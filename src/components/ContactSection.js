import React from "react";
import { profile } from "../data/profile";

export function ContactSection() {
  const { social } = profile;

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="mx-auto max-w-3xl text-center motion-safe:animate-fade-in-up glass-card rounded-3xl p-10 md:p-16 border-t border-slate-700/50">
        <header>
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Let's get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="mx-auto mt-6 text-base md:text-lg text-slate-300 leading-relaxed">
            I'm open to backend and full-stack roles, interesting product
            work, and collaborations. The best way to reach me is via email or
            LinkedIn.
          </p>
        </header>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          {social.email && (
            <a
              href={social.email}
              className="btn-primary"
            >
              Email Me
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              Connect on LinkedIn
            </a>
          )}
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="btn-outline border-slate-700 hover:border-slate-500 hover:bg-slate-800"
            >
              View GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

