import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Shield, Users } from 'lucide-react'
import { STUDIO } from '../config'
import { markSelfie } from '../assets'

const STATS = [
  { icon: Award,  value: '29 ans',   label: 'de pratique' },
  { icon: Shield, value: '5/5',      label: 'avis Google' },
  { icon: Users,  value: 'Privé',    label: 'studio exclusif' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="artiste" ref={ref} className="py-28 px-6 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={markSelfie}
                alt="Mark, tatoueur chez Blackscab Tattoos"
                className="w-full h-full object-cover object-center"
              />
              {/* Grain overlay sombre */}
              <div
                className="absolute inset-0 mix-blend-multiply opacity-30"
                style={{
                  background: 'linear-gradient(160deg, rgba(13,11,9,0) 40%, rgba(13,11,9,0.9) 100%)',
                }}
              />
            </div>

            {/* Badge flottant */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-5 -right-5 bg-gold text-ink px-6 py-4 rounded-2xl shadow-xl shadow-gold/20"
            >
              <p className="font-label text-[10px] tracking-ultrawide uppercase font-600 opacity-70 mb-0.5">Depuis</p>
              <p className="font-serif text-2xl font-semibold leading-none">{STUDIO.since}</p>
            </motion.div>
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold/50" />
              <span className="font-label text-[11px] tracking-ultrawide uppercase text-gold/80">
                L'artiste
              </span>
            </div>

            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-semibold text-cream leading-tight mb-6">
              Mark —<br />
              <span className="font-light italic text-gold">artisan de la peau</span>
            </h2>

            <div className="space-y-4 font-sans text-[15px] text-muted leading-relaxed mb-10">
              <p>
                29 ans. Ce n'est pas une ligne sur un CV, c'est le temps qu'il faut pour maîtriser
                vraiment. Pour comprendre comment l'encre vieillit, comment la peau bouge, comment
                un tatouage traverse le temps.
              </p>
              <p>
                Mark travaille en studio privé à Saint-Baldoph, en Savoie. Il ne reçoit que sur
                rendez-vous. Pas de passage, pas de file d'attente. Votre session est préparée,
                votre projet est pensé pour durer.
              </p>
              <p>
                Sa spécialité : le réalisme dans tous ses styles. Portrait, nature, noir et gris,
                couleur. Vous apportez une idée. Il en fait quelque chose qui tient 30 ans.
              </p>
            </div>

            {/* Citation client */}
            <blockquote className="relative pl-5 border-l-2 border-gold/40 mb-10">
              <p className="font-serif text-lg italic text-cream-dim/70 leading-relaxed">
                "Mon tattoo date d'il y a 7 ans. Putain il vieillit trop bien c'est une dinguerie.
                C'est juste le Best of Savoie."
              </p>
              <footer className="font-label text-[10px] tracking-wide uppercase text-muted/60 mt-2">
                — Dylan L. · Client depuis 2018
              </footer>
            </blockquote>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-carbon rounded-xl p-4 text-center"
                >
                  <stat.icon size={16} strokeWidth={1.5} className="text-gold/60 mx-auto mb-2" />
                  <p className="font-serif text-xl font-semibold text-cream">{stat.value}</p>
                  <p className="font-sans text-[11px] text-muted/70 mt-0.5">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
