import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play, ArrowRight } from 'lucide-react'

function IgIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}
import {
  epaule,
  triceps,
  avantBras,
  avantBras2,
  forearm,
  brasGauche,
  poitrine,
  markSelfie,
} from '../assets'
import { STUDIO } from '../config'

// Simule la structure d'un vrai feed Instagram avec types de contenu
const FEED: {
  src: string
  alt: string
  type: 'photo' | 'reel' | 'carousel'
  likes?: number
  span?: string
}[] = [
  { src: poitrine,   alt: 'Tatouage poitrine complète',    type: 'photo',    likes: 247, span: 'col-span-2 row-span-2' },
  { src: brasGauche, alt: 'Tatouage bras gauche réalisme', type: 'reel',     likes: 189 },
  { src: avantBras,  alt: 'Tatouage avant-bras',           type: 'photo',    likes: 134 },
  { src: avantBras2, alt: 'Tatouage avant-bras détail',    type: 'carousel', likes: 312 },
  { src: forearm,    alt: 'Forearm réalisme',              type: 'reel',     likes: 421 },
  { src: triceps,    alt: 'Tatouage triceps',              type: 'photo',    likes: 98 },
  { src: epaule,     alt: 'Tatouage épaule',               type: 'photo',    likes: 176 },
]

const INSTAGRAM_URL = 'https://www.instagram.com/markblackscab/'

function TypeBadge({ type }: { type: 'photo' | 'reel' | 'carousel' }) {
  if (type === 'photo') return null
  return (
    <div className="absolute top-2.5 right-2.5">
      {type === 'reel' && (
        <div className="w-7 h-7 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
          <Play size={12} className="text-white fill-white ml-0.5" />
        </div>
      )}
      {type === 'carousel' && (
        <div className="w-7 h-7 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
            <rect x="2" y="2" width="9" height="9" rx="1.5" />
            <rect x="13" y="2" width="9" height="9" rx="1.5" />
            <rect x="2" y="13" width="9" height="9" rx="1.5" />
            <rect x="13" y="13" width="9" height="9" rx="1.5" />
          </svg>
        </div>
      )}
    </div>
  )
}

export default function Instagram() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })

  return (
    <section id="instagram" className="py-28 px-6 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* En-tête profil Instagram */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 28 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12"
        >
          {/* Profil */}
          <div className="flex items-center gap-5">
            {/* Avatar */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-shrink-0"
            >
              <div
                className="w-16 h-16 rounded-full p-[2px]"
                style={{
                  background: 'linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)',
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-charcoal">
                  <img
                    src={markSelfie}
                    alt="Mark – @markblackscab"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </a>

            {/* Infos profil */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label font-600 text-base tracking-wide text-cream hover:text-gold transition-colors duration-300"
                >
                  @markblackscab
                </a>
                <span className="hidden md:inline-flex items-center gap-1 px-3 py-1 bg-carbon rounded-full border border-ash/50 text-xs text-cream-dim/70 font-sans">
                  <IgIcon size={10} className="opacity-70" />
                  Instagram
                </span>
              </div>
              <p className="font-sans text-sm text-muted">
                Tatoueur réalisme · {STUDIO.city}, Savoie
              </p>
              <div className="flex items-center gap-4 mt-2">
                <span className="font-label text-[11px] text-cream-dim/50 tracking-wide">
                  <span className="text-cream font-semibold">29 ans</span> d'expérience
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #f9ce34 0%, #ee2a7b 50%, #6228d7 100%)',
              color: '#fff',
            }}
          >
            <IgIcon size={15} />
            Suivre sur Instagram
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </motion.div>

        {/* Séparateur */}
        <div className="h-px bg-ash/50 mb-10" />

        {/* Grille feed — style Instagram */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-1.5 md:gap-2">
          {FEED.map((post, i) => (
            <motion.a
              key={post.src}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden group cursor-pointer bg-carbon ${
                post.span ?? ''
              } ${
                i === 0
                  ? 'aspect-square'
                  : 'aspect-square'
              }`}
              style={{ borderRadius: '4px' }}
            >
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />

              {/* Badge type */}
              <TypeBadge type={post.type} />

              {/* Hover overlay — style Instagram */}
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/55 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-1">
                  <div className="flex items-center gap-5 text-white font-sans font-semibold text-sm">
                    <span className="flex items-center gap-1.5">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                      {post.likes}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer lien */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-ash/40"
        >
          <p className="font-sans text-sm text-muted text-center sm:text-left">
            Pour voir les derniers travaux, reels et stories de Mark →
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-gold hover:text-gold-light text-sm font-medium transition-colors duration-300 border-b border-gold/30 hover:border-gold-light/50 pb-0.5"
          >
            <IgIcon size={13} />
            Voir le profil complet @markblackscab
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
