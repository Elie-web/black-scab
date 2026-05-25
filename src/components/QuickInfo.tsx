import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, MapPin, Clock, Lock } from 'lucide-react'
import { STUDIO } from '../config'

const ITEMS = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: STUDIO.phone,
    href: `tel:${STUDIO.phoneRaw}`,
    sub: 'Répondre rapidement aux questions',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: `${STUDIO.city}, Savoie`,
    href: STUDIO.mapsUrl,
    sub: STUDIO.address,
  },
  {
    icon: Lock,
    label: 'Studio privé',
    value: 'Sur rendez-vous',
    href: '#contact',
    sub: 'Uniquement sur RDV — pas de passage',
  },
  {
    icon: Clock,
    label: 'Expérience',
    value: `${STUDIO.yearsExp} ans`,
    href: '#artiste',
    sub: 'De pratique du tatouage réaliste',
  },
]

export default function QuickInfo() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section id="info" ref={ref} className="bg-charcoal border-y border-ash/50 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px bg-ash/40 rounded-xl overflow-hidden">
        {ITEMS.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group bg-charcoal hover:bg-carbon flex flex-col gap-3 p-6 md:p-8 transition-colors duration-300"
          >
            <item.icon
              size={20}
              strokeWidth={1.5}
              className="text-gold/70 group-hover:text-gold transition-colors duration-300"
            />
            <div>
              <p className="font-label text-[10px] tracking-ultrawide uppercase text-muted mb-1">
                {item.label}
              </p>
              <p className="font-serif text-lg font-medium text-cream group-hover:text-gold transition-colors duration-300">
                {item.value}
              </p>
              <p className="font-sans text-xs text-muted/70 mt-0.5 leading-relaxed">
                {item.sub}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
