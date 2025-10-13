"use client";

const CATEGORIES: Record<string, string[]> = {
  Frontend: [
    "TypeScript", "JavaScript", "Next.js", "Tailwind",
  ],
  Backend: [
    "Python", "Java", "Laravel", "Rest API", "CI/CD",
  ],
  "ML / AI": [
    "Machine Learning", "Deep Learning", "Computer Vision",
    "NumPy", "Pandas", "PyTorch", "Keras", "Tensorflow", "Scikit-learn", "Jupyter",
  ],
  "IoT / Embedded": [
    "IoT", "C",
  ],
  Database: [
    "MySQL", "Supabase", "Firebase", "Database Design",
  ],
  "Cloud / Tools": [
    "Azure", "Git/Github", "OpenAI API",
  ],
};

export default function Skills() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium" style={{ fontFamily: 'var(--font-display)' }}>Skills</h2>
      <div className="space-y-3">
        {Object.entries(CATEGORIES).map(([group, skills]) => (
          <div key={group} className="space-y-1">
            <h3 className="text-sm font-medium text-neutral-800 dark:text-neutral-100">{group}</h3>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {skills.map((s) => (
                <span key={s} className="px-2 py-1 rounded bg-neutral-400/60 dark:bg-neutral-600/60 text-neutral-800 dark:text-neutral-100">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
