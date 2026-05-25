import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { TATTOO_STYLES } from '../config'

export default function Styles() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })

  return (
    <section id="styles" className="py-28 px-6 bg-ink">
      <div className="max-w-7xl mx-auto">

        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 28 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold/50" />
            <span className="font-label text-[11px] tracking-ultrawide uppercase text-gold/80">
              Spécialités
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-semibold text-cream leading-tight">
              Le réalisme
              <br />
              <span className="font-light italic text-gold">dans tous ses styles</span>
            </h2>
            <p className="font-sans text-muted text-[15px] leading-relaxed max-w-sm">
              Vous venez avec votre idée. Mark la traduit dans le style qui lui correspond,
              adapté à votre peau, à l'emplacement, à ce que vous voulez porter toute une vie.
            </p>
          </div>
        </motion.div>

        {/* Grille de styles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TATTOO_STYLES.map((style, i) => (
            <motion.div
              key={style.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl bg-carbon cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/20 to-transparent" />
              </div>

              {/* Contenu */}
              <div className="p-5">
                <h3 className="font-serif text-xl font-semibold text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                  {style.title}
                </h3>
                <p className="font-sans text-[13px] text-muted leading-relaxed">
                  {style.desc}
                </p>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 inset-x-0 h-px bg-gold/0 group-hover:bg-gold/60 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA sous les styles */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="font-sans text-muted text-sm mb-4">
            Vous ne savez pas encore quel style vous convient ?
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-gold hover:text-gold-light text-sm font-medium transition-colors duration-300 border-b border-gold/30 hover:border-gold-light/50 pb-0.5"
          >
            Demandez conseil à Mark
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
