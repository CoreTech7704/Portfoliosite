import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on scroll to section
  useEffect(() => {
    const handleScroll = () => {
      setMobileOpen(false);
    };
    window.addEventListener("hashchange", handleScroll);
    return () => window.removeEventListener("hashchange", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-900/40 shadow-sm backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <a
          href="#home"
          className="text-3xl font-bold text-white hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition"
        >
          Sarvam Patel
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="#home" label="Home" />
          <NavLink to="#about" label="About" />
          <NavLink to="#projects" label="Projects" />
          <NavLink to="#certificates" label="Certificates" />
          <NavLink to="#contact" label="Contact" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2 rounded hover:bg-white/10 transition"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 space-y-2 bg-zinc-900/90">
          <NavLink to="#home" label="Home" mobile />
          <NavLink to="#about" label="About" mobile />
          <NavLink to="#projects" label="Projects" mobile />
          <NavLink to="#certificates" label="Certificates" mobile />
          <NavLink to="#contact" label="Contact" mobile />
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, label, mobile = false }) {
  const base =
    "relative text-white font-medium transition hover:text-purple-400" +
    (mobile ? " block p-2 rounded hover:bg-white/10" : " px-2");

  return (
    <a href={to} className={base}>
      {label}
    </a>
  );
}

export default Navbar;
