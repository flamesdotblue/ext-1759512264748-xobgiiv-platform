import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white">
      <NavBar />

      <main className="relative">
        {/* Soft ambient glows */}
        <div className="pointer-events-none fixed inset-0 -z-0">
          <div className="absolute -top-24 left-1/2 h-[60vh] w-[60vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.15),rgba(0,0,0,0))] blur-3xl" />
          <div className="absolute top-1/3 right-0 h-[50vh] w-[50vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),rgba(0,0,0,0))] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[45vh] w-[45vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.18),rgba(0,0,0,0))] blur-3xl" />
        </div>

        <Hero />
        <Services />

        {/* CTA Section */}
        <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/[0.04] to-black/40 p-10 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_400px_at_80%_-10%,rgba(255,255,255,0.15),transparent)]" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Prêt à propulser votre marque ?</h2>
              <p className="mt-3 max-w-2xl text-white/70">On conçoit des expériences web rapides, immersives et rentables. Réservez un appel découverte gratuit et obtenez un plan d’action en 48h.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#" className="group inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-3 font-medium transition hover:brightness-90">
                  Réserver un call
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
                <a href="#portfolio" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10">Voir nos projets</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
