import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  User, 
  GraduationCap, 
  Layers, 
  CheckCircle, 
  AlertCircle, 
  Clock,
  BookOpen,
  Target,
  Compass,
  Check
} from 'lucide-react';
import { DEMO_PROFILES } from '../utils/storage';
import { CAREERS } from '../data/careers';

const DEGREE_OPTIONS = [
  'B.Tech / B.E.',
  'BCA (Bachelor of Computer Applications)',
  'B.Sc Computer Science / IT',
  'M.Tech / M.E.',
  'MCA (Master of Computer Applications)',
  'M.Sc Data Science / CS',
  'Diploma in Engineering',
  'Other / Liberal Arts'
];

const BRANCH_OPTIONS = [
  'Computer Science & Engineering (CSE)',
  'Information Technology (IT)',
  'AI & Data Science (AI/DS)',
  'Electronics & Communication (ECE)',
  'Electrical Engineering (EE)',
  'Mechanical Engineering',
  'Civil Engineering',
  'Business Administration / Management',
  'Design & Human-Computer Interaction',
  'Other Branch'
];

const YEAR_OPTIONS = [
  '1st Year (Freshman)',
  '2nd Year (Sophomore)',
  '3rd Year (Junior)',
  '4th Year (Senior)',
  'Postgraduate / Master\'s',
  'Bootcamp / Self-Taught'
];

const INTEREST_OPTIONS = [
  'Programming',
  'Artificial Intelligence',
  'Web Development',
  'Data Analysis',
  'Cybersecurity',
  'Cloud Infrastructure',
  'Design',
  'Business',
  'Communication',
  'Problem Solving'
];

const SKILL_OPTIONS = [
  'Programming',
  'Problem-solving',
  'Mathematics',
  'Analytical thinking',
  'Communication',
  'Creativity',
  'Teamwork',
  'Research'
];

const TIME_OPTIONS = [
  { value: 15, label: '15 Minutes / Day', desc: 'Bite-sized daily consistency' },
  { value: 30, label: '30 Minutes / Day', desc: 'Recommended balanced pace' },
  { value: 45, label: '45 Minutes / Day', desc: 'Steadily accelerated progress' },
  { value: 60, label: '60 Minutes / Day', desc: 'Deep-dive intensive learning' },
  { value: 90, label: 'Custom Duration', desc: 'Custom daily study goal' }
];

const LEARNING_STYLES = [
  { id: 'Hands-on Project-First', label: 'Hands-on Project-First', desc: 'Learn by writing code, building apps, and solving exercises directly.' },
  { id: 'Visual & Interactive Tutorials', label: 'Visual & Interactive Tutorials', desc: 'Grasp concepts via flowcharts, interactive sandboxes, and visual step-throughs.' },
  { id: 'Structured Course & Video', label: 'Structured Course & Video', desc: 'Follow organized curricula, lecture breakdowns, and comprehensive courses.' },
  { id: 'Documentation & Reading', label: 'Documentation & Reading', desc: 'Read official documentation, technical articles, and reference guides.' }
];

const WORK_STYLE_OPTIONS = [
  { id: 'Technical & Deep Coding', label: 'Technical & Deep Coding', desc: 'Prefer building, debugging, and going deep on implementation.' },
  { id: 'Analytical & Problem Solving', label: 'Analytical & Problem Solving', desc: 'Prefer patterns, data, experiments, and structured reasoning.' },
  { id: 'Creative & Visual', label: 'Creative & Visual', desc: 'Prefer interfaces, storytelling, and visual craft.' },
  { id: 'Strategic & Product Leadership', label: 'Strategic & Product Leadership', desc: 'Prefer goals, users, coordination, and shipping decisions.' }
];

const SHORT_TERM_SUGGESTIONS = [
  'Master C programming fundamentals & write first calculator',
  'Build and deploy a personal portfolio website',
  'Learn basic Data Structures and solve 20 practice questions',
  'Prepare for 3rd-year summer internship coding rounds',
  'Complete HTML, CSS and JavaScript foundations'
];

const LONG_TERM_SUGGESTIONS = [
  'Software Development Engineer (SDE) at top tech enterprise',
  'AI/ML Engineer designing intelligent agents & models',
  'Full-Stack Developer building end-to-end cloud applications',
  'Found a technology startup with proprietary products',
  'Lead Data Analyst driving strategic business decisions'
];

export default function Profile({ initialProfile, onSaveProfile }) {
  const [name, setName] = useState('');
  const [degree, setDegree] = useState(DEGREE_OPTIONS[0]);
  const [branch, setBranch] = useState(BRANCH_OPTIONS[0]);
  const [yearOfStudy, setYearOfStudy] = useState(YEAR_OPTIONS[1]);
  const [interests, setInterests] = useState(['Programming', 'Problem Solving']);
  const [skills, setSkills] = useState(['Programming', 'Problem-solving']);
  const [skillProficiencies, setSkillProficiencies] = useState({
    'Programming': 'Beginner',
    'Problem-solving': 'Intermediate'
  });
  const [preferredCareers, setPreferredCareers] = useState(['software-developer']);
  const [availableTimePerDay, setAvailableTimePerDay] = useState(30);
  const [customTime, setCustomTime] = useState(90);
  const [isCustomTime, setIsCustomTime] = useState(false);
  const [learningStyle, setLearningStyle] = useState('Hands-on Project-First');
  const [workStyle, setWorkStyle] = useState('Technical & Deep Coding');
  const [shortTermGoal, setShortTermGoal] = useState(SHORT_TERM_SUGGESTIONS[0]);
  const [longTermGoal, setLongTermGoal] = useState(LONG_TERM_SUGGESTIONS[0]);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    if (initialProfile) {
      setName(initialProfile.name || '');
      setDegree(initialProfile.degree || DEGREE_OPTIONS[0]);
      setBranch(initialProfile.branch || BRANCH_OPTIONS[0]);
      setYearOfStudy(initialProfile.yearOfStudy || initialProfile.educationLevel || YEAR_OPTIONS[1]);
      setInterests(initialProfile.interests || ['Programming']);
      setSkills(initialProfile.skills || ['Programming']);
      setSkillProficiencies(initialProfile.skillProficiencies || {});
      setPreferredCareers(initialProfile.preferredCareers || ['software-developer']);
      const timeVal = initialProfile.availableTimePerDay || 30;
      if ([15, 30, 45, 60].includes(timeVal)) {
        setAvailableTimePerDay(timeVal);
        setIsCustomTime(false);
      } else {
        setIsCustomTime(true);
        setCustomTime(timeVal);
      }
      setLearningStyle(initialProfile.learningStyle || 'Hands-on Project-First');
      setWorkStyle(initialProfile.workStyle || 'Technical & Deep Coding');
      setShortTermGoal(initialProfile.shortTermGoal || SHORT_TERM_SUGGESTIONS[0]);
      setLongTermGoal(initialProfile.longTermGoal || initialProfile.careerGoal || LONG_TERM_SUGGESTIONS[0]);
    }
  }, [initialProfile]);

  const toggleInterest = (val) => {
    if (interests.includes(val)) {
      if (interests.length > 1) setInterests(interests.filter(i => i !== val));
    } else {
      setInterests([...interests, val]);
    }
  };

  const toggleSkill = (val) => {
    if (skills.includes(val)) {
      if (skills.length > 1) {
        setSkills(skills.filter(s => s !== val));
        const updated = { ...skillProficiencies };
        delete updated[val];
        setSkillProficiencies(updated);
      }
    } else {
      setSkills([...skills, val]);
      setSkillProficiencies({ ...skillProficiencies, [val]: 'Beginner' });
    }
  };

  const setProficiency = (skillName, level) => {
    setSkillProficiencies({
      ...skillProficiencies,
      [skillName]: level
    });
  };

  const togglePreferredCareer = (careerId) => {
    if (preferredCareers.includes(careerId)) {
      if (preferredCareers.length > 1) setPreferredCareers(preferredCareers.filter(c => c !== careerId));
    } else {
      if (preferredCareers.length < 3) {
        setPreferredCareers([...preferredCareers, careerId]);
      } else {
        setPreferredCareers([...preferredCareers.slice(1), careerId]);
      }
    }
  };

  const handleLoadDemo = (demo) => {
    setName(demo.name);
    setDegree(demo.degree);
    setBranch(demo.branch);
    setYearOfStudy(demo.yearOfStudy);
    setInterests(demo.interests);
    setSkills(demo.skills);
    setSkillProficiencies(demo.skillProficiencies || {});
    setPreferredCareers(demo.preferredCareers || ['software-developer']);
    setAvailableTimePerDay(demo.availableTimePerDay || 30);
    setIsCustomTime(false);
    setLearningStyle(demo.learningStyle);
    setWorkStyle(demo.workStyle || 'Technical & Deep Coding');
    setShortTermGoal(demo.shortTermGoal);
    setLongTermGoal(demo.longTermGoal);
    setFormError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setFormError('Please enter your full name.');
      window.scrollTo({ top: 150, behavior: 'smooth' });
      return;
    }

    const finalTime = isCustomTime ? Math.max(10, parseInt(customTime) || 30) : availableTimePerDay;

    const profileData = {
      name: name.trim(),
      degree,
      branch,
      yearOfStudy,
      educationLevel: yearOfStudy,
      interests,
      skills,
      skillProficiencies,
      preferredCareers,
      availableTimePerDay: finalTime,
      learningStyle,
      workStyle,
      shortTermGoal: shortTermGoal.trim(),
      longTermGoal: longTermGoal.trim(),
      careerGoal: longTermGoal.trim(),
      updatedAt: new Date().toISOString()
    };

    onSaveProfile(profileData);
  };

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 4rem', maxWidth: '880px' }}>
      {/* Page Header */}
      <div className="section-header center">
        <div className="section-tag">
          <User size={14} />
          <span>Personalized Student Profile</span>
        </div>
        <h1 className="section-title">
          Tell Us About Your Academic Journey
        </h1>
        <p className="section-subtitle">
          Your profile directly customizes your career match rankings, daily study tasks, and course pacing recommendations. Edit anytime.
        </p>
      </div>

      {/* Quick Demo Preloaders */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
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
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--cyan-accent)', textTransform: 'uppercase' }}>
            ⚡ Fast 1-Click Persona Preloaders
          </span>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.2rem' }}>
            Testing for a college hackathon demo? Preload a realistic student profile instantly:
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {DEMO_PROFILES.map((dp) => (
            <button
              key={dp.name}
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => handleLoadDemo(dp)}
            >
              {dp.name} ({dp.branch.split(' ')[0]})
            </button>
          ))}
        </div>
      </div>

      {/* Form Error Banner */}
      {formError && (
        <div style={{
          background: 'rgba(239, 68, 68, 0.15)',
          border: '1px solid var(--danger)',
          padding: '1rem',
          borderRadius: 'var(--radius-md)',
          color: '#FCA5A5',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <AlertCircle size={20} />
          <span>{formError}</span>
        </div>
      )}

      {/* Main Profile Form */}
      <form onSubmit={handleSubmit} className="profile-form-grid" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Section 1: Basic Identity & College Information */}
        <div className="card" style={{ border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--cyan-accent-soft)', color: 'var(--cyan-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <GraduationCap size={18} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>1. College & Academic Information</h2>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Used to assess technical eligibility and academic affinity.</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                Full Name *
              </label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Priya Sharma"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-main)',
                  fontSize: '0.95rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                Degree Program *
              </label>
              <select 
                value={degree} 
                onChange={(e) => setDegree(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-main)',
                  fontSize: '0.95rem'
                }}
              >
                {DEGREE_OPTIONS.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                Major / Academic Branch *
              </label>
              <select 
                value={branch} 
                onChange={(e) => setBranch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-main)',
                  fontSize: '0.95rem'
                }}
              >
                {BRANCH_OPTIONS.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                Current Year of Study *
              </label>
              <select 
                value={yearOfStudy} 
                onChange={(e) => setYearOfStudy(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-main)',
                  fontSize: '0.95rem'
                }}
              >
                {YEAR_OPTIONS.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: Career Interests & Target Paths */}
        <div className="card" style={{ border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--yellow-accent-soft)', color: 'var(--yellow-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Compass size={18} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>2. Career Interests & Preferred Trajectories</h2>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Select topics you find engaging and up to 3 preferred career paths.</p>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              Career Interests (Select all that excite you):
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {INTEREST_OPTIONS.map(interest => {
                const isSelected = interests.includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    style={{
                      padding: '0.5rem 0.9rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      background: isSelected ? 'var(--cyan-accent)' : 'var(--bg-main)',
                      color: isSelected ? '#0B1B30' : 'var(--text-main)',
                      border: isSelected ? '1px solid var(--cyan-accent)' : '1px solid var(--border-color)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {isSelected && <Check size={12} style={{ display: 'inline', marginRight: '4px' }} />}
                    {interest}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              Preferred Target Careers (Choose up to 3 priority tracks):
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.6rem' }}>
              {CAREERS.map(c => {
                const isSelected = preferredCareers.includes(c.id);
                return (
                  <div
                    key={c.id}
                    onClick={() => togglePreferredCareer(c.id)}
                    style={{
                      padding: '0.7rem 0.9rem',
                      borderRadius: 'var(--radius-sm)',
                      background: isSelected ? 'rgba(22, 196, 217, 0.12)' : 'var(--bg-main)',
                      border: isSelected ? '1px solid var(--cyan-accent)' : '1px solid var(--border-color)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: isSelected ? 'var(--cyan-accent)' : 'var(--text-main)' }}>
                      {c.title}
                    </span>
                    {isSelected ? <CheckCircle size={15} color="var(--cyan-accent)" /> : <div style={{ width: 14, height: 14, borderRadius: '50%', border: '1px solid var(--border-color)' }} />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section 3: Existing Skills & Proficiency Levels */}
        <div className="card" style={{ border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--cyan-accent-soft)', color: 'var(--cyan-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Layers size={18} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>3. Existing Skills & Proficiency Ratings</h2>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Specify what you already know and designate your proficiency: Beginner, Intermediate, or Advanced.</p>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              Select Skills You Currently Possess:
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {SKILL_OPTIONS.map(skill => {
                const isSelected = skills.includes(skill);
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill)}
                    style={{
                      padding: '0.45rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      background: isSelected ? 'var(--bg-elevated)' : 'var(--bg-main)',
                      color: isSelected ? 'var(--cyan-accent)' : 'var(--text-muted)',
                      border: isSelected ? '1px solid var(--cyan-accent)' : '1px solid var(--border-color)',
                      cursor: 'pointer'
                    }}
                  >
                    {skill} {isSelected ? '✓' : '+'}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Proficiency Selectors for Chosen Skills */}
          {skills.length > 0 && (
            <div style={{
              background: 'var(--bg-main)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                Configure Proficiency for Selected Skills:
              </span>
              {skills.map(skill => {
                const level = skillProficiencies[skill] || 'Beginner';
                return (
                  <div key={skill} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      {skill}
                    </span>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      {['Beginner', 'Intermediate', 'Advanced'].map(prof => {
                        const active = level === prof;
                        return (
                          <button
                            key={prof}
                            type="button"
                            onClick={() => setProficiency(skill, prof)}
                            style={{
                              padding: '0.25rem 0.65rem',
                              borderRadius: '4px',
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              background: active ? (prof === 'Advanced' ? 'var(--success)' : prof === 'Intermediate' ? 'var(--yellow-accent)' : 'var(--cyan-accent)') : 'rgba(255,255,255,0.05)',
                              color: active ? '#0B1B30' : 'var(--text-muted)',
                              border: 'none',
                              cursor: 'pointer'
                            }}
                          >
                            {prof}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Section 4: Daily Study Time & Learning Style */}
        <div className="card" style={{ border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--yellow-accent-soft)', color: 'var(--yellow-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Clock size={18} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>4. Daily Study Availability & Learning Style</h2>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>How much time can you realistically commit daily without burning out?</p>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              Available Study Time Per Day:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
              {TIME_OPTIONS.map(opt => {
                const isSelected = opt.value === 90 ? isCustomTime : (!isCustomTime && availableTimePerDay === opt.value);
                return (
                  <div
                    key={opt.label}
                    onClick={() => {
                      if (opt.value === 90) {
                        setIsCustomTime(true);
                      } else {
                        setIsCustomTime(false);
                        setAvailableTimePerDay(opt.value);
                      }
                    }}
                    style={{
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: isSelected ? 'rgba(22, 196, 217, 0.12)' : 'var(--bg-main)',
                      border: isSelected ? '1px solid var(--cyan-accent)' : '1px solid var(--border-color)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: isSelected ? 'var(--cyan-accent)' : 'var(--text-main)' }}>
                      {opt.label}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      {opt.desc}
                    </div>
                  </div>
                );
              })}
            </div>

            {isCustomTime && (
              <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <input
                  type="number"
                  min="10"
                  max="360"
                  value={customTime}
                  onChange={(e) => setCustomTime(e.target.value)}
                  style={{
                    width: '120px',
                    padding: '0.6rem 0.8rem',
                    background: 'var(--bg-main)',
                    border: '1px solid var(--cyan-accent)',
                    color: 'var(--text-main)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.95rem'
                  }}
                />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>minutes per day target</span>
              </div>
            )}
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              Preferred Learning Style:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
              {LEARNING_STYLES.map(style => {
                const isSelected = learningStyle === style.id;
                return (
                  <div
                    key={style.id}
                    onClick={() => setLearningStyle(style.id)}
                    style={{
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: isSelected ? 'rgba(255, 196, 0, 0.12)' : 'var(--bg-main)',
                      border: isSelected ? '1px solid var(--yellow-accent)' : '1px solid var(--border-color)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: isSelected ? 'var(--yellow-accent)' : 'var(--text-main)' }}>
                      {style.label}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      {style.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              Preferred Work Style:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
              {WORK_STYLE_OPTIONS.map(style => {
                const isSelected = workStyle === style.id;
                return (
                  <div
                    key={style.id}
                    onClick={() => setWorkStyle(style.id)}
                    style={{
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: isSelected ? 'rgba(22, 196, 217, 0.12)' : 'var(--bg-main)',
                      border: isSelected ? '1px solid var(--cyan-accent)' : '1px solid var(--border-color)',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: isSelected ? 'var(--cyan-accent)' : 'var(--text-main)' }}>
                      {style.label}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      {style.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section 5: Short-Term and Long-Term Goals */}
        <div className="card" style={{ border: '1px solid var(--border-color)', background: 'var(--bg-card)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--cyan-accent-soft)', color: 'var(--cyan-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Target size={18} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>5. Short-Term & Long-Term Ambitions</h2>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Clear milestones keep your daily consistency focused.</p>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
              Short-Term Goal (Next 1-3 Months) *
            </label>
            <input 
              type="text"
              value={shortTermGoal}
              onChange={(e) => setShortTermGoal(e.target.value)}
              placeholder="e.g. Master C programming fundamentals and build first calculator"
              required
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                marginBottom: '0.5rem'
              }}
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {SHORT_TERM_SUGGESTIONS.map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setShortTermGoal(s)}
                  style={{
                    padding: '0.25rem 0.55rem',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border-color)',
                    cursor: 'pointer'
                  }}
                >
                  + {s.slice(0, 38)}...
                </button>
              ))}
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
              Long-Term Career Vision (Next 2-4 Years) *
            </label>
            <input 
              type="text"
              value={longTermGoal}
              onChange={(e) => setLongTermGoal(e.target.value)}
              placeholder="e.g. Software Development Engineer at top tech enterprise"
              required
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                marginBottom: '0.5rem'
              }}
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {LONG_TERM_SUGGESTIONS.map(l => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLongTermGoal(l)}
                  style={{
                    padding: '0.25rem 0.55rem',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border-color)',
                    cursor: 'pointer'
                  }}
                >
                  + {l.slice(0, 38)}...
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Form Action Controls */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '0.5rem' }}>
          <button type="submit" className="btn btn-primary btn-lg">
            <Sparkles size={18} />
            Save Profile & Compute Career Matches
            <ArrowRight size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}
