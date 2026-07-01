import { motion, useReducedMotion } from 'framer-motion'
import { Star, Clock, ShieldCheck, Mountain, type LucideIcon } from 'lucide-react'
import { REASSURANCE } from '../config'

const ease = [0.22, 1, 0.36, 1] as const

const ICONS: Record<string, LucideIcon> = {
  star: Star,
  clock: Clock,
  shield: ShieldCheck,
  mountain: Mountain,
}

/**
 * Bande de réassurance sous le hero : les 4 raisons de faire confiance, lisibles
 * d'un coup d'œil. Levier de conversion n°1 pour le trafic Google Maps. Fond
 * plein + carte surélevée qui chevauche légèrement le hero pour qu'elle se voie.
 */
export default function Reassurance() {
  const reduce = useReducedMotion()

  return (
    <section aria-label="Pourquoi nous faire confiance" className="relative px-5 md:px-10 py-8 md:py-12">
      <motion.ul
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease }}
        className="max-w-container mx-auto grid grid-cols-2 lg:grid-cols-4 rounded-2xl bg-white border border-line shadow-luxe overflow-hidden"
      >
        {REASSURANCE.map((item, i) => {
          const Icon = ICONS[item.icon] ?? Star
          const isRating = item.icon === 'star'
          return (
            <li
              key={item.title}
              className={[
                'flex items-center gap-3.5 px-4 sm:px-5 lg:px-7 py-6 lg:py-8',
                'border-line',
                'max-lg:[&:nth-child(-n+2)]:border-b',
                'max-lg:[&:nth-child(odd)]:border-r',
                'lg:[&:not(:first-child)]:border-l',
              ].join(' ')}
            >
              <span className="w-12 h-12 shrink-0 rounded-full bg-green-tint flex items-center justify-center ring-1 ring-green/15">
                <Icon size={20} strokeWidth={1.9} className="text-green-2" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                {isRating && (
                  <span className="flex gap-0.5 mb-1" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} size={11} className="fill-amber-400 text-amber-400" />
                    ))}
                  </span>
                )}
                <span className="block font-display text-[15px] sm:text-[17px] font-600 text-ink leading-tight tracking-tight">
                  {item.title}
                </span>
                <span className="block font-sans text-[12px] sm:text-[13px] text-soft leading-snug mt-1 text-pretty">
                  {item.sub}
                </span>
              </span>
            </li>
          )
        })}
      </motion.ul>
    </section>
  )
}
