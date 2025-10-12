import React from 'react'
import Accordion from './components/Accordion'

const PRIMARY = '#E63946'
const SECONDARY = '#1E88E5'

const careerSummary = `I am an accomplished data engineer with a strong track record of leading innovative data solutions that integrate AI to drive financial intelligence. My work bridges practical engineering and academic research, with a focus on AI engineering to enhance decision-making and governance in financial systems. I led the successful redesign of data processing workflows, achieving a 30% reduction in processing time and significantly improving data accuracy. Currently pursuing a PhD, my research investigates the intersection of artificial intelligence, engineering principles, and data-driven financial intelligence models to support smarter, more resilient financial systems. I excel at delivering scalable, intelligent data systems that turn complex data into actionable insights.`

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
      'Conduct reviews of other integration developers’ efforts to ensure consistent methodologies and provide recommendations.',
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
      'Develop and maintain ETL and reporting solutions supporting business processes.'
    ]
  }
]

export default function App() {
  const accordionItems = experiences

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div style={{background: `linear-gradient(135deg, ${PRIMARY}, ${SECONDARY})`}} className="w-12 h-12 rounded-lg shadow"></div>
          <div>
            <div className="text-lg font-bold">Miehleketo Mathebula</div>
            <div className="text-sm text-gray-600">Data Engineer · PhD Candidate · AI & Financial Intelligence</div>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <a href="#about" className="text-sm">About</a>
          <a href="#research" className="text-sm">Research</a>
          <a href="#professional" className="text-sm">Professional</a>
          <a href="#supervision" className="text-sm">Supervision</a>
          <a href="#contact" className="text-sm">Contact</a>
          <a href="/miehleketo_cv.pdf" download style={{borderColor: PRIMARY, color: PRIMARY}} className="px-3 py-1 border rounded text-sm">Download CV</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-12">
        {/* Hero/About */}
        <section id="about" className="bg-white p-6 rounded-2xl shadow mb-8">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h1 className="text-3xl font-extrabold" style={{color: PRIMARY}}>Hi — I’m Miehleketo Mathebula</h1>
              <p className="mt-4 text-gray-700">{careerSummary}</p>

              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600">Location</div>
                  <div className="font-medium">Pretoria, South Africa</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Contact</div>
                  <div className="font-medium">+27 79 365 3889 · miehleketo93@gmail.com</div>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <a href="#professional" className="px-4 py-2 rounded-lg" style={{background: PRIMARY, color: '#fff'}}>Professional Profile</a>
                <a href="#research" className="px-4 py-2 rounded-lg border" style={{borderColor: SECONDARY, color: SECONDARY}}>View Research</a>
              </div>
            </div>

            <aside className="text-center">
              <img src="/photo.jpg" alt="Miehleketo Mathebula" className="w-40 h-40 rounded-full object-cover mx-auto shadow" />
              <div className="mt-3">
                <div className="font-semibold">Miehleketo Mathebula</div>
                <div className="text-sm text-gray-600">AI · ESG · SDG Governance</div>
              </div>
            </aside>
          </div>
        </section>

        {/* Research */}
        <section id="research" className="bg-white p-6 rounded-2xl shadow mb-8">
          <h2 className="text-2xl font-bold">Research & Publications</h2>
          <p className="text-gray-600 mt-2">Selected research publications and profiles (links provided).</p>
        
          <ul className="mt-4 space-y-3">
            <li>
              <a 
                className="font-medium text-red-600 hover:text-white hover:bg-red-600 px-3 py-2 rounded transition-colors duration-200 inline-block" 
                href="https://ieeexplore.ieee.org/abstract/document/10684700" 
                target="_blank" 
                rel="noreferrer"
              >
                IEEE Access Journal publication — ChatGPT as a Text Annotation Tool to Evaluate Sentiment Analysis on South African Financial Institutions
              </a>
            </li>
            <li>
              <a 
                className="font-medium text-red-600 hover:text-white hover:bg-red-600 px-3 py-2 rounded transition-colors duration-200 inline-block" 
                href="https://www.mdpi.com/3051862" 
                target="_blank" 
                rel="noreferrer"
              >
                MDPI Journal Applied Science — Fine-Tuning Retrieval-Augmented Generation with an Auto-Regressive Language Model for Sentiment Analysis in Financial Reviews
              </a>
            </li>
            <li>
              <a 
                className="font-medium text-red-600 hover:text-white hover:bg-red-600 px-3 py-2 rounded transition-colors duration-200 inline-block" 
                href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5443142" 
                target="_blank" 
                rel="noreferrer"
              >
                SSRN Preprint — AI for ESG Governance in South Africa: A Systematic Review of Financial Intelligence Approaches
              </a>
            </li>
          </ul>
        
          <div className="mt-6 flex flex-wrap gap-3">
            <a 
              href="https://scholar.google.com/citations?user=cNxYD3oAAAAJ&hl=en" 
              target="_blank" 
              rel="noreferrer" 
              className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Google Scholar
            </a>
            <a 
              href="https://orcid.org/0000-0001-6276-6106" 
              target="_blank" 
              rel="noreferrer" 
              className="px-4 py-2 rounded-lg border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-200"
            >
              ORCID
            </a>
            <a 
              href="https://www.dsfsi.co.za/members/miehleketo-mathebula/" 
              target="_blank" 
              rel="noreferrer" 
              className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              DSFSI Profile
            </a>
          </div>
        
          <p className="mt-3 text-sm text-gray-500">(MDPI page and DSFSI profile were fetched during site preparation.)</p>
        </section>


        {/* Professional */}
        <section id="professional" className="bg-white p-6 rounded-2xl shadow mb-8">
          <h2 className="text-2xl font-bold">Professional Profile</h2>
          <div className="mt-3">
            <div className="bg-gray-50 border-l-4 px-4 py-3 rounded" style={{borderColor: PRIMARY}}>
              <div className="font-medium">Career Summary</div>
              <p className="text-gray-700 mt-2">{careerSummary}</p>
            </div>

            <div className="mt-6">
              <Accordion items={accordionItems} defaultOpenIndex={0} />
            </div>
          </div>
        </section>

        {/* Supervision */}
        <section id="supervision" className="bg-white p-6 rounded-2xl shadow mb-8">
          <h2 className="text-2xl font-bold">Academic Supervision</h2>
          <p className="text-gray-700 mt-2">
            Honours student supervision at the University of Pretoria (2025) with Data Science for Social Impact.
          </p>
          <ul className="mt-4 list-disc pl-5 text-gray-800 space-y-2">
            <li>
              <strong>2025:</strong> Honours Project — <em>Bridging Explainability and Ethics in AI: Improving Trust and Reducing Misinformation</em> (Student: Kumbirai Shonhiwa)
            </li>
            <li>
              <strong>2025:</strong> Honours Project — <em>SE-Spline Attention-Based Convolutional Kolmogorov-Arnold Network for Intrusion Detection</em> (Student: Wadalisa Molokwe)
            </li>
            <li>
              <strong>2025:</strong> Honours Project — <em>Dynamic Context-Aware Multimodal Knowledge Graph for Real-Time Reasoning</em> (Student: Zingisa Matwana)
            </li>
          </ul>
        </section>
        

        {/* Contact */}
        <section id="contact" className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">Contact</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700">For research collaboration, consulting, or speaking invitations:</p>
              <ul className="mt-3 text-gray-800">
                <li><strong>Phone:</strong> +27 79 365 3889</li>
                <li><strong>Email:</strong> miehleketo93@gmail.com</li>
                <li><strong>Academic email:</strong> miehleketo.mathebula@tuks.co.za</li>
                <li><strong>Location:</strong> Pretoria, South Africa</li>
              </ul>
              <div className="mt-4">
                <a href="/miehleketo_cv.pdf" download style={{background: PRIMARY, color: '#fff'}} className="px-4 py-2 rounded-lg">Download CV</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold">Quick links</h4>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li><a href="https://scholar.google.com/citations?user=cNxYD3oAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a></li>
                <li><a href="https://orcid.org/0000-0001-6276-6106" target="_blank" rel="noreferrer">ORCID</a></li>
                <li><a href="https://www.dsfsi.co.za/members/miehleketo-mathebula/" target="_blank" rel="noreferrer">DSFSI profile</a></li>
                <li><a href="https://ieeexplore.ieee.org/abstract/document/10684700" target="_blank" rel="noreferrer">IEEE</a></li>
                <li><a href="https://www.mdpi.com/3051862" target="_blank" rel="noreferrer">MDPI</a></li>
                <li><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5443142" target="_blank" rel="noreferrer">SSRN</a></li>
                <li><a href="https://www.linkedin.com/in/mathebula-miehleketo-83aa6680" target="_blank" rel="noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-600 mt-10">
          © {new Date().getFullYear()} Miehleketo Mathebula — Based in Pretoria
        </footer>
      </main>
    </div>
  )
}
