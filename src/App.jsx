import React, { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'
import Header from './components/Header'
import Hero from './components/Hero'
import Professional from './components/Professional'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Research from './components/Research'
import Supervision from './components/Supervision'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { PRIMARY } from './constants/Colors'


export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header scrolled={scrolled} />

      <main className="max-w-6xl mx-auto px-6 pb-12">
        <Hero />
        <Professional />
        <Skills />
        <Projects />
        <Education />
        <Research />
        <Supervision />
        <Contact />
        <Footer />
      </main>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full text-white shadow-lg hover:opacity-90 transition-all duration-300"
          style={{ background: PRIMARY }}
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  )
}



