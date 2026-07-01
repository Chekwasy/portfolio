"use client";

import React from "react";

export default function Journey() {
  return (
    <section className="py-32 border-t border-white/10">
      <div className="grid lg:grid-cols-2 gap-20">
        {/* Left */}

        <div>
          <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm">
            ENGINEERING PHILOSOPHY
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Building software
            <span className="text-zinc-500"> that makes a difference.</span>
          </h2>
        </div>

        {/* Right */}

        <div className="space-y-8 text-lg text-zinc-400 leading-9">
          <p>
            My journey into software engineering started with curiosity and
            quickly evolved into building production systems that solve
            real-world business problems. Today, I enjoy working across the
            entire software development lifecycle—from planning and system
            architecture to deployment and long-term maintenance.
          </p>

          <p>
            I believe great software is more than writing clean code. It should
            be scalable, secure, maintainable, and provide real value to the
            people who use it. Every project I build follows this philosophy.
          </p>

          <p>
            Whether I'm creating REST APIs, designing PostgreSQL databases,
            deploying Docker containers, configuring Linux servers or building
            responsive user interfaces, I focus on creating reliable systems
            that businesses can confidently depend on.
          </p>

          <p>
            I enjoy collaborating with teams, learning new technologies,
            improving engineering processes, and solving complex technical
            challenges. Every project is an opportunity to grow while delivering
            software that has real-world impact.
          </p>
        </div>
      </div>

      {/* Core Values */}

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">
          <h3 className="text-2xl font-semibold">🚀 Build</h3>

          <p className="mt-5 text-zinc-400 leading-8">
            I enjoy transforming ideas into reliable production software using
            modern engineering practices and scalable architecture.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">
          <h3 className="text-2xl font-semibold">📚 Learn</h3>

          <p className="mt-5 text-zinc-400 leading-8">
            Technology evolves rapidly, and I'm committed to continuously
            improving my skills while exploring better ways to build software.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">
          <h3 className="text-2xl font-semibold">🤝 Collaborate</h3>

          <p className="mt-5 text-zinc-400 leading-8">
            I enjoy working with designers, engineers and stakeholders to build
            products that solve meaningful problems and create lasting value.
          </p>
        </div>
      </div>

      {/* Quote */}

      <div className="mt-24 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-12 text-center">
        <h3 className="text-4xl font-bold leading-tight">
          "Great software isn't just built.
          <br />
          It's engineered for people."
        </h3>

        <p className="mt-8 text-zinc-400 text-lg">
          That's the mindset I bring to every project, every deployment and
          every line of code.
        </p>
      </div>
    </section>
  );
}
