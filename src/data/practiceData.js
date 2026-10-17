/**
 * Interactive Practice Data:
 * - Module Quizzes with scoring and detailed explanations
 * - Code Simulation Exercises with sample expected outputs
 * - DSA Problem Sets with difficulty, hints, and step-by-step solutions
 */

export const QUIZZES = {
  'c-mod-1': {
    skillId: 'c-programming',
    moduleId: 'c-mod-1',
    title: 'C Programming: Getting Started Quiz',
    questions: [
      {
        id: 'cq-1',
        question: 'Which header file is necessary in C to use the printf() and scanf() functions?',
        options: ['<stdlib.h>', '<stdio.h>', '<math.h>', '<string.h>'],
        correctIndex: 1,
        explanation: '<stdio.h> stands for Standard Input Output header and contains declarations for printf(), scanf(), and file stream operations.'
      },
      {
        id: 'cq-2',
        question: 'What is the return type of the main() function according to modern C standards (C99/C11)?',
        options: ['void', 'int', 'char', 'float'],
        correctIndex: 1,
        explanation: 'The standard entry point is "int main()", returning 0 to the operating system to signal successful execution without errors.'
      },
      {
        id: 'cq-3',
        question: 'Which escape sequence moves the console cursor to a new line in C?',
        options: ['\\t', '\\r', '\\n', '\\0'],
        correctIndex: 2,
        explanation: '\\n represents a newline character. \\t is horizontal tab, and \\0 is the null string terminator.'
      }
    ]
  },
  'c-mod-2': {
    skillId: 'c-programming',
    moduleId: 'c-mod-2',
    title: 'C Programming: Variables & Data Types Quiz',
    questions: [
      {
        id: 'cq-4',
        question: 'Which format specifier is used in scanf() to read an integer variable?',
        options: ['%f', '%s', '%d', '%c'],
        correctIndex: 2,
        explanation: '%d is used for signed decimal integers. %f is for floats, %s for strings, and %c for individual characters.'
      },
      {
        id: 'cq-5',
        question: 'Why is the ampersand (&) symbol placed before the variable name in scanf("%d", &num)?',
        options: [
          'It tells the compiler the variable is an integer.',
          'It passes the memory address of the variable so scanf can write into it.',
          'It is a syntax relic and can be omitted safely.',
          'It checks whether the variable is positive.'
        ],
        correctIndex: 1,
        explanation: 'In C, parameters are passed by value. To allow scanf() to modify num in the caller, we must pass its memory address (&num).'
      },
      {
        id: 'cq-6',
        question: 'What is the standard byte size of an int data type on modern 64-bit systems in C?',
        options: ['1 byte', '2 bytes', '4 bytes', '8 bytes'],
        correctIndex: 2,
        explanation: 'On standard modern 32-bit and 64-bit architectures, int is typically 4 bytes (32 bits), holding values from -2,147,483,648 to 2,147,483,647.'
      }
    ]
  },
  'c-mod-7': {
    skillId: 'c-programming',
    moduleId: 'c-mod-7',
    title: 'C Programming: Pointers & Memory Addresses Quiz',
    questions: [
      {
        id: 'cq-7',
        question: 'If int a = 10; int *p = &a; what does *p evaluate to?',
        options: ['The memory address of a', '10', 'The memory address of pointer p', 'Garbage value'],
        correctIndex: 1,
        explanation: '*p dereferences the pointer, accessing the value stored at address &a, which is 10.'
      },
      {
        id: 'cq-8',
        question: 'What happens when you increment a pointer (ptr++) that points to an int on a 4-byte system?',
        options: [
          'The address in ptr increases by 1 byte.',
          'The address in ptr increases by 4 bytes (sizeof(int)).',
          'The value pointed to increases by 1.',
          'It results in a compiler syntax error.'
        ],
        correctIndex: 1,
        explanation: 'Pointer arithmetic scales by the size of the underlying type. Incrementing an int pointer advances the memory address by sizeof(int) (4 bytes).'
      }
    ]
  },
  'html-mod-1': {
    skillId: 'html',
    moduleId: 'html-mod-1',
    title: 'HTML: Document Structure Quiz',
    questions: [
      {
        id: 'hq-1',
        question: 'What is the primary purpose of the <!DOCTYPE html> declaration?',
        options: [
          'It connects an external CSS stylesheet.',
          'It instructs modern browsers to render in standard HTML5 mode rather than quirks mode.',
          'It defines the title shown on the browser tab.',
          'It provides server-side rendering parameters.'
        ],
        correctIndex: 1,
        explanation: '<!DOCTYPE html> is the standard HTML5 doctype that ensures web browsers render the document using modern HTML5 standards rather than legacy quirks mode.'
      },
      {
        id: 'hq-2',
        question: 'Which HTML tag contains metadata such as character encoding, title, and viewport configuration that is NOT directly displayed in the main viewport?',
        options: ['<body>', '<header>', '<head>', '<main>'],
        correctIndex: 2,
        explanation: '<head> holds metadata like <meta charset="UTF-8">, <title>, and linked stylesheets. The visible user interface goes inside <body>.'
      }
    ]
  },
  'html-mod-5': {
    skillId: 'html',
    moduleId: 'html-mod-5',
    title: 'HTML: Forms and User Inputs Quiz',
    questions: [
      {
        id: 'hq-3',
        question: 'How do you programmatically associate an HTML <label> with its corresponding <input>?',
        options: [
          'By giving both the same class name.',
          'By setting the label\'s "for" attribute equal to the input\'s "id" attribute.',
          'By placing the label anywhere in the document.',
          'By using the "name" attribute on the label.'
        ],
        correctIndex: 1,
        explanation: 'Setting <label for="email"> matches <input id="email">. This enables screen readers to announce the label and allows users to click the label to focus the input.'
      },
      {
        id: 'hq-4',
        question: 'Which attribute ensures an HTML form input cannot be submitted while empty?',
        options: ['validate="true"', 'mandatory', 'required', 'check="not-empty"'],
        correctIndex: 2,
        explanation: 'The boolean "required" attribute activates native browser form validation and prevents submission until the input is filled.'
      }
    ]
  },
  'java-mod-6': {
    skillId: 'java-programming',
    moduleId: 'java-mod-6',
    title: 'Java: Classes & OOP Encapsulation Quiz',
    questions: [
      {
        id: 'jq-1',
        question: 'What is the primary goal of encapsulation in Object-Oriented Programming?',
        options: [
          'To make all variables publicly readable and writable by any class.',
          'To bundle data with the methods that operate on it and protect internal state by making fields private.',
          'To force multiple inheritance between classes.',
          'To eliminate the need for constructors.'
        ],
        correctIndex: 1,
        explanation: 'Encapsulation restricts direct access to an object\'s fields using the private modifier, providing access only through controlled public getter and setter methods.'
      },
      {
        id: 'jq-2',
        question: 'What keyword refers to the current class instance inside a constructor or instance method?',
        options: ['super', 'self', 'this', 'parent'],
        correctIndex: 2,
        explanation: '"this" refers to the current object. It is commonly used to disambiguate class fields from constructor parameters: this.name = name;.'
      }
    ]
  },
  'dsa-mod-1': {
    skillId: 'dsa',
    moduleId: 'dsa-mod-1',
    title: 'DSA: Big-O Time & Space Complexity Quiz',
    questions: [
      {
        id: 'dq-1',
        question: 'What is the time complexity of Binary Search on a sorted array of size N?',
        options: ['O(1)', 'O(log N)', 'O(N)', 'O(N²)'],
        correctIndex: 1,
        explanation: 'Binary Search halves the search space with each comparison (N, N/2, N/4 ... 1), which takes logarithmic time O(log N).'
      },
      {
        id: 'dq-2',
        question: 'What is the worst-case time complexity of accessing an element by index in a standard array?',
        options: ['O(1)', 'O(N)', 'O(log N)', 'O(N log N)'],
        correctIndex: 0,
        explanation: 'Arrays store elements in contiguous memory. Accessing by index uses base_address + index * element_size, which computes in O(1) constant time.'
      },
      {
        id: 'dq-3',
        question: 'Two nested loops both iterating from 1 to N perform how many operations in total?',
        options: ['O(2N)', 'O(N log N)', 'O(N²)', 'O(N³)'],
        correctIndex: 2,
        explanation: 'The outer loop runs N times and for each step the inner loop runs N times, resulting in N * N = O(N²) quadratic time.'
      }
    ]
  }
};

export const CODE_EXERCISES = [
  {
    id: 'c-calc-ex',
    language: 'c',
    skillId: 'c-programming',
    title: 'C Simple Arithmetic Calculator',
    instructions: 'Complete the program below to read two integers "a" and "b" from standard input, calculate their sum and product, and print the result in the specified format.',
    starterCode: `#include <stdio.h>

int main() {
    int a, b;
    // Enter code to read two integers
    scanf("%d %d", &a, &b);
    
    // Calculate and print Sum and Product
    printf("Sum = %d\\n", a + b);
    printf("Product = %d\\n", a * b);
    
    return 0;
}`,
    expectedSampleInput: '10 5',
    expectedSampleOutput: 'Sum = 15\nProduct = 50',
    solutionCheck: (code) => {
      const hasScanf = code.includes('scanf');
      const hasSum = code.includes('Sum =') || code.includes('a + b') || code.includes('sum');
      const hasProduct = code.includes('Product =') || code.includes('a * b') || code.includes('product');
      return hasScanf && hasSum && hasProduct;
    }
  },
  {
    id: 'html-card-ex',
    language: 'html',
    skillId: 'html',
    title: 'Accessible Profile Card Markup',
    instructions: 'Create an accessible HTML profile card with an <h1> heading for the student name, a <p> tag with a short bio, an <img> tag with a descriptive alt attribute, and an external <a> link to GitHub.',
    starterCode: `<div class="profile-card">
  <!-- Add h1, p, img with alt, and a tag with rel="noopener noreferrer" -->
  <h1>Alex Chen</h1>
  <p>Computer Science Undergrad focusing on AI & Web Development.</p>
  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb" alt="Portrait headshot of student Alex Chen" width="120" />
  <a href="https://github.com" target="_blank" rel="noopener noreferrer">Visit GitHub Profile</a>
</div>`,
    expectedSampleInput: 'N/A (HTML Markup)',
    expectedSampleOutput: 'Rendered DOM card with h1, p, img with alt attribute, and secure anchor link.',
    solutionCheck: (code) => {
      const hasH1 = code.includes('<h1');
      const hasAlt = code.includes('alt=');
      const hasLink = code.includes('<a') && code.includes('href=');
      return hasH1 && hasAlt && hasLink;
    }
  },
  {
    id: 'java-oop-ex',
    language: 'java',
    skillId: 'java-programming',
    title: 'Java Encapsulated Student Class',
    instructions: 'Create a Student class with private fields (name, gpa), a constructor, and getter methods getGpa() and getName(). In the Main class, instantiate a student and print their information.',
    starterCode: `public class Main {
    static class Student {
        private String name;
        private double gpa;

        public Student(String name, double gpa) {
            this.name = name;
            this.gpa = gpa;
        }

        public String getName() { return name; }
        public double getGpa() { return gpa; }
    }

    public static void main(String[] args) {
        Student s = new Student("Priya", 3.85);
        System.out.println("Student: " + s.getName() + ", GPA: " + s.getGpa());
    }
}`,
    expectedSampleInput: 'N/A (Standard Execution)',
    expectedSampleOutput: 'Student: Priya, GPA: 3.85',
    solutionCheck: (code) => {
      const hasPrivate = code.includes('private');
      const hasConstructor = code.includes('Student(') || code.includes('this.');
      const hasGetter = code.includes('getGpa') || code.includes('getName');
      return hasPrivate && hasConstructor && hasGetter;
    }
  }
];

export const DSA_PROBLEMS = [
  {
    id: 'dsa-prob-1',
    title: 'Two Sum II (Sorted Array)',
    topic: 'Arrays & Two-Pointers',
    difficulty: 'Easy',
    difficultyColor: '#16C4D9',
    description: 'Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Return the indices of the two numbers [index1, index2]. You may not use the same element twice. Constant O(1) additional space must be used.',
    exampleInput: 'numbers = [2, 7, 11, 15], target = 9',
    exampleOutput: '[1, 2]',
    explanation: 'The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].',
    hints: [
      'Hint 1: Since the array is already sorted, can you place one pointer at the start (left) and one pointer at the end (right)?',
      'Hint 2: If numbers[left] + numbers[right] > target, moving the right pointer leftward decreases the sum. If the sum is too small, advance the left pointer.'
    ],
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    solutionCode: `// Java / C++ Two-Pointer Approach
int[] twoSum(int[] numbers, int target) {
    int left = 0;
    int right = numbers.length - 1;
    
    while (left < right) {
        int sum = numbers[left] + numbers[right];
        if (sum == target) {
            return new int[]{left + 1, right + 1}; // 1-indexed
        } else if (sum < target) {
            left++;  // Need larger sum
        } else {
            right--; // Need smaller sum
        }
    }
    return new int[]{-1, -1};
}`
  },
  {
    id: 'dsa-prob-2',
    title: 'Valid Parentheses',
    topic: 'Stacks',
    difficulty: 'Easy',
    difficultyColor: '#16C4D9',
    description: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid. An input string is valid if open brackets are closed by the same type of brackets and in the correct order.',
    exampleInput: 's = "()[]{}"',
    exampleOutput: 'true',
    explanation: 'Every bracket opens and closes symmetrically in correct LIFO sequence.',
    hints: [
      'Hint 1: A Stack data structure naturally supports Last-In, First-Out (LIFO) matching.',
      'Hint 2: Push opening brackets onto the stack. When encountering a closing bracket, pop the top and verify it matches.'
    ],
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N)',
    solutionCode: `// Java Stack Solution
boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    for (char c : s.toCharArray()) {
        if (c == '(') stack.push(')');
        else if (c == '{') stack.push('}');
        else if (c == '[') stack.push(']');
        else if (stack.isEmpty() || stack.pop() != c) {
            return false;
        }
    }
    return stack.isEmpty();
}`
  },
  {
    id: 'dsa-prob-3',
    title: 'Binary Search',
    topic: 'Searching',
    difficulty: 'Easy',
    difficultyColor: '#16C4D9',
    description: 'Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, return its index. Otherwise, return -1. You must write an algorithm with O(log N) runtime complexity.',
    exampleInput: 'nums = [-1, 0, 3, 5, 9, 12], target = 9',
    exampleOutput: '4',
    explanation: '9 exists in nums and its index is 4.',
    hints: [
      'Hint 1: Maintain search boundaries low = 0 and high = nums.length - 1.',
      'Hint 2: Avoid integer overflow in midpoint calculation with: mid = low + (high - low) / 2.'
    ],
    timeComplexity: 'O(log N)',
    spaceComplexity: 'O(1)',
    solutionCode: `int search(int[] nums, int target) {
    int low = 0, high = nums.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`
  },
  {
    id: 'dsa-prob-4',
    title: 'Reverse Linked List',
    topic: 'Linked Lists',
    difficulty: 'Medium',
    difficultyColor: '#FFC400',
    description: 'Given the head of a singly linked list, reverse the list in-place and return the reversed list head.',
    exampleInput: 'head = [1, 2, 3, 4, 5]',
    exampleOutput: '[5, 4, 3, 2, 1]',
    explanation: 'Pointers are reversed so that each node points to its predecessor.',
    hints: [
      'Hint 1: Maintain three pointer variables: prev = null, curr = head, and nextNode.',
      'Hint 2: Before redirecting curr.next to prev, store the original curr.next in nextNode!'
    ],
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)',
    solutionCode: `ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode curr = head;
    while (curr != null) {
        ListNode nextNode = curr.next; // store next
        curr.next = prev;              // reverse pointer
        prev = curr;                   // advance prev
        curr = nextNode;               // advance curr
    }
    return prev;
}`
  },
  {
    id: 'dsa-prob-5',
    title: 'Maximum Depth of Binary Tree',
    topic: 'Trees & Recursion',
    difficulty: 'Easy',
    difficultyColor: '#16C4D9',
    description: 'Given the root of a binary tree, return its maximum depth. A binary tree\'s maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.',
    exampleInput: 'root = [3, 9, 20, null, null, 15, 7]',
    exampleOutput: '3',
    explanation: 'The longest path goes from 3 -> 20 -> 15 (length 3).',
    hints: [
      'Hint 1: Base case: What is the depth of a null tree? 0.',
      'Hint 2: Recursive relation: maxDepth(root) = 1 + max(maxDepth(left), maxDepth(right)).'
    ],
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(h) where h is tree height',
    solutionCode: `int maxDepth(TreeNode root) {
    if (root == null) return 0;
    int leftDepth = maxDepth(root.left);
    int rightDepth = maxDepth(root.right);
    return 1 + Math.max(leftDepth, rightDepth);
}`
  }
];
