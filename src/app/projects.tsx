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
		name: "Leluri",
		slug: "leluri-platform-komunitas-budaya",
		description: "Platform komunitas digital untuk melestarikan budaya Indonesia: konten, kelas/workshop, toko budaya & gamifikasi.",
		stack: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Supabase", "Vercel"],
		url: "https://github.com/Jasonnn13/Leluri",
	},
	{
		name: "Nusakatha",
		slug: "nusakatha-digital-folktale-library",
		description: "Digital library of Indonesian fairy tales with TTS accessibility; preserves folklore & promotes cultural inclusion.",
		stack: ["TypeScript", "React", "Node.js", "Python", "Azure TTS"],
		url: "https://github.com/Jasonnn13/Nusakatha",
	},
	{
		name: "FitPlate",
		slug: "fitplate-calorie-tracker",
		description: "Full-stack calorie & health recipe tracker combining nutrition lookup and personalized meal guidance.",
		stack: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "Flask", "Firebase"],
		url: "https://github.com/Jasonnn13/FitPlate",
	},
	{
		name: "SafeSteer",
		slug: "safesteer-drowsiness-detection",
		description: "AI-powered web app detecting driver drowsiness in real time to promote safer driving.",
		stack: ["Python", "Flask", "Computer Vision"],
		url: "https://github.com/Jasonnn13/SafeSteer",
	},
	{
		name: "Fruit Classification Model",
		slug: "fruit-classification-cnn",
		description: "CNN-based model to classify fruit images; explores computer vision preprocessing & model deployment.",
		stack: ["Python", "TensorFlow", "Computer Vision", "Streamlit"],
		url: "https://github.com/Jasonnn13/FruitClassifier",
	},
	{
		name: "Inventory Management System",
		slug: "inventory-management-laravel",
		description: "Simple inventory app with real-time stock tracking, product categorization & supplier management.",
		stack: ["Laravel", "PHP", "Blade", "MySQL"],
		url: "https://github.com/Jasonnn13/InventoryManagementSystem",
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

