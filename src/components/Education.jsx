// ============ components/Education.jsx ============
import React from 'react'
import { PRIMARY, PRIMARY_DARK, SECONDARY, SECONDARY_DARK } from '../constants/Colors'

function Education({ darkMode }) {
  const education = [
    {
      degree: 'Doctor of Philosophy (Computer Sciences)',
      institution: 'University of Pretoria',
      period: '2025 – Present',
      grade: null
    },
    {
      degree: 'Master of Science (Computer Sciences)',
      institution: 'University of Pretoria',
      period: '2023 – 2024',
      grade: 'Cum Laude'
    },
    {
      degree: 'Bachelor of Science Honours (Computer Sciences)',
      institution: 'University of Pretoria',
      period: '2021',
      grade: 'B'
    },
    {
      degree: 'Bachelor of Science (Computer Sciences)',
      institution: 'University of Limpopo',
      period: '2011 – 2015',
      grade: 'B'
    },
    {
      degree: 'High School',
      institution: 'Nkwangulatilo Education Centre',
      period: '2006 – 2010',
      grade: 'B'
    }
  ]

  const primaryColor = darkMode ? PRIMARY_DARK : PRIMARY
  const secondaryColor = darkMode ? SECONDARY_DARK : SECONDARY

  return (
    <section id="education" className="py-8">
      <div className={`p-6 sm:p-8 rounded-2xl shadow-lg ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="flex items-center gap-3 mb-6">
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            style={{ color: primaryColor }}
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
          <h2 className={`text-2xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Education
          </h2>
        </div>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className={`flex gap-4 p-4 rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-gray-900/50 hover:bg-gray-700' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div 
                className="flex-shrink-0 w-2 rounded-full" 
                style={{ backgroundColor: index === 0 ? primaryColor : secondaryColor }}
              ></div>
              <div className="flex-1">
                <div className={`font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {edu.degree}
                </div>
                <div className={`mt-1 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {edu.institution}
                </div>
                <div className={`flex items-center gap-4 mt-2 text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <span>{edu.period}</span>
                  {edu.grade && (
                    <span 
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        darkMode ? 'bg-gray-800' : 'bg-white'
                      }`}
                      style={{ color: primaryColor }}
                    >
                      Grade: {edu.grade}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
