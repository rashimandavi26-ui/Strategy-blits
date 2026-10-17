import React from 'react';
import { Compass, Sparkles, Heart } from 'lucide-react';

export default function Footer({ onResetData, onGoHome }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem', cursor: 'pointer' }} onClick={onGoHome}>
            <Compass size={20} color="var(--cyan-accent)" />
            <strong style={{ color: 'var(--text-main)', fontSize: '1rem' }}>AI Career Guide</strong>
            <span className="badge badge-cyan" style={{ fontSize: '0.72rem' }}>Hackathon 2026</span>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
            Discover Your Potential. Build Your Future. Built for College Students navigating modern tech pathways.
          </p>
        </div>

        <div className="footer-note">
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            100% Client-Side • LocalStorage State • Privacy First
          </span>
          <button 
            className="btn btn-ghost btn-sm" 
            onClick={onResetData}
            style={{ fontSize: '0.78rem', color: '#F87171', textDecoration: 'underline' }}
            title="Wipe local saved profile and completed tasks"
          >
            Reset All Demo Data
          </button>
        </div>
      </div>
    </footer>
  );
}
