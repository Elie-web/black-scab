import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  poitrine,
  brasGauche,
  avantBras,
  avantBras2,
  forearm,
  triceps,
} from '../assets'

const GALLERY = [
  { src: poitrine,   alt: 'Tatouage poitrine complète',  span: 'row-span-2' },
  { src: brasGauche, alt: 'Tatouage bras gauche',         span: '' },
  { src: avantBras,  alt: 'Tatouage avant-bras',          span: '' },
  { src: avantBras2, alt: 'Tatouage avant-bras détail',   span: 'row-span-2' },
  { src: forearm,    alt: 'Forearm tattoo réalisme',      span: '' },
  { src: triceps,    alt: 'Tatouage triceps',              span: '' },
]

function Lightbox({
  photos,
  initial,
  onClose,
}: {
  photos: typeof GALLERY
  initial: number
  onClose: () => void
}) {
  const [current, setCurrent] = useState(initial)
  const prev = () => setCurrent((i) => (i - 1 + photos.length) % photos.length)
  const next = () => setCurrent((i) => (i + 1) % photos.length)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/97 backdrop-blur-2xl p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.88, opacity: 0 }}
        transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
        className="relative max-w-4xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photos[current].src}
          alt={photos[current].alt}
          className="w-full h-full object-contain rounded-xl max-h-[80vh]"
        />

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-ash/60 rounded-full flex items-center justify-center text-cream hover:bg-gold hover:text-ink transition-all duration-200"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-ash/60 rounded-full flex items-center justify-center text-cream hover:bg-gold hover:text-ink transition-all duration-200"
        >
          <ChevronRight size={20} />
        </button>
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 bg-ash/60 rounded-full flex items-center justify-center text-cream hover:bg-gold hover:text-ink transition-all duration-200"
        >
          <X size={17} />
        </button>

        <p className="text-center text-cream-dim/50 text-sm mt-4">{photos[current].alt}</p>
        <p className="text-center text-muted/40 text-xs mt-1">{current + 1} / {photos.length}</p>
      </motion.div>
    </motion.div>
  )
}

export default function Gallery() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <section id="galerie" className="py-28 px-6 bg-ink">
      <div className="max-w-7xl mx-auto">

        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 28 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold/50" />
            <span className="font-label text-[11px] font-600 tracking-ultrawide uppercase text-gold/80">
              Portfolio
            </span>
          </div>
          <h2 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-semibold text-cream leading-tight">
            29 ans d'encre
            <br />
            <span className="font-light italic text-gold">sur peau humaine</span>
          </h2>
        </motion.div>

        {/* Grille masonry */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:h-[580px]">
          {GALLERY.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${photo.span}`}
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                style={{ objectPosition: 'center' }}
              />

              {/* Overlay au hover */}
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-500" />

              {/* Zoom icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-cream/20">
                  <ZoomIn size={20} className="text-cream" />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-sans text-cream text-xs font-medium tracking-wide bg-ink/50 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {photo.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted/40 text-xs mt-6"
        >
          Cliquez sur une photo pour l'agrandir
        </motion.p>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox photos={GALLERY} initial={lightboxIndex} onClose={() => setLightboxIndex(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
