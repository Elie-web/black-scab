import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, MapPin, Lock, ArrowRight } from 'lucide-react'
import { STUDIO } from '../config'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" ref={ref} className="py-28 px-6 bg-charcoal">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold/50" />
            <span className="font-label text-[11px] tracking-ultrawide uppercase text-gold/80">
              Rendez-vous
            </span>
          </div>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-semibold text-cream leading-tight">
            Votre projet
            <br />
            <span className="font-light italic text-gold">commence par un appel</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20">

          {/* Infos + carte */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Bloc avertissement studio privé */}
            <div className="flex gap-4 p-5 bg-carbon rounded-xl border border-ash/50">
              <Lock size={18} strokeWidth={1.5} className="text-gold/70 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-sans text-sm font-semibold text-cream mb-1">Studio privé</p>
                <p className="font-sans text-[13px] text-muted leading-relaxed">
                  Mark ne reçoit que sur rendez-vous. Pas de passage possible.
                  Appelez ou envoyez un message pour convenir d'une date.
                </p>
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-carbon flex items-center justify-center border border-ash/50 flex-shrink-0">
                <Phone size={16} strokeWidth={1.5} className="text-gold/70" />
              </div>
              <div>
                <p className="font-label text-[10px] tracking-ultrawide uppercase text-muted mb-1">Téléphone</p>
                <a
                  href={`tel:${STUDIO.phoneRaw}`}
                  className="font-serif text-2xl text-cream hover:text-gold transition-colors duration-300"
                >
                  {STUDIO.phone}
                </a>
              </div>
            </div>

            {/* Adresse */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-carbon flex items-center justify-center border border-ash/50 flex-shrink-0">
                <MapPin size={16} strokeWidth={1.5} className="text-gold/70" />
              </div>
              <div>
                <p className="font-label text-[10px] tracking-ultrawide uppercase text-muted mb-1">Adresse</p>
                <p className="font-serif text-lg text-cream">{STUDIO.address}</p>
                <p className="font-sans text-sm text-muted">{STUDIO.cityZip}</p>
                <a
                  href={STUDIO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gold/70 hover:text-gold text-xs font-medium mt-1.5 transition-colors duration-300"
                >
                  Voir sur Google Maps
                  <ArrowRight size={11} />
                </a>
              </div>
            </div>

            {/* Carte Google Maps */}
            <div className="rounded-xl overflow-hidden border border-ash/50 h-52">
              <iframe
                src={STUDIO.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Blackscab Tattoos"
              />
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-carbon rounded-2xl p-8 border border-ash/50">
              <p className="font-sans text-[13px] text-muted mb-8 leading-relaxed">
                Décrivez votre projet — emplacement, style, taille approximative, idée de référence.
                Mark vous répond pour fixer une consultation.
              </p>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  window.location.href = `tel:${STUDIO.phoneRaw}`
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label text-[10px] tracking-ultrawide uppercase text-muted mb-2">
                      Prénom
                    </label>
                    <input type="text" placeholder="Votre prénom" className="field" required />
                  </div>
                  <div>
                    <label className="block font-label text-[10px] tracking-ultrawide uppercase text-muted mb-2">
                      Téléphone
                    </label>
                    <input type="tel" placeholder="06 00 00 00 00" className="field" />
                  </div>
                </div>

                <div>
                  <label className="block font-label text-[10px] tracking-ultrawide uppercase text-muted mb-2">
                    Style souhaité
                  </label>
                  <select className="field">
                    <option value="">Choisir un style…</option>
                    <option>Portrait réaliste</option>
                    <option>Nature & Animal</option>
                    <option>Noir & Gris</option>
                    <option>Couleur & Réalisme</option>
                    <option>Je ne sais pas encore</option>
                  </select>
                </div>

                <div>
                  <label className="block font-label text-[10px] tracking-ultrawide uppercase text-muted mb-2">
                    Votre projet
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Décrivez votre idée, l'emplacement sur le corps, la taille approximative…"
                    className="field"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-ink font-semibold rounded-full hover:bg-gold-light transition-all duration-300 text-sm shadow-lg shadow-gold/20"
                >
                  Envoyer le projet à Mark
                </button>

                <p className="text-center font-sans text-[11px] text-muted/50">
                  Ou appelez directement :{' '}
                  <a href={`tel:${STUDIO.phoneRaw}`} className="text-gold/60 hover:text-gold transition-colors">
                    {STUDIO.phone}
                  </a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
