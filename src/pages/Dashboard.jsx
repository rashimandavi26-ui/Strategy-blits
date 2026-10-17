import React from 'react';
import { 
  LayoutDashboard, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  FolderGit2, 
  Edit3, 
  Target, 
  Award, 
  Clock, 
  TrendingUp, 
  Briefcase,
  Compass,
  Check,
  Flame,
  AlertTriangle,
  HelpCircle,
  BookOpen,
  Calendar
} from 'lucide-react';
import ProgressBar from '../components/ProgressBar';
import { CAREERS } from '../data/careers';
import { ROADMAPS } from '../data/roadmaps';
import { SKILL_ROADMAPS } from '../data/skillRoadmaps';
import { SKILLS_CATALOG } from '../data/skillsData';
import { generateSmartRecommendations } from '../utils/recommendationEngine';
import { calculateStreak, getActivityHistory, getWeeklyGoalMinutes, getQuizResults, getProjectProgress } from '../utils/storage';

export default function Dashboard({
  profile,
  recommendations = [],
  selectedCareerId,
  completedTaskIds = [],
  completedModules = [],
  activeSkills = [],
  onToggleTask,
  onToggleModule,
  onSelectCareer,
  onEditProfile,
  onExploreCareers,
  onGoToRoadmap,
  onGoToProjects,
  onGoToLearningHub,
  onGoToDailyPlanner,
  onGoToPractice
}) {
  // Empty State for new users who haven't completed profile
  if (!profile) {
    return (
      <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
        <div className="empty-state-card">
          <div className="empty-state-icon">
            <Compass size={36} />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
            Welcome to AI Career Guide
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '520px', margin: '0 auto 2rem' }}>
            You haven't completed your student profile yet. Share your degree, branch, current skills, and ambitions to unlock calculated skill progress, custom roadmaps, and daily habit tracking.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg" onClick={onEditProfile}>
              <Sparkles size={18} />
              Build My Student Profile
              <ArrowRight size={18} />
            </button>
            <button className="btn btn-secondary btn-lg" onClick={onExploreCareers}>
              <Briefcase size={18} />
              Browse Careers First
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentCareer = CAREERS.find((c) => c.id === selectedCareerId) || CAREERS[0];
  const careerRoadmap = ROADMAPS[currentCareer.id] || ROADMAPS['software-developer'];
  const allCareerTasks = careerRoadmap.stages.flatMap((s) => s.tasks);
  const totalTasks = allCareerTasks.length;
  const careerCompletedCount = allCareerTasks.filter((t) => completedTaskIds.includes(t.id)).length;
  
  // Consistency & Habits Data
  const activityHistory = getActivityHistory();
  const streak = calculateStreak(activityHistory);
  const weeklyGoal = getWeeklyGoalMinutes();
  const past7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const dateStr = d.toISOString().split('T')[0];
    const log = activityHistory.find(h => h.date === dateStr);
    return log ? log.minutes : 0;
  });
  const totalWeeklyMinutes = past7Days.reduce((a, b) => a + b, 0);

  // Quizzes Data
  const quizResults = getQuizResults();
  const quizEntries = Object.entries(quizResults);
  const quizCount = quizEntries.length;
  const avgQuizScore = quizCount > 0 
    ? Math.round(quizEntries.reduce((acc, [, r]) => acc + r.percentage, 0) / quizCount) 
    : 0;
  const revisionModules = quizEntries.filter(([, r]) => r.percentage < 70);

  // Projects Data
  const projectProgress = getProjectProgress();
  const completedProjectsCount = Object.values(projectProgress).filter(p => {
    const milestones = Object.values(p.milestones || {});
    return milestones.length > 0 && milestones.every(Boolean);
  }).length;

  // Real Calculated Separate Progress for Each Active Skill (Section 12)
  const skillsToTrack = activeSkills.length > 0 ? activeSkills : ['c-programming', 'html', 'dsa'];
  const activeSkillProgressList = skillsToTrack.map((skillId) => {
    const catalogItem = SKILLS_CATALOG.find(s => s.id === skillId) || { name: skillId };
    const roadmap = SKILL_ROADMAPS[skillId];
    if (!roadmap || !roadmap.modules || roadmap.modules.length === 0) {
      return {
        id: skillId,
        name: catalogItem.name,
        completed: 0,
        total: 1,
        percent: 0
      };
    }
    const total = roadmap.modules.length;
    const completed = roadmap.modules.filter(m => completedModules.includes(m.id)).length;
    const percent = Math.round((completed / total) * 100);
    return {
      id: skillId,
      name: catalogItem.name,
      completed,
      total,
      percent
    };
  });

  // Overall Learning Progress (Average of active skill progress & career tasks)
  const skillPercentAvg = activeSkillProgressList.length > 0
    ? activeSkillProgressList.reduce((acc, s) => acc + s.percent, 0) / activeSkillProgressList.length
    : 0;
  const overallPercentage = Math.round((skillPercentAvg * 0.7) + ((careerCompletedCount / (totalTasks || 1)) * 30));

  // Smart Learning Recommendations
  const smartRecommendations = generateSmartRecommendations({
    profile,
    selectedCareerId: currentCareer.id,
    activeSkills: skillsToTrack,
    completedModules,
    quizResults,
    availableTime: profile.availableTimePerDay
  });

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 4rem' }}>
      {/* Welcome Banner */}
      <div className="dash-welcome-card" style={{ marginBottom: '2rem' }}>
        <div>
          <span className="badge badge-cyan" style={{ marginBottom: '0.4rem' }}>
            Personal Career & Consistency Overview
          </span>
          <h1 className="dash-welcome-title">
            Welcome back, {profile.name}! 👋
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.2rem' }}>
            Target Pathway: <strong style={{ color: 'var(--cyan-accent)' }}>{currentCareer.title}</strong> • Goal: <strong style={{ color: 'var(--text-main)' }}>{profile.careerGoal}</strong>
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button className="btn btn-secondary btn-sm" onClick={onEditProfile}>
            <Edit3 size={15} />
            Edit Profile
          </button>
          <button className="btn btn-primary btn-sm" onClick={onExploreCareers}>
            <Compass size={15} />
            Switch Target Career
          </button>
        </div>
      </div>

      {/* Top Row: Overall Progress, Consistency Streak, Weekly Study Time, Quiz Avg */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.25rem',
        marginBottom: '2rem'
      }}>
        {/* Metric 1: Overall Progress */}
        <div className="card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Overall Progress
            </span>
            <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--cyan-accent)' }}>
              {overallPercentage}%
            </span>
          </div>
          <ProgressBar percent={overallPercentage} color="#16C4D9" />
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
            Calculated across {activeSkillProgressList.length} active skills
          </p>
        </div>

        {/* Metric 2: Streak */}
        <div className="card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'var(--yellow-accent-soft)',
            color: 'var(--yellow-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Flame size={22} />
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--yellow-accent)', lineHeight: 1 }}>
              {streak} Days
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              Daily Consistency Streak
            </span>
          </div>
        </div>

        {/* Metric 3: Weekly Study Time */}
        <div className="card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'var(--cyan-accent-soft)',
            color: 'var(--cyan-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Clock size={22} />
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--cyan-accent)', lineHeight: 1 }}>
              {Math.round(totalWeeklyMinutes / 60 * 10) / 10} hrs
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              Weekly Study ({totalWeeklyMinutes} / {weeklyGoal}m)
            </span>
          </div>
        </div>

        {/* Metric 4: Quiz Score */}
        <div className="card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'rgba(16, 185, 129, 0.15)',
            color: '#10B981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Award size={22} />
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#10B981', lineHeight: 1 }}>
              {quizCount > 0 ? `${avgQuizScore}%` : 'N/A'}
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              Avg Quiz Performance ({quizCount} taken)
            </span>
          </div>
        </div>
      </div>

      {/* Real Calculated Separate Progress Bars for Active Skills (Section 12) */}
      <div className="card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '1.75rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>
              Active Skills Progress Tracking
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              Real-time values calculated strictly from your completed module records in localStorage.
            </p>
          </div>
          <button className="btn btn-secondary btn-sm" onClick={onGoToLearningHub}>
            <BookOpen size={14} />
            Manage Active Courses
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {activeSkillProgressList.map((skill) => (
            <div key={skill.id} style={{ background: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  {skill.name}
                </span>
                <span style={{ fontSize: '0.88rem', fontWeight: 800, color: skill.percent >= 100 ? '#10B981' : 'var(--cyan-accent)' }}>
                  {skill.percent}% ({skill.completed} / {skill.total} modules)
                </span>
              </div>
              <ProgressBar percent={skill.percent} color={skill.percent >= 100 ? '#10B981' : '#16C4D9'} />
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Grid: Smart Learning Recommendations & Areas Needing Revision */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        
        {/* Smart Recommendations Card */}
        <div className="card" style={{ background: 'var(--bg-card)', border: '1px solid var(--cyan-accent)', padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Sparkles size={18} color="var(--cyan-accent)" />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>
              Smart Learning Recommendations
            </h3>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            Rule-based pedagogical advice tailored to your target career, current scores, and daily study pace.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {smartRecommendations.map((rec) => (
              <div key={rec.id} style={{ background: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                <span className="badge badge-yellow" style={{ fontSize: '0.68rem', marginBottom: '0.4rem' }}>
                  {rec.badge}
                </span>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.3rem' }}>
                  {rec.title}
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.6rem' }}>
                  {rec.reason}
                </p>
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  style={{ color: 'var(--cyan-accent)', paddingLeft: 0, fontSize: '0.78rem', fontWeight: 700 }}
                  onClick={() => {
                    if (rec.actionTab === 'learning-hub') onGoToLearningHub();
                    else if (rec.actionTab === 'daily-planner') onGoToDailyPlanner();
                    else onGoToRoadmap();
                  }}
                >
                  {rec.actionLabel} →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Areas Needing Revision & Next Tasks */}
        <div className="card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <AlertTriangle size={18} color="var(--yellow-accent)" />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>
              Areas Needing Revision
            </h3>
          </div>

          {revisionModules.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {revisionModules.map(([modId, res]) => (
                <div key={modId} style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.25)', padding: '0.85rem', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FCA5A5' }}>
                      Module: {modId}
                    </span>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#EF4444' }}>
                      Score: {res.percentage}%
                    </span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                    Score is below 70%. We recommend reviewing documentation and re-attempting practice code exercises.
                  </p>
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm"
                    style={{ color: 'var(--yellow-accent)', paddingLeft: 0, fontSize: '0.75rem', marginTop: '0.4rem' }}
                    onClick={onGoToPractice}
                  >
                    Open Practice Workspace →
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem' }}>
              <span style={{ color: '#10B981', fontWeight: 700, fontSize: '0.88rem', display: 'block', marginBottom: '0.2rem' }}>
                ✓ No Critical Weak Spots Detected
              </span>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                All attempted quizzes are above 70% mastery. Keep up the consistent practice!
              </p>
            </div>
          )}

          {/* Quick Shortcuts */}
          <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Jump Directly To:
            </span>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button className="btn btn-secondary btn-sm" onClick={onGoToDailyPlanner}>
                <Calendar size={14} /> Daily Planner
              </button>
              <button className="btn btn-secondary btn-sm" onClick={onGoToPractice}>
                <HelpCircle size={14} /> Practice Quizzes
              </button>
              <button className="btn btn-secondary btn-sm" onClick={onGoToProjects}>
                <FolderGit2 size={14} /> Practical Projects
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
