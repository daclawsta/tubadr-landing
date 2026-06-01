import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-tuba-navy-dark text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold text-white mb-1">
              Tuba<span className="text-tuba-coral">DR</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-white/40 mb-4">Deep Grid Harmony</div>
            <p className="text-sm leading-relaxed">
              Australia's demand response platform. Helping homes and businesses shape a smarter, cleaner grid.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="https://platform.tubadr.site" className="hover:text-white transition-colors">Partner Portal</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@tubadr.site" className="hover:text-white transition-colors">
                  hello@tubadr.site
                </a>
              </li>
              <li className="text-sm text-white/50">Australia</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} TubaDR. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-white/40">
            <a href="#" className="hover:text-white/70">Privacy</a>
            <a href="#" className="hover:text-white/70">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
