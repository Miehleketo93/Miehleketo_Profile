// ============ components/Credentials.jsx ============
import React from 'react'
import { FaCertificate } from 'react-icons/fa'
import { PRIMARY, PRIMARY_DARK, SECONDARY, SECONDARY_DARK } from '../constants/Colors'

function Credentials({ darkMode }) {
  const certifications = [
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      year: '2022',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      url: 'https://www.credly.com/badges/09560ba6-aebf-4d18-804e-dde8c1e8c915?source=linked_in_profile',
    },
  ]

  const primaryColor = darkMode ? PRIMARY_DARK : PRIMARY
  const secondaryColor = darkMode ? SECONDARY_DARK : SECONDARY

  return (
    <section id="credentials" className="py-8">
      <div className={`p-6 sm:p-8 rounded-2xl shadow-lg ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <FaCertificate size={28} color={primaryColor} />
          <h2 className={`text-2xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Professional Credentials
          </h2>
        </div>

        <p className={`mb-6 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Verified professional certifications demonstrating cloud and AI proficiency.
        </p>

        {/* Certification Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className={`p-4 rounded-lg border transition-all flex items-center gap-3 ${
                darkMode 
                  ? 'hover:shadow-lg hover:bg-gray-900/50 border-opacity-50' 
                  : 'hover:shadow-md hover:bg-gray-50'
              }`}
              style={{ borderColor: secondaryColor }}
            >
              <div className={`h-10 w-10 flex items-center justify-center rounded ${
                darkMode ? 'bg-white p-1' : ''
              }`}>
                <img 
                  src={cert.logo} 
                  alt={cert.issuer} 
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <div className={`font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {cert.title}
                </div>
                <div className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {cert.issuer} · {cert.year}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Credentials
