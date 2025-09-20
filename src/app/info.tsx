"use client";
export default function Info() {
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-medium" style={{ fontFamily: 'var(--font-display)' }}>About Me</h2>
			<p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200 max-w-prose">
				I’m a Computer Science student at Binus University, graduating in 2027. I’m passionate about technology and always looking to grow my skills in web development, app development, and artificial intelligence.
			</p>
			<p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-prose">
				I have experience with both backend and frontend web development, using Laravel, Flask, and Next.js to build responsive and dynamic web apps. I’ve also learned machine learning and enjoy exploring how AI works and how to create useful applications or gadget with it.
			</p>
			<p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-prose">
				I’m eager to keep learning, take on real-world projects, and collaborate with others who share the same passion for technology and innovation.			
			</p>
		</div>
	);
}

