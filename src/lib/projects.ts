export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectAward {
  label: string;
  icon?: "trophy";
}

export interface ProjectExtra {
  intro: string;
  roleTitle?: string;
  roleBullets?: string[];
  award?: ProjectAward;
  images: ProjectImage[];
}

export interface Project {
  name: string;
  slug: string;
  description: string;
  stack: string[];
  url?: string;
  repo?: string;
  extra?: ProjectExtra;
}

export const PROJECTS: Project[] = [
  {
    name: "Glamulus",
    slug: "glamulus",
    description: "Glamulus is a pair of AI-powered smart glasses that combine IoT hardware and Azure-based AI to provide real-time speech-to-text, translation, and sign language support for the deaf and hard-of-hearing community.",
    stack: ["Python", "Next.js", "IoT", "Azure", "Ultralytics"],
    url: "/extra/glamulus",
    repo: "https://github.com/Jasonnn13/glamulus",
    extra: {
      intro: "This project is called Glamulus, a pair of smart glasses designed to help the deaf and hard-of-hearing community communicate more easily. These glasses use an ESP32 microcontroller, a microphone, an OV2640 camera, and an OLED display to capture speech and translate it into real-time text right in front of the user’s eyes. They also support live speech translation between foreign languages and Bahasa Indonesia, along with SIBI and BISINDO sign language translation to make everyday communication smoother. On top of that, Glamulus connects to a smart dashboard built with Next.js, Python, Ultralytics, and Azure services, which organizes conversations into notes with the help of Azure OpenAI. In short, Glamulus combines IoT hardware and AI software to give deaf individuals more independence and confidence in communication.",
      roleTitle: "My role (IoT Engineer)",
      roleBullets: [
        "Integrate and calibrate ESP32, microphone, OV2640 camera, and OLED display for reliable on-device capture and feedback.",
        "Design the firmware pipeline for audio capture, speech-to-text triggering, and camera events with efficient buffering.",
        "Implement robust connectivity (Wi‑Fi/BLE) and secure data flow to the Next.js dashboard and Azure services.",
        "Handle power management, device health monitoring, and OTA/remote configuration to keep devices stable in the field.",
        "Ensure synchronized data exchange so transcription, translation, and sign-language processing work seamlessly end‑to‑end.",
      ],
      award: {
        label: "2nd place at Elevate (Microsoft × BINUS University)",
        icon: "trophy",
      },
      images: [
        {
          src: "/glamulus/1.png",
          alt: "Glamulus smart glasses prototype",
          caption: "Prototype hardware for Glamulus (smart glasses).",
        },
        {
          src: "/glamulus/2.png",
          alt: "Glamulus notebook",
          caption: "Prototype software for Glamulus (Notebook).",
        },
      ],
    },
  },
  {
    name: "Aisee",
    slug: "aisee",
    description: "AiSee is an AI-powered attendance and cheating detection system that integrates computer vision, web tools, and IoT devices.",
    stack: ["Python", "Streamlit", "OpenCV", "Firebase", "Cloudinary", "IoT"],
    url: "/extra/aisee",
    repo: "https://github.com/Jasonnn13/AiSee",
    extra: {
      intro: "The AiSee project is an AI-powered attendance and cheating detection system developed under the Samsung Innovation Campus program. It combines computer vision, a web interface, and IoT to help schools and exam environments monitor students in real time. Its main features include face recognition for attendance, continuous verification to prevent misuse, and object detection to identify cheating behavior. The system is built using Python, Streamlit, OpenCV, Firebase, and Cloudinary, with separate branches for web deployment and IoT integration.",
      roleTitle: "My role (IoT Engineer)",
      roleBullets: [
        "Integrate camera and sensor hardware; optimize edge devices to run parts of inference locally.",
        "Build the communication pipeline and ensure reliable data transmission to the backend.",
        "Handle synchronization, network resilience, and secure connections.",
        "Monitor device health and enable remote configuration/updates.",
        "Ensure smooth integration so AI models and the web interface can consume data effectively.",
      ],
      images: [
        {
          src: "/aisee/1.png",
          alt: "AiSee prototype hardware",
          caption: "Prototype hardware for AiSee (IoT + camera module).",
        },
      ],
    },
  },
  {
    name: "JobIn",
    slug: "jobin",
    description: "JobIn is a web platform that helps informal workers find nearby jobs, enroll in upskilling classes, and navigate the site through an AI voice assistant tailored for accessibility and low-bandwidth environments.",
    stack: ["Next.js", "React", "TypeScript", "Firebase", "Cloudinary", "Vercel"],
    repo: "https://github.com/Jasonnn13/JobIn",
    extra: {
      intro: "JobIn is a job and learning platform built for informal workers, combining nearby job discovery, upskilling classes, and an AI voice assistant so users with limited digital literacy or low bandwidth can still navigate and complete key actions.",
      roleTitle: "My role (AI Engineer & Co-Backend Developer)",
      roleBullets: [
        "Architect and integrate the AI voicebot flows into the Next.js experience, including microphone permissions and conversational UI hooks.",
        "Design Firebase data models and secure access rules to support job listings, classes, and user journeys.",
        "Manage and optimize the back-end pipeline for the hiring side of the platform, covering job postings and screening flows.",
      ],
      images: [
        {
          src: "/jobin/apply.png",
          alt: "JobIn applicant dashboard",
          caption: "JobIn applicant view for browsing nearby opportunities.",
        },
        {
          src: "/jobin/hire.png",
          alt: "JobIn hiring management dashboard",
          caption: "JobIn hiring-side interface for reviewing candidates.",
        },
      ],
    },
  },
  {
    name: "Leluri",
    slug: "leluri",
    description: "Digital community platform preserving Indonesian culture through curated content, classes/workshops, cultural marketplace, and gamification.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Supabase", "Vercel"],
    repo: "https://github.com/Jasonnn13/Leluri",
    extra: {
      intro: "A digital community platform to preserve Indonesian culture through curated content, classes/workshops, a culture shop, and light gamification. Built with Next.js, TypeScript, Tailwind, ShadCN UI, and Supabase, it gives artisans, studios, and enthusiasts a modern space to share, learn, and support each other.",
      roleTitle: "Feature Owner — Profile & Culture Shop",
      roleBullets: [
        "Built user profile pages (bio, socials, created content) with Supabase auth and row-level security.",
        "Implemented Culture Shop flows: product listing, media upload via Supabase Storage, and product detail pages.",
        "Designed data models for users, posts, classes, and products; handled pagination and filtering for Explore.",
        "Integrated ShadCN UI components and Tailwind for responsive, accessible layouts.",
      ],
      images: [],
    },
  },
  {
    name: "Nusakatha",
    slug: "nusakatha",
    description: "Digital library of Indonesian fairy tales with TTS accessibility; preserves folklore & promotes cultural inclusion.",
    stack: ["Python", "TypeScript", "React", "Next.js", "Azure TTS"],
    repo: "https://github.com/Jasonnn13/Nusakatha",
    extra: {
      intro: "A digital library of Indonesian fairy tales designed for inclusivity—read or listen via Text-to-Speech—so more people can access and enjoy the archipelago's folklore. Built for GarudaHacks with a Flask + React stack and Azure TTS.",
      roleTitle: "My role (Backend & AI Developer)",
      roleBullets: [
        "Developed Flask APIs powering story retrieval and Text-to-Speech playback with Azure Cognitive Services.",
        "Implemented TTS request orchestration, basic caching, and configuration for voices/languages.",
        "Bridged the frontend with backend endpoints.",
      ],
      images: [],
    },
  },
  {
    name: "FitPlate",
    slug: "fitplate",
    description: "Full-stack calorie & health recipe tracker combining nutrition lookup and personalized meal guidance.",
    stack: ["Python", "Next.js", "TypeScript", "Tailwind CSS",  "Flask", "Firebase"],
    repo: "https://github.com/Jasonnn13/FitPlate",
    extra: {
      intro: "A full-stack nutrition and recipe companion that lets you look up calories/macros, save healthy recipes, and get simple meal guidance tailored to your goals. It uses a Next.js frontend, a Python/Flask backend, and Firebase for persistence.",
      roleTitle: "My role (Backend Developer)",
      roleBullets: [
        "Built Flask services for nutrition lookup, macro calculations, and recipe CRUD endpoints.",
        "Modeled user data and recipe storage with Firebase.",
        "Optimized API responses and validation to keep the UI snappy and error-resistant.",
      ],
      images: [],
    },
  },
  {
    name: "SafeSteer",
    slug: "safesteer",
    description: "AI-powered web app detecting driver drowsiness in real time to promote safer driving.",
    stack: ["Python", "Flask", "Computer Vision"],
    repo: "https://github.com/Jasonnn13/SafeSteer",
    extra: {
      intro: "A lightweight computer-vision web app that detects driver drowsiness in real time from the camera stream and warns the user to promote safer driving. Implemented with Python/Flask and classical CV techniques.",
      roleTitle: "My role (AI/ML Developer (Model Training))",
      roleBullets: [
        "Prepared data and trained a drowsiness detection pipeline; tuned thresholds for real‑time alerts.",
        "Integrated inference into a Flask server with a camera stream, focusing on low-latency processing.",
      ],
      images: [],
    },
  },
  {
    name: "Fruit Classification Model",
    slug: "fruit-classification-model",
    description: "CNN-based model to classify fruit images; explores computer vision preprocessing & model deployment.",
    stack: ["Python", "TensorFlow", "Computer Vision", "Streamlit"],
    repo: "https://github.com/Jasonnn13/FruitClassifier",
    extra: {
      intro: "A CNN-based fruit image classifier that explores preprocessing, training, and simple deployment of a small vision model, with a Streamlit demo for trying predictions.",
      images: [],
    },
  },
  {
    name: "movie-recommendation-system-using-singular-value-decomposition-(SVD)",
    slug: "movie-recommendation-system-SVD",
    description: "MovieLens 100k recommender using SVD, with EDA, training, cross-validation, and evaluation in one notebook.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    url: "https://colab.research.google.com/drive/1z2AU70w4CIw7k7tE36AuPapS1079zvNn?usp=sharing",
    extra: {
      intro: "A hands-on MovieLens 100k recommender built with the Surprise SVD algorithm in a single notebook, including EDA, training, cross-validation, and evaluation.",
      images: [],
    },
  },
  {
    name: "Inventory Management System",
    slug: "inventory-management-system",
    description: "Simple inventory app with real-time dashboard report, stock tracking, product categorization & supplier management.",
    stack: ["Laravel", "PHP", "Blade", "MySQL"],
    repo: "https://github.com/Jasonnn13/InventoryManagementSystem",
    extra: {
      intro: "A simple Laravel inventory app for small shops: track stock levels, manage products and categories, register suppliers, and view a real-time dashboard for inventory insights.",
      roleTitle: "Solo Full‑Stack Developer",
      roleBullets: [
        "Designed the domain model (products, categories, suppliers, stock movements) with Eloquent relationships.",
        "Implemented inventory CRUD, supplier management, and a real‑time dashboard with charts and KPIs.",
        "Hardened the app with validation, policies, pagination, soft deletes, and audit timestamps.",
        "Crafted Blade views and reusable components for clean, maintainable UI; added CSV/PDF style exports.",
      ],
      images: [],
    },
  },
];
