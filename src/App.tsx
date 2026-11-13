import { useState } from 'react'
import './App.css'
import caviteLogo from './assets/cavite-logo.svg'
import { CVStudioModal } from './components/CVStudioModal'
import { LandingPageBody } from './components/LandingPageBody'
import { SurrealHeroSection } from './components/SurrealHeroSection'
import { curatedPersonas } from './data/resumes'

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCuratorOpen, setIsCuratorOpen] = useState(false)
  const [currentResume, setCurrentResume] = useState(curatedPersonas[0])

  return (
    <div className="home-viewport surreal-theme">
      {/* Sleek Minimalist Top Navbar */}
      <header className="surreal-navbar">
        <div className="surreal-nav-container">
          <div className="logo__wrapper">
            <a href="/" className="logo-link">
              <img src={caviteLogo} alt="CAVITE logo" className="brand-logo" />
              <span className="brand-title">CAVITE</span>
            </a>
          </div>

          <nav className="navigation__wrapper">
            <a href="#projects" className="navigation__link">Projects</a>
            <a href="#jd-matcher" className="navigation__link">JD Matcher</a>
            <a href="#vault" className="navigation__link">Career Vault</a>
            <a href="#roadmap" className="navigation__link">Roadmap</a>
            <a href="#news" className="navigation__link">Case Studies</a>
            <a href="#faqs" className="navigation__link">FAQs</a>
          </nav>

          <div className="surreal-nav-actions">
            <button
              type="button"
              className="surreal-nav-btn"
              onClick={() => setIsCuratorOpen(true)}
            >
              Curate CV
            </button>
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
          </div>
        </div>
      </header>

      {/* Main Surreal Centered Hero Section (Exact visual replication) */}
      <SurrealHeroSection onOpenStudio={() => setIsCuratorOpen(true)} />

      {/* Comprehensive Landing Page Body */}
      <LandingPageBody onOpenStudio={() => setIsCuratorOpen(true)} />

      {/* CV Studio Modal for editing & viewing full verified resume */}
      <CVStudioModal
        isOpen={isCuratorOpen}
        onClose={() => setIsCuratorOpen(false)}
        currentResume={currentResume}
        onSaveResume={(updated) => setCurrentResume(updated)}
      />

      {/* Full-Screen Navigation Modal */}
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
            <a href="#vault" onClick={() => setIsMenuOpen(false)}>Career Vault</a>
            <a href="#roadmap" onClick={() => setIsMenuOpen(false)}>Roadmap</a>
            <a href="#news" onClick={() => setIsMenuOpen(false)}>Case Studies</a>
            <a href="#faqs" onClick={() => setIsMenuOpen(false)}>FAQs</a>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
