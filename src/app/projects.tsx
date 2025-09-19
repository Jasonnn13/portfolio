"use client";
interface Project {
	name: string;
	slug: string;
	description: string;
	stack: string[];
  url?: string;
}

const PROJECTS: Project[] = [
	{
		name: "Vision Assistant",
		slug: "vision-assistant",
		description: "Real-time image reasoning agent with multimodal prompts and contextual memory.",
		stack: ["Next.js", "TypeScript", "OpenAI", "Edge Runtime"],
		url: "https://example.com/vision-assistant",
	},
	{
		name: "NLP Pipeline",
		slug: "nlp-pipeline",
		description: "Composable text processing toolkit featuring embedding, summarization & classification stages.",
		stack: ["Python", "FastAPI", "LangChain"],
		url: "https://example.com/nlp-pipeline",
	},
	{
		name: "Portfolio v2",
		slug: "portfolio-v2",
		description: "This evolving portfolio focusing on clarity, speed and accessible design.",
		stack: ["Next.js", "TailwindCSS"],
		url: "https://example.com/portfolio-v2",
	},
];

export default function Projects() {
	return (
		<div className="space-y-5">
			<h2 className="text-xl font-medium" style={{ fontFamily: 'var(--font-display)' }}>Highlighted Projects</h2>
			<ul className="space-y-4">
				{PROJECTS.map(p => (
					<li key={p.slug} className="group rounded border border-white/40 dark:border-white/20 bg-white/40 dark:bg-neutral-600/30 backdrop-blur-sm transition hover:border-white/70 dark:hover:border-white/40 focus-within:border-white/80">
						<a
							href={p.url || `https://example.com/${p.slug}`}
							target="_blank"
							rel="noreferrer"
							className="block px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-800/40 dark:focus:ring-white/30 rounded"
						>
							<div className="flex items-baseline justify-between gap-4">
								<span className="font-mono text-sm tracking-wide text-neutral-800 dark:text-neutral-100 underline decoration-transparent group-hover:decoration-neutral-600/60 dark:group-hover:decoration-neutral-300/60 transition">/{p.slug}</span>
								<div className="flex flex-wrap gap-1.5 justify-end">
									{p.stack.map(t => (
										<span key={t} className="px-2 py-0.5 rounded bg-neutral-500/30 dark:bg-neutral-700/50 text-[10px] font-mono tracking-wide text-neutral-900 dark:text-neutral-200">{t}</span>
									))}
								</div>
							</div>
							<p className="mt-1 text-sm text-neutral-700 dark:text-neutral-200 leading-snug">
								{p.description}
							</p>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

