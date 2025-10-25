
// ============ components/Research.jsx ============
import React from 'react'
import { PRIMARY, SECONDARY } from '../constants/Colors'
import { FaBook, FaUsers } from 'react-icons/fa'

function Research() {
  return (
    <section id="research" className="py-8">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <FaBook size={28} color={PRIMARY} />
          <h2 className="text-2xl font-bold">Research & Publications</h2>
        </div>
        <p className="text-gray-600 mb-6">
          Selected research publications and profiles (links provided).
        </p>

        {/* Publications */}
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <a
              className="font-medium flex items-start gap-2 group"
              href="https://ieeexplore.ieee.org/abstract/document/10684700"
              target="_blank"
              rel="noreferrer"
              style={{ color: PRIMARY }}
            >
              <FaBook className="mt-1 flex-shrink-0" />
              <span className="group-hover:underline">
                ChatGPT as a Text Annotation Tool to Evaluate Sentiment Analysis on South African Financial Institutions
              </span>
            </a>
            <p className="text-sm text-gray-600 mt-2 ml-6">IEEE Access Journal</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <a
              className="font-medium flex items-start gap-2 group"
              href="https://www.mdpi.com/3051862"
              target="_blank"
              rel="noreferrer"
              style={{ color: PRIMARY }}
            >
              <FaBook className="mt-1 flex-shrink-0" />
              <span className="group-hover:underline">
                Fine-Tuning Retrieval-Augmented Generation with an Auto-Regressive Language Model for Sentiment Analysis in Financial Reviews
              </span>
            </a>
            <p className="text-sm text-gray-600 mt-2 ml-6">MDPI Applied Science</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <a
              className="font-medium flex items-start gap-2 group"
              href="https://repository.up.ac.za/items/9cad7aa7-75f2-48d0-8b7c-03ccc2032626"
              target="_blank"
              rel="noreferrer"
              style={{ color: PRIMARY }}
            >
              <FaBook className="mt-1 flex-shrink-0" />
              <span className="group-hover:underline">
                From Text Annotation To An Auto-Regressive Language Model For Sentiment Analysis In South African Financial Reviews
              </span>
            </a>
            <p className="text-sm text-gray-600 mt-2 ml-6">University of Pretoria</p>
          </div>
        </div>

        {/* Proprietary Research */}
        <div className="mt-8">
          <h3 className="font-semibold text-lg mb-3">Proprietary Research</h3>
          <div className="p-4 bg-blue-50 rounded-lg border-l-4" style={{ borderColor: SECONDARY }}>
            <div className="font-semibold text-gray-900">LFEAR (Language Feature Extraction and Adaptation for Reviews)</div>
            <p className="text-sm text-gray-700 mt-2">
              A novel NLP model combining RAG and ARFT for enhanced sentiment analysis and contextual understanding in financial reviews.
            </p>
          </div>
        </div>

        {/* Research Profiles */}
        <div className="mt-8">
          <h3 className="font-semibold text-lg mb-3">Research Profiles</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <a
              href="https://scholar.google.com/citations?user=cNxYD3oAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg border hover:bg-blue-600 hover:text-white transition-colors text-center"
              style={{ borderColor: SECONDARY, color: SECONDARY }}
            >
              Google Scholar
            </a>
            <a
              href="https://orcid.org/0000-0001-6276-6106"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg border hover:bg-red-600 hover:text-white transition-colors text-center"
              style={{ borderColor: PRIMARY, color: PRIMARY }}
            >
              ORCID
            </a>
            <a
              href="https://sciprofiles.com/profile/4034375"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg border hover:bg-blue-600 hover:text-white transition-colors text-center"
              style={{ borderColor: SECONDARY, color: SECONDARY }}
            >
              SciProfiles
            </a>
            <a
              href="https://www.scilit.com/scholars/27986005"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg border hover:bg-red-600 hover:text-white transition-colors text-center"
              style={{ borderColor: PRIMARY, color: PRIMARY }}
            >
              Scilit
            </a>
            <a
              href="https://ieeexplore.ieee.org/author/163529984985511"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg border hover:bg-blue-600 hover:text-white transition-colors text-center"
              style={{ borderColor: SECONDARY, color: SECONDARY }}
            >
              IEEE Xplore
            </a>
            <a
              href="https://www.researchgate.net/profile/Miehleketo-Mathebula"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg border hover:bg-red-600 hover:text-white transition-colors text-center"
              style={{ borderColor: PRIMARY, color: PRIMARY }}
            >
              ResearchGate
            </a>
          </div>
        </div>

        {/* Groups & Affiliations */}
        <div className="mt-8">
          <h3 className="font-semibold text-lg mb-3">Groups & Affiliations</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://www.blackinai.org/"
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border-l-4 flex items-center gap-3"
              style={{ borderColor: PRIMARY }}
            >
              <FaUsers size={24} color={PRIMARY} />
              <div>
                <div className="font-semibold text-gray-900">Black in AI</div>
                <div className="text-sm text-gray-600">Community member</div>
              </div>
            </a>
            <a
              href="https://www.dsfsi.co.za/"
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border-l-4 flex items-center gap-3"
              style={{ borderColor: SECONDARY }}
            >
              <FaUsers size={24} color={SECONDARY} />
              <div>
                <div className="font-semibold text-gray-900">Data Science for Social Impact</div>
                <div className="text-sm text-gray-600">Research group member</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Research
