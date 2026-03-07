export default function Home() {
  return (
    <div className="space-y-40">
      {/* HERO */}
      <section className="min-h-[80vh] flex flex-col justify-center">
        <p className="text-sm uppercase tracking-widest text-zinc-400">
          Full Stack TypeScript Engineer
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
          I build scalable web and mobile applications.
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-zinc-400">
          Independent developer with 2+ years of experience designing, building,
          and deploying full-stack platforms using Next.js, React Native,
          Node.js, and MongoDB. Experienced in building real-time systems,
          automated data workflows, and deploying production applications across
          DigitalOcean, Vercel, and Render.
        </p>

        {/* CORE EXPERTISE */}
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-500">
          <span className="border border-white/10 px-3 py-1 rounded-full">
            Next.js Systems
          </span>
          <span className="border border-white/10 px-3 py-1 rounded-full">
            Backend APIs
          </span>
          <span className="border border-white/10 px-3 py-1 rounded-full">
            Real-Time Automation
          </span>
          <span className="border border-white/10 px-3 py-1 rounded-full">
            Cloud Deployment
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
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* TECH STACK */}
      <section>
        <h2 className="text-3xl font-semibold mb-10">Tech Stack</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-zinc-400">
          <div>Next.js</div>
          <div>TypeScript</div>
          <div>React</div>
          <div>React Native</div>
          <div>Node.js</div>
          <div>Express</div>
          <div>MongoDB</div>
          <div>MySQL</div>
          <div>PostgreSQL</div>
          <div>Redis</div>
          <div>DigitalOcean</div>
          <div>Vercel</div>
          <div>Render</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="space-y-16">
        <h2 className="text-4xl font-semibold">Featured Projects</h2>

        <div className="space-y-12">
          {/* TRYBET */}
          <div className="p-8 border border-white/10 rounded-2xl hover:border-white/40 transition">
            <h3 className="text-2xl font-semibold">
              Trybet – Simulated Betting Platform
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              A full-stack betting simulation platform that allows users to
              place virtual bets on real football matches. The system
              automatically retrieves match results and resolves bets, updating
              wallet balances and user dashboards without manual intervention.
            </p>

            <ul className="mt-6 space-y-2 text-zinc-400 text-sm list-disc list-inside">
              <li>Real-time match data scraping</li>
              <li>Automated bet settlement system</li>
              <li>Virtual wallet balance architecture</li>
              <li>User dashboard for live game tracking</li>
              <li>Hidden admin dashboard for system monitoring</li>
              <li>MongoDB data modeling and transaction logic</li>
              <li>Fully typed TypeScript codebase</li>
            </ul>

            {/* ENGINEERING APPROACH */}
            <div className="mt-6 text-sm text-zinc-400">
              <p className="font-semibold text-zinc-300 mb-2">
                Engineering Approach
              </p>

              <p>
                The platform was designed with a modular architecture separating
                match data retrieval, bet processing logic, and wallet balance
                management. Automated match resolution processes update bet
                outcomes and user balances once match results are confirmed,
                ensuring data consistency and eliminating manual settlement
                processes.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-500">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>MongoDB</span>
              <span>Web Scraping</span>
              <span>Vercel</span>
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href="https://nextjs-qvmz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:opacity-90 transition"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/Chekwasy/trybet-betting-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* CRUD APP */}
          <div className="p-8 border border-white/10 rounded-2xl hover:border-white/40 transition">
            <h3 className="text-2xl font-semibold">Worker Management System</h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              A full-stack worker management dashboard designed to manage
              employee records through a secure administrative interface. The
              system includes authentication, worker CRUD operations, and
              profile image uploads while maintaining a responsive user
              experience with skeleton loading.
            </p>

            <ul className="mt-6 space-y-2 text-zinc-400 text-sm list-disc list-inside">
              <li>Secure authentication system</li>
              <li>Worker creation, editing, and deletion</li>
              <li>Profile image upload functionality</li>
              <li>Skeleton loading for optimized UX</li>
              <li>MongoDB schema modeling</li>
              <li>Full TypeScript architecture</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-500">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>MongoDB</span>
              <span>Vercel</span>
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href="https://crudapp-alpha-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:opacity-90 transition"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/Chekwasy/worker-management-system"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DEPLOYMENT EXPERIENCE */}
      <section>
        <h2 className="text-3xl font-semibold mb-8">
          Cloud & Deployment Experience
        </h2>

        <p className="max-w-3xl text-zinc-400">
          Experienced in deploying production applications using DigitalOcean
          VPS infrastructure, configuring Nginx reverse proxies, managing Redis
          caching, and deploying modern web applications across Vercel and
          Render.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center space-y-6">
        <h2 className="text-3xl font-semibold">Let’s Build Something Great</h2>

        <a
          href="mailto:richardchekwas@gmail.com"
          className="inline-block px-8 py-4 rounded-full bg-white text-black font-medium hover:opacity-90 transition"
        >
          Get In Touch
        </a>
      </section>
    </div>
  );
}
