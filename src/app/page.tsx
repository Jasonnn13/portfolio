"use client";
import { useState, useRef, useEffect } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const firstNavButtonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  useEffect(() => {
    if (mobileOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => { firstNavButtonRef.current?.focus(); });
      return () => { document.body.style.overflow = prevOverflow; };
    }
  }, [mobileOpen]);
  const ActiveComponent = SECTIONS.find(s => s.key === active)?.component || (() => null);
  const handleSelect = (k: string) => { setActive(k); setMobileOpen(false); };
  const NavList = ({ attachRef = false }: { attachRef?: boolean }) => (
    <ul className="space-y-2">
      {SECTIONS.map((s, i) => {
        const current = s.key === active;
        return (
          <li key={s.key}>
            <button
              ref={attachRef && i === 0 ? firstNavButtonRef : undefined}
              onClick={() => handleSelect(s.key)}
              aria-current={current ? 'page' : undefined}
              className={
                `w-full text-left text-sm tracking-wide font-mono px-2 py-1 rounded outline-none focus:ring-2 focus:ring-neutral-800/40 dark:focus:ring-white/30 transition ` +
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
  );
  return (
    <main className="min-h-screen w-full flex bg-gray-100 dark:bg-neutral-900 p-6 sm:p-9 overflow-hidden">
  <div className="w-full h-[calc(100vh-48px)] sm:h-[calc(100vh-72px)] rounded-md border border-white bg-neutral-300 dark:bg-neutral-700 px-6 sm:px-10 py-8 flex flex-col overflow-hidden fine-noise fine-noise-tint">
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
            Tech Enthusiast
          </p>
          <div className="mt-4 flex items-center sm:hidden">
            <button
              onClick={() => setMobileOpen(o => !o)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              className="inline-flex items-center gap-2 rounded border border-white/60 dark:border-white/30 px-3 py-1.5 bg-white/40 dark:bg-neutral-600/40 backdrop-blur-sm text-neutral-800 dark:text-neutral-100 active:scale-[.97] transition"
            >
              <span className="relative w-5 h-4 block">
                <span className={`absolute left-0 h-0.5 w-full bg-neutral-800 dark:bg-neutral-100 transition-transform duration-300 ${mobileOpen ? 'translate-y-1.5 rotate-45' : 'translate-y-0'}`}></span>
                <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-full bg-neutral-800 dark:bg-neutral-100 transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute left-0 h-0.5 w-full bg-neutral-800 dark:bg-neutral-100 transition-transform duration-300 ${mobileOpen ? '-translate-y-1.5 -rotate-45 bottom-auto top-3' : 'translate-y-3'}`}></span>
              </span>
              <span className="font-mono text-xs tracking-wide">MENU</span>
            </button>
          </div>
        </header>
  <div className="flex flex-1 min-h-0 gap-8">
          <nav className="hidden sm:flex w-40 shrink-0 border-r border-white/70 dark:border-white/30 pr-4 flex-col">
            <NavList />
          </nav>
            <section className="flex-1 min-h-0 overflow-y-auto pr-2 pb-4 no-scrollbar">
              <div key={active} className="fade-in-soft">
                <ActiveComponent />
              </div>
            </section>
        </div>
        {mobileOpen && (
          <div className="sm:hidden fixed inset-0 z-40" role="dialog" aria-modal="true" aria-label="Navigation menu">
            <button
              className="absolute inset-0 bg-neutral-900/40 backdrop-blur-[2px] animate-fade bg-opacity-40"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            />
            <div
              id="mobile-nav"
              ref={drawerRef}
              className="absolute top-0 left-0 h-full w-64 max-w-[80%] bg-neutral-200/80 dark:bg-neutral-800/80 backdrop-blur-md border-r border-white/60 dark:border-white/20 px-4 pt-24 pb-8 flex flex-col transform translate-x-0 animate-slideIn"
            >
              <NavList attachRef />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
