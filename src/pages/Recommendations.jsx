import React, { useState } from 'react';
import { 
  Sparkles, 
  Info, 
  ArrowRight, 
  Award, 
  Filter, 
  ChevronDown, 
  ChevronUp,
  User,
  Compass,
  CheckCircle2,
  Sliders,
  HelpCircle
} from 'lucide-react';
import CareerCard from '../components/CareerCard';
import { CAREERS } from '../data/careers';

export default function Recommendations({ 
  profile, 
  recommendations, 
  selectedCareerId, 
  onSelectCareer, 
  onEditProfile 
}) {
  const [showAllCareers, setShowAllCareers] = useState(false);
  const [showScoringDetails, setShowScoringDetails] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!profile || recommendations.length === 0) {
    return (
      <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
        <div className="empty-state-card">
          <div className="empty-state-icon">
            <Compass size={36} />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.6rem' }}>
            No Career Matches Generated Yet
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
            Complete your student profile to calculate personalized career match percentages and unlock tailored learning roadmaps.
          </p>
          <button className="btn btn-primary btn-lg" onClick={onEditProfile}>
            <Sparkles size={18} />
            Create Student Profile
          </button>
        </div>
      </div>
    );
  }

  const topThree = recommendations.slice(0, 3);
  const otherCareers = recommendations.slice(3);

  const categories = ['All', ...new Set(CAREERS.map(c => c.category.split(' ')[0]))];
  const filteredOther = otherCareers.filter(c => {
    if (selectedCategory === 'All') return true;
    return c.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 4rem' }}>
      {/* Page Header */}
      <div className="section-header center">
        <div className="section-tag">
          <Award size={14} />
          <span>Algorithmic Fit Assessment</span>
        </div>
        <h1 className="section-title">
          Top Career Recommendations for {profile.name}
        </h1>
        <p className="section-subtitle">
          Rule-based analysis evaluating your academic branch in {profile.branch || profile.degree || 'college'}, interests in {profile.interests?.slice(0, 3).join(', ')}, and target ambition of "{profile.careerGoal || 'entering high-impact tech'}".
        </p>
      </div>

      {/* Transparent Match Score & Estimation Banner */}
      <div className="disclaimer-banner" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
          <Info size={20} color="var(--cyan-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.2rem' }}>
              Transparent Rule-Based Calculation (Algorithmic Estimate)
            </strong>
            <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              These match scores are algorithmic estimates calculated from your profile responses. They are decision aids for college students, not scientifically validated predictions.
              {recommendations[0]?.isProvisional && (
                <span> Some profile fields are missing, so rankings are marked provisional. Complete your profile for a fuller estimate.</span>
              )}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowScoringDetails(!showScoringDetails)}
          style={{
            alignSelf: 'flex-start',
            fontSize: '0.82rem',
            color: 'var(--cyan-accent)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.2rem 0',
            fontWeight: 700
          }}
        >
          <Sliders size={13} />
          {showScoringDetails ? 'Hide Transparent Weight Matrix' : 'View Transparent Weight Matrix & Formula'}
        </button>

        {showScoringDetails && (
          <div style={{
            background: 'var(--bg-main)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-sm)',
            padding: '1rem',
            marginTop: '0.4rem',
            fontSize: '0.84rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)'
          }}>
            <p style={{ marginBottom: '0.5rem', color: 'var(--text-main)', fontWeight: 600 }}>
              Algorithmic Matrix Weight Distribution (100% Total):
            </p>
            <ul style={{ paddingLeft: '1.2rem', marginBottom: '0.75rem' }}>
              <li><strong>Career interests (30%):</strong> Overlap between your selected interests and the career domain (0–100).</li>
              <li><strong>Existing relevant skills (25%):</strong> Skills you reported, weighted Beginner 40 / Intermediate 70 / Advanced 100.</li>
              <li><strong>Educational background (20%):</strong> Related coursework can help, but a degree never guarantees suitability.</li>
              <li><strong>Personal career goals (15%):</strong> Preferred paths plus short-term and long-term goals.</li>
              <li><strong>Preferred work style (10%):</strong> How you like to work day to day.</li>
            </ul>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
              Career Match Score = (Interest × 0.30) + (Skills × 0.25) + (Education × 0.20) + (Goals × 0.15) + (Work Style × 0.10)
            </p>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Each component is scored from your profile answers. Percentages are estimates, not scientifically validated predictions. Career Interest Match and Current Skill Readiness are tracked separately.
            </p>
            {topThree[0]?.scoreBreakdown && (
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.6rem' }}>
                Example for {topThree[0].title}: Interest {topThree[0].scoreBreakdown.interest}, Skills {topThree[0].scoreBreakdown.skills}, Education {topThree[0].scoreBreakdown.education}, Goals {topThree[0].scoreBreakdown.goals}, Work style {topThree[0].scoreBreakdown.workStyle} → {topThree[0].matchPercentage}% estimated match.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Top 3 Ranked Careers Section */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)' }}>
              Top 3 Ranked Career Matches
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              Select one to set as your primary target career and unlock its 3-stage roadmap.
            </p>
          </div>
          <button className="btn btn-secondary btn-sm" onClick={onEditProfile}>
            <User size={14} />
            Edit Profile Answers
          </button>
        </div>

        <div className="careers-grid">
          {topThree.map((career, index) => (
            <CareerCard
              key={career.id}
              career={career}
              rank={index + 1}
              isSelected={career.id === selectedCareerId}
              onExplore={onSelectCareer}
            />
          ))}
        </div>
      </div>

      {/* Remaining 9 Careers Section */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        padding: '2rem 1.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>
              Explore All 12 Career Trajectories
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              Curious about other paths? Compare skills and switch your target track at any time.
            </p>
          </div>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setShowAllCareers(!showAllCareers)}
          >
            {showAllCareers ? 'Collapse Other Careers' : `Show ${otherCareers.length} Other Careers`}
            {showAllCareers ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {showAllCareers && (
          <div style={{ marginTop: '1.5rem' }}>
            {/* Filter Pills */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    background: selectedCategory === cat ? 'var(--cyan-accent)' : 'var(--bg-main)',
                    color: selectedCategory === cat ? '#0B1B30' : 'var(--text-secondary)',
                    border: '1px solid var(--border-color)',
                    cursor: 'pointer'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="careers-grid">
              {filteredOther.map((career, index) => (
                <CareerCard
                  key={career.id}
                  career={career}
                  rank={index + 4}
                  isSelected={career.id === selectedCareerId}
                  onExplore={onSelectCareer}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
