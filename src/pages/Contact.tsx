import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production wire to your email/CRM — for now just show success state
    setSent(true);
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-tuba-navy-dark to-tuba-navy py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-tuba-coral">Contact</span>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">Talk to Us</h1>
          <p className="mt-4 text-lg text-white/70">
            Whether you're an energy retailer, device manufacturer, or curious consumer — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-tuba-navy mb-6">Send a Message</h2>
              {sent ? (
                <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="font-semibold text-green-800 text-lg">Message received!</h3>
                  <p className="mt-2 text-sm text-green-600">We'll get back to you within one business day.</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', company: '', message: '' }); }}
                    className="mt-4 btn-primary text-sm px-5 py-2">
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">Full Name *</label>
                      <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Smith"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-tuba-coral focus:outline-none focus:ring-1 focus:ring-tuba-coral" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">Email *</label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-tuba-coral focus:outline-none focus:ring-1 focus:ring-tuba-coral" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Company / Organisation</label>
                    <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Origin Energy, Rheem, ..."
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-tuba-coral focus:outline-none focus:ring-1 focus:ring-tuba-coral" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us how we can help..."
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-tuba-coral focus:outline-none focus:ring-1 focus:ring-tuba-coral" />
                  </div>
                  <button type="submit" className="btn-primary w-full py-3">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-tuba-navy mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  {[
                    { icon: '✉️', label: 'Email', value: 'hello@tubadr.site', href: 'mailto:hello@tubadr.site' },
                    { icon: '🌐', label: 'Website', value: 'tubadr.site', href: 'https://tubadr.site' },
                    { icon: '🖥️', label: 'Partner Portal', value: 'platform.tubadr.site', href: 'https://platform.tubadr.site' },
                  ].map((c) => (
                    <a key={c.label} href={c.href} className="flex items-center gap-4 rounded-xl border border-gray-100 p-4 hover:border-tuba-coral/30 hover:bg-tuba-coral/5 transition-colors group">
                      <span className="text-2xl">{c.icon}</span>
                      <div>
                        <div className="text-xs font-medium text-gray-400">{c.label}</div>
                        <div className="text-sm font-semibold text-tuba-navy group-hover:text-tuba-coral transition-colors">{c.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-tuba-navy p-6 text-white">
                <h4 className="font-semibold mb-2">Partner with TubaDR</h4>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  If you're an energy retailer or device OEM looking to integrate DR capabilities,
                  reach out for API documentation and sandbox access.
                </p>
                <a href="https://platform.tubadr.site" className="btn-primary text-xs px-4 py-2">
                  Access Platform →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
