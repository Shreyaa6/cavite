import React from 'react'

interface SplitHeroTypographyProps {
  splitPercent?: number
  headlineLine1?: string
  headlineLine2?: string
  subhead?: string
}

export const SplitHeroTypography: React.FC<SplitHeroTypographyProps> = ({
  splitPercent = 50,
  headlineLine1 = 'Curate the resume',
  headlineLine2 = 'of your dream career',
  subhead = 'Escape the blank page and turn unpolished drafts into an executive-grade story. We curate unique career milestones tailored to your ambition and rhythm.',
}) => {
  return (
    <div className="split-hero-container">
      {/* Layer 1: Dark typography on the Left (Clipped to the cream side) */}
      <div
        className="split-typography-layer dark-layer"
        style={{
          clipPath: `inset(0 ${100 - splitPercent}% 0 0)`,
        }}
        aria-hidden="true"
      >
        <div className="hero-typography-content">
          <h1 className="hero-main-title">
            <span className="hero-line">{headlineLine1}</span>
            <span className="hero-line">{headlineLine2}</span>
          </h1>
          <p className="hero-subhead">{subhead}</p>
        </div>
      </div>

      {/* Layer 2: White typography on the Right (Clipped to the scenic image side) */}
      <div
        className="split-typography-layer light-layer"
        style={{
          clipPath: `inset(0 0 0 ${splitPercent}%)`,
        }}
      >
        <div className="hero-typography-content">
          <h1 className="hero-main-title">
            <span className="hero-line">{headlineLine1}</span>
            <span className="hero-line">{headlineLine2}</span>
          </h1>
          <p className="hero-subhead">{subhead}</p>
        </div>
      </div>
    </div>
  )
}

