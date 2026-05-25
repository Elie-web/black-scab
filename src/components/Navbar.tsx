import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Phone, X, Menu } from 'lucide-react'
import { STUDIO } from '../config'

const NAV_LINKS = [
  { label: 'Portfolio', href: '#galerie' },
  { label: 'L\'artiste', href: '#artiste' },
  { label: 'Styles', href: '#styles' },
  { label: 'Processus', href: '#processus' },
  { label: 'Avis', href: '#avis' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 40)
  })

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink/90 backdrop-blur-xl border-b border-ash/60 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-14 xl:px-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#hero" className="flex flex-col leading-none group">
            <span className="font-label font-700 tracking-widest text-[11px] text-gold/70 uppercase">
              {STUDIO.city} · Savoie
            </span>
            <span className="font-serif text-xl font-semibold text-cream group-hover:text-gold transition-colors duration-300">
              {STUDIO.shortName}
            </span>
          </a>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-[13px] text-cream-dim/70 hover:text-gold transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <a
            href={`tel:${STUDIO.phoneRaw}`}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-ink text-[13px] font-semibold rounded-full hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20"
          >
            <Phone size={13} strokeWidth={2.5} />
            {STUDIO.phone}
          </a>

          {/* Burger mobile */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-cream-dim hover:text-gold transition-colors"
            aria-label="Ouvrir le menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      {/* Menu mobile overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-ink/97 backdrop-blur-xl flex flex-col px-8 py-8"
        >
          <div className="flex items-center justify-between mb-12">
            <span className="font-serif text-xl font-semibold text-cream">{STUDIO.shortName}</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-11 h-11 flex items-center justify-center text-muted hover:text-cream transition-colors"
              aria-label="Fermer le menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex flex-col gap-2 flex-1">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-3xl font-light text-cream/80 hover:text-gold py-3 border-b border-ash/40 transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <a
            href={`tel:${STUDIO.phoneRaw}`}
            className="mt-8 flex items-center justify-center gap-2.5 py-4 bg-gold text-ink font-semibold rounded-full text-base"
          >
            <Phone size={16} strokeWidth={2.5} />
            {STUDIO.phone}
          </a>
        </motion.div>
      )}
    </>
  )
}
