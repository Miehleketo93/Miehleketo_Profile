// ============ components/Hero.jsx ============
import React from 'react'
import { PRIMARY, SECONDARY } from '../constants/Colors'

function Hero() {
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
    <section id="about" className="relative py-12 sm:py-16 bg-gray-50">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-50 via-white to-blue-50 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
        <div className="grid lg:grid-cols-3 gap-8 items-center">

          {/* Text Section */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold" style={{ color: PRIMARY }}>
              Hello. I'm Miehleketo Mathebula
            </h1>

            {/* Career Summary */}
            <p className="mt-4 text-gray-700 leading-relaxed">{careerSummary}</p>

            {/* Skill Badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm font-medium border"
                  style={{ borderColor: SECONDARY, color: SECONDARY }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 mt-0.5 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <div className="text-sm text-gray-600">Location</div>
                  <div className="font-medium">Pretoria, South Africa</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 mt-0.5 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <div>
                  <div className="text-sm text-gray-600">Contact</div>
                  <div className="font-medium text-sm">+27 79 365 3889</div>
                  <div className="font-medium text-sm">miehleketo93@gmail.com</div>
                </div>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#professional"
                className="px-5 py-2.5 rounded-lg text-white hover:opacity-90 transition-opacity"
                style={{ background: PRIMARY }}
              >
                Professional Profile
              </a>
              <a
                href="#research"
                className="px-5 py-2.5 rounded-lg border hover:bg-blue-50 transition-colors"
                style={{ borderColor: SECONDARY, color: SECONDARY }}
              >
                View Research
              </a>
            </div>
          </div>

        <aside className="flex flex-col items-center lg:items-center justify-start relative -mt-36 lg:-mt-40 z-10">
          <img
            src={`${import.meta.env.BASE_URL}photo.jpg`}
            alt="Miehleketo Mathebula"
            className="w-56 h-56 sm:w-64 sm:h-64 rounded-full object-cover shadow-2xl border-4 border-white"
          />
          <div className="mt-4 text-center">
            <div className="font-semibold text-lg">Miehleketo Mathebula</div>
            <div className="text-sm text-gray-600">
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
