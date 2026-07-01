"use client";

import React from "react";

const experiences = [
  {
    title: "Full Stack Software Engineer",
    company: "Chekwasy Businesses",
    period: "2023 – Present",
    type: "Founder Projects",
    color: "emerald",
    achievements: [
      "Architect and lead development of TryBet, a production football prediction platform with live users.",
      "Built SafeBoard, a transport safety and verification platform.",
      "Designed scalable REST APIs using Node.js and Express.js.",
      "Developed React Native mobile applications.",
      "Designed PostgreSQL (Supabase) database architecture.",
      "Implemented Docker containerization and CI/CD pipelines.",
      "Managed cloud deployments on DigitalOcean and AWS EC2.",
      "Configured Linux servers, Nginx, PM2 and SSL for production deployments.",
    ],
  },
  {
    title: "Backend Engineering Intern (Remote)",
    company: "PearlThoughts • India",
    period: "2026",
    type: "Remote Internship",
    color: "purple",
    achievements: [
      "Developed backend services using Node.js and Express.js.",
      "Built REST APIs and backend business logic.",
      "Worked with PostgreSQL and TypeORM.",
      "Collaborated remotely with an international engineering team.",
      "Participated in API integration and debugging.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Enterprise Metric Suite Solutions Limited",
    period: "2026",
    type: "Professional Experience",
    color: "blue",
    achievements: [
      "Developed and maintained full-stack business applications.",
      "Built frontend interfaces with Next.js and TypeScript.",
      "Developed backend APIs using Express.js.",
      "Worked with PostgreSQL databases.",
      "Collaborated with engineers to deliver production software.",
    ],
  },
  {
    title: "Operations Officer",
    company: "Truck Transit Park Limited",
    period: "2021 – Present",
    type: "Enterprise Operations",
    color: "orange",
    achievements: [
      "Support technology-enabled logistics operations.",
      "Work within operational workflows supporting the ETO ecosystem.",
      "Coordinate business operations and reporting.",
      "Collaborate across departments to improve operational efficiency.",
    ],
  },
];

const colors = {
  emerald: {
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
    badge: "bg-emerald-500/10 text-emerald-300",
  },
  blue: {
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
    badge: "bg-blue-500/10 text-blue-300",
  },
  purple: {
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
    badge: "bg-purple-500/10 text-purple-300",
  },
  orange: {
    border: "border-orange-500/20",
    bg: "bg-orange-500/5",
    badge: "bg-orange-500/10 text-orange-300",
  },
};

export default function Experience() {
  return (
    <section className="py-32 border-t border-white/10">
      <div className="text-center max-w-4xl mx-auto">
        <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm">
          EXPERIENCE
        </p>

        <h2 className="mt-6 text-5xl md:text-6xl font-bold">
          My Professional Journey
        </h2>

        <p className="mt-8 text-lg text-zinc-400 leading-relaxed">
          Over the last two years, I've worked across startups, enterprise
          operations and international remote teams while designing, developing
          and deploying production software.
        </p>
      </div>

      <div className="mt-20 space-y-10">
        {experiences.map((exp) => {
          const theme = colors[exp.color as keyof typeof colors];

          return (
            <div
              key={exp.company}
              className={`rounded-3xl border ${theme.border} ${theme.bg} p-10 hover:border-white/20 transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${theme.badge}`}
                  >
                    {exp.type}
                  </span>

                  <h3 className="mt-5 text-3xl font-bold text-white">
                    {exp.title}
                  </h3>

                  <p className="mt-2 text-xl text-zinc-300">{exp.company}</p>
                </div>

                <div className="text-zinc-400 text-lg">{exp.period}</div>
              </div>

              <ul className="mt-8 space-y-4">
                {exp.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex gap-4 text-zinc-400 leading-relaxed"
                  >
                    <span className="text-white">•</span>

                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-24 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-10">
        <h3 className="text-3xl font-bold text-white">Beyond Writing Code</h3>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          My experience goes beyond software development. I've worked in
          logistics operations, collaborated with international engineering
          teams, and built production products from idea to deployment. This
          combination of engineering and operational experience helps me build
          software that solves practical business problems while remaining
          scalable, reliable and maintainable.
        </p>
      </div>
    </section>
  );
}
