import { PROJECTS } from "../../../lib/projects";

const project = PROJECTS.find(p => p.slug === "aisee");

export const metadata = {
  title: project ? project.name : 'Aisee',
  description: project?.description,
};

export default function AiseePage() {
  if (!project) return null;
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>{project.name}</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-prose">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.stack.map(s => (
            <span key={s} className="px-2 py-0.5 rounded bg-neutral-500/20 dark:bg-neutral-700/40 text-[11px] font-mono tracking-wide text-neutral-800 dark:text-neutral-200">{s}</span>
          ))}
        </div>
      </header>
      <section className="prose prose-neutral dark:prose-invert max-w-none text-sm leading-relaxed">
        <p>This is a lightweight experimental surface exploring minimal affordances and AI-enhanced suggestion flows. The focus here is on clarity, contrast balance, and semantic grouping rather than feature depth.</p>
        <p>Potential next steps include wiring a small inference helper, adding keyboard command layers, and showcasing a contextual command palette.</p>
      </section>
    </article>
  );
}
