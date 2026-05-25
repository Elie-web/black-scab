// ================================================================
// CONFIGURATION BLACKSCAB TATTOOS — Personnalisez uniquement ce fichier
// ================================================================

export const STUDIO = {
  name:       'Blackscab Tattoos',
  shortName:  'Blackscab',
  artist:     'Mark',
  tagline:    'Votre peau. Son art.',
  specialty:  'Spécialiste réalisme · Tous styles · 29 ans d\'expérience',
  city:       'Saint-Baldoph',
  department: 'Savoie',
  since:      '1996',

  phone:      '06 26 58 51 57',
  phoneRaw:   '0626585157',

  address:    '190 Chemin de Moulevin',
  cityZip:    '73190 Saint-Baldoph',
  mapsUrl:    'https://maps.google.com/?q=190+Chemin+de+Moulevin+73190+Saint-Baldoph',
  mapEmbed:   'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.4!2d5.9882!3d45.5497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b8f3a3b9e8f0b%3A0x1234!2s190+Chemin+de+Moulevin%2C+73190+Saint-Baldoph!5e0!3m2!1sfr!2sfr!4v1700000000000',

  instagram:  '#',
  facebook:   '#',
  googleMapsReview: 'https://maps.google.com/?q=Blackscab+Tattoos+Saint-Baldoph',

  reviewCount: '7',
  rating:      '5.0',
  yearsExp:    '29',

  // Unsplash tattoo images (dark realism aesthetic)
  heroImage: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=1800&q=90&fit=crop',
} as const

// --- Styles de tatouage ---
export const TATTOO_STYLES = [
  {
    title: 'Portrait Réaliste',
    desc: 'Visages, personnalités, proches disparus. Chaque trait rendu avec une précision photographique.',
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=600&q=85&fit=crop',
  },
  {
    title: 'Nature & Animal',
    desc: 'Faune, flore, paysages. La texture des plumes, du pelage, de l\'écorce restituée avec exactitude.',
    image: 'https://images.unsplash.com/photo-1590246814883-57c511e86a22?w=600&q=85&fit=crop',
  },
  {
    title: 'Noir & Gris',
    desc: 'L\'école du réalisme classique. Dégradés maîtrisés, ombres profondes, lumières éclatantes.',
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&q=85&fit=crop',
  },
  {
    title: 'Couleur & Réalisme',
    desc: 'Pigments vibrants, rendu photographique en couleur. Pour ceux qui veulent frapper fort.',
    image: 'https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=600&q=85&fit=crop',
  },
]

// --- Étapes du processus ---
export const PROCESS = [
  {
    step: '01',
    title: 'La consultation',
    desc: 'Vous exposez votre idée — référence, emplacement, signification. Mark écoute, conseille, oriente vers ce qui vieillira bien sur votre peau.',
  },
  {
    step: '02',
    title: 'Le projet',
    desc: 'Création d\'un dessin sur mesure. Rien de générique, rien de copié. Un projet pensé pour vous, pour votre morphologie, pour durer des décennies.',
  },
  {
    step: '03',
    title: 'La séance',
    desc: 'Studio privé, stérile, silencieux. Mark travaille dans le calme et la précision. Vous repartez avec quelque chose qui tiendra 30 ans.',
  },
]

// --- Avis clients (Google reviews réels) ---
export const REVIEWS = [
  {
    name: 'Dylan L.',
    date: 'Janvier 2025',
    rating: 5,
    text: 'Mon tattoo date maintenant d\'il y a 7 ans. Putain il vieilli trop bien c\'est une dinguerie ! C\'est juste le Best of Savoie ! Merci à toi Mark.',
    highlight: true,
  },
  {
    name: 'Nicolas K.',
    date: 'Novembre 2024',
    rating: 5,
    text: 'Un réel artiste. Je conseille vivement. Super accueil et réalisation exceptionnelle.',
    highlight: false,
  },
  {
    name: 'Jeremy F.',
    date: 'Juillet 2023',
    rating: 5,
    text: 'Mark est un vrai professionnel, à l\'écoute, de bons conseils. Le salon est d\'une propreté irréprochable. À bientôt.',
    highlight: false,
  },
]

// --- Galerie portfolio ---
export const GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=700&q=85&fit=crop',
    alt: 'Portrait réaliste',
    span: 'row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=600&q=85&fit=crop',
    alt: 'Réalisme noir et gris',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1590246814883-57c511e86a22?w=600&q=85&fit=crop',
    alt: 'Tatouage floral',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&q=85&fit=crop',
    alt: 'Détail de tatouage',
    span: 'row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=600&q=85&fit=crop',
    alt: 'Tatouage couleur',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1562673255-ef78d8abf540?w=600&q=85&fit=crop',
    alt: 'Tatouage bras',
    span: '',
  },
]
