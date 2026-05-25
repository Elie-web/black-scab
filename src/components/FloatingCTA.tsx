import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Phone } from 'lucide-react'
import { STUDIO } from '../config'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setVisible(y > 500)
  })

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden pb-safe"
      aria-hidden={!visible}
    >
      <div className="bg-charcoal border-t border-ash/60 px-4 py-3 flex gap-3">
        <a
          href={`tel:${STUDIO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2.5 py-3.5 bg-gold text-ink text-sm font-semibold rounded-full shadow-lg shadow-gold/20"
        >
          <Phone size={15} strokeWidth={2.5} />
          {STUDIO.phone}
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-carbon text-cream text-sm font-medium rounded-full border border-ash/60"
        >
          Prendre RDV
        </a>
      </div>
    </motion.div>
  )
}
