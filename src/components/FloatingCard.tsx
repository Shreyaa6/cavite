import React from 'react'
import cottageImg from '../assets/cottage.jpg'
import { Sparkles, ArrowRight } from 'lucide-react'
import type { ResumeData } from '../types/resume'

interface FloatingCardProps {
  currentPersona: ResumeData
  currentIndex: number
  totalPersonas: number
  onSelectPersona: (index: number) => void
  onCurateClick: () => void
}

export const FloatingCard: React.FC<FloatingCardProps> = ({
  currentPersona,
  currentIndex,
  totalPersonas,
  onSelectPersona,
  onCurateClick,
}) => {
  return (
    <div className="floating-card-container">
      {/* The Rounded Floating Card */}
      <div className="floating-card-body">
        {/* Left Thumbnail Image */}
        <div className="card-thumb-wrapper">
          <img
            src={cottageImg}
            alt="Curated CV Retreat"
            className="card-thumb-img"
          />
          <span className="card-thumb-badge">
            <Sparkles size={10} />
            {currentPersona.atsScore.overall} ATS
          </span>
        </div>

        {/* Right Content */}
        <div className="card-info-content">
          <h3 className="card-title">Hidden Gems</h3>
          <p className="card-description">
            Explore our handpicked collection of authentic stays and secluded retreats, where nature meets comfort in perfect harmony.
          </p>

          <button
            type="button"
            className="card-pill-btn"
            onClick={onCurateClick}
          >
            <span>Curate My CV</span>
            <ArrowRight size={13} className="btn-arrow" />
          </button>
        </div>
      </div>

      {/* Carousel Dots Underneath */}
      <div className="card-carousel-dots" role="tablist" aria-label="Curated CV Personas">
        {Array.from({ length: totalPersonas }).map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={currentIndex === index}
            className={`carousel-dot ${currentIndex === index ? 'dot-active' : ''}`}
            onClick={() => onSelectPersona(index)}
            title={`Switch to Persona ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
