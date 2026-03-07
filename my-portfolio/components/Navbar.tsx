export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md border-b border-white/10 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#top" className="text-lg font-semibold">
          RC
        </a>

        <div className="space-x-6 text-sm">
          <a
            href="#projects"
            className="text-zinc-300 hover:text-white transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-zinc-300 hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
