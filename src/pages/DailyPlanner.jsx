import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Play, 
  Pause, 
  RotateCcw, 
  Flame, 
  Trophy, 
  ArrowRight, 
  Plus, 
  Edit3, 
  Check, 
  ChevronRight, 
  Award, 
  Smile, 
  HelpCircle,
  AlertCircle,
  FileText,
  BookmarkPlus
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  getActivityHistory, 
  calculateStreak, 
  recordActivityToday, 
  getWeeklyGoalMinutes, 
  saveWeeklyGoalMinutes, 
  getDailyCheckIns, 
  saveDailyCheckIn, 
  getDailyTasks, 
  saveDailyTasks 
} from '../utils/storage';
import { SKILL_ROADMAPS } from '../data/skillRoadmaps';
import { CAREERS } from '../data/careers';
import ProgressBar from '../components/ProgressBar';

export default function DailyPlanner({ 
  profile, 
  selectedCareerId, 
  activeSkills = [], 
  completedModules = [],
  completedTaskIds = []
}) {
  const [selectedDuration, setSelectedDuration] = useState(profile?.availableTimePerDay || 30);
  const [customMinutes, setCustomMinutes] = useState(45);
  const [isCustomDuration, setIsCustomDuration] = useState(false);

  // Timer State
  const [timerSeconds, setTimerSeconds] = useState(30 * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [activeTimerTaskTitle, setActiveTimerTaskTitle] = useState(null);

  // Consistency State
  const [activityHistory, setActivityHistory] = useState([]);
  const [streak, setStreak] = useState(0);
  const [weeklyGoal, setWeeklyGoal] = useState(180);
  const [tasks, setTasks] = useState([]);
  const [taskNotes, setTaskNotes] = useState({});
  const [editingNoteTaskId, setEditingNoteTaskId] = useState(null);

  // Daily Check-In State
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [checkInLearned, setCheckInLearned] = useState('');
  const [checkInDifficult, setCheckInDifficult] = useState('');
  const [checkInNext, setCheckInNext] = useState('');
  const [checkInsHistory, setCheckInsHistory] = useState([]);
  const [checkInSuccessToast, setCheckInSuccessToast] = useState(false);

  // Load persistence
  useEffect(() => {
    const hist = getActivityHistory();
    setActivityHistory(hist);
    setStreak(calculateStreak(hist));
    setWeeklyGoal(getWeeklyGoalMinutes());
    setCheckInsHistory(getDailyCheckIns());

    const savedTasks = getDailyTasks();
    if (savedTasks && savedTasks.length > 0) {
      setTasks(savedTasks);
    } else {
      generateDailyPlan(selectedDuration);
    }
  }, []);

  // Timer Interval Effect
  useEffect(() => {
    let interval = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && timerRunning) {
      setTimerRunning(false);
      const elapsedMins = Math.round(selectedDuration);
      recordActivityToday(elapsedMins);
      setActivityHistory(getActivityHistory());
      setStreak(calculateStreak(getActivityHistory()));

      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}

      alert(`Great job! You completed your ${elapsedMins}-minute focused study session.`);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  // Generate dynamic tasks matching the duration
  const generateDailyPlan = (mins) => {
    const primarySkillId = activeSkills[0] || 'c-programming';
    const skillData = SKILL_ROADMAPS[primarySkillId] || SKILL_ROADMAPS['c-programming'];
    const currentCareer = CAREERS.find(c => c.id === selectedCareerId) || CAREERS[0];

    // Find next incomplete module
    const nextMod = (skillData.modules || []).find(m => !completedModules.includes(m.id)) || skillData.modules[0];
    const modTitle = nextMod ? nextMod.title : 'Programming Logic';

    let generated = [];

    if (mins <= 15) {
      generated = [
        { id: 'dt-1', title: `Learn core concept: ${modTitle}`, duration: 8, category: 'Learn Concept', done: false, postponed: false },
        { id: 'dt-2', title: 'Solve 1 practice question & test code', duration: 5, category: 'Practice Exercise', done: false, postponed: false },
        { id: 'dt-3', title: 'Review key takeaways & jot notes', duration: 2, category: 'Review', done: false, postponed: false }
      ];
    } else if (mins <= 30) {
      generated = [
        { id: 'dt-1', title: `Study: ${modTitle} on Programiz/W3Schools`, duration: 10, category: 'Learn Concept', done: false, postponed: false },
        { id: 'dt-2', title: 'Write and compile 2 practical code examples', duration: 10, category: 'Hands-on Coding', done: false, postponed: false },
        { id: 'dt-3', title: 'Attempt 3 interactive module quiz questions', duration: 5, category: 'Quiz Practice', done: false, postponed: false },
        { id: 'dt-4', title: 'Review mistakes & complete daily check-in', duration: 5, category: 'Reflection', done: false, postponed: false }
      ];
    } else if (mins <= 45) {
      generated = [
        { id: 'dt-1', title: `Deep dive into: ${modTitle}`, duration: 15, category: 'Learn Concept', done: false, postponed: false },
        { id: 'dt-2', title: 'Hands-on code simulation: run & debug test cases', duration: 15, category: 'Hands-on Coding', done: false, postponed: false },
        { id: 'dt-3', title: 'Solve 1 beginner DSA array/search problem', duration: 10, category: 'DSA Practice', done: false, postponed: false },
        { id: 'dt-4', title: 'Refactor code and document learning notes', duration: 5, category: 'Review', done: false, postponed: false }
      ];
    } else {
      generated = [
        { id: 'dt-1', title: `Master lesson: ${modTitle}`, duration: 20, category: 'Learn Concept', done: false, postponed: false },
        { id: 'dt-2', title: 'Complete module mini-project assignment', duration: 20, category: 'Project Build', done: false, postponed: false },
        { id: 'dt-3', title: 'Solve 2 DSA practice challenges with hints', duration: 15, category: 'DSA Practice', done: false, postponed: false },
        { id: 'dt-4', title: 'Code review, test edge cases & daily check-in', duration: 5, category: 'Reflection', done: false, postponed: false }
      ];
    }

    setTasks(generated);
    saveDailyTasks(generated);
  };

  const handleDurationSelect = (mins) => {
    setIsCustomDuration(false);
    setSelectedDuration(mins);
    setTimerSeconds(mins * 60);
    setTimerRunning(false);
    generateDailyPlan(mins);
  };

  const handleCustomDurationSubmit = (e) => {
    e.preventDefault();
    const val = Math.max(10, parseInt(customMinutes) || 30);
    setIsCustomDuration(true);
    setSelectedDuration(val);
    setTimerSeconds(val * 60);
    setTimerRunning(false);
    generateDailyPlan(val);
  };

  const toggleTaskDone = (taskId) => {
    const updated = tasks.map(t => {
      if (t.id === taskId) {
        const nextDone = !t.done;
        if (nextDone) {
          recordActivityToday(t.duration || 10);
          setActivityHistory(getActivityHistory());
          setStreak(calculateStreak(getActivityHistory()));
          try {
            confetti({
              particleCount: 35,
              spread: 60,
              origin: { y: 0.6 }
            });
          } catch {}
        }
        return { ...t, done: nextDone };
      }
      return t;
    });
    setTasks(updated);
    saveDailyTasks(updated);
  };

  const postponeTask = (taskId) => {
    const updated = tasks.map(t => {
      if (t.id === taskId) return { ...t, postponed: true };
      return t;
    });
    setTasks(updated);
    saveDailyTasks(updated);
  };

  const handleStartTimerForTask = (task) => {
    setActiveTimerTaskTitle(task.title);
    setTimerSeconds(task.duration * 60);
    setTimerRunning(true);
  };

  const handleSaveNote = (taskId, text) => {
    const updated = { ...taskNotes, [taskId]: text };
    setTaskNotes(updated);
    setEditingNoteTaskId(null);
  };

  // Submit Daily Check-in
  const handleDailyCheckInSubmit = (e) => {
    e.preventDefault();
    if (!checkInLearned.trim()) return;

    const entry = {
      learned: checkInLearned.trim(),
      difficult: checkInDifficult.trim() || 'None, steady progress!',
      next: checkInNext.trim() || 'Continue next module task'
    };

    const updatedHistory = saveDailyCheckIn(entry);
    setCheckInsHistory(updatedHistory);
    setCheckInLearned('');
    setCheckInDifficult('');
    setCheckInNext('');
    setShowCheckInModal(false);
    setCheckInSuccessToast(true);
    setActivityHistory(getActivityHistory());
    setStreak(calculateStreak(getActivityHistory()));

    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}

    setTimeout(() => setCheckInSuccessToast(false), 3500);
  };

  // Format time mm:ss
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Weekly Activity Calculations (Past 7 Days)
  const past7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const dateStr = d.toISOString().split('T')[0];
    const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
    const log = activityHistory.find(h => h.date === dateStr);
    return {
      date: dateStr,
      dayName,
      minutes: log ? log.minutes : 0
    };
  });

  const totalWeeklyMinutes = past7Days.reduce((acc, d) => acc + d.minutes, 0);
  const weeklyPercent = Math.min(100, Math.round((totalWeeklyMinutes / weeklyGoal) * 100));

  // Missed Day Recovery Check
  const yesterdayStr = (() => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().split('T')[0];
  })();
  const studiedYesterday = activityHistory.some(h => h.date === yesterdayStr && h.minutes > 0);
  const studiedToday = activityHistory.some(h => h.date === new Date().toISOString().split('T')[0] && h.minutes > 0);
  const missedYesterday = !studiedYesterday && !studiedToday;

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 4rem' }}>
      {/* Header */}
      <div className="section-header center">
        <div className="section-tag">
          <Calendar size={14} />
          <span>Consistency & Daily Study Planner</span>
        </div>
        <h1 className="section-title">
          What Exactly Should I Study Today?
        </h1>
        <p className="section-subtitle">
          Transform long-term career roadmaps into achievable daily tasks. Track streaks, log focus minutes, and build unbreakable learning consistency.
        </p>
      </div>

      {/* Missed-Day Gentle Recovery Notice */}
      {missedYesterday && (
        <div style={{
          background: 'rgba(255, 196, 0, 0.1)',
          border: '1px solid var(--yellow-accent)',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <Smile size={28} color="var(--yellow-accent)" style={{ flexShrink: 0 }} />
          <div>
            <strong style={{ color: 'var(--text-main)', fontSize: '0.95rem', display: 'block' }}>
              Missed a day? No worries at all! 🌱
            </strong>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.2rem' }}>
              Real learning consistency is about resuming without guilt. Your progress remains 100% safe. Let's restart with a gentle 15-minute task today!
            </p>
          </div>
        </div>
      )}

      {/* Toast Notification for Check-in */}
      {checkInSuccessToast && (
        <div style={{
          background: 'rgba(16, 185, 129, 0.15)',
          border: '1px solid #10B981',
          padding: '1rem',
          borderRadius: 'var(--radius-md)',
          color: '#10B981',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontWeight: 700
        }}>
          <Check size={18} />
          Daily learning check-in recorded! Streak & activity updated.
        </div>
      )}

      {/* Top Consistency Habits Dashboard */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.25rem',
        marginBottom: '2rem'
      }}>
        {/* Card 1: Streak */}
        <div className="card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'var(--yellow-accent-soft)',
            color: 'var(--yellow-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Flame size={26} />
          </div>
          <div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--yellow-accent)', lineHeight: 1 }}>
              {streak} Days
            </div>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              Current Study Streak 🔥
            </span>
          </div>
        </div>

        {/* Card 2: Weekly Target */}
        <div className="card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--cyan-accent)', textTransform: 'uppercase' }}>
              Weekly Study Target
            </span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              {totalWeeklyMinutes} / {weeklyGoal} mins
            </span>
          </div>
          <ProgressBar percent={weeklyPercent} color="#16C4D9" />
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
            {weeklyPercent}% of {Math.round(weeklyGoal / 60)} hr weekly goal achieved
          </p>
        </div>

        {/* Card 3: Daily Reflection Button */}
        <div className="card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setShowCheckInModal(true)}
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
          >
            <Edit3 size={15} />
            Record Daily Check-in
          </button>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.4rem' }}>
            {checkInsHistory.length} total check-in entries saved
          </span>
        </div>
      </div>

      {/* 7-Day Activity Calendar Heatmap */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem 1.5rem',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', textTransform: 'uppercase' }}>
            Weekly Activity Log (Past 7 Days)
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Each square represents daily study minutes
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.75rem', textAlign: 'center' }}>
          {past7Days.map((day) => {
            const hasActivity = day.minutes > 0;
            return (
              <div key={day.date} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>{day.dayName}</span>
                <div style={{
                  width: '100%',
                  height: '42px',
                  borderRadius: '6px',
                  background: hasActivity 
                    ? day.minutes >= 45 ? '#16C4D9' : 'rgba(22, 196, 217, 0.45)'
                    : 'var(--bg-main)',
                  border: hasActivity ? '1px solid var(--cyan-accent)' : '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: hasActivity ? '#0B1B30' : 'var(--text-muted)',
                  fontWeight: 700,
                  fontSize: '0.78rem'
                }}>
                  {day.minutes > 0 ? `${day.minutes}m` : '-'}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Daily Time Budget Selector */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-md)',
        padding: '1.5rem',
        marginBottom: '2rem'
      }}>
        <div style={{ marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>
            Choose Today's Available Study Time
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            Select how much time you have right now. The schedule dynamically adjusts so tasks remain realistic and achievable.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          {[15, 30, 45, 60].map((mins) => {
            const isActive = !isCustomDuration && selectedDuration === mins;
            return (
              <button
                key={mins}
                type="button"
                className={`switcher-pill ${isActive ? 'active' : ''}`}
                onClick={() => handleDurationSelect(mins)}
              >
                {mins} Minutes
              </button>
            );
          })}

          <form onSubmit={handleCustomDurationSubmit} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <input
              type="number"
              min="10"
              max="240"
              value={customMinutes}
              onChange={(e) => setCustomMinutes(e.target.value)}
              style={{
                width: '75px',
                padding: '0.35rem 0.6rem',
                borderRadius: '20px',
                background: 'var(--bg-main)',
                border: isCustomDuration ? '1px solid var(--cyan-accent)' : '1px solid var(--border-color)',
                color: 'var(--text-main)',
                fontSize: '0.85rem',
                textAlign: 'center'
              }}
            />
            <button
              type="submit"
              className={`switcher-pill ${isCustomDuration ? 'active' : ''}`}
            >
              Set Custom
            </button>
          </form>
        </div>
      </div>

      {/* Focus Timer Bar */}
      <div style={{
        background: 'linear-gradient(135deg, #142A43 0%, #0F1F33 100%)',
        border: '1px solid var(--cyan-accent)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem 1.5rem',
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--cyan-accent)', textTransform: 'uppercase' }}>
            Interactive Focus Session
          </span>
          <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--text-main)', fontFamily: 'monospace' }}>
            {formatTime(timerSeconds)}
          </div>
          {activeTimerTaskTitle && (
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Current task: <em>{activeTimerTaskTitle}</em>
            </p>
          )}
        </div>

        <div style={{ display: 'flex', gap: '0.6rem' }}>
          <button
            type="button"
            className={`btn btn-sm ${timerRunning ? 'btn-secondary' : 'btn-primary'}`}
            onClick={() => setTimerRunning(!timerRunning)}
          >
            {timerRunning ? <Pause size={15} /> : <Play size={15} />}
            {timerRunning ? 'Pause Session' : 'Start Focus Timer'}
          </button>
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={() => {
              setTimerRunning(false);
              setTimerSeconds(selectedDuration * 60);
            }}
          >
            <RotateCcw size={15} />
            Reset
          </button>
        </div>
      </div>

      {/* Today's Tasks List */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)' }}>
            Today's Achievable Task Sequence ({selectedDuration} Mins Total)
          </h3>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {tasks.filter(t => t.done).length} of {tasks.length} tasks completed
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {tasks.map((task, idx) => {
            const hasNote = taskNotes[task.id];
            const isEditingNote = editingNoteTaskId === task.id;

            return (
              <div
                key={task.id}
                className="card"
                style={{
                  border: task.done ? '1px solid #10B981' : task.postponed ? '1px dashed var(--border-color)' : '1px solid var(--border-color)',
                  background: task.done ? 'rgba(16, 185, 129, 0.04)' : task.postponed ? 'rgba(255,255,255,0.02)' : 'var(--bg-card)',
                  opacity: task.postponed ? 0.6 : 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  padding: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                    <button
                      type="button"
                      onClick={() => toggleTaskDone(task.id)}
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '6px',
                        background: task.done ? '#10B981' : 'var(--bg-main)',
                        border: task.done ? 'none' : '2px solid var(--border-highlight)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        flexShrink: 0
                      }}
                    >
                      {task.done && <Check size={16} color="#0B1B30" />}
                    </button>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                        <span className="badge badge-subtle" style={{ fontSize: '0.68rem' }}>
                          {task.category}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--cyan-accent)', fontWeight: 700 }}>
                          ~{task.duration} mins
                        </span>
                        {task.postponed && <span className="badge badge-yellow" style={{ fontSize: '0.68rem' }}>Postponed</span>}
                      </div>
                      <span style={{ fontSize: '0.95rem', fontWeight: 700, color: task.done ? '#10B981' : 'var(--text-main)', textDecoration: task.done ? 'line-through' : 'none' }}>
                        {idx + 1}. {task.title}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {!task.done && (
                      <button
                        type="button"
                        className="btn btn-ghost btn-sm"
                        style={{ color: 'var(--cyan-accent)', fontSize: '0.75rem' }}
                        onClick={() => handleStartTimerForTask(task)}
                        title="Start timer for this task"
                      >
                        <Play size={13} style={{ marginRight: '3px' }} />
                        Focus Timer
                      </button>
                    )}

                    {!task.postponed && !task.done && (
                      <button
                        type="button"
                        className="btn btn-ghost btn-sm"
                        style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}
                        onClick={() => postponeTask(task.id)}
                      >
                        Postpone
                      </button>
                    )}

                    <button
                      type="button"
                      className="btn btn-ghost btn-sm"
                      style={{ color: hasNote ? 'var(--yellow-accent)' : 'var(--text-muted)', fontSize: '0.75rem' }}
                      onClick={() => setEditingNoteTaskId(isEditingNote ? null : task.id)}
                    >
                      <FileText size={13} style={{ marginRight: '3px' }} />
                      {hasNote ? 'Note ✓' : '+ Note'}
                    </button>
                  </div>
                </div>

                {/* Personal Notes Section */}
                {isEditingNote && (
                  <div style={{ marginTop: '0.5rem', padding: '0.75rem', background: 'var(--bg-main)', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                    <textarea
                      placeholder="Record your learning notes, questions, or key takeaways for this task..."
                      defaultValue={hasNote || ''}
                      id={`note-${task.id}`}
                      rows={2}
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-main)',
                        fontSize: '0.85rem',
                        resize: 'vertical',
                        outline: 'none'
                      }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.4rem', marginTop: '0.4rem' }}>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => {
                          const val = document.getElementById(`note-${task.id}`).value;
                          handleSaveNote(task.id, val);
                        }}
                      >
                        Save Note
                      </button>
                    </div>
                  </div>
                )}

                {hasNote && !isEditingNote && (
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', background: 'var(--bg-main)', padding: '0.4rem 0.75rem', borderRadius: '4px', borderLeft: '3px solid var(--yellow-accent)' }}>
                    <strong>Note:</strong> {hasNote}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Daily Reflection Check-In Modal */}
      {showCheckInModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(4px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--yellow-accent)',
            borderRadius: 'var(--radius-lg)',
            width: '100%',
            maxWidth: '560px',
            padding: '2rem',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <span className="badge badge-yellow" style={{ marginBottom: '0.3rem' }}>Daily Reflection</span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  Daily Learning Check-in
                </h3>
              </div>
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => setShowCheckInModal(false)}
                style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleDailyCheckInSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  1. What did you learn today? *
                </label>
                <textarea
                  required
                  placeholder="e.g. Learned C pointers, memory addresses (&), and swapped variables using pointer dereference (*)."
                  value={checkInLearned}
                  onChange={(e) => setCheckInLearned(e.target.value)}
                  rows={2}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.8rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontSize: '0.88rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  2. What did you find difficult or confusing?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Pointer arithmetic syntax and when to use & vs *."
                  value={checkInDifficult}
                  onChange={(e) => setCheckInDifficult(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.8rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontSize: '0.88rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  3. What will you learn next?
                </label>
                <input
                  type="text"
                  placeholder="e.g. C structs and dynamic arrays with malloc."
                  value={checkInNext}
                  onChange={(e) => setCheckInNext(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.8rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontSize: '0.88rem'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => setShowCheckInModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary btn-sm">
                  Save Check-in (+20 Mins Study Log)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
