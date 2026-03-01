export default function Home() {
  return (
    <div className="space-y-40">
      {/* HERO */}
      <section className="min-h-[80vh] flex flex-col justify-center">
        <p className="text-sm uppercase tracking-widest text-zinc-400">
          Full Stack Software Engineer
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
          I build production-ready web & mobile applications.
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-zinc-400">
          Independent developer with 2+ years of experience building and
          deploying full-stack platforms using Next.js, React Native, Node.js,
          MongoDB, MySQL, and PostgreSQL. Experienced in cloud deployments
          (DigitalOcean, Vercel, Render), payment integration (Paystack), and
          scalable backend architecture.
        </p>

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

      {/* TECH STACK */}
      <section>
        <h2 className="text-3xl font-semibold mb-10">Tech Stack</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-zinc-400">
          <div>Next.js</div>
          <div>React</div>
          <div>React Native</div>
          <div>Node.js</div>
          <div>Express</div>
          <div>MongoDB</div>
          <div>MySQL</div>
          <div>PostgreSQL</div>
          <div>Redis</div>
          <div>DigitalOcean</div>
          <div>Render</div>
          <div>Vercel</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="space-y-16">
        <h2 className="text-4xl font-semibold">Featured Projects</h2>

        <div className="space-y-12">
          {/* PROJECT 1 – TRYBET NEXTJS */}
          <div className="p-8 border border-white/10 rounded-2xl hover:border-white/40 transition">
            <h3 className="text-2xl font-semibold">
              Trybet – Simulated Betting Platform
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Full-stack Next.js application that simulates a real betting
              platform using virtual balances (no real money). Users stake on
              real-world games (1X2 format), track live scores scraped in
              real-time, and receive win/loss updates automatically when matches
              close.
            </p>

            <ul className="mt-6 space-y-2 text-zinc-400 text-sm list-disc list-inside">
              <li>Real-time game & score scraping</li>
              <li>Automated match closure logic (Win/Loss system)</li>
              <li>Paystack integration architecture</li>
              <li>Live game tracking dashboard</li>
              <li>Full TypeScript codebase</li>
              <li>MongoDB database design</li>
              <li>Deployed on Vercel</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-500">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>MongoDB</span>
              <span>Web Scraping</span>
              <span>Vercel</span>
            </div>

            <a
              href="https://nextjs-qvmz.vercel.app/"
              target="_blank"
              className="inline-block mt-6 text-sm underline"
            >
              Live Project →
            </a>
          </div>

          {/* PROJECT 2 – CRUD APP */}
          <div className="p-8 border border-white/10 rounded-2xl hover:border-white/40 transition">
            <h3 className="text-2xl font-semibold">
              Full-Stack CRUD Worker Management System
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Complete CRUD system allowing account creation, login, worker
              creation, profile updates, image uploads, and deletion. Includes
              loading skeletons and optimized UX patterns.
            </p>

            <ul className="mt-6 space-y-2 text-zinc-400 text-sm list-disc list-inside">
              <li>Authentication system</li>
              <li>Profile image upload</li>
              <li>Smooth skeleton loading UI</li>
              <li>MongoDB schema modeling</li>
              <li>TypeScript-based architecture</li>
              <li>Deployed on Vercel</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-500">
              <span>Next.js</span>
              <span>MongoDB</span>
              <span>TypeScript</span>
              <span>Vercel</span>
            </div>

            <a
              href="https://crudapp-alpha-one.vercel.app/"
              target="_blank"
              className="inline-block mt-6 text-sm underline"
            >
              Live Project →
            </a>
          </div>

          {/* PROJECT 3 – TRYBET VITE VERSION */}
          <div className="p-8 border border-white/10 rounded-2xl hover:border-white/40 transition">
            <h3 className="text-2xl font-semibold">
              Trybet (Early Version – Vite + Express)
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Earlier architecture of Trybet built using Vite (React) and
              Express. Implemented real-time match booking and score scraping.
              Initially deployed on DigitalOcean with Nginx, reverse proxy, SSL
              (Certbot), and server configuration handled independently.
            </p>

            <ul className="mt-6 space-y-2 text-zinc-400 text-sm list-disc list-inside">
              <li>Frontend on Vercel</li>
              <li>Backend on Render</li>
              <li>DigitalOcean VPS deployment</li>
              <li>Nginx reverse proxy setup</li>
              <li>SSL via Certbot</li>
              <li>Professional email handler (@trybet.com)</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-500">
              <span>React (Vite)</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>DigitalOcean</span>
              <span>Render</span>
            </div>
            <a
              href="https://bet-chekwasy-tech.vercel.app/"
              target="_blank"
              className="inline-block mt-6 text-sm underline"
            >
              Live Project →
            </a>
          </div>

          {/* REACT NATIVE SECTION */}
          <div className="p-8 border border-white/10 rounded-2xl hover:border-white/40 transition">
            <h3 className="text-2xl font-semibold">
              React Native Mobile Applications
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Built multiple React Native applications concurrently, showcasing
              strong state management and backend integration.
            </p>

            <ul className="mt-6 space-y-2 text-zinc-400 text-sm list-disc list-inside">
              <li>Coffee Store App (Redux cart management)</li>
              <li>Clothing Store UI (Male/Female categories)</li>
              <li>Fuel Availability App (Express backend integrated)</li>
              <li>Marketplace Store App with media showcase</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-500">
              <span>React Native</span>
              <span>Redux</span>
              <span>Express</span>
            </div>

            <a
              href="https://example.com/demo-video"
              target="_blank"
              className="inline-block mt-6 text-sm underline"
            >
              Watch Demo →
            </a>
          </div>
        </div>
      </section>

      {/* DEPLOYMENT EXPERIENCE */}
      <section>
        <h2 className="text-3xl font-semibold mb-8">
          Cloud & Deployment Experience
        </h2>

        <p className="max-w-3xl text-zinc-400">
          Experienced in deploying production applications using DigitalOcean,
          configuring Nginx & HAProxy, managing Redis caching, and deploying
          applications via Vercel and Render. Comfortable managing
          infrastructure independently.
        </p>
      </section>

      {/* CONTACT CTA */}
      <section className="text-center space-y-6">
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
