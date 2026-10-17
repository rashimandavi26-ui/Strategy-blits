import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Clock, 
  MapPin, 
  Sparkles, 
  Compass, 
  Award, 
  ArrowRight,
  FolderGit2,
  ExternalLink,
  BookOpen,
  Code2,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';
import ProgressBar from '../components/ProgressBar';
import { CAREERS } from '../data/careers';
import { ROADMAPS } from '../data/roadmaps';
import { SKILL_ROADMAPS } from '../data/skillRoadmaps';
import { QUIZZES } from '../data/practiceData';
import { saveQuizResult, getQuizResults } from '../utils/storage';
import { canCompleteModule, estimateCalendarDays, QUIZ_PASS_PERCENT } from '../utils/progress';

export default function Roadmap({ 
  selectedCareerId, 
  onSelectCareer, 
  completedTaskIds = [], 
  onToggleTask,
  completedModules = [],
  onToggleModule,
  onGoToProjects,
  onGoToPractice,
  defaultSkillId = null,
  profile,
  onToast
}) {
  const [viewMode, setViewMode] = useState(defaultSkillId ? 'skill' : 'skill'); // default to skill deep-dives per priority
  const [activeSkillId, setActiveSkillId] = useState(defaultSkillId || 'c-programming');
  const [expandedModuleId, setExpandedModuleId] = useState(null);
  
  // Quiz Modal State
  const [activeQuizModuleId, setActiveQuizModuleId] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizResults, setQuizResults] = useState(() => getQuizResults());

  useEffect(() => {
    if (defaultSkillId) setActiveSkillId(defaultSkillId);
  }, [defaultSkillId]);

  const currentCareer = CAREERS.find((c) => c.id === selectedCareerId) || CAREERS[0];
  const careerRoadmap = ROADMAPS[currentCareer.id] || ROADMAPS['software-developer'];
  const skillRoadmap = SKILL_ROADMAPS[activeSkillId] || SKILL_ROADMAPS['c-programming'];

  // Calculate Career Progress
  const allCareerTasks = careerRoadmap.stages.flatMap((s) => s.tasks);
  const careerCompletedCount = allCareerTasks.filter((t) => completedTaskIds.includes(t.id)).length;
  const careerProgressPercent = allCareerTasks.length > 0 ? Math.round((careerCompletedCount / allCareerTasks.length) * 100) : 0;

  // Calculate Skill Progress
  const skillModules = skillRoadmap.modules || [];
  const skillCompletedCount = skillModules.filter((m) => completedModules.includes(m.id)).length;
  const skillProgressPercent = skillModules.length > 0 ? Math.round((skillCompletedCount / skillModules.length) * 100) : 0;

  const dailyMinutes = profile?.availableTimePerDay || 30;

  const handleModuleCompleteToggle = (modId) => {
    const wasCompleted = completedModules.includes(modId);
    if (!wasCompleted && QUIZZES[modId] && !canCompleteModule(modId, quizResults)) {
      openQuiz(modId);
      if (onToast) onToast(`This module needs a quiz score of ${QUIZ_PASS_PERCENT}%+ before it can be marked complete.`);
      return;
    }
    const ok = onToggleModule(modId);
    if (ok === false) return;

    if (!wasCompleted) {
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#16C4D9', '#FFC400', '#10B981']
        });
      } catch {}
    }
  };

  const handleTaskCompleteToggle = (taskId) => {
    const wasCompleted = completedTaskIds.includes(taskId);
    onToggleTask(taskId);

    if (!wasCompleted) {
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#16C4D9', '#FFC400', '#10B981']
        });
      } catch {}
    }
  };

  // Open Quiz Modal
  const openQuiz = (modId) => {
    setActiveQuizModuleId(modId);
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  const handleSelectQuizOption = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [qId]: optionIdx
    });
  };

  const submitQuiz = () => {
    const quizData = QUIZZES[activeQuizModuleId];
    if (!quizData) return;
    let score = 0;
    quizData.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
    const stored = saveQuizResult(activeQuizModuleId, score, quizData.questions.length);
    setQuizResults(stored);

    const percent = Math.round((score / quizData.questions.length) * 100);
    if (percent >= QUIZ_PASS_PERCENT) {
      try {
        confetti({
          particleCount: 60,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {}
      if (!completedModules.includes(activeQuizModuleId)) {
        onToggleModule(activeQuizModuleId);
      }
      if (onToast) onToast(`Quiz passed at ${percent}%. Module marked complete.`);
    } else if (onToast) {
      onToast(`Quiz scored ${percent}%. Review the lesson and retry — ${QUIZ_PASS_PERCENT}% is required to complete the module.`);
    }
  };

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 4rem' }}>
      {/* Header */}
      <div className="section-header center">
        <div className="section-tag">
          <MapPin size={14} />
          <span>Interactive Learning Roadmaps</span>
        </div>
        <h1 className="section-title">
          {viewMode === 'skill' ? `${skillRoadmap.title}` : `${currentCareer.title} Pathway`}
        </h1>
        <p className="section-subtitle">
          {viewMode === 'skill' 
            ? `${skillRoadmap.tagline} • Structured modules with verified free learning links, methodologies, and completion criteria.`
            : 'A comprehensive 3-stage progression from foundations to practical full-stack projects and interview preparation.'}
        </p>
      </div>

      {/* View Mode Switcher: Skill Deep-Dive vs Career Overview */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem'
      }}>
        <div style={{
          display: 'inline-flex',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '30px',
          padding: '0.3rem'
        }}>
          <button
            className={`switcher-pill ${viewMode === 'skill' ? 'active' : ''}`}
            style={{ borderRadius: '25px', padding: '0.5rem 1.25rem' }}
            onClick={() => setViewMode('skill')}
          >
            <BookOpen size={15} style={{ display: 'inline', marginRight: '6px' }} />
            Skill Deep-Dives (C, HTML, Java, DSA, etc.)
          </button>
          <button
            className={`switcher-pill ${viewMode === 'career' ? 'active' : ''}`}
            style={{ borderRadius: '25px', padding: '0.5rem 1.25rem' }}
            onClick={() => setViewMode('career')}
          >
            <Compass size={15} style={{ display: 'inline', marginRight: '6px' }} />
            12 Career Tracks (3-Stage Progression)
          </button>
        </div>
      </div>

      {/* SKILL VIEW: Deep Modular Roadmaps */}
      {viewMode === 'skill' && (
        <div>
          {/* Skill Selector Tabs */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              Select Skill Course Roadmap:
            </div>
            <div className="career-switcher-bar">
              {Object.keys(SKILL_ROADMAPS).map((sId) => {
                const sData = SKILL_ROADMAPS[sId];
                const isActive = sId === activeSkillId;
                const doneCount = (sData.modules || []).filter(m => completedModules.includes(m.id)).length;
                return (
                  <button
                    key={sId}
                    className={`switcher-pill ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setActiveSkillId(sId);
                      setExpandedModuleId(null);
                    }}
                  >
                    {sData.title.split(' ')[0]} {sData.title.split(' ')[1] || ''}
                    {doneCount > 0 && <span style={{ marginLeft: '6px', fontSize: '0.7rem', color: 'var(--cyan-accent)' }}>({doneCount}/{(sData.modules || []).length})</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skill Progress Scorecard Banner */}
          <div className="progress-banner-card" style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="badge badge-cyan" style={{ marginBottom: '0.4rem' }}>Interactive Course Roadmap</span>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  {skillRoadmap.title}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '0.2rem' }}>
                  {skillRoadmap.overview}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--cyan-accent)', lineHeight: 1 }}>
                    {skillProgressPercent}%
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {skillCompletedCount} of {skillModules.length} modules completed (quiz required where listed)
                  </div>
                </div>
              </div>
            </div>

            <ProgressBar percent={skillProgressPercent} color="#16C4D9" />
          </div>

          {/* Ordered Modules Accordion List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {skillModules.map((mod, index) => {
              const isCompleted = completedModules.includes(mod.id);
              const isExpanded = expandedModuleId === mod.id || (expandedModuleId === null && index === 0);
              const quizAvailable = !!QUIZZES[mod.id];
              const quizPassed = canCompleteModule(mod.id, quizResults);
              const estDays = estimateCalendarDays(mod.estimatedHours, dailyMinutes);

              return (
                <div
                  key={mod.id}
                  className="card"
                  style={{
                    border: isCompleted ? '1px solid #10B981' : isExpanded ? '1px solid var(--cyan-accent)' : '1px solid var(--border-color)',
                    background: isCompleted ? 'rgba(16, 185, 129, 0.04)' : 'var(--bg-card)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    transition: 'border-color 0.2s ease'
                  }}
                >
                  {/* Module Header Bar */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        background: isCompleted ? '#10B981' : 'var(--bg-main)',
                        color: isCompleted ? '#0B1B30' : 'var(--cyan-accent)',
                        border: isCompleted ? 'none' : '1px solid var(--border-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '1rem'
                      }}>
                        {isCompleted ? <Check size={20} /> : mod.number}
                      </div>

                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--cyan-accent)', textTransform: 'uppercase' }}>
                            MODULE {mod.number}
                          </span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>• ~{mod.estimatedHours} hrs (~{estDays} day{estDays === 1 ? '' : 's'} at {dailyMinutes} min/day)</span>
                          {isCompleted && <span className="badge badge-success" style={{ fontSize: '0.7rem' }}>Completed ✓</span>}
                        </div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>
                          {mod.title}
                        </h3>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      {/* Completion Checkbox */}
                      <button
                        type="button"
                        onClick={() => handleModuleCompleteToggle(mod.id)}
                        className={`btn btn-sm ${isCompleted ? 'btn-secondary' : 'btn-outline'}`}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                      >
                        {isCompleted ? <CheckCircle2 size={16} color="#10B981" /> : <div style={{ width: 14, height: 14, borderRadius: '4px', border: '1px solid var(--text-muted)' }} />}
                        {isCompleted ? 'Completed' : (quizAvailable && !quizPassed ? 'Complete quiz to finish' : 'Mark Complete')}
                      </button>

                      {/* Expand/Collapse Toggle */}
                      <button
                        type="button"
                        className="btn btn-ghost btn-sm"
                        onClick={() => setExpandedModuleId(isExpanded ? '__none__' : mod.id)}
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Detailed Module Sections */}
                  {isExpanded && (
                    <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      
                      {/* A. WHAT TO LEARN */}
                      <div>
                        <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: 'var(--cyan-accent)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                          A. What to Learn (Key Concepts & Topics)
                        </span>
                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-main)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                          {mod.topics.map((t, tIdx) => (
                            <li key={tIdx} style={{ marginBottom: '0.3rem' }}>{t}</li>
                          ))}
                        </ul>
                      </div>

                      {/* B. WHERE TO LEARN (Verified Free Resources) */}
                      <div>
                        <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: 'var(--yellow-accent)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                          B. Where to Learn (Verified Free Educational Resources)
                        </span>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
                          {mod.resources.map((res, rIdx) => (
                            <a
                              key={rIdx}
                              href={res.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                padding: '0.8rem 1rem',
                                borderRadius: 'var(--radius-sm)',
                                background: 'var(--bg-main)',
                                border: '1px solid var(--border-color)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                textDecoration: 'none',
                                transition: 'all 0.15s ease'
                              }}
                              className="card-hover"
                            >
                              <div>
                                <span className="badge badge-subtle" style={{ fontSize: '0.7rem', marginBottom: '0.2rem' }}>
                                  {res.platform} • {res.type}
                                </span>
                                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)' }}>
                                  {res.name}
                                </div>
                              </div>
                              <ExternalLink size={16} color="var(--cyan-accent)" style={{ flexShrink: 0, marginLeft: '0.5rem' }} />
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* C. HOW TO LEARN (Practical 6-Step Methodology) */}
                      <div>
                        <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: 'var(--cyan-accent)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                          C. How to Learn (Practical Step-by-Step Method)
                        </span>
                        <div style={{ background: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                          <ol style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.6 }}>
                            {mod.methodology.map((mStep, mIdx) => (
                              <li key={mIdx} style={{ marginBottom: '0.3rem' }}>{mStep}</li>
                            ))}
                          </ol>
                        </div>
                      </div>

                      {/* D. PRACTICE (Beginner-Friendly Exercise) */}
                      {mod.practice && (
                        <div>
                          <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: 'var(--yellow-accent)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                            D. Hands-on Practice Challenge
                          </span>
                          <div style={{ background: 'linear-gradient(180deg, #102237 0%, #0B1B30 100%)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '1rem' }}>
                            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                              ⚡ {mod.practice.title}
                            </div>
                            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem', whiteSpace: 'pre-line' }}>
                              {mod.practice.task}
                            </p>
                            {mod.practice.expectedOutput && (
                              <div style={{ background: '#07101E', padding: '0.75rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.8rem', color: '#16C4D9', whiteSpace: 'pre-wrap' }}>
                                <strong>Expected Output:</strong><br />
                                {mod.practice.expectedOutput}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* E. COMPLETION CRITERIA */}
                      <div>
                        <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: 'var(--success)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                          E. Completion Criteria Checklist
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.86rem', color: 'var(--text-main)', background: 'rgba(16, 185, 129, 0.08)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                          <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0 }} />
                          <span>{mod.criteria}</span>
                        </div>
                      </div>

                      {/* Interactive Module Quiz Button */}
                      {quizAvailable && (
                        <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '0.75rem', paddingTop: '0.5rem' }}>
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            onClick={() => openQuiz(mod.id)}
                          >
                            <HelpCircle size={15} />
                            {quizPassed ? 'Retake Module Quiz' : 'Take Module Quiz'} ({QUIZZES[mod.id].questions.length} Questions)
                          </button>
                        </div>
                      )}

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* CAREER VIEW: 3-Stage Progression */}
      {viewMode === 'career' && (
        <div>
          {/* Career Quick Switcher Pill Bar */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              Switch Target Career Track:
            </div>
            <div className="career-switcher-bar">
              {CAREERS.map((c) => {
                const isActive = c.id === currentCareer.id;
                return (
                  <button
                    key={c.id}
                    className={`switcher-pill ${isActive ? 'active' : ''}`}
                    onClick={() => onSelectCareer(c.id)}
                  >
                    {c.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Progress Banner */}
          <div className="progress-banner-card" style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="badge badge-cyan" style={{ marginBottom: '0.4rem' }}>Active Career Roadmap</span>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  {currentCareer.title}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                  {currentCareer.overview}
                </p>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--cyan-accent)', lineHeight: 1 }}>
                  {careerProgressPercent}%
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {careerCompletedCount} of {allCareerTasks.length} Tasks Completed
                </div>
              </div>
            </div>

            <ProgressBar percent={careerProgressPercent} color="#16C4D9" />
          </div>

          {/* 3 Stages */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {careerRoadmap.stages.map((stage) => {
              const stageCompleted = stage.tasks.filter(t => completedTaskIds.includes(t.id)).length;
              return (
                <div key={stage.id} className="card" style={{ border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                      <span className="badge badge-yellow" style={{ fontSize: '0.75rem', marginBottom: '0.3rem' }}>
                        {stage.title}
                      </span>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>
                        {stage.subtitle}
                      </h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                        {stage.description}
                      </p>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {stageCompleted} / {stage.tasks.length} tasks
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {stage.tasks.map((task) => {
                      const isDone = completedTaskIds.includes(task.id);
                      return (
                        <div
                          key={task.id}
                          onClick={() => handleTaskCompleteToggle(task.id)}
                          style={{
                            padding: '1rem',
                            borderRadius: 'var(--radius-sm)',
                            background: isDone ? 'rgba(16, 185, 129, 0.08)' : 'var(--bg-main)',
                            border: isDone ? '1px solid #10B981' : '1px solid var(--border-color)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.85rem',
                            transition: 'all 0.15s ease'
                          }}
                        >
                          <div style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '4px',
                            background: isDone ? '#10B981' : 'transparent',
                            border: isDone ? 'none' : '2px solid var(--border-highlight)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '2px',
                            flexShrink: 0
                          }}>
                            {isDone && <Check size={14} color="#0B1B30" />}
                          </div>

                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: isDone ? '#10B981' : 'var(--text-main)', textDecoration: isDone ? 'line-through' : 'none' }}>
                                {task.title}
                              </h4>
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                {task.estimatedTime}
                              </span>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem', lineHeight: 1.5 }}>
                              {task.description}
                            </p>
                            <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                              {task.skills.map((s, idx) => (
                                <span key={idx} className="badge badge-subtle" style={{ fontSize: '0.7rem' }}>
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* QUIZ MODAL */}
      {activeQuizModuleId && QUIZZES[activeQuizModuleId] && (
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
            border: '1px solid var(--cyan-accent)',
            borderRadius: 'var(--radius-lg)',
            width: '100%',
            maxWidth: '680px',
            maxHeight: '85vh',
            overflowY: 'auto',
            padding: '2rem',
            position: 'relative',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
          }}>
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <span className="badge badge-cyan" style={{ marginBottom: '0.3rem' }}>Module Quiz</span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  {QUIZZES[activeQuizModuleId].title}
                </h3>
              </div>
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => setActiveQuizModuleId(null)}
                style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}
              >
                ✕
              </button>
            </div>

            {/* Questions List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {QUIZZES[activeQuizModuleId].questions.map((q, qIndex) => {
                const userChoice = selectedAnswers[q.id];
                const isCorrect = userChoice === q.correctIndex;

                return (
                  <div key={q.id} style={{ background: 'var(--bg-main)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                    <p style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                      {qIndex + 1}. {q.question}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {q.options.map((opt, optIdx) => {
                        const isSelectedOpt = userChoice === optIdx;
                        let optStyle = {
                          padding: '0.6rem 0.9rem',
                          borderRadius: '6px',
                          fontSize: '0.88rem',
                          textAlign: 'left',
                          cursor: quizSubmitted ? 'default' : 'pointer',
                          border: '1px solid var(--border-color)',
                          background: 'var(--bg-card)',
                          color: 'var(--text-main)'
                        };

                        if (quizSubmitted) {
                          if (optIdx === q.correctIndex) {
                            optStyle.border = '1px solid #10B981';
                            optStyle.background = 'rgba(16, 185, 129, 0.15)';
                            optStyle.color = '#10B981';
                          } else if (isSelectedOpt && !isCorrect) {
                            optStyle.border = '1px solid #EF4444';
                            optStyle.background = 'rgba(239, 68, 68, 0.15)';
                            optStyle.color = '#FCA5A5';
                          }
                        } else if (isSelectedOpt) {
                          optStyle.border = '1px solid var(--cyan-accent)';
                          optStyle.background = 'rgba(22, 196, 217, 0.15)';
                        }

                        return (
                          <button
                            key={optIdx}
                            type="button"
                            onClick={() => handleSelectQuizOption(q.id, optIdx)}
                            style={optStyle}
                          >
                            <span style={{ fontWeight: 700, marginRight: '6px' }}>{String.fromCharCode(65 + optIdx)}.</span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div style={{ marginTop: '0.75rem', padding: '0.6rem 0.8rem', borderRadius: '4px', background: isCorrect ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)', border: isCorrect ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid rgba(239, 68, 68, 0.2)', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                        <strong style={{ color: isCorrect ? '#10B981' : '#FCA5A5' }}>
                          {isCorrect ? '✓ Correct! ' : '✗ Incorrect. '}
                        </strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {quizSubmitted ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: quizScore === QUIZZES[activeQuizModuleId].questions.length ? '#10B981' : 'var(--yellow-accent)' }}>
                    Score: {quizScore} / {QUIZZES[activeQuizModuleId].questions.length} ({Math.round((quizScore / QUIZZES[activeQuizModuleId].questions.length) * 100)}%)
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={() => {
                      setQuizSubmitted(false);
                      setSelectedAnswers({});
                    }}
                  >
                    <RotateCcw size={14} /> Retake
                  </button>
                </div>
              ) : (
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {Object.keys(selectedAnswers).length} of {QUIZZES[activeQuizModuleId].questions.length} answered
                </span>
              )}

              <div>
                {!quizSubmitted ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    disabled={Object.keys(selectedAnswers).length === 0}
                    onClick={submitQuiz}
                  >
                    Submit Quiz
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setActiveQuizModuleId(null)}
                  >
                    Done
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
