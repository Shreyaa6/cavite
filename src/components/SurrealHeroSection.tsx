import React from 'react'
import { ArrowRight } from 'lucide-react'
import heroFloralImg from '../assets/hero-surreal-floral.jpg'

interface SurrealHeroSectionProps {
  onOpenStudio: () => void
}

export const SurrealHeroSection: React.FC<SurrealHeroSectionProps> = ({ onOpenStudio }) => {
  return (
    <section className="surreal-hero-wrapper" id="hero">
      {/* Centered Typography Block */}
      <div className="surreal-hero-header">
        <p className="surreal-hero-eyebrow">
          AN AI AGENT THAT THINKS AHEAD, ACTS FAST, AND ADAPTS TO YOU.
        </p>

        <h1 className="surreal-hero-headline">
          Your Intelligent<br />
          Partner, On Demand
        </h1>

        <p className="surreal-hero-subtitle">
          Streamline tasks, make smarter decisions, and stay one step ahead. Our AI agent works quietly in the background—so you can focus on what matters most.
        </p>

        <div className="surreal-hero-cta">
          <button
            type="button"
            className="surreal-pill-btn"
            onClick={onOpenStudio}
          >
            <span>Try It Free</span>
            <span className="surreal-btn-arrow-circle">
              <ArrowRight size={15} strokeWidth={2.4} />
            </span>
          </button>
        </div>
      </div>

      {/* Main Surreal Aesthetic Image Card */}
      <div className="surreal-hero-card-container">
        <div
          className="surreal-hero-card"
          style={{ backgroundImage: `url(${heroFloralImg})` }}
        >
          {/* Subtle gradient overlays to ensure text contrast */}
          <div className="surreal-card-gradient-top-left"></div>
          <div className="surreal-card-gradient-bottom-right"></div>

          {/* Top-Left Stat Overlay */}
          <div className="surreal-card-stat-overlay">
            <div className="surreal-stat-number">98%</div>
            <div className="surreal-stat-label">
              Get More Done,<br />
              Effortlessly
            </div>
          </div>

          {/* Bottom-Right Integration Text Overlay */}
          <div className="surreal-card-integration-overlay">
            <h3 className="surreal-integration-title">
              Advanced<br />
              Integrations
            </h3>
            <p className="surreal-integration-desc">
              Connect with your favorite tools to create a seamless workflow.
            </p>
          </div>

          {/* Bottom-Center Docked Notch with Inverted Fillets */}
          <div className="surreal-docked-notch">
            {/* Supa Blox */}
            <div className="notch-item">
              <svg className="notch-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="12" cy="12" r="9" />
              </svg>
              <span className="notch-label">Supa Blox</span>
            </div>

            {/* Hype Blox */}
            <div className="notch-item">
              <svg className="notch-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M6 3h12l-6 8 6 8H6l6-8-6-8z" strokeLinejoin="round" />
              </svg>
              <span className="notch-label">Hype Blox</span>
            </div>

            {/* Ultra Blox */}
            <div className="notch-item">
              <svg className="notch-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M12 3a9 9 0 0 0 0 18V3z" fill="currentColor" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              <span className="notch-label">Ultra Blox</span>
            </div>

            {/* Frame Blox */}
            <div className="notch-item">
              <svg className="notch-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3v18" />
                <path d="M12 3a9 9 0 0 1 0 18" fill="currentColor" opacity="0.3" />
              </svg>
              <span className="notch-label">Frame Blox</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
