// ============ components/Professional.jsx ============
import React, { useState } from 'react'
import { PRIMARY, SECONDARY } from '../constants/Colors'
function Professional() {


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
    {
      title: 'Data Engineer',
      subtitle: 'Absa Group — January 2023 – December 2024',
      points: [
        "Utilize Databricks for integrating data from diverse sources such as Hive and SQL Server, orchestrating workflows, and constructing feature stores for data sciences, effectively enhancing data accessibility and usability.",
        "Create and maintain a feature store in Databricks for data sciences, providing a centralized repository of curated features to accelerate model development and deployment.",
        "Create data tools for analytics and data science teams, facilitating the building and optimization of data sets to drive business insights and decision-making processes.",
        "Optimize data ingestion and processing pipelines using Delta Lake's optimization features, resulting in improved performance and scalability.",
        "Collaborate with cross-functional teams to design and implement robust data architectures leveraging Databricks Delta Lake for enhanced data reliability and efficiency.",
        "Implement and align to Group Security standards and practices to ensure separation, security, and quality of data.",
        "Assemble large, complex data sets that meet business requirements and manage the data pipeline.",
        "Build infrastructure to automate extremely high volumes of data delivery."
      ]
    },
    {
      title: 'Data Engineer',
      subtitle: 'FNZ Group — February 2022 – December 2022',
      points: [
        'Analyse and understand requirements from stakeholders, and build digital tools, workflows, and reports from scratch.',
        'ETL development into staging and data warehouse environments. Develop new data extracts and modify ETL processes as required to improve reporting datasets.',
        'Share collaboration best practices within the development team globally.',
        'Constantly improve and upgrade the collaborative tools.',
        "Transform FNZ's internal processes and systems into a digital business.",
        'Ingest data from a variety of corporate data sources and perform required extract, transform, and load to target databases.',
        'Data modelling capabilities, designing effective data models in line with Agile methodology.',
        'Provide OLAP support and end-user training on various cubes used for reporting downstream.'
      ]
    },
    {
      title: 'Data Engineer',
      subtitle: 'FNB South Africa — April 2019 – January 2022',
      points: [
        'Design and development of ETL scripts using open-source software in a Linux environment.',
        'Perform operational support of batch jobs in production and responsible for EBucks monthly pay-outs.',
        'Build extensible data acquisition and integration solutions to meet business requirements.',
        'Implement processes and logic to extract, transform, and distribute data across one or more data stores.',
        'Optimize data integration platform to provide optimal performance under increasing data volumes.',
        'Develop quality standards to ensure data quality and integrity across various database systems.',
        "Conduct reviews of other integration developers' efforts to ensure consistent methodologies and provide recommendations.",
        'Work with Analysts and Business Users to translate functional specifications into technical designs.'
      ]
    },
    {
      title: 'SQL Developer',
      subtitle: 'SA Underwriters — Jan 2019 – Apr 2019',
      points: [
        'Design stable, reliable, and effective databases.',
        'Design, develop, and maintain appropriately scaled solutions to support data cleansing, integration, and reconciliations.',
        'Deliver a robust, testable, repeatable framework of jobs and scripts for data management and reporting.',
        'Build ETL packages for database maintenance and pay-out processes on Microsoft Server (SSIS).',
        'Create dynamic reports using SSRS.',
        'Ensure performance, security, and availability of databases.'
      ]
    },
    {
      title: 'SQL Developer',
      subtitle: 'Momentum — Oct 2016 – Dec 2018',
      points: [
        'Work with databases from a wide variety of vendors and database platforms.',
        'Develop and maintain ETL and reporting solutions supporting business processes.',
        'Authored and optimized complex SQL queries, stored procedures, and views within a Microsoft Data Warehouse to boost performance.',
        'Automated the generation of ad-hoc reports and managed data across a wide variety of vendor database platforms.',
        'Developed interactive dashboards and reports using Power BI and SSRS to translate business requirements into clear data visualizations'
      ]
    }
  ]

  return (
    <section id="professional" className="py-8">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: PRIMARY }}>
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
          <h2 className="text-2xl font-bold">Professional Experience</h2>
        </div>
    
        <div className="bg-gradient-to-r from-red-50 to-blue-50 border-l-4 px-5 py-4 rounded-lg mb-6" style={{ borderColor: PRIMARY }}>
          <div className="font-semibold text-lg mb-3">Professional Overview</div>
          <p className="text-gray-700 leading-relaxed mb-4">
            With over a decade of experience, Miehleketo Mathebula is a Data Engineer and AI Researcher specializing in intelligent systems for financial governance and sustainable development. He has designed and implemented data solutions for South Africa's leading financial and insurance institutions, driving business performance, regulatory compliance, and innovation. Currently a PhD Candidate in Computer Science at the University of Pretoria, his research focuses on policy-aware AI to strengthen ESG (Environmental, Social, Governance) and SDG (Sustainable Development Goals) governance within regulated financial markets, translating advanced theory into practical, high-impact applications.
          </p>
          
          <div className="mt-4">
            <div className="font-semibold text-base mb-2">Key Contributions:</div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: PRIMARY }}></span>
                <span><strong>Strategic Agenda for AI in ESG:</strong> Authored a systematic review mapping South Africa's regulatory landscape and establishing a strategic agenda for AI adoption in sustainable finance.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: PRIMARY }}></span>
                <span><strong>LFEAR (Language Feature Extraction & Adaptation for Reviews):</strong> Developed a Retrieval-Augmented Generation model for deep sentiment analysis of customer feedback, enhancing consumer protection and corporate accountability.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: PRIMARY }}></span>
                <span><strong>LLM-Powered Annotation System:</strong> Created a framework that converts unstructured public feedback into structured data, enabling robust monitoring of the social pillar of ESG.</span>
              </li>
            </ul>
          </div>
    
          <div className="mt-4">
            <div className="font-semibold text-base mb-2">UN SDG Contributions:</div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: SECONDARY }}></span>
                <span><strong>Goal 16 (Peace, Justice and Strong Institutions):</strong> Advancing transparent AI governance and accountability in financial institutions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: SECONDARY }}></span>
                <span><strong>Goal 9 (Industry, Innovation and Infrastructure):</strong> Driving intelligent, modernized data infrastructure to support sustainable development.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: SECONDARY }}></span>
                <span><strong>Goal 10 (Reduced Inequalities):</strong> Providing a data-driven voice to customers, helping identify and address service disparities.</span>
              </li>
            </ul>
          </div>
    
          <p className="text-gray-700 mt-4 italic">
            Miehleketo is committed to building data systems that are both intelligent and ethical, driving innovation with measurable business value and lasting societal impact in South Africa.
          </p>
        </div>
    
        <Accordion items={experiences} defaultOpenIndex={0} />
      </div>
    </section>
  )
}

function Accordion({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex)
  const PRIMARY = '#E63946'

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full px-5 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
          >
            <div className="text-left">
              <div className="font-semibold text-gray-900">{item.title}</div>
              <div className="text-sm text-gray-600 mt-1">{item.subtitle}</div>
            </div>
            {openIndex === index ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 flex-shrink-0">
                <polyline points="18 15 12 9 6 15"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 flex-shrink-0">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            )}
          </button>
          
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-5 py-4 bg-gray-50 border-t">
              <ul className="space-y-2">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: PRIMARY }}></span>
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
export default Professional;