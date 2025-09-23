import { PROJECTS } from "../../../lib/projects";

const project = PROJECTS.find(p => p.slug === "glamulus");

export const metadata = {
  title: project ? project.name : 'Glamulus',
  description: project?.description,
};

export default function GlamulusPage() {
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
        <p>Glamulus is a sandbox for layered translucency, soft lighting, subtle depth cues and motion timing. It serves as a style reference for future UI system work.</p>
        <p>Ideas for expansion: tokenized elevation scale, adaptive glass surfaces based on ambient color sampling, and a micro-interaction library.</p>
      </section>
    </article>
  );
}
