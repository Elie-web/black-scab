import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Phone, ArrowRight, Star } from 'lucide-react'
import { STUDIO } from '../config'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const imgY     = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY       = useTransform(scrollYProgress, [0, 0.5], ['0%', '-6%'])

  const d = (n: number) => ({ duration: 0.9, delay: n, ease: [0.22, 1, 0.36, 1] as const })

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen min-h-[680px] flex items-center overflow-hidden"
    >
      {/* Image de fond */}
      <motion.div className="absolute inset-0" style={{ scale: imgScale, y: imgY }}>
        <img
          src={STUDIO.heroImage}
          alt="Tatouage réaliste par Mark, Blackscab Tattoos"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
      </motion.div>

      {/* Overlay gradient — fort à gauche */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            110deg,
            rgba(13,11,9,0.97) 0%,
            rgba(13,11,9,0.85) 35%,
            rgba(13,11,9,0.50) 60%,
            rgba(13,11,9,0.12) 100%
          )`,
        }}
      />
      {/* Haut et bas */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ink/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      {/* Contenu */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-14 xl:px-20"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-xl">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={d(0.1)}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-gold/60" />
            <span className="font-label text-[11px] font-600 tracking-ultrawide uppercase text-gold/80">
              {STUDIO.city} · Savoie · Depuis {STUDIO.since}
            </span>
          </motion.div>

          {/* H1 — deux lignes avec animation slide-up */}
          <h1 className="font-serif leading-[0.95] mb-8">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={d(0.22)}
                className="block text-[clamp(3.8rem,8.5vw,8rem)] font-semibold text-cream"
              >
                Votre peau.
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={d(0.34)}
                className="block text-[clamp(3.8rem,8.5vw,8rem)] font-light italic text-gold"
              >
                Son art.
              </motion.span>
            </span>
          </h1>

          {/* Spécialité */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={d(0.52)}
            className="font-sans text-cream-dim/60 text-sm leading-relaxed mb-10 max-w-sm"
          >
            {STUDIO.specialty}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={d(0.64)}
            className="flex flex-col sm:flex-row gap-3 mb-12"
          >
            <a
              href={`tel:${STUDIO.phoneRaw}`}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-gold text-ink text-sm font-semibold rounded-full hover:bg-gold-light transition-all duration-300 shadow-xl shadow-gold/25"
            >
              <Phone size={15} strokeWidth={2.5} />
              {STUDIO.phone}
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/8 text-cream text-sm font-medium rounded-full border border-cream/15 hover:bg-white/14 hover:border-cream/25 transition-all duration-300 backdrop-blur-sm"
            >
              Prendre rendez-vous
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={d(0.82)}
            className="flex items-center gap-3 flex-wrap"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="text-cream-dim/50 text-sm">
              <span className="text-cream/80 font-semibold">{STUDIO.rating}</span>
              {' '}· {STUDIO.reviewCount} avis Google
            </span>
            <div className="w-px h-4 bg-ash-light" />
            <span className="font-label text-[11px] tracking-wide uppercase text-cream-dim/40">
              {STUDIO.yearsExp} ans d'expérience
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-cream/20 hover:text-gold/50 transition-colors duration-300"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <ArrowRight size={16} className="rotate-90" />
        </motion.div>
      </motion.a>
    </section>
  )
}
