"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Project } from "../../lib/projects";

interface ProjectExtraProps {
  project: Project;
  onBack: () => void;
}

const iconMap = {
  trophy: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path d="M7 4h10v2a3 3 0 0 0 3 3h1v2a5 5 0 0 1-5 5h-2l1 3h3v2H6v-2h3l1-3H8a5 5 0 0 1-5-5V9h1a3 3 0 0 0 3-3V4Z" fill="currentColor" />
    </svg>
  ),
} as const;

export default function ProjectExtra({ project, onBack }: ProjectExtraProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const extra = project.extra;
  if (!extra) return null;

  const handleBack = () => {
    setVisible(false);
    setTimeout(() => onBack(), 200);
  };

  return (
    <article className={`space-y-6 transform transition-all duration-200 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}`}>
      <header className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>{project.name}</h1>
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center font-mono text-xs tracking-wide px-3 py-1.5 rounded border border-white/70 dark:border-white/30 bg-white/40 dark:bg-neutral-600/40 backdrop-blur-sm text-neutral-800 dark:text-neutral-100 active:scale-[.97] transition"
          >
            ← Back
          </button>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.stack.map(s => (
            <span key={s} className="px-2 py-0.5 rounded bg-neutral-500/20 dark:bg-neutral-700/40 text-[11px] font-mono tracking-wide text-neutral-800 dark:text-neutral-200">{s}</span>
          ))}
        </div>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} repository on GitHub (opens in a new tab)`}
            className="group inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 text-neutral-900 dark:text-neutral-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 backdrop-blur-sm"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current opacity-80 group-hover:opacity-100 transition-opacity">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.09-.746.083-.731.083-.731 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.004-.404c1.02.005 2.047.138 3.004.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.652.243 2.873.12 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.823 1.096.823 2.21 0 1.595-.014 2.88-.014 3.272 0 .32.192.694.8.576C20.565 21.796 24 17.297 24 12 24 5.37 18.63 0 12 0z" />
            </svg>
            <span>View on GitHub</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
              <path d="M14 3h7v7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 14L21 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 14v6a1 1 0 0 1-1 1h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 10V4a1 1 0 0 1 1-1h6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        )}
      </header>

      {extra.award && (
        <div className="not-prose mt-1.5 inline-flex items-center gap-2 rounded-md border border-amber-500/30 bg-amber-200/30 px-2 py-1 text-xs text-amber-900 dark:border-amber-400/30 dark:bg-amber-500/10 dark:text-amber-200">
          {extra.award.icon ? iconMap[extra.award.icon] : null}
          <span>{extra.award.label}</span>
        </div>
      )}

      <section className="prose prose-neutral dark:prose-invert max-w-none text-sm leading-relaxed">
        <p className="text-justify">
          {extra.intro}
        </p>
        {extra.roleTitle && extra.roleBullets && (
          <>
            <h3 className="text-base font-semibold mt-4">{extra.roleTitle}</h3>
            <ul className="list-disc pl-5">
              {extra.roleBullets.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </section>

      {extra.images.map(img => (
        <figure key={img.src}>
          <div className="relative w-full max-w-md aspect-video overflow-hidden rounded-lg border border-white/40 dark:border-white/20 bg-neutral-200/40 dark:bg-neutral-700/30">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 512px, 90vw"
            />
          </div>
          <figcaption className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
            {img.caption}
          </figcaption>
        </figure>
      ))}
    </article>
  );
}
