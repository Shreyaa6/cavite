import { useState } from 'react'
import './App.css'
import caviteLogo from './assets/cavite-logo.svg'
import fbIcon from './assets/fb.webp'
import xIcon from './assets/x.webp'
import inIcon from './assets/in.webp'
import { AcademicResume } from './components/AcademicResume'
import { CVStudioModal } from './components/CVStudioModal'
import { LandingPageBody } from './components/LandingPageBody'
import { curatedPersonas } from './data/resumes'

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCuratorOpen, setIsCuratorOpen] = useState(false)
  const [currentResume, setCurrentResume] = useState(curatedPersonas[0])

  return (
    <div className="home-viewport">
      {/* Outer Two-Section Layout */}
      <main className="section_first" id="section_first">
        {/* Left Section: Seamless Neutral/Greyish Background */}
        <section className="section_1">
          {/* Top Header Bar */}
          <header className="header__wrapper">
            <div className="logo__wrapper">
              <a href="/" className="logo-link">
                <img src={caviteLogo} alt="CAVITE logo" className="brand-logo" />
                <span className="brand-title">CAVITE</span>
              </a>
            </div>

            <nav className="navigation__wrapper">
              <a href="#projects" className="navigation__link">Projects</a>
              <a href="#jd-matcher" className="navigation__link">JD Matcher</a>
              <a href="#vault" className="navigation__link">Persistent Vault</a>
              <a href="#faqs" className="navigation__link">FAQs</a>
            </nav>

            <button
              type="button"
              className="burger_menu"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </header>

          {/* Hero Content Block */}
          <div className="content">
            <h2 className="hero-headline">
              <span className="headline-first-line">
                Curating <span className="bg_text">Projects,</span>
              </span>
              <span className="headline-second-line">
                Tailored To Every Job Description
              </span>
            </h2>

            <p className="hero-description">
              Never re-explain your work to AI again. Cavite keeps your complete project vault permanently in context, analyzes any job description with precision AI, and pinpoints exactly which projects to highlight on your resume.
            </p>

            <div className="cta_buttons">
              <button
                type="button"
                className="ButtonText"
                onClick={() => setIsCuratorOpen(true)}
              >
                Curate My CV
              </button>
              <button
                type="button"
                className="ButtonIcon"
                onClick={() => setIsCuratorOpen(true)}
                aria-label="Open CV Studio"
              >
                ↗
              </button>
            </div>
          </div>
        </section>

        {/* Right Section: Clean Academic Resume Sheet, No Image BG, Full Fit */}
        <section className="section_2">
          <AcademicResume />

          {/* Restored Signature Lower-Right Socials Dock */}
          <div className="socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social_item"
              aria-label="Facebook"
            >
              <img src={fbIcon} alt="Facebook" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social_item"
              aria-label="X"
            >
              <img src={xIcon} alt="X" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social_item"
              aria-label="LinkedIn"
            >
              <img src={inIcon} alt="LinkedIn" />
            </a>
          </div>
        </section>
      </main>

      {/* Comprehensive Landing Page Body (Wireframe continuation) */}
      <LandingPageBody onOpenStudio={() => setIsCuratorOpen(true)} />

      {/* CV Studio Modal for editing if opened */}
      <CVStudioModal
        isOpen={isCuratorOpen}
        onClose={() => setIsCuratorOpen(false)}
        currentResume={currentResume}
        onSaveResume={(updated) => setCurrentResume(updated)}
      />

      {/* Full-Screen Green Navigation Modal */}
      {isMenuOpen && (
        <div className="navigation__modal">
          <button
            type="button"
            className="close__menu"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          <div className="modal__nav_links">
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#jd-matcher" onClick={() => setIsMenuOpen(false)}>JD Matcher</a>
            <a href="#vault" onClick={() => setIsMenuOpen(false)}>Persistent Vault</a>
            <a href="#faqs" onClick={() => setIsMenuOpen(false)}>FAQs</a>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
