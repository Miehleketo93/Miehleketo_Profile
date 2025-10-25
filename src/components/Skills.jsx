// ============ components/Skills.jsx ============
import React, { useState } from 'react'
import { PRIMARY, SECONDARY } from '../constants/Colors'
function Skills() {


  const skills = [
    { 
      category: 'Data Engineering', 
      items: ['Databricks', 'Delta Lake', 'ETL/ELT', 'Data Pipelines', 'Feature Stores', 'StreamSets', 'SSIS', 'CONNX', 'Data Modeling', 'Data Warehousing'] 
    },
    { 
      category: 'Databases', 
      items: ['SQL Server', 'Oracle', 'SAP Sybase', 'PostgreSQL', 'DB2', 'Hadoop Hive', 'Vector Databases (FAISS)'] 
    },
    { 
      category: 'Programming', 
      items: ['Python', 'PySpark', 'SQL', 'Infrastructure as Code'] 
    },
    { 
      category: 'AI Engineering & ML', 
      items: ['Scikit-learn', 'TensorFlow', 'Keras', 'PyTorch', 'Hugging Face Transformers', 'LLMs', 'Prompt Engineering', 'Model Evaluation & Deployment'] 
    },
    { 
      category: 'Data Science & NLP', 
      items: ['Sentiment Analysis', 'Text Classification', 'RAG', 'ARFT', 'ESG-specific NLP', 'LFEAR Model'] 
    },
    { 
      category: 'Platforms', 
      items: ['Azure', 'Google Cloud Platform', 'Databricks', 'Linux'] 
    },
    { 
      category: 'Insights & Analytics', 
      items: ['SSAS', 'SSRS', 'Power BI', 'OLAP', 'Data Visualization', 'Business Intelligence'] 
    }
  ]

  return (
    <section id="skills" className="py-8">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: PRIMARY }}>
            <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
          </svg>
          <h2 className="text-2xl font-bold">Skills & Expertise</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-3 text-base" style={{ color: SECONDARY }}>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-white text-xs rounded-full shadow-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Skills;