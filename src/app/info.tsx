"use client";
export default function Info() {
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-medium" style={{ fontFamily: 'var(--font-display)' }}>About Me</h2>
			<p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200 max-w-prose">
				I am an AI-focused developer passionate about building intelligent, user-centric experiences.
				I enjoy working across the stack, from model integration & retrieval pipelines to crafting clean, minimal user interfaces.
			</p>
			<p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-prose">
				Currently exploring agent architectures, vector search optimization, and ways to make complex systems feel simple for end users.
			</p>
		</div>
	);
}

