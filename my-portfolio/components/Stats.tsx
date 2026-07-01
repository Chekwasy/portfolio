"use client";

import React from "react";

const stats = [
  {
    value: "2+",
    label: "Years Professional Experience",
    description:
      "Designing, building, deploying and maintaining production-ready web, mobile and backend applications.",
  },
  {
    value: "5+",
    label: "Production Applications",
    description:
      "Delivered production software including TryBet, SafeBoard, Healthcare Appointment Platform and other business applications.",
  },
  {
    value: "20+",
    label: "Technologies",
    description:
      "Experienced across frontend, backend, databases, cloud infrastructure, DevOps and mobile development.",
  },
  {
    value: "4",
    label: "Professional Roles",
    description:
      "Experience spanning startups, remote engineering, enterprise software and logistics operations.",
  },
];

export default function Stats() {
  return (
    <section className="py-28 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm">
          PROFESSIONAL HIGHLIGHTS
        </p>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
          Building software that powers
          <span className="text-zinc-500"> real businesses.</span>
        </h2>

        <p className="mt-8 text-lg text-zinc-400 leading-relaxed">
          I specialize in building complete software solutions—from responsive
          frontend applications and scalable backend APIs to cloud
          infrastructure, production deployments and DevOps automation. My focus
          is delivering reliable, secure and maintainable systems that create
          real business value.
        </p>
      </div>

      {/* Statistics */}

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm p-8 transition-all duration-300 hover:border-white/30 hover:bg-zinc-900/70"
          >
            <h3 className="text-5xl font-bold text-white">{stat.value}</h3>

            <h4 className="mt-4 text-xl font-semibold text-white">
              {stat.label}
            </h4>

            <p className="mt-5 text-zinc-400 leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Core Technologies */}

      <div className="mt-24">
        <p className="text-center uppercase tracking-[0.35em] text-zinc-500 text-sm">
          CORE TECHNOLOGIES
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            "TypeScript",
            "JavaScript",
            "Next.js",
            "React",
            "React Native",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Supabase",
            "TypeORM",
            "MongoDB",
            "Redis",
            "Docker",
            "GitHub Actions",
            "AWS EC2",
            "DigitalOcean",
            "Ubuntu Linux",
            "Nginx",
            "HAProxy",
            "PM2",
            "Cloudinary",
            "REST APIs",
            "JWT",
            "Tailwind CSS",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-300 transition hover:border-white/30 hover:bg-zinc-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Career Summary */}

      <div className="mt-24 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-10">
        <h3 className="text-3xl font-bold">What I Bring</h3>

        <p className="mt-6 text-zinc-400 leading-8 text-lg">
          Over the last two years, I've built and deployed software across
          sports technology, healthcare, transport safety and business
          management. My experience includes developing modern frontend
          interfaces, scalable backend APIs, authentication systems,
          cloud-native infrastructure, Dockerized deployments, CI/CD pipelines,
          and production monitoring.
        </p>

        <p className="mt-6 text-zinc-400 leading-8 text-lg">
          I've worked with both Nigerian and international teams while also
          leading the development of my own production platforms under Chekwasy
          Businesses. I enjoy solving complex engineering problems and building
          software that is secure, scalable and ready for production.
        </p>
      </div>
    </section>
  );
}
