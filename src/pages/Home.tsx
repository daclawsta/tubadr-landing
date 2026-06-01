import { useEffect, useState } from "react";

const API = (import.meta as any).env?.VITE_PLATFORM_API || "https://platform.tubadr.site";

interface Program { id:number;title:string;description:string;image_url:string;cta_url:string;cta_label:string; }

function ProgramCard({ p }:{ p:Program }) {
  const img = p.image_url ? (p.image_url.startsWith("/") ? `${API}${p.image_url}` : p.image_url) : null;
  return (
    <a href={p.cta_url} target="_blank" rel="noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <div className="relative h-48 bg-gradient-to-br from-tuba-navy to-tuba-navy-light overflow-hidden">
        {img
          ? <img src={img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"/>
          : <div className="flex h-full items-center justify-center"><img src="/icon.png" alt="" className="h-16 w-16 opacity-20"/></div>}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-tuba-navy group-hover:text-tuba-coral transition-colors">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">{p.description}</p>
        <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-tuba-coral">
          {p.cta_label}
          <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    fetch(`${API}/api/programs`)
      .then(r=>r.json()).then(d=>setPrograms(d.programs||[]))
      .catch(()=>{}).finally(()=>setLoading(false));
  },[]);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center bg-tuba-navy overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"radial-gradient(circle,white 1px,transparent 1px)",backgroundSize:"32px 32px"}}/>
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-tuba-coral/10 blur-3xl -translate-y-1/3 translate-x-1/3"/>
        <div className="relative mx-auto max-w-6xl px-6 py-32 lg:flex lg:items-center lg:gap-20">
          <div className="flex-1">
            <img src="/logo.png" alt="TubaDR" className="h-16 w-auto mb-10 brightness-0 invert"/>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl">
              Smart Energy.<br/><span className="text-tuba-coral">Rewarded.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              TubaDR connects your home or business to Australia&apos;s electricity grid &mdash; intelligently shifting energy use during peak periods so you earn rewards while helping stabilise the network.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#programs" className="rounded-lg bg-tuba-coral px-8 py-3.5 text-sm font-semibold text-white shadow hover:bg-tuba-coral-dark transition">View Programs</a>
              <a href="/contact" className="rounded-lg border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition">Contact Us</a>
            </div>
          </div>
          <div className="mt-16 lg:mt-0 lg:w-72 shrink-0">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm space-y-5">
              {[{n:"12,400+",l:"Enrolled Devices"},{n:"98%",l:"Dispatch Success Rate"},{n:"3,200+",l:"Tonnes CO₂ Avoided"},{n:"47+",l:"Grid Events Managed"}].map(s=>(
                <div key={s.l} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <span className="text-sm text-white/50">{s.l}</span>
                  <span className="text-xl font-bold text-white">{s.n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-6 w-6 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-tuba-coral">Demand Response Programs</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-tuba-navy sm:text-4xl">Find the right program for you</h2>
            <p className="mt-3 max-w-2xl text-gray-500">Whether you have a hot water system, commercial facility or solar battery, there&apos;s a TubaDR program that puts your energy to work.</p>
          </div>
          {loading ? (
            <div className="flex justify-center py-16"><div className="h-10 w-10 animate-spin rounded-full border-4 border-tuba-coral border-t-transparent"/></div>
          ) : programs.length===0 ? (
            <p className="py-16 text-center text-gray-400">No programs available right now.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{programs.map(p=><ProgramCard key={p.id} p={p}/>)}</div>
          )}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-tuba-coral">How It Works</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-tuba-navy sm:text-4xl">Four simple steps</h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[{n:"01",t:"Enrol",b:"Register your smart device through your energy retailer or directly with TubaDR."},
              {n:"02",t:"Set Preferences",b:"Define comfort bounds. We never override your minimum requirements."},
              {n:"03",t:"Grid Events Run",b:"When the grid needs relief, TubaDR adjusts your device — invisible to you."},
              {n:"04",t:"Earn Rewards",b:"Your retailer credits you for each event. Bill credits, cashback or more."}
            ].map(s=>(
              <div key={s.n} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-tuba-coral/10">
                  <span className="text-lg font-black text-tuba-coral">{s.n}</span>
                </div>
                <h3 className="font-bold text-tuba-navy">{s.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TUBADR */}
      <section className="py-24 bg-tuba-navy">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-tuba-coral">Why TubaDR</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Built for the Australian grid</h2>
            </div>
            <a href="/about" className="shrink-0 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition w-fit">Learn more about us →</a>
          </div>
          <div className="grid gap-px bg-white/10 rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {[{e:"⚡",t:"Sub-second Dispatch",b:"Signals reach enrolled devices in under 500 ms via our IoT backbone."},
              {e:"🔒",t:"Comfort First",b:"Your preferences are enforced at the device level, always."},
              {e:"📊",t:"Full Visibility",b:"Real-time dashboards for partners — every event, every device, every outcome."},
              {e:"🌏",t:"ANZ Native",b:"Built for AEMO, NMIs, and ANZ tariff structures from day one."},
              {e:"🔗",t:"Open API",b:"REST + ClearBlade SDK. Integrate your BMS, VPP or retail platform."},
              {e:"🌱",t:"Climate Impact",b:"Every event reduces reliance on peaking gas plant across the NEM."}
            ].map(f=>(
              <div key={f.t} className="bg-tuba-navy p-7 hover:bg-tuba-navy-light transition-colors">
                <div className="text-3xl mb-3">{f.e}</div>
                <h4 className="font-bold text-white mb-1">{f.t}</h4>
                <p className="text-sm leading-relaxed text-white/50">{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-tuba-coral">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <img src="/nameonly.png" alt="TubaDR" className="mx-auto mb-6 h-8 w-auto brightness-0 invert"/>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to harmonise with the grid?</h2>
          <p className="mt-4 text-lg text-white/80">Join TubaDR and start turning grid events into rewards.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#programs" className="rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-tuba-coral hover:bg-gray-50 transition shadow">View Programs</a>
            <a href="/contact" className="rounded-lg border-2 border-white/40 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition">Contact Us</a>
          </div>
        </div>
      </section>
    </>
  );
}