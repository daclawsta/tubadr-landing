import { useEffect, useState } from 'react';

const PLATFORM_API = import.meta.env.VITE_PLATFORM_API || 'https://platform.tubadr.site';

interface Program {
  id: number;
  title: string;
  description: string;
  image_url: string;
  cta_url: string;
  cta_label: string;
}

// ── Animated stat counter ────────────────────────────────────────────────────
function StatCounter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(to / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setVal(to); clearInterval(timer); }
      else setVal(start);
    }, 30);
    return () => clearInterval(timer);
  }, [to]);
  return <>{val.toLocaleString()}{suffix}</>;
}

// ── Program card ─────────────────────────────────────────────────────────────
function ProgramCard({ prog }: { prog: Program }) {
  const imgSrc = prog.image_url
    ? (prog.image_url.startsWith('/') ? `${PLATFORM_API}${prog.image_url}` : prog.image_url)
    : null;

  return (
    <a
      href={prog.cta_url}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-tuba-navy to-tuba-navy-light">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={prog.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <svg className="h-16 w-16 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-tuba-navy/60 to-transparent" />
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-tuba-navy group-hover:text-tuba-coral transition-colors">
          {prog.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
          {prog.description}
        </p>
        <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-tuba-coral">
          {prog.cta_label}
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
}

// ── How it works step ────────────────────────────────────────────────────────
function Step({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div className="flex gap-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tuba-coral text-white text-sm font-bold">
        {n}
      </div>
      <div>
        <h4 className="font-semibold text-tuba-navy">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-gray-500">{body}</p>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${PLATFORM_API}/api/programs`)
      .then((r) => r.json())
      .then((d) => setPrograms(d.programs || []))
      .catch(() => setPrograms([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-tuba-navy-dark via-tuba-navy to-tuba-navy-light overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Coral glow blobs */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-tuba-coral/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-tuba-coral/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-32 lg:flex lg:items-center lg:gap-16">
          {/* Text */}
          <div className="lg:flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-tuba-coral/10 border border-tuba-coral/30 px-4 py-1.5 text-xs font-medium text-tuba-coral mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-tuba-coral animate-pulse" />
              Australia's Demand Response Platform
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Deep Grid<br />
              <span className="text-tuba-coral">Harmony.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-xl">
              TubaDR orchestrates smart energy assets across Australia — shifting loads, reducing peaks,
              and rewarding homes and businesses that help balance the grid.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#programs" className="btn-primary text-base px-8 py-3.5">
                Explore Programs
              </a>
              <a href="https://platform.tubadr.site" className="btn-outline text-base px-8 py-3.5">
                Partner Portal
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 lg:mt-0 lg:flex-shrink-0">
            <div className="grid grid-cols-2 gap-4">
              {[
                { to: 12400, suffix: '+', label: 'Enrolled Devices' },
                { to: 98,    suffix: '%', label: 'Response Rate' },
                { to: 3200,  suffix: '+', label: 'Tonnes CO₂ Avoided' },
                { to: 47,    suffix: '+', label: 'Grid Events Managed' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/5 border border-white/10 p-5 text-center backdrop-blur-sm">
                  <div className="text-3xl font-extrabold text-white">
                    <StatCounter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-6 w-6 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section id="programs" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-tuba-coral">Our Programs</span>
            <h2 className="section-heading mt-2">Join a DR Program</h2>
            <p className="section-sub mx-auto">
              From residential hot water to commercial load management — find the program that fits
              your energy profile and start earning rewards today.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-16">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-tuba-coral border-t-transparent" />
            </div>
          ) : programs.length === 0 ? (
            <p className="text-center text-gray-400 py-16">No programs available at this time.</p>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {programs.map((prog) => <ProgramCard key={prog.id} prog={prog} />)}
            </div>
          )}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-tuba-coral">How It Works</span>
              <h2 className="section-heading mt-2">Smart energy orchestration<br/>at scale</h2>
              <p className="section-sub mt-4">
                TubaDR connects your smart assets to the grid in real time, dispatching demand response
                events when the network needs relief — with zero disruption to your comfort.
              </p>
            </div>

            {/* Right — steps */}
            <div className="space-y-8">
              <Step n={1} title="Enrol Your Device"
                body="Connect your hot water system, HVAC, EV charger or battery to the TubaDR platform via your energy retailer or our direct API." />
              <Step n={2} title="Set Your Preferences"
                body="Define comfort bounds — minimum setpoints, blackout periods, and maximum event duration. We never override your preferences." />
              <Step n={3} title="Grid Events Are Dispatched"
                body="When the grid is stressed, TubaDR sends a signal to your device to shift load. The action is invisible to you — your hot water is still hot." />
              <Step n={4} title="Earn Rewards"
                body="Your retailer credits you for each MW of demand reduced. Rewards can appear as bill credits, cashback or retailer-specific benefits." />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY TUBADR ── */}
      <section className="py-24 bg-tuba-navy text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-tuba-coral">Why TubaDR</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-2">
              Built for the Australian grid
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '⚡',
                title: 'Sub-second Dispatch',
                body: 'TubaDR signals reach enrolled devices in under 500ms via our ClearBlade IoT backbone.',
              },
              {
                icon: '🔒',
                title: 'Participant First',
                body: 'Comfort preferences are enforced at the device level. Your boundaries are never crossed.',
              },
              {
                icon: '📊',
                title: 'Full Transparency',
                body: 'Real-time dashboards for partners and operators — see every event, every device, every outcome.',
              },
              {
                icon: '🌏',
                title: 'ANZ Native',
                body: 'Built for Australian and New Zealand market conditions, NMIs, tariff structures, and AEMO signals.',
              },
              {
                icon: '🔗',
                title: 'Open Integration',
                body: 'REST API and ClearBlade SDK integrations — connect your own BMS, VPP, or retail platform.',
              },
              {
                icon: '🌱',
                title: 'Climate Impact',
                body: 'Every event reduces reliance on peaking gas plants, lowering emissions across the NEM.',
              },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h4 className="font-semibold text-white mb-2">{f.title}</h4>
                <p className="text-sm leading-relaxed text-white/60">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-gradient-to-r from-tuba-coral to-tuba-coral-dark">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to harmonise with the grid?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Join TubaDR and start turning grid events into rewards — for your customers and the planet.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#programs" className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-tuba-coral shadow hover:shadow-md transition-all active:scale-[0.98]">
              View Programs
            </a>
            <a href="/contact" className="btn-outline text-base px-8 py-3.5">
              Talk to Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
