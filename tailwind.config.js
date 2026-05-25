/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:        '#0D0B09',
        charcoal:   '#161210',
        carbon:     '#201C18',
        ash:        '#2C2620',
        'ash-light':'#3A3228',
        gold:       '#C8922A',
        'gold-light':'#E8C070',
        crimson:    '#8C2020',
        cream:      '#F5F0E8',
        'cream-dim':'#C8BEA8',
        muted:      '#8A7A68',
      },
      fontFamily: {
        serif:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
        label:  ['"Barlow Condensed"', 'sans-serif'],
        sans:   ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest:     '0.25em',
        ultrawide:  '0.35em',
      },
    },
  },
  plugins: [],
}
