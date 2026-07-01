"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)] pointer-events-none" />

      <div className="relative z-10">
        {/* Availability */}
        <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-emerald-300">
            Open to Remote Full Stack Opportunities
          </span>
        </div>

        {/* Subtitle */}
        <p className="mt-8 text-sm uppercase tracking-[0.35em] text-zinc-500 font-medium">
          Full Stack Software Engineer • Backend Systems • Cloud Infrastructure
        </p>

        {/* Title */}
        <h1 className="mt-8 text-5xl md:text-8xl font-bold tracking-tight leading-[1.05]">
          Building reliable
          <br />
          <span className="text-white">production software</span>
          <br />
          <span className="text-zinc-500">from idea to deployment.</span>
        </h1>

        {/* Intro */}
        {/* Intro */}

        <p className="mt-10 max-w-4xl text-lg md:text-xl text-zinc-400 leading-relaxed">
          I'm{" "}
          <span className="text-white font-semibold">Richard Chukwuchekwa</span>
          , a <span className="text-white">Full Stack Software Engineer</span>{" "}
          with{" "}
          <span className="text-white">
            2+ years of professional experience
          </span>{" "}
          building scalable web, mobile, and backend applications.
          <br />
          <br />I specialize in{" "}
          <span className="text-white">
            Next.js, React Native, Node.js, Express.js, PostgreSQL, Supabase,
            MongoDB, Docker, Redis
          </span>{" "}
          and modern cloud infrastructure.
          <br />
          <br />
          I've built production platforms across{" "}
          <span className="text-white">
            sports technology, healthcare, transport safety
          </span>{" "}
          and business management, taking products from idea to deployment while
          focusing on scalability, reliability, and user experience.
        </p>

        {/* Tech Pills */}

        <div className="mt-12 flex flex-wrap gap-3">
          {[
            "TypeScript",
            "Next.js",
            "React Native",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Supabase",
            "MongoDB",
            "Redis",
            "Docker",
            "AWS EC2",
            "DigitalOcean",
            "GitHub Actions",
            "Linux",
            "Nginx",
            "PM2",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-300 transition hover:border-white/30 hover:bg-zinc-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}

        <div className="mt-14 flex flex-wrap gap-5">
          <a
            href="#projects"
            className="rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="https://www.linkedin.com/in/richard-chukwuchekwa-052543175"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-8 py-4 font-medium transition hover:bg-white/10"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Chekwasy"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-8 py-4 font-medium transition hover:bg-white/10"
          >
            GitHub
          </a>

          <a
            href="/Richard_Chukwuchekwa_CV.pdf"
            target="_blank"
            className="rounded-full border border-white/20 px-8 py-4 font-medium transition hover:bg-white/10"
          >
            Resume
          </a>

          <a
            href="mailto:richardchekwas@gmail.com"
            className="rounded-full border border-white/20 px-8 py-4 font-medium transition hover:bg-white/10"
          >
            Contact
          </a>
        </div>

        {/* Bottom Highlights */}

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6">
            <h3 className="text-4xl font-bold text-white">2+</h3>

            <p className="mt-2 text-zinc-400">
              Years of professional software engineering experience.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6">
            <h3 className="text-4xl font-bold text-white">3</h3>

            <p className="mt-2 text-zinc-400">
              Production platforms built and deployed.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6">
            <h3 className="text-4xl font-bold text-white">Full Stack</h3>

            <p className="mt-2 text-zinc-400">
              Frontend, backend, mobile, DevOps and cloud infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
