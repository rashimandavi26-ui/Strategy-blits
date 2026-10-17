export const PROJECTS_CATALOG = [
  // --- C PROGRAMMING PROJECTS ---
  {
    id: 'c-proj-calc',
    careerId: 'software-developer',
    skillId: 'c-programming',
    name: 'Multi-Function Scientific Calculator in C',
    difficulty: 'Beginner',
    difficultyColor: '#16C4D9',
    objective: 'Build a modular command-line calculator performing arithmetic, exponentiation, trigonometric evaluations, and memory recall operations.',
    prerequisites: ['C Syntax', 'Conditions (switch-case)', 'Functions', 'Math Library (<math.h>)'],
    skillsRequired: ['C Programming', 'Control Flow', 'Modular Functions', 'Terminal I/O'],
    suggestedTools: ['GCC / Clang', 'VS Code', 'OnlineGDB'],
    milestones: [
      { id: 'm1', title: 'Set up menu loop with while(1) and exit command', done: false },
      { id: 'm2', title: 'Implement basic arithmetic operations (+, -, *, /) with zero-division validation', done: false },
      { id: 'm3', title: 'Add advanced math: power, square root, factorial using separate helper functions', done: false },
      { id: 'm4', title: 'Implement calculation memory store (M+, M-, Recall)', done: false }
    ],
    checklist: [
      'Handles division by zero gracefully without crashing',
      'Uses functions with clear return types for every operation',
      'Provides a clean, readable console menu with exit option'
    ],
    portfolioTips: 'Highlight defensive programming and clean modular function design in your GitHub README with terminal GIF demonstrations.'
  },
  {
    id: 'c-proj-quiz',
    careerId: 'software-developer',
    skillId: 'c-programming',
    name: 'Console Quiz Application with Timer in C',
    difficulty: 'Beginner to Intermediate',
    difficultyColor: '#16C4D9',
    objective: 'Create an interactive timed quiz game reading questions from a text file, calculating scores, and saving high scores to a leaderboard.',
    prerequisites: ['Arrays & Strings', 'File I/O (fopen, fgets)', 'Structures (struct)'],
    skillsRequired: ['C Programming', 'Structures', 'File Streams', 'Memory Allocation'],
    suggestedTools: ['GCC', 'C Standard Library', 'VS Code'],
    milestones: [
      { id: 'm1', title: 'Define struct Question { char q[200]; char options[4][50]; int answer; }', done: false },
      { id: 'm2', title: 'Read question bank dynamically from questions.txt', done: false },
      { id: 'm3', title: 'Implement randomized question order and user input checking', done: false },
      { id: 'm4', title: 'Save student name and score to leaderboard.txt and display top scores', done: false }
    ],
    checklist: [
      'Questions loaded from external text file using fopen and fgets',
      'Scores calculated and appended to persistent leaderboard file',
      'Input validation prevents crashes when non-numeric keys are pressed'
    ],
    portfolioTips: 'Emphasize your understanding of file streams and structured record persistence in C.'
  },
  {
    id: 'c-proj-student',
    careerId: 'software-developer',
    skillId: 'c-programming',
    name: 'Student Record Management System in C',
    difficulty: 'Intermediate',
    difficultyColor: '#FFC400',
    objective: 'Engineer a robust record management system to store, search, update, sort, and export college student academic records using structures and binary file I/O.',
    prerequisites: ['C Pointers', 'Structures & Arrays', 'Binary File Operations (fread, fwrite)'],
    skillsRequired: ['C Pointers', 'Data Structures', 'File Handling', 'CRUD Operations'],
    suggestedTools: ['GCC', 'Make / CMake', 'VS Code'],
    milestones: [
      { id: 'm1', title: 'Architect struct Student with Roll No, Name, Branch, and GPA', done: false },
      { id: 'm2', title: 'Implement Add, Display All, and Search by Roll Number functions', done: false },
      { id: 'm3', title: 'Add Update GPA and Delete Record functions using file rewrite', done: false },
      { id: 'm4', title: 'Implement sorting records by GPA using pointer-based bubble/selection sort', done: false }
    ],
    checklist: [
      'Full CRUD operations operational with binary file persistence',
      'Roll number uniqueness enforced on record addition',
      'Clean separation into student.h and student.c header/source files'
    ],
    portfolioTips: 'Document the binary file storage format and explain how struct memory alignment works in your technical documentation.'
  },

  // --- HTML & CSS PROJECTS ---
  {
    id: 'html-proj-portfolio',
    careerId: 'frontend-developer',
    skillId: 'html',
    name: 'Personal Developer Portfolio Website',
    difficulty: 'Beginner',
    difficultyColor: '#16C4D9',
    objective: 'Design and deploy a semantic, responsive, accessible personal developer portfolio with dark/light theme, project showcases, and live contact form.',
    prerequisites: ['HTML5 Semantics', 'CSS Flexbox & Grid', 'Responsive Media Queries'],
    skillsRequired: ['Semantic HTML', 'CSS Architecture', 'Accessibility (WCAG)', 'Git & Vercel / GitHub Pages'],
    suggestedTools: ['VS Code', 'GitHub Pages', 'Figma'],
    milestones: [
      { id: 'm1', title: 'Create semantic HTML skeleton (<header>, <nav>, <main>, <section>, <footer>)', done: false },
      { id: 'm2', title: 'Build responsive project grid using CSS Grid and cards with hover effects', done: false },
      { id: 'm3', title: 'Implement accessible contact form with labels and required validation', done: false },
      { id: 'm4', title: 'Deploy live to GitHub Pages or Vercel and verify 95+ Lighthouse score', done: false }
    ],
    checklist: [
      'Semantic tags used throughout with 0 W3C validation errors',
      'Fully responsive on smartphone, tablet, and desktop viewports',
      'Lighthouse accessibility score of 95+'
    ],
    portfolioTips: 'Add live URLs, Lighthouse audit screenshots, and link your resume PDF directly in the header.'
  },
  {
    id: 'html-proj-event',
    careerId: 'frontend-developer',
    skillId: 'html',
    name: 'College Technical Fest Event Webpage',
    difficulty: 'Beginner',
    difficultyColor: '#16C4D9',
    objective: 'Build an engaging event landing page for a college hackathon featuring agenda timelines, speaker cards, registration form, and venue map.',
    prerequisites: ['HTML5', 'CSS Flexbox', 'CSS Table/Lists'],
    skillsRequired: ['Semantic Markup', 'CSS Styling', 'Form Design', 'Event Timelines'],
    suggestedTools: ['VS Code', 'Google Fonts', 'Unsplash'],
    milestones: [
      { id: 'm1', title: 'Hero banner with event dates, countdown mockup, and registration CTA', done: false },
      { id: 'm2', title: 'Hackathon schedule timeline using ordered lists and flex alignment', done: false },
      { id: 'm3', title: 'Speaker card grid with photos, bio, and social media icons', done: false },
      { id: 'm4', title: 'Team registration form with member details and track preferences', done: false }
    ],
    checklist: [
      'Attractive responsive layout with high-contrast text',
      'Accessible form controls with clear visual focus states',
      'Embeds interactive Google Maps iframe or college campus graphic'
    ],
    portfolioTips: 'Showcase this project as proof of your ability to build production landing pages for student organizations.'
  },
  {
    id: 'html-proj-landing',
    careerId: 'frontend-developer',
    skillId: 'css',
    name: 'Responsive SaaS Product Landing Page',
    difficulty: 'Beginner to Intermediate',
    difficultyColor: '#16C4D9',
    objective: 'Craft a modern high-converting SaaS landing page with sticky navigation, feature grid, interactive pricing tiers toggle, and FAQ accordion.',
    prerequisites: ['HTML5', 'Modern CSS', 'CSS Variables', 'Flexbox & Grid'],
    skillsRequired: ['Responsive Layouts', 'CSS Animation', 'Design Systems', 'Mobile-First CSS'],
    suggestedTools: ['VS Code', 'Chrome DevTools'],
    milestones: [
      { id: 'm1', title: 'Sticky header with logo, navigation links, and "Get Started" button', done: false },
      { id: 'm2', title: 'Feature highlights section using 3-column CSS Grid with subtle glow borders', done: false },
      { id: 'm3', title: 'Pricing tier comparison cards with highlighted "Most Popular" badge', done: false },
      { id: 'm4', title: 'FAQ section using native HTML <details> and <summary> tags', done: false }
    ],
    checklist: [
      'Uses CSS custom properties (variables) for consistent colors and radii',
      'Mobile drawer menu opens smoothly without horizontal scrollbars',
      'Optimized images with explicit width/height to avoid layout shift (CLS)'
    ],
    portfolioTips: 'Detail your CSS architecture and mobile-first responsive strategy in your case study.'
  },

  // --- JAVA PROJECTS ---
  {
    id: 'java-proj-student',
    careerId: 'backend-developer',
    skillId: 'java-programming',
    name: 'Student Information & Grade Management System',
    difficulty: 'Intermediate',
    difficultyColor: '#FFC400',
    objective: 'Develop an Object-Oriented Java application to manage university student enrollments, calculate GPAs, track course credits, and generate formatted transcripts.',
    prerequisites: ['Java OOP (Encapsulation, Inheritance)', 'Java Collections Framework', 'File I/O or SQLite'],
    skillsRequired: ['Java', 'OOP Design', 'ArrayList / HashMap', 'Exception Handling'],
    suggestedTools: ['IntelliJ IDEA / Eclipse', 'Java 17/21', 'Maven'],
    milestones: [
      { id: 'm1', title: 'Design Student, Course, and GradeRecord entity classes', done: false },
      { id: 'm2', title: 'Build StudentService class implementing CRUD with HashMap<String, Student>', done: false },
      { id: 'm3', title: 'Implement GPA calculation method and Dean\'s Honor List filter', done: false },
      { id: 'm4', title: 'Add CSV export and import for student transcripts with custom exceptions', done: false }
    ],
    checklist: [
      'Strict encapsulation with private fields, validation in setters',
      'Custom exceptions (e.g., StudentNotFoundException, InvalidGradeException)',
      'Clean CLI menu interface with seamless navigation'
    ],
    portfolioTips: 'Discuss how you applied SOLID principles and exception handling hierarchies in Java.'
  },
  {
    id: 'java-proj-library',
    careerId: 'backend-developer',
    skillId: 'java-programming',
    name: 'Digital Library Management Application in Java',
    difficulty: 'Intermediate',
    difficultyColor: '#FFC400',
    objective: 'Create a library catalog system tracking book checkouts, due dates, late penalty fees, and member borrowing limits with polymorphic user roles.',
    prerequisites: ['Java Inheritance & Interfaces', 'Java Collections', 'LocalDate Date/Time API'],
    skillsRequired: ['Polymorphism', 'Interfaces', 'Java Time API', 'Collections (Map/Set)'],
    suggestedTools: ['IntelliJ IDEA', 'JDK 21', 'Git'],
    milestones: [
      { id: 'm1', title: 'Create Borrowable interface and Book, Magazine, Journal classes', done: false },
      { id: 'm2', title: 'Implement Member hierarchy: StudentMember and FacultyMember with distinct borrowing rules', done: false },
      { id: 'm3', title: 'Compute overdue fees using java.time.ChronoUnit.DAYS.between()', done: false },
      { id: 'm4', title: 'Generate weekly report of overdue items and outstanding fines', done: false }
    ],
    checklist: [
      'Demonstrates dynamic polymorphism and interface contracts',
      'Handles date calculations accurately with java.time APIs',
      'Unit tests written with JUnit 5 covering checkout validations'
    ],
    portfolioTips: 'Write a comprehensive README with class diagrams illustrating interface segregation.'
  },
  {
    id: 'java-proj-expense',
    careerId: 'backend-developer',
    skillId: 'java-programming',
    name: 'Personal Expense & Budget Tracker in Java',
    difficulty: 'Intermediate',
    difficultyColor: '#FFC400',
    objective: 'Build an expense tracking CLI or GUI application that records income and expenditures by category, calculates monthly balances, and warns when category limits are exceeded.',
    prerequisites: ['Java OOP', 'Collections', 'Streams API', 'File Persistence (JSON or CSV)'],
    skillsRequired: ['Java Streams & Lambdas', 'Data Filtering', 'File I/O', 'OOP Architecture'],
    suggestedTools: ['IntelliJ IDEA', 'Jackson / Gson library', 'Git'],
    milestones: [
      { id: 'm1', title: 'Create Expense model with amount, Category enum, date, and notes', done: false },
      { id: 'm2', title: 'Use Java Streams to aggregate spending by category and month', done: false },
      { id: 'm3', title: 'Implement budget threshold alerts when spending exceeds 90% of limit', done: false },
      { id: 'm4', title: 'Persist expenses into a local JSON or CSV file upon application exit', done: false }
    ],
    checklist: [
      'Extensive use of Java Stream operations (.filter(), .collect(), .mapToDouble())',
      'Budget warnings triggered dynamically based on categorized totals',
      'Clean persistent storage between application launches'
    ],
    portfolioTips: 'Highlight your proficiency with modern Java 8+ functional streams and data pipelines.'
  },

  // --- DSA PROJECTS ---
  {
    id: 'dsa-proj-sorting',
    careerId: 'software-developer',
    skillId: 'dsa',
    name: 'Interactive Sorting Algorithm Visualizer',
    difficulty: 'Intermediate',
    difficultyColor: '#FFC400',
    objective: 'Build an interactive web visualizer demonstrating Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort in real time with step-by-step bar animations and comparison counters.',
    prerequisites: ['DSA Sorting Algorithms', 'JavaScript / DOM manipulation or React', 'Asynchronous timing (setTimeout / Promises)'],
    skillsRequired: ['Sorting Algorithms', 'Big-O Complexity', 'Async JavaScript', 'UI Animation'],
    suggestedTools: ['React', 'HTML5 Canvas / CSS Flexbox', 'Vite'],
    milestones: [
      { id: 'm1', title: 'Generate randomized array of bars with adjustable size slider (10 to 100 bars)', done: false },
      { id: 'm2', title: 'Implement asynchronous Bubble and Selection Sort with color highlights for compared bars', done: false },
      { id: 'm3', title: 'Implement recursive Merge Sort and Quick Sort animation with state stack', done: false },
      { id: 'm4', title: 'Add real-time comparison counter, array accesses counter, and speed controller', done: false }
    ],
    checklist: [
      'Visualizes at least 4 sorting algorithms with accurate algorithmic steps',
      'Speed and array size can be manipulated interactively by the user',
      'Displays Big-O time and space complexity notes for the selected algorithm'
    ],
    portfolioTips: 'Record a 30-second screen capture showing Quick Sort in action and pin it to your GitHub profile.'
  },
  {
    id: 'dsa-proj-search',
    careerId: 'software-developer',
    skillId: 'dsa',
    name: 'Search Algorithm Visualizer (Linear vs Binary Search)',
    difficulty: 'Beginner to Intermediate',
    difficultyColor: '#16C4D9',
    objective: 'Construct a visual tool that compares Linear Search O(N) and Binary Search O(log N) side-by-side on sorted datasets, showcasing the dramatic efficiency gap.',
    prerequisites: ['Searching Algorithms', 'Binary Search', 'JavaScript / React'],
    skillsRequired: ['Searching Logic', 'Complexity Demonstration', 'Interactive UI', 'State Management'],
    suggestedTools: ['React', 'CSS Transitions', 'Vite'],
    milestones: [
      { id: 'm1', title: 'Render sorted array of numbers with search target input box', done: false },
      { id: 'm2', title: 'Animate Linear Search scanning left-to-right element by element', done: false },
      { id: 'm3', title: 'Animate Binary Search showing low, mid, and high pointers halving the space', done: false },
      { id: 'm4', title: 'Display side-by-side step comparison metric (e.g., 68 steps vs 6 steps)', done: false }
    ],
    checklist: [
      'Both algorithms visually track inspected elements with distinct colors',
      'Directly displays step count metrics proving logarithmic speed',
      'Gracefully handles elements that are not present in the array'
    ],
    portfolioTips: 'Explain how binary search illustrates the power of logarithmic growth in your documentation.'
  },
  {
    id: 'dsa-proj-contact',
    careerId: 'software-developer',
    skillId: 'dsa',
    name: 'Fast Contact Search System using Trie & Hash Map',
    difficulty: 'Intermediate to Advanced',
    difficultyColor: '#FFC400',
    objective: 'Implement an auto-complete contact directory capable of instant prefix lookups (e.g., typing "Al" returns "Alex", "Alice", "Alan") in O(L) time using a Prefix Tree (Trie).',
    prerequisites: ['Trie Data Structure', 'Hash Tables', 'String Processing'],
    skillsRequired: ['Trie (Prefix Tree)', 'HashMap', 'Prefix Matching', 'Algorithmic Optimization'],
    suggestedTools: ['Java / C++ / TypeScript', 'VS Code'],
    milestones: [
      { id: 'm1', title: 'Define TrieNode class with children array/map and isEndOfWord flag', done: false },
      { id: 'm2', title: 'Implement insertContact(name, phone) and search(name)', done: false },
      { id: 'm3', title: 'Implement getSuggestions(prefix) returning all matching contact records', done: false },
      { id: 'm4', title: 'Benchmark lookup speed compared to linear array search over 10,000 contacts', done: false }
    ],
    checklist: [
      'Trie insert and lookup operations complete in O(word length) time',
      'Prefix search returns sorted top matches smoothly',
      'Handles edge cases: empty prefix, non-existent contacts, case insensitivity'
    ],
    portfolioTips: 'Benchmark results make a standout talking point in technical engineering interviews.'
  },

  // --- DATA ANALYTICS PROJECTS ---
  {
    id: 'data-proj-student',
    careerId: 'data-analyst',
    skillId: 'data-analytics',
    name: 'Student Academic Performance Analytics Dashboard',
    difficulty: 'Beginner to Intermediate',
    difficultyColor: '#16C4D9',
    objective: 'Analyze university exam datasets to identify factors influencing student GPA (study hours, attendance rate, midterm scores) and build an interactive dashboard.',
    prerequisites: ['Python / Pandas', 'SQL Aggregations', 'Data Visualization (Power BI / Plotly)'],
    skillsRequired: ['Pandas Data Cleaning', 'Correlation Analysis', 'Dashboarding', 'Data Storytelling'],
    suggestedTools: ['Python', 'Pandas', 'Power BI / Streamlit', 'Jupyter Notebook'],
    milestones: [
      { id: 'm1', title: 'Clean raw student CSV dataset: handle missing values and normalize scales', done: false },
      { id: 'm2', title: 'Compute Pearson correlation matrix between study hours and exam outcomes', done: false },
      { id: 'm3', title: 'Identify at-risk student cohort based on attendance below 75%', done: false },
      { id: 'm4', title: 'Build interactive Streamlit or Power BI dashboard with department filter dropdowns', done: false }
    ],
    checklist: [
      'Documented EDA notebook with exploratory charts and statistical insights',
      'Interactive visual dashboard with functional KPI metric cards',
      'Clear executive summary with 3 actionable recommendations for academic advisors'
    ],
    portfolioTips: 'Focus on business/academic impact: explain how early risk detection improves student retention rates.'
  },
  {
    id: 'data-proj-attendance',
    careerId: 'data-analyst',
    skillId: 'data-analytics',
    name: 'Campus Attendance & Timetable Trend Analysis',
    difficulty: 'Beginner',
    difficultyColor: '#16C4D9',
    objective: 'Analyze biometric and digital attendance records to uncover day-of-week absentee trends, morning vs afternoon fatigue, and optimal class scheduling.',
    prerequisites: ['SQL', 'Excel / Pandas', 'Chart Generation'],
    skillsRequired: ['SQL Queries', 'Time-Series Aggregation', 'Visual Storytelling', 'Excel Pivot Tables'],
    suggestedTools: ['SQL / SQLite', 'Python / Excel', 'Tableau Public'],
    milestones: [
      { id: 'm1', title: 'Aggregate daily attendance logs across departments using SQL GROUP BY', done: false },
      { id: 'm2', title: 'Calculate moving averages and identify weekly absentee spikes (e.g. Fridays/Mondays)', done: false },
      { id: 'm3', title: 'Correlate class start times (8 AM vs 10 AM) with tardiness rates', done: false },
      { id: 'm4', title: 'Publish interactive Tableau or web report with actionable timetable insights', done: false }
    ],
    checklist: [
      'SQL scripts clean, commented, and reproducible',
      'Visualizations include clear labels, annotations, and trends',
      'Delivers clear schedule recommendations to university management'
    ],
    portfolioTips: 'Great showcase for students demonstrating real analytical problem solving for university administrators.'
  },

  // --- WEB DEVELOPMENT PROJECTS ---
  {
    id: 'web-proj-todo',
    careerId: 'full-stack-developer',
    skillId: 'web-development',
    name: 'Smart Productivity & Task Manager (To-Do List)',
    difficulty: 'Beginner',
    difficultyColor: '#16C4D9',
    objective: 'Build a responsive task management app with category tags, due date notifications, local persistence, priority filtering, and search.',
    prerequisites: ['HTML, CSS, JavaScript', 'DOM APIs / React State', 'localStorage API'],
    skillsRequired: ['React / Vanilla JS', 'State Management', 'Local Storage', 'Responsive UI'],
    suggestedTools: ['React', 'Vite', 'Lucide Icons'],
    milestones: [
      { id: 'm1', title: 'CRUD task state management (Create, Read, Update, Delete)', done: false },
      { id: 'm2', title: 'Persist all tasks to browser localStorage with auto-reload', done: false },
      { id: 'm3', title: 'Add priority filter buttons (All, Active, Completed, High Priority)', done: false },
      { id: 'm4', title: 'Add progress completion ring and celebratory confetti animation on finishing all tasks', done: false }
    ],
    checklist: [
      'Tasks persist across browser refreshes and tab closures',
      'Accessible keyboard controls for adding and checking tasks',
      'Smooth animations on task completion and deletion'
    ],
    portfolioTips: 'Demonstrate clean component state architecture and zero external runtime dependencies.'
  },
  {
    id: 'web-proj-weather',
    careerId: 'full-stack-developer',
    skillId: 'web-development',
    name: 'Live Weather Dashboard with 5-Day Forecast',
    difficulty: 'Beginner to Intermediate',
    difficultyColor: '#16C4D9',
    objective: 'Build a real-time weather forecasting application that consumes the OpenWeatherMap API, displays dynamic climate icons, and geolocates the user.',
    prerequisites: ['JavaScript Fetch API / Axios', 'Async/Await', 'JSON Parsing', 'Responsive CSS'],
    skillsRequired: ['REST APIs', 'Async/Await', 'Error Handling', 'Geolocation API'],
    suggestedTools: ['React / Vite', 'OpenWeatherMap API', 'Lucide Icons'],
    milestones: [
      { id: 'm1', title: 'Set up free API key and create asynchronous fetchWeather(city) function', done: false },
      { id: 'm2', title: 'Render current temperature, humidity, wind speed, and dynamic weather icon', done: false },
      { id: 'm3', title: 'Add 5-day daily forecast cards with minimum and maximum temperatures', done: false },
      { id: 'm4', title: 'Add browser geolocation auto-detection and "city not found" error banners', done: false }
    ],
    checklist: [
      'Handles network errors and invalid city names gracefully',
      'Loading skeleton screens rendered while API response is in flight',
      'Temperature toggle between Celsius (°C) and Fahrenheit (°F)'
    ],
    portfolioTips: 'Explain API rate limiting, debouncing search inputs, and environment variable protection.'
  }
];

export const PROJECTS = PROJECTS_CATALOG.reduce((acc, proj) => {
  if (!acc[proj.careerId]) {
    acc[proj.careerId] = [];
  }
  acc[proj.careerId].push(proj);
  return acc;
}, {});
