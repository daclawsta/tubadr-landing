import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function TubaLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10 C50 10 33 10 25 24 C17 38 23 52 23 52 C23 52 13 57 11 69 C9 81 17 90 27 94 C37 98 49 95 53 90"
        stroke="#D94F5A" strokeWidth="6" strokeLinecap="round" fill="none"/>
      <path d="M50 10 C50 10 67 10 75 24 C83 38 77 52 77 52 C77 52 87 57 89 69 C91 81 83 90 73 94 C63 98 51 95 47 90"
        stroke="#D94F5A" strokeWidth="6" strokeLinecap="round" fill="none"/>
      <path d="M53 90 L53 97" stroke="#D94F5A" strokeWidth="6" strokeLinecap="round"/>
      <path d="M42 33 C42 33 37 43 42 53 C47 63 57 63 62 53 C67 43 62 33 62 33"
        stroke="#D94F5A" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <circle cx="23" cy="52" r="5" fill="#D94F5A"/>
      <circle cx="77" cy="52" r="5" fill="#D94F5A"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-tuba-navy/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <TubaLogo className="h-9 w-9" />
          <div className="leading-tight">
            <div className="text-lg font-bold text-white">
              Tuba<span className="text-tuba-coral">DR</span>
            </div>
            <div className="text-[9px] font-medium uppercase tracking-widest text-white/50">
              Deep Grid Harmony
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-tuba-coral' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="https://platform.tubadr.site"
            className="btn-primary text-xs px-4 py-2"
          >
            Partner Portal →
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-tuba-navy px-6 py-4 md:hidden space-y-3">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium py-1 ${isActive ? 'text-tuba-coral' : 'text-white/80'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a href="https://platform.tubadr.site" className="btn-primary block text-center text-xs mt-3">
            Partner Portal →
          </a>
        </div>
      )}
    </header>
  );
}
