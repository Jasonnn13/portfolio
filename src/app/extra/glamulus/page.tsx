import { PROJECTS } from "../../../lib/projects";
import Image from "next/image";

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
        <div className="flex flex-wrap gap-2 pt-2">
          {project.stack.map(s => (
            <span key={s} className="px-2 py-0.5 rounded bg-neutral-500/20 dark:bg-neutral-700/40 text-[11px] font-mono tracking-wide text-neutral-800 dark:text-neutral-200">{s}</span>
          ))}
        </div>
        <a
          href="https://github.com/Jasonnn13/glamulus"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Glamulus repository on GitHub (opens in a new tab)"
          className="group inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 text-neutral-900 dark:text-neutral-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 backdrop-blur-sm"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current opacity-80 group-hover:opacity-100 transition-opacity">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.09-.746.083-.731.083-.731 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.004-.404c1.02.005 2.047.138 3.004.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.652.243 2.873.12 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.823 1.096.823 2.21 0 1.595-.014 2.88-.014 3.272 0 .32.192.694.8.576C20.565 21.796 24 17.297 24 12 24 5.37 18.63 0 12 0z"/>
          </svg>
          <span>View on GitHub</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
            <path d="M14 3h7v7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 14L21 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 14v6a1 1 0 0 1-1 1h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 10V4a1 1 0 0 1 1-1h6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </header>
      <section className="prose prose-neutral dark:prose-invert max-w-none text-sm leading-relaxed">
        <p>
          This project is called Glamulus, a pair of smart glasses designed to help the deaf and hard-of-hearing community communicate more easily. These glasses use an ESP32 microcontroller, a microphone, an OV2640 camera, and an OLED display to capture speech and translate it into real-time text right in front of the user’s eyes. They also support live speech translation between foreign languages and Bahasa Indonesia, along with SIBI and BISINDO sign language translation to make everyday communication smoother. On top of that, Glamulus connects to a smart dashboard built with Next.js, Python, Ultralytics, and Azure services, which organizes conversations into notes with the help of Azure OpenAI. In short, Glamulus combines IoT hardware and AI software to give deaf individuals more independence and confidence in communication.
        </p>
      </section>
      <figure>
        <div className="relative w-full max-w-md aspect-video overflow-hidden rounded-lg border border-white/40 dark:border-white/20 bg-neutral-200/40 dark:bg-neutral-700/30">
          <Image
            src="/glamulus/1.png"
            alt="Glamulus smart glasses prototype"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 512px, 90vw"
            priority
          />
        </div>
        <figcaption className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
          Prototype hardware for Glamulus (smart glasses).
        </figcaption>
      </figure>
      <figure>
        <div className="relative w-full max-w-md aspect-video overflow-hidden rounded-lg border border-white/40 dark:border-white/20 bg-neutral-200/40 dark:bg-neutral-700/30">
          <Image
            src="/glamulus/2.png"
            alt="Glamulus notebook"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 512px, 90vw"
            priority
          />
        </div>
        <figcaption className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
          Prototype software for Glamulus (Notebook).
        </figcaption>
      </figure>
    </article>
  );
}
