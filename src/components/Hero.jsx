import { ArrowUpRight } from 'lucide-react';
import { hasValidUrl } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from './Icons';

export default function Hero({ name, role, availability, tagline, github, linkedin }) {
  const showGithub = hasValidUrl(github);
  const showLinkedin = hasValidUrl(linkedin);

  return (
    <section className="py-24 sm:py-32">
      <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
        {availability}
      </div>

      <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
        Hi, I’m {name}.
        <span className="mt-2 block bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
          {role}
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">{tagline}</p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          View My Work
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>

        {showGithub && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-700 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
        )}

        {showLinkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-700 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
        )}
      </div>
    </section>
  );
}
