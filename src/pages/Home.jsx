import React, { useState, useEffect } from 'react';
import {
  Compass,
  Sparkles,
  ArrowRight,
  Layers,
  MapPin,
  TrendingUp,
  Award,
  CheckCircle2,
  Search,
  Briefcase,
  BookOpen,
  Calendar,
  Code2,
  Flame,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';
import {
  calculateStreak,
  getActivityHistory,
  getCompletedModules,
  getSolvedDsa,
} from '../utils/storage';

export const SIX_QUESTIONS = [
  {
    num: 1,
    q: 'Which career is suitable for me?',
    a: 'Transparent, rule-based career matching evaluates your interests, degree branch, skill proficiencies, and goals across 12 modern tech career trajectories.',
    icon: Compass,
    actionTab: 'recommendations',
    btnLabel: 'Discover Career',
  },
  {
    num: 2,
    q: 'Which skills do I need to learn?',
    a: 'Browse the dedicated Learning Hub of 18+ structured programming, CS core, and specialized skill paths with clear difficulty levels.',
    icon: BookOpen,
    actionTab: 'learning-hub',
    btnLabel: 'Explore Skills',
  },
  {
    num: 3,
    q: 'Where can I learn those skills for free?',
    a: 'Step-by-step modular roadmaps with verified, reputable free links: FreeCodeCamp, W3Schools, Programiz, MDN Web Docs, CS50, and GeeksforGeeks.',
    icon: Layers,
    actionTab: 'roadmap',
    btnLabel: 'View Roadmaps',
  },
  {
    num: 4,
    q: 'What exactly should I study today?',
    a: 'Personalized Daily Planner translates long-term roadmaps into bite-sized 15, 30, 45, or 60-minute actionable tasks with a built-in focus timer.',
    icon: Calendar,
    actionTab: 'daily-planner',
    btnLabel: 'Open Planner',
  },
  {
    num: 5,
    q: 'How can I practise what I learn?',
    a: 'Interactive practice workspace featuring instant-scored quizzes, simulated code challenges with test outputs, and guided DSA problem sets.',
    icon: Code2,
    actionTab: 'practice',
    btnLabel: 'Start Practice',
  },
  {
    num: 6,
    q: 'How can I track my progress and stay consistent?',
    a: 'Daily consistency streaks, weekly study time targets, 7-day activity heatmaps, daily check-in reflections, and gentle missed-day recovery.',
    icon: Flame,
    actionTab: 'dashboard',
    btnLabel: 'Track Progress',
  },
];

export default function Home({ onStartProfile, onExploreCareers, onNavigateTab, hasProfile }) {
  // Live stats from localStorage
  const [liveStats, setLiveStats] = useState({
    streak: 0,
    completedModules: 0,
    solvedDsa: 0,
  });

  useEffect(() => {
    try {
      const history = getActivityHistory();
      const streak = calculateStreak(history);
      const modules = getCompletedModules() || [];
      const dsa = getSolvedDsa() || [];
      setLiveStats({
        streak,
        completedModules: modules.length,
        solvedDsa: dsa.length,
      });
    } catch {
      // storage unavailable
    }
  }, []);

  return (
    <div className="home-page">
      {/* ── Hero Section ──────────────────────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-glow-bg" />

        <div className="container hero-content">
          <div className="hero-pill">
            <Sparkles size={14} />
            <span>AI Career Guide • Personal Career &amp; Learning Companion</span>
          </div>

          <h1 className="hero-title">
            Discover Your Potential. <br />
            <span className="hero-title-highlight">Learn the Right Skills.</span> <br />
            Build Your Future.
          </h1>

          <p className="hero-description">
            Don't just get told what career to choose. Learn the exact skills step-by-step
            with verified free resources, practise daily with interactive quizzes and code
            simulations, and build lasting consistency habits for campus placement success.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary btn-lg" onClick={onStartProfile}>
              <Sparkles size={18} />
              {hasProfile ? 'Edit Student Profile' : 'Build Student Profile'}
              <ArrowRight size={18} />
            </button>

            <button className="btn btn-secondary btn-lg" onClick={onExploreCareers}>
              <Search size={18} />
              Explore 12 Careers
            </button>
          </div>

          {/* Quick Metrics Bar – mix of static platform stats & live personal stats */}
          <div className="hero-stats-bar" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}>
            <div className="stat-item">
              <div className="stat-number">12</div>
              <div className="stat-label">Mapped Tech Careers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">18+</div>
              <div className="stat-label">Free Skill Pathways</div>
            </div>
            {liveStats.streak > 0 ? (
              <div className="stat-item">
                <div className="stat-number" style={{ color: 'var(--yellow-accent)' }}>
                  🔥 {liveStats.streak}
                </div>
                <div className="stat-label">Day Streak</div>
              </div>
            ) : (
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Verified Free Resources</div>
              </div>
            )}
            {liveStats.completedModules > 0 ? (
              <div className="stat-item">
                <div className="stat-number" style={{ color: '#10B981' }}>
                  ✓ {liveStats.completedModules}
                </div>
                <div className="stat-label">Modules Completed</div>
              </div>
            ) : (
              <div className="stat-item">
                <div className="stat-number">Daily</div>
                <div className="stat-label">Consistency Engine</div>
              </div>
            )}
          </div>

          {/* Progress nudge when user has a profile */}
          {hasProfile && (liveStats.streak > 0 || liveStats.completedModules > 0) && (
            <div
              style={{
                marginTop: '1.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.35)',
                borderRadius: '9999px',
                padding: '0.45rem 1.2rem',
                fontSize: '0.88rem',
                color: '#10B981',
                fontWeight: 600,
              }}
            >
              <CheckCircle size={16} />
              Progress saved! Resume your learning journey.
              <button
                className="btn btn-ghost btn-sm"
                style={{ color: '#10B981', padding: '0', fontSize: '0.8rem' }}
                onClick={() => onNavigateTab && onNavigateTab('dashboard')}
              >
                View Dashboard →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── The 6 Core Questions ───────────────────────────────────────── */}
      <section
        style={{
          padding: '4rem 0',
          background: '#091627',
          borderTop: '1px solid var(--border-color)',
          borderBottom: '1px solid var(--border-color)',
        }}
      >
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">
              <HelpCircle size={14} />
              <span>The 6 Questions Every College Student Asks</span>
            </div>
            <h2 className="section-title">
              Your Complete Career &amp; Consistency Operating System
            </h2>
            <p className="section-subtitle">
              We guide you from uncertain beginnings to verified skills, daily practice, and
              interview-ready portfolios.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginTop: '2.5rem',
            }}
          >
            {SIX_QUESTIONS.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.num}
                  className="card card-hover"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-card)',
                    position: 'relative',
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '1rem',
                      }}
                    >
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: 'var(--radius-sm)',
                          background: 'var(--cyan-accent-soft)',
                          color: 'var(--cyan-accent)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconComp size={20} />
                      </div>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          color: 'var(--yellow-accent)',
                          background: 'var(--yellow-accent-soft)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '20px',
                        }}
                      >
                        Q{item.num}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: 'var(--text-main)',
                        marginBottom: '0.6rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {item.q}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {item.a}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: '1.5rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-color)',
                    }}
                  >
                    <button
                      className="btn btn-ghost btn-sm"
                      style={{ color: 'var(--cyan-accent)', paddingLeft: 0, fontWeight: 700 }}
                      onClick={() =>
                        onNavigateTab ? onNavigateTab(item.actionTab) : onExploreCareers()
                      }
                    >
                      {item.btnLabel}
                      <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works – 3 Simple Steps ─────────────────────────────── */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">
              <TrendingUp size={14} />
              <span>How It Works</span>
            </div>
            <h2 className="section-title">Three Steps to Career Clarity</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginTop: '2rem',
            }}
          >
            {[
              {
                step: '01',
                title: 'Build Your Profile',
                desc: 'Share your degree, branch, existing skills, and goals. Our rule-based engine calculates personalized career match scores.',
                color: 'var(--cyan-accent)',
                tab: 'profile',
              },
              {
                step: '02',
                title: 'Learn & Practice Daily',
                desc: 'Follow structured skill roadmaps with free verified resources, complete daily tasks, and reinforce concepts with quizzes.',
                color: 'var(--yellow-accent)',
                tab: 'roadmap',
              },
              {
                step: '03',
                title: 'Track & Stay Consistent',
                desc: 'Monitor your learning streak, weekly study time, and skill progress. Build portfolio projects that showcase your capabilities.',
                color: '#10B981',
                tab: 'dashboard',
              },
            ].map((s) => (
              <div
                key={s.step}
                className="card"
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1.25rem',
                    fontSize: '3.5rem',
                    fontWeight: 900,
                    color: 'rgba(40,65,92,0.3)',
                    fontFamily: 'var(--font-mono)',
                    userSelect: 'none',
                  }}
                >
                  {s.step}
                </span>
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: s.color,
                    marginBottom: '1rem',
                    boxShadow: `0 0 12px ${s.color}80`,
                  }}
                />
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    marginBottom: '0.6rem',
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {s.desc}
                </p>
                <button
                  className="btn btn-ghost btn-sm"
                  style={{ color: s.color, paddingLeft: 0, marginTop: '1rem', fontWeight: 700 }}
                  onClick={() => onNavigateTab && onNavigateTab(s.tab)}
                >
                  Get Started <ArrowRight size={13} style={{ marginLeft: '4px' }} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Principle Callout Banner ───────────────────────────────────── */}
      <section style={{ padding: '0 0 3.5rem' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, #142A43 0%, #102237 100%)',
              border: '1px solid var(--cyan-accent)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <span className="badge badge-yellow" style={{ marginBottom: '1rem' }}>
              Guiding Principle
            </span>
            <blockquote
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                maxWidth: '750px',
                margin: '0 auto 1.5rem',
                lineHeight: 1.5,
              }}
            >
              "Don't just tell students what career to choose. Help them learn the skills,
              practise consistently, and take measurable steps toward that career."
            </blockquote>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                maxWidth: '620px',
                margin: '0 auto 2rem',
              }}
            >
              Built specifically for college students navigating campus placements, internship
              searches, and foundational computer science learning.
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <button className="btn btn-primary btn-md" onClick={onStartProfile}>
                <Sparkles size={16} />
                Get Started Now
              </button>
              <button
                className="btn btn-secondary btn-md"
                onClick={() =>
                  onNavigateTab ? onNavigateTab('learning-hub') : onExploreCareers()
                }
              >
                <BookOpen size={16} />
                Browse Learning Hub
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
