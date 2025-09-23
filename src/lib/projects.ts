export interface Project {
  name: string;
  slug: string;
  description: string;
  stack: string[];
  url?: string; // external URL or internal route
}

export const PROJECTS: Project[] = [
  {
    name: "Aisee",
    slug: "aisee",
    description: "Lightweight AI-enhanced interface experiment – focuses on minimal UI + semantic hinting.",
    stack: ["Next.js", "TypeScript", "AI"],
    url: "/extra/aisee",
  },
  {
    name: "Glamulus",
    slug: "glamulus",
    description: "Playground for visual/glassmorphism styling and animated layout primitives.",
    stack: ["Design System", "UI/UX", "Animation"],
    url: "/extra/glamulus",
  },
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
