/**
 * Rule-Based Smart Learning Recommendation Engine
 * Provides actionable, transparent pedagogical guidance based on:
 * - Selected target career
 * - Student's prior skills & proficiencies
 * - Completed roadmap modules
 * - Recent quiz performance
 * - Available study time per day
 */

export function generateSmartRecommendations({
  profile,
  selectedCareerId,
  activeSkills = [],
  completedModules = [],
  quizResults = {},
  availableTime = 30
}) {
  const recommendations = [];

  const careerId = selectedCareerId || 'software-developer';
  const skillsKnown = profile?.skills || [];
  const proficiencies = profile?.skillProficiencies || {};
  const hasProgramming = skillsKnown.includes('Programming') && proficiencies['Programming'] !== 'Beginner';

  // Rule 1: Beginner in Software / Backend / Full-Stack with zero programming
  if ((careerId === 'software-developer' || careerId === 'backend-developer') && !hasProgramming) {
    if (!activeSkills.includes('c-programming') && !activeSkills.includes('java-programming') && !activeSkills.includes('python-programming')) {
      recommendations.push({
        id: 'rec-start-lang',
        type: 'priority',
        badge: 'Prerequisite Alert',
        title: 'Start with a Single Foundational Language (C or Java)',
        reason: 'You selected Software Development but are starting out in programming. Jumping straight into complex frameworks or DSA can cause cognitive overload. We recommend mastering C or Java fundamentals first before tackling advanced structures.',
        actionLabel: 'Add C Programming to My Plan',
        actionSkillId: 'c-programming'
      });
    }
  }

  // Rule 2: Frontend Sequence (HTML -> CSS -> JavaScript)
  if (careerId === 'frontend-developer' || careerId === 'full-stack-developer') {
    const htmlDone = completedModules.some(m => m.startsWith('html-'));
    if (!htmlDone && !activeSkills.includes('html')) {
      recommendations.push({
        id: 'rec-frontend-html',
        type: 'sequence',
        badge: 'Logical Web Sequence',
        title: 'Begin with Semantic HTML5 Foundations',
        reason: 'Frontend development starts with the document structure and accessible tags. Once comfortable with HTML, you will smoothly progress to CSS layouts and then JavaScript interactivity.',
        actionLabel: 'Open HTML Roadmap',
        actionSkillId: 'html'
      });
    }
  }

  // Rule 3: Quiz Performance Review
  const lowScoreQuizzes = Object.entries(quizResults).filter(([modId, res]) => res.percentage < 70);
  if (lowScoreQuizzes.length > 0) {
    const [modId, res] = lowScoreQuizzes[0];
    recommendations.push({
      id: `rec-quiz-review-${modId}`,
      type: 'review',
      badge: 'Concept Revision Needed',
      title: `Review Module (${res.percentage}% Quiz Score)`,
      reason: `Your score on module quiz "${modId}" was ${res.percentage}%. Mastering core concepts early prevents compounding errors later. We recommend reviewing the lesson documentation and attempting the interactive practice exercises again.`,
      actionLabel: 'Review Module & Retake Quiz',
      actionModuleId: modId
    });
  }

  // Rule 4: Progression to DSA after Foundations
  const cDone = completedModules.filter(m => m.startsWith('c-mod-')).length >= 3;
  const javaDone = completedModules.filter(m => m.startsWith('java-mod-')).length >= 3;
  if ((cDone || javaDone || hasProgramming) && !activeSkills.includes('dsa')) {
    recommendations.push({
      id: 'rec-intro-dsa',
      type: 'growth',
      badge: 'Next Milestone',
      title: 'Introduce Data Structures and Algorithms (DSA)',
      reason: 'You have mastered basic control flow and variables. Introducing Big-O notation, arrays, and two-pointer techniques now will build strong algorithmic problem-solving habits for campus placements.',
      actionLabel: 'Explore DSA Roadmap',
      actionSkillId: 'dsa'
    });
  }

  // Rule 5: Time Management / Overload Protection
  const dailyMins = profile?.availableTimePerDay || availableTime || 30;
  if (dailyMins <= 30 && activeSkills.length > 3) {
    recommendations.push({
      id: 'rec-focus-load',
      type: 'pace',
      badge: 'Study Pace Guidance',
      title: 'Maintain 1-2 Focused Active Courses',
      reason: `With ${dailyMins} minutes available each day, juggling ${activeSkills.length} active skills risks dilution and habit dropout. Focus on your primary language and one supporting topic to sustain consistent 30-day momentum.`,
      actionLabel: 'Review Active Learning Hub',
      actionTab: 'learning-hub'
    });
  }

  // Fallback Baseline Recommendation if none triggered
  if (recommendations.length === 0) {
    recommendations.push({
      id: 'rec-steady-pace',
      type: 'encouragement',
      badge: 'On Track',
      title: 'Complete Today\'s Daily Task & Hands-on Practice',
      reason: 'Your learning schedule is balanced. Consistently writing code for 20-30 minutes each day builds stronger neural recall than binge-studying once a week.',
      actionLabel: 'Open Daily Planner',
      actionTab: 'daily-planner'
    });
  }

  return recommendations;
}
