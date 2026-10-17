import React from 'react';

export default function ProgressBar({ completedCount, totalCount, label = 'Overall Roadmap Progress', showFraction = true, height = 12 }) {
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div style={{ width: '100%' }}>
      <div className="progress-header-row">
        <div>
          <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>{label}</span>
          {showFraction && (
            <span className="progress-title-sub" style={{ marginLeft: '0.6rem' }}>
              ({completedCount} of {totalCount} tasks completed)
            </span>
          )}
        </div>
        <span className="progress-number-highlight">
          {percentage}%
        </span>
      </div>

      <div className="progress-bar-track" style={{ height: `${height}px` }}>
        <div 
          className="progress-bar-fill" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
