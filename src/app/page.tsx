"use client";
import { useState } from "react";
import Info from "./info";
import Projects from "./projects";
import Contact from "./contact";

const Skills = () => (
  <div className="space-y-4">
    <h2 className="text-xl font-medium" style={{ fontFamily: 'var(--font-display)' }}>Skills</h2>
    <div className="flex flex-wrap gap-2 text-xs font-mono">
      {["TypeScript","JavaScript", "C", "Python","Next.js","Tailwind","Machine Learning", "Deep Learning", "Computer Vision", "OpenAI API","Firebase", "Supabase", "MySQL", "Laravel", "Database Design", "Rest API", "CI/CD",
        "IoT"
      ]
        .map(s => <span key={s} className="px-2 py-1 rounded bg-neutral-400/60 dark:bg-neutral-600/60 text-neutral-800 dark:text-neutral-100">{s}</span>)}
    </div>
  </div>
);

const SECTIONS = [
  { key: "about", label: "About", component: Info },
  { key: "projects", label: "Projects", component: Projects },
  { key: "skills", label: "Skills", component: Skills },
  { key: "contact", label: "Contact", component: Contact },
];

export default function Home() {
  const [active, setActive] = useState<string>(SECTIONS[0].key);
  const ActiveComponent = SECTIONS.find(s => s.key === active)?.component || (() => null);
  return (
    <main className="min-h-screen w-full flex bg-gray-100 dark:bg-neutral-900 p-6 sm:p-9 overflow-hidden">
  <div className="w-full h-[calc(100vh-48px)] sm:h-[calc(100vh-72px)] rounded-md border border-white bg-neutral-300 dark:bg-neutral-700 px-6 sm:px-10 py-8 flex flex-col overflow-hidden">
        <header className="mb-4">
          <h1
            className="font-light tracking-[0.08em] text-neutral-900 dark:text-neutral-100 text-[52px] sm:text-[74px] leading-[0.95] select-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Benedictus Jason
          </h1>
          <p
            className="mt-3 text-[13px] sm:text-sm text-neutral-700 dark:text-neutral-300 font-normal tracking-[0.15em] uppercase"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            AI Developer
          </p>
        </header>
  <div className="flex flex-1 min-h-0 gap-8">
          <nav className="w-40 shrink-0 border-r border-white/70 dark:border-white/30 pr-4 flex flex-col">
            <ul className="space-y-2">
              {SECTIONS.map(s => {
                const current = s.key === active;
                return (
                  <li key={s.key}>
                    <button
                      onClick={() => setActive(s.key)}
                      aria-current={current ? "page" : undefined}
                      className={
                        `w-full text-left text-sm tracking-wide font-mono px-2 py-1 rounded transition ` +
                        (current
                          ? 'bg-neutral-500/40 dark:bg-neutral-600/50 text-neutral-900 dark:text-neutral-100'
                          : 'hover:bg-neutral-400/40 dark:hover:bg-neutral-600/40 text-neutral-800 dark:text-neutral-200')
                      }
                    >
                      {s.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
            <section className="flex-1 min-h-0 overflow-y-auto pr-2 pb-4 no-scrollbar">
              <ActiveComponent />
            </section>
        </div>
      </div>
    </main>
  );
}
