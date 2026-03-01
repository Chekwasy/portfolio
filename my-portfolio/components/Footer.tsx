export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold">Richard Chukwuchekwa</h2>
            <p className="mt-3 text-sm text-zinc-400">
              Full Stack Software Engineer specializing in scalable web
              applications and cloud deployments.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Connect
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li>
                <a href="https://github.com/Chekwasy" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/richard-chukwuchekwa-052543175"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:richardchekwas@gmail.com">Email</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Availability
            </h3>
            <p className="mt-4 text-sm text-zinc-400">
              Open to remote full-stack roles and contract opportunities.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Richard Chukwuchekwa. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
