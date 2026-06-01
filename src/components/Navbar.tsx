import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/">
          <img src="/logo.png" alt="TubaDR" className="h-10 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {[{to:"/",label:"Home"},{to:"/about",label:"About"},{to:"/contact",label:"Contact"}].map(item=>(
            <NavLink key={item.to} to={item.to} end
              className={({isActive})=>`text-sm font-medium transition-colors ${scrolled
                ? isActive?"text-tuba-coral":"text-gray-600 hover:text-tuba-navy"
                : isActive?"text-tuba-coral":"text-white/90 hover:text-white"}`}
            >{item.label}</NavLink>
          ))}
          <a href="https://platform.tubadr.site" className="rounded-lg bg-tuba-coral px-5 py-2 text-sm font-semibold text-white hover:bg-tuba-coral-dark transition">Partner Login</a>
        </nav>
        <button onClick={()=>setMenuOpen(!menuOpen)} className={`md:hidden ${scrolled?"text-tuba-navy":"text-white"}`}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen
              ?<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              :<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>
      {menuOpen&&(
        <div className="border-t bg-white px-6 py-4 md:hidden space-y-3 shadow-lg">
          {[{to:"/",label:"Home"},{to:"/about",label:"About"},{to:"/contact",label:"Contact"}].map(item=>(
            <NavLink key={item.to} to={item.to} end onClick={()=>setMenuOpen(false)}
              className={({isActive})=>`block text-sm font-medium py-1 ${isActive?"text-tuba-coral":"text-gray-700"}`}
            >{item.label}</NavLink>
          ))}
          <a href="https://platform.tubadr.site" className="block rounded-lg bg-tuba-coral px-5 py-2 text-center text-sm font-semibold text-white">Partner Login</a>
        </div>
      )}
    </header>
  );
}