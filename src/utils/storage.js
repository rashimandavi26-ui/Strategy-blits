/**
 * Centralized Local Storage Persistence Layer for AI Career Guide
 * Strictly browser localStorage with safe JSON parsing and schema resilience.
 */

const STORAGE_KEYS = {
  PROFILE: 'ai_career_guide_profile',
  SELECTED_CAREER: 'ai_career_guide_selected_career',
  COMPLETED_TASKS: 'ai_career_guide_completed_tasks',
  COMPLETED_MODULES: 'ai_career_guide_completed_modules',
  ACTIVE_SKILLS: 'ai_career_guide_active_skills',
  KNOWN_SKILLS: 'ai_career_guide_known_skills',
  SKILL_TARGET_DATES: 'ai_career_guide_skill_target_dates',
  DAILY_TASKS: 'ai_career_guide_daily_tasks',
  DAILY_CHECKINS: 'ai_career_guide_daily_checkins',
  ACTIVITY_HISTORY: 'ai_career_guide_activity_history',
  WEEKLY_GOAL: 'ai_career_guide_weekly_goal',
  QUIZ_RESULTS: 'ai_career_guide_quiz_results',
  PROJECT_PROGRESS: 'ai_career_guide_project_progress',
  SOLVED_DSA: 'ai_career_guide_solved_dsa',
  PAUSED_SKILLS: 'ai_career_guide_paused_skills',
  TASK_NOTES: 'ai_career_guide_task_notes',
  CELEBRATIONS: 'ai_career_guide_celebrations'
};

export const DEMO_PROFILES = [
  {
    name: 'Alex Chen',
    degree: 'B.Tech / B.E.',
    branch: 'Computer Science & Engineering',
    yearOfStudy: '3rd Year',
    interests: ['Artificial Intelligence', 'Programming', 'Data Analysis', 'Problem Solving'],
    skills: ['Programming', 'Problem-solving', 'Mathematics', 'Analytical thinking'],
    skillProficiencies: {
      'Programming': 'Intermediate',
      'Problem-solving': 'Intermediate',
      'Mathematics': 'Advanced',
      'Analytical thinking': 'Intermediate'
    },
    preferredCareers: ['software-developer', 'ai-ml-engineer', 'backend-developer'],
    availableTimePerDay: 45, // minutes
    learningStyle: 'Hands-on Project-First',
    shortTermGoal: 'Build an AI application & prepare for coding interviews',
    longTermGoal: 'Machine Learning Engineer at an AI Innovation Lab',
    workStyle: 'Technical & Deep Coding',
    careerGoal: 'Transition into AI/ML & Land High-Paying Job',
    educationLevel: 'Undergraduate 3rd/4th Year',
    experienceLevel: 'Intermediate / Academic'
  },
  {
    name: 'Priya Sharma',
    degree: 'B.Tech',
    branch: 'Information Technology',
    yearOfStudy: '1st Year',
    interests: ['Programming', 'Web Development', 'Problem Solving'],
    skills: ['Problem-solving', 'Communication'],
    skillProficiencies: {
      'Problem-solving': 'Beginner',
      'Communication': 'Intermediate'
    },
    preferredCareers: ['software-developer', 'frontend-developer', 'full-stack-developer'],
    availableTimePerDay: 30, // minutes
    learningStyle: 'Visual & Interactive Tutorials',
    shortTermGoal: 'Master C programming fundamentals and build first calculator',
    longTermGoal: 'Full-Stack Software Development Engineer at top tech company',
    workStyle: 'Technical & Deep Coding',
    careerGoal: 'Get First Tech Internship',
    educationLevel: 'Undergraduate 1st Year',
    experienceLevel: 'Complete Beginner'
  },
  {
    name: 'Jordan Lee',
    degree: 'BCA / B.Sc Computer Science',
    branch: 'Data Science & Analytics',
    yearOfStudy: '2nd Year',
    interests: ['Data Analysis', 'Business', 'Programming'],
    skills: ['Analytical thinking', 'Mathematics', 'Communication'],
    skillProficiencies: {
      'Analytical thinking': 'Intermediate',
      'Mathematics': 'Intermediate',
      'Communication': 'Advanced'
    },
    preferredCareers: ['data-analyst', 'data-scientist', 'product-manager'],
    availableTimePerDay: 60, // minutes
    learningStyle: 'Structured Course & Video',
    shortTermGoal: 'Master SQL and build student performance dashboard',
    longTermGoal: 'Lead Data Analytics for consumer tech enterprise',
    workStyle: 'Analytical & Problem Solving',
    careerGoal: 'Build Standout Practical Projects & Portfolio',
    educationLevel: 'Undergraduate 2nd Year',
    experienceLevel: 'Intermediate / Academic'
  }
];

// Helper: Safe Read
function getJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    console.warn(`Error reading key ${key} from localStorage`, err);
    return fallback;
  }
}

// Helper: Safe Write
function setJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn(`Error saving key ${key} to localStorage`, err);
  }
}

// ================= PROFILE =================
export function getStoredProfile() {
  return getJSON(STORAGE_KEYS.PROFILE, null);
}

export function saveStoredProfile(profile) {
  setJSON(STORAGE_KEYS.PROFILE, profile);
}

// ================= SELECTED CAREER =================
export function getSelectedCareerId() {
  try {
    return localStorage.getItem(STORAGE_KEYS.SELECTED_CAREER) || null;
  } catch {
    return null;
  }
}

export function saveSelectedCareerId(careerId) {
  try {
    localStorage.setItem(STORAGE_KEYS.SELECTED_CAREER, careerId);
  } catch (err) {
    console.error('Error saving selected career', err);
  }
}

// ================= COMPLETED TASKS (CAREER ROADMAP) =================
export function getCompletedTasks() {
  return getJSON(STORAGE_KEYS.COMPLETED_TASKS, []);
}

export function saveCompletedTasks(tasksArray) {
  setJSON(STORAGE_KEYS.COMPLETED_TASKS, tasksArray);
}

export function toggleTask(taskId) {
  const current = getCompletedTasks();
  let updated;
  if (current.includes(taskId)) {
    updated = current.filter((id) => id !== taskId);
  } else {
    updated = [...current, taskId];
    recordActivityToday(15); // Auto-log 15 minutes of study effort
  }
  saveCompletedTasks(updated);
  return updated;
}

// ================= COMPLETED SKILL MODULES =================
export function getCompletedModules() {
  return getJSON(STORAGE_KEYS.COMPLETED_MODULES, []);
}

export function saveCompletedModules(modulesArray) {
  setJSON(STORAGE_KEYS.COMPLETED_MODULES, modulesArray);
}

export function toggleModule(moduleId) {
  const current = getCompletedModules();
  let updated;
  if (current.includes(moduleId)) {
    updated = current.filter((id) => id !== moduleId);
  } else {
    updated = [...current, moduleId];
    recordActivityToday(30); // 30 minutes of study effort
  }
  saveCompletedModules(updated);
  return updated;
}

// ================= ACTIVE SKILLS (LEARNING PLAN) =================
export function getActiveSkills() {
  return getJSON(STORAGE_KEYS.ACTIVE_SKILLS, []);
}

export function saveActiveSkills(skillsArray) {
  setJSON(STORAGE_KEYS.ACTIVE_SKILLS, skillsArray);
}

export function toggleActiveSkill(skillId) {
  const current = getActiveSkills();
  let updated;
  if (current.includes(skillId)) {
    updated = current.filter((id) => id !== skillId);
  } else {
    updated = [...current, skillId];
  }
  saveActiveSkills(updated);
  return updated;
}

// ================= KNOWN SKILLS =================
export function getKnownSkills() {
  return getJSON(STORAGE_KEYS.KNOWN_SKILLS, []);
}

export function toggleKnownSkill(skillId) {
  const current = getKnownSkills();
  let updated;
  if (current.includes(skillId)) {
    updated = current.filter((id) => id !== skillId);
  } else {
    updated = [...current, skillId];
  }
  setJSON(STORAGE_KEYS.KNOWN_SKILLS, updated);
  return updated;
}

// ================= SKILL TARGET DATES =================
export function getSkillTargetDates() {
  return getJSON(STORAGE_KEYS.SKILL_TARGET_DATES, {});
}

export function saveSkillTargetDate(skillId, dateString) {
  const current = getSkillTargetDates();
  current[skillId] = dateString;
  setJSON(STORAGE_KEYS.SKILL_TARGET_DATES, current);
  return current;
}

// ================= DAILY PLANNER & CHECKINS =================
export function getDailyTasks() {
  return getJSON(STORAGE_KEYS.DAILY_TASKS, null);
}

export function saveDailyTasks(tasks) {
  setJSON(STORAGE_KEYS.DAILY_TASKS, tasks);
}

export function getDailyCheckIns() {
  return getJSON(STORAGE_KEYS.DAILY_CHECKINS, []);
}

function todayLocal() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function saveDailyCheckIn(entry) {
  const current = getDailyCheckIns();
  const todayStr = todayLocal();
  const filtered = current.filter((c) => c.date !== todayStr);
  const updated = [{ ...entry, date: todayStr, timestamp: Date.now() }, ...filtered];
  setJSON(STORAGE_KEYS.DAILY_CHECKINS, updated);
  recordActivityToday(20);
  return updated;
}

// ================= CONSISTENCY, STREAK & ACTIVITY =================
export function getActivityHistory() {
  // Array of { date: 'YYYY-MM-DD', minutes: number, tasksCount: number }
  const history = getJSON(STORAGE_KEYS.ACTIVITY_HISTORY, []);
  return Array.isArray(history) ? history : [];
}

export function getPausedSkills() {
  return getJSON(STORAGE_KEYS.PAUSED_SKILLS, []);
}

export function togglePausedSkill(skillId) {
  const current = getPausedSkills();
  const updated = current.includes(skillId)
    ? current.filter((id) => id !== skillId)
    : [...current, skillId];
  setJSON(STORAGE_KEYS.PAUSED_SKILLS, updated);
  return updated;
}

export function getTaskNotes() {
  return getJSON(STORAGE_KEYS.TASK_NOTES, {});
}

export function saveTaskNotes(notes) {
  setJSON(STORAGE_KEYS.TASK_NOTES, notes);
  return notes;
}

export function getCelebrations() {
  return getJSON(STORAGE_KEYS.CELEBRATIONS, {});
}

export function markCelebration(key) {
  const current = getCelebrations();
  if (current[key]) return { shown: false, celebrations: current };
  current[key] = Date.now();
  setJSON(STORAGE_KEYS.CELEBRATIONS, current);
  return { shown: true, celebrations: current };
}

export function recordActivityToday(minutesToAdd = 15) {
  const history = getActivityHistory();
  const todayStr = todayLocal();
  const existingIndex = history.findIndex((h) => h.date === todayStr);

  if (existingIndex >= 0) {
    history[existingIndex].minutes += minutesToAdd;
    history[existingIndex].tasksCount += 1;
  } else {
    history.push({
      date: todayStr,
      minutes: minutesToAdd,
      tasksCount: 1
    });
  }

  setJSON(STORAGE_KEYS.ACTIVITY_HISTORY, history);
  return history;
}

export function calculateStreak(history) {
  if (!history || history.length === 0) return 0;

  const pad = (n) => String(n).padStart(2, '0');
  const toLocal = (date) =>
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

  const activeDates = new Set(history.filter((h) => h.minutes > 0).map((h) => h.date));
  let streak = 0;
  const current = new Date();
  const todayStr = toLocal(current);

  if (!activeDates.has(todayStr)) {
    current.setDate(current.getDate() - 1);
  }

  while (activeDates.has(toLocal(current))) {
    streak += 1;
    current.setDate(current.getDate() - 1);
  }

  return streak;
}

export function getWeeklyGoalMinutes() {
  return getJSON(STORAGE_KEYS.WEEKLY_GOAL, 180); // Default 3 hours per week
}

export function saveWeeklyGoalMinutes(minutes) {
  setJSON(STORAGE_KEYS.WEEKLY_GOAL, minutes);
}

// ================= QUIZ RESULTS =================
export function getQuizResults() {
  return getJSON(STORAGE_KEYS.QUIZ_RESULTS, {});
}

export function saveQuizResult(moduleId, score, totalQuestions) {
  const current = getQuizResults();
  current[moduleId] = {
    score,
    totalQuestions,
    percentage: Math.round((score / totalQuestions) * 100),
    timestamp: Date.now()
  };
  setJSON(STORAGE_KEYS.QUIZ_RESULTS, current);
  recordActivityToday(15);
  return current;
}

// ================= PROJECT PROGRESS =================
export function getProjectProgress() {
  return getJSON(STORAGE_KEYS.PROJECT_PROGRESS, {});
}

export function saveProjectMilestone(projectId, milestoneId, isDone) {
  const current = getProjectProgress();
  if (!current[projectId]) {
    current[projectId] = { milestones: {}, completed: false };
  }
  current[projectId].milestones[milestoneId] = isDone;
  setJSON(STORAGE_KEYS.PROJECT_PROGRESS, current);
  if (isDone) recordActivityToday(25);
  return current;
}

// ================= SOLVED DSA PROBLEMS =================
export function getSolvedDsa() {
  return getJSON(STORAGE_KEYS.SOLVED_DSA, []);
}

export function toggleSolvedDsa(problemId) {
  const current = getSolvedDsa();
  let updated;
  if (current.includes(problemId)) {
    updated = current.filter((id) => id !== problemId);
  } else {
    updated = [...current, problemId];
    recordActivityToday(20);
  }
  setJSON(STORAGE_KEYS.SOLVED_DSA, updated);
  return updated;
}

// ================= RESET STORAGE =================
export function clearAllStorage() {
  try {
    Object.values(STORAGE_KEYS).forEach((k) => localStorage.removeItem(k));
  } catch (err) {
    console.error('Error clearing localStorage', err);
  }
}
