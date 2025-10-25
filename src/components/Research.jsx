// ============ components/Research.jsx ============
import React from 'react'
import { PRIMARY, SECONDARY, PRIMARY_DARK, SECONDARY_DARK } from '../constants/Colors'
import { FaBook } from 'react-icons/fa'

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

function Research({ darkMode }) {
  const primaryColor = darkMode ? PRIMARY_DARK : PRIMARY
  const secondaryColor = darkMode ? SECONDARY_DARK : SECONDARY

  return (
    <section id="research" className="py-8">
      <div className={`p-6 sm:p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <FaBook size={28} color={primaryColor} />
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Research & Publications
          </h2>
        </div>
        <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Selected research publications and profiles (links provided).
        </p>

        {/* Publications */}
        <div className="space-y-4">
          {[
            {
              title: "ChatGPT as a Text Annotation Tool to Evaluate Sentiment Analysis on South African Financial Institutions",
              href: "https://ieeexplore.ieee.org/abstract/document/10684700",
              journal: "IEEE Access Journal"
            },
            {
              title: "Fine-Tuning Retrieval-Augmented Generation with an Auto-Regressive Language Model for Sentiment Analysis in Financial Reviews",
              href: "https://www.mdpi.com/3051862",
              journal: "MDPI Applied Science"
            },
            {
              title: "From Text Annotation To An Auto-Regressive Language Model For Sentiment Analysis In South African Financial Reviews",
              href: "https://repository.up.ac.za/items/9cad7aa7-75f2-48d0-8b7c-03ccc2032626",
              journal: "University of Pretoria"
            }
          ].map((pub, idx) => (
            <div key={idx} className={`p-4 rounded-lg transition-colors ${darkMode ? 'bg-gray-900/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'}`}>
              <a
                className="font-medium flex items-start gap-2 group"
                href={pub.href}
                target="_blank"
                rel="noreferrer"
                style={{ color: primaryColor }}
              >
                <FaBook className="mt-1 flex-shrink-0" />
                <span className="group-hover:underline">{pub.title}</span>
              </a>
              <p className={`text-sm mt-2 ml-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {pub.journal}
              </p>
            </div>
          ))}
        </div>

        {/* Proprietary Research */}
        <div className="mt-8">
          <h3 className={`font-semibold text-lg mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Proprietary Research
          </h3>
          <div className={`p-4 rounded-lg border-l-4 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`} style={{ borderColor: secondaryColor }}>
            <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              LFEAR (Language Feature Extraction and Adaptation for Reviews)
            </div>
            <p className={`text-sm mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              A novel NLP model combining RAG and ARFT for enhanced sentiment analysis and contextual understanding in financial reviews.
            </p>
          </div>
        </div>

        {/* Research Profiles */}
        <div className="mt-8">
          <h3 className={`font-semibold text-lg mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Research Profiles
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {researchProfiles.map((profile, index) => {
              const isEven = index % 2 === 0
              const color = isEven ? secondaryColor : primaryColor
              const hoverBg = isEven ? 'hover:bg-blue-600' : 'hover:bg-red-600'

              return (
                <a
                  key={profile.name}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg border ${hoverBg} hover:text-white transition-colors text-center ${darkMode ? 'border-opacity-50' : ''}`}
                  style={{ borderColor: color, color: darkMode ? '#fff' : color }}
                >
                  <div className={`h-5 w-5 flex items-center justify-center rounded-sm ${darkMode ? 'bg-white p-0.5' : ''}`}>
                    <img src={profile.logo} alt="" className="h-full w-full object-contain" />
                  </div>
                  <span>{profile.name}</span>
                </a>
              )
            })}
          </div>
        </div>

        {/* Groups & Affiliations */}
        <div className="mt-8">
          <h3 className={`font-semibold text-lg mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Groups & Affiliations
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "Black in AI",
                href: "https://www.blackinai.org/",
                logo: `${import.meta.env.BASE_URL}blackinai.jpg`,
                role: "Community member",
                borderColor: primaryColor
              },
              {
                name: "Data Science for Social Impact",
                href: "https://www.dsfsi.co.za/",
                logo: `${import.meta.env.BASE_URL}dsfsi.jpg`,
                role: "Research group member",
                borderColor: secondaryColor
              }
            ].map((group, idx) => (
              <a
                key={idx}
                href={group.href}
                target="_blank"
                rel="noreferrer"
                className={`p-4 rounded-lg transition-colors border-l-4 flex items-center gap-3 ${darkMode ? 'bg-gray-900/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'}`}
                style={{ borderColor: group.borderColor }}
              >
                <div className={`w-10 h-10 flex items-center justify-center rounded-md flex-shrink-0 ${darkMode ? 'bg-white p-1' : ''}`}>
                  <img src={group.logo} alt={`${group.name} logo`} className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{group.name}</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{group.role}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research
