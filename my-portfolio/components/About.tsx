"use client";

import React from "react";

export default function About() {
  return (
    <section className="py-32 border-t border-white/10">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Left */}

        <div>
          <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm">
            ABOUT ME
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Building software that is
            <span className="text-zinc-500"> scalable, reliable,</span>
            <br />
            and production-ready.
          </h2>

          <div className="mt-10 space-y-5 text-lg leading-8 text-zinc-400">
            <p>
              I'm{" "}
              <span className="text-white font-semibold">
                Richard Chukwuchekwa
              </span>
              , a{" "}
              <span className="text-white">Full Stack Software Engineer</span>{" "}
              with over{" "}
              <span className="text-white">
                2 years of professional experience
              </span>
              building modern web, mobile and backend applications.
            </p>

            <p>
              My engineering experience spans startup environments, remote
              international teams and enterprise operations. I've worked as a
              <span className="text-white"> Full Stack Developer </span>
              at Enterprise Metric Suite Solutions Limited, a
              <span className="text-white"> Backend Engineering Intern </span>
              at PearlThoughts (India), while leading development at
              <span className="text-white"> Chekwasy Businesses</span>.
            </p>

            <p>
              Alongside my software engineering journey, I currently work at
              <span className="text-white"> Truck Transit Park Limited</span>,
              where I've gained valuable experience working within
              technology-driven logistics operations and large-scale business
              processes.
            </p>
          </div>
        </div>

        {/* Right */}

        <div className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">
            <h3 className="text-2xl font-semibold text-white">What I Do</h3>

            <p className="mt-5 text-zinc-400 leading-8">
              I build complete software solutions—from intuitive frontend
              interfaces and scalable backend APIs to authentication systems,
              database architecture, cloud infrastructure and production
              deployments.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">
            <h3 className="text-2xl font-semibold text-white">
              My Engineering Focus
            </h3>

            <ul className="mt-6 space-y-4 text-zinc-400">
              <li>✓ Full Stack Development with Next.js & TypeScript</li>

              <li>✓ Backend APIs using Node.js & Express.js</li>

              <li>✓ React Native Mobile Applications</li>

              <li>✓ PostgreSQL, Supabase, MongoDB & Redis</li>

              <li>✓ Authentication & Authorization Systems</li>

              <li>✓ Docker & Containerized Deployments</li>

              <li>✓ AWS EC2 & DigitalOcean Cloud Infrastructure</li>

              <li>✓ Linux Server Administration</li>

              <li>✓ GitHub Actions CI/CD Pipelines</li>

              <li>✓ Nginx, PM2 & Production Deployments</li>

              <li>✓ REST APIs & Third-Party Integrations</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="mt-24 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-10">
        <h3 className="text-3xl font-bold text-white">
          Engineering Philosophy
        </h3>

        <p className="mt-8 text-lg leading-9 text-zinc-400">
          I believe great software goes beyond writing code. My approach is to
          design systems that are secure, maintainable and built for long-term
          scalability. Whether I'm developing a REST API, architecting a
          database, deploying applications with Docker, or configuring Linux
          servers, I focus on creating solutions that deliver real value to
          businesses and end users.
        </p>

        <p className="mt-8 text-lg leading-9 text-zinc-400">
          I've built and deployed platforms across sports technology,
          healthcare, transport safety and business management—including
          <span className="text-white"> TryBet</span>,
          <span className="text-white"> SafeBoard</span>, and a
          <span className="text-white"> Healthcare Appointment Platform</span>.
          I'm always looking for opportunities to solve meaningful engineering
          problems and contribute to products with real-world impact.
        </p>
      </div>
    </section>
  );
}
