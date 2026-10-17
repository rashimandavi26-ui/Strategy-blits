import React, { useState, useEffect } from 'react';
import { 
  FolderGit2, 
  Layers, 
  Wrench, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  MapPin,
  Check,
  ChevronDown,
  ChevronUp,
  Award,
  ListOrdered,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CAREERS } from '../data/careers';
import { PROJECTS_CATALOG, PROJECTS } from '../data/projects';
import { getProjectProgress, saveProjectMilestone } from '../utils/storage';
import ProgressBar from '../components/ProgressBar';

export default function Projects({ selectedCareerId, onSelectCareer, onGoToRoadmap }) {
  const [filterMode, setFilterMode] = useState('career'); // 'career' | 'all'
  const [projectProgress, setProjectProgress] = useState({});
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  useEffect(() => {
    setProjectProgress(getProjectProgress());
  }, []);

  const currentCareer = CAREERS.find((c) => c.id === selectedCareerId) || CAREERS[0];
  
  // Projects to display
  const displayedProjects = filterMode === 'career'
    ? (PROJECTS[currentCareer.id] || PROJECTS_CATALOG.slice(0, 3))
    : PROJECTS_CATALOG;

  const handleMilestoneToggle = (projId, milestoneId, currentVal, totalMilestones) => {
    const nextVal = !currentVal;
    const updated = saveProjectMilestone(projId, milestoneId, nextVal);
    setProjectProgress({ ...updated });

    // Check if all milestones are now done for this project
    const projMilestones = updated[projId]?.milestones || {};
    const doneCount = Object.values(projMilestones).filter(Boolean).length;
    if (doneCount === totalMilestones) {
      try {
        confetti({
          particleCount: 60,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  };

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 4rem' }}>
      {/* Page Header */}
      <div className="section-header center">
        <div className="section-tag">
          <FolderGit2 size={14} />
          <span>Interactive Project Builder</span>
        </div>
        <h1 className="section-title">
          Practical Projects for {currentCareer.title}
        </h1>
        <p className="section-subtitle">
          Build realistic software applications that demonstrate technical competence to recruiters. Each project includes prerequisites, step-by-step milestones, checklists, and portfolio presentation advice.
        </p>
      </div>

      {/* Career Quick Switcher Pill Bar */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            Filter Projects For Target Career:
          </span>
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            style={{ color: 'var(--cyan-accent)', fontSize: '0.8rem' }}
            onClick={() => setFilterMode(filterMode === 'career' ? 'all' : 'career')}
          >
            {filterMode === 'career' ? `View All ${PROJECTS_CATALOG.length} Projects Catalog` : `Show ${currentCareer.title} Projects Only`}
          </button>
        </div>

        <div className="career-switcher-bar">
          {CAREERS.map((c) => {
            const isActive = c.id === currentCareer.id;
            return (
              <button
                key={c.id}
                className={`switcher-pill ${isActive ? 'active' : ''}`}
                onClick={() => {
                  onSelectCareer(c.id);
                  setFilterMode('career');
                }}
              >
                {c.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.75rem' }}>
        {displayedProjects.map((project, idx) => {
          const milestonesDone = projectProgress[project.id]?.milestones || {};
          const doneMilestonesCount = (project.milestones || []).filter(m => milestonesDone[m.id]).length;
          const totalMilestones = (project.milestones || []).length;
          const progressPercent = totalMilestones > 0 ? Math.round((doneMilestonesCount / totalMilestones) * 100) : 0;
          const isFullyDone = totalMilestones > 0 && doneMilestonesCount === totalMilestones;
          const isExpanded = expandedProjectId === project.id;

          return (
            <div
              key={project.id}
              className="card card-hover"
              style={{
                border: isFullyDone ? '1px solid #10B981' : '1px solid var(--border-color)',
                background: isFullyDone ? 'rgba(16, 185, 129, 0.04)' : 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Top Row: Tag, Difficulty & Progress */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                  <span className="badge badge-subtle" style={{ fontSize: '0.72rem' }}>
                    Project #{idx + 1}
                  </span>
                  <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                    <span className="badge" style={{ fontSize: '0.72rem', background: project.difficultyColor + '20', color: project.difficultyColor }}>
                      {project.difficulty}
                    </span>
                    {isFullyDone && <span className="badge badge-success" style={{ fontSize: '0.72rem' }}>Completed ✓</span>}
                  </div>
                </div>

                {/* Project Title & Objective */}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  {project.name}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {project.objective || project.description}
                </p>

                {/* Required Skills & Prerequisites */}
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--cyan-accent)', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
                    Required Skills:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {(project.skillsRequired || []).map((sk, sIdx) => (
                      <span key={sIdx} className="badge badge-subtle" style={{ fontSize: '0.72rem' }}>
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                {project.prerequisites && (
                  <div style={{ marginBottom: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <strong>Prerequisites: </strong> {project.prerequisites.join(', ')}
                  </div>
                )}

                {/* Milestone Progress Bar */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: '0.3rem' }}>
                    <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Milestones Completed</span>
                    <span style={{ color: isFullyDone ? '#10B981' : 'var(--cyan-accent)', fontWeight: 700 }}>
                      {doneMilestonesCount} / {totalMilestones} ({progressPercent}%)
                    </span>
                  </div>
                  <ProgressBar percent={progressPercent} color={isFullyDone ? '#10B981' : '#16C4D9'} />
                </div>

                {/* Step-by-Step Interactive Milestones */}
                <div style={{
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1rem',
                  marginBottom: '1rem'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 700, color: 'var(--yellow-accent)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                    <ListOrdered size={13} />
                    Step-by-Step Milestones
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {(project.milestones || []).map((ms) => {
                      const isDone = !!milestonesDone[ms.id];
                      return (
                        <div
                          key={ms.id}
                          onClick={() => handleMilestoneToggle(project.id, ms.id, isDone, totalMilestones)}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.6rem',
                            cursor: 'pointer',
                            fontSize: '0.82rem',
                            color: isDone ? '#10B981' : 'var(--text-main)',
                            lineHeight: 1.4
                          }}
                        >
                          <div style={{
                            width: '16px',
                            height: '16px',
                            borderRadius: '4px',
                            background: isDone ? '#10B981' : 'transparent',
                            border: isDone ? 'none' : '1px solid var(--border-highlight)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '2px',
                            flexShrink: 0
                          }}>
                            {isDone && <Check size={12} color="#0B1B30" />}
                          </div>
                          <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
                            {ms.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Expandable Checklist & Portfolio Presentation Tips */}
                <button
                  type="button"
                  onClick={() => setExpandedProjectId(isExpanded ? null : project.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--cyan-accent)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.2rem 0',
                    marginBottom: '0.75rem'
                  }}
                >
                  <FileText size={13} />
                  {isExpanded ? 'Hide Checklist & Portfolio Tips' : 'View Checklist & Portfolio Tips'}
                  {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                </button>

                {isExpanded && (
                  <div style={{
                    padding: '0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    marginBottom: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}>
                    {project.checklist && (
                      <div>
                        <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.3rem' }}>
                          ✓ Completion Quality Checklist:
                        </strong>
                        <ul style={{ paddingLeft: '1.2rem' }}>
                          {project.checklist.map((chk, cIdx) => (
                            <li key={cIdx}>{chk}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.suggestedTools && (
                      <div>
                        <strong style={{ color: 'var(--text-main)' }}>Suggested Tools: </strong>
                        <span>{project.suggestedTools.join(', ')}</span>
                      </div>
                    )}

                    {project.portfolioTips && (
                      <div style={{ background: 'rgba(22, 196, 217, 0.08)', padding: '0.6rem', borderRadius: '4px', borderLeft: '3px solid var(--cyan-accent)' }}>
                        <strong style={{ color: 'var(--cyan-accent)' }}>Portfolio Presentation Tip: </strong>
                        <span>{project.portfolioTips}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom Action */}
              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%' }}
                  onClick={onGoToRoadmap}
                >
                  Connect to Roadmap Tasks
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
