"use client";

import React from "react";

const links = [
  {
    title: "Email",
    value: "richardchekwas@gmail.com",
    href: "mailto:richardchekwas@gmail.com",
  },
  {
    title: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/richard-chukwuchekwa-052543175",
  },
  {
    title: "GitHub",
    value: "github.com/Chekwasy",
    href: "https://github.com/Chekwasy",
  },
  {
    title: "Portfolio",
    value: "portfolio-nine-lovat-86.vercel.app",
    href: "https://portfolio-nine-lovat-86.vercel.app/",
  },
];

export default function Contact() {
  return (
    <section className="py-32 border-t border-white/10">
      <div className="max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm">
          LET'S CONNECT
        </p>

        <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
          Let's build something
          <span className="text-zinc-500"> amazing together.</span>
        </h2>

        <p className="mt-8 text-lg text-zinc-400 leading-8 max-w-3xl mx-auto">
          I'm currently open to remote Full Stack Software Engineering, Backend
          Engineering, React Native, contract, freelance and consulting
          opportunities.
          <br />
          <br />
          Whether you're looking to hire an engineer, discuss a project or
          simply connect, I'd love to hear from you.
        </p>
      </div>

      {/* Buttons */}

      <div className="mt-14 flex flex-wrap justify-center gap-5">
        <a
          href="mailto:richardchekwas@gmail.com"
          className="rounded-full bg-white px-8 py-4 font-bold text-black hover:scale-105 transition"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/richard-chukwuchekwa-052543175"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 px-8 py-4 hover:bg-white/10 transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/Chekwasy"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 px-8 py-4 hover:bg-white/10 transition"
        >
          GitHub
        </a>

        <a
          href="/Richard_Chukwuchekwa_CV.pdf"
          target="_blank"
          className="rounded-full border border-white/20 px-8 py-4 hover:bg-white/10 transition"
        >
          Download CV
        </a>
      </div>

      {/* Contact Cards */}

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8 hover:border-white/30 hover:bg-zinc-900/70 transition-all duration-300"
          >
            <p className="uppercase tracking-wider text-sm text-zinc-500">
              {link.title}
            </p>

            <h3 className="mt-4 text-2xl font-semibold break-all">
              {link.value}
            </h3>
          </a>
        ))}
      </div>

      {/* Footer */}

      <div className="mt-24 border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-2xl font-semibold">Richard Chukwuchekwa</h3>

          <p className="mt-2 text-zinc-500">Full Stack Software Engineer</p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-zinc-400">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>

          <p className="mt-2 text-zinc-500 text-sm">
            © {new Date().getFullYear()} Richard Chukwuchekwa. All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
