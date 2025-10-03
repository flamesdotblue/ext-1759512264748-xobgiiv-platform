import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden" aria-label="Hero">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth (don't block interactions) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />
        <div className="absolute -bottom-40 left-1/2 h-[70vh] w-[120vh] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.22),transparent)] blur-3xl opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400" />
              Studio web créatif • Sites ultra rapides • SEO prêt à performer
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.9 }} className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Des expériences web immersives qui transforment vos visiteurs en clients.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9 }} className="mt-4 max-w-2xl text-white/75">
            Nous allions design de caractère, micro-interactions et performances techniques pour propulser votre image et votre croissance.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.9 }} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:brightness-90">
              Démarrer un projet
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10">Voir nos services</a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { kpi: '98', label: 'Score perf' },
              { kpi: '3x', label: 'Taux de conv.' },
              { kpi: '24h', label: 'Support' },
              { kpi: 'SEO', label: 'Prêt à ranker' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center backdrop-blur">
                <div className="text-2xl font-semibold tracking-tight">{item.kpi}</div>
                <div className="mt-1 text-xs uppercase text-white/60">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
