import React, { useState } from 'react';
import {
  Code2,
  BrainCircuit,
  BarChart3,
  Palette,
  ShieldCheck,
  Briefcase,
  TrendingUp,
  Layout,
  Server,
  Layers,
  LineChart,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Trophy,
  ChevronDown,
  ChevronUp,
  FolderGit2,
  GraduationCap,
  ListOrdered,
  Zap,
  Star
} from 'lucide-react';

const ICON_MAP = {
  Code2,
  BrainCircuit,
  BarChart3,
  Palette,
  ShieldCheck,
  Briefcase,
  TrendingUp,
  Layout,
  Server,
  Layers,
  LineChart,
  Cloud,
};

/**
 * Dual-indicator progress bar for Career Interest Match & Skill Readiness
 */
function DualIndicatorBar({ label, percent, color, icon: Icon }) {
  return (
    <div style={{ marginBottom: '0.6rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          {Icon && <Icon size={11} />}
          {label}
        </span>
        <span style={{ fontSize: '0.8rem', fontWeight: 800, color }}>
          {percent}%
        </span>
      </div>
      <div style={{
        height: '6px',
        background: 'rgba(255,255,255,0.06)',
        borderRadius: '9999px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.06)'
      }}>
        <div style={{
          height: '100%',
          width: `${Math.min(100, percent)}%`,
          background: color,
          borderRadius: '9999px',
          transition: 'width 0.6s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: `0 0 6px ${color}60`,
        }} />
      </div>
    </div>
  );
}

export default function CareerCard({ career, rank, isSelected, onExplore }) {
  const [expanded, setExpanded] = useState(false);
  const IconComponent = ICON_MAP[career.icon] || Briefcase;
  const isTopRank = rank === 1;

  const interestMatch = career.interestMatchPercent ?? career.matchPercentage;
  const skillReadiness = career.skillReadinessPercent ?? Math.round(career.matchPercentage * 0.75);

  return (
    <div
      className={`career-card card-hover ${isTopRank ? 'top-rank' : ''}`}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {/* Top Bar: Icon, Badges, Match Score */}
      <div className="career-card-top">
        <div
          className="career-icon-wrap"
          style={{ color: career.color, borderColor: `${career.color}40` }}
        >
          <IconComponent size={24} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          {rank && (
            <span className={`badge ${isTopRank ? 'badge-yellow' : 'badge-subtle'}`}>
              {isTopRank ? <Trophy size={12} /> : null}
              Rank #{rank}
            </span>
          )}

          <div className="match-circle-badge">
            <span className={`match-percent-val ${isTopRank ? 'yellow' : ''}`}>
              {career.matchPercentage}%
            </span>
            <span className="match-label">{career.isProvisional ? 'Provisional est.' : 'Est. Match'}</span>
          </div>
        </div>
      </div>

      {/* Title & Category */}
      <h3 className="career-card-title">{career.title}</h3>
      <p className="career-card-category">{career.category}</p>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '0.4rem 0 1rem', lineHeight: 1.5 }}>
        {career.overview || career.tagline}
      </p>

      {/* ── DUAL INDICATORS (Section 3 requirement) ───────────────────── */}
      <div
        style={{
          background: 'rgba(11, 27, 48, 0.6)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-sm)',
          padding: '0.85rem 1rem',
          marginBottom: '1rem',
        }}
      >
        <span
          style={{
            display: 'block',
            fontSize: '0.68rem',
            fontWeight: 700,
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.65rem',
          }}
        >
          📊 Two Separate Fit Indicators (Estimated)
        </span>

        <DualIndicatorBar
          label="Career Interest Match"
          percent={interestMatch}
          color="#16C4D9"
          icon={Star}
        />
        <DualIndicatorBar
          label="Current Skill Readiness"
          percent={skillReadiness}
          color="#FFC400"
          icon={Zap}
        />

        <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: 1.4 }}>
          Interest Match ≠ Skill Readiness. You can be highly interested in a career even as a beginner.
          {career.scoreBreakdown && (
            <> Component scores: I {career.scoreBreakdown.interest} · S {career.scoreBreakdown.skills} · E {career.scoreBreakdown.education} · G {career.scoreBreakdown.goals} · W {career.scoreBreakdown.workStyle}.</>
          )}
        </p>
      </div>
      {/* ──────────────────────────────────────────────────────────────── */}

      {/* Rationale */}
      <div className="career-card-explanation" style={{ marginBottom: '1rem' }}>
        <strong
          style={{
            display: 'block',
            fontSize: '0.8rem',
            color: 'var(--cyan-accent)',
            textTransform: 'uppercase',
            marginBottom: '0.2rem',
          }}
        >
          Why This Matches You:
        </strong>
        <p style={{ fontSize: '0.86rem', lineHeight: 1.5 }}>{career.explanation}</p>
      </div>

      {/* Relevant Existing Skills */}
      <div className="career-skills-section">
        <div className="skills-section-heading">✓ Skills You Already Possess</div>
        <div className="skills-tags-wrap">
          {career.relevantExistingSkills && career.relevantExistingSkills.length > 0 ? (
            career.relevantExistingSkills.map((skill, idx) => (
              <span key={idx} className="badge badge-success">
                {skill}
              </span>
            ))
          ) : (
            <span className="badge badge-subtle">None reported yet for this career</span>
          )}
        </div>
      </div>

      {/* Skills to Develop */}
      <div className="career-skills-section">
        <div className="skills-section-heading" style={{ color: 'var(--yellow-accent)' }}>
          ⚡ Skills to Develop
        </div>
        <div className="skills-tags-wrap">
          {career.skillsToDevelop &&
            career.skillsToDevelop.map((skill, idx) => (
              <span key={idx} className="badge badge-yellow">
                {skill}
              </span>
            ))}
        </div>
      </div>

      {/* Expandable: Learning Sequence, Beginner Projects, Opportunities */}
      <div style={{ marginTop: '0.75rem', marginBottom: '1rem' }}>
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: '0.5rem 0.75rem',
            borderRadius: 'var(--radius-sm)',
            background: 'var(--bg-main)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-secondary)',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          <span>
            {expanded
              ? 'Hide Learning Sequence & Projects'
              : 'View Learning Sequence & Projects'}
          </span>
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {expanded && (
          <div
            style={{
              marginTop: '0.75rem',
              padding: '1rem',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-main)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              animation: 'fadeIn 0.2s ease-out',
            }}
          >
            {career.recommendedSequence && (
              <div>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--cyan-accent)',
                    textTransform: 'uppercase',
                  }}
                >
                  <ListOrdered size={13} />
                  Recommended Learning Sequence
                </span>
                <ol
                  style={{
                    paddingLeft: '1.2rem',
                    marginTop: '0.4rem',
                    fontSize: '0.82rem',
                    color: 'var(--text-main)',
                    lineHeight: 1.5,
                  }}
                >
                  {career.recommendedSequence.map((step, sIdx) => (
                    <li key={sIdx}>{step}</li>
                  ))}
                </ol>
              </div>
            )}

            {career.beginnerProjects && (
              <div>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--yellow-accent)',
                    textTransform: 'uppercase',
                  }}
                >
                  <FolderGit2 size={13} />
                  Beginner-Friendly Projects
                </span>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginTop: '0.4rem',
                  }}
                >
                  {career.beginnerProjects.map((p, pIdx) => (
                    <span
                      key={pIdx}
                      style={{
                        fontSize: '0.75rem',
                        background: 'var(--bg-elevated)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        color: 'var(--text-main)',
                      }}
                    >
                      • {p}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {career.careerOpportunities && (
              <div>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                  }}
                >
                  <GraduationCap size={13} />
                  Entry Roles & Opportunities
                </span>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginTop: '0.4rem',
                  }}
                >
                  {career.careerOpportunities.map((o, oIdx) => (
                    <span
                      key={oIdx}
                      style={{
                        fontSize: '0.75rem',
                        background: 'rgba(255,255,255,0.06)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Industry Meta */}
      <div className="career-meta-row" style={{ marginTop: 'auto' }}>
        <div>
          <span>Est. Range: </span>
          <span className="career-meta-val">{career.salaryRange}</span>
        </div>
        <div>
          <span>Growth: </span>
          <span className="career-meta-val" style={{ color: 'var(--cyan-accent)' }}>
            {career.jobGrowth.split(' ')[0]}
          </span>
        </div>
      </div>

      {/* Primary Action Button */}
      <button
        className={`btn ${isSelected ? 'btn-secondary' : isTopRank ? 'btn-primary' : 'btn-outline'}`}
        onClick={() => onExplore(career.id)}
        style={{ width: '100%', marginTop: '0.75rem' }}
      >
        {isSelected ? (
          <>
            <CheckCircle2 size={16} color="#10B981" />
            Currently Selected Career
          </>
        ) : (
          <>
            Select as Target Career
            <ArrowRight size={16} />
          </>
        )}
      </button>
    </div>
  );
}
