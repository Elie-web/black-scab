import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { REVIEWS, STUDIO } from '../config'

function ReviewCard({ review }: { review: typeof REVIEWS[0] }) {
  return (
    <div
      className={`relative flex-shrink-0 rounded-2xl p-7 flex flex-col gap-4 select-none h-full ${
        review.highlight
          ? 'bg-gold/10 ring-1 ring-gold/30 shadow-xl shadow-gold/5'
          : 'bg-carbon border border-ash/50'
      }`}
    >
      <Quote
        size={26}
        strokeWidth={1}
        className={review.highlight ? 'text-gold/50' : 'text-ash-light'}
      />
      <p
        className={`font-sans text-[14px] leading-relaxed flex-1 ${
          review.highlight ? 'text-cream/85' : 'text-muted'
        }`}
      >
        "{review.text}"
      </p>
      <div
        className={`flex items-center justify-between pt-4 border-t ${
          review.highlight ? 'border-gold/20' : 'border-ash/50'
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold font-label ${
              review.highlight ? 'bg-gold text-ink' : 'bg-ash text-cream-dim'
            }`}
          >
            {review.name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className={`text-sm font-semibold ${review.highlight ? 'text-cream' : 'text-cream-dim'}`}>
              {review.name}
            </div>
            <div className={`text-xs ${review.highlight ? 'text-cream/40' : 'text-muted/50'}`}>
              {review.date}
            </div>
          </div>
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className={i < review.rating ? 'fill-gold text-gold' : 'fill-ash text-ash'} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => setCurrent((i) => (i + 1) % REVIEWS.length)

  return (
    <section id="avis" className="py-28 bg-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

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
              Avis clients
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-semibold text-cream leading-tight">
              Ils portent son travail
              <br />
              <span className="font-light italic text-gold">depuis des années</span>
            </h2>

            {/* Note globale */}
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="font-serif text-3xl font-bold text-cream">{STUDIO.rating}</span>
              <div className="w-px h-6 bg-ash-light" />
              <span className="font-sans text-muted text-sm">
                {STUDIO.reviewCount} avis Google
              </span>
            </div>
          </div>
        </motion.div>

        {/* Grille desktop */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>

        {/* Carousel mobile */}
        <div className="md:hidden">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
          >
            <ReviewCard review={REVIEWS[current]} />
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-ash-light/40 flex items-center justify-center text-muted hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-gold w-6' : 'bg-ash-light/40 w-2'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-ash-light/40 flex items-center justify-center text-muted hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href={STUDIO.googleMapsReview}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light text-sm font-medium transition-colors duration-300 border-b border-gold/30 hover:border-gold-light/50 pb-0.5"
          >
            Voir tous les avis sur Google →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
