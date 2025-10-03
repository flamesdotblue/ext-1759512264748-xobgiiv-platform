import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Sites vitrines haut de gamme',
    desc: 'Identité forte, animations subtiles et performances techniques impeccables. Un site qui captive et convertit.',
    points: ['Design immersif', 'Ultra rapide', 'Responsive & accessible'],
    gradient: 'from-lime-400/30 via-emerald-400/20 to-cyan-400/20',
  },
  {
    title: 'E-commerce qui vend',
    desc: "Parcours d'achat fluide, fiches produits impactantes et intégrations de paiement fiables.",
    points: ['UX orientée conversion', 'SEO produits', 'Optimisé Core Web Vitals'],
    gradient: 'from-fuchsia-400/30 via-pink-400/20 to-rose-400/20',
  },
  {
    title: 'Branding & design system',
    desc: 'Une identité cohérente et mémorable, déclinée sur tout votre écosystème digital.',
    points: ['Logo & palette', 'Système de composants', 'Guidelines complètes'],
    gradient: 'from-indigo-400/30 via-blue-400/20 to-cyan-400/20',
  },
  {
    title: 'SEO technique & contenu',
    desc: "Architecture propre, performances, contenus prêts à ranquer pour une visibilité durable.",
    points: ['Audit & plan d’action', 'Optimisations techniques', 'Calendrier éditorial'],
    gradient: 'from-amber-400/30 via-orange-400/20 to-red-400/20',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Ce que l’on fait de mieux</h2>
          <p className="mt-2 max-w-2xl text-white/70">Des sites modernes, animés et mesurables, pensés pour embarquer vos utilisateurs et booster vos résultats.</p>
        </div>
        <a href="#portfolio" className="hidden rounded-xl border border-white/15 px-4 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/10 md:inline-block">Voir des exemples</a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((s) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.04] p-6 backdrop-blur-xl">
            <div className={`pointer-events-none absolute -inset-px opacity-60 blur-xl bg-gradient-to-br ${s.gradient}`} />
            <div className="relative">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/70">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/70" />
                Service clé
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-white/75">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <svg className="mt-0.5 h-4 w-4 text-lime-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-2">
                <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:brightness-90">
                  Discuter
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
                <button className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/10">Détails</button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
