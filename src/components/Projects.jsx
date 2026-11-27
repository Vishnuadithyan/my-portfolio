import { useMemo, useState } from 'react';
import { Code2, ExternalLink } from 'lucide-react';
import { hasValidUrl } from '../data/portfolioData';
import { GitHubIcon } from './Icons';

export default function Projects({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...new Set(projects.map((project) => project.category))],
    [projects]
  );

  const filteredProjects = useMemo(
    () =>
      selectedCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === selectedCategory),
    [projects, selectedCategory]
  );

  return (
    <section id="projects" className="scroll-mt-20 border-t border-slate-800/80 py-20">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-white sm:text-3xl">
            <Code2 className="h-6 w-6 text-indigo-400" aria-hidden="true" />
            Featured Projects
          </h2>
          <p className="mt-2 text-slate-400">Selected production systems and UI engineering work.</p>
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 ${
                  isSelected
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {filteredProjects.map((project) => {
          const showRepo = hasValidUrl(project.repoUrl);
          const showLive = hasValidUrl(project.liveUrl);

          return (
            <article
              key={project.title}
              className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-indigo-500/50 hover:bg-slate-900"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-400">
                    {project.category}
                  </span>

                  {(showRepo || showLive) && (
                    <div className="flex gap-3 text-slate-400">
                      {showRepo && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} source code`}
                          className="rounded-sm transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                        >
                          <GitHubIcon className="h-4 w-4" />
                        </a>
                      )}
                      {showLive && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} live demo`}
                          className="rounded-sm transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                        >
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <h3 className="mt-4 text-xl font-semibold text-white transition group-hover:text-indigo-300">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
