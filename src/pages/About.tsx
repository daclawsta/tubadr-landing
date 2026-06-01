export default function About() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-tuba-navy-dark to-tuba-navy py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-tuba-coral">About</span>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Deep Grid Harmony
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            TubaDR was built to make demand response accessible, transparent, and rewarding —
            for energy retailers, device manufacturers, and the end consumers who power Australia.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-tuba-coral">Our Mission</span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-tuba-navy">
                A smarter, cleaner grid starts at home
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Australia's electricity grid faces mounting pressure from renewable variability, retiring
                baseload plant, and surging EV uptake. The solution isn't more poles and wires — it's
                intelligent coordination of the millions of flexible loads already installed in Australian
                homes and businesses.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                TubaDR is the orchestration layer that makes this possible. We connect smart hot water
                systems, HVAC, EV chargers, and batteries to grid signals, shifting load at precisely
                the right moment — without touching comfort.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8 space-y-6">
              {[
                ['Founded', '2024, Melbourne'],
                ['Focus', 'ANZ residential & commercial DR'],
                ['Technology', 'ClearBlade IoT + TVE integration'],
                ['Partners', 'Rheem, energy retailers, DNSPs'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <span className="text-sm font-medium text-gray-500">{k}</span>
                  <span className="text-sm font-semibold text-tuba-navy">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-tuba-navy">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '🎯', title: 'Precision', body: 'Events are dispatched at the right moment to the right devices — never guesswork.' },
              { icon: '🤝', title: 'Trust', body: 'Participant preferences are sacred. We enforce comfort bounds at the device level.' },
              { icon: '🌿', title: 'Sustainability', body: 'Every dispatched event reduces reliance on fossil peakers and lowers grid emissions.' },
              { icon: '🔍', title: 'Transparency', body: 'Full audit trails, real-time dashboards, and open APIs for every partner.' },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h4 className="font-semibold text-tuba-navy mb-2">{v.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-tuba-navy text-center">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="text-2xl font-bold text-white">Want to partner with us?</h2>
          <p className="mt-3 text-white/60">
            We work with energy retailers, device manufacturers, and DNSPs across Australia and New Zealand.
          </p>
          <a href="/contact" className="btn-primary mt-6 inline-flex mx-auto">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
