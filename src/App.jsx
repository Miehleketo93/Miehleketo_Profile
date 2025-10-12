import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, ChevronUp, Award, Briefcase, GraduationCap, Mail, Phone, MapPin, Download, ExternalLink } from 'lucide-react'

const PRIMARY = '#E63946'
const SECONDARY = '#1E88E5'

const careerSummary = `I am an accomplished data engineer with a strong track record of leading innovative data solutions that integrate AI to drive financial intelligence. My work bridges practical engineering and academic research, with a focus on AI engineering to enhance decision-making and governance in financial systems. I led the successful redesign of data processing workflows, achieving a 30% reduction in processing time and significantly improving data accuracy. Currently pursuing a PhD, my research investigates the intersection of artificial intelligence, engineering principles, and data-driven financial intelligence models to support smarter, more resilient financial systems, applying this research to advance ESG principles and SDGs in alignment with key policy frameworks like the UN 2030 Agenda and South Africa's NDP 2030. I excel at delivering scalable, intelligent data systems that turn complex data into actionable insights.`

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

const education = [
  {
    degree: 'Doctor of Philosophy (Computer Sciences)',
    institution: 'University of Pretoria',
    period: '2025 – Present',
    grade: null
  },
  {
    degree: 'Master of Science (Computer Sciences)',
    institution: 'University of Pretoria',
    period: '2023 – 2024',
    grade: 'Cum Laude'
  },
  {
    degree: 'Bachelor of Science Honours (Computer Sciences)',
    institution: 'University of Pretoria',
    period: '2021',
    grade: 'B'
  },
  {
    degree: 'Bachelor of Science (Computer Sciences)',
    institution: 'University of Limpopo',
    period: '2011 – 2015',
    grade: 'B'
  },
  {
    degree: 'High School',
    institution: 'Nkwangulatilo Education Centre',
    period: '2006 – 2010',
    grade: 'B'
  }
]

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

const Accordion = ({ items, defaultOpenIndex = 0 }) => {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex)

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
              <ChevronUp className="text-gray-400 flex-shrink-0" size={20} />
            ) : (
              <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
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

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#research', label: 'Research' },
    { href: '#education', label: 'Education' },
    { href: '#professional', label: 'Professional' },
    { href: '#supervision', label: 'Supervision' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                style={{ background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})` }}
                className="w-12 h-12 rounded-lg shadow-md"
              ></div>
              <div>
                <div className="text-lg font-bold">Miehleketo Mathebula</div>
                <div className="text-xs sm:text-sm text-gray-600">Data Engineer · PhD Candidate</div>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm hover:opacity-70 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`${import.meta.env.BASE_URL}miehleketo_cv.pdf`}
                download
                style={{ borderColor: PRIMARY, color: PRIMARY }}
                className="px-4 py-2 border rounded-lg text-sm hover:bg-red-50 transition-colors flex items-center gap-2"
              >
                <Download size={16} />
                CV
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 space-y-2 border-t pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 hover:opacity-70 transition-opacity"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`${import.meta.env.BASE_URL}miehleketo_cv.pdf`}
                download
                style={{ borderColor: PRIMARY, color: PRIMARY }}
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg text-sm hover:bg-red-50 transition-colors"
              >
                <Download size={16} />
                Download CV
              </a>
            </nav>
          )}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-12">
        {/* Hero/About */}
        <section id="about" className="py-8 sm:py-12">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h1 className="text-3xl sm:text-4xl font-extrabold" style={{ color: PRIMARY }}>
                  Hello. I'm Miehleketo Mathebula
                </h1>
                <p className="mt-4 text-gray-700 leading-relaxed">{careerSummary}</p>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <MapPin size={20} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-600">Location</div>
                      <div className="font-medium">Pretoria, South Africa</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone size={20} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-600">Contact</div>
                      <div className="font-medium text-sm">+27 79 365 3889</div>
                      <div className="font-medium text-sm">miehleketo93@gmail.com</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#professional"
                    className="px-5 py-2.5 rounded-lg text-white hover:opacity-90 transition-opacity"
                    style={{ background: PRIMARY }}
                  >
                    Professional Profile
                  </a>
                  <a
                    href="#research"
                    className="px-5 py-2.5 rounded-lg border hover:bg-blue-50 transition-colors"
                    style={{ borderColor: SECONDARY, color: SECONDARY }}
                  >
                    View Research
                  </a>
                </div>
              </div>

              <aside className="text-center">
                <img
                  src={`${import.meta.env.BASE_URL}photo.jpg`}
                  alt="Miehleketo Mathebula"
                  className="w-48 h-48 rounded-full object-cover mx-auto shadow-xl border-4 border-white"
                />
                <div className="mt-4">
                  <div className="font-semibold text-lg">Miehleketo Mathebula</div>
                  <div className="text-sm text-gray-600">AI & Data Engineering · Financial Intelligence · ESG Governance</div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Award size={28} style={{ color: PRIMARY }} />
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

        {/* Research */}
        <section id="research" className="py-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap size={28} style={{ color: PRIMARY }} />
              <h2 className="text-2xl font-bold">Research & Publications</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Selected research publications and profiles (links provided).
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <a
                  className="font-medium flex items-start gap-2 group"
                  href="https://ieeexplore.ieee.org/abstract/document/10684700"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: PRIMARY }}
                >
                  <ExternalLink size={18} className="mt-1 flex-shrink-0" />
                  <span className="group-hover:underline">
                    ChatGPT as a Text Annotation Tool to Evaluate Sentiment Analysis on South
                    African Financial Institutions
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
                  <ExternalLink size={18} className="mt-1 flex-shrink-0" />
                  <span className="group-hover:underline">
                    Fine-Tuning Retrieval-Augmented Generation with an Auto-Regressive Language
                    Model for Sentiment Analysis in Financial Reviews
                  </span>
                </a>
                <p className="text-sm text-gray-600 mt-2 ml-6">MDPI Applied Science</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <a
                  className="font-medium flex items-start gap-2 group"
                  href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5443142"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: PRIMARY }}
                >
                  <ExternalLink size={18} className="mt-1 flex-shrink-0" />
                  <span className="group-hover:underline">
                    AI for ESG Governance in South Africa: A Systematic Review of Financial
                    Intelligence Approaches
                  </span>
                </a>
                <p className="text-sm text-gray-600 mt-2 ml-6">SSRN Preprint</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-3">Proprietary Research</h3>
              <div className="p-4 bg-blue-50 rounded-lg border-l-4" style={{ borderColor: SECONDARY }}>
                <div className="font-semibold text-gray-900">LFEAR (Language Feature Extraction and Adaptation for Reviews)</div>
                <p className="text-sm text-gray-700 mt-2">
                  A novel NLP model combining RAG and ARFT for enhanced sentiment analysis and contextual understanding in financial reviews.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://scholar.google.com/citations?user=cNxYD3oAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg border hover:bg-blue-600 hover:text-white transition-colors"
                style={{ borderColor: SECONDARY, color: SECONDARY }}
              >
                Google Scholar
              </a>
              <a
                href="https://orcid.org/0000-0001-6276-6106"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg border hover:bg-red-600 hover:text-white transition-colors"
                style={{ borderColor: PRIMARY, color: PRIMARY }}
              >
                ORCID
              </a>
              <a
                href="https://www.dsfsi.co.za/members/miehleketo-mathebula/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg border hover:bg-blue-600 hover:text-white transition-colors"
                style={{ borderColor: SECONDARY, color: SECONDARY }}
              >
                DSFSI Profile
              </a>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={28} style={{ color: PRIMARY }} />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 w-2 rounded-full" style={{ backgroundColor: index === 0 ? PRIMARY : SECONDARY }}></div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{edu.degree}</div>
                    <div className="text-gray-700 mt-1">{edu.institution}</div>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <span>{edu.period}</span>
                      {edu.grade && (
                        <span className="px-2 py-0.5 bg-white rounded-full text-xs font-medium" style={{ color: PRIMARY }}>
                          Grade: {edu.grade}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional */}
        <section id="professional" className="py-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase size={28} style={{ color: PRIMARY }} />
              <h2 className="text-2xl font-bold">Professional Experience</h2>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-blue-50 border-l-4 px-5 py-4 rounded-lg mb-6" style={{ borderColor: PRIMARY }}>
              <div className="font-semibold text-lg mb-2">Career Summary</div>
              <p className="text-gray-700 leading-relaxed">{careerSummary}</p>
            </div>

            <Accordion items={experiences} defaultOpenIndex={0} />
          </div>
        </section>

        {/* Supervision */}
        <section id="supervision" className="py-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Academic Supervision</h2>
            <p className="text-gray-700 mb-6">
              Honours student supervision at the University of Pretoria (2025) with Data Science
              for Social Impact.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg border-l-4" style={{ borderColor: SECONDARY }}>
                <div className="font-semibold text-gray-900">
                  Bridging Explainability and Ethics in AI: Improving Trust and Reducing
                  Misinformation
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  <span className="font-medium">Student:</span> Kumbirai Shonhiwa · 2025 Honours
                  Project
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4" style={{ borderColor: SECONDARY }}>
                <div className="font-semibold text-gray-900">
                  SE-Spline Attention-Based Convolutional Kolmogorov-Arnold Network for Intrusion
                  Detection
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  <span className="font-medium">Student:</span> Wadalisa Molokwe · 2025 Honours
                  Project
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-l-4" style={{ borderColor: SECONDARY }}>
                <div className="font-semibold text-gray-900">
                  Dynamic Context-Aware Multimodal Knowledge Graph for Real-Time Reasoning
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  <span className="font-medium">Student:</span> Zingisa Matwana · 2025 Honours
                  Project
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Mail size={28} style={{ color: PRIMARY }} />
              <h2 className="text-2xl font-bold">Get In Touch</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  For research collaboration, consulting, or speaking invitations:
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone size={20} style={{ color: SECONDARY }} />
                    <span>+27 79 365 3889</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={20} style={{ color: SECONDARY }} />
                    <div>
                      <div>miehleketo93@gmail.com</div>
                      <div className="text-sm text-gray-600">miehleketo.mathebula@tuks.co.za</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} style={{ color: SECONDARY }} />
                    <span>Pretoria, South Africa</span>
                  </div>
                </div>

                <a
                  href={`${import.meta.env.BASE_URL}miehleketo_cv.pdf`}
                  download
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white hover:opacity-90 transition-opacity"
                  style={{ background: PRIMARY }}
                >
                  <Download size={18} />
                  Download CV
                </a>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Professional Links</h4>
                <div className="space-y-2">
                  {[
                    { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=cNxYD3oAAAAJ&hl=en' },
                    { label: 'ORCID', url: 'https://orcid.org/0000-0001-6276-6106' },
                    { label: 'DSFSI Profile', url: 'https://www.dsfsi.co.za/members/miehleketo-mathebula/' },
                    { label: 'IEEE Xplore', url: 'https://ieeexplore.ieee.org/abstract/document/10684700' },
                    { label: 'MDPI', url: 'https://www.mdpi.com/3051862' },
                    { label: 'SSRN', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5443142' },
                    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mathebula-miehleketo-83aa6680' }
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-600 mt-12 pb-8">
          © {new Date().getFullYear()} Miehleketo Mathebula · Based in Pretoria, South Africa
        </footer>
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full text-white shadow-lg hover:opacity-90 transition-all duration-300"
          style={{ background: PRIMARY }}
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  )
}