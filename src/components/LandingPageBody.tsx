import React, { useState } from 'react'
import { CheckCircle2, Layers } from 'lucide-react'

// Imported high-resolution 3D assets generated for this design
import bentoPrismImg from '../assets/bento-prism.jpg'
import bentoCrystalImg from '../assets/bento-crystal.jpg'
import bentoTorusImg from '../assets/bento-torus.jpg'
import origamiPlaneImg from '../assets/origami-plane.jpg'
import fluidRibbonImg from '../assets/fluid-ribbon.jpg'
import holographicOrbImg from '../assets/holographic-orb.jpg'
import newsKeynoteImg from '../assets/news-keynote.jpg'
import newsEthereumImg from '../assets/news-ethereum.jpg'
import techStudioImg from '../assets/studio-interview.jpg'

interface LandingPageBodyProps {
  onOpenStudio: () => void
}

type TabType = 'overview' | 'fast' | 'amazon' | 'stripe' | 'google'

export const LandingPageBody: React.FC<LandingPageBodyProps> = ({ onOpenStudio }) => {
  const [activeTab, setActiveTab] = useState<TabType>('fast')
  const [emailInput, setEmailInput] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (emailInput.trim()) {
      setEmailSubmitted(true)
    }
  }

  return (
    <div className="landing-body-wrapper">
      {/* =====================================================================
          SECTION 1: BENTO GRID WITH HEADLINE (Exact visual replication)
          ===================================================================== */}
      <section className="section-container bento-section" id="vault">
        {/* Top 3-Column Micro Header matching reference */}
        <div className="bento-top-micro-row">
          <div className="bento-micro-col bento-micro-title">
            <span>Future proofing your career</span>
          </div>
          <div className="bento-micro-col">
            <span className="bento-micro-label">LLM Context Amnesia:</span>
            <p>Chatbots lose context between prompts. Cavite maintains your complete career graph permanently with deterministic recall.</p>
          </div>
          <div className="bento-micro-col">
            <span className="bento-micro-label">Precision &amp; Evidence:</span>
            <p>Every claim is backed by real commit hashes and verifiable metrics with 99% ATS keyword compatibility.</p>
          </div>
        </div>

        <div className="section-header-center">
          <h2 className="bento-main-heading">
            Persistent Context, Targeted Precision for Tomorrow
          </h2>
          <p className="bento-main-subheadline">
            Cavite introduces a personal career intelligence platform designed to solve the challenges of context memory, continuous resume optimization, and evidence-backed JD alignment across any opportunity.
          </p>
        </div>

        {/* 2-Column Asymmetric Bento Grid matching reference */}
        <div className="bento-asym-grid">
          {/* LEFT COLUMN */}
          <div className="bento-col-left">
            {/* Card 1: Tall Dark Card with Iridescent Prism */}
            <div className="bento-item bento-card-dark-prism">
              <div className="bento-img-container">
                <img
                  src={bentoPrismImg}
                  alt="Future-Proof Career Intelligence"
                  className="bento-img-cover"
                />
              </div>
              <div className="bento-dark-text-block">
                <h3 className="bento-dark-title">Future-Proof Career Intelligence</h3>
                <p className="bento-dark-desc">
                  Safeguard your career track record with permanent semantic embeddings, ensuring context is never lost across applications.
                </p>
              </div>
            </div>

            {/* Card 2: Wide Card with Metallic Torus */}
            <div className="bento-item bento-card-horizontal">
              <div className="bento-horizontal-img">
                <img
                  src={bentoTorusImg}
                  alt="GitHub &amp; Vault Ingestion"
                  className="bento-img-contain"
                />
              </div>
              <div className="bento-horizontal-text">
                <h4 className="bento-h-title">Interoperability</h4>
                <p className="bento-h-desc">
                  Bridge your repositories, commit logs, and production metrics seamlessly with the Cavite vault. Engineers can link repositories in seconds with zero friction.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="bento-col-right">
            {/* Top Sub-row with 2 side-by-side cards */}
            <div className="bento-sub-row">
              {/* Card 3: Layer 2 / JD Intelligence */}
              <div className="bento-item bento-sub-card">
                <div className="bento-sub-icon-area">
                  <div className="bento-floating-chip">
                    <Layers size={24} className="text-slate-700" />
                  </div>
                </div>
                <div className="bento-sub-content">
                  <h4 className="bento-sub-title">JD Intelligence</h4>
                  <p className="bento-sub-desc">
                    Real-time competency decomposition into technical taxonomy and ATS requirements.
                  </p>
                </div>
              </div>

              {/* Card 4: Developer Tools (Dark Navy Code Block) */}
              <div className="bento-item bento-sub-card bento-card-code">
                <div className="bento-code-snippet">
                  <div className="code-dot-bar">
                    <span className="c-dot red"></span>
                    <span className="c-dot yellow"></span>
                    <span className="c-dot green"></span>
                  </div>
                  <pre className="code-text">
{`const match = await cavite.match({
  candidate: vault.profile,
  targetJD: amazon.sde2,
  minScore: 0.85
});`}
                  </pre>
                </div>
                <div className="bento-code-content">
                  <h4 className="bento-code-title">Developer Tools</h4>
                  <p className="bento-code-desc">
                    A comprehensive suite of evaluation tools to optimize your engineering candidacy.
                  </p>
                  <a href="#pipeline" className="code-link">
                    Explore API →
                  </a>
                </div>
              </div>
            </div>

            {/* Card 5: Bottom Right Tall Card (Optical Crystal Cube) */}
            <div className="bento-item bento-card-crystal">
              <div className="bento-img-container crystal-img-wrap">
                <img
                  src={bentoCrystalImg}
                  alt="EVM Compatibility &amp; ATS Audit"
                  className="bento-img-cover"
                />
              </div>
              <div className="bento-crystal-text">
                <h3 className="bento-crystal-title">ATS Compatibility &amp; Evidence Audit</h3>
                <p className="bento-crystal-desc">
                  Fully compliant with modern ATS parsers (Workday, Greenhouse, Lever), ensuring 100% parse accuracy and explainable alignment scoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: FAST TRANSACTION CONFIRMATIONS (Fast Project Matcher)
          ===================================================================== */}
      <section className="section-container fast-match-section" id="projects">
        {/* Navigation Tabs on top right */}
        <div className="fast-match-tabs-bar">
          <button
            type="button"
            className={`fm-tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            type="button"
            className={`fm-tab ${activeTab === 'fast' ? 'active' : ''}`}
            onClick={() => setActiveTab('fast')}
          >
            Fast Match Engine
          </button>
          <button
            type="button"
            className={`fm-tab ${activeTab === 'amazon' ? 'active' : ''}`}
            onClick={() => setActiveTab('amazon')}
          >
            Amazon SDE
          </button>
          <button
            type="button"
            className={`fm-tab ${activeTab === 'stripe' ? 'active' : ''}`}
            onClick={() => setActiveTab('stripe')}
          >
            Stripe ML
          </button>
          <button
            type="button"
            className={`fm-tab ${activeTab === 'google' ? 'active' : ''}`}
            onClick={() => setActiveTab('google')}
          >
            Google Systems
          </button>
        </div>

        <div className="fast-match-grid">
          {/* Left Text Block */}
          <div className="fast-match-left">
            <span className="fm-category">Speed &amp; Precision</span>
            <h2 className="fm-heading">
              Fast Context Matching &amp; Evidence Pinpointing
            </h2>
            <p className="fm-description">
              Our hybrid vector-lexical engine evaluates your entire career database in seconds, selecting the 4–5 most relevant projects for any target role and drafting job-aligned accomplishments.
            </p>
            <button
              type="button"
              className="fm-cta-btn"
              onClick={onOpenStudio}
            >
              Learn More
            </button>
          </div>

          {/* Right Visual: Minimalist 3D Origami Airplane */}
          <div className="fast-match-right">
            <div className="origami-plane-wrapper">
              <img
                src={origamiPlaneImg}
                alt="Fast Match Flight"
                className="origami-plane-img"
              />
              {/* Floating metrics pill overlay */}
              <div className="plane-metric-pill">
                <span className="pmp-label">Vector Match Latency:</span>
                <span className="pmp-val">1.2s · 99.4% Verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: CINEMATIC DARK BANNER ("Explore QDay" & Marquee)
          ===================================================================== */}
      <section className="dark-cinematic-banner-section" id="jd-matcher">
        <div className="dark-banner-fluid-backdrop">
          <img
            src={fluidRibbonImg}
            alt="Fluid Chromatic Ribbon"
            className="fluid-ribbon-bg"
          />
        </div>

        <div className="dark-banner-content-container">
          {/* Floating Glassmorphic Card */}
          <div className="floating-dark-glass-card">
            <div className="fdgc-left">
              <h2 className="fdgc-title">Explore Cavite OS</h2>
              <p className="fdgc-desc">
                Where the world's most ambitious engineers craft precision resumes. Connect your GitHub repos, upload your target JD, and unlock interview-ready resumes in minutes.
              </p>
            </div>
            <div className="fdgc-right">
              <button
                type="button"
                className="fdgc-btn-primary"
                onClick={onOpenStudio}
              >
                Launch Career Vault
              </button>
              <a href="#pipeline" className="fdgc-btn-secondary">
                View Architecture PRD ↗
              </a>
            </div>
          </div>

          {/* Trusted By Marquee beneath */}
          <div className="dark-marquee-block">
            <span className="dark-marquee-eyebrow">TRUSTED FOR ROLES AT</span>
            <div className="dark-marquee-row">
              <span className="marquee-logo">Webflow</span>
              <span className="m-dot">•</span>
              <span className="marquee-logo">Stripe</span>
              <span className="m-dot">•</span>
              <span className="marquee-logo">Google</span>
              <span className="m-dot">•</span>
              <span className="marquee-logo">Amazon</span>
              <span className="m-dot">•</span>
              <span className="marquee-logo">Meta</span>
              <span className="m-dot">•</span>
              <span className="marquee-logo">OpenAI</span>
              <span className="m-dot">•</span>
              <span className="marquee-logo">Vercel</span>
              <span className="m-dot">•</span>
              <span className="marquee-logo">Databricks</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: ROADMAP SECTION (Prepared for rapidly evolving landscape)
          ===================================================================== */}
      <section className="section-container roadmap-clean-section">
        <div className="roadmap-two-col-header">
          <div className="rch-left">
            <h2 className="rch-title">
              Prepared for the rapidly evolving landscape of careers
            </h2>
          </div>
          <div className="rch-right">
            <ul className="rch-features-list">
              <li>Multi-network repository indexing &amp; sync</li>
              <li>pgvector semantic embedding engine</li>
              <li>Real-time ATS parsing audit &amp; scoring</li>
              <li>Role-based resume generation</li>
              <li>One-click PDF &amp; LaTeX export</li>
            </ul>
            <button
              type="button"
              className="rch-action-btn"
              onClick={onOpenStudio}
            >
              Join Vault ↗
            </button>
          </div>
        </div>

        {/* Horizontal Milestone Timeline matching reference */}
        <div className="roadmap-timeline-strip">
          <div className="timeline-horizontal-line"></div>
          <div className="timeline-milestones-four">
            {/* Node 1 */}
            <div className="tm-step">
              <div className="tm-icon-bubble active">
                <span className="tm-diamond-icon">◇</span>
              </div>
              <div className="tm-text-meta">
                <h4 className="tm-name">Career Vault</h4>
                <span className="tm-date">Q1 2026 · Live</span>
              </div>
            </div>

            {/* Node 2 */}
            <div className="tm-step">
              <div className="tm-icon-bubble active">
                <span className="tm-diamond-icon">◇</span>
              </div>
              <div className="tm-text-meta">
                <h4 className="tm-name">JD Intelligence</h4>
                <span className="tm-date">Q2 2026 · Live</span>
              </div>
            </div>

            {/* Node 3 */}
            <div className="tm-step">
              <div className="tm-icon-bubble">
                <span className="tm-diamond-icon">◆</span>
              </div>
              <div className="tm-text-meta">
                <h4 className="tm-name">Vector Match &amp; Studio</h4>
                <span className="tm-date">Q3 2026 · Next</span>
              </div>
            </div>

            {/* Node 4 */}
            <div className="tm-step">
              <div className="tm-icon-bubble">
                <span className="tm-diamond-icon">◇</span>
              </div>
              <div className="tm-text-meta">
                <h4 className="tm-name">Career OS &amp; Gap Analyzer</h4>
                <span className="tm-date">Q4 2026 · Roadmap</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 5: NEWS AND MEDIA (Real Architecture & Project Cards)
          ===================================================================== */}
      <section className="section-container news-media-section" id="pipeline">
        <div className="section-header-center">
          <span className="section-eyebrow">Stay in the loop</span>
          <h2 className="news-main-heading">News and Media</h2>
          <p className="news-subheadline">
            An insight into everything product, architecture, and career engineering
          </p>
        </div>

        <div className="news-asym-grid">
          {/* Top Wide Dark Card */}
          <div className="news-card-featured-wide">
            <div className="ncf-img-side">
              <img
                src={newsKeynoteImg}
                alt="Verdict Multi-Agent Platform"
                className="ncf-img"
              />
            </div>
            <div className="ncf-text-side">
              <span className="ncf-cat">2026 · ARCHITECTURE CASE STUDY</span>
              <h3 className="ncf-title">
                Verdict: Multi-Agent AI Platform for Startup Evaluation →
              </h3>
              <p className="ncf-desc">
                How adversarial Growth &amp; Risk agents debate viability with live Tavily web intelligence, deployed on FastAPI and PostgreSQL.
              </p>
              <div className="ncf-author-row">
                <span className="ncf-author">Shreya Narayani</span>
                <span className="ncf-meta">• August 2026 • 6 min read</span>
              </div>
            </div>
          </div>

          {/* Bottom Row (2 Cards) */}
          <div className="news-bottom-row">
            {/* Card 2: Sri Gangotri */}
            <div className="news-small-card">
              <div className="nsc-img-wrap">
                <img
                  src={techStudioImg}
                  alt="Sri Gangotri Operations Platform"
                  className="nsc-img"
                />
              </div>
              <div className="nsc-content">
                <span className="nsc-cat">INTERNSHIP IMPACT</span>
                <h4 className="nsc-title">
                  Sri Gangotri: Centralizing Production Across 2 Factories &amp; 5 States →
                </h4>
                <p className="nsc-desc">
                  Role-based access control and automation cutting daily reporting time by 40%.
                </p>
                <div className="nsc-meta">June 2026 • 4 min read</div>
              </div>
            </div>

            {/* Card 3: Hiraeth F1 & Ethereum Cube */}
            <div className="news-small-card">
              <div className="nsc-img-wrap">
                <img
                  src={newsEthereumImg}
                  alt="Hiraeth F1 Telemetry"
                  className="nsc-img"
                />
              </div>
              <div className="nsc-content">
                <span className="nsc-cat">MACHINE LEARNING</span>
                <h4 className="nsc-title">
                  Hiraeth F1: Real-Time Telemetry Prediction with Custom RAG →
                </h4>
                <p className="nsc-desc">
                  Ensemble classification and 5-category fleet maintenance knowledge base.
                </p>
                <div className="nsc-meta">April 2026 • 5 min read</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 6: "STAY AHEAD OF EVERYONE" (Dark Floating CTA with 3D Orb)
          ===================================================================== */}
      <section className="dark-stay-ahead-section">
        {/* Floating Orb Graphic in Background */}
        <div className="stay-ahead-orb-backdrop">
          <img
            src={holographicOrbImg}
            alt="Holographic Fluid Orb"
            className="holographic-orb-img"
          />
        </div>

        {/* Floating Dark Glass Box */}
        <div className="stay-ahead-glass-card">
          <h2 className="sah-title">Stay ahead of everyone</h2>
          <p className="sah-desc">
            Secure your dream engineering role with Cavite's persistent career intelligence. Join the early access list for the first to access the latest pgvector developments.
          </p>

          {emailSubmitted ? (
            <div className="sah-success-pill">
              <CheckCircle2 size={16} />
              <span>You are on the VIP early access list!</span>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="sah-form-row">
              <input
                type="email"
                placeholder="Enter your email..."
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required
                className="sah-input"
              />
              <button type="submit" className="sah-submit-btn">
                Join Platform
              </button>
            </form>
          )}

          <span className="sah-fineprint">
            Protected by enterprise encryption. Zero spam. We never sell your career data.
          </span>
        </div>
      </section>

      {/* =====================================================================
          SECTION 7: DARK FOOTER (Matching reference layout)
          ===================================================================== */}
      <footer className="dark-site-footer">
        <div className="dsf-content-grid">
          <div className="dsf-brand-block">
            <span className="dsf-logo">CAVITE</span>
            <div className="dsf-social-icons">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">IN</a>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">X</a>
              <a href="mailto:contact@cavite.dev" aria-label="Email">Mail</a>
            </div>
          </div>

          <div className="dsf-links-column">
            <h5 className="dsf-col-header">Platform</h5>
            <ul>
              <li><a href="#vault">Career Vault</a></li>
              <li><a href="#jd-matcher">JD Intelligence</a></li>
              <li><a href="#projects">Project Matcher</a></li>
              <li><button type="button" onClick={onOpenStudio} className="dsf-inline-btn">Resume Studio</button></li>
            </ul>
          </div>

          <div className="dsf-links-column">
            <h5 className="dsf-col-header">Architecture</h5>
            <ul>
              <li><a href="#pipeline">pgvector Pipeline</a></li>
              <li><a href="#pipeline">FastAPI Backend</a></li>
              <li><a href="#pipeline">Non-Hallucination Spec</a></li>
              <li><a href="#pipeline">GitHub Ingestion</a></li>
            </ul>
          </div>

          <div className="dsf-links-column">
            <h5 className="dsf-col-header">Company</h5>
            <ul>
              <li><a href="#vault">About Cavite</a></li>
              <li><a href="#pipeline">Roadmap</a></li>
              <li><a href="mailto:shreya.narayani2024@nst.rishihood.edu.in">Contact Founder</a></li>
              <li><a href="#privacy">Privacy &amp; Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="dsf-bottom-bar">
          <span className="dsf-copy">© 2026 Cavite Inc. All rights reserved.</span>
          <div className="dsf-legal">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
            <span>•</span>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
