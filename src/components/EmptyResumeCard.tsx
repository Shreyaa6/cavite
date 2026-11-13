import React from 'react'
import { AlertCircle, Plus, Mail, MapPin, Globe, ChevronRight } from 'lucide-react'
import { emptyResume } from '../data/resumes'

interface EmptyResumeCardProps {
  onCurateClick: () => void
}

export const EmptyResumeCard: React.FC<EmptyResumeCardProps> = ({ onCurateClick }) => {
  return (
    <div className="empty-resume-sheet" onClick={onCurateClick}>
      {/* Top Header Section of Empty Resume Sheet */}
      <div className="empty-paper-header">
        <div className="empty-status-pill">
          <AlertCircle size={11} />
          <span>EMPTY TEMPLATE · 0% CURATED</span>
        </div>
        <span className="empty-ats-hint">ATS Score: 34/100</span>
      </div>

      {/* Candidate Wireframe */}
      <div className="empty-candidate-wireframe">
        <div className="empty-avatar-circle">
          <Plus size={16} />
        </div>
        <div className="empty-identity-lines">
          <div className="empty-name-placeholder">{emptyResume.fullName}</div>
          <div className="empty-title-placeholder">{emptyResume.targetTitle}</div>
          <div className="empty-contacts-wireframe">
            <span className="empty-chip">
              <Mail size={10} /> your.name@domain.com
            </span>
            <span className="empty-chip">
              <MapPin size={10} /> City, Country · Open to Remote
            </span>
            <span className="empty-chip">
              <Globe size={10} /> portfolio.dev
            </span>
          </div>
        </div>
      </div>

      {/* Section 01: Summary */}
      <div className="empty-section">
        <div className="empty-section-tag">// 01 EXECUTIVE SUMMARY</div>
        <p className="empty-placeholder-summary">
          [ Click to curate: Craft a compelling 3-line executive narrative synthesizing your technical mastery, business impact, and leadership trajectory... ]
        </p>
        <div className="ghost-lines-row" aria-hidden="true">
          <div className="ghost-line ghost-full"></div>
          <div className="ghost-line ghost-80"></div>
        </div>
      </div>

      {/* Section 02: Work Experience */}
      <div className="empty-section">
        <div className="empty-section-tag">// 02 WORK EXPERIENCE</div>
        <div className="empty-exp-box">
          <div className="empty-exp-title">[ Senior / Lead Position Title ]</div>
          <div className="empty-exp-company">[ Target Company Name / Scale-up ]</div>
          <ul className="empty-bullets">
            <li>[ Uncurated bullet point: Add your key project leadership wins here ]</li>
            <li>[ Missing metrics: Quantify performance gains, latency reductions, or revenue impact ]</li>
          </ul>
        </div>
      </div>

      {/* Section 03: Skills */}
      <div className="empty-section">
        <div className="empty-section-tag">// 03 CORE SKILLS & TECH STACK</div>
        <div className="empty-skills-wireframe">
          <span className="empty-skill-chip">[ Core Language 1 ]</span>
          <span className="empty-skill-chip">[ Framework 2 ]</span>
          <span className="empty-skill-chip">[ Cloud Provider 3 ]</span>
          <span className="empty-skill-chip">[ Distributed Systems ]</span>
        </div>
      </div>

      {/* Bottom Curate Prompt Banner */}
      <div className="empty-curate-banner">
        <div className="banner-left">
          <div className="banner-title">Blank Page Syndrome?</div>
          <div className="banner-sub">Click anywhere to auto-curate with CAVITE</div>
        </div>
        <button type="button" className="banner-action-btn">
          <span>Curate Now</span>
          <ChevronRight size={13} />
        </button>
      </div>
    </div>
  )
}
