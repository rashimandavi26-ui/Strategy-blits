import React, { useState } from 'react';
import { 
  Compass, 
  Sparkles, 
  LayoutDashboard, 
  Briefcase, 
  Map, 
  FolderGit2, 
  BookOpen,
  Calendar,
  Code2,
  Menu, 
  X,
  UserCheck,
  User
} from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  onQuickDemo, 
  hasProfile, 
  studentName 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        {/* Brand Wordmark */}
        <div className="logo-brand" onClick={() => handleNavClick('home')}>
          <div className="logo-icon-wrap">
            <Compass size={22} />
          </div>
          <div className="logo-text-title">
            <span className="logo-main-word">AI Career Guide</span>
            <span className="logo-sub-tag">College Career & Consistency Platform</span>
          </div>
        </div>

        {/* Desktop Navigation Links (Section 14: Exact 8 Items) */}
        <nav className="nav-links">
          <button 
            className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>

          <button 
            className={`nav-item ${activeTab === 'recommendations' ? 'active' : ''}`}
            onClick={() => handleNavClick('recommendations')}
          >
            <Briefcase size={15} />
            Explore Careers
          </button>

          <button 
            className={`nav-item ${activeTab === 'learning-hub' ? 'active' : ''}`}
            onClick={() => handleNavClick('learning-hub')}
          >
            <BookOpen size={15} />
            Learning Hub
          </button>

          <button 
            className={`nav-item ${activeTab === 'roadmap' ? 'active' : ''}`}
            onClick={() => handleNavClick('roadmap')}
          >
            <Map size={15} />
            My Roadmap
          </button>

          <button 
            className={`nav-item ${activeTab === 'daily-planner' ? 'active' : ''}`}
            onClick={() => handleNavClick('daily-planner')}
          >
            <Calendar size={15} />
            Daily Planner
          </button>

          <button 
            className={`nav-item ${activeTab === 'practice' ? 'active' : ''}`}
            onClick={() => handleNavClick('practice')}
          >
            <Code2 size={15} />
            Practice
          </button>

          <button 
            className={`nav-item ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => handleNavClick('projects')}
          >
            <FolderGit2 size={15} />
            Projects
          </button>

          <button 
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleNavClick('dashboard')}
          >
            <LayoutDashboard size={15} />
            Dashboard
          </button>
        </nav>

        {/* Action Buttons: Profile pill & Quick Demo */}
        <div className="nav-actions">
          <button 
            className={`btn btn-sm ${activeTab === 'profile' ? 'btn-secondary' : 'btn-outline'}`}
            onClick={() => handleNavClick('profile')}
            title="Edit student profile"
          >
            <User size={14} />
            {studentName ? studentName.split(' ')[0] : 'Profile'}
          </button>

          <button 
            className="btn btn-sm btn-yellow"
            onClick={onQuickDemo}
            title="Load sample student profile for instant hackathon demonstration"
          >
            <UserCheck size={14} />
            Quick Demo
          </button>

          <button 
            className="btn btn-ghost btn-sm mobile-menu-btn"
            style={{ display: 'none' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--bg-card)',
          borderBottom: '1px solid var(--border-color)',
          padding: '1rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          <button className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleNavClick('home')}>Home</button>
          <button className={`nav-item ${activeTab === 'recommendations' ? 'active' : ''}`} onClick={() => handleNavClick('recommendations')}>Explore Careers</button>
          <button className={`nav-item ${activeTab === 'learning-hub' ? 'active' : ''}`} onClick={() => handleNavClick('learning-hub')}>Learning Hub</button>
          <button className={`nav-item ${activeTab === 'roadmap' ? 'active' : ''}`} onClick={() => handleNavClick('roadmap')}>My Roadmap</button>
          <button className={`nav-item ${activeTab === 'daily-planner' ? 'active' : ''}`} onClick={() => handleNavClick('daily-planner')}>Daily Planner</button>
          <button className={`nav-item ${activeTab === 'practice' ? 'active' : ''}`} onClick={() => handleNavClick('practice')}>Practice</button>
          <button className={`nav-item ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => handleNavClick('projects')}>Projects</button>
          <button className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => handleNavClick('dashboard')}>Dashboard</button>
          <button className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => handleNavClick('profile')}>Student Profile</button>
        </div>
      )}
    </header>
  );
}
