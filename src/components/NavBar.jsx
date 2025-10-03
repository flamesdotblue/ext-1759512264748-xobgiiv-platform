import React from 'react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="group relative inline-flex items-center gap-2">
          <div className="relative">
            <span className="absolute inset-0 animate-pulse rounded-xl bg-gradient-to-r from-lime-400/30 via-fuchsia-400/30 to-cyan-400/30 blur-md" />
            <div className="relative grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-white/20 to-white/5 text-white shadow-inner shadow-black/40">A</div>
          </div>
          <span className="font-semibold tracking-tight">AloStudio</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#services" className="text-sm text-white/80 transition hover:text-white">Services</a>
          <a href="#portfolio" className="text-sm text-white/80 transition hover:text-white">Portfolio</a>
          <a href="#contact" className="text-sm text-white/80 transition hover:text-white">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="relative hidden rounded-xl p-[1px] md:block">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-lime-400 via-fuchsia-400 to-cyan-400 opacity-80 blur-sm" />
            <span className="relative block rounded-xl bg-black px-4 py-2 text-sm font-medium text-white">Devis gratuit</span>
          </a>
          <button className="md:hidden rounded-xl border border-white/15 p-2 text-white/80 hover:text-white" aria-label="Menu">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
