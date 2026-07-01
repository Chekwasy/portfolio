"use client";

import React from "react";

type Project = {
  title: string;
  category: string;
  status: string;
  description: string;
  highlights: string[];
  technologies: string[];
  live?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "TryBet",
    category: "Sports Technology",
    status: "Production",

    description:
      "A production football prediction platform where users predict real football matches, compete on weekly leaderboards, earn rewards, and interact with a scalable backend architecture built for real users.",

    highlights: [
      "Designed complete system architecture from frontend to backend.",
      "Built using Next.js, Express.js and PostgreSQL (Supabase).",
      "Developed React Native Android application.",
      "Integrated live football fixtures and automatic result processing.",
      "Implemented authentication, leaderboards and user wallets.",
      "Dockerized deployment with GitHub Actions CI/CD.",
      "Configured Linux servers, Nginx, PM2 and SSL.",
      "Currently running in production.",
    ],

    technologies: [
      "Next.js",
      "React Native",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "Docker",
      "GitHub Actions",
    ],

    live: "https://trybet.com.ng",
  },

  {
    title: "SafeBoard",
    category: "Transport Technology",
    status: "Production",

    description:
      "A transport safety platform designed to improve accountability through vehicle verification, incident reporting and transport management.",

    highlights: [
      "Built secure backend APIs.",
      "Vehicle verification workflows.",
      "Image uploads with Cloudinary.",
      "Supabase authentication.",
      "Production deployment.",
      "REST API architecture.",
    ],

    technologies: [
      "Next.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "Cloudinary",
      "Docker",
    ],

    live: "https://safeboard.com.ng",
  },

  {
    title: "Healthcare Appointment Platform",
    category: "HealthTech",

    status: "Open Source",

    description:
      "Healthcare management platform enabling appointment scheduling, secure authentication and automated patient communication.",

    highlights: [
      "JWT authentication.",
      "Doctor & patient dashboards.",
      "Appointment scheduling.",
      "WhatsApp Cloud API integration.",
      "MessageBird integration.",
      "Webhook automation.",
      "TypeORM architecture.",
    ],

    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "TypeORM",
      "Redis",
      "WhatsApp Cloud API",
    ],

    github: "https://github.com/Chekwasy/health-typeorm",
  },
];

function ProjectCard(project: Project) {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-10 hover:border-white/30 hover:bg-zinc-900/70 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <span className="uppercase tracking-widest text-sm text-zinc-500">
            {project.category}
          </span>

          <h3 className="mt-3 text-4xl font-bold">{project.title}</h3>
        </div>

        <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-5 py-2 text-sm text-emerald-300">
          {project.status}
        </span>
      </div>

      <p className="mt-8 text-zinc-400 text-lg leading-8">
        {project.description}
      </p>

      <div className="mt-10">
        <h4 className="font-semibold text-white">Highlights</h4>

        <ul className="mt-5 space-y-3">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-zinc-400">
              <span>✓</span>

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-zinc-800 px-4 py-2 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-10 flex gap-4 flex-wrap">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-6 py-3 font-semibold text-black hover:scale-105 transition"
          >
            Live Website
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 hover:bg-white/10 transition"
          >
            GitHub Repository
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 border-t border-white/10">
      <div className="text-center max-w-4xl mx-auto">
        <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm">
          FEATURED PROJECTS
        </p>

        <h2 className="mt-6 text-5xl md:text-6xl font-bold">
          Production Software
          <span className="text-zinc-500"> I've Built</span>
        </h2>

        <p className="mt-8 text-lg text-zinc-400 leading-relaxed">
          Every project represents a complete software engineering journey— from
          architecture and database design to cloud deployment, infrastructure
          management and production maintenance.
        </p>
      </div>

      <div className="mt-20 space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <div className="mt-24 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-10">
        <h3 className="text-3xl font-bold">More Than Personal Projects</h3>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          These aren't tutorial projects or coding exercises. They are
          real-world systems designed to solve business problems, deployed to
          production, and maintained using modern engineering practices
          including cloud infrastructure, Docker, CI/CD pipelines, Linux server
          administration, and scalable backend architecture.
        </p>
      </div>
    </section>
  );
}
