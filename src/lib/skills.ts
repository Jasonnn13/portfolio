export const SKILL_CATEGORIES = {
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
} as const;

export type SkillCategoryKey = keyof typeof SKILL_CATEGORIES;
export type SkillCategoryMap = typeof SKILL_CATEGORIES;