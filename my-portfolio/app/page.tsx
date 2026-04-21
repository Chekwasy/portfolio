export default function Home() {
  return (
    <div className="space-y-40">
      {/* HERO */}
      <section className="min-h-[80vh] flex flex-col justify-center">
        <p className="text-sm uppercase tracking-widest text-zinc-400">
          Full Stack TypeScript Engineer
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
          I build scalable, real-world web platforms.
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-zinc-400">
          I design and ship production systems with a focus on performance,
          scalability, and real user impact. My work spans PostgreSQL, MongoDB,
          Redis, and modern TypeScript stacks.
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-500">
          <span className="border border-white/10 px-3 py-1 rounded-full">
            System Design
          </span>
          <span className="border border-white/10 px-3 py-1 rounded-full">
            Backend Engineering
          </span>
          <span className="border border-white/10 px-3 py-1 rounded-full">
            PostgreSQL / Supabase
          </span>
          <span className="border border-white/10 px-3 py-1 rounded-full">
            MongoDB / Redis
          </span>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-white text-black font-medium hover:opacity-90 transition"
          >
            View Projects
          </a>

          <a
            href="https://github.com/Chekwasy"
            target="_blank"
            className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="space-y-16">
        <h2 className="text-4xl font-semibold">Projects</h2>

        {/* TRYBET CURRENT */}
        <div className="p-8 border border-white/10 rounded-2xl hover:border-white/40 transition">
          <h3 className="text-2xl font-semibold">
            Trybet (PostgreSQL + Supabase – Current)
          </h3>

          <p className="mt-4 text-zinc-400">
            Modern betting simulation platform built for scalability using
            PostgreSQL and Supabase. Designed with structured data
            relationships, wallet systems, and an improved UI for real users.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-500">
            <span>Next.js</span>
            <span>PostgreSQL</span>
            <span>Supabase</span>
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href="https://trybet.com.ng"
              target="_blank"
              className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* SAFEBOARD */}
        <div className="p-8 border border-white/10 rounded-2xl hover:border-white/40 transition">
          <h3 className="text-2xl font-semibold">
            SafeBoard – Transport Safety Platform
          </h3>

          <p className="mt-4 text-zinc-400">
            A real-world safety platform that enables users to upload and verify
            vehicle data. Built with scalable backend systems and media
            pipelines.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-500">
            <span>Next.js</span>
            <span>Supabase</span>
            <span>Cloudinary</span>
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href="https://safeboard.com.ng"
              target="_blank"
              className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* TRYBET REDIS VERSION */}
        <div className="p-8 border border-white/10 rounded-2xl hover:border-white/40 transition">
          <h3 className="text-2xl font-semibold">
            Trybet (MongoDB + Redis Version)
          </h3>

          <p className="mt-4 text-zinc-400">
            Performance-focused version of Trybet using MongoDB Atlas and
            Upstash Redis to improve speed, caching, and efficiency of betting
            operations.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-500">
            <span>MongoDB Atlas</span>
            <span>Redis (Upstash)</span>
            <span>Node.js</span>
          </div>
        </div>

        {/* WORKER SYSTEM */}
        <div className="p-8 border border-white/10 rounded-2xl hover:border-white/40 transition">
          <h3 className="text-2xl font-semibold">Worker Management System</h3>

          <p className="mt-4 text-zinc-400">
            Admin dashboard for managing worker records with authentication,
            CRUD operations, and image uploads.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-500">
            <span>Next.js</span>
            <span>MongoDB</span>
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href="https://crudapp-alpha-one.vercel.app/"
              target="_blank"
              className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Chekwasy/worker-management-system"
              target="_blank"
              className="px-4 py-2 rounded-full border border-white/20 text-sm"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* CHEKWASYBET */}
        <div className="p-8 border border-white/10 rounded-2xl hover:border-white/40 transition">
          <h3 className="text-2xl font-semibold">
            ChekwasyBet (First Version)
          </h3>

          <p className="mt-4 text-zinc-400">
            Early version of Trybet built with React (Vite) and Express. This
            system established the foundation for betting logic and backend
            APIs.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-500">
            <span>React (Vite)</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href="https://bet-chekwasy-tech.vercel.app/"
              target="_blank"
              className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Chekwasy/bet.chekwasy.tech"
              target="_blank"
              className="px-4 py-2 rounded-full border border-white/20 text-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-semibold">
          Let’s Build Something Scalable
        </h2>

        <a
          href="mailto:richardchekwas@gmail.com"
          className="inline-block px-8 py-4 rounded-full bg-white text-black font-medium"
        >
          Get In Touch
        </a>
      </section>
    </div>
  );
}
