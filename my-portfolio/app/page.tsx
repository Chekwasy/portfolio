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
            <a
              href="https://github.com/Chekwasy/nextjs/tree/main/bet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm"
            >
              View Source Code
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
            <a
              href="https://github.com/Chekwasy/nextjs/tree/main/crudapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm"
            >
              View Source Code
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
            <a
              href="https://github.com/Chekwasy/bet.chekwasy.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm"
            >
              View Source Code
            </a>
          </div>

          {/* REACT NATIVE PROJECTS */}

          {/* Coffee Store App */}
          <div className="p-8 border border-white/10 rounded-2xl hover:border-white/40 transition">
            <h3 className="text-2xl font-semibold">Coffee Store Mobile App</h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              E-commerce styled coffee store application with cart management,
              product listing, and clean UI implementation. Built with
              structured Redux state management.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-500">
              <span>React Native</span>
              <span>Redux</span>
              <span>State Management</span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://youtu.be/2KJ2Dj4symw?si=Ia7-gjGqQP9h8Zh_"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:opacity-90 transition"
              >
                Watch Demo
              </a>

              <a
                href="https://github.com/Chekwasy/cofee/tree/main/coffeeShop"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm"
              >
                View Source Code
              </a>
            </div>
          </div>

          {/* Clothing Store App */}
          <div className="p-8 border border-white/10 rounded-2xl hover:border-white/40 transition">
            <h3 className="text-2xl font-semibold">
              Clothing Store Mobile App
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Mobile store interface allowing users to browse male and female
              clothing categories with a structured UI layout and scalable
              component design. Frontend completed to a strong production-ready
              level.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-500">
              <span>React Native</span>
              <span>UI Architecture</span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://youtu.be/RpCuAaD6Zi0?si=Gwq9tSagLWGChzHI"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:opacity-90 transition"
              >
                Watch Demo
              </a>

              <a
                href="https://github.com/Chekwasy/ecommerce/tree/main/clothy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm"
              >
                View Source Code
              </a>
            </div>
          </div>

          {/* Fuel Availability App */}
          <div className="p-8 border border-white/10 rounded-2xl hover:border-white/40 transition">
            <h3 className="text-2xl font-semibold">Fuel Availability App</h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Fully completed mobile application allowing users to check fuel
              availability by Local Government Area within a state. Integrated
              with Express backend APIs.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-500">
              <span>React Native</span>
              <span>Express</span>
              <span>REST API</span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://youtu.be/4QwUUQOSn2U?si=W9LAijPVKz-jIV_E"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:opacity-90 transition"
              >
                Watch Demo
              </a>

              <a
                href="https://github.com/Chekwasy/betapp/tree/main/dey"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm"
              >
                View Source Code
              </a>
            </div>
          </div>

          {/* Marketplace Store App */}
          <div className="p-8 border border-white/10 rounded-2xl hover:border-white/40 transition">
            <h3 className="text-2xl font-semibold">Marketplace Store App</h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Store management application allowing vendors to upload product
              images and videos to showcase what they sell. Frontend largely
              completed with structured layout and media integration system.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-500">
              <span>React Native</span>
              <span>Media Handling</span>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://youtube.com/shorts/eVdhqU6ZzDI?si=yt_4mSkkFGjP_FI7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:opacity-90 transition"
              >
                Watch Demo
              </a>

              <a
                href="https://github.com/Chekwasy/Tranter/tree/master/nw"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition text-sm"
              >
                View Source Code
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
