"use client";
export default function Contact() {
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-medium" style={{ fontFamily: 'var(--font-display)' }}>Contact</h2>
			<p className="text-sm text-neutral-800 dark:text-neutral-200 max-w-prose">
				Feel free to reach out for collaboration, questions or opportunities.
			</p>
			<ul className="text-sm space-y-1 font-mono">
				<li>Email: <a className="underline hover:text-neutral-900 dark:hover:text-white" href="mailto:you@example.com">benedictusjason25@gmail.com</a></li>
				<li>GitHub: <a className="underline" href="https://github.com/Jasonnn13" target="_blank" rel="noreferrer">Jasonnn13</a></li>
				<li>LinkedIn: <a className="underline" href="https://www.linkedin.com/in/benedictusjason23" target="_blank" rel="noreferrer">Benedictus Jason</a></li>
			</ul>
		</div>
	);
}

