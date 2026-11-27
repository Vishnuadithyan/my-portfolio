import { Briefcase } from 'lucide-react';

export default function Experience({ experience }) {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-slate-800/80 py-20">
      <h2 className="flex items-center gap-2 text-2xl font-bold text-white sm:text-3xl">
        <Briefcase className="h-6 w-6 text-indigo-400" aria-hidden="true" />
        Work Experience
      </h2>

      <div className="mt-10 space-y-8">
        {experience.map((exp) => (
          <div
            key={`${exp.company}-${exp.period}`}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8"
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <p className="font-medium text-indigo-400">{exp.company}</p>
              </div>
              <span className="text-sm text-slate-400">{exp.period}</span>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {exp.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
