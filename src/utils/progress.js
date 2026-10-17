import { QUIZZES } from '../data/practiceData';

export const QUIZ_PASS_PERCENT = 70;

export function canCompleteModule(moduleId, quizResults = {}) {
  const quiz = QUIZZES[moduleId];
  if (!quiz) return true;
  const result = quizResults[moduleId];
  return Boolean(result && result.percentage >= QUIZ_PASS_PERCENT);
}

export function estimateCalendarDays(hours, minutesPerDay = 30) {
  const totalMinutes = Math.max(30, (Number(hours) || 1) * 60);
  const daily = Math.max(10, Number(minutesPerDay) || 30);
  return Math.max(1, Math.ceil(totalMinutes / daily));
}

export function localDateString(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
