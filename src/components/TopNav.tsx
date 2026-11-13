import React from 'react'
import { Sparkles } from 'lucide-react'

interface TopNavProps {
  onToggleMenu: () => void
  onCurateClick: () => void
  viewMode: 'split' | 'empty' | 'full'
  onSetViewMode: (mode: 'split' | 'empty' | 'full') => void
}

export const TopNav: React.FC<TopNavProps> = ({
  onToggleMenu,
  onCurateClick,
  viewMode,
  onSetViewMode,
}) => {
  return (
    <header className="site-top-nav">
      {/* Brand Monogram & Name */}
      <div className="brand-group" onClick={() => onSetViewMode('split')} role="button" tabIndex={0}>
        {/* Silhouette Logo matching the reference image's avatar/emblem */}
        <div className="brand-logo-silhouette">
          <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="7" r="5" fill="#18181b" />
            <path
              d="M3 25C3 19.4772 7.47715 15 13 15C18.5228 15 23 19.4772 23 25"
              stroke="#18181b"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="brand-text-block">
          <span className="brand-name">CAVITE</span>
          <span className="brand-tag">CV STUDIO</span>
        </div>
      </div>

      {/* Center Controls (Optional Mode Pills) */}
      <div className="nav-center-pills">
        <button
          type="button"
          className={`mode-pill ${viewMode === 'empty' ? 'mode-pill-active' : ''}`}
          onClick={() => onSetViewMode('empty')}
          title="Inspect Empty Resume"
        >
          Empty Template
        </button>
        <button
          type="button"
          className={`mode-pill ${viewMode === 'split' ? 'mode-pill-active' : ''}`}
          onClick={() => onSetViewMode('split')}
          title="50/50 Split View (Ditto)"
        >
          Ditto Split
        </button>
        <button
          type="button"
          className={`mode-pill ${viewMode === 'full' ? 'mode-pill-active' : ''}`}
          onClick={() => onSetViewMode('full')}
          title="Inspect Full Curated Resume"
        >
          Curated CV
        </button>
      </div>

      {/* Right Action & Hamburger Menu */}
      <div className="nav-right-actions">
        <button
          type="button"
          className="quick-curate-btn"
          onClick={onCurateClick}
        >
          <Sparkles size={13} />
          <span>Curate My CV</span>
        </button>

        {/* Minimalist Hamburger matching reference */}
        <button
          type="button"
          className="hamburger-menu-btn"
          onClick={onToggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          <span className="ham-line"></span>
          <span className="ham-line"></span>
          <span className="ham-line"></span>
        </button>
      </div>
    </header>
  )
}
