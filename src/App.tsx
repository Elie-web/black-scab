import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuickInfo from './components/QuickInfo'
import Gallery from './components/Gallery'
import About from './components/About'
import Styles from './components/Styles'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Instagram from './components/Instagram'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  return (
    <div className="bg-ink font-sans text-cream">
      <Navbar />

      <main>
        {/* 1. Accroche — nom, spécialité, appel */}
        <Hero />

        {/* 2. Infos immédiates — téléphone, studio privé, Savoie */}
        <QuickInfo />

        {/* 3. Portfolio — la preuve par l'image */}
        <Gallery />

        {/* 4. L'artiste */}
        <About />

        {/* 5. Les styles */}
        <Styles />

        {/* 6. Comment ça se passe */}
        <Process />

        {/* 7. Avis clients */}
        <Testimonials />

        {/* 8. Feed Instagram */}
        <Instagram />

        {/* 9. Prendre rendez-vous */}
        <Contact />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  )
}
