export const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const PORTFOLIO_DATA = {
  name: 'Vishnu Adithyan',
  role: 'Frontend Software Engineer',
  availability: 'Open to Frontend & Full-Stack Opportunities',
  tagline:
    'Building scalable enterprise web applications, modular micro-frontends, and crisp, high-performance user interfaces.',
  // Replace with your real contact details & profile URLs
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  skills: {
    Frontend: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 / CSS3'],
    'Architecture & State': [
      'Micro-Frontends (Module Federation)',
      'Redux Toolkit',
      'TanStack Query',
      'Context API',
      'Vite',
    ],
    'UI & Styling': ['Tailwind CSS', 'Material-UI (MUI)', 'Styled Components', 'Responsive Design'],
    'Tools & Quality': ['REST APIs / WebSockets', 'React Testing Library', 'SonarQube', 'Git / GitHub'],
  },
  experience: [
    {
      role: 'Software Engineer (Frontend)',
      company: 'Pion Global',
      period: 'Apr 2024 – Nov 2026',
      highlights: [
        'Architected modular micro-frontend applications powered by Vite and Module Federation.',
        'Engineered multi-role enterprise dashboards, real-time WebSocket tracking modules, and dynamic assessment engines.',
        'Maintained strict code quality and performance standards across React, TypeScript, and MUI codebases.',
      ],
    },
  ],
  projects: [
    {
      title: 'Enterprise Project Delivery Platform',
      category: 'Enterprise',
      description:
        'Real-time project management and analytics dashboard featuring live WebSocket updates, defect tracking, and role-based KPI views.',
      tech: ['React.js', 'TypeScript', 'Redux Toolkit', 'MUI', 'WebSockets'],
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Recruitment Management System (RMS)',
      category: 'Dashboard',
      description:
        'Multi-role recruitment portal with recruiter, manager, and operations analytics, skill demand insights, and priority queues.',
      tech: ['React.js', 'Redux Toolkit', 'Material-UI', 'REST API'],
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Online Assessment & Exam Engine',
      category: 'Web App',
      description:
        'Timer-restricted examination platform supporting dynamic competency templates, browser proctoring hooks, and instant candidate reports.',
      tech: ['React.js', 'TypeScript', 'Formik', 'Yup'],
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Multi-Tenant CMS & Career Portal',
      category: 'Web App',
      description:
        'SEO-optimized organizational web portal allowing dynamic domain, navigation menu, and content administration.',
      tech: ['Next.js', 'React', 'Material-UI', 'SEO'],
      liveUrl: '#',
      repoUrl: '#',
    },
  ],
};

/** Returns true only when a URL is configured with a real destination. */
export function hasValidUrl(url) {
  return Boolean(url && url !== '#' && !url.includes('yourusername'));
}
