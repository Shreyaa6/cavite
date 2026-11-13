import React, { useState } from 'react'
import {
  X,
  Sparkles,
  Copy,
  Check,
  Printer,
  FileCheck,
  Sliders,
  RefreshCw,
} from 'lucide-react'
import type { ResumeData, ExperienceItem } from '../types/resume'
import { curatedPersonas, emptyResume } from '../data/resumes'

interface CVStudioModalProps {
  isOpen: boolean
  onClose: () => void
  currentResume: ResumeData
  onSaveResume: (resume: ResumeData) => void
}

export const CVStudioModal: React.FC<CVStudioModalProps> = ({
  isOpen,
  onClose,
  currentResume,
  onSaveResume,
}) => {
  const [activeTab, setActiveTab] = useState<'editor' | 'preview' | 'ats' | 'compare'>('editor')
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState<ResumeData>(currentResume)
  const [curatingField, setCuratingField] = useState<string | null>(null)

  if (!isOpen) return null

  const handleTextChange = (field: keyof ResumeData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleUpdateExperience = (
    id: string,
    field: keyof ExperienceItem,
    value: ExperienceItem[keyof ExperienceItem]
  ) => {
    setFormData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }))
  }

  const handleUpdateHighlight = (expId: string, index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp) => {
        if (exp.id !== expId) return exp
        const newHighlights = [...exp.highlights]
        newHighlights[index] = value
        return { ...exp, highlights: newHighlights }
      }),
    }))
  }

  const handleAICurateBullet = (expId: string, index: number) => {
    setCuratingField(`${expId}-${index}`)
    setTimeout(() => {
      const enhancedBullets = [
        'Spearheaded distributed microservices architecture serving 1.8M daily active users with 99.999% reliability and zero downtime.',
        'Pioneered AI-assisted inference engine slashing model evaluation latency by 42% and saving $4.2M in annual GPU cluster expenditures.',
        'Engineered responsive design system adopted by 16 product squads, accelerating feature delivery velocity by 34%.',
        'Restructured automated end-to-end CI/CD release pipeline, compressing production deployment cycles from 3 days to 14 minutes.',
      ]
      const chosen = enhancedBullets[Math.floor(Math.random() * enhancedBullets.length)]
      handleUpdateHighlight(expId, index, chosen)
      setCuratingField(null)
    }, 600)
  }

  const handlePrint = () => {
    window.print()
  }

  const handleCopyMarkdown = () => {
    const md = `# ${formData.fullName}
**${formData.targetTitle}**
${formData.email} | ${formData.phone} | ${formData.location} | ${formData.website}

## Executive Summary
${formData.summary}

## Work Experience
${formData.experiences
  .map(
    (exp) => `### ${exp.role} — ${exp.company} (${exp.period})
*Location: ${exp.location}*
${exp.highlights.map((h) => `- ${h}`).join('\n')}
`
  )
  .join('\n')}

## Education
${formData.education
  .map((edu) => `* **${edu.degree}**, ${edu.school} (${edu.year}) — *${edu.honors}*`)
  .join('\n')}

## Skills
${formData.skills.map((s) => `* **${s.category}:** ${s.items.join(', ')}`).join('\n')}
`
    navigator.clipboard.writeText(md)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSelectPreset = (preset: ResumeData) => {
    setFormData(preset)
    onSaveResume(preset)
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="cv-studio-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Top Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-badge">
              <Sparkles size={16} />
            </div>
            <div>
              <h2 className="modal-title">CAVITE CV Curation Studio</h2>
              <p className="modal-subtitle">
                Curating resume for <strong>{formData.fullName}</strong> · ATS Score: <strong>{formData.atsScore.overall}/100</strong>
              </p>
            </div>
          </div>

          <div className="modal-header-actions">
            <button
              type="button"
              className="action-btn action-btn-secondary"
              onClick={handleCopyMarkdown}
              title="Copy Clean Markdown"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Copy MD'}</span>
            </button>

            <button
              type="button"
              className="action-btn action-btn-primary"
              onClick={handlePrint}
              title="Export as PDF"
            >
              <Printer size={14} />
              <span>Print / Export PDF</span>
            </button>

            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="modal-tabs">
          <button
            type="button"
            className={`tab-btn ${activeTab === 'editor' ? 'tab-btn-active' : ''}`}
            onClick={() => setActiveTab('editor')}
          >
            <Sliders size={13} />
            <span>Interactive Editor</span>
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'preview' ? 'tab-btn-active' : ''}`}
            onClick={() => setActiveTab('preview')}
          >
            <FileCheck size={13} />
            <span>Full CV Preview</span>
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'compare' ? 'tab-btn-active' : ''}`}
            onClick={() => setActiveTab('compare')}
          >
            <span>Empty vs Curated</span>
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'ats' ? 'tab-btn-active' : ''}`}
            onClick={() => setActiveTab('ats')}
          >
            <span>ATS Compliance ({formData.atsScore.overall}%)</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="modal-body">
          {activeTab === 'editor' && (
            <div className="editor-grid">
              {/* Presets Sidebar */}
              <div className="presets-sidebar">
                <span className="sidebar-label">CURATED PERSONAS</span>
                <div className="presets-list">
                  {curatedPersonas.map((persona) => (
                    <button
                      key={persona.id}
                      type="button"
                      className={`preset-card ${formData.id === persona.id ? 'preset-card-active' : ''}`}
                      onClick={() => handleSelectPreset(persona)}
                    >
                      <span className="preset-name">{persona.targetTitle}</span>
                      <span className="preset-meta">
                        {persona.experiences.length} Roles · {persona.atsScore.overall} ATS
                      </span>
                    </button>
                  ))}
                  <button
                    type="button"
                    className="preset-card preset-blank"
                    onClick={() => handleSelectPreset(emptyResume)}
                  >
                    <span className="preset-name">Start from Blank Template</span>
                    <span className="preset-meta">Empty wireframe draft</span>
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <div className="editor-form-scroll">
                {/* Personal Information */}
                <div className="form-card">
                  <h3 className="form-card-title">Personal & Contact Info</h3>
                  <div className="form-row-2">
                    <div className="form-field">
                      <label>Full Name</label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleTextChange('fullName', e.target.value)}
                      />
                    </div>
                    <div className="form-field">
                      <label>Target Title</label>
                      <input
                        type="text"
                        value={formData.targetTitle}
                        onChange={(e) => handleTextChange('targetTitle', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-row-3">
                    <div className="form-field">
                      <label>Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleTextChange('email', e.target.value)}
                      />
                    </div>
                    <div className="form-field">
                      <label>Location</label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => handleTextChange('location', e.target.value)}
                      />
                    </div>
                    <div className="form-field">
                      <label>Website / Portfolio</label>
                      <input
                        type="text"
                        value={formData.website}
                        onChange={(e) => handleTextChange('website', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="form-card">
                  <div className="form-card-header-flex">
                    <h3 className="form-card-title">Executive Summary</h3>
                    <button
                      type="button"
                      className="ai-assist-pill"
                      onClick={() =>
                        handleTextChange(
                          'summary',
                          'High-velocity technology leader and architect with 6+ years designing scalable cloud services, real-time streaming architectures, and multi-agent AI ecosystems. Proven record of cutting infrastructure overhead by $4.2M while mentoring high-performing engineering organizations.'
                        )
                      }
                    >
                      <Sparkles size={11} />
                      Curate with Executive Tone
                    </button>
                  </div>
                  <textarea
                    rows={4}
                    value={formData.summary}
                    onChange={(e) => handleTextChange('summary', e.target.value)}
                    className="summary-textarea"
                  />
                </div>

                {/* Experience */}
                <div className="form-card">
                  <div className="form-card-header-flex">
                    <h3 className="form-card-title">Work Experience</h3>
                  </div>

                  {formData.experiences.map((exp) => (
                    <div key={exp.id} className="exp-edit-block">
                      <div className="form-row-2">
                        <div className="form-field">
                          <label>Role / Position</label>
                          <input
                            type="text"
                            value={exp.role}
                            onChange={(e) =>
                              handleUpdateExperience(exp.id, 'role', e.target.value)
                            }
                          />
                        </div>
                        <div className="form-field">
                          <label>Company</label>
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) =>
                              handleUpdateExperience(exp.id, 'company', e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="form-row-2">
                        <div className="form-field">
                          <label>Period</label>
                          <input
                            type="text"
                            value={exp.period}
                            onChange={(e) =>
                              handleUpdateExperience(exp.id, 'period', e.target.value)
                            }
                          />
                        </div>
                        <div className="form-field">
                          <label>Location</label>
                          <input
                            type="text"
                            value={exp.location}
                            onChange={(e) =>
                              handleUpdateExperience(exp.id, 'location', e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="highlights-field-group">
                        <label className="highlights-label">Achievement Bullet Points (Impact Driven)</label>
                        {exp.highlights.map((highlight, hIdx) => {
                          const isCurating = curatingField === `${exp.id}-${hIdx}`
                          return (
                            <div key={hIdx} className="bullet-edit-row">
                              <textarea
                                rows={2}
                                value={highlight}
                                onChange={(e) =>
                                  handleUpdateHighlight(exp.id, hIdx, e.target.value)
                                }
                                className="bullet-textarea"
                              />
                              <button
                                type="button"
                                className={`ai-bullet-btn ${isCurating ? 'ai-bullet-curating' : ''}`}
                                onClick={() => handleAICurateBullet(exp.id, hIdx)}
                                title="Curate this bullet with quantified impact"
                              >
                                {isCurating ? (
                                  <RefreshCw size={13} className="spin-icon" />
                                ) : (
                                  <Sparkles size={13} />
                                )}
                                <span>{isCurating ? 'Curating...' : 'AI Enhance'}</span>
                              </button>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'preview' && (
            <div className="print-cv-container">
              <div className="printable-resume-paper">
                <header className="print-header">
                  <h1 className="print-name">{formData.fullName}</h1>
                  <h2 className="print-title">{formData.targetTitle}</h2>
                  <div className="print-contact">
                    <span>{formData.email}</span>
                    <span>•</span>
                    <span>{formData.phone}</span>
                    <span>•</span>
                    <span>{formData.location}</span>
                    <span>•</span>
                    <span>{formData.website}</span>
                  </div>
                </header>

                <section className="print-section">
                  <h3 className="print-section-title">EXECUTIVE SUMMARY</h3>
                  <p className="print-summary">{formData.summary}</p>
                </section>

                <section className="print-section">
                  <h3 className="print-section-title">PROFESSIONAL EXPERIENCE</h3>
                  {formData.experiences.map((exp) => (
                    <div key={exp.id} className="print-job">
                      <div className="print-job-header">
                        <strong>{exp.role}</strong> — <span>{exp.company}</span>
                        <span className="print-job-period">{exp.period}</span>
                      </div>
                      <div className="print-job-location">{exp.location}</div>
                      <ul className="print-bullets">
                        {exp.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </section>

                <section className="print-section">
                  <h3 className="print-section-title">EDUCATION</h3>
                  {formData.education.map((edu) => (
                    <div key={edu.id} className="print-edu">
                      <div className="print-edu-header">
                        <strong>{edu.degree}</strong> — <span>{edu.school}</span>
                        <span className="print-edu-year">{edu.year}</span>
                      </div>
                      {edu.honors && <div className="print-edu-honors">{edu.honors}</div>}
                    </div>
                  ))}
                </section>

                <section className="print-section">
                  <h3 className="print-section-title">SKILLS & EXPERTISE</h3>
                  <div className="print-skills-list">
                    {formData.skills.map((cat, idx) => (
                      <div key={idx} className="print-skill-row">
                        <strong>{cat.category}: </strong>
                        <span>{cat.items.join(', ')}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          )}

          {activeTab === 'compare' && (
            <div className="compare-view-grid">
              <div className="compare-col compare-blank">
                <div className="compare-header">
                  <span className="compare-tag">Before: Empty Uncurated</span>
                  <h4>The Blank Page</h4>
                </div>
                <div className="compare-card">
                  <div className="skeleton-box title-box"></div>
                  <div className="skeleton-box subtitle-box"></div>
                  <p className="compare-dim-text">
                    Lacks action verbs, metrics, and ATS keywords. Leaves recruiters guessing about your true caliber.
                  </p>
                  <div className="compare-bullet-list">
                    <div className="skeleton-line line-full"></div>
                    <div className="skeleton-line line-75"></div>
                    <div className="skeleton-line line-90"></div>
                  </div>
                </div>
              </div>

              <div className="compare-col compare-curated">
                <div className="compare-header">
                  <span className="compare-tag compare-tag-green">After: CAVITE Curated</span>
                  <h4>Curated for Shreya Narayani</h4>
                </div>
                <div className="compare-card">
                  <h3 className="compare-title">{formData.fullName}</h3>
                  <div className="compare-subtitle">{formData.targetTitle}</div>
                  <p className="compare-bright-text">{formData.summary}</p>
                  <ul className="compare-bullets">
                    {formData.experiences[0]?.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ats' && (
            <div className="ats-dashboard-view">
              <div className="ats-score-hero">
                <div className="ats-circle-gauge">
                  <span className="ats-gauge-number">{formData.atsScore.overall}</span>
                  <span className="ats-gauge-unit">/100</span>
                </div>
                <div className="ats-hero-copy">
                  <h3>ATS Readiness: Exceptional</h3>
                  <p>
                    Your curated resume passes 99% of enterprise applicant tracking systems (Greenhouse, Lever, Workday) with verified keyword density and metric weighting.
                  </p>
                </div>
              </div>

              <div className="ats-criteria-grid">
                <div className="criteria-card">
                  <span className="criteria-label">Action Verbs & Impact</span>
                  <div className="criteria-bar-track">
                    <div
                      className="criteria-bar-fill"
                      style={{ width: `${formData.atsScore.breakdown.actionVerbs}%` }}
                    ></div>
                  </div>
                  <span className="criteria-score">{formData.atsScore.breakdown.actionVerbs}%</span>
                </div>

                <div className="criteria-card">
                  <span className="criteria-label">Quantified Metrics</span>
                  <div className="criteria-bar-track">
                    <div
                      className="criteria-bar-fill"
                      style={{ width: `${formData.atsScore.breakdown.quantifiedMetrics}%` }}
                    ></div>
                  </div>
                  <span className="criteria-score">{formData.atsScore.breakdown.quantifiedMetrics}%</span>
                </div>

                <div className="criteria-card">
                  <span className="criteria-label">Keyword Match Rate</span>
                  <div className="criteria-bar-track">
                    <div
                      className="criteria-bar-fill"
                      style={{ width: `${formData.atsScore.breakdown.keywordMatch}%` }}
                    ></div>
                  </div>
                  <span className="criteria-score">{formData.atsScore.breakdown.keywordMatch}%</span>
                </div>

                <div className="criteria-card">
                  <span className="criteria-label">Brevity & Layout Integrity</span>
                  <div className="criteria-bar-track">
                    <div
                      className="criteria-bar-fill"
                      style={{ width: `${formData.atsScore.breakdown.brevityAndFormatting}%` }}
                    ></div>
                  </div>
                  <span className="criteria-score">{formData.atsScore.breakdown.brevityAndFormatting}%</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button
            type="button"
            className="action-btn action-btn-secondary"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="action-btn action-btn-primary"
            onClick={() => {
              onSaveResume(formData)
              onClose()
            }}
          >
            Apply to Landing Page
          </button>
        </div>
      </div>
    </div>
  )
}
