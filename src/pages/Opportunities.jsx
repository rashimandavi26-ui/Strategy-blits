import React, { useState } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  FolderGit2, 
  Award, 
  ExternalLink, 
  Info, 
  Search,
  CheckCircle2
} from 'lucide-react';
import { OPPORTUNITIES_DATA } from '../data/opportunities';

const ICON_MAP = {
  GraduationCap: GraduationCap,
  Briefcase: Briefcase,
  Trophy: Trophy,
  FolderGit2: FolderGit2,
  Award: Award
};

export default function Opportunities() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allItems = OPPORTUNITIES_DATA.categories.flatMap((cat) => 
    cat.items.map((item) => ({ ...item, categoryId: cat.id, categoryName: cat.name }))
  );

  const filteredItems = allItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.categoryId === activeCategory;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 4rem' }}>
      {/* Header */}
      <div className="section-header center">
        <div className="section-tag">
          <GraduationCap size={14} />
          <span>Curated Ecosystem</span>
        </div>
        <h1 className="section-title">
          Growth Opportunities & Reputable Platforms
        </h1>
        <p className="section-subtitle">
          Accelerate your trajectory with vetted learning resources, student hackathon leagues, coding interview kits, and portfolio hosting providers.
        </p>
      </div>

      {/* Prototype Compliance Disclaimer */}
      <div className="disclaimer-banner">
        <Info size={20} color="var(--cyan-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.2rem' }}>
            Transparency & Integrity Note
          </strong>
          <span>
            {OPPORTUNITIES_DATA.disclaimer}
          </span>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div className="opp-filter-tabs" style={{ marginBottom: 0 }}>
          <button 
            className={`opp-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Resources ({allItems.length})
          </button>

          {OPPORTUNITIES_DATA.categories.map((cat) => (
            <button
              key={cat.id}
              className={`opp-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search */}
        <div style={{ position: 'relative', minWidth: '240px' }}>
          <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            type="text"
            className="input-control"
            placeholder="Search platforms, tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '2.3rem', fontSize: '0.88rem' }}
          />
        </div>
      </div>

      {/* Render Opportunities Grid */}
      <div className="opp-items-grid">
        {filteredItems.map((item, idx) => (
          <div key={idx} className="opp-card card-hover">
            <div className="opp-card-head">
              <div>
                <span className="badge badge-subtle" style={{ fontSize: '0.72rem', marginBottom: '0.35rem' }}>
                  {item.categoryName}
                </span>
                <h3 className="opp-title">{item.title}</h3>
              </div>

              <span className="badge badge-cyan" style={{ fontSize: '0.72rem' }}>
                {item.cost}
              </span>
            </div>

            <p className="opp-desc">{item.description}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
              {item.tags.map((tag, tIdx) => (
                <span key={tIdx} className="badge badge-subtle" style={{ fontSize: '0.72rem' }}>
                  #{tag}
                </span>
              ))}
            </div>

            <a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              style={{ marginTop: 'auto', width: '100%' }}
            >
              <span>Visit Official Platform</span>
              <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
