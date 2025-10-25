// ============ components/Supervision.jsx ============
import React from 'react'
import { SECONDARY, SECONDARY_DARK } from '../constants/Colors'

function Supervision({ darkMode }) {
  const secondaryColor = darkMode ? SECONDARY_DARK : SECONDARY

  const supervisionProjects = [
    {
      title: 'Bridging Explainability and Ethics in AI: Improving Trust and Reducing Misinformation',
      student: 'Kumbirai Shonhiwa',
      year: 2025
    },
    {
      title: 'SE-Spline Attention-Based Convolutional Kolmogorov-Arnold Network for Intrusion Detection',
      student: 'Wadalisa Molokwe',
      year: 2025
    },
    {
      title: 'Dynamic Context-Aware Multimodal Knowledge Graph for Real-Time Reasoning',
      student: 'Zingisa Matwana',
      year: 2025
    }
  ]

  return (
    <section id="supervision" className="py-8">
      <div className={`p-6 sm:p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Academic Supervision
        </h2>
        <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Honours student supervision at the University of Pretoria (2025) with Data Science
          for Social Impact.
        </p>

        <div className="space-y-4">
          {supervisionProjects.map((proj, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-l-4 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}
              style={{ borderColor: secondaryColor }}
            >
              <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {proj.title}
              </div>
              <div className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <span className="font-medium">Student:</span> {proj.student} · {proj.year} Honours Project
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Supervision
