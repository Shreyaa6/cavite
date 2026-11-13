import type { ResumeData } from '../types/resume'

export const emptyResume: ResumeData = {
  id: 'empty-template',
  fullName: '[ Your Full Name ]',
  targetTitle: '[ Target Executive / Engineering Role ]',
  email: 'your.name@domain.com',
  phone: '+1 (555) 000-0000',
  location: 'City, Country · Open to Remote',
  website: 'portfolio.dev',
  github: 'github.com/yourhandle',
  linkedin: 'linkedin.com/in/yourhandle',
  summary:
    '[ Click to curate: Craft a compelling 3-line executive narrative synthesizing your technical mastery, business impact, and leadership trajectory... ]',
  experiences: [
    {
      id: 'empty-exp-1',
      company: '[ Target Company Name / Scale-up ]',
      role: '[ Senior / Lead Position Title ]',
      period: '2023 — Present',
      location: 'City, Country',
      highlights: [
        '[ Uncurated bullet point: Add your key project leadership wins here ]',
        '[ Missing metrics: Quantify performance gains, latency reductions, or revenue impact ]',
        '[ Architectural ownership: Describe system scale, tech stack, and cross-team influence ]',
      ],
      metrics: ['+00%', '0.0M', '$0.0M'],
    },
    {
      id: 'empty-exp-2',
      company: '[ Previous Tech Organization ]',
      role: '[ Software Engineer / Specialist ]',
      period: '2021 — 2023',
      location: 'City, Country',
      highlights: [
        '[ Unfilled milestone: Replaced legacy pipeline with modern reactive frontend ]',
        '[ Mentorship & culture: Guided junior developers and introduced test coverage ]',
      ],
      metrics: ['+00%'],
    },
  ],
  education: [
    {
      id: 'empty-edu-1',
      degree: '[ Degree Title e.g. B.S. in Computer Science ]',
      school: '[ University or Academic Institution ]',
      year: '2017 — 2021',
      honors: '[ Honors / Dean’s List / Distinction ]',
      location: 'Academic Campus',
    },
  ],
  skills: [
    {
      category: 'Core Engineering',
      items: ['[ Core Language 1 ]', '[ Framework 2 ]', '[ Cloud Provider 3 ]'],
    },
    {
      category: 'AI & Systems',
      items: ['[ LLM Orchestration ]', '[ Vector Databases ]', '[ Distributed Systems ]'],
    },
    {
      category: 'Methodologies',
      items: ['[ System Design ]', '[ CI/CD Automation ]', '[ Technical Mentorship ]'],
    },
  ],
  atsScore: {
    overall: 34,
    breakdown: {
      actionVerbs: 28,
      quantifiedMetrics: 15,
      keywordMatch: 42,
      brevityAndFormatting: 52,
    },
  },
  templateName: 'Blank Wireframe Draft',
}

export const curatedPersonas: ResumeData[] = [
  {
    id: 'shreya-lead-ai',
    fullName: 'Shreya Narayani',
    targetTitle: 'Lead AI Systems & Full-Stack Architect',
    email: 'shreya.narayani@cavite.dev',
    phone: '+1 (415) 890-4219',
    location: 'San Francisco, CA · Remote Preferred',
    website: 'shreyanarayani.dev',
    github: 'github.com/shreyanarayani',
    linkedin: 'linkedin.com/in/shreyanarayani',
    summary:
      'Staff-caliber systems architect with 6+ years spearheading high-throughput reactive applications, distributed AI inference pipelines, and developer experience platforms. Track record of scaling systems to 1.8M daily active users while reducing cloud compute expenditures by $4.2M annually.',
    experiences: [
      {
        id: 'exp-1',
        company: 'Vertex AI Labs',
        role: 'Lead Systems Architect & Core Engineer',
        period: '2024 — Present',
        location: 'San Francisco, CA',
        highlights: [
          'Architected and deployed multi-agent autonomous runtime on Kubernetes, reducing model inference p99 latency by 42% across 12M monthly queries.',
          'Spearheaded migration to React 19 Compiler + TypeScript 6 reactive web studio, slashing initial bundle size by 38% and achieving 99+ Core Web Vitals.',
          'Established automated continuous evaluation harness for LLM hallucination scoring, increasing generation reliability from 88% to 99.4%.',
        ],
        metrics: ['-42% Latency', '1.8M DAU', '99.4% Eval'],
      },
      {
        id: 'exp-2',
        company: 'Aurora Distributed Cloud',
        role: 'Senior Full-Stack & Platform Engineer',
        period: '2021 — 2024',
        location: 'Seattle, WA (Remote)',
        highlights: [
          'Engineered real-time telemetry streaming mesh using Node.js, WebSockets, and Apache Kafka, processing 140,000 events/sec with zero packet loss.',
          'Designed modular design system and headless UI component primitives adopted by 16 internal engineering pods, shortening sprint velocity by 25%.',
          'Mentored 14 junior and mid-level software engineers through weekly architectural design reviews and structured pairing sessions.',
        ],
        metrics: ['140k evt/s', '+25% Velocity', '14 Mentees'],
      },
      {
        id: 'exp-3',
        company: 'HyperScale Systems',
        role: 'Full-Stack Software Engineer',
        period: '2019 — 2021',
        location: 'Austin, TX',
        highlights: [
          'Constructed GraphQL federated gateway uniting 24 disparate microservices, driving API response cache hit ratio to 94.2%.',
          'Automated zero-downtime CI/CD canary deployment pipelines with GitHub Actions, reducing release cycle time from 3 days to 18 minutes.',
        ],
        metrics: ['94.2% Cache', '18 min Deploy'],
      },
    ],
    education: [
      {
        id: 'edu-1',
        degree: 'B.S. in Computer Science & Engineering',
        school: 'University of Washington',
        year: '2015 — 2019',
        honors: 'Summa Cum Laude · Presidential Scholar · GPA 3.94/4.0',
        location: 'Seattle, WA',
      },
    ],
    skills: [
      {
        category: 'Core Engineering',
        items: ['TypeScript', 'React 19', 'Next.js', 'Node.js', 'Python', 'Go', 'GraphQL'],
      },
      {
        category: 'AI & Data Platforms',
        items: ['LangChain', 'LlamaIndex', 'vLLM', 'PostgreSQL', 'Redis', 'Qdrant / Pinecone'],
      },
      {
        category: 'Infrastructure & DevOps',
        items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Terraform', 'Kafka', 'CI/CD Pipelines'],
      },
      {
        category: 'Leadership & Architecture',
        items: ['System Design', 'Team Mentorship', 'RFC Leadership', 'Agile / SCRUM', 'ATS Optimization'],
      },
    ],
    atsScore: {
      overall: 99,
      breakdown: {
        actionVerbs: 100,
        quantifiedMetrics: 98,
        keywordMatch: 99,
        brevityAndFormatting: 99,
      },
    },
    templateName: 'Executive AI Architect',
  },
  {
    id: 'shreya-staff-platform',
    fullName: 'Shreya Narayani',
    targetTitle: 'Staff Platform & Cloud Infrastructure Engineer',
    email: 'shreya.narayani@cavite.dev',
    phone: '+1 (415) 890-4219',
    location: 'San Francisco, CA · Remote',
    website: 'shreyanarayani.dev',
    github: 'github.com/shreyanarayani',
    linkedin: 'linkedin.com/in/shreyanarayani',
    summary:
      'Platform infrastructure pioneer specializing in multi-region Kubernetes topologies, observability pipelines, and developer developer-first tooling. Built foundational cloud primitives supporting $180M ARR product portfolios with five-nines (99.999%) availability.',
    experiences: [
      {
        id: 'plat-1',
        company: 'CloudScale Global',
        role: 'Staff Infrastructure & Platform Architect',
        period: '2023 — Present',
        location: 'San Francisco, CA',
        highlights: [
          'Engineered global multi-cluster service mesh across AWS & GCP using Istio and Envoy, trimming cross-region egress overhead by $1.8M/year.',
          'Rolled out internal developer platform (IDP) with Backstage, slashing developer environment provisioning from 4 hours to under 2 minutes.',
        ],
        metrics: ['$1.8M Saved', '99.999% SLA', '<2 min Setup'],
      },
      {
        id: 'plat-2',
        company: 'DataStream Core',
        role: 'Senior Site Reliability & Distributed Systems Engineer',
        period: '2020 — 2023',
        location: 'San Francisco, CA',
        highlights: [
          'Orchestrated multi-petabyte real-time event indexing cluster on Apache Kafka & ClickHouse with sub-50ms query turnaround.',
          'Pioneered Chaos Engineering game-days uncovering 28 critical resilience bottlenecks prior to peak Black Friday traffic.',
        ],
        metrics: ['<50ms Query', '28 Failovers', '3.4 PB Data'],
      },
    ],
    education: [
      {
        id: 'edu-2',
        degree: 'B.S. in Computer Science',
        school: 'University of Washington',
        year: '2015 — 2019',
        honors: 'Summa Cum Laude · Honors Thesis in Distributed Consensus',
        location: 'Seattle, WA',
      },
    ],
    skills: [
      {
        category: 'Infrastructure',
        items: ['Kubernetes', 'Terraform', 'AWS', 'GCP', 'Istio', 'Helm', 'ArgoCD'],
      },
      {
        category: 'Data & Telemetry',
        items: ['Kafka', 'ClickHouse', 'Prometheus', 'Grafana', 'OpenTelemetry', 'Postgres'],
      },
      {
        category: 'Languages',
        items: ['Go', 'Rust', 'Python', 'TypeScript', 'Bash / eBPF'],
      },
    ],
    atsScore: {
      overall: 98,
      breakdown: {
        actionVerbs: 98,
        quantifiedMetrics: 99,
        keywordMatch: 97,
        brevityAndFormatting: 99,
      },
    },
    templateName: 'Staff Cloud Infrastructure',
  },
  {
    id: 'shreya-product-lead',
    fullName: 'Shreya Narayani',
    targetTitle: 'Founding Product & Frontend Engineering Lead',
    email: 'shreya.narayani@cavite.dev',
    phone: '+1 (415) 890-4219',
    location: 'San Francisco, CA · Hybrid',
    website: 'shreyanarayani.dev',
    github: 'github.com/shreyanarayani',
    linkedin: 'linkedin.com/in/shreyanarayani',
    summary:
      'Product-minded engineering lead with a deep obsession for craft, micro-interactions, and design systems. Led 0-to-1 product development for consumer and enterprise SaaS generating $14M in net new ARR within 18 months.',
    experiences: [
      {
        id: 'prod-1',
        company: 'Veloce Studio',
        role: 'Founding Lead Product Engineer',
        period: '2023 — Present',
        location: 'San Francisco, CA',
        highlights: [
          'Led end-to-end frontend architecture for collaborative canvas editor handling 60 FPS rendering of 10,000+ interactive nodes via WebGL.',
          'Partnered directly with CPO to execute rapid growth experiments, amplifying organic signup activation rate from 14% to 38.6%.',
        ],
        metrics: ['60 FPS WebGL', '+24.6% Conversion', '$14M ARR'],
      },
    ],
    education: [
      {
        id: 'edu-3',
        degree: 'B.S. in Computer Science & Interaction Design',
        school: 'University of Washington',
        year: '2015 — 2019',
        honors: 'Dean’s Medalist for Design & Computational Innovation',
        location: 'Seattle, WA',
      },
    ],
    skills: [
      {
        category: 'Frontend Craft',
        items: ['React 19', 'Next.js', 'WebGL / Three.js', 'TailwindCSS', 'Framer Motion', 'Web Workers'],
      },
      {
        category: 'Product & Design',
        items: ['Figma to Code', 'Design Tokens', 'A/B Growth Experiments', 'Telemetry & Funnel Analysis'],
      },
    ],
    atsScore: {
      overall: 97,
      breakdown: {
        actionVerbs: 96,
        quantifiedMetrics: 97,
        keywordMatch: 98,
        brevityAndFormatting: 98,
      },
    },
    templateName: 'Product & Creative Lead',
  },
  {
    id: 'shreya-eng-director',
    fullName: 'Shreya Narayani',
    targetTitle: 'Engineering Director & Technology Strategist',
    email: 'shreya.narayani@cavite.dev',
    phone: '+1 (415) 890-4219',
    location: 'San Francisco, CA · Global Executive',
    website: 'shreyanarayani.dev',
    github: 'github.com/shreyanarayani',
    linkedin: 'linkedin.com/in/shreyanarayani',
    summary:
      'Engineering executive with proven capability building, scaling, and nurturing top-1% engineering organizations across 3 continents. Managed $22M annual engineering budgets, scaling headcount from 12 to 85 with 96% retention.',
    experiences: [
      {
        id: 'dir-1',
        company: 'Apex Horizon Tech',
        role: 'Director of Engineering, Core Platforms',
        period: '2022 — Present',
        location: 'San Francisco, CA',
        highlights: [
          'Expanded engineering division from 12 to 85 engineers across 6 specialized squads with industry-leading 96% annual retention.',
          'Restructured engineering career ladders, compensation bands, and performance calibration cycles, cutting time-to-hire by 45%.',
        ],
        metrics: ['85 Engineers', '96% Retention', '-45% Time-to-Hire'],
      },
    ],
    education: [
      {
        id: 'edu-4',
        degree: 'B.S. in Computer Science',
        school: 'University of Washington',
        year: '2015 — 2019',
        honors: 'Presidential Scholar',
        location: 'Seattle, WA',
      },
    ],
    skills: [
      {
        category: 'Executive Leadership',
        items: ['Strategic Headcount Planning', 'Budget Management ($20M+)', 'Org Design', 'Culture & Retention'],
      },
      {
        category: 'Technical Strategy',
        items: ['Enterprise Cloud Architecture', 'AI Roadmapping', 'Vendor Procurement', 'Security Compliance'],
      },
    ],
    atsScore: {
      overall: 99,
      breakdown: {
        actionVerbs: 100,
        quantifiedMetrics: 100,
        keywordMatch: 98,
        brevityAndFormatting: 99,
      },
    },
    templateName: 'Engineering Director',
  },
]
