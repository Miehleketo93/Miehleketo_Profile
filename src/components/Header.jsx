import React, { useState } from 'react'
import { Moon, Sun, Menu, X, Download } from 'lucide-react'
import { PRIMARY, PRIMARY_DARK, SECONDARY, SECONDARY_DARK } from '../constants/Colors'

export default function Header({ scrolled, darkMode, toggleDarkMode }) {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

const navItems = [
{ href: '#about', label: 'About' },
{ href: '#professional', label: 'Professional' },
{ href: '#skills', label: 'Skills' },
{ href: '#projects', label: 'Projects' },
{ href: '#education', label: 'Education' },
{ href: '#credentials', label: 'Credentials' },
{ href: '#research', label: 'Research' },
{ href: '#supervision', label: 'Supervision' },
{ href: '#contact', label: 'Contact' },
]

// Select gradient colors based on mode
const gradientStart = darkMode ? PRIMARY_DARK : PRIMARY
const gradientEnd = darkMode ? SECONDARY_DARK : SECONDARY

return (
<header
className={`sticky top-0 z-50 transition-all duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      } ${scrolled ? 'shadow-md' : ''}`}
> <div className="max-w-6xl mx-auto px-6 py-4"> <div className="flex items-center justify-between gap-6">
{/* Logo and Title */} <div className="flex items-center gap-3">
<div
style={{ background: `linear-gradient(135deg, ${gradientStart}, ${gradientEnd})` }}
className="w-12 h-12 rounded-lg shadow-md flex-shrink-0"
></div> <div>
<div
className={`text-lg font-bold whitespace-nowrap ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
>
Miehleketo Mathebula </div>
<div
className={`text-xs sm:text-sm whitespace-nowrap ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
>
Data Engineer · PhD Candidate </div> </div> </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-6">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`text-sm hover:opacity-70 transition-opacity ${
              darkMode ? 'text-gray-300' : 'text-gray-900'
            }`}
          >
            {item.label}
          </a>
        ))}

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-lg transition-colors ${
            darkMode
              ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
          aria-label="Toggle dark mode"
          title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Resume Button */}
        <a
          href={`${import.meta.env.BASE_URL}miehleketo.pdf`}
          download
          style={{
            borderColor: darkMode ? PRIMARY_DARK : PRIMARY,
            color: darkMode ? PRIMARY_DARK : PRIMARY,
          }}
          className={`px-4 py-2 border rounded-lg text-sm transition-colors flex items-center gap-2 ${
            darkMode ? 'hover:bg-red-900/20' : 'hover:bg-red-50'
          }`}
        >
          <Download size={16} />
          RESUME
        </a>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden flex items-center gap-2">
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-lg transition-colors ${
            darkMode
              ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          className={`p-2 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>

    {/* Mobile Navigation */}
    {mobileMenuOpen && (
      <nav
        className={`lg:hidden mt-4 pb-4 space-y-2 border-t pt-4 ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`block py-2 hover:opacity-70 transition-opacity ${
              darkMode ? 'text-gray-300' : 'text-gray-900'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}

        {/* Mobile Resume Button */}
        <a
          href={`${import.meta.env.BASE_URL}miehleketo.pdf`}
          download
          style={{
            borderColor: darkMode ? PRIMARY_DARK : PRIMARY,
            color: darkMode ? PRIMARY_DARK : PRIMARY,
          }}
          className={`inline-flex items-center gap-2 px-4 py-2 border rounded-lg text-sm transition-colors ${
            darkMode ? 'hover:bg-red-900/20' : 'hover:bg-red-50'
          }`}
        >
          <Download size={16} />
          RESUME
        </a>
      </nav>
    )}
  </div>
</header>


)
}
