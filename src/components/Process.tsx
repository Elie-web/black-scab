import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { PROCESS } from '../config'

export default function Process() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })

  return (
    <section id="processus" className="py-28 px-6 bg-charcoal">
      <div className="max-w-7xl mx-auto">

        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 28 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold/50" />
            <span className="font-label text-[11px] tracking-ultrawide uppercase text-gold/80">
              Comment ça se passe
            </span>
            <div className="h-px w-8 bg-gold/50" />
          </div>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.8rem)] font-semibold text-cream leading-tight">
            De votre idée
            <br />
            <span className="font-light italic text-gold">à votre peau</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Ligne de connexion desktop */}
          <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-[70%] h-px bg-ash/80" />

          <div className="grid lg:grid-cols-3 gap-10">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-center"
              >
                {/* Numéro */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-8">
                  <div className="absolute inset-0 bg-carbon rounded-full border border-ash/60" />
                  <span className="relative font-serif text-[2.2rem] font-semibold text-gold/80 leading-none">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-cream mb-4">
                  {step.title}
                </h3>
                <p className="font-sans text-[14px] text-muted leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note finale */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 p-8 bg-carbon rounded-2xl border border-ash/50 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
        >
          <div className="w-1 h-12 bg-gold/60 rounded-full flex-shrink-0" />
          <div>
            <p className="font-serif text-lg text-cream mb-1">
              "Vous nous présentez vos idées, nous les réalisons."
            </p>
            <p className="font-sans text-sm text-muted">
              Rien d'imposé. Pas de catalogue générique. Votre projet est votre projet —
              Mark apporte son œil, ses 29 ans d'expérience, et la certitude que ça vieillira bien.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
