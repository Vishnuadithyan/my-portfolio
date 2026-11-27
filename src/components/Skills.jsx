import { Layers } from 'lucide-react';

export default function Skills({ skills }) {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-slate-800/80 py-20">
      <h2 className="flex items-center gap-2 text-2xl font-bold text-white sm:text-3xl">
        <Layers className="h-6 w-6 text-indigo-400" aria-hidden="true" />
        Technical Stack
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">{group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
