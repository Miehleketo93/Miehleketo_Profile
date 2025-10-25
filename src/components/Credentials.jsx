// ============ components/Credentials.jsx ============
import React from 'react'
import { FaCertificate } from 'react-icons/fa'
import { PRIMARY, SECONDARY } from '../constants/Colors'

function Credentials() {
  const certifications = [
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      year: '2022',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      url: 'https://www.credly.com/badges/09560ba6-aebf-4d18-804e-dde8c1e8c915?source=linked_in_profile',
    },
  ]

  return (
    <section id="credentials" className="py-8">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <FaCertificate size={28} color={PRIMARY} />
          <h2 className="text-2xl font-bold">Professional Credentials</h2>
        </div>

        <p className="text-gray-600 mb-6">
          Verified professional certifications demonstrating cloud and AI proficiency.
        </p>

        {/* Certification Card */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-lg border hover:shadow-md transition-all flex items-center gap-3 hover:bg-blue-50"
              style={{ borderColor: SECONDARY }}
            >
              <img src={cert.logo} alt={cert.issuer} className="h-10 w-10 object-contain" />
              <div>
                <div className="font-semibold text-gray-900">{cert.title}</div>
                <div className="text-sm text-gray-600">{cert.issuer} · {cert.year}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Credentials
