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

  const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
        entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            }
        });
        },
        {
        rootMargin: "-50% 0px -50% 0px", // Adjusts trigger zone
        threshold: 0.1,
        }
    );

    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
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
            <NavLink to="#home" label="Home" active={activeSection === "home"} />
            <NavLink to="#about" label="About" active={activeSection === "about"} />
            <NavLink to="#projects" label="Projects" active={activeSection === "projects"} />
            <NavLink to="#contact" label="Contact" active={activeSection === "contact"} />
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
          <NavLink to="#home" label="Home" active={activeSection === "home"} mobile />
          <NavLink to="#about" label="About" active={activeSection === "about"} mobile />
          <NavLink to="#projects" label="Projects" active={activeSection === "projects"} mobile />
          <NavLink to="#contact" label="Contact" active={activeSection === "contact"} mobile />
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, label, mobile = false, active = false }) {
  const base =
    "relative text-white font-medium transition hover:text-purple-400" +
    (mobile ? " block p-2 rounded hover:bg-white/10" : " px-2");

  return (
    <a href={to} className={base}>
      {active && (
        <span className="absolute -top-3.5 w-full left-0 h-2 bg-purple-500 rounded-b-md"></span>
      )}
      {label}
    </a>
  );
}

export default Navbar;
