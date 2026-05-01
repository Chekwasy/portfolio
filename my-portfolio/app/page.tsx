export default function Home() {
return ( <div className="space-y-40">

```
  {/* HERO */}
  <section className="min-h-[85vh] flex flex-col justify-center">
    <p className="text-sm uppercase tracking-widest text-zinc-400">
      Full Stack TypeScript Engineer · Backend Systems
    </p>

    <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
      I design and build scalable backend-driven platforms.
    </h1>

    <p className="mt-8 max-w-2xl text-lg text-zinc-400">
      I build real-world systems with secure authentication, structured
      databases, and production-grade architecture. My work focuses on
      PostgreSQL (TypeORM & Supabase), Redis caching, and designing systems
      that scale reliably under real usage.
    </p>

    <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-500">
      <span className="border border-white/10 px-3 py-1 rounded-full">
        Backend Engineering
      </span>
      <span className="border border-white/10 px-3 py-1 rounded-full">
        System Design
      </span>
      <span className="border border-white/10 px-3 py-1 rounded-full">
        PostgreSQL / TypeORM
      </span>
      <span className="border border-white/10 px-3 py-1 rounded-full">
        Redis / JWT Auth
      </span>
      <span className="border border-white/10 px-3 py-1 rounded-full">
        MongoDB / Supabase
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

    {/* HEALTHCARE TYPEORM */}
    <ProjectCard
      title="Healthcare Appointment System (TypeORM + Redis + JWT)"
      description={`A production-grade healthcare system with role-based workflows for doctors and patients.
```

Patients can book, cancel, and reschedule appointments, while doctors manage schedules and confirm visits.

Built with TypeORM and PostgreSQL for strict relational integrity. Authentication is handled using JWT and Redis sessions.

Implements slot locking, transactional booking, and strict state transitions to prevent double booking and ensure data consistency.`}
tech={["Next.js", "TypeScript", "PostgreSQL", "TypeORM", "Redis", "JWT"]}
github="https://github.com/Chekwasy/health-typeorm"
/>

```
    {/* HEALTHCARE SUPABASE */}
    <ProjectCard
      title="Healthcare Appointment System (Supabase Version)"
      description={`Initial version of the healthcare system built with Supabase.
```

Focused on rapid development using Supabase Auth and relational joins.

Handled scheduling, booking, and role-based access control.

This project demonstrates the transition from backend-as-a-service to a fully custom backend architecture.`}
tech={["Next.js", "Supabase", "PostgreSQL"]}
live="https://health-frontend-eight.vercel.app/"
github="https://github.com/Chekwasy/health-frontend"
/>

```
    {/* TRYBET CURRENT */}
    <ProjectCard
      title="Trybet (PostgreSQL + Supabase)"
      description={`A scalable betting simulation platform with wallet systems and prediction logic.
```

Built using PostgreSQL relational design and Supabase for real-time updates.

Includes transaction flows, admin controls, and optimized UI for engagement.`}
tech={["Next.js", "PostgreSQL", "Supabase"]}
live="https://trybet.com.ng"
/>

```
    {/* SAFEBOARD */}
    <ProjectCard
      title="SafeBoard – Transport Safety Platform"
      description={`A real-world system for verifying vehicle data and improving transport safety.
```

Includes media uploads using Cloudinary and backend validation pipelines.

Designed for scalability and structured data handling.`}
tech={["Next.js", "Supabase", "Cloudinary"]}
live="https://safeboard.com.ng"
/>

```
    {/* TRYBET REDIS */}
    <ProjectCard
      title="Trybet (MongoDB + Redis Version)"
      description={`Performance-optimized version of Trybet using MongoDB and Redis.
```

Focuses on caching, reducing database load, and improving response time.

Demonstrates system performance optimization techniques.`}
tech={["MongoDB", "Redis", "Node.js"]}
live="https://nextjs-qvmz.vercel.app/"
github="https://github.com/Chekwasy/trybet-betting-platform/"
/>

```
    {/* WORKER SYSTEM */}
    <ProjectCard
      title="Worker Management System"
      description={`Admin dashboard with authentication, CRUD operations, and image uploads.
```

Designed to demonstrate structured backend logic and UI interaction patterns.`}
tech={["Next.js", "MongoDB"]}
live="https://crudapp-alpha-one.vercel.app/"
github="https://github.com/Chekwasy/worker-management-system"
/>

```
    {/* CHEKWASYBET */}
    <ProjectCard
      title="ChekwasyBet (First Version)"
      description={`Early betting system built with React and Express.
```

Established foundational backend APIs, routing logic, and system design principles that evolved into later platforms.`}
tech={["React", "Express", "MongoDB"]}
live="https://bet-chekwasy-tech.vercel.app/"
github="https://github.com/Chekwasy/bet.chekwasy.tech"
/> </section>

```
  {/* CONTACT */}
  <section className="text-center space-y-6">
    <h2 className="text-3xl font-semibold">
      Let’s Build Something Scalable
    </h2>

    <p className="text-zinc-400">
      I’m open to opportunities where I can build impactful systems and
      solve real-world problems.
    </p>

    <a
      href="mailto:richardchekwas@gmail.com"
      className="inline-block px-8 py-4 rounded-full bg-white text-black font-medium"
    >
      Get In Touch
    </a>
  </section>
</div>
```

);
}

/* 🔥 REUSABLE PROJECT CARD */
function ProjectCard({ title, description, tech, live, github }: any) {
return ( <div className="p-8 border border-white/10 rounded-2xl hover:border-white/40 transition"> <h3 className="text-2xl font-semibold">{title}</h3>

```
  <p className="mt-4 text-zinc-400 whitespace-pre-line">
    {description}
  </p>

  <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-500">
    {tech.map((t: string) => (
      <span key={t}>{t}</span>
    ))}
  </div>

  <div className="mt-6 flex gap-4">
    {live && (
      <a
        href={live}
        target="_blank"
        className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium"
      >
        Live Demo
      </a>
    )}

    {github && (
      <a
        href={github}
        target="_blank"
        className="px-4 py-2 rounded-full border border-white/20 text-sm"
      >
        GitHub
      </a>
    )}
  </div>
</div>
```

);
}
