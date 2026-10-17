import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Filter, 
  CheckCircle, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  Plus, 
  Check, 
  AlertTriangle,
  Code2,
  Terminal,
  Cpu,
  Coffee,
  FileCode,
  Code,
  Palette,
  Network,
  Boxes,
  Database,
  GitBranch,
  Radio,
  HardDrive,
  Globe,
  Brain,
  Activity,
  BarChart,
  Shield,
  Layers
} from 'lucide-react';
import { SKILLS_CATALOG, SKILL_CATEGORIES } from '../data/skillsData';
import { SKILL_ROADMAPS } from '../data/skillRoadmaps';
import ProgressBar from '../components/ProgressBar';

const ICON_MAP = {
  Terminal,
  Cpu,
  Coffee,
  FileCode,
  Code,
  Palette,
  Sparkles,
  Network,
  Boxes,
  Database,
  GitBranch,
  Radio,
  HardDrive,
  Globe,
  Brain,
  Activity,
  BarChart,
  Shield,
  Layers
};

export default function LearningHub({
  activeSkills = [],
  onToggleActiveSkill,
  knownSkills = [],
  onToggleKnownSkill,
  completedModules = [],
  skillTargetDates = {},
  onSetTargetDate,
  onOpenSkillRoadmap,
  onOpenPractice,
  profile,
  selectedCareerId
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState('ALL');

  const dailyMinutes = profile?.availableTimePerDay || 30;
  const recommendedMaxCourses = dailyMinutes <= 30 ? 2 : dailyMinutes <= 60 ? 3 : 4;
  const isOverloaded = activeSkills.length > recommendedMaxCourses;

  // Filter skills
  const filteredSkills = SKILLS_CATALOG.filter((skill) => {
    const matchesSearch = searchTerm === '' || 
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'ALL' || skill.categoryKey === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'ALL' || skill.level.toLowerCase() === selectedDifficulty.toLowerCase();

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  // Calculate skill progress % from completed modules
  const getSkillProgress = (skillId) => {
    const roadmap = SKILL_ROADMAPS[skillId];
    if (!roadmap || !roadmap.modules || roadmap.modules.length === 0) {
      return knownSkills.includes(skillId) ? 100 : 0;
    }
    const total = roadmap.modules.length;
    const done = roadmap.modules.filter(m => completedModules.includes(m.id)).length;
    return Math.round((done / total) * 100);
  };

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 4rem' }}>
      {/* Header */}
      <div className="section-header center">
        <div className="section-tag">
          <BookOpen size={14} />
          <span>Technical Skill Courses</span>
        </div>
        <h1 className="section-title">
          Skill Learning Hub
        </h1>
        <p className="section-subtitle">
          Browse, select, and conquer modular technical courses. Filter by proficiency level, add to your personal learning plan, and track verified progress.
        </p>
      </div>

      {/* Pacing & Overload Protection Guidance */}
      <div style={{
        background: isOverloaded ? 'rgba(255, 196, 0, 0.1)' : 'var(--bg-card)',
        border: isOverloaded ? '1px solid var(--yellow-accent)' : '1px solid var(--border-color)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem 1.5rem',
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
          {isOverloaded ? (
            <AlertTriangle size={22} color="var(--yellow-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
          ) : (
            <Sparkles size={22} color="var(--cyan-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
          )}
          <div>
            <strong style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>
              Personal Learning Plan: {activeSkills.length} Active Courses Selected
            </strong>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.2rem' }}>
              Based on your available study time of <strong style={{ color: 'var(--cyan-accent)' }}>{dailyMinutes} mins/day</strong>, we recommend focusing on <strong style={{ color: 'var(--yellow-accent)' }}>{recommendedMaxCourses} active learning paths</strong> at a time to prevent cognitive overload.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Active: {activeSkills.length} / {recommendedMaxCourses} optimal
          </span>
        </div>
      </div>

      {/* Controls: Search, Category Tabs, Difficulty Filters */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem',
        marginBottom: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {/* Search Bar */}
        <div style={{ position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search skills by name, keyword, or concepts (e.g. C, Pointers, Arrays, SQL, React)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem 0.75rem 2.75rem',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-main)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              fontSize: '0.92rem'
            }}
          />
        </div>

        {/* Filter Controls Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            <button
              className={`switcher-pill ${selectedCategory === 'ALL' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('ALL')}
            >
              All Skills ({SKILLS_CATALOG.length})
            </button>
            <button
              className={`switcher-pill ${selectedCategory === 'PROGRAMMING' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('PROGRAMMING')}
            >
              Programming
            </button>
            <button
              className={`switcher-pill ${selectedCategory === 'COMPUTER_SCIENCE' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('COMPUTER_SCIENCE')}
            >
              Computer Science Core
            </button>
            <button
              className={`switcher-pill ${selectedCategory === 'SPECIALIZED' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('SPECIALIZED')}
            >
              Specialized
            </button>
          </div>

          {/* Difficulty Dropdown / Filter Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Level:</span>
            {['ALL', 'Beginner', 'Intermediate', 'Advanced'].map(diff => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                style={{
                  padding: '0.3rem 0.7rem',
                  borderRadius: '16px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  background: selectedDifficulty === diff ? 'var(--cyan-accent)' : 'var(--bg-main)',
                  color: selectedDifficulty === diff ? '#0B1B30' : 'var(--text-secondary)',
                  border: '1px solid var(--border-color)',
                  cursor: 'pointer'
                }}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1.5rem'
      }}>
        {filteredSkills.map((skill) => {
          const IconComp = ICON_MAP[skill.icon] || Code2;
          const isActive = activeSkills.includes(skill.id);
          const isKnown = knownSkills.includes(skill.id);
          const progress = isKnown ? 100 : getSkillProgress(skill.id);
          const targetDate = skillTargetDates[skill.id] || '';

          const levelBadgeColor = skill.level === 'Beginner' 
            ? 'badge-cyan' 
            : skill.level === 'Intermediate' 
            ? 'badge-yellow' 
            : 'badge-purple';

          return (
            <div
              key={skill.id}
              className="card card-hover"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: isActive ? '1px solid var(--cyan-accent)' : '1px solid var(--border-color)',
                background: isActive ? 'linear-gradient(180deg, #162E4B 0%, #142A43 100%)' : 'var(--bg-card)',
                position: 'relative'
              }}
            >
              {/* Top Row: Icon, Category & Difficulty */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--cyan-accent-soft)',
                    color: 'var(--cyan-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(22, 196, 217, 0.25)'
                  }}>
                    <IconComp size={22} />
                  </div>

                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    <span className={`badge ${levelBadgeColor}`} style={{ fontSize: '0.72rem' }}>
                      {skill.level}
                    </span>
                    {isActive && (
                      <span className="badge badge-success" style={{ fontSize: '0.72rem' }}>
                        Active Plan
                      </span>
                    )}
                    {isKnown && (
                      <span className="badge badge-subtle" style={{ fontSize: '0.72rem' }}>
                        Known ✓
                      </span>
                    )}
                  </div>
                </div>

                {/* Skill Name & Tagline */}
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.3rem' }}>
                  {skill.name}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--cyan-accent)', fontWeight: 600, marginBottom: '0.6rem' }}>
                  {skill.category} • ~{skill.estimatedHours} Hours
                </p>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {skill.description}
                </p>

                {/* Prerequisites & Tags */}
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Prerequisites:
                  </span>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.1rem' }}>
                    {skill.prerequisites.join(', ')}
                  </p>
                </div>

                {/* Progress Bar */}
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                    <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Course Progress</span>
                    <span style={{ color: progress > 0 ? 'var(--cyan-accent)' : 'var(--text-muted)', fontWeight: 700 }}>
                      {progress}%
                    </span>
                  </div>
                  <ProgressBar percent={progress} color={progress >= 100 ? '#10B981' : '#16C4D9'} />
                </div>

                {/* Target Date Input */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <Calendar size={14} color="var(--text-muted)" />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Target:</span>
                  <input
                    type="date"
                    value={targetDate}
                    onChange={(e) => onSetTargetDate(skill.id, e.target.value)}
                    style={{
                      background: 'var(--bg-main)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-main)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.78rem'
                    }}
                  />
                  {!targetDate && (
                    <button
                      type="button"
                      className="btn btn-ghost btn-sm"
                      style={{ fontSize: '0.72rem', padding: '0.1rem 0.4rem', color: 'var(--cyan-accent)' }}
                      onClick={() => {
                        const d = new Date();
                        d.setDate(d.getDate() + 30);
                        onSetTargetDate(skill.id, d.toISOString().split('T')[0]);
                      }}
                    >
                      +30 Days
                    </button>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    className={`btn btn-sm ${isActive ? 'btn-secondary' : 'btn-primary'}`}
                    style={{ flex: 1 }}
                    onClick={() => onToggleActiveSkill(skill.id)}
                  >
                    {isActive ? (
                      <>
                        <Check size={14} />
                        In Learning Plan
                      </>
                    ) : (
                      <>
                        <Plus size={14} />
                        Add to Plan
                      </>
                    )}
                  </button>

                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => onToggleKnownSkill(skill.id)}
                    title={isKnown ? 'Mark as still learning' : 'Mark as already known'}
                  >
                    {isKnown ? 'Known ✓' : 'Mark Known'}
                  </button>
                </div>

                {/* Direct Launch Buttons for Skills with Deep Roadmaps */}
                {SKILL_ROADMAPS[skill.id] ? (
                  <button
                    className="btn btn-ghost btn-sm"
                    style={{ width: '100%', color: 'var(--cyan-accent)', fontWeight: 700 }}
                    onClick={() => onOpenSkillRoadmap(skill.id)}
                  >
                    Open Deep Interactive Roadmap
                    <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                  </button>
                ) : (
                  <button
                    className="btn btn-ghost btn-sm"
                    style={{ width: '100%', color: 'var(--text-muted)' }}
                    onClick={() => onOpenSkillRoadmap(skill.id)}
                  >
                    View Curriculum & Resources
                    <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
