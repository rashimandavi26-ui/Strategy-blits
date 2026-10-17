import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Recommendations from './pages/Recommendations';
import LearningHub from './pages/LearningHub';
import Roadmap from './pages/Roadmap';
import DailyPlanner from './pages/DailyPlanner';
import Practice from './pages/Practice';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import Opportunities from './pages/Opportunities';

import { calculateCareerMatches } from './utils/careerMatcher';
import { 
  getStoredProfile, 
  saveStoredProfile, 
  getSelectedCareerId, 
  saveSelectedCareerId, 
  getCompletedTasks, 
  toggleTask, 
  getCompletedModules,
  toggleModule,
  getActiveSkills,
  toggleActiveSkill,
  getKnownSkills,
  toggleKnownSkill,
  getSkillTargetDates,
  saveSkillTargetDate,
  getPausedSkills,
  togglePausedSkill,
  getQuizResults,
  markCelebration,
  clearAllStorage,
  DEMO_PROFILES 
} from './utils/storage';
import { canCompleteModule } from './utils/progress';
import { QUIZZES } from './data/practiceData';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [profile, setProfile] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [selectedCareerId, setSelectedCareerId] = useState('software-developer');
  const [completedTaskIds, setCompletedTaskIds] = useState([]);
  const [completedModules, setCompletedModules] = useState([]);
  const [activeSkills, setActiveSkills] = useState([]);
  const [pausedSkills, setPausedSkills] = useState([]);
  const [knownSkills, setKnownSkills] = useState([]);
  const [skillTargetDates, setSkillTargetDates] = useState({});
  const [toastMessage, setToastMessage] = useState(null);
  const [activeRoadmapSkillId, setActiveRoadmapSkillId] = useState('c-programming');

  // Initialize from localStorage on mount
  useEffect(() => {
    const savedProfile = getStoredProfile();
    const savedTasks = getCompletedTasks();
    const savedModules = getCompletedModules();
    const savedCareer = getSelectedCareerId();
    const savedActiveSkills = getActiveSkills();
    const savedPaused = getPausedSkills();
    const savedKnown = getKnownSkills();
    const savedDates = getSkillTargetDates();

    if (savedProfile) {
      setProfile(savedProfile);
      const matches = calculateCareerMatches(savedProfile);
      setRecommendations(matches);

      if (savedCareer) {
        setSelectedCareerId(savedCareer);
      } else if (matches.length > 0) {
        setSelectedCareerId(matches[0].id);
        saveSelectedCareerId(matches[0].id);
      }
    }

    if (savedTasks) setCompletedTaskIds(savedTasks);
    if (savedModules) setCompletedModules(savedModules);
    if (Array.isArray(savedActiveSkills)) setActiveSkills(savedActiveSkills);
    if (Array.isArray(savedPaused)) setPausedSkills(savedPaused);
    if (savedKnown) setKnownSkills(savedKnown);
    if (savedDates) setSkillTargetDates(savedDates);
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Handler: Save Profile & Compute Recommendations
  const handleSaveProfile = (newProfile) => {
    setProfile(newProfile);
    saveStoredProfile(newProfile);

    const matches = calculateCareerMatches(newProfile);
    setRecommendations(matches);

    const softwarePref = newProfile.preferredCareers?.includes('software-developer');
    const existingCareer = getSelectedCareerId();
    if (!existingCareer) {
      const fallbackId = softwarePref
        ? 'software-developer'
        : (matches[0]?.id || 'software-developer');
      setSelectedCareerId(fallbackId);
      saveSelectedCareerId(fallbackId);
    }

    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}

    triggerToast(`Career matches generated for ${newProfile.name}!`);
    setActiveTab('recommendations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler: Select a Target Career
  const handleSelectCareer = (careerId) => {
    setSelectedCareerId(careerId);
    saveSelectedCareerId(careerId);
    
    try {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.7 }
      });
    } catch {}

    triggerToast('Target career updated! Opening personalized roadmap.');
    setActiveTab('roadmap');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler: Toggle Task in Career Roadmap
  const handleToggleTask = (taskId) => {
    const updated = toggleTask(taskId);
    setCompletedTaskIds(updated);
  };

  // Handler: Toggle Module in Skill Roadmap (quiz required when a quiz exists)
  const handleToggleModule = (moduleId) => {
    const alreadyDone = completedModules.includes(moduleId);
    if (!alreadyDone && QUIZZES[moduleId] && !canCompleteModule(moduleId, getQuizResults())) {
      triggerToast('Complete the module quiz at 70% or higher before marking this module complete.');
      return false;
    }
    const updated = toggleModule(moduleId);
    setCompletedModules(updated);
    if (!alreadyDone) {
      const first = markCelebration('first-module');
      if (first.shown) triggerToast('First module complete — nice start. Keep the streak gentle and consistent.');
    }
    return true;
  };

  const handlePauseSkill = (skillId) => {
    const updated = togglePausedSkill(skillId);
    setPausedSkills(updated);
    triggerToast(updated.includes(skillId) ? 'Learning path paused. Progress is saved.' : 'Learning path resumed.');
  };

  // Handler: Toggle Active Skill in Learning Hub
  const handleToggleActiveSkill = (skillId) => {
    const updated = toggleActiveSkill(skillId);
    setActiveSkills(updated);
  };

  // Handler: Toggle Known Skill
  const handleToggleKnownSkill = (skillId) => {
    const updated = toggleKnownSkill(skillId);
    setKnownSkills(updated);
  };

  // Handler: Save Target Date
  const handleSetTargetDate = (skillId, dateStr) => {
    const updated = saveSkillTargetDate(skillId, dateStr);
    setSkillTargetDates({ ...updated });
    triggerToast('Target completion date saved!');
  };

  // Handler: Open Skill Roadmap directly from Learning Hub
  const handleOpenSkillRoadmap = (skillId) => {
    setActiveRoadmapSkillId(skillId);
    setActiveTab('roadmap');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler: Quick Demo Profile (Alex Chen - 2-minute Hackathon Pitch flow)
  const handleQuickDemo = () => {
    const demo = DEMO_PROFILES[0]; // Alex Chen - AI & Data
    setProfile(demo);
    saveStoredProfile(demo);

    const matches = calculateCareerMatches(demo);
    setRecommendations(matches);
    const topCareerId = matches.length > 0 ? matches[0].id : 'software-developer';
    setSelectedCareerId(topCareerId);
    saveSelectedCareerId(topCareerId);

    // Pre-populate completed modules so judges see calculated progress bars
    const demoModules = ['c-mod-1', 'c-mod-2', 'html-mod-1'];
    setCompletedModules(demoModules);
    localStorage.setItem('ai_career_guide_completed_modules', JSON.stringify(demoModules));

    const demoTasks = ['sd-101', 'sd-102'];
    setCompletedTaskIds(demoTasks);
    localStorage.setItem('ai_career_guide_completed_tasks', JSON.stringify(demoTasks));

    try {
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {}

    triggerToast('Loaded Alex Chen demo profile (CS & AI focus)!');
    setActiveTab('recommendations');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler: Reset All Data
  const handleResetData = () => {
    if (window.confirm('Reset all saved profiles, learning roadmaps, and consistency streaks?')) {
      clearAllStorage();
      setProfile(null);
      setRecommendations([]);
      setSelectedCareerId('software-developer');
      setCompletedTaskIds([]);
      setCompletedModules([]);
      setActiveSkills([]);
      setPausedSkills([]);
      setKnownSkills([]);
      setSkillTargetDates({});
      setActiveTab('home');
      triggerToast('All local storage data cleared.');
    }
  };

  return (
    <div className="app-container">
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: '#142A43',
          border: '1px solid var(--cyan-accent)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
          padding: '0.85rem 1.4rem',
          borderRadius: 'var(--radius-md)',
          color: 'var(--text-main)',
          fontSize: '0.9rem',
          fontWeight: 600,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <span style={{ color: 'var(--cyan-accent)' }}>●</span>
          {toastMessage}
        </div>
      )}

      {/* Top Navbar */}
      <Navbar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onQuickDemo={handleQuickDemo}
        hasProfile={!!profile}
        studentName={profile ? profile.name : ''}
      />

      {/* Main Page Content */}
      <main className="main-content">
        {activeTab === 'home' && (
          <Home 
            onStartProfile={() => setActiveTab('profile')}
            onExploreCareers={() => {
              if (profile && recommendations.length > 0) {
                setActiveTab('recommendations');
              } else {
                handleQuickDemo();
              }
            }}
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            hasProfile={!!profile}
          />
        )}

        {activeTab === 'profile' && (
          <Profile 
            initialProfile={profile}
            onSaveProfile={handleSaveProfile}
          />
        )}

        {activeTab === 'recommendations' && (
          <Recommendations 
            profile={profile}
            recommendations={recommendations}
            selectedCareerId={selectedCareerId}
            onSelectCareer={handleSelectCareer}
            onEditProfile={() => setActiveTab('profile')}
          />
        )}

        {activeTab === 'learning-hub' && (
          <LearningHub 
            activeSkills={activeSkills}
            pausedSkills={pausedSkills}
            onToggleActiveSkill={handleToggleActiveSkill}
            onPauseSkill={handlePauseSkill}
            knownSkills={knownSkills}
            onToggleKnownSkill={handleToggleKnownSkill}
            completedModules={completedModules}
            skillTargetDates={skillTargetDates}
            onSetTargetDate={handleSetTargetDate}
            onOpenSkillRoadmap={handleOpenSkillRoadmap}
            onOpenPractice={() => {
              setActiveTab('practice');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            profile={profile}
            selectedCareerId={selectedCareerId}
          />
        )}

        {activeTab === 'roadmap' && (
          <Roadmap 
            selectedCareerId={selectedCareerId}
            onSelectCareer={(id) => {
              setSelectedCareerId(id);
              saveSelectedCareerId(id);
            }}
            completedTaskIds={completedTaskIds}
            onToggleTask={handleToggleTask}
            completedModules={completedModules}
            onToggleModule={handleToggleModule}
            onGoToProjects={() => setActiveTab('projects')}
            onGoToPractice={() => setActiveTab('practice')}
            defaultSkillId={activeRoadmapSkillId}
            profile={profile}
            onToast={triggerToast}
          />
        )}

        {activeTab === 'daily-planner' && (
          <DailyPlanner 
            profile={profile}
            selectedCareerId={selectedCareerId}
            activeSkills={activeSkills.filter((id) => !pausedSkills.includes(id))}
            completedModules={completedModules}
            completedTaskIds={completedTaskIds}
          />
        )}

        {activeTab === 'practice' && (
          <Practice />
        )}

        {activeTab === 'projects' && (
          <Projects 
            selectedCareerId={selectedCareerId}
            onSelectCareer={(id) => {
              setSelectedCareerId(id);
              saveSelectedCareerId(id);
            }}
            onGoToRoadmap={() => setActiveTab('roadmap')}
          />
        )}

        {activeTab === 'dashboard' && (
          <Dashboard 
            profile={profile}
            recommendations={recommendations}
            selectedCareerId={selectedCareerId}
            completedTaskIds={completedTaskIds}
            completedModules={completedModules}
            activeSkills={activeSkills}
            onToggleTask={handleToggleTask}
            onToggleModule={handleToggleModule}
            onSelectCareer={(id) => {
              setSelectedCareerId(id);
              saveSelectedCareerId(id);
            }}
            onEditProfile={() => setActiveTab('profile')}
            onExploreCareers={() => setActiveTab('recommendations')}
            onGoToRoadmap={() => setActiveTab('roadmap')}
            onGoToProjects={() => setActiveTab('projects')}
            onGoToLearningHub={() => setActiveTab('learning-hub')}
            onGoToDailyPlanner={() => setActiveTab('daily-planner')}
            onGoToPractice={() => setActiveTab('practice')}
          />
        )}

        {activeTab === 'opportunities' && (
          <Opportunities />
        )}
      </main>

      {/* Footer */}
      <Footer 
        onResetData={handleResetData}
        onGoHome={() => setActiveTab('home')}
      />
    </div>
  );
}
