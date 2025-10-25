// ============ components/Header.jsx ============
import React, { useState } from 'react'
import { PRIMARY, SECONDARY } from '../constants/Colors'

export default function Header({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#professional', label: 'Professional' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#research', label: 'Research' },
    { href: '#supervision', label: 'Supervision' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})` }}
              className="w-12 h-12 rounded-lg shadow-md"
            ></div>
            <div>
              <div className="text-lg font-bold">Miehleketo Mathebula</div>
              <div className="text-xs sm:text-sm text-gray-600">Data Engineer · PhD Candidate</div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`${import.meta.env.BASE_URL}miehleketo_cv.pdf`}
              download
              style={{ borderColor: PRIMARY, color: PRIMARY }}
              className="px-4 py-2 border rounded-lg text-sm hover:bg-red-50 transition-colors flex items-center gap-2"
            >
              CV
            </a>
          </nav>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-2 border-t pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 hover:opacity-70 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
