// import Contact from './components/Contact';
// import Experience from './components/Experience';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import { PORTFOLIO_DATA } from './data/portfolioData';

// export default function App() {
//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500 selection:text-white">
//       <a
//         href="#main-content"
//         className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-300"
//       >
//         Skip to content
//       </a>

//       <Header name={PORTFOLIO_DATA.name} />

//       <main id="main-content" className="mx-auto max-w-5xl px-6">
//         <Hero
//           name={PORTFOLIO_DATA.name}
//           role={PORTFOLIO_DATA.role}
//           availability={PORTFOLIO_DATA.availability}
//           tagline={PORTFOLIO_DATA.tagline}
//           github={PORTFOLIO_DATA.github}
//           linkedin={PORTFOLIO_DATA.linkedin}
//         />

//         <Projects projects={PORTFOLIO_DATA.projects} />

//         <Experience experience={PORTFOLIO_DATA.experience} />

//         <Skills skills={PORTFOLIO_DATA.skills} />

//         <Contact email={PORTFOLIO_DATA.email} />
//       </main>

//       <Footer name={PORTFOLIO_DATA.name} />
//     </div>
//   );
// }

import React, { useState } from 'react';
import {
  Code2,
  ExternalLink,
  Mail,
  Terminal,
  Briefcase,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Phone,
  GraduationCap,
  Sparkles,
  Download,
  Zap,
  Server,
  Component,
  FolderGit2,
} from 'lucide-react';

// Make sure you save your photo at src/assets/profile.jpg
import profilePhoto from './assets/profile.jpg';
import resumePdf from './assets/Vishnu_Adithyan_Resume.pdf';

const LinkedinIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const GithubIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const PORTFOLIO_DATA = {
  name: 'Vishnu Adithyan',
  shortName: 'Vishnu',
  role: 'Frontend Software Engineer',
  location: 'Bangalore, Karnataka, India',
  phone: '+91 6382429920',
  email: 'vishnuadithyan413@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vishnu-adithyan-595b31213',
  github: 'https://github.com/Vishnuadithyan',
  resumeUrl: resumePdf,
  summary:
    'Frontend Software Engineer with 2+ years of experience building and maintaining enterprise-scale web applications using React.js, TypeScript, JavaScript (ES6+), and Redux Toolkit. Specialized in Micro-Frontend architecture, Vite Module Federation, shared UI/API packages, and high-impact bundle optimization.',
  metrics: [
    {
      value: '94%',
      label: 'Bundle Size Reduction',
      detail: '16 MB → 1 MB via lazy loading',
      icon: Zap,
    },
    {
      value: '1,000+',
      label: 'API Integrations',
      detail: 'Standardized shared API utilities',
      icon: Server,
    },
    {
      value: '50–100',
      label: 'Reusable UI Components',
      detail: 'Centralized shared library',
      icon: Component,
    },
    {
      value: '4+',
      label: 'Enterprise Apps Owned',
      detail: 'Host + 3–4 Micro-Frontends',
      icon: FolderGit2,
    },
  ],
  skills: {
    Frontend: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS'],
    'Architecture & Monorepos': [
      'Micro-Frontends',
      'Vite Module Federation',
      'Component-Driven Architecture',
      'Monorepos',
      'Turborepo',
      'Nx',
      'Shared Component Packages',
    ],
    'State Management': ['Redux', 'Redux Toolkit', 'Context API', 'React Query', 'TanStack Query'],
    'UI & Styling': ['Material-UI (MUI)', 'Tailwind CSS', 'Styled Components', 'Bootstrap'],
    'Forms & APIs': ['Formik', 'Yup', 'RESTful APIs', 'Axios', 'WebSockets', 'Shared API Utilities'],
    'Build & Code Quality': [
      'Vite',
      'Webpack 5',
      'SonarQube',
      'ESLint',
      'Prettier',
      'Git / GitHub / GitLab',
    ],
  },
  experience: [
    {
      role: 'Software Engineer — Frontend Development',
      company: 'PION Global',
      location: 'Bangalore, India',
      period: 'April 2024 – November 2026',
      highlights: [
        'Optimized frontend application performance by implementing component lazy loading, cutting initial bundle size from ~16 MB to 1 MB (94% reduction).',
        'Architected and contributed to a Micro-Frontend ecosystem comprising 1 centralized Host application and 3–4 micro-frontend apps using Vite Module Federation.',
        'Owned end-to-end development and maintenance of 4+ enterprise applications, shipping new features, enhancements, and production support.',
        'Integrated 1,000+ RESTful APIs and co-developed a common API utility package to standardize network communication across multiple repositories.',
        'Built and maintained 50–100 reusable UI components inside a centralized shared library used daily by 5–10 developers, managing version releases and compatibility checks.',
        'Modernized legacy codebases by migrating Material-UI implementations and upgrading to newer React and React Router versions.',
        'Engineered complex multi-step forms with Formik & Yup, role-based access control (RBAC), and real-time WebSocket data streams.',
        'Maintained high code quality by resolving SonarQube cognitive complexity issues and debugging 10–20 critical production issues via root-cause analysis.',
      ],
    },
  ],
  projects: [
    {
      title: 'Enterprise Project Delivery & Management Platform',
      category: 'Micro-Frontend',
      badge: 'Real-Time Enterprise',
      description:
        'Full-featured project and task management platform built to track defects, change requests, product features, and use cases across engineering teams.',
      bullets: [
        'Integrated live WebSocket streams for instant status updates across collaborative boards.',
        'Built interactive analytics dashboards giving leadership real-time visibility into sprint velocity and project progress.',
      ],
      tech: ['React.js', 'Redux Toolkit', 'WebSockets', 'Micro-Frontend Architecture'],
      liveUrl: '#contact',
    },
    {
      title: 'Online Assessment & Examination Engine',
      category: 'Enterprise',
      badge: 'High-Scale Assessment',
      description:
        'Configurable assessment and examination platform supporting dynamic test templates, competency frameworks, question banks, and participant assignment.',
      bullets: [
        'Engineered timed examination delivery interfaces with automated score calculation and candidate reporting.',
        'Integrated modular REST APIs inside a scalable micro-frontend architecture.',
      ],
      tech: ['React.js', 'Redux Toolkit', 'REST APIs', 'Micro-Frontend Architecture'],
      liveUrl: '#contact',
    },
    {
      title: 'Multi-Tenant Organization Websites & CMS',
      category: 'Next.js',
      badge: 'Multi-Tenant CMS',
      description:
        'Centralized content management system and SEO-friendly organizational portals enabling dynamic administration across multiple tenant domains.',
      bullets: [
        'Built reusable frontend building blocks for custom domains, dynamic navigation menus, and page content.',
        'Delivered responsive, accessible interfaces powered by Next.js and Material-UI.',
      ],
      tech: ['Next.js', 'React.js', 'Material-UI', 'Multi-Tenant Architecture'],
      liveUrl: '#contact',
    },
  ],
  education: {
    degree: 'Bachelor of Engineering (B.E) in Computer Science',
    institution: 'SNS College of Engineering, Tamil Nadu',
    year: '2023',
  },
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copied, setCopied] = useState(false);

  const categories = ['All', 'Micro-Frontend', 'Enterprise', 'Next.js'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((project) => project.category === selectedCategory);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-200 selection:bg-indigo-500 selection:text-white">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-indigo-600/20 blur-[128px]" />
        <div className="absolute top-1/3 right-10 h-96 w-96 rounded-full bg-cyan-500/15 blur-[128px]" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-purple-600/15 blur-[128px]" />
      </div>

      {/* Sticky Glass Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25">
              <Terminal className="h-5 w-5" />
            </span>
            <span>
              {PORTFOLIO_DATA.shortName}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                .dev
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#projects" className="transition hover:text-indigo-400">
              Projects
            </a>
            <a href="#experience" className="transition hover:text-indigo-400">
              Experience
            </a>
            <a href="#skills" className="transition hover:text-indigo-400">
              Skills
            </a>
            <a href="#education" className="transition hover:text-indigo-400">
              Education
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:from-indigo-500 hover:to-cyan-500"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero Section with Photo */}
        <section className="py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Text Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300">
                <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
                Available for Frontend & Full-Stack Roles • Bangalore
              </div>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:leading-[1.1]">
                Hi, I’m{' '}
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  {PORTFOLIO_DATA.name}
                </span>
                <span className="mt-2 block bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-2xl sm:text-4xl">
                  {PORTFOLIO_DATA.role}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {PORTFOLIO_DATA.summary}
              </p>

              {/* Quick Contact Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400 sm:text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  {PORTFOLIO_DATA.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="h-4 w-4 text-cyan-400" />
                  {PORTFOLIO_DATA.phone}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Explore Projects
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href={PORTFOLIO_DATA.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-indigo-400/50 hover:bg-white/10"
                >
                  <LinkedinIcon className="h-4 w-4 text-sky-400" />
                  LinkedIn
                </a>

                <a
                  href={PORTFOLIO_DATA.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-indigo-400/50 hover:bg-white/10"
                >
                  <GithubIcon className="h-4 w-4 text-sky-400" />
                  Github
                </a>

                <a
                  href={PORTFOLIO_DATA.resumeUrl}
                  download="Vishnu_Adithyan_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-5 py-3 text-sm font-medium text-indigo-300 transition hover:-translate-y-0.5 hover:bg-indigo-500/20"
                >
                  <Download className="h-4 w-4" />
                  Resume PDF
                </a>
              </div>
            </div>

            {/* Right Photo Card */}
            <div className="flex justify-center lg:col-span-5 lg:justify-end">
              <div className="group relative w-72 sm:w-80">
                {/* Glowing Gradient Ring Behind Photo */}
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-indigo-500 via-cyan-400 to-emerald-400 opacity-75 blur-lg transition duration-500 group-hover:opacity-100" />

                <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-900 p-2 shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Vishnu Adithyan P"
                    className="h-80 w-full rounded-2xl object-cover object-top transition duration-500 group-hover:scale-[1.02] sm:h-96"
                  />

                  {/* Floating Experience Pill */}
                  <div className="mt-2 flex items-center justify-between rounded-2xl bg-slate-950/90 px-4 py-3 backdrop-blur-md">
                    <div>
                      <p className="text-xs font-medium text-slate-400">Experience</p>
                      <p className="text-sm font-bold text-white">2.7+ Years in React & MFE</p>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                      <Sparkles className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Metrics Strip */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PORTFOLIO_DATA.metrics.map((metric) => {
              const IconComponent = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="group rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-sm transition hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-slate-900"
                >
                  <div className="flex items-center justify-between">
                    <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-3xl font-extrabold text-transparent">
                      {metric.value}
                    </span>
                    <span className="rounded-lg bg-white/5 p-2 text-slate-400 transition group-hover:text-indigo-400">
                      <IconComponent className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-white">{metric.label}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{metric.detail}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="border-t border-white/10 py-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                Portfolio Showcase
              </span>
              <h2 className="mt-1 flex items-center gap-2.5 text-2xl font-bold text-white sm:text-3xl">
                <Code2 className="h-7 w-7 text-indigo-400" />
                Featured Enterprise Projects
              </h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
                      : 'border border-white/10 bg-slate-900/80 text-slate-400 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-1 text-xs font-semibold text-indigo-300">
                      {project.badge}
                    </span>
                    <a
                      href={project.liveUrl}
                      aria-label="Inquire about project"
                      className="rounded-lg p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white transition group-hover:text-cyan-300">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-xs leading-relaxed text-slate-300">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="border-t border-white/10 py-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Career Journey
          </span>
          <h2 className="mt-1 flex items-center gap-2.5 text-2xl font-bold text-white sm:text-3xl">
            <Briefcase className="h-7 w-7 text-indigo-400" />
            Professional Experience
          </h2>

          <div className="mt-10 space-y-8">
            {PORTFOLIO_DATA.experience.map((exp) => (
              <div
                key={exp.company}
                className="relative rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-sm sm:p-8"
              >
                <div className="flex flex-col justify-between gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-xl font-bold text-white sm:text-2xl">{exp.role}</h3>
                    <p className="mt-1 text-base font-semibold text-cyan-400">
                      {exp.company} • <span className="text-slate-400 font-normal">{exp.location}</span>
                    </p>
                  </div>
                  <span className="inline-flex w-fit items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-300">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-6 grid gap-3.5 text-sm leading-relaxed text-slate-300 md:grid-cols-2">
                  {exp.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/5 bg-slate-950/60 p-4"
                    >
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="border-t border-white/10 py-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Core Competencies
          </span>
          <h2 className="mt-1 flex items-center gap-2.5 text-2xl font-bold text-white sm:text-3xl">
            <Layers className="h-7 w-7 text-indigo-400" />
            Technical Skills & Architecture
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(PORTFOLIO_DATA.skills).map(([group, items]) => (
              <div
                key={group}
                className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition hover:border-indigo-500/40"
              >
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  {group}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-indigo-400/50 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="border-t border-white/10 py-16">
          <div className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900/90 to-indigo-950/30 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400">
                <GraduationCap className="h-6 w-6" />
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  Education
                </span>
                <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                  {PORTFOLIO_DATA.education.degree}
                </h3>
                <p className="text-sm text-slate-400">{PORTFOLIO_DATA.education.institution}</p>
              </div>
            </div>
            <span className="w-fit rounded-xl border border-white/10 bg-slate-950 px-4 py-2 text-sm font-bold text-cyan-400">
              Graduated {PORTFOLIO_DATA.education.year}
            </span>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t border-white/10 py-24">
          <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 p-8 text-center sm:p-14">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Build Scalable Web Experiences?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              I’m currently open to Frontend and Full-Stack Engineering opportunities in Bangalore or remote. Feel free to reach out via email, phone, or LinkedIn.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${PORTFOLIO_DATA.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:from-indigo-500 hover:to-cyan-500"
              >
                <Mail className="h-4 w-4" />
                {PORTFOLIO_DATA.email}
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-slate-950/80 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-900"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Email Copied!
                  </>
                ) : (
                  'Copy Email'
                )}
              </button>

              <a
                href={`tel:${PORTFOLIO_DATA.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-slate-950/80 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-900"
              >
                <Phone className="h-4 w-4 text-cyan-400" />
                {PORTFOLIO_DATA.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Engineered with React, Vite & Tailwind CSS.
      </footer>
    </div>
  );
}