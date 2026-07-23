import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* PCB Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pcb-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10 L90 10 M10 10 L10 90 M90 10 L90 90 M10 90 L90 90"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    fill="none"
                    className="text-[#D4AF37]" />
              <circle cx="10" cy="10" r="2" fill="currentColor" className="text-[#D4AF37]" />
              <circle cx="90" cy="10" r="2" fill="currentColor" className="text-[#D4AF37]" />
              <circle cx="10" cy="90" r="2" fill="currentColor" className="text-[#D4AF37]" />
              <circle cx="90" cy="90" r="2" fill="currentColor" className="text-[#D4AF37]" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pcb-pattern)" />
        </svg>
      </div>

      {/* Navigation */}
      <header className="relative z-50 border-b border-[#D4AF37]/20 bg-[#111111]/95 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo — intentionally empty */}
            <div />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 text-sm font-mono transition-colors relative group ${
                      isActive
                        ? "text-[#D4AF37]"
                        : "text-[#E9D8A6] hover:text-[#D4AF37]"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#E9D8A6] hover:text-[#D4AF37]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 text-sm font-mono transition-colors ${
                      isActive
                        ? "text-[#D4AF37] bg-[#5B1E2D]/20"
                        : "text-[#E9D8A6] hover:text-[#D4AF37] hover:bg-[#2D2D2D]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#D4AF37]/20 bg-[#111111]/95 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[#7C7C7C] text-sm font-mono text-center md:text-left">
              © 2026 Hazel White. Built with passion for engineering.
            </div>
            <div className="flex items-center gap-4 text-sm font-mono text-[#7C7C7C]">
              <span>Latest Update</span>
              <span className="text-[#D4AF37]">•</span>
              <span>07.22.2026</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
