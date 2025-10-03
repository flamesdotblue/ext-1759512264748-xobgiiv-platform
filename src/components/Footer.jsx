import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-white/20 to-white/5">A</div>
              <span className="font-semibold tracking-tight">AloStudio</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-white/70">Studio web créatif spécialisé en expériences immersives et performances mesurables. Basé en France, disponible dans le monde entier.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-4">
            <div>
              <h4 className="text-sm font-semibold text-white/90">Services</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><a href="#services" className="hover:text-white">Site vitrine</a></li>
                <li><a href="#services" className="hover:text-white">E-commerce</a></li>
                <li><a href="#services" className="hover:text-white">Branding</a></li>
                <li><a href="#services" className="hover:text-white">SEO</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white/90">Ressources</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Guides</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white/90">Légal</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">Mentions légales</a></li>
                <li><a href="#" className="hover:text-white">Confidentialité</a></li>
                <li><a href="#" className="hover:text-white">CGV</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white/90">Contact</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><a href="mailto:hello@alostudio.fr" className="hover:text-white">hello@alostudio.fr</a></li>
                <li><a href="#contact" className="hover:text-white">Réserver un call</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} AloStudio. Tous droits réservés.</p>
          <div className="flex items-center gap-3">
            {[
              { href: '#', label: 'Twitter', path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83' },
              { href: '#', label: 'Instagram', path: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01' },
              { href: '#', label: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4' },
            ].map((i) => (
              <a key={i.label} aria-label={i.label} href={i.href} className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 backdrop-blur transition hover:bg-white/10 hover:text-white">
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={i.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
