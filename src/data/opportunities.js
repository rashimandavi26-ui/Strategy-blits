export const OPPORTUNITIES_DATA = {
  disclaimer: 'Notice: In compliance with hackathon prototype guidelines, all resources, platforms, and hackathons listed below represent curated recommendations and sample demonstration data. No live job postings or fabricated deadlines are presented. Links direct to official platforms.',
  categories: [
    {
      id: 'learning-resources',
      name: 'Learning Resources',
      badge: 'Free & Accredited',
      icon: 'GraduationCap',
      description: 'World-class open courseware, interactive tutorials, and developer documentation to build rock-solid foundations.',
      items: [
        {
          title: 'freeCodeCamp',
          type: 'Interactive Platform',
          cost: '100% Free',
          url: 'https://www.freecodecamp.org',
          description: 'Comprehensive, project-based curriculum covering Responsive Web Design, JavaScript, Back End, and Machine Learning with certifications.',
          tags: ['Coding', 'Projects', 'Certifications']
        },
        {
          title: 'Coursera',
          type: 'University Courses',
          cost: 'Free Audit / Financial Aid Available',
          url: 'https://www.coursera.org',
          description: 'Professional certificates and university courses from Stanford, Google, IBM, DeepLearning.AI, and Meta across Tech & Business.',
          tags: ['University Degrees', 'Industry Certificates', 'AI & Data']
        },
        {
          title: 'MIT OpenCourseWare (OCW)',
          type: 'Academic Lectures',
          cost: '100% Free',
          url: 'https://ocw.mit.edu',
          description: 'Freely available lecture notes, assignments, and exam archives directly from MIT Computer Science & Electrical Engineering departments.',
          tags: ['Deep CS Theory', 'Algorithms', 'Linear Algebra']
        },
        {
          title: 'MDN Web Docs',
          type: 'Official Documentation',
          cost: '100% Free',
          url: 'https://developer.mozilla.org',
          description: 'The definitive open-source documentation and learning pathway for HTML5, CSS3, JavaScript, Web APIs, and accessibility guidelines.',
          tags: ['Web Standards', 'Reference', 'Beginner Guides']
        },
        {
          title: 'Kaggle Learn',
          type: 'Hands-on Micro-Courses',
          cost: '100% Free',
          url: 'https://www.kaggle.com/learn',
          description: 'Bite-sized, interactive Python notebooks teaching Machine Learning, Data Cleaning, SQL, Feature Engineering, and Deep Learning.',
          tags: ['Data Science', 'Machine Learning', 'Jupyter']
        }
      ]
    },
    {
      id: 'internship-prep',
      name: 'Internship Preparation',
      badge: 'Technical Practice',
      icon: 'Briefcase',
      description: 'Practice platforms, coding interview challenges, and open-source contribution hubs to become internship-ready.',
      items: [
        {
          title: 'LeetCode',
          type: 'Coding Interview Prep',
          cost: 'Free Tier Available',
          url: 'https://leetcode.com',
          description: 'Industry-standard coding platform featuring top interview question collections, company-tagged questions, and weekly contests.',
          tags: ['Data Structures', 'Algorithms', 'FAANG Prep']
        },
        {
          title: 'NeetCode.io',
          type: 'Curated Problem Roadmaps',
          cost: '100% Free',
          url: 'https://neetcode.io',
          description: 'Structured algorithmic roadmaps (Blind 75 & NeetCode 150) with clean video explanations and code templates in multiple languages.',
          tags: ['Roadmaps', 'Pattern Recognition', 'Video Walkthroughs']
        },
        {
          title: 'GitHub Student Developer Pack',
          type: 'Student Benefits',
          cost: '100% Free for Students',
          url: 'https://education.github.com/pack',
          description: 'Free developer tools including GitHub Pro, cloud credits (Azure/DigitalOcean), JetBrains IDE licenses, domain names, and developer tools.',
          tags: ['Cloud Credits', 'Developer Tools', 'Free Software']
        },
        {
          title: 'Up For Grabs',
          type: 'Open Source Onboarding',
          cost: '100% Free',
          url: 'https://up-for-grabs.net',
          description: 'Curated directory of open-source projects with issues labeled specifically for new contributors looking to make their first pull request.',
          tags: ['Open Source', 'First PR', 'Community']
        }
      ]
    },
    {
      id: 'hackathons',
      name: 'Hackathons & Competitions',
      badge: 'Build & Win',
      icon: 'Trophy',
      description: 'Premier hackathon platforms where college students build real-world prototypes, network with mentors, and win prizes.',
      items: [
        {
          title: 'Devpost',
          type: 'Global Hackathon Hub',
          cost: 'Free Participation',
          url: 'https://devpost.com',
          description: 'The world’s largest hackathon network hosting collegiate, virtual, and global tech hackathons across AI, Web3, and social impact.',
          tags: ['Hackathons', 'Project Showcase', 'Prizes']
        },
        {
          title: 'Major League Hacking (MLH)',
          type: 'Official Student Hackathon League',
          cost: 'Free for Students',
          url: 'https://mlh.io',
          description: 'Global community empowering student developers with official collegiate hackathon seasons, workshops, and fellowship programs.',
          tags: ['Student League', 'Mentorship', 'Workshops']
        },
        {
          title: 'Unstop (Formerly Dare2Compete)',
          type: 'Student Challenges & Competitions',
          cost: 'Free Registration',
          url: 'https://unstop.com',
          description: 'Leading platform for college students to discover hackathons, case competitions, coding contests, and campus hiring challenges.',
          tags: ['Case Competitions', 'Campus Hiring', 'Hackathons']
        },
        {
          title: 'Kaggle Competitions',
          type: 'Data Science Contests',
          cost: 'Free to Compete',
          url: 'https://www.kaggle.com/competitions',
          description: 'Benchmark your machine learning and analytics skills on real enterprise datasets with public leaderboards and global cash prizes.',
          tags: ['ML Competitions', 'Leaderboards', 'Data Modeling']
        }
      ]
    },
    {
      id: 'portfolio-dev',
      name: 'Portfolio Development',
      badge: 'Showcase Work',
      icon: 'FolderGit2',
      description: 'Hosting, deployment, and visual presentation platforms to display your projects to recruiters.',
      items: [
        {
          title: 'Vercel',
          type: 'Frontend Cloud & Hosting',
          cost: 'Hobby Tier Free',
          url: 'https://vercel.com',
          description: 'Zero-configuration cloud platform for deploying modern web apps, static sites, and serverless functions directly from GitHub.',
          tags: ['React Deployment', 'Instant CI/CD', 'Custom Domains']
        },
        {
          title: 'GitHub Pages',
          type: 'Static Site Hosting',
          cost: '100% Free',
          url: 'https://pages.github.com',
          description: 'Host personal websites, portfolio pages, and documentation directly from your public GitHub repositories with custom URLs.',
          tags: ['Free Hosting', 'Git Integration', 'Open Source']
        },
        {
          title: 'Behance & Dribbble',
          type: 'Design Community Showcases',
          cost: 'Free Profiles',
          url: 'https://www.behance.net',
          description: 'Leading visual discovery platforms for UI/UX designers, graphic artists, and product creators to publish full case studies.',
          tags: ['UI/UX Case Studies', 'Design Portfolios', 'Creative Inspo']
        },
        {
          title: 'Figma Community',
          type: 'Design Systems & Templates',
          cost: 'Free Community Files',
          url: 'https://www.figma.com/community',
          description: 'Explore thousands of free wireframes, design systems, UI kits, and mockups shared by leading product designers worldwide.',
          tags: ['Design Kits', 'Figma Files', 'UI Templates']
        }
      ]
    },
    {
      id: 'career-prep',
      name: 'Career Preparation & Networking',
      badge: 'Recruiter Ready',
      icon: 'Award',
      description: 'Tools and guides for resume optimization, behavioral interview storytelling, and professional networking.',
      items: [
        {
          title: 'Tech Interview Handbook',
          type: 'Open Source Guide',
          cost: '100% Free',
          url: 'https://www.techinterviewhandbook.org',
          description: 'Curated guide covering software engineering resumes, behavioral STAR techniques, negotiation strategies, and coding checklists.',
          tags: ['STAR Method', 'Resume Guide', 'Negotiation']
        },
        {
          title: 'Resume Worded',
          type: 'AI Resume Feedback',
          cost: 'Free Score Analysis',
          url: 'https://resumeworded.com',
          description: 'Instant feedback on your technical resume and LinkedIn profile with targeted metrics, action verbs, and ATS compatibility checks.',
          tags: ['ATS Scanner', 'Bullet Points', 'LinkedIn Review']
        },
        {
          title: 'Levels.fyi',
          type: 'Compensation & Career Levels',
          cost: '100% Free Transparency',
          url: 'https://www.levels.fyi',
          description: 'Transparent salary bands, total compensation breakdowns, level comparisons, and interview guides across tech companies.',
          tags: ['Salary Data', 'Company Tiers', 'Benefits']
        }
      ]
    }
  ]
};
