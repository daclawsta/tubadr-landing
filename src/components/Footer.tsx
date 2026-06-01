import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-tuba-navy-dark text-white/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <img src="/logo.png" alt="TubaDR" className="h-10 w-auto mb-4 brightness-0 invert"/>
            <p className="text-sm leading-relaxed">Australia&apos;s demand response platform. Helping homes and businesses shape a smarter, cleaner grid.</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="https://platform.tubadr.site" className="hover:text-white transition-colors">Partner Portal</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hello@tubadr.site" className="hover:text-white transition-colors">hello@tubadr.site</a></li>
              <li className="text-white/40">Australia</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} TubaDR. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-white/30">
            <a href="#" className="hover:text-white/60">Privacy</a>
            <a href="#" className="hover:text-white/60">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}