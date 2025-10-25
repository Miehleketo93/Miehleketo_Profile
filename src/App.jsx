import React, { useState, useEffect } from 'react'
import { ChevronUp, Moon, Sun } from 'lucide-react'
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
import Credentials from './components/Credentials'
import { PRIMARY, SECONDARY, PRIMARY_DARK, SECONDARY_DARK } from './constants/Colors'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') setDarkMode(true)
    else if (savedTheme === null) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDarkMode(prefersDark)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    if (darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [darkMode])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const toggleDarkMode = () => setDarkMode(prev => !prev)

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>

      <Header scrolled={scrolled} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="max-w-6xl mx-auto px-6 pb-12 space-y-8">
        <Hero darkMode={darkMode} primary={darkMode ? PRIMARY_DARK : PRIMARY} secondary={darkMode ? SECONDARY_DARK : SECONDARY} />
        <Professional darkMode={darkMode} primary={darkMode ? PRIMARY_DARK : PRIMARY} secondary={darkMode ? SECONDARY_DARK : SECONDARY} />
        <Skills darkMode={darkMode} primary={darkMode ? PRIMARY_DARK : PRIMARY} secondary={darkMode ? SECONDARY_DARK : SECONDARY} />
        <Projects darkMode={darkMode} primary={darkMode ? PRIMARY_DARK : PRIMARY} secondary={darkMode ? SECONDARY_DARK : SECONDARY} />
        <Education darkMode={darkMode} primary={darkMode ? PRIMARY_DARK : PRIMARY} secondary={darkMode ? SECONDARY_DARK : SECONDARY} />
        <Credentials darkMode={darkMode} primary={darkMode ? PRIMARY_DARK : PRIMARY} secondary={darkMode ? SECONDARY_DARK : SECONDARY} />
        <Research darkMode={darkMode} primary={darkMode ? PRIMARY_DARK : PRIMARY} secondary={darkMode ? SECONDARY_DARK : SECONDARY} />
        <Supervision darkMode={darkMode} primary={darkMode ? PRIMARY_DARK : PRIMARY} secondary={darkMode ? SECONDARY_DARK : SECONDARY} />
        <Contact darkMode={darkMode} primary={darkMode ? PRIMARY_DARK : PRIMARY} secondary={darkMode ? SECONDARY_DARK : SECONDARY} />
        <Footer darkMode={darkMode} primary={darkMode ? PRIMARY_DARK : PRIMARY} secondary={darkMode ? SECONDARY_DARK : SECONDARY} />
      </main>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className={`fixed bottom-24 right-8 p-3 rounded-full shadow-lg transition-all duration-300 ${
          darkMode
            ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400'
            : 'bg-white hover:bg-gray-100 text-gray-700'
        }`}
        aria-label="Toggle dark mode"
        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full text-white shadow-lg hover:opacity-90 transition-all duration-300"
          style={{ background: darkMode ? PRIMARY_DARK : PRIMARY }}
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  )
}
