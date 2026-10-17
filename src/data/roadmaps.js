export const ROADMAPS = {
  'software-developer': {
    careerId: 'software-developer',
    title: 'Software Developer Learning Roadmap',
    stages: [
      {
        id: 'stage-1',
        number: 1,
        title: 'Stage 1: Foundation',
        subtitle: 'Core Programming, Algorithms & Essential Tools',
        description: 'Master the fundamental building blocks of computer science and developer workflows.',
        tasks: [
          {
            id: 'sd-101',
            title: 'Master Core Language Fundamentals (JavaScript or Python)',
            description: 'Learn variables, control structures, functions, object-oriented concepts, and memory models.',
            skills: ['Programming Logic', 'Syntax Fluency', 'Clean Code'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'sd-102',
            title: 'Version Control with Git & GitHub Collaboration',
            description: 'Practice branching, merge conflict resolution, commits, pull requests, and remote repositories.',
            skills: ['Git', 'GitHub', 'Team Collaboration'],
            estimatedTime: '1 Week'
          },
          {
            id: 'sd-103',
            title: 'Data Structures & Algorithmic Problem Solving',
            description: 'Implement arrays, linked lists, hash maps, binary trees, recursion, sorting, and Big-O notation.',
            skills: ['Big-O Analysis', 'Data Structures', 'Problem Solving'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'sd-104',
            title: 'Frontend Basics (HTML5, Modern CSS & DOM Manipulation)',
            description: 'Build semantic accessible layouts, CSS flexbox/grid, and reactive UI elements.',
            skills: ['HTML/CSS', 'Responsive Layouts', 'DOM APIs'],
            estimatedTime: '2 Weeks'
          }
        ]
      },
      {
        id: 'stage-2',
        number: 2,
        title: 'Stage 2: Practical Experience',
        subtitle: 'Frameworks, Full-Stack Architecture & Databases',
        description: 'Build production-style full-stack applications with state management and persistent data.',
        tasks: [
          {
            id: 'sd-201',
            title: 'Build Single-Page Apps with React & Modern State Management',
            description: 'Learn hooks, component lifecycles, context API, and modular UI component architecture.',
            skills: ['React.js', 'State Management', 'Component Design'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'sd-202',
            title: 'Develop RESTful APIs with Node.js & Express',
            description: 'Construct robust endpoints, middleware, authentication tokens (JWT), and request validation.',
            skills: ['Backend APIs', 'Express.js', 'Auth & Security'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'sd-203',
            title: 'Database Design & Queries (SQL & NoSQL)',
            description: 'Model relational schemas with PostgreSQL/MySQL and document models with MongoDB.',
            skills: ['SQL', 'Database Schema Design', 'ORM/ODM'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'sd-204',
            title: 'Unit Testing & Automated Integration Tests',
            description: 'Write test suites using Jest or Vitest for unit logic and API test coverage.',
            skills: ['Unit Testing', 'Jest/Vitest', 'Test-Driven Basics'],
            estimatedTime: '1 Week'
          }
        ]
      },
      {
        id: 'stage-3',
        number: 3,
        title: 'Stage 3: Career Preparation',
        subtitle: 'System Design, Polished Portfolio & Interview Readiness',
        description: 'Showcase your real-world capability, refine your resume, and ace technical coding rounds.',
        tasks: [
          {
            id: 'sd-301',
            title: 'Deploy Full-Stack Projects with CI/CD on Cloud Hosting',
            description: 'Set up automated GitHub Actions pipelines to deploy frontend to Vercel and backend to Render/AWS.',
            skills: ['CI/CD', 'Cloud Deployment', 'Environment Config'],
            estimatedTime: '1 Week'
          },
          {
            id: 'sd-302',
            title: 'Assemble a Tailored Software Engineer Portfolio & Live Demos',
            description: 'Curate 2-3 deep, deployed projects with README documentation, video demos, and architecture diagrams.',
            skills: ['Technical Writing', 'Documentation', 'Personal Branding'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'sd-303',
            title: 'Technical Interview Prep & Coding Practice (LeetCode 75)',
            description: 'Target pattern-based coding problems (sliding window, two pointers, graphs) and practice mock interviews.',
            skills: ['Interview Problem Solving', 'Communication', 'Algorithmic Speed'],
            estimatedTime: '4 Weeks'
          }
        ]
      }
    ]
  },
  'ai-ml-engineer': {
    careerId: 'ai-ml-engineer',
    title: 'AI/ML Engineer Learning Roadmap',
    stages: [
      {
        id: 'stage-1',
        number: 1,
        title: 'Stage 1: Foundation',
        subtitle: 'Math Foundations, Python & Numerical Computing',
        description: 'Establish the core mathematical intuition and scientific computing toolkit.',
        tasks: [
          {
            id: 'ai-101',
            title: 'Applied Mathematics (Linear Algebra, Calculus & Probability)',
            description: 'Master vectors, matrices, eigenvalues, partial derivatives, gradients, and probability distributions.',
            skills: ['Linear Algebra', 'Multivariate Calculus', 'Probability'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'ai-102',
            title: 'Python for Scientific Computing (NumPy & Pandas)',
            description: 'Learn vectorized operations, tensor broadcasting, DataFrame aggregations, and data wrangling.',
            skills: ['Python', 'NumPy', 'Pandas'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'ai-103',
            title: 'Classical Machine Learning with Scikit-Learn',
            description: 'Train regressions, decision trees, random forests, SVMs, and evaluate with cross-validation.',
            skills: ['Supervised Learning', 'Model Evaluation', 'Feature Engineering'],
            estimatedTime: '3 Weeks'
          }
        ]
      },
      {
        id: 'stage-2',
        number: 2,
        title: 'Stage 2: Practical Experience',
        subtitle: 'Deep Learning, PyTorch & Generative AI Pipelines',
        description: 'Build neural network architectures, train computer vision/NLP models, and harness LLMs.',
        tasks: [
          {
            id: 'ai-201',
            title: 'Neural Networks & Deep Learning with PyTorch',
            description: 'Implement backpropagation, feedforward networks, CNNs for images, and loss optimization.',
            skills: ['PyTorch', 'Neural Networks', 'GPU Acceleration'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'ai-202',
            title: 'Natural Language Processing & Transformers',
            description: 'Explore tokenization, self-attention mechanisms, HuggingFace transformers, and BERT/GPT architectures.',
            skills: ['Hugging Face', 'Transformers', 'NLP'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'ai-203',
            title: 'Build Retrieval-Augmented Generation (RAG) Applications',
            description: 'Use LangChain/LlamaIndex, embedding vectors, and vector DBs (Chroma/Pinecone) to build context-aware AI apps.',
            skills: ['Vector DBs', 'RAG Pipelines', 'Prompt Engineering'],
            estimatedTime: '2 Weeks'
          }
        ]
      },
      {
        id: 'stage-3',
        number: 3,
        title: 'Stage 3: Career Preparation',
        subtitle: 'MLOps, Deployment & Research Showcase',
        description: 'Deploy AI models as low-latency microservices, curate reproducible papers/code, and prepare for interviews.',
        tasks: [
          {
            id: 'ai-301',
            title: 'Deploy Models via FastAPI & Docker Containers',
            description: 'Package inference pipelines into RESTful endpoints with batch processing and containerization.',
            skills: ['FastAPI', 'Docker', 'ML Inference'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'ai-302',
            title: 'Publish Kaggle Notebooks & GitHub ML Repositories',
            description: 'Create interactive Streamlit/Gradio demos, write clean READMEs, and document hyperparameter findings.',
            skills: ['Model Portfolios', 'Streamlit', 'Technical Documentation'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'ai-303',
            title: 'ML System Design & Technical Interview Preparation',
            description: 'Study end-to-end ML architectures (recommendation engines, search ranking) and practice deep math interviews.',
            skills: ['ML System Design', 'Problem Decomposition', 'Interview Prep'],
            estimatedTime: '3 Weeks'
          }
        ]
      }
    ]
  },
  'data-analyst': {
    careerId: 'data-analyst',
    title: 'Data Analyst Learning Roadmap',
    stages: [
      {
        id: 'stage-1',
        number: 1,
        title: 'Stage 1: Foundation',
        subtitle: 'Advanced Spreadsheets, SQL & Descriptive Statistics',
        description: 'Build bedrock skills for querying, cleaning, and understanding business data.',
        tasks: [
          {
            id: 'da-101',
            title: 'Master SQL for Data Extraction & Manipulation',
            description: 'Write complex JOINs, CTEs, window functions (RANK, ROW_NUMBER), and aggregation queries.',
            skills: ['Advanced SQL', 'Relational Databases', 'Data Extraction'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'da-102',
            title: 'Descriptive & Inferential Statistics for Business',
            description: 'Understand central tendency, variance, confidence intervals, hypothesis testing, and p-values.',
            skills: ['Applied Statistics', 'Hypothesis Testing', 'Data Literacy'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'da-103',
            title: 'Excel / Google Sheets for Analytics & Modeling',
            description: 'Harness XLOOKUP, pivot tables, INDEX-MATCH, scenario forecasting, and macro automation.',
            skills: ['Spreadsheet Modeling', 'Pivot Tables', 'Data Cleaning'],
            estimatedTime: '1 Week'
          }
        ]
      },
      {
        id: 'stage-2',
        number: 2,
        title: 'Stage 2: Practical Experience',
        subtitle: 'Python Data Stack & BI Dashboard Mastery',
        description: 'Perform exploratory analysis and construct enterprise-grade visual reporting dashboards.',
        tasks: [
          {
            id: 'da-201',
            title: 'Exploratory Data Analysis with Python (Pandas & Seaborn)',
            description: 'Load dirty datasets, handle missing values, detect outliers, and generate distribution charts.',
            skills: ['Pandas', 'Seaborn/Matplotlib', 'EDA'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'da-202',
            title: 'Interactive Dashboard Building (Tableau or Power BI)',
            description: 'Create real-time KPI scorecards, drill-down filters, parameterized visual charts, and executive reports.',
            skills: ['Tableau / Power BI', 'Data Visualization', 'UI for Data'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'da-203',
            title: 'Conduct Cohort Analysis & Funnel Conversion Audits',
            description: 'Track customer retention curves, churn rates, and marketing attribution models on real datasets.',
            skills: ['Business Metrics', 'Cohort Analysis', 'Funnel Tracking'],
            estimatedTime: '2 Weeks'
          }
        ]
      },
      {
        id: 'stage-3',
        number: 3,
        title: 'Stage 3: Career Preparation',
        subtitle: 'Data Storytelling, Portfolio & Case Study Presentations',
        description: 'Communicate high-impact insights to decision makers and stand out in analytical interviews.',
        tasks: [
          {
            id: 'da-301',
            title: 'Design 3 End-to-End Business Case Study Dashboards',
            description: 'Publish interactive Tableau Public / Power BI dashboards with written executive summaries.',
            skills: ['Portfolio Presentation', 'Data Storytelling', 'Business Acumen'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'da-302',
            title: 'A/B Testing Frameworks & Metric Experimentation',
            description: 'Design randomized control trials, sample size calculators, and statistical significance reports.',
            skills: ['A/B Testing', 'Experimentation', 'Stakeholder Reporting'],
            estimatedTime: '1 Week'
          },
          {
            id: 'da-303',
            title: 'Technical Case Interview & SQL Whiteboarding Practice',
            description: 'Solve real company take-home data challenges, live SQL queries, and present findings to mock panels.',
            skills: ['SQL Interviews', 'Live Communication', 'Analytical Thinking'],
            estimatedTime: '3 Weeks'
          }
        ]
      }
    ]
  },
  'ui-ux-designer': {
    careerId: 'ui-ux-designer',
    title: 'UI/UX Designer Learning Roadmap',
    stages: [
      {
        id: 'stage-1',
        number: 1,
        title: 'Stage 1: Foundation',
        subtitle: 'Design Principles, User Research & Figma Mastery',
        description: 'Learn visual hierarchy, user psychology, color theory, and prototyping fundamentals.',
        tasks: [
          {
            id: 'ux-101',
            title: 'Design Fundamentals & Visual Hierarchy',
            description: 'Study typography, contrast, spacing grids (8pt grid system), color harmony, and affordances.',
            skills: ['Typography', 'Grid Systems', 'Color Theory'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'ux-102',
            title: 'Figma Mastery: Auto-Layout, Components & Variables',
            description: 'Build responsive components, interactive component variants, design tokens, and smooth prototypes.',
            skills: ['Figma', 'Auto-Layout', 'Component Libraries'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'ux-103',
            title: 'User Research Methodologies & Empathy Mapping',
            description: 'Conduct user interviews, synthesize personas, journey maps, and empathy diagrams.',
            skills: ['User Interviews', 'Personas', 'Journey Mapping'],
            estimatedTime: '2 Weeks'
          }
        ]
      },
      {
        id: 'stage-2',
        number: 2,
        title: 'Stage 2: Practical Experience',
        subtitle: 'Wireframing, Usability Testing & Design Systems',
        description: 'Transform user research into validated high-fidelity prototypes and scalable design systems.',
        tasks: [
          {
            id: 'ux-201',
            title: 'Low-to-High Fidelity Wireframing & Information Architecture',
            description: 'Structure intuitive site maps, user task flows, and rapid paper-to-digital wireframes.',
            skills: ['Information Architecture', 'Wireframing', 'User Flows'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'ux-202',
            title: 'Build a Complete Modular Design System',
            description: 'Design typography scales, color palettes, accessible forms, buttons, modals, and documentation.',
            skills: ['Design Systems', 'WCAG Accessibility', 'Design Tokens'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'ux-203',
            title: 'Conduct Usability Testing Sessions & Iteration',
            description: 'Run moderated user test sessions, collect cognitive friction points, and iterate wireframes.',
            skills: ['Usability Testing', 'Feedback Synthesis', 'Design Iteration'],
            estimatedTime: '2 Weeks'
          }
        ]
      },
      {
        id: 'stage-3',
        number: 3,
        title: 'Stage 3: Career Preparation',
        subtitle: 'Case Study Portfolio, Developer Handoff & Design Critiques',
        description: 'Craft in-depth case studies that demonstrate your problem-solving process to hiring managers.',
        tasks: [
          {
            id: 'ux-301',
            title: 'Author 2 Comprehensive UX Case Studies with Metrics',
            description: 'Structure problem statements, research artifacts, design decisions, iterations, and measured outcomes.',
            skills: ['Case Study Writing', 'Portfolio Presentation', 'Impact Metrics'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'ux-302',
            title: 'Master Developer Handoff & Specification Documentation',
            description: 'Inspect CSS properties, export responsive assets, document micro-interaction specs, and annotate edge cases.',
            skills: ['Developer Handoff', 'Design QA', 'Design Specs'],
            estimatedTime: '1 Week'
          },
          {
            id: 'ux-303',
            title: 'Portfolio Presentation & Whiteboard Challenge Practice',
            description: 'Rehearse presenting your design rationale under timed design challenges and answering critique questions.',
            skills: ['Design Critique', 'Whiteboard Challenge', 'Public Presentation'],
            estimatedTime: '2 Weeks'
          }
        ]
      }
    ]
  },
  'cybersecurity-analyst': {
    careerId: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst Learning Roadmap',
    stages: [
      {
        id: 'stage-1',
        number: 1,
        title: 'Stage 1: Foundation',
        subtitle: 'Networking, Linux Systems & Security Fundamentals',
        description: 'Understand how computers communicate, how operating systems function, and common vulnerabilities.',
        tasks: [
          {
            id: 'sec-101',
            title: 'Computer Networking & Protocol Analysis',
            description: 'Deep dive into TCP/IP, DNS, DHCP, HTTP/S, routing tables, and Wireshark packet capture analysis.',
            skills: ['Networking (TCP/IP)', 'Wireshark', 'Packet Inspection'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'sec-102',
            title: 'Linux Command Line & System Administration',
            description: 'Master file permissions, bash scripting, cron jobs, process inspection, and secure remote shell (SSH).',
            skills: ['Linux CLI', 'Bash Scripting', 'System Auditing'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'sec-103',
            title: 'Core Security Principles & OWASP Top 10',
            description: 'Study the CIA Triad, authentication, symmetric/asymmetric cryptography, and web attack vectors (SQLi, XSS, CSRF).',
            skills: ['OWASP Top 10', 'Cryptography Basics', 'Security Principles'],
            estimatedTime: '2 Weeks'
          }
        ]
      },
      {
        id: 'stage-2',
        number: 2,
        title: 'Stage 2: Practical Experience',
        subtitle: 'Vulnerability Scanning, SIEM & Hands-on Labs',
        description: 'Practice simulated attacks and defensive monitoring in sandboxed cyber environments.',
        tasks: [
          {
            id: 'sec-201',
            title: 'Vulnerability Scanning & Port Auditing (Nmap & Nessus)',
            description: 'Scan network subnets, discover open ports, fingerprint services, and identify outdated patch levels.',
            skills: ['Nmap', 'Nessus', 'Vulnerability Assessment'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'sec-202',
            title: 'Security Monitoring with SIEM & Log Analysis',
            description: 'Set up Splunk or Elastic Security, configure log ingest, query security events, and detect intrusion alerts.',
            skills: ['SIEM (Splunk/ELK)', 'Log Analysis', 'Incident Detection'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'sec-203',
            title: 'Hands-on Labs on TryHackMe & Hack The Box',
            description: 'Complete hands-on defense and offense rooms, learn privilege escalation, and write structured lab writeups.',
            skills: ['Hands-on CTF', 'Privilege Escalation', 'Security Labs'],
            estimatedTime: '3 Weeks'
          }
        ]
      },
      {
        id: 'stage-3',
        number: 3,
        title: 'Stage 3: Career Preparation',
        subtitle: 'Industry Certifications, SOC Playbooks & Incident Response',
        description: 'Prepare for security certifications (CompTIA Security+) and practical blue-team interviews.',
        tasks: [
          {
            id: 'sec-301',
            title: 'Create Incident Response Playbooks & Documentation',
            description: 'Document standard operating procedures for phishing containment, malware isolation, and breach recovery.',
            skills: ['Incident Response', 'SOP Writing', 'Risk Management'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'sec-302',
            title: 'Cert Prep: CompTIA Security+ or Google Cybersecurity',
            description: 'Review domain objectives, practice exam questions, and solidify threat mitigation terminology.',
            skills: ['Industry Certifications', 'Compliance Frameworks', 'NIST / ISO 27001'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'sec-303',
            title: 'SOC Analyst Technical Scenario & Behavioral Interviews',
            description: 'Walk through simulated breach scenarios, explain log indicators of compromise (IoCs), and defend decisions.',
            skills: ['SOC Operations', 'Technical Scenarios', 'IoC Investigation'],
            estimatedTime: '2 Weeks'
          }
        ]
      }
    ]
  },
  'product-manager': {
    careerId: 'product-manager',
    title: 'Product Manager Learning Roadmap',
    stages: [
      {
        id: 'stage-1',
        number: 1,
        title: 'Stage 1: Foundation',
        subtitle: 'Product Sense, Market Analysis & Agile Frameworks',
        description: 'Learn how to identify user pain points, evaluate competitive landscapes, and work with agile teams.',
        tasks: [
          {
            id: 'pm-101',
            title: 'Foundations of Product Management & Agile/Scrum',
            description: 'Understand user story writing, sprint planning, backlog grooming, and the product lifecycle.',
            skills: ['Agile / Scrum', 'User Stories', 'Backlog Management'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'pm-102',
            title: 'Market Research & Competitive Landscape Mapping',
            description: 'Analyze TAM/SAM/SOM, evaluate competitor feature matrices, and identify differentiation moats.',
            skills: ['Market Research', 'Competitive Analysis', 'Business Strategy'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'pm-103',
            title: 'User Discovery Interviews & Problem Identification',
            description: 'Craft open-ended interview guides, separate symptoms from root problems, and validate demand.',
            skills: ['Customer Discovery', 'Active Listening', 'Problem Definition'],
            estimatedTime: '2 Weeks'
          }
        ]
      },
      {
        id: 'stage-2',
        number: 2,
        title: 'Stage 2: Practical Experience',
        subtitle: 'PRD Writing, Feature Prioritization & Product Analytics',
        description: 'Write specifications, prioritize tradeoffs, and measure product health with real metrics.',
        tasks: [
          {
            id: 'pm-201',
            title: 'Author Comprehensive Product Requirements Documents (PRDs)',
            description: 'Define objectives, user personas, functional specs, edge cases, success metrics, and release criteria.',
            skills: ['PRD Writing', 'Technical Scoping', 'Cross-functional Specs'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'pm-202',
            title: 'Prioritization Frameworks (RICE, MoSCoW & Kano Model)',
            description: 'Score competing features by Reach, Impact, Confidence, and Effort to defend strategic roadmaps.',
            skills: ['RICE Scoring', 'Tradeoff Analysis', 'Roadmap Prioritization'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'pm-203',
            title: 'Product Metrics & Analytics Dashboards (Mixpanel/Amplitude)',
            description: 'Define North Star metrics, track retention cohorts, acquisition funnels, and activation loops.',
            skills: ['North Star Metrics', 'Funnel Analytics', 'Mixpanel / GA4'],
            estimatedTime: '2 Weeks'
          }
        ]
      },
      {
        id: 'stage-3',
        number: 3,
        title: 'Stage 3: Career Preparation',
        subtitle: 'Product Portfolio, Teardowns & PM Case Interviews',
        description: 'Demonstrate product intuition through teardowns, mock launch plans, and rigorous case interview practice.',
        tasks: [
          {
            id: 'pm-301',
            title: 'Publish 2 In-depth Product Teardowns & Redesign Proposals',
            description: 'Critique popular applications (Spotify, Uber, Notion), diagnose UX drop-offs, and propose validated solutions.',
            skills: ['Product Teardowns', 'Strategic Thinking', 'Portfolio Building'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'pm-302',
            title: 'Design a Go-to-Market (GTM) Strategy & Launch Plan',
            description: 'Plan pricing tiers, positioning statements, marketing launch channels, and beta test rollouts.',
            skills: ['GTM Strategy', 'Product Marketing', 'Launch Coordination'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'pm-303',
            title: 'Product Sense & Execution Case Interview Practice',
            description: 'Rehearse "How would you improve X?" and "Metric drop diagnosis" questions using structured frameworks.',
            skills: ['Product Sense Interviews', 'Metric Diagnosis', 'Executive Communication'],
            estimatedTime: '3 Weeks'
          }
        ]
      }
    ]
  },
  'digital-marketer': {
    careerId: 'digital-marketer',
    title: 'Digital Marketer Learning Roadmap',
    stages: [
      {
        id: 'stage-1',
        number: 1,
        title: 'Stage 1: Foundation',
        subtitle: 'Digital Marketing Fundamentals, SEO & Copywriting',
        description: 'Understand customer buying journeys, organic search mechanics, and persuasive storytelling.',
        tasks: [
          {
            id: 'dm-101',
            title: 'Marketing Funnels & Customer Persona Mapping',
            description: 'Map Top-of-Funnel (TOFU), Middle (MOFU), and Bottom (BOFU) awareness, consideration, and conversion stages.',
            skills: ['Customer Funnels', 'Persona Mapping', 'Marketing Foundations'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'dm-102',
            title: 'Search Engine Optimization (On-Page, Off-Page & Technical)',
            description: 'Master keyword research (Ahrefs/Semrush concepts), meta tags, search intent, and backlink strategies.',
            skills: ['SEO', 'Keyword Research', 'Search Intent'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'dm-103',
            title: 'Persuasive Copywriting & Content Creation',
            description: 'Write high-converting landing page headlines, email subject lines, social hooks, and call-to-actions.',
            skills: ['Copywriting', 'Content Strategy', 'Value Propositions'],
            estimatedTime: '2 Weeks'
          }
        ]
      },
      {
        id: 'stage-2',
        number: 2,
        title: 'Stage 2: Practical Experience',
        subtitle: 'Performance Ads, Email Automation & Web Analytics',
        description: 'Manage paid media campaigns, design automated nurture funnels, and track conversion ROI.',
        tasks: [
          {
            id: 'dm-201',
            title: 'Paid Advertising Campaigns (Google Ads & Meta Ads)',
            description: 'Set up ad account structures, define audience targeting, set bid strategies, and design A/B creatives.',
            skills: ['Google Ads', 'Meta Ads Manager', 'Paid Acquisition'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'dm-202',
            title: 'Email Marketing & CRM Automation Workflows',
            description: 'Configure automated welcome sequences, cart abandonment triggers, list segmentation, and open-rate audits.',
            skills: ['Email Automation', 'Klaviyo / Mailchimp', 'Drip Campaigns'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'dm-203',
            title: 'Web Analytics & Conversion Tracking with GA4 & GTM',
            description: 'Deploy Google Tag Manager triggers, set up conversion events, and build custom exploration reports.',
            skills: ['Google Analytics 4', 'Google Tag Manager', 'Conversion Rate Tracking'],
            estimatedTime: '2 Weeks'
          }
        ]
      },
      {
        id: 'stage-3',
        number: 3,
        title: 'Stage 3: Career Preparation',
        subtitle: 'Campaign Portfolio, Growth Audits & Growth Strategy',
        description: 'Showcase measurable ROI with live campaign case studies, certifications, and marketing interviews.',
        tasks: [
          {
            id: 'dm-301',
            title: 'Build a Live Growth Campaign Case Study with Real Metrics',
            description: 'Document an end-to-end campaign for a student organization, blog, or local business showing traffic and leads.',
            skills: ['Campaign Case Studies', 'ROI Reporting', 'Client Presentation'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'dm-302',
            title: 'Earn Google & HubSpot Digital Marketing Certifications',
            description: 'Complete the Google Ads Search Certification and HubSpot Inbound Marketing Certification.',
            skills: ['Industry Certifications', 'Inbound Marketing', 'Search Certifications'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'dm-303',
            title: 'Growth Marketing Strategy & Take-Home Assignment Practice',
            description: 'Solve real-world growth challenge prompts: allocating budgets, diagnosing ROAS drops, and pitching campaign strategies.',
            skills: ['Campaign Strategy', 'Budget Optimization', 'Interview Case Studies'],
            estimatedTime: '2 Weeks'
          }
        ]
      }
    ]
  },
  'frontend-developer': {
    careerId: 'frontend-developer',
    title: 'Frontend Developer Learning Roadmap',
    stages: [
      {
        id: 'stage-1',
        number: 1,
        title: 'Stage 1: Foundation',
        subtitle: 'HTML5 Semantics, Modern CSS & Responsive Web Design',
        description: 'Master core web markup, styling rules, flexbox/grid layouts, and responsive design systems.',
        tasks: [
          {
            id: 'fe-101',
            title: 'Master HTML5 Semantic Landmarks & Accessible Forms',
            description: 'Learn modern document landmarks (<main>, <nav>, <article>), semantic headings, accessible form inputs, and WCAG standards.',
            skills: ['HTML5', 'Semantic Markup', 'Web Accessibility (a11y)'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'fe-102',
            title: 'Modern CSS, Flexbox & CSS Grid Mastery',
            description: 'Build flexible multi-column layouts, mobile-first media queries, CSS variables, and fluid typography.',
            skills: ['CSS3', 'Flexbox', 'CSS Grid', 'Responsive Design'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'fe-103',
            title: 'JavaScript ES6+ & DOM Manipulation',
            description: 'Understand let/const, arrow functions, template literals, querySelector, and event delegation.',
            skills: ['JavaScript ES6+', 'DOM APIs', 'Event Handling'],
            estimatedTime: '3 Weeks'
          }
        ]
      },
      {
        id: 'stage-2',
        number: 2,
        title: 'Stage 2: Practical Experience',
        subtitle: 'React Component Architecture, State & Web APIs',
        description: 'Build responsive single-page applications with reusable components, hooks, and external REST APIs.',
        tasks: [
          {
            id: 'fe-201',
            title: 'React Fundamentals: Components, Props & Hooks',
            description: 'Master useState, useEffect, custom hooks, and declarative UI component lifecycles.',
            skills: ['React.js', 'React Hooks', 'Component Architecture'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'fe-202',
            title: 'Asynchronous API Integration with Fetch & Axios',
            description: 'Consume external REST APIs with async/await, error boundaries, loading skeletons, and debounced search.',
            skills: ['REST APIs', 'Async/Await', 'Data Fetching'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'fe-203',
            title: 'Styling with Tailwind CSS / CSS Modules',
            description: 'Implement modern utility-first CSS styling, theme toggle systems, and micro-interactions.',
            skills: ['Tailwind CSS', 'CSS Modules', 'UI Design Systems'],
            estimatedTime: '2 Weeks'
          }
        ]
      },
      {
        id: 'stage-3',
        number: 3,
        title: 'Stage 3: Career Preparation',
        subtitle: 'Performance Optimization, Testing & Live Portfolio',
        description: 'Fine-tune web vitals, Lighthouse scores, and deploy interactive frontend projects to Vercel.',
        tasks: [
          {
            id: 'fe-301',
            title: 'Core Web Vitals & Frontend Performance Optimization',
            description: 'Optimize Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), code splitting, and lazy loading.',
            skills: ['Lighthouse Audits', 'Performance Optimization', 'Lazy Loading'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'fe-302',
            title: 'Deploy High-Impact Developer Portfolio & 3 Featured Projects',
            description: 'Curate a standout developer website showcasing responsive web apps with live Vercel deployments.',
            skills: ['Personal Branding', 'Vercel Deployment', 'GitHub Portfolio'],
            estimatedTime: '2 Weeks'
          }
        ]
      }
    ]
  },
  'backend-developer': {
    careerId: 'backend-developer',
    title: 'Backend Developer Learning Roadmap',
    stages: [
      {
        id: 'stage-1',
        number: 1,
        title: 'Stage 1: Foundation',
        subtitle: 'Language Fluency, OOP & Relational SQL Databases',
        description: 'Build server-side computational foundations, memory paradigms, and database query mastery.',
        tasks: [
          {
            id: 'be-101',
            title: 'Core Server Language Mastery (Java / Python / Node.js)',
            description: 'Learn object-oriented architecture, data collections, error handling, and asynchronous programming.',
            skills: ['Java / Python / Node', 'OOP Principles', 'Clean Architecture'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'be-102',
            title: 'Relational Database Schema Design & SQL Mastery',
            description: 'Write complex JOINs, GROUP BY aggregations, foreign key constraints, indexes, and ACID transactions.',
            skills: ['PostgreSQL / MySQL', 'SQL Queries', 'Database Normalization'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'be-103',
            title: 'Version Control with Git & Branching Strategies',
            description: 'Manage collaborative codebases using feature branches, pull requests, and semantic commit conventions.',
            skills: ['Git', 'GitHub Workflows', 'Code Reviews'],
            estimatedTime: '1 Week'
          }
        ]
      },
      {
        id: 'stage-2',
        number: 2,
        title: 'Stage 2: Practical Experience',
        subtitle: 'RESTful API Engineering, Authentication & Caching',
        description: 'Architect scalable web services, JSON serialization, JWT auth, and middleware validation.',
        tasks: [
          {
            id: 'be-201',
            title: 'RESTful API Design & HTTP Status Codes',
            description: 'Construct predictable REST endpoints with Express/Spring Boot, request validation, and status conventions.',
            skills: ['REST APIs', 'Express.js / Spring Boot', 'API Versioning'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'be-202',
            title: 'User Authentication, Authorization & JWT Tokens',
            description: 'Implement password hashing with bcrypt, JSON Web Tokens, refresh token flows, and role-based access control (RBAC).',
            skills: ['Authentication (JWT)', 'Security Best Practices', 'Bcrypt Hashing'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'be-203',
            title: 'In-Memory Caching with Redis & Rate Limiting',
            description: 'Mitigate heavy database queries using Redis key-value caching and protect endpoints with rate limiters.',
            skills: ['Redis', 'Caching Strategies', 'Rate Limiting'],
            estimatedTime: '2 Weeks'
          }
        ]
      },
      {
        id: 'stage-3',
        number: 3,
        title: 'Stage 3: Career Preparation',
        subtitle: 'Docker Containers, CI/CD & System Design',
        description: 'Containerize backend microservices, write integration tests, and ace system design interviews.',
        tasks: [
          {
            id: 'be-301',
            title: 'Containerization with Docker & Automated Testing',
            description: 'Write Dockerfiles, docker-compose environments, and automated API integration test suites.',
            skills: ['Docker', 'Integration Testing', 'CI/CD Pipelines'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'be-302',
            title: 'Foundational System Design & Scalability Principles',
            description: 'Study horizontal scaling, load balancers, database sharding, and message queues (RabbitMQ/Kafka).',
            skills: ['System Design', 'Horizontal Scaling', 'Load Balancing'],
            estimatedTime: '3 Weeks'
          }
        ]
      }
    ]
  },
  'full-stack-developer': {
    careerId: 'full-stack-developer',
    title: 'Full-Stack Developer Learning Roadmap',
    stages: [
      {
        id: 'stage-1',
        number: 1,
        title: 'Stage 1: Foundation',
        subtitle: 'Frontend Core, JavaScript & Server Basics',
        description: 'Establish end-to-end fluency from HTML/CSS UI to server runtime scripts and Git.',
        tasks: [
          {
            id: 'fs-101',
            title: 'Semantic HTML5, Responsive CSS & JavaScript Foundations',
            description: 'Construct accessible, responsive user interfaces and master ES6+ JavaScript programming logic.',
            skills: ['HTML5', 'CSS3 Flex/Grid', 'JavaScript ES6+'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'fs-102',
            title: 'Relational & NoSQL Database Basics',
            description: 'Learn SQL schema modeling and document databases (PostgreSQL and MongoDB).',
            skills: ['SQL', 'PostgreSQL', 'MongoDB'],
            estimatedTime: '2 Weeks'
          }
        ]
      },
      {
        id: 'stage-2',
        number: 2,
        title: 'Stage 2: Practical Experience',
        subtitle: 'Full-Stack MERN / PERN Architecture & State',
        description: 'Connect React client applications to Express server backends with authentication and database persistence.',
        tasks: [
          {
            id: 'fs-201',
            title: 'React Single-Page Application Architecture',
            description: 'Build stateful UIs, custom hooks, and dynamic routes with React Router.',
            skills: ['React.js', 'State Management', 'React Router'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'fs-202',
            title: 'Full-Stack REST APIs & User Authentication',
            description: 'Build Node/Express API with JWT authentication, connecting frontend login forms to backend sessions.',
            skills: ['Node.js', 'Express.js', 'JWT Authentication'],
            estimatedTime: '3 Weeks'
          }
        ]
      },
      {
        id: 'stage-3',
        number: 3,
        title: 'Stage 3: Career Preparation',
        subtitle: 'Cloud Deployment, CI/CD & Production Capstones',
        description: 'Deploy full-stack applications with automated pipelines, environment variables, and monitor logs.',
        tasks: [
          {
            id: 'fs-301',
            title: 'Deploy Full-Stack App to Vercel / Render with Cloud Database',
            description: 'Configure production environment secrets, automated GitHub deployment triggers, and cloud databases (Supabase/Neon).',
            skills: ['Cloud Deployment', 'CI/CD Pipelines', 'Environment Config'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'fs-302',
            title: 'Build Multi-User Capstone Project (e.g., Campus Event Manager)',
            description: 'Architect a complete multi-user SaaS web app with roles, dashboard metrics, and interactive charts.',
            skills: ['Full-Stack Capstone', 'System Architecture', 'Portfolio Presentation'],
            estimatedTime: '3 Weeks'
          }
        ]
      }
    ]
  },
  'data-scientist': {
    careerId: 'data-scientist',
    title: 'Data Scientist Learning Roadmap',
    stages: [
      {
        id: 'stage-1',
        number: 1,
        title: 'Stage 1: Foundation',
        subtitle: 'Python, Probability, Statistics & Exploratory Data Analysis',
        description: 'Master mathematical foundations, inferential statistics, hypothesis testing, and Pandas.',
        tasks: [
          {
            id: 'ds-101',
            title: 'Python for Scientific Computing (NumPy & Pandas)',
            description: 'Vectorized mathematical operations, multi-dimensional array manipulation, and data wrangling.',
            skills: ['Python', 'NumPy', 'Pandas Dataframes'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'ds-102',
            title: 'Inferential Statistics & Hypothesis Testing',
            description: 'Probability distributions, central limit theorem, p-values, t-tests, and ANOVA testing.',
            skills: ['Probability', 'Inferential Statistics', 'Hypothesis Testing'],
            estimatedTime: '3 Weeks'
          }
        ]
      },
      {
        id: 'stage-2',
        number: 2,
        title: 'Stage 2: Practical Experience',
        subtitle: 'Supervised & Unsupervised Machine Learning Models',
        description: 'Train regression, classification, clustering models with Scikit-Learn and evaluate metrics.',
        tasks: [
          {
            id: 'ds-201',
            title: 'Supervised Machine Learning with Scikit-Learn',
            description: 'Implement Linear/Logistic Regression, Random Forests, Gradient Boosting (XGBoost), and cross-validation.',
            skills: ['Scikit-Learn', 'Ensemble Models', 'Cross-Validation'],
            estimatedTime: '4 Weeks'
          },
          {
            id: 'ds-202',
            title: 'Feature Engineering & Unsupervised Clustering',
            description: 'K-Means clustering, PCA dimensionality reduction, handling missing values, and scaling.',
            skills: ['Feature Engineering', 'PCA', 'K-Means Clustering'],
            estimatedTime: '3 Weeks'
          }
        ]
      },
      {
        id: 'stage-3',
        number: 3,
        title: 'Stage 3: Career Preparation',
        subtitle: 'Predictive Modeling Case Studies & Model Deployment',
        description: 'Package models as interactive Streamlit web apps and communicate predictive insights.',
        tasks: [
          {
            id: 'ds-301',
            title: 'Deploy Predictive Models via Streamlit / Flask API',
            description: 'Serialize trained models with joblib and build an interactive prediction portal for end users.',
            skills: ['Model Deployment', 'Streamlit', 'API Integration'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'ds-302',
            title: 'Publish End-to-End Data Science Case Studies with GitHub',
            description: 'Document problem framing, methodology, metric trade-offs (Precision vs Recall), and conclusions.',
            skills: ['Data Storytelling', 'Technical Documentation', 'GitHub Portfolios'],
            estimatedTime: '2 Weeks'
          }
        ]
      }
    ]
  },
  'cloud-engineer': {
    careerId: 'cloud-engineer',
    title: 'Cloud & DevOps Engineer Learning Roadmap',
    stages: [
      {
        id: 'stage-1',
        number: 1,
        title: 'Stage 1: Foundation',
        subtitle: 'Linux Administration, Networking & Shell Scripting',
        description: 'Understand command-line server administration, SSH, file permissions, and TCP/IP networking.',
        tasks: [
          {
            id: 'ce-101',
            title: 'Linux Operating System & Bash Scripting',
            description: 'Navigate terminal, manage users, configure systemd services, cron jobs, and write Bash automation scripts.',
            skills: ['Linux CLI', 'Bash Scripting', 'System Administration'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'ce-102',
            title: 'Computer Networking for Cloud Infrastructure',
            description: 'Master IP subnetting, CIDR notation, DNS resolution, HTTP/S, SSL certificates, and VPC routing.',
            skills: ['Networking (TCP/IP)', 'VPC Subnetting', 'DNS & SSL'],
            estimatedTime: '2 Weeks'
          }
        ]
      },
      {
        id: 'stage-2',
        number: 2,
        title: 'Stage 2: Practical Experience',
        subtitle: 'Cloud Platforms (AWS/Azure) & Docker Containers',
        description: 'Provision compute instances, object storage, serverless functions, and containerized microservices.',
        tasks: [
          {
            id: 'ce-201',
            title: 'Core AWS Cloud Services (EC2, S3, IAM, Lambda)',
            description: 'Configure security groups, IAM least-privilege policies, S3 static hosting, and event-driven Lambdas.',
            skills: ['AWS / Azure', 'IAM Security', 'EC2 & S3'],
            estimatedTime: '3 Weeks'
          },
          {
            id: 'ce-202',
            title: 'Docker Containerization & Multi-Container Apps',
            description: 'Write optimized multi-stage Dockerfiles and orchestrate multi-tier services using docker-compose.',
            skills: ['Docker', 'Container Optimization', 'Docker Compose'],
            estimatedTime: '2 Weeks'
          }
        ]
      },
      {
        id: 'stage-3',
        number: 3,
        title: 'Stage 3: Career Preparation',
        subtitle: 'Infrastructure as Code (Terraform) & CI/CD Pipelines',
        description: 'Automate infrastructure provisioning with code and build automated deployment pipelines.',
        tasks: [
          {
            id: 'ce-301',
            title: 'CI/CD Pipelines with GitHub Actions',
            description: 'Build automated lint, test, build, and deploy workflows triggered on git push.',
            skills: ['GitHub Actions', 'CI/CD Automation', 'Release Engineering'],
            estimatedTime: '2 Weeks'
          },
          {
            id: 'ce-302',
            title: 'Infrastructure as Code (IaC) with Terraform',
            description: 'Define and provision cloud resources declaratively with Terraform state files and modules.',
            skills: ['Terraform', 'Infrastructure as Code', 'Cloud Architecture'],
            estimatedTime: '3 Weeks'
          }
        ]
      }
    ]
  }
};

