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
    <div className="p-8 border border-white/10 rounded-3xl hover:border-white/30 hover:bg-zinc-900/80 transition-all duration-300 bg-zinc-900/40 backdrop-blur-sm">
      <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
        {title}
      </h3>

      <p className="mt-5 text-zinc-400 whitespace-pre-line leading-relaxed text-[15px] md:text-base">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1.5 rounded-full bg-zinc-800/80 text-zinc-300 text-[11px] uppercase tracking-wider font-medium border border-white/5"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition-transform"
          >
            Live Demo
          </a>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

function SkillCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-zinc-900/40">
      <h3 className="text-lg font-semibold text-white">{title}</h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-white/5"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-white selection:text-black overflow-x-hidden">
      <main className="max-w-6xl mx-auto px-6 pb-24">

        {/* HERO */}
        <section className="min-h-screen flex flex-col justify-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)] pointer-events-none"></div>

          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-500 font-medium">
              Full Stack TypeScript Engineer · Backend Systems · Cloud Infrastructure
            </p>

            <h1 className="mt-8 text-5xl md:text-8xl font-bold tracking-tight leading-[1.05]">
              I build scalable <br />
              <span className="text-zinc-500">
                production systems.
              </span>
            </h1>

            <p className="mt-10 max-w-3xl text-xl text-zinc-400 leading-relaxed">
              Backend-focused engineer building real-world applications with
              active users and production infrastructure. I specialize in
              scalable APIs, real-time systems, PostgreSQL architectures,
              Redis workflows, cloud deployments, CI/CD pipelines, and Docker
              containerization.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              {[
                'Backend Engineering',
                'Docker Containerization',
                'AWS EC2',
                'CI/CD Pipelines',
                'PostgreSQL / Supabase',
                'Redis / JWT Auth',
                'Linux Infrastructure',
                'Nginx / HAProxy',
              ].map((skill) => (
                <span
                  key={skill}
                  className="border border-white/10 px-4 py-2 rounded-full bg-zinc-900/60 hover:border-white/30 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-14 flex flex-wrap gap-5">
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

              <a
                href="mailto:richardchekwas@gmail.com"
                className="px-8 py-4 rounded-full border border-white/20 font-medium hover:bg-white/5 transition"
              >
                Contact
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-32 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                About
              </p>

              <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
                Engineering systems built for real usage.
              </h2>
            </div>

            <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
              <p>
                I build backend-driven systems focused on scalability,
                reliability, and production deployment workflows. My projects
                involve real-time processing, external API integrations,
                authentication systems, cloud infrastructure, and performance-focused
                backend architecture.
              </p>

              <p>
                I have experience deploying applications on AWS EC2 and
                DigitalOcean using Ubuntu Linux, Nginx, HAProxy, PM2,
                CI/CD pipelines, and Dockerized environments.
              </p>

              <p>
                Recently, I containerized and deployed full-stack applications
                using Docker workflows inside Linux environments, further
                improving deployment consistency and infrastructure portability.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="py-20 border-t border-white/10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Technical Stack
            </p>

            <h2 className="text-4xl font-bold">
              Infrastructure & Development
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard
              title="Frontend"
              items={[
                'Next.js',
                'React',
                'TypeScript',
                'Tailwind CSS',
              ]}
            />

            <SkillCard
              title="Backend"
              items={[
                'Node.js',
                'Express.js',
                'REST APIs',
                'Redis',
                'JWT Authentication',
              ]}
            />

            <SkillCard
              title="Database"
              items={[
                'PostgreSQL',
                'Supabase',
                'TypeORM',
                'MongoDB',
              ]}
            />

            <SkillCard
              title="Infrastructure & DevOps"
              items={[
                'AWS EC2',
                'Ubuntu Linux',
                'Docker',
                'GitHub Actions',
                'Nginx',
                'HAProxy',
                'PM2',
                'Certbot',
              ]}
            />
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="py-32 border-t border-white/10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Selected Work
            </p>

            <h2 className="text-5xl font-bold tracking-tight">
              Featured Projects
            </h2>

            <div className="h-1 w-24 bg-white rounded-full"></div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10">

            <ProjectCard
              title="Trybet — Real-Time Betting Simulation Platform"
              description={`A live betting simulation platform enabling users to predict real-time football games using dynamic odds and automated result processing.

Integrated external live score systems for automatic validation and game outcome updates.

Built with Next.js, Node.js, PostgreSQL (Supabase), Redis workflows, and production authentication systems.

Deployed using Linux infrastructure with Nginx, HAProxy, PM2, GitHub Actions CI/CD, AWS EC2, and Docker containerization workflows.`}
              tech={[
                'Next.js',
                'Node.js',
                'Supabase',
                'PostgreSQL',
                'Redis',
                'Docker',
                'AWS EC2',
              ]}
              live="https://trybet.com.ng"
              github="https://github.com/Chekwasy/trybet-betting-platform"
            />

            <ProjectCard
              title="Healthcare Appointment System"
              description={`Designed scalable healthcare scheduling workflows with doctor and patient role-based architecture.

Implemented transactional booking systems to prevent double scheduling and maintain appointment integrity.

Built secure authentication systems using JWT and Redis sessions with structured PostgreSQL schemas using TypeORM.`}
              tech={[
                'Next.js',
                'TypeScript',
                'PostgreSQL',
                'Redis',
                'JWT',
                'TypeORM',
              ]}
              github="https://github.com/Chekwasy/health-typeorm"
            />

            <ProjectCard
              title="SafeBoard — Transport Safety Platform"
              description={`Developed a vehicle verification and transport safety platform with structured backend validation pipelines.

Integrated Cloudinary-based media workflows and built real-time processing systems for transport verification operations.`}
              tech={[
                'Next.js',
                'Supabase',
                'Cloudinary',
                'PostgreSQL',
              ]}
              live="https://safeboard.com.ng"
            />
          </div>
        </section>

        {/* JOURNEY */}
        <section className="py-24 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Engineering Journey
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight">
                From deployment workflows to infrastructure systems.
              </h2>
            </div>

            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p>
                My development experience evolved from frontend-focused systems
                into backend engineering, infrastructure management, deployment
                automation, and production architecture.
              </p>

              <p>
                I have deployed applications using Linux servers, configured
                reverse proxies, handled SSL provisioning, built CI/CD
                pipelines, and recently implemented Dockerized application
                workflows within Ubuntu environments.
              </p>

              <p>
                I enjoy building systems that solve practical problems while
                maintaining scalable and maintainable architecture.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-28 border-t border-white/10 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Contact
            </p>

            <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
              Let’s build scalable systems together.
            </h2>

            <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
              Open to backend engineering, full-stack engineering,
              cloud infrastructure, and production-focused software roles.
            </p>

            <div className="mt-12 flex justify-center flex-wrap gap-5">
              <a
                href="mailto:richardchekwas@gmail.com"
                className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform"
              >
                Get In Touch
              </a>

              <a
                href="https://github.com/Chekwasy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 rounded-full border border-white/20 font-medium hover:bg-white/5 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}