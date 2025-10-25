// ============ components/Contact.jsx ============
import React from 'react'
import { PRIMARY, PRIMARY_DARK, SECONDARY, SECONDARY_DARK } from '../constants/Colors'
import { FaLinkedin } from 'react-icons/fa'

function Contact({ darkMode }) {
  const primaryColor = darkMode ? PRIMARY_DARK : PRIMARY
  const secondaryColor = darkMode ? SECONDARY_DARK : SECONDARY

  const contactDetails = [
    {
      icon: (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          style={{ color: secondaryColor }}
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      value: '+27 79 365 3889'
    },
    {
      icon: (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          style={{ color: secondaryColor }}
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      value: (
        <div>
          <div>miehleketo93@gmail.com</div>
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            miehleketo.mathebula@tuks.co.za
          </div>
        </div>
      )
    },
    {
      icon: (
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          style={{ color: secondaryColor }}
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      value: 'Pretoria, South Africa'
    }
  ]

  return (
    <section id="contact" className="py-8">
      <div className={`p-6 sm:p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex items-center gap-3 mb-4">
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            style={{ color: primaryColor }}
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              For research collaboration, consulting, or speaking invitations:
            </p>

            <div className="space-y-3">
              {contactDetails.map((contact, index) => (
                <div key={index} className={`flex items-center gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                  {contact.icon}
                  <span>{contact.value}</span>
                </div>
              ))}
            </div>

            <a
              href={`${import.meta.env.BASE_URL}miehleketo.pdf`}
              download
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white hover:opacity-90 transition-opacity"
              style={{ background: primaryColor }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download Resume
            </a>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Professional Links
            </h4>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/in/mathebula-miehleketo-83aa6680"
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 transition-colors ${
                  darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-[#004182]'
                }`}
              >
                <FaLinkedin size={18} color="#0A66C2" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
