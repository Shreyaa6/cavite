import React from 'react'
import {
  CheckCircle2,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Globe,
  Briefcase,
  GraduationCap,
  Code2,
  SlidersHorizontal,
  ChevronRight,
} from 'lucide-react'
import type { ResumeData } from '../types/resume'

const GithubIcon: React.FC<{ size?: number; className?: string }> = ({ size = 11, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon: React.FC<{ size?: number; className?: string }> = ({ size = 11, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

interface FullResumeCardProps {
  resume: ResumeData
  onCurateClick: () => void
  activePersonaIndex?: number
  onSelectPersona?: (index: number) => void
  personas?: ResumeData[]
}

export const FullResumeCard: React.FC<FullResumeCardProps> = ({
  resume,
  onCurateClick,
  activePersonaIndex = 0,
  onSelectPersona,
  personas = [],
}) => {
  return (
    <div className="full-resume-sheet">
      {/* Top Header / Verified Status Ribbon */}
      <div className="resume-sheet-header">
        <div className="status-badge-row">
          <div className="full-status-pill">
            <CheckCircle2 size={12} className="check-emerald" />
            <span>100% CURATED · ATS VERIFIED</span>
          </div>
          <div className="full-ats-score-display">
            <span className="ats-number">{resume.atsScore.overall}</span>
            <span className="ats-denom">/100 ATS</span>
          </div>
        </div>

        {/* Persona quick switch buttons */}
        {personas.length > 0 && onSelectPersona && (
          <div className="persona-quick-tabs">
            <span className="persona-quick-label">PRESET:</span>
            {personas.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                className={`persona-tab-btn ${activePersonaIndex === idx ? 'tab-active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  onSelectPersona(idx)
                }}
                title={p.targetTitle}
              >
                0{idx + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Candidate Identity Header */}
      <div className="resume-identity-hero">
        <div className="candidate-name-row">
          <div className="candidate-name-group">
            <div className="name-with-verified">
              <h2 className="full-candidate-name">{resume.fullName}</h2>
              <span className="verified-check-bubble">✓</span>
            </div>
            <div className="full-candidate-role">{resume.targetTitle}</div>
          </div>
          <button
            type="button"
            className="curate-sheet-btn"
            onClick={onCurateClick}
            title="Edit in CV Studio"
          >
            <SlidersHorizontal size={13} />
            <span>Curate</span>
          </button>
        </div>

        {/* Contact Strip (Light grey typography with bullet separators) */}
        <div className="resume-contact-strip">
          <span className="contact-item">
            <Mail size={11} className="contact-icon" />
            {resume.email}
          </span>
          <span className="contact-sep">•</span>
          <span className="contact-item">
            <Phone size={11} className="contact-icon" />
            {resume.phone}
          </span>
          <span className="contact-sep">•</span>
          <span className="contact-item">
            <MapPin size={11} className="contact-icon" />
            {resume.location}
          </span>
          <span className="contact-sep">•</span>
          <span className="contact-item">
            <Globe size={11} className="contact-icon" />
            {resume.website}
          </span>
          <span className="contact-sep">•</span>
          <span className="contact-item">
            <GithubIcon size={11} className="contact-icon" />
            {resume.github}
          </span>
          <span className="contact-sep">•</span>
          <span className="contact-item">
            <LinkedinIcon size={11} className="contact-icon" />
            {resume.linkedin}
          </span>
        </div>

        {/* 3-Column Executive Metrics Cards (Matching reference screenshot) */}
        <div className="metrics-triad-grid">
          <div className="triad-card">
            <div className="triad-value">-42%</div>
            <div className="triad-label">Inference Latency</div>
          </div>
          <div className="triad-card">
            <div className="triad-value">1.8M</div>
            <div className="triad-label">Daily Active Users</div>
          </div>
          <div className="triad-card">
            <div className="triad-value">$4.2M</div>
            <div className="triad-label">Annual Cloud Savings</div>
          </div>
        </div>
      </div>

      {/* Section 01: Executive Summary */}
      <section className="resume-section">
        <div className="section-title-bar">
          <span className="section-tag-muted">// EXECUTIVE SUMMARY</span>
          <span className="section-divider-line"></span>
        </div>
        <p className="resume-summary-text">{resume.summary}</p>
      </section>

      {/* Section 02: Work Experience */}
      <section className="resume-section">
        <div className="section-title-bar">
          <div className="title-with-icon">
            <Briefcase size={12} className="section-icon" />
            <span className="section-tag-muted">// FEATURED EXPERIENCE</span>
          </div>
          <span className="section-divider-line"></span>
        </div>

        <div className="experiences-stack">
          {resume.experiences.map((exp) => (
            <div key={exp.id} className="experience-item-card">
              <div className="exp-top-row">
                <div className="exp-heading-group">
                  <h4 className="exp-role-title-bold">{exp.role}</h4>
                  <div className="exp-company-sub">
                    {exp.company} <span className="meta-sep">·</span> {exp.location}
                  </div>
                </div>
                <div className="exp-meta-group">
                  <span className="exp-period">{exp.period}</span>
                </div>
              </div>

              <ul className="exp-highlights-list">
                {exp.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="exp-highlight-item">
                    <span className="bullet-indicator">•</span>
                    <span className="highlight-text">{h}</span>
                  </li>
                ))}
              </ul>

              {exp.metrics && exp.metrics.length > 0 && (
                <div className="exp-metrics-pills">
                  {exp.metrics.map((m, mIdx) => (
                    <span key={mIdx} className="exp-tag-pill">
                      {m}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section 03: Skills & Technical Mastery */}
      <section className="resume-section">
        <div className="section-title-bar">
          <div className="title-with-icon">
            <Code2 size={12} className="section-icon" />
            <span className="section-tag-muted">// CORE SKILLS & TECH STACK</span>
          </div>
          <span className="section-divider-line"></span>
        </div>

        <div className="skills-stack">
          {resume.skills.map((skillGroup, sIdx) => (
            <div key={sIdx} className="skill-category-row">
              <span className="skill-cat-title">{skillGroup.category}</span>
              <div className="skill-tags-group">
                {skillGroup.items.map((item, iIdx) => (
                  <span key={iIdx} className="skill-item-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 04: Education & Honors */}
      <section className="resume-section">
        <div className="section-title-bar">
          <div className="title-with-icon">
            <GraduationCap size={12} className="section-icon" />
            <span className="section-tag-muted">// EDUCATION</span>
          </div>
          <span className="section-divider-line"></span>
        </div>

        <div className="education-stack">
          {resume.education.map((edu) => (
            <div key={edu.id} className="education-item-row">
              <div className="edu-main-info">
                <h5 className="edu-degree-title">{edu.degree}</h5>
                <div className="edu-school-name">{edu.school}</div>
                {edu.honors && <div className="edu-honors-text">{edu.honors}</div>}
              </div>
              <div className="edu-meta-right">
                <span className="edu-year">{edu.year}</span>
                {edu.location && <span className="edu-location">{edu.location}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Curate Bar */}
      <div className="resume-sheet-footer" onClick={onCurateClick}>
        <div className="footer-left">
          <Sparkles size={13} className="sparkle-gold" />
          <span>Curated with Cavite Studio · Greenhouse & Lever 99/100 ATS</span>
        </div>
        <button type="button" className="footer-edit-link">
          <span>Open Full CV Studio</span>
          <ChevronRight size={13} />
        </button>
      </div>
    </div>
  )
}
