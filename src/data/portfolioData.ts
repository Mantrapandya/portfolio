import { PersonalInfo, Project, ExperienceItem, EducationItem, CertificationItem, SkillCategory, LearningItem } from '../types';

export const personalInfo: PersonalInfo = {
  fullName: 'MANTRA PANDYA',
  statusTitle: 'Open to Opportunities',
  email: 'mantrapandya1608@gmail.com',
  phone: '+91 7802824607',
  location: 'Ahmedabad, Gujarat, India',
  githubUrl: 'https://github.com/Mantrapandya',
  linkedinUrl: 'https://www.linkedin.com/in/mantra-pandya-5a6825291?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  shortIntro: 'I work with Python and SQL for data analysis and enjoy turning messy datasets into useful insights. Final-year Computer Science student open to fresher and internship roles.',
  fullBio: [
    'I am in my final year of Computer Science Engineering at New L.J. Institute of Engineering & Technology (NLJIET), Ahmedabad, affiliated with Gujarat Technological University (GTU).',
    'I work with Python and SQL for data analysis, and I enjoy taking messy datasets, cleaning them up, and finding out what the numbers actually show. Most of my practical work involves exploratory data analysis (EDA), data cleaning, statistical checks, and visual dashboards using Pandas, NumPy, Matplotlib, Seaborn, and Power BI.',
    'During my internship at Infolabz IT Services, I worked with datasets pulled from APIs, built reports in Power BI, and explored foundational machine learning concepts like linear regression and basic model metrics.',
    'I am actively looking for fresher, internship, or junior data analyst roles where I can contribute to real projects, work with a good team, and keep building my skills.'
  ]
};

export const projectsData: Project[] = [
  {
    id: 'uber-trips-analysis',
    title: 'Uber Business Trips — Exploratory & Statistical Analysis',
    category: 'data-analytics',
    categoryLabel: 'Data Analytics & EDA',
    shortDescription: 'Analyzed 1,156 business trip records in Python to understand travel patterns across distance, weekday cycles, and trip duration.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    keyFunctionality: [
      'Cleaned 1,156 raw trip records, handled missing values, and extracted day and hour features from timestamps.',
      'Examined trip distance distributions and found that 72.66% were under 10 miles, showing that business travel was predominantly short-distance.',
      'Mapped weekly demand cycles: Friday was the busiest day of the week, with trip volumes peaking at 3:00 PM.',
      'Calculated a 0.842 correlation coefficient between trip distance and duration, confirming distance as the primary time driver.'
    ],
    findingsOrMetrics: [
      'Analyzed 1,156 total business trips from the dataset.',
      '72.66% of all rides were under 10 miles.',
      'Friday was the busiest operational day, peaking at 3:00 PM.',
      'Correlation coefficient of 0.842 between distance and duration.'
    ],
    githubUrl: 'https://github.com/Mantrapandya/uber_data_analysis_project',
    isFeatured: true
  },
  {
    id: 'zomato-analysis',
    title: 'Zomato Restaurant Performance Analysis',
    category: 'data-analytics',
    categoryLabel: 'Data Analytics & EDA',
    shortDescription: 'Explored restaurant listings across categories in Python to see how pricing, customer votes, and online ordering relate to ratings.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    keyFunctionality: [
      'Parsed restaurant listing data, treated missing values, and separated venues into category types.',
      'Compared customer engagement across categories: standard Dining received the highest engagement (20,363 votes), followed by Other, Cafes, and Buffets.',
      'Looked at the relationship between cost for two and user ratings to see how customer perception shifts with price.',
      'Plotted distributions and category comparisons using Seaborn and Matplotlib.'
    ],
    findingsOrMetrics: [
      'Dining category saw the highest overall engagement with 20,363 votes.',
      'Compared engagement distributions across Cafes, Buffets, and Other dining formats.',
      'Visualized rating trends across different price bands.'
    ],
    githubUrl: 'https://github.com/Mantrapandya/INTERNSHIP-PROJECT',
    isFeatured: true
  },
  {
    id: 'ecommerce-sales-dashboard',
    title: 'E-Commerce Sales Performance Dashboard',
    category: 'bi-dashboard',
    categoryLabel: 'Business Intelligence & Power BI',
    shortDescription: 'A multi-page Power BI dashboard built on transactional sales data to monitor revenue trends, order counts, and category performance.',
    technologies: ['Power BI', 'Power Query', 'Excel', 'Data Modeling'],
    keyFunctionality: [
      'Used Power Query for data transformation, cleaning raw invoice rows and setting up table relationships.',
      'Set up drill-down slicers so users can filter by product category, order sizes, and month-over-month trends.',
      'Designed KPI summary cards to track revenue totals, average order value, and category-level contributions.',
      'Built visual charts tracking seasonal sales patterns over time.'
    ],
    findingsOrMetrics: [
      'Consolidated multi-category transaction data into an interactive dashboard.',
      'Enabled quick cross-filtering across product categories and time periods.',
      'Automated data preparation steps using Power Query recipes.'
    ],
    githubUrl: 'https://github.com/Mantrapandya/powerbi-ecommerce-dashboard',
    isFeatured: true
  },
  {
    id: 'weatherairwitch',
    title: 'WeatherAirWitch — AI Weather Assistant',
    category: 'ai-web',
    categoryLabel: 'Applied AI & Web Application',
    shortDescription: 'A clean web app that pulls live weather data from Open-Meteo and uses Google Gemini to write plain-English summaries instead of just raw numbers.',
    technologies: ['TypeScript', 'Google Gemini API', 'Open-Meteo API', 'Vite', 'Tailwind CSS'],
    keyFunctionality: [
      'Calls the Open-Meteo REST API for real-time temperature, wind, humidity, and rain probabilities based on city search.',
      'Uses the Gemini API to explain the numbers naturally (like what jacket to wear or if rain will interrupt your evening).',
      'Built a responsive, clean interface with daily cards and dynamic weather icons.'
    ],
    findingsOrMetrics: [
      'Live deployed application delivering real-time contextual weather summaries.',
      'Runs without expensive backends using direct client-side API requests.'
    ],
    githubUrl: 'https://github.com/Mantrapandya/weatherairwitch',
    liveDemoUrl: 'https://weatherairwitch.vercel.app',
    isFeatured: true
  },
  {
    id: 'opsflow-ai',
    title: 'OpsFlow AI — Productivity Agent',
    category: 'ai-web',
    categoryLabel: 'Applied AI & Web Application',
    shortDescription: 'A web tool designed to turn quick meeting notes and unformatted bullet points into organized action items, priority tags, and clean email drafts.',
    technologies: ['TypeScript', 'LLM API Integration', 'Prompt Engineering', 'Tailwind CSS'],
    keyFunctionality: [
      'Accepts messy text notes and parses them with prompt templates into clear tasks, owners, and due dates.',
      'Flags blocked items and critical deadlines for team visibility.',
      'Generates markdown-formatted summaries ready to copy into team channels or emails.'
    ],
    findingsOrMetrics: [
      'Live deployed web tool for quick daily planning and note cleanup.',
      'Instant markdown copy-paste for meeting follow-ups.'
    ],
    githubUrl: 'https://github.com/Mantrapandya/ai-productivity-agent',
    liveDemoUrl: 'https://ai-productivity-agent-brown.vercel.app',
    isFeatured: false
  },
  {
    id: 'airwatch-ai',
    title: 'AirWatch AI — Environmental Intelligence',
    category: 'ai-web',
    categoryLabel: 'Applied AI Concept',
    shortDescription: 'A project concept exploring how to combine community reports and localized sensor metrics to monitor neighborhood-level air quality changes.',
    technologies: ['TypeScript', 'AI Logic', 'Data Modeling', 'Tailwind CSS'],
    keyFunctionality: [
      'Structured data schemas for local sensor observations and community smoke/pollution reports.',
      'Designed dashboard views showing localized air quality indicators and alert boundaries.',
      'Interactive UI prototype demonstrating neighborhood cluster risk mapping.'
    ],
    findingsOrMetrics: [
      'Exploratory interface design for neighborhood-level air quality tracking.',
      'Modular data model for combining multi-sensor inputs with crowd signals.'
    ],
    githubUrl: 'https://github.com/Mantrapandya/airwitchhai',
    isFeatured: false
  }
];

export const experienceData: ExperienceItem[] = [
  {
    company: 'Infolabz IT Services Pvt. Ltd.',
    role: 'Data Analytics & Machine Learning Intern',
    location: 'Ahmedabad, Gujarat, India',
    duration: 'July 2026 – Present',
    type: 'Internship',
    responsibilities: [
      'Cleaned and processed API-sourced datasets in Python using Pandas, handling missing entries and structuring records for analysis.',
      'Created exploratory charts in Matplotlib and built interactive dashboards in Power BI for internal reporting.',
      'Explored machine learning fundamentals, implementing basic regression models and learning practical model evaluation metrics.'
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering in Computer Science Engineering',
    institution: 'New L.J. Institute of Engineering & Technology (NLJIET)',
    university: 'Gujarat Technological University (GTU)',
    location: 'Ahmedabad, Gujarat, India',
    score: 'CGPA: 7.5 / 10.0',
    status: 'Final-Year Student',
    details: [
      'Studying core Computer Science subjects including Database Management Systems (DBMS), Object-Oriented Programming, and Data Structures.',
      'Coursework and personal projects focused heavily on Python scripting, SQL database querying, and practical data analysis.',
      'Maintaining a consistent 7.5 / 10.0 CGPA throughout the degree program.'
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'anthropic-foundations',
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    focus: 'Core AI concepts, prompt engineering principles, safety frameworks, and model interaction mechanics.',
    tags: ['AI Fluency', 'Anthropic', 'Prompt Engineering']
  },
  {
    id: 'anthropic-students',
    title: 'AI Fluency for Students',
    issuer: 'Anthropic',
    focus: 'Applied generative AI methodologies, ethical considerations, and practical workflows for technical academic problem solving.',
    tags: ['Applied AI', 'Anthropic', 'Academic Workflows']
  },
  {
    id: 'deloitte-forage',
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte (Forage)',
    focus: 'Practical business case simulation covering data quality assessment, client insight synthesis, and dashboard communication.',
    tags: ['Data Analytics', 'Deloitte', 'Business Intelligence']
  },
  {
    id: 'python-sql-bootcamp',
    title: 'Data Science: Python and SQL Bootcamp with Projects',
    issuer: 'Professional Bootcamp Certification',
    focus: 'Intensive project-based training in Python, Pandas, NumPy, relational SQL queries, data manipulation, and visualization.',
    tags: ['Python', 'SQL', 'Data Science', 'EDA']
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Data Analytics & Statistics',
    description: 'Cleaning messy tables, testing relationships between columns, and summarizing numbers with Python and SQL.',
    skills: [
      { name: 'Python', verifiedIn: 'Resume & Projects' },
      { name: 'SQL', verifiedIn: 'Resume & Bootcamp' },
      { name: 'Pandas', verifiedIn: 'Resume & Internships' },
      { name: 'NumPy', verifiedIn: 'Resume & Projects' },
      { name: 'Data Cleaning & Preprocessing', verifiedIn: 'Resume & Projects' },
      { name: 'Exploratory Data Analysis (EDA)', verifiedIn: 'Resume & Projects' },
      { name: 'Statistical Analysis', verifiedIn: 'Resume & Uber Project' },
      { name: 'Hypothesis Testing', verifiedIn: 'Resume' }
    ]
  },
  {
    title: 'Visualization & Business Intelligence',
    description: 'Designing visual charts, interactive dashboards, and easy-to-read reports from structured data.',
    skills: [
      { name: 'Power BI', verifiedIn: 'Resume & Projects' },
      { name: 'Power Query', verifiedIn: 'Resume & Projects' },
      { name: 'Matplotlib', verifiedIn: 'Resume & Projects' },
      { name: 'Seaborn', verifiedIn: 'Resume & Projects' },
      { name: 'Interactive Dashboards', verifiedIn: 'Resume & Infolabz' },
      { name: 'Microsoft Excel', verifiedIn: 'Resume & Analysis' }
    ]
  },
  {
    title: 'Development & Tools',
    description: 'Day-to-day coding environments, version control, and API data tools.',
    skills: [
      { name: 'Jupyter Notebook', verifiedIn: 'Resume' },
      { name: 'PyCharm', verifiedIn: 'Resume' },
      { name: 'Git & GitHub', verifiedIn: 'Resume & GitHub Repos' },
      { name: 'API Data Processing', verifiedIn: 'Resume & Infolabz' },
      { name: 'Streamlit', verifiedIn: 'Resume / Python App' },
      { name: 'Prompt Engineering', verifiedIn: 'Anthropic AI Fluency' }
    ]
  }
];

export const currentlyLearningData: LearningItem[] = [
  {
    title: 'Machine Learning Basics',
    status: 'In Progress / Self-Study',
    description: 'Studying core machine learning ideas beyond the basics—covering linear/logistic regression models, classification metrics, and model validation with scikit-learn.',
    keyTopics: ['Linear & Logistic Regression', 'Model Evaluation & Metrics', 'Overfitting vs Underfitting', 'Scikit-learn Foundations']
  },
  {
    title: 'AI & API Workflows',
    status: 'In Progress / Practical Experiments',
    description: 'Experimenting with LLM APIs for practical tasks, like pulling structured information out of text and generating plain-English summaries.',
    keyTopics: ['LLM API Workflows', 'Structured Outputs', 'Context Augmentation', 'Practical Web Assistants']
  },
  {
    title: 'Workflow Automation (n8n)',
    status: 'In Progress / Learning Track',
    description: 'Learning node-based automation in n8n to connect webhooks and move data between tools without writing repetitive boilerplate.',
    keyTopics: ['n8n Node Workflows', 'Webhook Triggering', 'Payload Transformation', 'Data Pipelines']
  }
];
