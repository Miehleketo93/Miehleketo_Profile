// ============ components/Projects.jsx ============
import React from 'react'
import { PRIMARY, SECONDARY, PRIMARY_DARK, SECONDARY_DARK } from '../constants/Colors'
import { FaGithub } from 'react-icons/fa'
import { SiHuggingface } from 'react-icons/si'

function Projects({ darkMode }) {
  const primaryColor = darkMode ? PRIMARY_DARK : PRIMARY
  const secondaryColor = darkMode ? SECONDARY_DARK : SECONDARY

  return (
    <section id="projects" className="py-8">
      <div className={`p-6 sm:p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
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
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
          </svg>
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Projects & Repositories
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/Miehleketo93"
            target="_blank"
            rel="noreferrer"
            className={`p-5 rounded-lg transition-colors border-l-4 ${darkMode ? 'bg-gray-900/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'}`}
            style={{ borderColor: primaryColor }}
          >
            <div className="flex items-center gap-3">
              <FaGithub size={24} color={primaryColor} className="flex-shrink-0" />
              <div>
                <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  GitHub
                </div>
                <div className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Open source projects and code repositories
                </div>
              </div>
            </div>
          </a>

          {/* Hugging Face */}
          <a
            href="https://huggingface.co/miehleketo93"
            target="_blank"
            rel="noreferrer"
            className={`p-5 rounded-lg transition-colors border-l-4 ${darkMode ? 'bg-gray-900/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'}`}
            style={{ borderColor: secondaryColor }}
          >
            <div className="flex items-center gap-3">
              <SiHuggingface size={24} color={secondaryColor} className="flex-shrink-0" />
              <div>
                <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Hugging Face
                </div>
                <div className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  ML models, datasets, and NLP projects
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
