// ============ components/Research.jsx ============
import React from 'react'
import { PRIMARY, SECONDARY } from '../constants/Colors'
import { FaBook, FaUsers } from 'react-icons/fa'

// Data for the research profiles
const researchProfiles = [
  {
    name: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=cNxYD3oAAAAJ&hl=en',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg',
  },
  {
    name: 'ORCID',
    href: 'https://orcid.org/0000-0001-6276-6106',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/06/ORCID_iD.svg',
  },
  {
    name: 'SciProfiles',
    href: 'https://sciprofiles.com/profile/4034375',
    logo: `${import.meta.env.BASE_URL}SciProfiles.jpg`, 
  },
  {
    name: 'Scilit',
    href: 'https://www.scilit.com/scholars/27986005',
    logo: `${import.meta.env.BASE_URL}Scilit.png`,
  },
  {
    name: 'IEEE Xplore',
    href: 'https://ieeexplore.ieee.org/author/163529984985511',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Ieee_blue.jpg',
  },
  {
    name: 'ResearchGate',
    href: 'https://www.researchgate.net/profile/Miehleketo-Mathebula',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/ResearchGate_icon_SVG.svg',
  },
]

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
            {/* Map over the profiles and apply original styling WITH logos */}
            {researchProfiles.map((profile, index) => {
              // Determine colors based on index (alternating pattern from original code)
              const isEven = index % 2 === 0
              const color = isEven ? SECONDARY : PRIMARY
              const hoverBg = isEven ? 'hover:bg-blue-600' : 'hover:bg-red-600'

              return (
                <a
                  key={profile.name}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg border ${hoverBg} hover:text-white transition-colors text-center`}
                  style={{ borderColor: color, color: color }}
                >
                  <img
                    src={profile.logo}
                    alt="" // Decorative, as text is present
                    className="h-5 w-5 object-contain"
                  />
                  <span>{profile.name}</span>
                </a>
              )
            })}
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
                      {/* --- LOGO ADDED HERE --- */}
                      <img
                        src={`${import.meta.env.BASE_URL}blackinai.jpg`}
                        alt="Black in AI logo"
                        className="w-10 h-10 object-contain rounded-md flex-shrink-0"
                      />
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
                      {/* --- LOGO ADDED HERE --- */}
                      <img
                        src={`${import.meta.env.BASE_URL}dsfsi.jpg`}
                        alt="Data Science for Social Impact logo"
                        className="w-10 h-10 object-contain rounded-md flex-shrink-0"
                      />
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