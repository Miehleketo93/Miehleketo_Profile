// ============ components/Hero.jsx ============
import React from 'react'
import { PRIMARY, SECONDARY, PRIMARY_DARK, SECONDARY_DARK } from '../constants/Colors'

function Hero({ darkMode }) {
  const primaryColor = darkMode ? PRIMARY_DARK : PRIMARY
  const secondaryColor = darkMode ? SECONDARY_DARK : SECONDARY

  const careerSummary = `I am an accomplished data engineer with a strong track record of leading innovative data solutions that integrate AI to drive financial intelligence. My work bridges practical engineering and academic research, focusing on AI to enhance decision-making and governance in financial systems. I led the successful redesign of data workflows, achieving a 30% reduction in processing time and significantly improving data accuracy. Currently pursuing a PhD, my research investigates AI, engineering principles, and data-driven financial intelligence models to support smarter, more resilient financial systems, applying this research to advance ESG principles and SDGs.`

  const skills = [
    'AI Engineering',
    'Data Engineering',
    'Data Analytics',
    'Machine Learning',
    'Predictive Analytics',
    'Data Pipelines',
    'Financial Intelligence',
    'ESG-SDG'
  ]

  return (
    <section id="about" className={`relative py-12 sm:py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Background Accent */}
      <div className={`absolute inset-0 pointer-events-none ${
        darkMode 
          ? 'bg-gradient-to-tr from-red-900/10 via-gray-900 to-blue-900/10' 
          : 'bg-gradient-to-tr from-red-50 via-white to-blue-50'
      }`}></div>

      <div className={`relative max-w-6xl mx-auto px-6 p-6 sm:p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          
          {/* Text Section */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold" style={{ color: primaryColor }}>
              Hello. I'm Miehleketo Mathebula
            </h1>

            {/* Career Summary */}
            <p className={`mt-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {careerSummary}
            </p>

            {/* Skill Badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map(skill => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${
                    darkMode ? 'hover:bg-blue-900/20' : 'hover:bg-blue-50'
                  }`}
                  style={{ borderColor: secondaryColor, color: secondaryColor }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Call-to-Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#professional"
                className="px-5 py-2.5 rounded-lg text-white hover:opacity-90 transition-opacity"
                style={{ background: primaryColor }}
              >
                Professional Profile
              </a>
              <a
                href="#research"
                className={`px-5 py-2.5 rounded-lg border transition-colors ${darkMode ? 'hover:bg-blue-900/20' : 'hover:bg-blue-50'}`}
                style={{ borderColor: secondaryColor, color: secondaryColor }}
              >
                View Research
              </a>
            </div>
          </div>

          {/* Image Section */}
          <aside className="flex flex-col items-center justify-start order-1 lg:order-2">
            <img
              src={`${import.meta.env.BASE_URL}photo.jpg`}
              alt="Miehleketo Mathebula"
              className={`w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 mx-auto lg:-mt-6 ${
                darkMode ? 'border-gray-700' : 'border-white'
              }`}
            />
            <div className="mt-4 text-center">
              <div className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Miehleketo Mathebula
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                AI & Data Engineering · Financial Intelligence · ESG Governance · SDG
              </div>
            </div>
          </aside>

        </div>
      </div>
    </section>
  )
}

export default Hero
