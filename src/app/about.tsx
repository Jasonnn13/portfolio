"use client";
import Image from "next/image";

export default function Info() {
	return (
		<div className="space-y-4">
			<div className="relative w-28 h-28 rounded-full overflow-hidden border border-black/10 dark:border-white/10 bg-neutral-200/60 dark:bg-neutral-700/50">
				<Image
					src="/profile.jpg" 
					alt="Profile picture"
					fill
					sizes="112px"
					className="object-cover"
				/>
			</div>

			<h2 className="text-xl font-medium" style={{ fontFamily: 'var(--font-display)' }}>About Me</h2>

			<a
				href="/benedictusjason_cv.pdf" 
				download
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Download CV (opens in a new tab)"
				className="group inline-flex w-fit items-center gap-2 text-sm px-3 py-1.5 rounded-md border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 text-neutral-900 dark:text-neutral-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 backdrop-blur-sm"
			>
				{/* Download icon */}
				<svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-neutral-700 dark:text-neutral-200 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
					<path d="M12 3v10m0 0l4-4m-4 4l-4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M4 17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
				<span>Download CV</span>
			</a>

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

