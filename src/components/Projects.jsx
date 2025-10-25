// ============ components/Projects.jsx ============
import React from 'react'
import { PRIMARY, SECONDARY } from '../constants/Colors'
import { FaGithub } from 'react-icons/fa'
import { SiHuggingface } from 'react-icons/si'

function Projects() {
  return (
    <section id="projects" className="py-8">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: PRIMARY }}>
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
          </svg>
          <h2 className="text-2xl font-bold">Projects & Repositories</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://github.com/Miehleketo93"
            target="_blank"
            rel="noreferrer"
            className="p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border-l-4"
            style={{ borderColor: PRIMARY }}
          >
            <div className="flex items-center gap-3">
              <FaGithub size={24} color={PRIMARY} />
              <div>
                <div className="font-semibold text-gray-900">GitHub</div>
                <div className="text-sm text-gray-600 mt-1">Open source projects and code repositories</div>
              </div>
            </div>
          </a>

          <a
            href="https://huggingface.co/miehleketo93"
            target="_blank"
            rel="noreferrer"
            className="p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border-l-4"
            style={{ borderColor: SECONDARY }}
          >
            <div className="flex items-center gap-3">
              <SiHuggingface size={24} color={SECONDARY} />
              <div>
                <div className="font-semibold text-gray-900">Hugging Face</div>
                <div className="text-sm text-gray-600 mt-1">ML models, datasets, and NLP projects</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
