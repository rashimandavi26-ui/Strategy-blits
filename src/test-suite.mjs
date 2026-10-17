import { CAREERS } from './data/careers.js';
import { SKILLS_CATALOG } from './data/skillsData.js';
import { SKILL_ROADMAPS } from './data/skillRoadmaps.js';
import { QUIZZES, CODE_EXERCISES, DSA_PROBLEMS } from './data/practiceData.js';
import { calculateCareerMatches } from './utils/careerMatcher.js';
import { generateSmartRecommendations } from './utils/recommendationEngine.js';
import { calculateStreak } from './utils/storage.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${message}`);
  } else {
    failed++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('=== TEST SUITE 1: CAREER DISCOVERY & MATCHING ===');
assert(CAREERS.length === 12, `All 12 careers exist (found: ${CAREERS.length})`);
const requiredCareerIds = [
  'software-developer', 'frontend-developer', 'backend-developer', 'full-stack-developer',
  'ai-ml-engineer', 'data-analyst', 'data-scientist', 'cybersecurity-analyst',
  'cloud-engineer', 'ui-ux-designer', 'product-manager', 'digital-marketer'
];
requiredCareerIds.forEach(id => {
  assert(CAREERS.some(c => c.id === id), `Career '${id}' exists`);
});

const sampleProfile = {
  name: 'Alex Chen',
  degree: 'B.Tech / B.E.',
  branch: 'Computer Science & Engineering',
  yearOfStudy: '3rd Year',
  interests: ['Programming', 'Artificial Intelligence', 'Data Analysis'],
  skills: ['Programming', 'Mathematics'],
  skillProficiencies: { 'Programming': 'Intermediate', 'Mathematics': 'Advanced' },
  preferredCareers: ['software-developer', 'ai-ml-engineer'],
  availableTimePerDay: 45,
  careerGoal: 'Software Development Engineer at top tech company',
  learningStyle: 'Hands-on Project-First'
};

const matches = calculateCareerMatches(sampleProfile);
assert(matches.length === 12, 'Match engine scores all 12 careers');
assert(matches[0].matchPercentage >= 75 && matches[0].matchPercentage <= 98, `Top match percentage within realistic bounds (${matches[0].matchPercentage}%)`);
assert(matches[0].explanation && matches[0].explanation.length > 20, 'Top match has customized rationale');
assert(matches[0].skillsToDevelop.length > 0, 'Skills to develop populated');
assert(matches[0].recommendedSequence.length > 0, 'Recommended learning sequence populated');

console.log('\n=== TEST SUITE 2: SKILL CATALOG & ROADMAPS ===');
assert(SKILLS_CATALOG.length >= 18, `Skill catalog has at least 18 skills (found: ${SKILLS_CATALOG.length})`);
assert(SKILL_ROADMAPS['c-programming'], 'C Programming roadmap exists');
assert(SKILL_ROADMAPS['c-programming'].modules.length === 9, `C roadmap has all 9 modules (found: ${SKILL_ROADMAPS['c-programming'].modules.length})`);

assert(SKILL_ROADMAPS['html'], 'HTML roadmap exists');
assert(SKILL_ROADMAPS['html'].modules.length === 8, `HTML roadmap has all 8 modules (found: ${SKILL_ROADMAPS['html'].modules.length})`);

assert(SKILL_ROADMAPS['java-programming'], 'Java roadmap exists');
assert(SKILL_ROADMAPS['java-programming'].modules.length === 10, `Java roadmap has all 10 modules (found: ${SKILL_ROADMAPS['java-programming'].modules.length})`);

assert(SKILL_ROADMAPS['dsa'], 'DSA roadmap exists');
assert(SKILL_ROADMAPS['dsa'].modules.length === 13, `DSA roadmap has all 13 modules (found: ${SKILL_ROADMAPS['dsa'].modules.length})`);

// Verify all resources have valid HTTPS URLs
let allUrlsValid = true;
Object.values(SKILL_ROADMAPS).forEach(rm => {
  rm.modules.forEach(m => {
    m.resources.forEach(res => {
      if (!res.url || !res.url.startsWith('https://')) {
        allUrlsValid = false;
        console.error(`Invalid URL: ${res.name} -> ${res.url}`);
      }
    });
  });
});
assert(allUrlsValid, 'All educational resource links use secure verified HTTPS URLs');

console.log('\n=== TEST SUITE 3: QUIZZES, PRACTICE & DSA ===');
assert(Object.keys(QUIZZES).length >= 4, `Quizzes catalog loaded (${Object.keys(QUIZZES).length} quizzes)`);
let quizzesValid = true;
Object.entries(QUIZZES).forEach(([id, qz]) => {
  qz.questions.forEach((q, i) => {
    if (!q.question || !q.options || q.options.length < 2 || q.correctIndex >= q.options.length || !q.explanation) {
      quizzesValid = false;
      console.error(`Invalid question in quiz ${id} at index ${i}`);
    }
  });
});
assert(quizzesValid, 'All quiz questions have valid text, options, correctIndex, and explanations');

assert(CODE_EXERCISES.length >= 3, `Code exercises available (${CODE_EXERCISES.length})`);
assert(DSA_PROBLEMS.length >= 5, `DSA problem sets available (${DSA_PROBLEMS.length})`);
DSA_PROBLEMS.forEach(p => {
  assert(p.hints.length >= 2, `Problem '${p.title}' has multiple hints`);
  assert(p.solutionCode && p.solutionCode.length > 20, `Problem '${p.title}' has full solution code`);
});

console.log('\n=== TEST SUITE 4: CONSISTENCY STREAK & LOGIC ===');
const mockHistory = [
  { date: '2026-10-16', minutes: 30 },
  { date: '2026-10-15', minutes: 45 },
  { date: '2026-10-14', minutes: 20 }
];
const calculatedStreak = calculateStreak(mockHistory);
assert(calculatedStreak === 3, `Streak calculation returns consecutive days (got: ${calculatedStreak})`);

console.log('\n=== TEST SUITE 5: SMART RECOMMENDATION ENGINE ===');
const recommendations = generateSmartRecommendations({
  profile: { skills: [], availableTimePerDay: 30 },
  selectedCareerId: 'software-developer',
  activeSkills: ['c-programming', 'html', 'dsa', 'python-programming'],
  completedModules: [],
  quizResults: { 'c-mod-1': { percentage: 50 } }
});
assert(recommendations.length > 0, `Smart recommendations generated (${recommendations.length} recommendations)`);
assert(recommendations.some(r => r.type === 'review'), 'Quiz review recommendation triggered for score < 70%');
assert(recommendations.some(r => r.type === 'pace'), 'Pacing recommendation triggered for > 3 courses with 30 min/day');

console.log(`\n========================================`);
console.log(`TEST SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log(`========================================`);

if (failed > 0) process.exit(1);
