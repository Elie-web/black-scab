import { ArrowRight } from 'lucide-react'
import { STUDIO } from '../config'

const NAV_LINKS = [
  { label: 'Portfolio', href: '#galerie' },
  { label: 'L\'artiste', href: '#artiste' },
  { label: 'Styles', href: '#styles' },
  { label: 'Processus', href: '#processus' },
  { label: 'Avis', href: '#avis' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-ash/50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-12 mb-14">

          {/* Identité */}
          <div>
            <p className="font-label text-[10px] tracking-ultrawide uppercase text-muted mb-1">
              {STUDIO.city} · Savoie
            </p>
            <p className="font-serif text-2xl font-semibold text-cream mb-4">
              {STUDIO.name}
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed max-w-xs">
              Studio privé de tatouage spécialisé dans le réalisme.
              Sur rendez-vous uniquement.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-label text-[10px] tracking-ultrawide uppercase text-muted mb-5">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 font-sans text-sm text-muted/70 hover:text-gold transition-colors duration-300"
                >
                  <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-label text-[10px] tracking-ultrawide uppercase text-muted mb-5">
              Contact
            </p>
            <div className="space-y-3 font-sans text-sm text-muted">
              <p>
                <a href={`tel:${STUDIO.phoneRaw}`} className="hover:text-gold transition-colors duration-300">
                  {STUDIO.phone}
                </a>
              </p>
              <p>{STUDIO.address}</p>
              <p>{STUDIO.cityZip}</p>
              <a
                href={STUDIO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-gold/60 hover:text-gold text-xs transition-colors duration-300 mt-1"
              >
                Voir sur Maps
                <ArrowRight size={10} />
              </a>
            </div>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="pt-8 border-t border-ash/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-muted/40">
            © 2025 {STUDIO.name} · Tous droits réservés
          </p>
          <p className="font-sans text-xs text-muted/30">
            {STUDIO.yearsExp} ans d'expérience · Saint-Baldoph, Savoie
          </p>
        </div>
      </div>
    </footer>
  )
}
