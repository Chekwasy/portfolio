import React from 'react';

/* TYPES */
type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
  live?: string;
  github?: string;
};

function ProjectCard({
  title,
  description,
  tech,
  live,
  github,
}: ProjectProps) {
  return (
    <div className="p-8 border border-white/10 rounded-2xl hover:border-white/40 transition-colors bg-zinc-900/50">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>

      <p className="mt-4 text-zinc-400 whitespace-pre-line leading-relaxed">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 rounded bg-zinc-800 text-zinc-500 text-[10px] uppercase tracking-wider font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-8 flex gap-4">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition"
          >
            Live Demo
          </a>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-white selection:text-black">
      <main className="max-w-5xl mx-auto px-6 pb-24 space-y-40">

        {/* HERO */}
        <section className="min-h-[90vh] flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 font-medium">
            Full Stack TypeScript Engineer · Backend Systems · Infrastructure
          </p>

          <h1 className="mt-8 text-5xl md:text-8xl font-bold tracking-tight leading-[1.1]">
            I build real-world <br />
            <span className="text-zinc-500">production systems.</span>
          </h1>

          <p className="mt-10 max-w-2xl text-xl text-zinc-400 leading-relaxed">
            I design and deploy backend-driven applications with real users,
            focusing on scalable architecture, real-time data processing,
            authentication systems, and cloud infrastructure. My work spans
            PostgreSQL systems, Redis caching, and production deployments using
            Linux servers, reverse proxies, and secure environments.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            {[
              "Backend Engineering",
              "System Design",
              "PostgreSQL / Supabase",
              "Redis / JWT Auth",
              "Cloud Deployment (Linux, Nginx)",
            ].map((skill) => (
              <span
                key={skill}
                className="border border-white/10 px-4 py-1.5 rounded-full bg-zinc-900/50"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform"
            >
              View Projects
            </a>

            <a
              href="https://github.com/Chekwasy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/20 font-medium hover:bg-white/5 transition"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* ENGINEERING FOCUS */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Engineering Focus</h2>
          <p className="text-zinc-400 max-w-3xl">
            I specialize in backend-focused systems with real-world usage. My
            work involves designing scalable APIs, integrating external data
            sources, handling real-time updates, implementing authentication
            systems, and deploying applications with production-grade
            infrastructure including Nginx, SSL, and server management.
          </p>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-white rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-8">

            <ProjectCard
              title="Trybet – Real-Time Betting Simulation Platform (Production)"
              description={`A live betting simulation platform enabling users to predict real-time games using dynamic odds.

Integrated external live score data sources for automated result validation and outcome processing.

Built full-stack architecture using Next.js and Node.js with Supabase (PostgreSQL & Auth), designed for real user activity and concurrent interactions.

Deployed on cloud infrastructure with Nginx/HAProxy reverse proxy, SSL (Certbot), and continuous system improvements.`}
              tech={["Next.js", "Node.js", "PostgreSQL", "Supabase", "Redis"]}
              live="https://trybet.com.ng"
            />

            <ProjectCard
              title="Healthcare Appointment System (Production Architecture)"
              description={`Designed a scalable healthcare platform with role-based workflows for doctors and patients.

Implemented transactional booking logic and slot management to prevent double booking.

Built secure authentication using JWT and Redis sessions, with structured PostgreSQL schema using TypeORM.`}
              tech={["Next.js", "TypeScript", "PostgreSQL", "TypeORM", "Redis", "JWT"]}
              github="https://github.com/Chekwasy/health-typeorm"
            />

            <ProjectCard
              title="SafeBoard – Transport Safety Platform"
              description={`Built a verification platform for vehicle data with structured backend workflows and validation pipelines.

Implemented media uploads using Cloudinary and designed backend logic for real-time verification and processing.`}
              tech={["Next.js", "Supabase", "Cloudinary"]}
              live="https://safeboard.com.ng"
            />
          </div>
        </section>

        {/* OTHER PROJECTS */}
        <section className="space-y-10">
          <h2 className="text-2xl font-semibold text-zinc-400">
            Earlier Projects & Experiments
          </h2>

          <div className="grid grid-cols-1 gap-6">

            <ProjectCard
              title="Healthcare System (Supabase Version)"
              description="Initial version demonstrating real-time database usage, authentication, and scheduling logic before transitioning to custom backend architecture."
              tech={["Next.js", "Supabase", "PostgreSQL"]}
              live="https://health-frontend-eight.vercel.app/"
              github="https://github.com/Chekwasy/health-frontend"
            />

            <ProjectCard
              title="Trybet (MongoDB + Redis Version)"
              description="Earlier performance-focused version using MongoDB and Redis for caching and fast reads, demonstrating system evolution and optimization strategies."
              tech={["MongoDB", "Redis", "Node.js"]}
              github="https://github.com/Chekwasy/trybet-betting-platform/"
            />
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-20 border-t border-white/10 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let’s Build Something Scalable
          </h2>

          <p className="text-zinc-400 max-w-md mx-auto text-lg">
            I’m open to backend engineering roles, cloud-focused positions,
            and building production systems with real impact.
          </p>

          <a
            href="mailto:richardchekwas@gmail.com"
            className="inline-block px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:opacity-90 transition"
          >
            Get In Touch
          </a>
        </section>

      </main>
    </div>
  );
}