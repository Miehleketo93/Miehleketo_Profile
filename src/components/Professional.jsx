// ============ components/Professional.jsx ============
import React, { useState } from 'react'
import { PRIMARY, SECONDARY, PRIMARY_DARK, SECONDARY_DARK } from '../constants/Colors'

function Professional({ darkMode }) {
  const primaryColor = darkMode ? PRIMARY_DARK : PRIMARY
  const secondaryColor = darkMode ? SECONDARY_DARK : SECONDARY

  const experiences = [
    {
      title: 'Lead Data Engineer',
      subtitle: 'AVBOB — January 2025 – Present',
      points: [
        'Lead the development and optimization of data pipelines for the enterprise Data Warehouse and internal systems.',
        'Manage and evolve the Data Engineering architecture to support growing data needs and strategic objectives.',
        'Implement robust data validation, reconciliation, and quality assurance processes to ensure trusted data assets.',
        'Design and develop scalable ETL processes that enable efficient data integration across multiple sources.',
        'Collaborate with cross-functional teams to analyse data and communicate actionable insights to stakeholders.',
        'Oversee data engineering projects from conception to deployment, ensuring alignment with organizational goals.',
        'Implement policies and practices for data quality, privacy, and compliance with legal standards.',
        'Provide leadership, mentorship, and foster a collaborative environment for skill development and knowledge sharing.',
        'Utilize Infrastructure as Code (IaC) to automate the deployment and management of data infrastructure.'
      ]
    },
    // ... (other experiences remain unchanged)
  ]

  return (
    <section id="professional" className="py-8">
      <div className={`p-6 sm:p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="flex items-center gap-3 mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: primaryColor }}>
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Professional Experience
          </h2>
        </div>
    
        <div 
          className={`border-l-4 px-5 py-4 rounded-lg mb-6 ${darkMode ? 'bg-gradient-to-r from-red-900/20 to-blue-900/20' : 'bg-gradient-to-r from-red-50 to-blue-50'}`} 
          style={{ borderColor: primaryColor }}
        >
          <div className={`font-semibold text-lg mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Professional Overview
          </div>
          <p className={`leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            With over a decade of experience, Miehleketo Mathebula is a Data Engineer and AI Researcher specializing in intelligent systems for financial governance and sustainable development. He has designed and implemented data solutions for South Africa's leading financial and insurance institutions, driving business performance, regulatory compliance, and innovation. Currently a PhD Candidate in Computer Science at the University of Pretoria, his research focuses on policy-aware AI to strengthen ESG (Environmental, Social, Governance) and SDG (Sustainable Development Goals) governance within regulated financial markets, translating advanced theory into practical, high-impact applications.
          </p>
          
          <div className="mt-4">
            <div className={`font-semibold text-base mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Key Contributions:
            </div>
            <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryColor }}></span>
                <span><strong>Strategic Agenda for AI in ESG:</strong> Authored a systematic review mapping South Africa's regulatory landscape and establishing a strategic agenda for AI adoption in sustainable finance.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryColor }}></span>
                <span><strong>LFEAR (Language Feature Extraction & Adaptation for Reviews):</strong> Developed a Retrieval-Augmented Generation model for deep sentiment analysis of customer feedback, enhancing consumer protection and corporate accountability.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryColor }}></span>
                <span><strong>LLM-Powered Annotation System:</strong> Created a framework that converts unstructured public feedback into structured data, enabling robust monitoring of the social pillar of ESG.</span>
              </li>
            </ul>
          </div>
    
          <div className="mt-4">
            <div className={`font-semibold text-base mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              UN SDG Contributions:
            </div>
            <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: secondaryColor }}></span>
                <span><strong>Goal 16 (Peace, Justice and Strong Institutions):</strong> Advancing transparent AI governance and accountability in financial institutions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: secondaryColor }}></span>
                <span><strong>Goal 9 (Industry, Innovation and Infrastructure):</strong> Driving intelligent, modernized data infrastructure to support sustainable development.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: secondaryColor }}></span>
                <span><strong>Goal 10 (Reduced Inequalities):</strong> Providing a data-driven voice to customers, helping identify and address service disparities.</span>
              </li>
            </ul>
          </div>
    
          <p className={`mt-4 italic ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Miehleketo is committed to building data systems that are both intelligent and ethical, driving innovation with measurable business value and lasting societal impact in South Africa.
          </p>
        </div>
    
        <Accordion items={experiences} defaultOpenIndex={0} darkMode={darkMode} primaryColor={primaryColor} />
      </div>
    </section>
  )
}

function Accordion({ items, defaultOpenIndex = 0, darkMode, primaryColor }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex)

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className={`border rounded-lg overflow-hidden transition-all duration-300 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className={`w-full px-5 py-4 flex items-center justify-between transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
          >
            <div className="text-left">
              <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</div>
              <div className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.subtitle}</div>
            </div>
            {openIndex === index ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`flex-shrink-0 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                <polyline points="18 15 12 9 6 15"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`flex-shrink-0 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            )}
          </button>
          
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className={`px-5 py-4 border-t ${darkMode ? 'bg-gray-900/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
              <ul className="space-y-2">
                {item.points.map((point, i) => (
                  <li key={i} className={`flex items-start gap-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: primaryColor }}></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Professional
