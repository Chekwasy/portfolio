"use client";

import React from "react";

function SkillCard({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8 hover:border-white/30 hover:bg-zinc-900/70 transition-all duration-300">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>

      <p className="mt-3 text-zinc-400 leading-relaxed">{description}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-zinc-800 px-4 py-2 text-sm text-zinc-300 hover:border-white/30 transition"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="py-32 border-t border-white/10">
      <div className="text-center max-w-4xl mx-auto">
        <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm">
          Technical Expertise
        </p>

        <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
          Technologies I use to build
          <span className="text-zinc-500"> production software.</span>
        </h2>

        <p className="mt-8 text-lg text-zinc-400 leading-relaxed">
          My experience spans the complete software development lifecycle— from
          designing intuitive user interfaces to building scalable backend
          services, managing cloud infrastructure, and deploying
          production-ready applications.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCard
          title="Frontend Development"
          description="Building responsive, modern and high-performance user interfaces."
          items={[
            "Next.js",
            "React",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "Redux Toolkit",
            "HTML5",
            "CSS3",
          ]}
        />

        <SkillCard
          title="Backend Engineering"
          description="Designing secure REST APIs and scalable backend systems."
          items={[
            "Node.js",
            "Express.js",
            "REST APIs",
            "JWT Authentication",
            "Redis",
            "Webhooks",
            "API Integration",
            "Authentication",
          ]}
        />

        <SkillCard
          title="Mobile Development"
          description="Cross-platform Android applications using React Native."
          items={[
            "React Native",
            "Expo",
            "Expo Router",
            "NativeWind",
            "Android",
          ]}
        />

        <SkillCard
          title="Databases"
          description="Designing efficient relational and NoSQL database architectures."
          items={[
            "PostgreSQL",
            "Supabase",
            "TypeORM",
            "MongoDB",
            "Redis",
            "SQL",
          ]}
        />

        <SkillCard
          title="Cloud & DevOps"
          description="Deploying and maintaining reliable production infrastructure."
          items={[
            "Docker",
            "GitHub Actions",
            "AWS EC2",
            "DigitalOcean",
            "Ubuntu Linux",
            "PM2",
            "Nginx",
            "HAProxy",
            "Certbot",
          ]}
        />

        <SkillCard
          title="Tools & Services"
          description="Technologies I regularly use when building production applications."
          items={[
            "Git",
            "GitHub",
            "Cloudinary",
            "Supabase Auth",
            "Postman",
            "VS Code",
            "Figma",
            "Vercel",
            "Render",
          ]}
        />

        {/* Skill Levels */}

        <div className="mt-24">
          <p className="text-center uppercase tracking-[0.35em] text-zinc-500 text-sm">
            Proficiency
          </p>

          <h2 className="mt-6 text-center text-4xl md:text-5xl font-bold">
            Core Engineering Expertise
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expert */}

            <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8">
              <h3 className="text-2xl font-semibold text-emerald-300">
                Primary Stack
              </h3>

              <p className="mt-2 text-zinc-400">
                Technologies I use extensively in production.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "TypeScript",
                  "JavaScript",
                  "Next.js",
                  "React",
                  "Node.js",
                  "Express.js",
                  "PostgreSQL",
                  "Supabase",
                  "REST APIs",
                  "Tailwind CSS",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Advanced */}

            <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8">
              <h3 className="text-2xl font-semibold text-blue-300">Advanced</h3>

              <p className="mt-2 text-zinc-400">
                Production deployment, mobile development and infrastructure.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "React Native",
                  "Docker",
                  "Redis",
                  "MongoDB",
                  "GitHub Actions",
                  "AWS EC2",
                  "DigitalOcean",
                  "Ubuntu Linux",
                  "PM2",
                  "Nginx",
                  "Cloudinary",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-2 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Working Knowledge */}

            <div className="rounded-3xl border border-purple-500/20 bg-purple-500/5 p-8">
              <h3 className="text-2xl font-semibold text-purple-300">
                Additional Experience
              </h3>

              <p className="mt-2 text-zinc-400">
                Technologies I've worked with across different projects.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "TypeORM",
                  "Expo",
                  "Expo Router",
                  "NativeWind",
                  "HAProxy",
                  "Certbot",
                  "Vercel",
                  "Render",
                  "Git",
                  "Postman",
                  "Figma",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-purple-500/10 border border-purple-500/20 px-3 py-2 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-10">
        <h3 className="text-3xl font-bold text-white">What sets me apart</h3>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          I don't just build applications—I deliver complete production
          solutions. From planning architecture and designing databases to
          developing APIs, creating responsive user interfaces, configuring
          cloud infrastructure, automating deployments, and maintaining live
          systems, I'm comfortable working across the entire software
          development lifecycle.
        </p>
      </div>
    </section>
  );
}
