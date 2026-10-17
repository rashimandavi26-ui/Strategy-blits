/**
 * Verified Free Educational Resources and Deep Step-by-Step Roadmaps
 * Contains comprehensive modules for C Programming, HTML, Java, DSA,
 * Python, CSS, JavaScript, and SQL.
 */

export const SKILL_ROADMAPS = {
  // ==========================================
  // 1. C PROGRAMMING (All 9 Modules)
  // ==========================================
  'c-programming': {
    skillId: 'c-programming',
    title: 'C Programming Mastery Pathway',
    tagline: 'From First "Hello, World!" to Memory Pointers & File Handling',
    overview: 'C provides the foundation for computer architecture, operating systems, and high-performance algorithms. This roadmap takes you from zero programming experience through structured memory manipulation.',
    modules: [
      {
        id: 'c-mod-1',
        number: 1,
        title: 'Getting Started with C',
        estimatedHours: 3,
        topics: [
          'What programming and compilation are',
          'Installing GCC / using online compilers (Programiz / OnlineGDB)',
          'Writing your first C program',
          'Understanding main(), #include <stdio.h>, and return 0',
          'Printing formatted output with printf()'
        ],
        resources: [
          {
            name: 'Programiz - C Introduction & Hello World',
            url: 'https://www.programiz.com/c-programming/c-introduction',
            platform: 'Programiz',
            type: 'Interactive Tutorial'
          },
          {
            name: 'W3Schools - C Get Started & Syntax',
            url: 'https://www.w3schools.com/c/c_syntax.php',
            platform: 'W3Schools',
            type: 'Interactive Guide'
          },
          {
            name: 'GeeksforGeeks - C Language Basics',
            url: 'https://www.geeksforgeeks.org/c-language-introduction/',
            platform: 'GeeksforGeeks',
            type: 'Reference Guide'
          },
          {
            name: 'CS50 Lecture 1 - C Programming',
            url: 'https://cs50.harvard.edu/x/weeks/1/',
            platform: 'Harvard CS50',
            type: 'Free Course Lecture'
          }
        ],
        methodology: [
          '1. Read the explanation of basic C program structure on Programiz or W3Schools.',
          '2. Open an editor (VS Code or online compiler like OnlineGDB) and write the code manually without copy-pasting.',
          '3. Compile and execute the program to observe the terminal output.',
          '4. Experiment: Change messages and test newline characters (\\n).',
          '5. Review any syntax errors produced by missing semicolons.',
          '6. Complete the practice task below.'
        ],
        practice: {
          title: 'Student Bio Card Program',
          task: 'Write a C program that outputs your Full Name, College Name, Degree, and Branch on four separate lines using printf() and proper escape sequences.',
          expectedOutput: 'Name: Alex Chen\nCollege: State Tech University\nDegree: B.Tech\nBranch: Computer Science'
        },
        criteria: 'You can independently write, compile, and run a valid C program with #include, main(), printf(), and semicolons with zero compiler errors.'
      },
      {
        id: 'c-mod-2',
        number: 2,
        title: 'Variables and Data Types',
        estimatedHours: 4,
        topics: [
          'What variables and memory cells are',
          'Fundamental data types: int, float, double, char',
          'Constants and format specifiers (%d, %f, %lf, %c)',
          'Reading user input from keyboard with scanf()',
          'Memory address operator (&)'
        ],
        resources: [
          {
            name: 'Programiz - C Variables, Constants and Literals',
            url: 'https://www.programiz.com/c-programming/c-variables-constants',
            platform: 'Programiz',
            type: 'Tutorial'
          },
          {
            name: 'W3Schools - C Data Types & User Input',
            url: 'https://www.w3schools.com/c/c_user_input.php',
            platform: 'W3Schools',
            type: 'Interactive Examples'
          },
          {
            name: 'GeeksforGeeks - Data Types in C',
            url: 'https://www.geeksforgeeks.org/data-types-in-c/',
            platform: 'GeeksforGeeks',
            type: 'Documentation'
          }
        ],
        methodology: [
          '1. Study how integer, floating point, and character types consume different bytes of memory.',
          '2. Type out a short program declaring variables of each type.',
          '3. Use scanf() to receive an integer and float from terminal input.',
          '4. Solve the common pitfall: remember to put the "&" before the variable in scanf().',
          '5. Print out calculated values using format specifiers like %.2f for two decimal precision.'
        ],
        practice: {
          title: 'Simple Arithmetic Calculator',
          task: 'Prompt the user to enter two numbers using scanf(). Compute and print their sum, difference, product, and floating-point division result.',
          expectedOutput: 'Enter two numbers: 10 4\nSum = 14\nDifference = 6\nProduct = 40\nDivision = 2.50'
        },
        criteria: 'You understand when to use int vs float vs double vs char, and can safely read input with scanf() using correct format specifiers and address-of (&).'
      },
      {
        id: 'c-mod-3',
        number: 3,
        title: 'Operators and Conditions',
        estimatedHours: 4,
        topics: [
          'Arithmetic operators (+, -, *, /, %)',
          'Relational and comparison operators (==, !=, >, <, >=, <=)',
          'Logical operators (&&, ||, !)',
          'Conditional statements: if, else-if, and else',
          'Nested conditions and switch-case statements with break'
        ],
        resources: [
          {
            name: 'Programiz - C if...else Statement',
            url: 'https://www.programiz.com/c-programming/c-if-else-statement',
            platform: 'Programiz',
            type: 'Tutorial'
          },
          {
            name: 'W3Schools - C Conditions and Switch',
            url: 'https://www.w3schools.com/c/c_switch.php',
            platform: 'W3Schools',
            type: 'Interactive Guide'
          },
          {
            name: 'GeeksforGeeks - Decision Making in C',
            url: 'https://www.geeksforgeeks.org/decision-making-c-c-else-nested-else/',
            platform: 'GeeksforGeeks',
            type: 'Reference'
          }
        ],
        methodology: [
          '1. Review truth tables for boolean logical AND (&&) and OR (||).',
          '2. Implement an if-else condition checking whether an entered number is positive, negative, or zero.',
          '3. Test edge conditions (boundary values like 0, negative integers).',
          '4. Implement a switch-case construct, paying close attention to "break" statements to avoid fall-through.'
        ],
        practice: {
          title: 'Multi-Operation Menu Calculator',
          task: 'Build a program where user inputs two numbers and an operator (+, -, *, /) or menu choice (1-4). Use switch-case to execute the corresponding calculation and handle division-by-zero safely.',
          expectedOutput: 'Enter operator (+, -, *, /): /\nEnter two numbers: 15 3\nResult = 5.00'
        },
        criteria: 'You can write nested conditions, handle edge cases (like dividing by zero), and construct robust switch-case statements with default fallbacks.'
      },
      {
        id: 'c-mod-4',
        number: 4,
        title: 'Loops and Iteration',
        estimatedHours: 5,
        topics: [
          'Iteration concepts: why loops exist',
          'for loops: initialization, condition, and increment/decrement',
          'while loops: condition-checked repetition',
          'do-while loops: guaranteed first execution',
          'Loop controls: break and continue',
          'Nested loops for multi-dimensional patterns'
        ],
        resources: [
          {
            name: 'Programiz - C for and while Loops',
            url: 'https://www.programiz.com/c-programming/c-for-loop',
            platform: 'Programiz',
            type: 'Tutorial'
          },
          {
            name: 'W3Schools - C While & For Loop',
            url: 'https://www.w3schools.com/c/c_for_loop.php',
            platform: 'W3Schools',
            type: 'Interactive'
          },
          {
            name: 'GeeksforGeeks - Loops in C',
            url: 'https://www.geeksforgeeks.org/loops-in-c-and-cpp/',
            platform: 'GeeksforGeeks',
            type: 'Reference'
          }
        ],
        methodology: [
          '1. Trace loop iterations on paper with pen: track loop variable values at each step.',
          '2. Code a standard for-loop printing numbers 1 to N.',
          '3. Convert the for-loop to a while-loop to understand the structural difference.',
          '4. Create a nested loop where the outer loop controls rows and inner loop controls columns.',
          '5. Test break and continue to see immediate effects on iteration flow.'
        ],
        practice: {
          title: 'Multiplication Tables & Number Pattern Generator',
          task: 'Write a program that takes an integer N and generates its multiplication table up to 10. Then, using nested loops, print a right-angled triangle pattern of numbers up to row N.',
          expectedOutput: 'Pattern for N=4:\n1\n1 2\n1 2 3\n1 2 3 4'
        },
        criteria: 'You can predict loop termination, prevent infinite loops, choose between for and while appropriately, and print 2D coordinate/number patterns with nested loops.'
      },
      {
        id: 'c-mod-5',
        number: 5,
        title: 'Functions and Modularity',
        estimatedHours: 5,
        topics: [
          'Function prototypes and declarations',
          'Function definitions and bodies',
          'Parameters, arguments, and return types',
          'Variable scope: local vs global variables',
          'Pass-by-value mechanisms',
          'Introduction to recursion (base cases & recursive calls)'
        ],
        resources: [
          {
            name: 'Programiz - C Functions Tutorial',
            url: 'https://www.programiz.com/c-programming/c-functions',
            platform: 'Programiz',
            type: 'Tutorial'
          },
          {
            name: 'W3Schools - C Functions & Parameters',
            url: 'https://www.w3schools.com/c/c_functions.php',
            platform: 'W3Schools',
            type: 'Interactive Guide'
          },
          {
            name: 'GeeksforGeeks - Functions in C',
            url: 'https://www.geeksforgeeks.org/functions-in-c/',
            platform: 'GeeksforGeeks',
            type: 'Reference'
          }
        ],
        methodology: [
          '1. Break a large monolithic main() function into separate modular helper functions.',
          '2. Practice declaring the function prototype before main() and defining it after main().',
          '3. Test passing arguments and receiving return values.',
          '4. Code a classic recursive function (e.g. factorial or Fibonacci) and identify its essential base case.'
        ],
        practice: {
          title: 'Modular Math Library with Recursion',
          task: 'Create individual functions for add(), multiply(), power(base, exp), and recursive factorial(n). Call each function from main() with user-supplied arguments.',
          expectedOutput: 'factorial(5) = 120\npower(2, 4) = 16'
        },
        criteria: 'You can declare and define clean functions with meaningful return types, understand call stacks, and explain why a base case prevents stack overflow in recursion.'
      },
      {
        id: 'c-mod-6',
        number: 6,
        title: 'Arrays and Strings',
        estimatedHours: 6,
        topics: [
          'One-dimensional arrays: declaration, indexing, and traversal',
          'Two-dimensional arrays (matrices) and coordinate access',
          'Character arrays and null-terminator (\'\\0\')',
          'Standard string library (<string.h>): strlen, strcpy, strcmp, strcat',
          'Safe string reading with fgets() vs scanf()'
        ],
        resources: [
          {
            name: 'Programiz - C Arrays & Multidimensional Arrays',
            url: 'https://www.programiz.com/c-programming/c-arrays',
            platform: 'Programiz',
            type: 'Tutorial'
          },
          {
            name: 'W3Schools - C Arrays and Strings',
            url: 'https://www.w3schools.com/c/c_strings.php',
            platform: 'W3Schools',
            type: 'Interactive'
          },
          {
            name: 'GeeksforGeeks - Strings in C',
            url: 'https://www.geeksforgeeks.org/strings-in-c-2/',
            platform: 'GeeksforGeeks',
            type: 'Reference'
          }
        ],
        methodology: [
          '1. Understand contiguous memory allocation for array elements.',
          '2. Loop through an array to accumulate sums, find minimums and maximums.',
          '3. Initialize a string as char str[] = "Hello" and inspect the implicit \\0 terminator.',
          '4. Practice string comparison using strcmp() and concatenation using strcat().'
        ],
        practice: {
          title: 'Array Statistics & Palindrome String Checker',
          task: '1. Given an array of N integers, find the largest, smallest, and average value.\n2. Write a function that checks whether a given word (character array) is a palindrome (reads same forwards and backwards).',
          expectedOutput: 'Input array: [12, 45, 7, 89, 23]\nMax = 89, Min = 7, Avg = 35.20\nWord "radar" is a Palindrome.'
        },
        criteria: 'You can index, update, and search arrays, avoid out-of-bounds memory errors, and manipulate null-terminated character strings using <string.h>.'
      },
      {
        id: 'c-mod-7',
        number: 7,
        title: 'Pointers and Memory Addresses',
        estimatedHours: 6,
        topics: [
          'Understanding RAM memory addresses and hex format (%p)',
          'Pointer declaration and dereference operator (*)',
          'Address-of operator (&)',
          'Pointers and arrays: pointer arithmetic',
          'Pass-by-reference: modifying caller variables through pointers',
          'Dynamic memory allocation basics: malloc(), free()'
        ],
        resources: [
          {
            name: 'Programiz - C Pointers & Memory',
            url: 'https://www.programiz.com/c-programming/c-pointers',
            platform: 'Programiz',
            type: 'Visual Tutorial'
          },
          {
            name: 'W3Schools - C Pointers',
            url: 'https://www.w3schools.com/c/c_pointers.php',
            platform: 'W3Schools',
            type: 'Interactive'
          },
          {
            name: 'GeeksforGeeks - Pointer Basics in C',
            url: 'https://www.geeksforgeeks.org/c-pointers/',
            platform: 'GeeksforGeeks',
            type: 'Reference'
          }
        ],
        methodology: [
          '1. Draw memory boxes with addresses and values on paper.',
          '2. Print both the address (&var) and the value (*ptr) to visually verify memory mapping.',
          '3. Implement a swap(&a, &b) function that exchanges values of two variables in the caller.',
          '4. Traverse an array using pointer arithmetic *(arr + i) and compare it to arr[i].'
        ],
        practice: {
          title: 'Pointer Swap & Array Reverse Function',
          task: 'Write a void swap(int *x, int *y) function to exchange two numbers without returning values. Then write a function reverseArray(int *arr, int size) that reverses an array in-place using two pointers.',
          expectedOutput: 'Before swap: a=5, b=10\nAfter swap: a=10, b=5\nReversed: [50, 40, 30, 20, 10]'
        },
        criteria: 'You understand the difference between a pointer variable and the value it points to, can pass pointers to functions, and can explain why pointers enable in-place mutation.'
      },
      {
        id: 'c-mod-8',
        number: 8,
        title: 'Structures and File Handling',
        estimatedHours: 6,
        topics: [
          'Defining custom data types with struct',
          'Accessing struct members with dot operator (.) and arrow operator (->)',
          'Arrays of structures for tabular records',
          'File streams in C: FILE pointer, fopen(), and fclose()',
          'Reading and writing text files: fprintf(), fscanf(), fgets(), fputs()',
          'File open modes: "r", "w", "a"'
        ],
        resources: [
          {
            name: 'Programiz - C struct (Structures)',
            url: 'https://www.programiz.com/c-programming/c-structures',
            platform: 'Programiz',
            type: 'Tutorial'
          },
          {
            name: 'Programiz - C File I/O Handling',
            url: 'https://www.programiz.com/c-programming/c-file-input-output',
            platform: 'Programiz',
            type: 'Tutorial'
          },
          {
            name: 'W3Schools - C Files',
            url: 'https://www.w3schools.com/c/c_files.php',
            platform: 'W3Schools',
            type: 'Interactive'
          },
          {
            name: 'GeeksforGeeks - Structures in C',
            url: 'https://www.geeksforgeeks.org/structures-c/',
            platform: 'GeeksforGeeks',
            type: 'Reference'
          }
        ],
        methodology: [
          '1. Model a real-world entity (e.g. Student with name, rollNo, marks) using struct.',
          '2. Create an array of structs to store multiple student records.',
          '3. Open a file for writing ("w") using fopen() and write structured data using fprintf().',
          '4. Reopen the file for reading ("r") and read the saved data back into memory using fscanf().',
          '5. Always remember to call fclose() to prevent file handle leaks.'
        ],
        practice: {
          title: 'Student Grade Record & File Logger',
          task: 'Define struct Student { int id; char name[50]; float gpa; }. Prompt user to enter 3 students, display them in a formatted table, and save records to "students.txt".',
          expectedOutput: 'ID  Name         GPA\n101 Alice Smith  3.85\n102 Bob Johnson  3.60\nSuccessfully saved to students.txt'
        },
        criteria: 'You can design composite structs, navigate arrays of structs, and persist formatted data to disk using standard C file stream operations.'
      },
      {
        id: 'c-mod-9',
        number: 9,
        title: 'Mini-Projects & Systems Capstone',
        estimatedHours: 8,
        topics: [
          'Integrating all concepts: loops, functions, structs, pointers, and file persistence',
          'Command-line user interface design with menus',
          'Error checking and input validation',
          'Project 1: Student Record Management System',
          'Project 2: Multiple-Choice Console Quiz Application',
          'Project 3: Contact Directory Manager'
        ],
        resources: [
          {
            name: 'GeeksforGeeks - C Projects for Beginners',
            url: 'https://www.geeksforgeeks.org/c-projects/',
            platform: 'GeeksforGeeks',
            type: 'Project Guides'
          },
          {
            name: 'FreeCodeCamp - C Programming Full Course',
            url: 'https://www.freecodecamp.org/news/what-is-the-c-programming-language-beginner-tutorial/',
            platform: 'FreeCodeCamp',
            type: 'Full Course'
          }
        ],
        methodology: [
          '1. Choose one of the three mini-projects.',
          '2. Sketch the menu options and flow diagram before writing code.',
          '3. Implement CRUD (Create, Read, Update, Delete) functions modularly.',
          '4. Add file saving so user data survives application restarts.',
          '5. Test with invalid inputs to ensure program resilience.'
        ],
        practice: {
          title: 'Capstone: Student Record Management System',
          task: 'Build a menu-driven C console program that allows users to: 1. Add student, 2. View all students, 3. Search by ID, 4. Save to file, 5. Exit.',
          expectedOutput: '=== Student Management System ===\n1. Add Record  2. View All  3. Search  4. Save & Exit\nEnter Choice: '
        },
        criteria: 'You have constructed a complete multi-file or modular C console program integrating structures, pointers, functions, and file persistence.'
      }
    ]
  },

  // ==========================================
  // 2. HTML (All 8 Modules)
  // ==========================================
  'html': {
    skillId: 'html',
    title: 'HTML & Semantic Web Development',
    tagline: 'The Structural Foundation of the Accessible Web',
    overview: 'HTML defines the structure, semantic meaning, and accessibility of every webpage on the internet. Learn clean document structure, modern semantics, accessible forms, and media embedding.',
    modules: [
      {
        id: 'html-mod-1',
        number: 1,
        title: 'HTML Document Structure',
        estimatedHours: 2,
        topics: [
          'What HTML and the DOM are',
          '<!DOCTYPE html> declaration',
          '<html>, <head>, <meta charset="UTF-8">, and <title>',
          'The <body> element and viewport meta tag',
          'HTML comments and nesting rules'
        ],
        resources: [
          {
            name: 'MDN Web Docs - Getting started with HTML',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started',
            platform: 'MDN Web Docs',
            type: 'Official Documentation'
          },
          {
            name: 'W3Schools - HTML Introduction & Editors',
            url: 'https://www.w3schools.com/html/html_intro.asp',
            platform: 'W3Schools',
            type: 'Interactive Tutorial'
          },
          {
            name: 'FreeCodeCamp - Responsive Web Design (HTML Basics)',
            url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
            platform: 'FreeCodeCamp',
            type: 'Hands-on Course'
          }
        ],
        methodology: [
          '1. Read MDN introduction to understand how browser parses HTML.',
          '2. Create an "index.html" file locally in VS Code or an online editor.',
          '3. Type the HTML5 boilerplate by hand rather than using shortcuts.',
          '4. Open the file in Google Chrome / Firefox and inspect it using DevTools (Ctrl+Shift+I).'
        ],
        practice: {
          title: 'Valid HTML5 Skeleton',
          task: 'Construct a compliant HTML5 document with head meta tags, a unique page title, viewport setting, and a greeting inside body.',
          expectedOutput: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My First Webpage</title>\n</head>\n<body>\n  <h1>Welcome to Web Development!</h1>\n</body>\n</html>'
        },
        criteria: 'You can write a valid HTML5 template from memory and inspect DOM elements in browser DevTools.'
      },
      {
        id: 'html-mod-2',
        number: 2,
        title: 'Headings, Paragraphs, and Text Formatting',
        estimatedHours: 2,
        topics: [
          'Heading hierarchy: <h1> to <h6> and SEO rules (single h1 per page)',
          'Paragraphs with <p> and line breaks with <br>',
          'Text emphasis: <strong>, <em>, <mark>, <small>',
          'Blockquotes (<blockquote>) and code tags (<code>, <pre>)',
          'Horizontal rules (<hr>)'
        ],
        resources: [
          {
            name: 'MDN Web Docs - HTML Text Fundamentals',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals',
            platform: 'MDN Web Docs',
            type: 'Documentation'
          },
          {
            name: 'W3Schools - HTML Headings & Paragraphs',
            url: 'https://www.w3schools.com/html/html_headings.asp',
            platform: 'W3Schools',
            type: 'Interactive Tutorial'
          }
        ],
        methodology: [
          '1. Structure a sample blog article outline with h1, h2, h3.',
          '2. Ensure you never skip heading levels for visual styling alone.',
          '3. Use <strong> for semantic importance and <em> for verbal emphasis.'
        ],
        practice: {
          title: 'Article Formatting Showcase',
          task: 'Build a formatted tech article page with a main title, author byline, subheadings, paragraphs, blockquote citation, and code snippet block.',
          expectedOutput: 'An article with clear typography hierarchy and semantic emphasis tags.'
        },
        criteria: 'You understand heading hierarchy for accessibility and SEO, avoiding misuse of headings purely for text sizing.'
      },
      {
        id: 'html-mod-3',
        number: 3,
        title: 'Hyperlinks and Images',
        estimatedHours: 2,
        topics: [
          'Anchor tags (<a>) and the href attribute',
          'Absolute vs relative URL paths',
          'Opening links in new tabs safely with target="_blank" and rel="noopener noreferrer"',
          'Image tags (<img>), src, and essential alt attribute for accessibility',
          'Image dimensions (width, height) and modern web formats (WebP, SVG)'
        ],
        resources: [
          {
            name: 'MDN Web Docs - Creating Hyperlinks',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks',
            platform: 'MDN Web Docs',
            type: 'Interactive Guide'
          },
          {
            name: 'W3Schools - HTML Links & Images',
            url: 'https://www.w3schools.com/html/html_links.asp',
            platform: 'W3Schools',
            type: 'Reference'
          }
        ],
        methodology: [
          '1. Add external links to resources and test relative internal links between two pages.',
          '2. Embed an image and write a descriptive "alt" attribute explaining what visually appears in the image.',
          '3. Test navigating your site via keyboard (Tab key).'
        ],
        practice: {
          title: 'College Resource Directory',
          task: 'Create a resource directory with external links to college portals, FreeCodeCamp, and W3Schools, featuring responsive icons/images with descriptive alt text.',
          expectedOutput: 'A clean directory of accessible links with working external targets.'
        },
        criteria: 'Every image contains descriptive alt text, and external links include security attributes (rel="noopener noreferrer").'
      },
      {
        id: 'html-mod-4',
        number: 4,
        title: 'Lists and Tables',
        estimatedHours: 3,
        topics: [
          'Unordered lists (<ul>) and list items (<li>)',
          'Ordered numbered lists (<ol>) and start/type attributes',
          'Description/definition lists (<dl>, <dt>, <dd>)',
          'Table elements: <table>, <thead>, <tbody>, <tr>, <th>, <td>',
          'Table headers with scope attribute for screen readers',
          'Colspan and rowspan attributes'
        ],
        resources: [
          {
            name: 'MDN Web Docs - HTML Table Basics',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics',
            platform: 'MDN Web Docs',
            type: 'Comprehensive Guide'
          },
          {
            name: 'W3Schools - HTML Lists and Tables',
            url: 'https://www.w3schools.com/html/html_tables.asp',
            platform: 'W3Schools',
            type: 'Interactive'
          }
        ],
        methodology: [
          '1. Build nested lists to represent a table of contents or course curriculum.',
          '2. Structure a semester grade sheet or course schedule into a table with thead, tbody, th, and td.',
          '3. Add scope="col" and scope="row" to th elements for accessibility.'
        ],
        practice: {
          title: 'College Semester Timetable Table',
          task: 'Build a formatted weekly class schedule table with Day, Time, Subject, Classroom, and Faculty columns using proper semantic table tags.',
          expectedOutput: 'A semantic table with header cells and clean row divisions.'
        },
        criteria: 'You can build nested lists and accessible data tables using thead, tbody, th with scope attributes.'
      },
      {
        id: 'html-mod-5',
        number: 5,
        title: 'Forms and User Inputs',
        estimatedHours: 4,
        topics: [
          'The <form> element: action and method (GET/POST)',
          '<label> with "for" matching input "id"',
          'Input types: text, email, password, number, date, checkbox, radio',
          '<textarea> for multiline input and <select>/<option> dropdowns',
          'Form validation attributes: required, minlength, maxlength, pattern',
          '<button type="submit">'
        ],
        resources: [
          {
            name: 'MDN Web Docs - Your First Form',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form',
            platform: 'MDN Web Docs',
            type: 'Documentation'
          },
          {
            name: 'W3Schools - HTML Forms & Input Types',
            url: 'https://www.w3schools.com/html/html_forms.asp',
            platform: 'W3Schools',
            type: 'Interactive'
          }
        ],
        methodology: [
          '1. Never use placeholder text as a substitute for a visible <label>.',
          '2. Associate every input id with its corresponding label "for" attribute.',
          '3. Group related radio buttons with identical "name" attributes.',
          '4. Add required and type="email" to observe native browser validation on submit.'
        ],
        practice: {
          title: 'Student Club Registration Form',
          task: 'Create an enrollment form with inputs for Name, College Email, Year of Study (dropdown), Technical Interests (checkboxes), and a Message textarea with a submit button.',
          expectedOutput: 'An interactive form with native validation triggers when empty fields are submitted.'
        },
        criteria: 'Every input has an associated <label for="...">, correct type attributes, and client-side validation triggers on submission.'
      },
      {
        id: 'html-mod-6',
        number: 6,
        title: 'Semantic HTML5 Architecture',
        estimatedHours: 3,
        topics: [
          'Semantic vs non-semantic markup (div-soup vs semantic tags)',
          'Structural landmarks: <header>, <nav>, <main>, <footer>',
          '<section> vs <article> vs <aside>',
          '<figure> and <figcaption> for illustrations and diagrams',
          'Search Engine Optimization (SEO) benefits of semantic markup'
        ],
        resources: [
          {
            name: 'MDN Web Docs - Document and Website Structure',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure',
            platform: 'MDN Web Docs',
            type: 'Tutorial'
          },
          {
            name: 'W3Schools - HTML Semantic Elements',
            url: 'https://www.w3schools.com/html/html5_semantic_elements.asp',
            platform: 'W3Schools',
            type: 'Reference'
          }
        ],
        methodology: [
          '1. Inspect modern websites (e.g., Wikipedia, GitHub) to see header, nav, main, article, and footer tags.',
          '2. Refactor a plain <div> based template into modern semantic HTML5 landmarks.',
          '3. Test with screen reader or Chrome DevTools Accessibility tree.'
        ],
        practice: {
          title: 'Semantic Tech Blog Layout',
          task: 'Construct a full-page wireframe with <header>, <nav> menu, <main> containing two <article> tags, a sidebar with <aside>, and a copyright <footer>.',
          expectedOutput: 'A clean HTML layout with zero non-semantic container div tags.'
        },
        criteria: 'You can articulate the distinct purposes of <main>, <section>, <article>, and <aside>, and construct landmark-rich document trees.'
      },
      {
        id: 'html-mod-7',
        number: 7,
        title: 'Web Accessibility (a11y) Fundamentals',
        estimatedHours: 2,
        topics: [
          'What accessibility (WCAG) is and why it matters',
          'Keyboard navigation and tab order (tabindex)',
          'ARIA roles and aria-label attributes when needed',
          'Color contrast and text resizing requirements',
          'Accessible audio (<audio>) and video (<video>) with captions (<track>)'
        ],
        resources: [
          {
            name: 'MDN Web Docs - Accessibility Overview',
            url: 'https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility',
            platform: 'MDN Web Docs',
            type: 'Guide'
          },
          {
            name: 'W3C WAI - Introduction to Web Accessibility',
            url: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/',
            platform: 'W3C Official',
            type: 'Official Standard'
          }
        ],
        methodology: [
          '1. Disconnect your mouse and navigate your webpage entirely using the Tab, Shift+Tab, and Enter keys.',
          '2. Run a Chrome Lighthouse accessibility audit and review the audit score.',
          '3. Fix missing alt tags, unlabelled form controls, and low-contrast elements.'
        ],
        practice: {
          title: 'Accessibility Audit & Remediation',
          task: 'Audit a sample webpage with Lighthouse, identify accessibility warnings, add required aria labels and skip-to-content navigation links, and achieve a 100% accessibility score.',
          expectedOutput: 'A 100 Lighthouse accessibility score.'
        },
        criteria: 'You can navigate a page via keyboard alone, understand the role of ARIA attributes, and pass automated accessibility checks.'
      },
      {
        id: 'html-mod-8',
        number: 8,
        title: 'Mini-Project: Personal Profile Webpage',
        estimatedHours: 4,
        topics: [
          'Synthesizing all HTML topics into a production-grade personal site',
          'Profile header with bio and headshot image',
          'Semantic sections: About Me, Skills, Projects, Education, Contact',
          'Working contact form and social media links',
          'Validating markup with W3C Markup Validation Service'
        ],
        resources: [
          {
            name: 'W3C HTML Validator',
            url: 'https://validator.w3.org/',
            platform: 'W3C',
            type: 'Official Tool'
          },
          {
            name: 'FreeCodeCamp - Build a Personal Portfolio Webpage',
            url: 'https://www.freecodecamp.org/news/how-to-build-a-portfolio-website-with-html/',
            platform: 'FreeCodeCamp',
            type: 'Project Guide'
          }
        ],
        methodology: [
          '1. Plan the sections of your personal profile site on paper.',
          '2. Code the semantic HTML markup from scratch.',
          '3. Include links to your GitHub and LinkedIn profiles.',
          '4. Paste your code into validator.w3.org and fix any syntax warnings.'
        ],
        practice: {
          title: 'Complete Personal Developer Profile Page',
          task: 'Build a standalone personal developer profile containing your photo, bio, skills list, project cards, education table, and contact form, validated with 0 errors on validator.w3.org.',
          expectedOutput: 'A fully validated HTML personal profile page ready for CSS styling.'
        },
        criteria: 'Your personal profile HTML passes W3C HTML validation with zero errors and demonstrates all learned semantic tags.'
      }
    ]
  },

  // ==========================================
  // 3. JAVA PROGRAMMING (All 10 Modules)
  // ==========================================
  'java-programming': {
    skillId: 'java-programming',
    title: 'Java Programming & Object-Oriented Engineering',
    tagline: 'Enterprise-Scale Architecture, Strong Typing & OOP Foundations',
    overview: 'Java powers Android applications, cloud enterprise backends, and large-scale distributed systems. Learn syntax, OOP principles, exception handling, and the Collections Framework.',
    modules: [
      {
        id: 'java-mod-1',
        number: 1,
        title: 'Syntax and Program Structure',
        estimatedHours: 3,
        topics: [
          'Java Virtual Machine (JVM), JRE, and JDK explained',
          'Write Once, Run Anywhere (WORA) philosophy and bytecode',
          'Class declaration: public class Main',
          'The entry point: public static void main(String[] args)',
          'System.out.println() and comments'
        ],
        resources: [
          {
            name: 'Oracle Java Documentation - Getting Started',
            url: 'https://docs.oracle.com/javase/tutorial/getStarted/index.html',
            platform: 'Oracle Official',
            type: 'Official Documentation'
          },
          {
            name: 'W3Schools - Java Syntax & Output',
            url: 'https://www.w3schools.com/java/java_syntax.asp',
            platform: 'W3Schools',
            type: 'Interactive Tutorial'
          },
          {
            name: 'GeeksforGeeks - Java Basic Syntax',
            url: 'https://www.geeksforgeeks.org/java-basic-syntax/',
            platform: 'GeeksforGeeks',
            type: 'Reference'
          }
        ],
        methodology: [
          '1. Install JDK or open an online Java playground (Programiz / OnlineGDB).',
          '2. Understand why the filename must match the public class name (e.g. Main.java).',
          '3. Compile using javac Main.java to produce Main.class bytecode.',
          '4. Run using java Main to execute on the JVM.'
        ],
        practice: {
          title: 'First Java Program',
          task: 'Create Main.java. Print your student credentials, Java version, and career ambition on three distinct lines.',
          expectedOutput: 'Student: Priya Sharma\nJDK: 21 LTS\nGoal: Software Development Engineer'
        },
        criteria: 'You can explain what JDK, JRE, and JVM do, and write a compiling Java class with a valid main method.'
      },
      {
        id: 'java-mod-2',
        number: 2,
        title: 'Variables and Primitive Data Types',
        estimatedHours: 4,
        topics: [
          'Strong static typing vs dynamic typing',
          'Primitive data types: byte, short, int, long, float, double, boolean, char',
          'Type casting: widening vs narrowing casting',
          'Wrapper classes (Integer, Double, Character) intro',
          'Reading console input with Scanner (import java.util.Scanner)'
        ],
        resources: [
          {
            name: 'W3Schools - Java Data Types & Type Casting',
            url: 'https://www.w3schools.com/java/java_data_types.asp',
            platform: 'W3Schools',
            type: 'Tutorial'
          },
          {
            name: 'GeeksforGeeks - Data Types in Java',
            url: 'https://www.geeksforgeeks.org/data-types-in-java/',
            platform: 'GeeksforGeeks',
            type: 'Reference'
          }
        ],
        methodology: [
          '1. Declare variables of every primitive type and observe memory limits.',
          '2. Practice explicit type casting: double d = 9.78; int i = (int) d;.',
          '3. Instantiate Scanner scanner = new Scanner(System.in) and read int, double, and String tokens.'
        ],
        practice: {
          title: 'Currency Converter & Temperature Calculator',
          task: 'Prompt the user to enter temperature in Fahrenheit. Convert it to Celsius using formula: (F - 32) * 5.0 / 9.0 with double precision.',
          expectedOutput: 'Enter Fahrenheit: 98.6\nCelsius = 37.0'
        },
        criteria: 'You understand static types, type casting conversions, and reading input safely with Scanner.'
      },
      {
        id: 'java-mod-3',
        number: 3,
        title: 'Conditions and Loops',
        estimatedHours: 4,
        topics: [
          'if, else if, else branching logic',
          'Ternary conditional operator (? :)',
          'switch-case with enhanced Java switch statements',
          'for loop, while loop, and do-while loop',
          'Enhanced for-each loop for array traversal',
          'break, continue, and labeled loops'
        ],
        resources: [
          {
            name: 'W3Schools - Java If...Else and While Loop',
            url: 'https://www.w3schools.com/java/java_conditions.asp',
            platform: 'W3Schools',
            type: 'Interactive'
          },
          {
            name: 'Programiz - Java Loops',
            url: 'https://www.programiz.com/java-programming/for-loop',
            platform: 'Programiz',
            type: 'Tutorial'
          }
        ],
        methodology: [
          '1. Implement standard flow controls.',
          '2. Practice writing an enhanced for-each loop: for (String item : list).',
          '3. Test break and continue inside nested iterations.'
        ],
        practice: {
          title: 'Prime Number Checker & Factorial Finder',
          task: 'Prompt user for integer N. Check whether N is prime by testing factors up to sqrt(N). Then compute its factorial using a loop.',
          expectedOutput: 'Enter N: 17\n17 is a Prime Number.\nFactorial of 5 = 120'
        },
        criteria: 'You can write nested loops, prime number tests, and cleanly use enhanced for-each syntax.'
      },
      {
        id: 'java-mod-4',
        number: 4,
        title: 'Methods and Method Overloading',
        estimatedHours: 4,
        topics: [
          'Declaring methods: access modifier, static vs non-static, return type',
          'Parameters and return values',
          'Pass-by-value in Java (primitives vs object references)',
          'Method overloading: same method name, different parameter signatures',
          'Variable-length arguments (varargs: int... nums)'
        ],
        resources: [
          {
            name: 'W3Schools - Java Methods & Overloading',
            url: 'https://www.w3schools.com/java/java_methods.asp',
            platform: 'W3Schools',
            type: 'Tutorial'
          },
          {
            name: 'GeeksforGeeks - Methods in Java',
            url: 'https://www.geeksforgeeks.org/methods-in-java/',
            platform: 'GeeksforGeeks',
            type: 'Reference'
          }
        ],
        methodology: [
          '1. Create utility methods to eliminate duplicate calculation code.',
          '2. Write overloaded methods: calculateArea(double radius) vs calculateArea(double length, double width).',
          '3. Inspect why Java is strictly pass-by-value even for object references.'
        ],
        practice: {
          title: 'Geometric Area Calculator Overloaded Methods',
          task: 'Implement overloaded computeArea() methods for Circle (radius), Rectangle (width, height), and Triangle (base, height).',
          expectedOutput: 'Circle Area (r=5): 78.54\nRect Area (4, 6): 24.00'
        },
        criteria: 'You can define modular static and instance methods and correctly overload signatures based on argument types.'
      },
      {
        id: 'java-mod-5',
        number: 5,
        title: 'Arrays and Strings in Java',
        estimatedHours: 5,
        topics: [
          'Declaring and initializing arrays: int[] arr = new int[10]',
          'Array length attribute vs String.length() method',
          'java.util.Arrays utility: sort(), binarySearch(), toString()',
          'String immutability and the String Constant Pool',
          'String methods: substring(), charAt(), equals() vs ==',
          'StringBuilder for efficient mutable string manipulation'
        ],
        resources: [
          {
            name: 'W3Schools - Java Arrays & Strings',
            url: 'https://www.w3schools.com/java/java_arrays.asp',
            platform: 'W3Schools',
            type: 'Interactive'
          },
          {
            name: 'GeeksforGeeks - Strings in Java',
            url: 'https://www.geeksforgeeks.org/strings-in-java/',
            platform: 'GeeksforGeeks',
            type: 'Reference'
          }
        ],
        methodology: [
          '1. Never compare Java strings with ==; always use str1.equals(str2).',
          '2. Test how StringBuilder avoids allocating new objects during frequent string concatenation in loops.',
          '3. Sort an array of numbers using Arrays.sort().'
        ],
        practice: {
          title: 'Anagram Checker & Array Frequency Counter',
          task: 'Write a program to check if two strings are anagrams of each other (e.g. "listen" and "silent") using character arrays and Arrays.sort().',
          expectedOutput: '"listen" and "silent" are ANAGRAMS.'
        },
        criteria: 'You understand string immutability, when to use StringBuilder, and how to manipulate arrays using java.util.Arrays.'
      },
      {
        id: 'java-mod-6',
        number: 6,
        title: 'Classes, Objects, and Constructors',
        estimatedHours: 6,
        topics: [
          'Object-Oriented fundamentals: state and behavior',
          'Creating a class: fields and methods',
          'Instantiating objects with new keyword',
          'Constructors: default, parameterized, and constructor chaining (this())',
          'The this keyword and encapsulation with private fields and getters/setters',
          'static variables and static methods'
        ],
        resources: [
          {
            name: 'Oracle Java Tutorial - Classes and Objects',
            url: 'https://docs.oracle.com/javase/tutorial/java/javaOO/classes.html',
            platform: 'Oracle Official',
            type: 'Documentation'
          },
          {
            name: 'W3Schools - Java Classes and Objects',
            url: 'https://www.w3schools.com/java/java_classes.asp',
            platform: 'W3Schools',
            type: 'Interactive'
          }
        ],
        methodology: [
          '1. Create a Student class with private fields: id, name, gpa.',
          '2. Generate parameterized constructor and public getter/setter methods.',
          '3. Add a static variable studentCount that increments whenever a new Student object is created.'
        ],
        practice: {
          title: 'Bank Account Model with Encapsulation',
          task: 'Create a BankAccount class with private accountNumber, balance, and accountHolder. Provide deposit(), withdraw(amount), and getBalance() methods with safety checks.',
          expectedOutput: 'Deposit $500 -> Balance: $1500.00\nWithdraw $2000 -> Error: Insufficient funds!'
        },
        criteria: 'You can design encapsulated classes with private fields, validation in setters, and understand static vs instance scope.'
      },
      {
        id: 'java-mod-7',
        number: 7,
        title: 'Inheritance and Polymorphism',
        estimatedHours: 6,
        topics: [
          'Inheritance with extends keyword and the super keyword',
          'Method overriding with @Override annotation',
          'Polymorphism: runtime dynamic method dispatch',
          'Abstract classes with abstract methods',
          'Interfaces with implements keyword (multiple inheritance of type)',
          'final classes, methods, and variables'
        ],
        resources: [
          {
            name: 'Oracle Java Tutorial - Inheritance & Interfaces',
            url: 'https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html',
            platform: 'Oracle Official',
            type: 'Documentation'
          },
          {
            name: 'W3Schools - Java Inheritance & Polymorphism',
            url: 'https://www.w3schools.com/java/java_inheritance.asp',
            platform: 'W3Schools',
            type: 'Interactive'
          }
        ],
        methodology: [
          '1. Design a base class Employee and derived classes Developer and Manager.',
          '2. Override calculateSalary() in both subclasses.',
          '3. Create an array of Employee references holding instances of both subclasses to witness runtime polymorphism.'
        ],
        practice: {
          title: 'Vehicle Fleet Polymorphism Hierarchy',
          task: 'Define an interface Drivable with startEngine(). Create abstract class Vehicle and subclasses Car and ElectricBike that implement specific startup procedures.',
          expectedOutput: 'Car engine started with key ignition.\nElectricBike started silently with battery switch.'
        },
        criteria: 'You can build inheritance hierarchies, override methods with @Override, and write code that depends on interfaces rather than concrete implementations.'
      },
      {
        id: 'java-mod-8',
        number: 8,
        title: 'Exception Handling and Robustness',
        estimatedHours: 4,
        topics: [
          'The Throwable hierarchy: Error vs Exception',
          'Checked vs Unchecked (RuntimeException) exceptions',
          'try, catch, and finally blocks',
          'try-with-resources statement for AutoCloseable resources',
          'throw keyword vs throws declaration',
          'Creating custom domain exception classes'
        ],
        resources: [
          {
            name: 'Oracle Java Tutorial - Exceptions',
            url: 'https://docs.oracle.com/javase/tutorial/essential/exceptions/',
            platform: 'Oracle Official',
            type: 'Documentation'
          },
          {
            name: 'W3Schools - Java Exceptions (Try...Catch)',
            url: 'https://www.w3schools.com/java/java_try_catch.asp',
            platform: 'W3Schools',
            type: 'Interactive'
          }
        ],
        methodology: [
          '1. Catch common runtime exceptions: ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException.',
          '2. Use try-with-resources to automatically close Scanner or file streams.',
          '3. Build a custom InvalidAgeException that extends Exception.'
        ],
        practice: {
          title: 'Safe Division & User Input Validator',
          task: 'Build a method divideNumbers(int a, int b) that throws a custom DivisionByZeroException if b == 0. Handle it with a friendly error message in main().',
          expectedOutput: 'Error caught: Cannot divide by zero. Please provide a non-zero denominator.'
        },
        criteria: 'You know when to catch vs propagate exceptions, understand try-with-resources, and can create clean custom exceptions.'
      },
      {
        id: 'java-mod-9',
        number: 9,
        title: 'Java Collections Framework (JCF)',
        estimatedHours: 6,
        topics: [
          'Why collections supersede static arrays',
          'List interface: ArrayList vs LinkedList',
          'Set interface: HashSet vs TreeSet (uniqueness, sorting)',
          'Map interface: HashMap vs TreeMap (key-value associations)',
          'Generics syntax: ArrayList<Student>',
          'Collections utility class: Collections.sort(), Collections.reverse()',
          'Introduction to lambda expressions and forEach'
        ],
        resources: [
          {
            name: 'Oracle Java Tutorial - Collections Framework',
            url: 'https://docs.oracle.com/javase/tutorial/collections/',
            platform: 'Oracle Official',
            type: 'Official Guide'
          },
          {
            name: 'W3Schools - Java ArrayList & HashMap',
            url: 'https://www.w3schools.com/java/java_arraylist.asp',
            platform: 'W3Schools',
            type: 'Interactive'
          },
          {
            name: 'GeeksforGeeks - Collections in Java',
            url: 'https://www.geeksforgeeks.org/collections-in-java-2/',
            platform: 'GeeksforGeeks',
            type: 'Reference'
          }
        ],
        methodology: [
          '1. Use ArrayList<String> to dynamically append, search, and delete elements.',
          '2. Use HashSet<Integer> to deduplicate lists in O(N) time.',
          '3. Use HashMap<String, Double> to model student grade point averages.',
          '4. Iterate through maps using entrySet().'
        ],
        practice: {
          title: 'Word Frequency Counter using HashMap',
          task: 'Read a paragraph of text. Split it into words and use a HashMap<String, Integer> to count the occurrences of each word, printing them in frequency order.',
          expectedOutput: 'Word Frequencies:\njava -> 5\nprogramming -> 3\ncode -> 2'
        },
        criteria: 'You can choose the correct collection for a problem (List, Set, or Map) and manipulate collections with generics without raw type warnings.'
      },
      {
        id: 'java-mod-10',
        number: 10,
        title: 'Mini-Project: Student Management Application',
        estimatedHours: 8,
        topics: [
          'Full OOP Architecture: Separation of Concerns (Model, Service, UI)',
          'Student Model class with encapsulated fields',
          'StudentService class managing ArrayList<Student> or HashMap<Integer, Student>',
          'Console Menu UI with add, list, search, update, delete (CRUD)',
          'Exception handling for invalid inputs',
          'Bonus: Persisting data to CSV / text file'
        ],
        resources: [
          {
            name: 'GeeksforGeeks - Student Management System in Java',
            url: 'https://www.geeksforgeeks.org/student-management-system-in-java/',
            platform: 'GeeksforGeeks',
            type: 'Project Tutorial'
          },
          {
            name: 'FreeCodeCamp - Java Full Course for Beginners',
            url: 'https://www.freecodecamp.org/news/learn-java-full-course/',
            platform: 'FreeCodeCamp',
            type: 'Comprehensive Video Course'
          }
        ],
        methodology: [
          '1. Design classes: Student, StudentManager, and Main.',
          '2. Implement student registration, grade updating, and GPA computation.',
          '3. Implement search by ID using HashMap lookup.',
          '4. Add validation: ensure GPA is between 0.0 and 4.0 and IDs are unique.'
        ],
        practice: {
          title: 'Interactive Student Management System (SMS)',
          task: 'Build a menu-driven console SMS in Java supporting: 1. Add Student, 2. List All, 3. Find by ID, 4. Calculate Department Average GPA, 5. Delete Student.',
          expectedOutput: 'SMS v1.0 ready. 4 students loaded. Average GPA: 3.72'
        },
        criteria: 'You have constructed a complete modular Java application using OOP, classes, exceptions, and the Collections Framework.'
      }
    ]
  },

  // ==========================================
  // 4. DATA STRUCTURES & ALGORITHMS (DSA) (All 13 Modules)
  // ==========================================
  'dsa': {
    skillId: 'dsa',
    title: 'Data Structures and Algorithms (DSA) Pathway',
    tagline: 'Algorithmic Mastery, Complexity Analysis & Interview Problem Solving',
    overview: 'DSA is the computational engine of software engineering and coding interviews. Master space-time complexity analysis and essential linear and non-linear data structures.',
    modules: [
      {
        id: 'dsa-mod-1',
        number: 1,
        title: 'Time and Space Complexity (Big-O Notation)',
        estimatedHours: 4,
        topics: [
          'What algorithmic efficiency is: time vs memory',
          'Asymptotic notations: Big-O (upper bound), Big-Omega, Big-Theta',
          'Common complexities: O(1), O(log N), O(N), O(N log N), O(N²), O(2^N)',
          'Analyzing loops and nested loops',
          'Space complexity: auxiliary space vs input space'
        ],
        resources: [
          {
            name: 'FreeCodeCamp - Big O Notation Guide',
            url: 'https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/',
            platform: 'FreeCodeCamp',
            type: 'Comprehensive Article'
          },
          {
            name: 'GeeksforGeeks - Analysis of Algorithms',
            url: 'https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/',
            platform: 'GeeksforGeeks',
            type: 'Tutorial'
          },
          {
            name: 'CS50 - Computational Complexity',
            url: 'https://cs50.harvard.edu/x/weeks/3/',
            platform: 'Harvard CS50',
            type: 'Lecture'
          }
        ],
        methodology: [
          '1. Trace code snippets and count dominant operations relative to input size N.',
          '2. Memorize the Big-O complexity hierarchy chart.',
          '3. Practice determining space complexity by counting new memory allocations.'
        ],
        practice: {
          title: 'Complexity Analysis Worksheet',
          task: 'Analyze 5 given code snippets (single loop, nested loop, divide-and-conquer halves, recursive fibonacci) and state their exact Big-O time and auxiliary space complexities.',
          expectedOutput: 'Snippet 1: O(N) time, O(1) space\nSnippet 2: O(N²) time, O(1) space\nSnippet 3: O(log N) time, O(1) space'
        },
        criteria: 'You can inspect any standard loop or function and state its Big-O time and space bounds with mathematical justification.'
      },
      {
        id: 'dsa-mod-2',
        number: 2,
        title: 'Arrays and Two-Pointer Technique',
        estimatedHours: 5,
        topics: [
          'Array memory layout and O(1) random access',
          'Insertion, deletion, and traversal trade-offs',
          'Prefix sums for range query problems',
          'Two-pointer approach (opposite ends & fast-slow pointer)',
          'Sliding window technique for contiguous subarray problems'
        ],
        resources: [
          {
            name: 'GeeksforGeeks - Two Pointers Technique',
            url: 'https://www.geeksforgeeks.org/two-pointers-technique/',
            platform: 'GeeksforGeeks',
            type: 'Technique Guide'
          },
          {
            name: 'Programiz - Array Data Structure',
            url: 'https://www.programiz.com/dsa/arrays',
            platform: 'Programiz',
            type: 'Visual Tutorial'
          }
        ],
        methodology: [
          '1. Solve Two-Sum on a sorted array using two pointers in O(N) time vs naive O(N²).',
          '2. Use sliding window to find maximum sum subarray of size K.',
          '3. Implement in-place array operations (remove duplicates from sorted array).'
        ],
        practice: {
          title: 'Two Sum II & Subarray Max Sum',
          task: '1. Given a sorted array, find two numbers that sum up to target T in O(N) time and O(1) auxiliary space.\n2. Find max sum of subarray of size K.',
          expectedOutput: 'Target 9 in [2, 7, 11, 15] -> Indices 1 and 2.'
        },
        criteria: 'You can apply two-pointer and sliding window patterns to optimize brute-force O(N²) array problems to O(N).'
      },
      {
        id: 'dsa-mod-3',
        number: 3,
        title: 'Strings and Pattern Matching',
        estimatedHours: 4,
        topics: [
          'String representation and character ASCII / Unicode values',
          'String manipulation without extra space',
          'Palindrome validation and string reversal',
          'Frequency arrays (hashing with int count[26])',
          'Substrings, subsequences, and anagram validation'
        ],
        resources: [
          {
            name: 'GeeksforGeeks - String Data Structure',
            url: 'https://www.geeksforgeeks.org/string-data-structure/',
            platform: 'GeeksforGeeks',
            type: 'Reference'
          },
          {
            name: 'Programiz - DSA Strings',
            url: 'https://www.programiz.com/dsa',
            platform: 'Programiz',
            type: 'Tutorial'
          }
        ],
        methodology: [
          '1. Avoid repeated string concatenation inside loops.',
          '2. Use fixed 26-element integer frequency arrays for lowercase English letters.',
          '3. Check palindromes ignoring alphanumeric characters and case sensitivity.'
        ],
        practice: {
          title: 'Valid Palindrome & Group Anagrams Basics',
          task: 'Implement a function isPalindrome(String s) that cleans non-alphanumeric chars and verifies palindrome symmetry with two pointers.',
          expectedOutput: '"A man, a plan, a canal: Panama" -> TRUE'
        },
        criteria: 'You can manipulate strings efficiently, leverage frequency counts, and validate palindromes and anagrams in O(N) time.'
      },
      {
        id: 'dsa-mod-4',
        number: 4,
        title: 'Searching Algorithms',
        estimatedHours: 4,
        topics: [
          'Linear search: mechanics and O(N) worst case',
          'Binary search: divide-and-conquer on sorted inputs (O(log N))',
          'Calculating midpoint safely: mid = low + (high - low) / 2',
          'Finding first and last occurrence of elements',
          'Binary search on answer space (monotonic predicates)'
        ],
        resources: [
          {
            name: 'GeeksforGeeks - Binary Search',
            url: 'https://www.geeksforgeeks.org/binary-search/',
            platform: 'GeeksforGeeks',
            type: 'Tutorial'
          },
          {
            name: 'CS50 - Searching Algorithms',
            url: 'https://cs50.harvard.edu/x/weeks/3/',
            platform: 'Harvard CS50',
            type: 'Lecture'
          }
        ],
        methodology: [
          '1. Trace binary search with low, high, and mid pointers on paper.',
          '2. Understand why (low + high) / 2 can cause integer overflow in languages like C/Java.',
          '3. Implement iterative and recursive versions of binary search.'
        ],
        practice: {
          title: 'First and Last Position in Sorted Array',
          task: 'Given a sorted array with duplicates, write a binary search algorithm to find both the starting and ending index of a target value in O(log N) time.',
          expectedOutput: 'Target 8 in [5, 7, 7, 8, 8, 10] -> [3, 4]'
        },
        criteria: 'You can implement binary search without infinite loops, handle duplicate elements, and explain why its complexity is O(log N).'
      },
      {
        id: 'dsa-mod-5',
        number: 5,
        title: 'Sorting Algorithms',
        estimatedHours: 6,
        topics: [
          'Comparison-based sorts vs non-comparison sorts',
          'Elementary sorts: Bubble Sort, Selection Sort, Insertion Sort (O(N²))',
          'Divide-and-conquer sorts: Merge Sort (O(N log N) guaranteed, stable)',
          'Quick Sort: partitioning, pivot selection, average O(N log N) vs worst O(N²)',
          'Stability in sorting algorithms'
        ],
        resources: [
          {
            name: 'GeeksforGeeks - Sorting Algorithms',
            url: 'https://www.geeksforgeeks.org/sorting-algorithms/',
            platform: 'GeeksforGeeks',
            type: 'Visual Guide'
          },
          {
            name: 'Programiz - Merge Sort and Quick Sort',
            url: 'https://www.programiz.com/dsa/merge-sort',
            platform: 'Programiz',
            type: 'Interactive'
          }
        ],
        methodology: [
          '1. Implement Insertion Sort to understand why it is efficient on nearly-sorted data.',
          '2. Code Merge Sort by writing separate merge() and mergeSort() recursive functions.',
          '3. Code Lomuto or Hoare partition scheme for Quick Sort.'
        ],
        practice: {
          title: 'Merge Sort Implementation & Step Counter',
          task: 'Implement recursive Merge Sort in code. Verify that it sorts an unsorted array of 1000 random integers correctly in O(N log N) time.',
          expectedOutput: 'Input: [38, 27, 43, 3, 9, 82, 10] -> Sorted: [3, 9, 10, 27, 38, 43, 82]'
        },
        criteria: 'You can write Merge Sort and Quick Sort from scratch, analyze their best/average/worst cases, and define sorting stability.'
      },
      {
        id: 'dsa-mod-6',
        number: 6,
        title: 'Linked Lists',
        estimatedHours: 6,
        topics: [
          'Singly linked list: Node structure (data + next pointer)',
          'Doubly linked list (next + prev pointers) and circular lists',
          'Insertion at head, tail, and arbitrary positions',
          'Deletion and boundary conditions (empty list, single node)',
          'Reversing a linked list (iteratively and recursively)',
          'Cycle detection using Floyd’s Tortoise and Hare algorithm'
        ],
        resources: [
          {
            name: 'GeeksforGeeks - Linked List Data Structure',
            url: 'https://www.geeksforgeeks.org/data-structures/linked-list/',
            platform: 'GeeksforGeeks',
            type: 'Tutorial'
          },
          {
            name: 'Programiz - Linked List Tutorial',
            url: 'https://www.programiz.com/dsa/linked-list',
            platform: 'Programiz',
            type: 'Visual Guide'
          }
        ],
        methodology: [
          '1. Draw nodes and arrow pointers on paper.',
          '2. Practice reversing a linked list using 3 pointers: prev, curr, and nextNode.',
          '3. Detect loops by having a fast pointer move 2 steps and slow pointer move 1 step.'
        ],
        practice: {
          title: 'Reverse Linked List & Detect Loop',
          task: '1. Implement a singly linked list class.\n2. Write a function to reverse the list in-place in O(N) time and O(1) space.\n3. Write hasCycle() using fast-slow pointers.',
          expectedOutput: 'Original: 1 -> 2 -> 3 -> 4 -> NULL\nReversed: 4 -> 3 -> 2 -> 1 -> NULL'
        },
        criteria: 'You can implement node insertion, deletion, and in-place reversal without memory leaks or null-pointer exceptions.'
      },
      {
        id: 'dsa-mod-7',
        number: 7,
        title: 'Stacks and Queues',
        estimatedHours: 5,
        topics: [
          'Stack: LIFO (Last-In, First-Out) principle, push, pop, peek (O(1))',
          'Implementing stack using dynamic arrays and linked lists',
          'Monotonic stack pattern for "Next Greater Element"',
          'Queue: FIFO (First-In, First-Out) principle, enqueue, dequeue',
          'Circular queue and Double-Ended Queue (Deque)'
        ],
        resources: [
          {
            name: 'GeeksforGeeks - Stack Data Structure',
            url: 'https://www.geeksforgeeks.org/stack-data-structure/',
            platform: 'GeeksforGeeks',
            type: 'Documentation'
          },
          {
            name: 'Programiz - Queue Data Structure',
            url: 'https://www.programiz.com/dsa/queue',
            platform: 'Programiz',
            type: 'Tutorial'
          }
        ],
        methodology: [
          '1. Solve the classic "Valid Parentheses" problem using a stack.',
          '2. Trace stack states at every character of an expression: "({[]})".',
          '3. Implement a queue using two stacks to understand amortized complexity.'
        ],
        practice: {
          title: 'Valid Parentheses & Min Stack',
          task: 'Build a function isValid(String s) checking matching brackets \'()\', \'{}\', \'[]\'. Then design a MinStack that supports push, pop, top, and getMin() in O(1) time.',
          expectedOutput: '"[{()}]" -> TRUE\n"([)]" -> FALSE'
        },
        criteria: 'You can leverage stacks to solve nested matching problems and understand monotonic stack mechanics.'
      },
      {
        id: 'dsa-mod-8',
        number: 8,
        title: 'Recursion and Backtracking',
        estimatedHours: 6,
        topics: [
          'The call stack and stack frames',
          'Base case vs recursive reduction step',
          'Tree recursion and recurrence relations',
          'Backtracking paradigm: Choice, Constraint, Goal (Choose, Explore, Unchoose)',
          'Classic backtracking: Subsets, Permutations, N-Queens'
        ],
        resources: [
          {
            name: 'GeeksforGeeks - Backtracking Algorithms',
            url: 'https://www.geeksforgeeks.org/backtracking-algorithms/',
            platform: 'GeeksforGeeks',
            type: 'Reference'
          },
          {
            name: 'FreeCodeCamp - Recursion for Beginners',
            url: 'https://www.freecodecamp.org/news/recursion-demystified-99a21dbedd45/',
            platform: 'FreeCodeCamp',
            type: 'Article'
          }
        ],
        methodology: [
          '1. Draw recursion trees with branching factor and depth.',
          '2. Always write the base case return check first before recursive calls.',
          '3. In backtracking, explicitly undo state mutations (backtrack) after returning.'
        ],
        practice: {
          title: 'Generate All Subsets & Permutations',
          task: 'Given an array of distinct integers [1, 2, 3], generate all 2^N possible subsets using recursive backtracking.',
          expectedOutput: '[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]'
        },
        criteria: 'You can formulate state-space trees, write recursive generators, and correctly revert state in backtracking.'
      },
      {
        id: 'dsa-mod-9',
        number: 9,
        title: 'Hashing and Hash Tables',
        estimatedHours: 5,
        topics: [
          'Hash functions: properties of uniform distribution',
          'Collision resolution: Separate Chaining vs Open Addressing (Linear Probing)',
          'Time complexities: Average O(1) vs worst-case O(N)',
          'HashSet for O(1) existence checks',
          'HashMap for key-value associative lookups',
          'Subarray sum equals K using prefix sum + HashMap'
        ],
        resources: [
          {
            name: 'GeeksforGeeks - Hashing Data Structure',
            url: 'https://www.geeksforgeeks.org/hashing-data-structure/',
            platform: 'GeeksforGeeks',
            type: 'Tutorial'
          },
          {
            name: 'Programiz - Hash Table',
            url: 'https://www.programiz.com/dsa/hash-table',
            platform: 'Programiz',
            type: 'Visual Guide'
          }
        ],
        methodology: [
          '1. Solve Two Sum in O(N) using a single-pass hash map.',
          '2. Count element frequencies to detect duplicates and majority elements in linear time.',
          '3. Store running prefix sums in a hash map to find subsegment targets.'
        ],
        practice: {
          title: 'Longest Consecutive Sequence in O(N)',
          task: 'Given an unsorted array of integers [100, 4, 200, 1, 3, 2], find the length of the longest consecutive elements sequence using a HashSet in O(N) time.',
          expectedOutput: 'Longest sequence is [1, 2, 3, 4] -> Length = 4'
        },
        criteria: 'You understand hash collisions, when to substitute nested loops with hash lookups, and how to achieve linear-time solutions.'
      },
      {
        id: 'dsa-mod-10',
        number: 10,
        title: 'Trees and Binary Search Trees (BST)',
        estimatedHours: 7,
        topics: [
          'Tree terminology: Root, parent, child, leaf, height, depth',
          'Binary Tree structure and properties',
          'Tree traversals: Inorder, Preorder, Postorder (Depth-First Search)',
          'Level-order traversal (Breadth-First Search) using a Queue',
          'Binary Search Tree (BST) property: left < root < right',
          'BST insertion, search, and validation (O(h) height operations)'
        ],
        resources: [
          {
            name: 'GeeksforGeeks - Binary Tree Data Structure',
            url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/',
            platform: 'GeeksforGeeks',
            type: 'Comprehensive Guide'
          },
          {
            name: 'Programiz - Binary Search Tree (BST)',
            url: 'https://www.programiz.com/dsa/binary-search-tree',
            platform: 'Programiz',
            type: 'Visual Guide'
          }
        ],
        methodology: [
          '1. Draw binary trees and annotate traversal orders.',
          '2. Remember: Inorder traversal of a BST always yields sorted ascending values.',
          '3. Implement BFS level-by-level using an explicit FIFO Queue.'
        ],
        practice: {
          title: 'Max Depth of Binary Tree & Validate BST',
          task: 'Write recursive functions: 1. maxDepth(TreeNode root) to compute height, and 2. isValidBST(TreeNode root) using min/max boundary validation.',
          expectedOutput: 'Tree with nodes [3, 9, 20, null, null, 15, 7] -> Max Depth = 3'
        },
        criteria: 'You can execute recursive DFS and queue-based BFS traversals and implement BST operations with O(h) complexity.'
      },
      {
        id: 'dsa-mod-11',
        number: 11,
        title: 'Graphs and Graph Traversals',
        estimatedHours: 7,
        topics: [
          'Graph representations: Adjacency Matrix vs Adjacency List',
          'Directed vs undirected, weighted vs unweighted graphs',
          'Breadth-First Search (BFS) for shortest path in unweighted graphs',
          'Depth-First Search (DFS) for connected components and path finding',
          'Topological Sorting for Directed Acyclic Graphs (DAG) with Kahn\'s Algorithm',
          'Cycle detection in directed and undirected graphs'
        ],
        resources: [
          {
            name: 'GeeksforGeeks - Graph Data Structure and Algorithms',
            url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/',
            platform: 'GeeksforGeeks',
            type: 'Documentation'
          },
          {
            name: 'Programiz - Graph BFS and DFS',
            url: 'https://www.programiz.com/dsa/graph-bfs',
            platform: 'Programiz',
            type: 'Tutorial'
          }
        ],
        methodology: [
          '1. Construct an Adjacency List: Map<Integer, List<Integer>> or ArrayList<ArrayList<Integer>>.',
          '2. Always maintain a visited boolean array or Set to prevent infinite loops in cyclic graphs.',
          '3. Practice BFS for shortest hops in a grid/matrix.'
        ],
        practice: {
          title: 'Number of Islands & Shortest Path in Matrix',
          task: 'Given a 2D grid of \'1\'s (land) and \'0\'s (water), count the number of islands using DFS or BFS component traversal.',
          expectedOutput: 'Grid with 3 separate land clusters -> Output: 3 Islands'
        },
        criteria: 'You can represent graphs with adjacency lists, implement BFS and DFS with visited tracking, and detect cycles.'
      },
      {
        id: 'dsa-mod-12',
        number: 12,
        title: 'Greedy Algorithms',
        estimatedHours: 5,
        topics: [
          'The greedy choice property and optimal substructure',
          'When greedy works vs when it fails',
          'Activity Selection / Interval Scheduling problem',
          'Fractional Knapsack problem (using value-to-weight ratio)',
          'Minimum Spanning Trees: Kruskal\'s and Prim\'s algorithms'
        ],
        resources: [
          {
            name: 'GeeksforGeeks - Greedy Algorithms',
            url: 'https://www.geeksforgeeks.org/greedy-algorithms/',
            platform: 'GeeksforGeeks',
            type: 'Reference'
          },
          {
            name: 'Programiz - Greedy Algorithm',
            url: 'https://www.programiz.com/dsa/greedy-algorithm',
            platform: 'Programiz',
            type: 'Tutorial'
          }
        ],
        methodology: [
          '1. Sort intervals by end time to solve interval scheduling.',
          '2. Prove locally optimal choices lead to global optimum.',
          '3. Compare greedy with dynamic programming to understand why 0/1 Knapsack cannot be solved greedily.'
        ],
        practice: {
          title: 'Non-overlapping Intervals / Meeting Rooms',
          task: 'Given an array of intervals intervals[i] = [start, end], find the minimum number of intervals to remove to make the rest non-overlapping.',
          expectedOutput: 'Intervals [[1,2],[2,3],[3,4],[1,3]] -> Remove 1 interval [1,3]'
        },
        criteria: 'You can identify problems with greedy choice properties and sort candidates to achieve optimal decisions.'
      },
      {
        id: 'dsa-mod-13',
        number: 13,
        title: 'Dynamic Programming (DP)',
        estimatedHours: 8,
        topics: [
          'Overlapping subproblems and optimal substructure',
          'Memoization (Top-Down with recursion + cache)',
          'Tabulation (Bottom-Up with 1D and 2D arrays)',
          'Climbing Stairs and Fibonacci transitions',
          '0/1 Knapsack problem and Coin Change',
          'Longest Common Subsequence (LCS)'
        ],
        resources: [
          {
            name: 'GeeksforGeeks - Dynamic Programming',
            url: 'https://www.geeksforgeeks.org/dynamic-programming/',
            platform: 'GeeksforGeeks',
            type: 'Tutorial'
          },
          {
            name: 'FreeCodeCamp - Dynamic Programming Course',
            url: 'https://www.freecodecamp.org/news/learn-dynamic-programing-to-solve-coding-challenges/',
            platform: 'FreeCodeCamp',
            type: 'Full Course'
          }
        ],
        methodology: [
          '1. First write the brute-force recursion and draw the recursion tree showing identical repeated calls.',
          '2. Add a memo array/table to cache answers (Top-Down).',
          '3. Convert memoization to an iterative bottom-up table (Tabulation).',
          '4. Optimize space if only the previous row/state is required.'
        ],
        practice: {
          title: 'Coin Change Minimum Coins & 0/1 Knapsack',
          task: 'Given coins of different denominations and a total amount, compute the fewest number of coins needed to make up that amount. If impossible, return -1.',
          expectedOutput: 'Coins [1, 2, 5], Amount 11 -> Output: 3 coins (5 + 5 + 1)'
        },
        criteria: 'You can define state transitions, implement memoization and tabulation, and solve classic DP problems like Coin Change and LCS.'
      }
    ]
  },

  // ==========================================
  // 5. PYTHON PROGRAMMING (Core Track)
  // ==========================================
  'python-programming': {
    skillId: 'python-programming',
    title: 'Python Programming Pathway',
    tagline: 'Clean Code, Data Structures, Automation & AI Foundations',
    overview: 'Python is the world\'s most popular language for data science, artificial intelligence, scripting, and backend automation.',
    modules: [
      {
        id: 'py-mod-1',
        number: 1,
        title: 'Python Basics & Clean Syntax',
        estimatedHours: 3,
        topics: ['Indentation rules', 'Variables and dynamic typing', 'print() and f-strings', 'input() handling'],
        resources: [
          { name: 'Python.org Official Tutorial', url: 'https://docs.python.org/3/tutorial/', platform: 'Python Official', type: 'Official Docs' },
          { name: 'W3Schools Python', url: 'https://www.w3schools.com/python/', platform: 'W3Schools', type: 'Tutorial' }
        ],
        methodology: ['1. Write scripts without semicolons.', '2. Use f-strings for string interpolation.'],
        practice: { title: 'CLI Greeter', task: 'Ask student name and year, print formatted welcome message.', expectedOutput: 'Hello Alex! Welcome to Year 2.' },
        criteria: 'Can write, execute, and debug clean Python scripts with f-strings.'
      },
      {
        id: 'py-mod-2',
        number: 2,
        title: 'Lists, Tuples, Dictionaries, and Sets',
        estimatedHours: 4,
        topics: ['List indexing, slicing [start:stop:step]', 'Dictionary key-values', 'Tuples immutability', 'List comprehensions'],
        resources: [
          { name: 'Programiz Python Data Types', url: 'https://www.programiz.com/python-programming', platform: 'Programiz', type: 'Tutorial' }
        ],
        methodology: ['1. Practice list comprehension syntax: [x**2 for x in nums if x % 2 == 0].'],
        practice: { title: 'Student Grade Aggregator', task: 'Store names and marks in a dict, calculate highest and average.', expectedOutput: 'Top: Maya (94%)' },
        criteria: 'Can leverage list comprehensions and dictionaries for fast lookups.'
      }
    ]
  },

  // ==========================================
  // 6. CSS (Styling & Modern Layouts)
  // ==========================================
  'css': {
    skillId: 'css',
    title: 'Modern CSS & Responsive Design',
    tagline: 'Box Model, Flexbox, CSS Grid & Polished Micro-Interactions',
    overview: 'CSS breathes life and visual delight into web applications with responsive design and modern layouts.',
    modules: [
      {
        id: 'css-mod-1',
        number: 1,
        title: 'The CSS Box Model & Selectors',
        estimatedHours: 3,
        topics: ['Content, padding, border, margin', 'box-sizing: border-box', 'Class vs ID selectors', 'Specificity hierarchy'],
        resources: [
          { name: 'MDN CSS Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps', platform: 'MDN Web Docs', type: 'Documentation' },
          { name: 'W3Schools CSS Tutorial', url: 'https://www.w3schools.com/css/', platform: 'W3Schools', type: 'Tutorial' }
        ],
        methodology: ['1. Inspect box model in Chrome DevTools to visually see margin vs padding.'],
        practice: { title: 'Card Component Box Model', task: 'Build a profile card with padding, subtle borders, and margins.', expectedOutput: 'Well-spaced UI card.' },
        criteria: 'Understands box-sizing border-box and selector specificity.'
      },
      {
        id: 'css-mod-2',
        number: 2,
        title: 'Flexbox and CSS Grid Mastery',
        estimatedHours: 4,
        topics: ['Flexbox: justify-content, align-items, flex-direction', 'CSS Grid: grid-template-columns, gap', 'Media queries for mobile responsiveness'],
        resources: [
          { name: 'CSS-Tricks Complete Guide to Flexbox', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', platform: 'CSS-Tricks', type: 'Guide' }
        ],
        methodology: ['1. Create responsive multi-column layouts without floats.'],
        practice: { title: 'Responsive 3-Column Pricing Grid', task: 'Build a responsive pricing layout that stacks on mobile.', expectedOutput: 'Clean responsive grid.' },
        criteria: 'Can build fully responsive flexbox and grid layouts.'
      }
    ]
  },

  // ==========================================
  // 7. JAVASCRIPT (Modern ES6+)
  // ==========================================
  'javascript': {
    skillId: 'javascript',
    title: 'JavaScript Modern ES6+ & Web APIs',
    tagline: 'Dynamic DOM Manipulation, Async/Await & Event-Driven Engineering',
    overview: 'JavaScript powers the behavior of interactive web applications and server-side runtimes.',
    modules: [
      {
        id: 'js-mod-1',
        number: 1,
        title: 'Modern ES6+ Syntax & DOM Manipulation',
        estimatedHours: 4,
        topics: ['let, const vs var', 'Arrow functions and template literals', 'document.querySelector() and event listeners', 'Modifying classList and innerHTML'],
        resources: [
          { name: 'JavaScript.info Modern Tutorial', url: 'https://javascript.info/', platform: 'JavaScript.info', type: 'In-Depth Tutorial' },
          { name: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', platform: 'MDN Web Docs', type: 'Documentation' }
        ],
        methodology: ['1. Bind click handlers with addEventListener.', '2. Update DOM elements dynamically.'],
        practice: { title: 'Interactive Counter App', task: 'Build a counter with Increment, Decrement, and Reset buttons updating the DOM.', expectedOutput: 'Functional counter UI.' },
        criteria: 'Can manipulate DOM elements and bind event handlers without errors.'
      },
      {
        id: 'js-mod-2',
        number: 2,
        title: 'Asynchronous JavaScript: Promises & Fetch API',
        estimatedHours: 5,
        topics: ['The JavaScript Event Loop', 'Promises and .then() / .catch()', 'async and await syntax', 'Fetching data from REST APIs (fetch())'],
        resources: [
          { name: 'MDN Asynchronous JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous', platform: 'MDN Web Docs', type: 'Documentation' }
        ],
        methodology: ['1. Use async/await to call a public API like PokeAPI or JSONPlaceholder.'],
        practice: { title: 'Random User / Quote Fetcher', task: 'Fetch and display quotes from a free public API with loading states.', expectedOutput: 'Live API quote card.' },
        criteria: 'Can handle asynchronous operations with async/await and try/catch.'
      }
    ]
  },

  // ==========================================
  // 8. DATABASE MANAGEMENT & SQL
  // ==========================================
  'sql-dbms': {
    skillId: 'sql-dbms',
    title: 'Database Management and SQL',
    tagline: 'Relational Schema Design, Complex Queries & Transactional Integrity',
    overview: 'Relational databases store the world\'s persistent data. Master SELECT, JOIN, GROUP BY, and schema modeling.',
    modules: [
      {
        id: 'sql-mod-1',
        number: 1,
        title: 'SQL Querying Foundations',
        estimatedHours: 3,
        topics: ['Relational tables, rows, and columns', 'SELECT, WHERE, ORDER BY, LIMIT', 'Filtering with LIKE, IN, BETWEEN, AND, OR', 'Primary keys and foreign keys'],
        resources: [
          { name: 'W3Schools SQL Tutorial', url: 'https://www.w3schools.com/sql/', platform: 'W3Schools', type: 'Interactive' },
          { name: 'SQLBolt - Learn SQL with simple interactive exercises', url: 'https://sqlbolt.com/', platform: 'SQLBolt', type: 'Interactive Course' }
        ],
        methodology: ['1. Practice writing SELECT queries on sample tables on SQLBolt.'],
        practice: { title: 'Student Database Queries', task: 'Query students who scored above 80 in Computer Science, sorted by GPA descending.', expectedOutput: 'Filtered SQL query table.' },
        criteria: 'Can filter and sort records using WHERE, LIKE, and ORDER BY.'
      },
      {
        id: 'sql-mod-2',
        number: 2,
        title: 'Joins and Aggregations',
        estimatedHours: 4,
        topics: ['INNER JOIN, LEFT JOIN, RIGHT JOIN', 'Aggregate functions: COUNT, SUM, AVG, MIN, MAX', 'GROUP BY and HAVING clauses', 'Subqueries basics'],
        resources: [
          { name: 'GeeksforGeeks SQL Joins', url: 'https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/', platform: 'GeeksforGeeks', type: 'Reference' }
        ],
        methodology: ['1. Join customers and orders tables to calculate spending per user.'],
        practice: { title: 'Department Salary & Student Enrollment Reports', task: 'Write an INNER JOIN query grouping enrollments by department and calculating average GPA.', expectedOutput: 'Aggregated department statistics.' },
        criteria: 'Can perform multi-table JOINs and group summaries using HAVING.'
      }
    ]
  }
};
