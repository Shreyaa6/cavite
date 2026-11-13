import React from 'react'

export const AcademicResume: React.FC = () => {
  return (
    <article className="academic-resume-doc" aria-label="Resume of Shreya Narayani">
      {/* ----------------- HEADER ----------------- */}
      <header className="ar-header">
        <div className="ar-header-main">
          <h1 className="ar-name">Shreya Narayani</h1>
          <div className="ar-contact-row">
            <span className="ar-contact-label">Phone:</span>
            <a href="tel:+919905904351" className="ar-contact-val">+919905904351</a>
          </div>
          <div className="ar-contact-row">
            <span className="ar-contact-label">Email:</span>
            <a href="mailto:shreya.narayani2024@nst.rishihood.edu.in" className="ar-contact-val">
              shreya.narayani2024@nst.rishihood.edu.in
            </a>
          </div>
          <div className="ar-links-row">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="ar-blue-link">LinkedIn</a>
            <span className="ar-dot">•</span>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="ar-blue-link">Github</a>
            <span className="ar-dot">•</span>
            <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="ar-blue-link">Leetcode</a>
            <span className="ar-dot">•</span>
            <a href="https://portfolio.dev" target="_blank" rel="noopener noreferrer" className="ar-blue-link">Personal Portfolio</a>
          </div>
        </div>

        {/* Institution Badge: Rishihood University x Newton School of Technology */}
        <div className="ar-inst-badge">
          <div className="ar-inst-brand ar-rishi-brand">
            <svg className="ar-rishi-logo" viewBox="0 0 32 32" fill="none">
              <path d="M16 3C13 8 8 13 8 18c0 4.4 3.6 8 8 8s8-3.6 8-8c0-5-5-10-8-15z" fill="#E11D48"/>
              <path d="M16 9c-2 3.5-5 7-5 10 0 2.8 2.2 5 5 5s5-2.2 5-5c0-3-3-6.5-5-10z" fill="#FB7185"/>
            </svg>
            <div className="ar-inst-col">
              <span className="ar-brand-primary ar-rishi-title">rishihood</span>
              <span className="ar-brand-sub">university</span>
            </div>
          </div>

          <span className="ar-brand-x">×</span>

          <div className="ar-inst-brand ar-newton-brand">
            <svg className="ar-newton-logo" viewBox="0 0 32 32" fill="none">
              <path d="M16 3L6 8v8c0 7 4.5 13.5 10 15 5.5-1.5 10-8 10-15V8l-10-5z" stroke="#1D4ED8" strokeWidth="2.2" fill="#EFF6FF"/>
              <path d="M11 16l3.5 3.5L21 12" stroke="#1D4ED8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="ar-inst-col">
              <span className="ar-brand-primary ar-newton-title">Newton School</span>
              <span className="ar-brand-sub">of Technology</span>
            </div>
          </div>
        </div>
      </header>

      {/* ----------------- EDUCATION ----------------- */}
      <section className="ar-section">
        <div className="ar-sec-title-wrap">
          <h2 className="ar-sec-title">EDUCATION</h2>
        </div>
        <table className="ar-table">
          <thead>
            <tr>
              <th className="col-year">Year</th>
              <th className="col-degree">Degree/Exam</th>
              <th className="col-inst">Institute</th>
              <th className="col-cgpa">CGPA/Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-2028</td>
              <td>Bachelor of Computer Applications (Data Science)</td>
              <td>Newton School of Technology, Rishihood University</td>
              <td className="col-cgpa">9.3/10.0</td>
            </tr>
            <tr>
              <td>2023-2024</td>
              <td>Intermediate (Class XII)</td>
              <td>Sarvodaya Senior Secondary School</td>
              <td className="col-cgpa">8.3/10.0</td>
            </tr>
            <tr>
              <td>2019-2020</td>
              <td>Matriculation (Class X)</td>
              <td>Sarala Birla Public School</td>
              <td className="col-cgpa">8.3/10.0</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ----------------- INTERNSHIPS ----------------- */}
      <section className="ar-section">
        <div className="ar-sec-title-wrap">
          <h2 className="ar-sec-title">INTERNSHIPS</h2>
        </div>

        {/* Item 1 */}
        <div className="ar-entry">
          <div className="ar-entry-header">
            <span className="ar-entry-title">Software Developer Intern</span>
            <span className="ar-entry-date">June 2026 - August 2026</span>
          </div>
          <div className="ar-entry-sub">
            <span className="ar-entry-company">Sri Gangotri Industries</span>
            <span className="ar-entry-loc">Ranchi</span>
          </div>
          <p className="ar-entry-summary-line">
            Software Developer Intern | Sri Gangotri Industries (Rs.8 Cr/yr, multi-state manufacturer) Ranchi, June 2026 - August 2026
          </p>
          <ul className="ar-bullets">
            <li>
              <strong>Built an internal operations platform (Python, SQL)</strong> centralizing production, attendance, distribution, and government-supply data across <strong>2 factories and 5 states</strong>, replacing manual Excel/WhatsApp processes with a single source of truth for management.
            </li>
            <li>
              <strong>Implemented role-based access control for 30+ users</strong> across multiple roles, enforcing data governance by state and function so each team sees only its own data and records stay consistent across <strong>2 factories and 5 states</strong>.
            </li>
            <li>
              <strong>Automated daily production and attendance tracking for 50+ workers</strong>, cutting reporting time by <strong>40%</strong> and improving data accuracy by <strong>75%</strong>, with dashboards and a government-supply tracker enabling data-driven decisions for management.
            </li>
          </ul>
        </div>

        {/* Item 2 */}
        <div className="ar-entry">
          <div className="ar-entry-header">
            <span className="ar-entry-title">Founding Engineer</span>
            <span className="ar-entry-date">January 2026 - May 2026</span>
          </div>
          <div className="ar-entry-sub">
            <span className="ar-entry-company">Utsedha Unmanned pvt ltd</span>
            <span className="ar-entry-loc">Sonipat</span>
          </div>
          <p className="ar-entry-summary-line">
            Founding Engineer | Utsedha Unmanned Private Limited Sonipat, January 2026 - May 2026
          </p>
          <ul className="ar-bullets">
            <li>
              <strong>Developed autonomous surface-detection and spray-triggering workflows</strong> for a UAV-based painting system, reducing painting task time from <strong>48 hours to 1 hour (~98% reduction)</strong> and replacing a largely manual process with an automated pipeline.
            </li>
            <li>
              <strong>Built and deployed the company website end-to-end</strong>, implementing <strong>5+ pages</strong>, a responsive UI, and a customer inquiry form to establish its digital presence and give prospective clients a direct way to get in touch.
            </li>
            <li>
              <strong>Contributed to customer acquisition</strong>, securing <strong>1 painting/testing engagement worth Rs.6 lakh</strong> for the company's UAV painting solution, [add your role, e.g. client demos or technical discussions].
            </li>
          </ul>
        </div>
      </section>

      {/* ----------------- PROJECTS ----------------- */}
      <section className="ar-section">
        <div className="ar-sec-title-wrap">
          <h2 className="ar-sec-title">PROJECTS</h2>
        </div>

        {/* Project 1 */}
        <div className="ar-entry">
          <div className="ar-entry-header">
            <span className="ar-entry-title">
              Verdict ( <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="ar-blue-link">Github</a> ) ( <a href="https://demo.com" target="_blank" rel="noopener noreferrer" className="ar-blue-link">Demo</a> )
            </span>
            <span className="ar-entry-date">August 2026</span>
          </div>
          <p className="ar-entry-summary-line">
            Verdict | React, FastAPI, Python, PostgreSQL, Supabase, GPT-4o, Tavily API August 2026
          </p>
          <ul className="ar-bullets">
            <li>
              <strong>Built a multi-agent AI platform for startup evaluation</strong> that combines live market research, adversarial debate, and automated scoring to turn a raw startup idea into a structured, data-backed verdict with a final score and recommendation.
            </li>
            <li>
              <strong>Integrated the Tavily Search API and GPT-4o</strong> to generate structured, real-time market insights, grounding every agent's argument in live sources for each evaluation instead of static model knowledge, so verdicts reflect current market conditions.
            </li>
            <li>
              <strong>Developed opposing Growth and Risk AI agents</strong> that debate startup viability across <strong>3 criteria</strong> (market timing, defensibility, and feasibility), producing a balanced, evidence-backed score and surfacing key risks rather than a single-model opinion.
            </li>
            <li>
              <strong>Engineered a FastAPI backend with PostgreSQL (Supabase)</strong> and a React dashboard for evaluation scorecards and analytics, storing past evaluations so users can revisit and compare verdicts, and deployed the full stack live on Vercel.
            </li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="ar-entry">
          <div className="ar-entry-header">
            <span className="ar-entry-title">
              Hiraeth F1 ( <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="ar-blue-link">Github</a> ) ( <a href="https://demo.com" target="_blank" rel="noopener noreferrer" className="ar-blue-link">Demo</a> )
            </span>
            <span className="ar-entry-date">April 2026</span>
          </div>
          <p className="ar-entry-summary-line">
            Hiraeth F1 | Python, Streamlit, Scikit-learn, LangChain, Groq API, Plotly April 2026
          </p>
          <ul className="ar-bullets">
            <li>
              <strong>Built a vehicle maintenance prediction system using a Decision Tree + Logistic Regression ensemble</strong> on F1 telemetry with <strong>3 engineered stress features</strong>, averaging both models into a <strong>0-1 risk score</strong> mapped to <strong>Low/Medium/High</strong> service tiers.
            </li>
            <li>
              <strong>Integrated LLaMA 3.1 8B (Groq API) with a custom RAG pipeline</strong> that retrieves the <strong>top 20 matching rules</strong> from a <strong>5-category maintenance knowledge base</strong> (engine, brakes, battery, oil, general) to generate structured fleet service recommendations.
            </li>
            <li>
              <strong>Enforced hallucination-resistant outputs through strict prompting</strong>, a fixed <strong>2-section format</strong> (health summary and action plan), and an evidence panel showing retrieved guidelines, and deployed the Streamlit dashboard live on Render.
            </li>
          </ul>
        </div>
      </section>

      {/* ----------------- SKILLS ----------------- */}
      <section className="ar-section">
        <div className="ar-sec-title-wrap">
          <h2 className="ar-sec-title">SKILLS</h2>
        </div>
        <ul className="ar-bullets ar-skills-bullets">
          <li><strong>Computer Language</strong>: Python, SQL, C++, TypeScript, HTML, CSS</li>
          <li><strong>Databases &amp; Data Tools</strong>: MySQL, PostgreSQL, MongoDB, Excel, Spreadsheet, Tableau</li>
          <li><strong>AI / ML</strong>: GenAI, Deep Learning (DL), Scikit-learn, PyTorch, TensorFlow, LangChain, LangGraph, Natural Language Processing</li>
          <li><strong>Frameworks &amp; Libraries</strong>: OpenCV, Pandas, React Native, React, Node.js, Next.js, Express JS, Tailwind CSS</li>
          <li><strong>Cloud &amp; DevOps</strong>: AWS, Git and Github, GitHub Actions, Docker, Linux</li>
        </ul>
      </section>

      {/* ----------------- EXTRA-CURRICULAR ACTIVITIES ----------------- */}
      <section className="ar-section ar-sec-last">
        <div className="ar-sec-title-wrap">
          <h2 className="ar-sec-title">EXTRA-CURRICULAR ACTIVITIES</h2>
        </div>
        <div className="ar-activity-link-wrap">
          <a href="#link" className="ar-blue-underlined">LINK</a>
        </div>
        <ul className="ar-bullets">
          <li>
            <strong>Ranked 63rd out of 500+ teams across India in NIDAR</strong> and placed in the <strong>top 20 out of 800+ teams at ISRO IROC-U 2026</strong>, two national-level technical competitions, working as a team to design, build, and test solutions under tight deadlines.
          </li>
          <li>
            <strong>Served as Vice President of the Robotics Club</strong>, leading hands-on work on multiple robotics projects, coordinating members and schedules, and successfully organizing <strong>6+ robotics events</strong> at the college for students across batches.
          </li>
          <li>
            <strong>Freelanced on 4 apps and websites</strong>, including the Kiddoo app and the Femina, Mimer, and Utsedha websites, building them with <strong>React Native, React, Next.js, and Node.js</strong> and delivering each from design to deployment for clients.
          </li>
        </ul>
      </section>
    </article>
  )
}

