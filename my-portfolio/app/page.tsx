import React from 'react';

/* ✅ TYPES */
type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
  live?: string;
  github?: string;
};

/* ✅ SUB-COMPONENT: PROJECT CARD */
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

/* ✅ MAIN PAGE */
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-white selection:text-black">
      <main className="max-w-5xl mx-auto px-6 pb-24 space-y-40">
        
        {/* HERO SECTION */}
        <section className="min-h-[90vh] flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 font-medium">
            Full Stack TypeScript Engineer · Backend Systems
          </p>

          <h1 className="mt-8 text-5xl md:text-8xl font-bold tracking-tight leading-[1.1]">
            I design and build <br />
            <span className="text-zinc-500">scalable platforms.</span>
          </h1>

          <p className="mt-10 max-w-2xl text-xl text-zinc-400 leading-relaxed">
            I build real-world systems with secure authentication, structured
            databases, and production-grade architecture. My work focuses on
            PostgreSQL (TypeORM & Supabase), Redis caching, and designing systems
            that scale reliably under real usage.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            {[
              "Backend Engineering", 
              "System Design", 
              "PostgreSQL / TypeORM", 
              "Redis / JWT Auth", 
              "MongoDB / Supabase"
            ].map((skill) => (
              <span key={skill} className="border border-white/10 px-4 py-1.5 rounded-full bg-zinc-900/50">
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

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tight">Selected Projects</h2>
            <div className="h-1 w-20 bg-white rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <ProjectCard
              title="Healthcare Appointment System (TypeORM + Redis + JWT)"
              description="A production-grade healthcare system with role-based workflows for doctors and patients. Implements slot locking and transactional booking to prevent double booking."
              tech={["Next.js", "TypeScript", "PostgreSQL", "TypeORM", "Redis", "JWT"]}
              github="https://github.com/Chekwasy/health-typeorm"
            />

            <ProjectCard
              title="Trybet (PostgreSQL + Supabase)"
              description="A betting simulation platform with wallet logic and prediction systems. Built with relational PostgreSQL design and real-time updates."
              tech={["Next.js", "PostgreSQL", "Supabase"]}
              live="https://trybet.com.ng"
            />

            <ProjectCard
              title="SafeBoard – Transport Safety Platform"
              description="A system for verifying vehicle data with structured backend workflows. Includes Cloudinary media uploads and validation pipelines."
              tech={["Next.js", "Supabase", "Cloudinary"]}
              live="https://safeboard.com.ng"
            />

            <ProjectCard
              title="Healthcare Appointment System (Supabase Version)"
              description="Initial version handled scheduling and role-based access control. Demonstrates the transition from BaaS to custom architecture."
              tech={["Next.js", "Supabase", "PostgreSQL"]}
              live="https://health-frontend-eight.vercel.app/"
              github="https://github.com/Chekwasy/health-frontend"
            />

            <ProjectCard
              title="Trybet (MongoDB + Redis Version)"
              description="Performance-focused version using MongoDB and Redis caching. Optimized for fast reads and reduced database load."
              tech={["MongoDB", "Redis", "Node.js"]}
              live="https://nextjs-qvmz.vercel.app/"
              github="https://github.com/Chekwasy/trybet-betting-platform/"
            />
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-20 border-t border-white/10 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let’s Build Something Scalable
          </h2>

          <p className="text-zinc-400 max-w-md mx-auto text-lg">
            I’m currently open to new opportunities and technical collaborations.
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