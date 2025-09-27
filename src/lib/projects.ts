export interface Project {
  name: string;
  slug: string;
  description: string;
  stack: string[];
  url?: string; 
}

export const PROJECTS: Project[] = [
  {
    name: "Aisee",
    slug: "aisee",
    description: "AiSee is an AI-powered attendance and cheating detection system that integrates computer vision, web tools, and IoT devices.",
    stack: ["Python", "Streamlit", "OpenCV", "Firebase", "Cloudinary", "IoT"],
    url: "/extra/aisee",
  },
  {
    name: "Glamulus",
    slug: "glamulus",
    description: "Glamulus is a pair of AI-powered smart glasses that combine IoT hardware and Azure-based AI to provide real-time speech-to-text, translation, and sign language support for the deaf and hard-of-hearing community.",
    stack: ["Python", "Next.js", "IoT", "Azure", "Ultralytics"],
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
    name: "movie-recommendation-system-using-singular-value-decomposition-(SVD)",
    slug: "movie-recommendation-system-using-singular-value-decomposition-(SVD)",
    description: "This project demonstrates the development of a personalized movie recommendation system using the MovieLens 100k dataset. The process begins with merging movie ratings and movie details into a unified dataframe, followed by an Exploratory Data Analysis (EDA) to explore rating patterns and identify top movies. The core model is built using Singular Value Decomposition (SVD), a collaborative filtering algorithm implemented with the surprise library, to predict user ratings. The system’s performance is rigorously tested through cross-validation, ensuring accuracy and robustness. This notebook provides a practical example of building, training, and evaluating a recommendation model from start to finish.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    url: "https://colab.research.google.com/drive/1z2AU70w4CIw7k7tE36AuPapS1079zvNn?usp=sharing"
  },
  {
    name: "breast-cancer-prediction-using-naive-bayes",
    slug: "breast-cancer-prediction-using-naive-bayes",
    description: "This project applies machine learning to the medical domain by predicting whether a tumor is malignant or benign using the Breast Cancer Wisconsin dataset. The workflow includes loading and exploring the data, followed by feature scaling with StandardScaler to normalize input variables. A Gaussian Naive Bayes classifier is trained on the processed dataset, making use of probabilistic reasoning for classification. The model is then evaluated using a confusion matrix and a classification report that highlights precision, recall, and F1-score. This notebook illustrates a complete pipeline for applying Naive Bayes to a healthcare-related classification problem.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    url: "https://colab.research.google.com/drive/1xk2ueKrBd5jKa0vQ_iXtyVOIYv43--eJ?usp=sharing"
  },
  {
    name: "diabetes-prediction-using-logistic-regression",
    slug: "diabetes-prediction-using-logistic-regression",
    description: "This project tackles the task of predicting the likelihood of diabetes onset using diagnostic health data from the Pima Indians Diabetes dataset. The analysis begins with Exploratory Data Analysis (EDA) to detect patterns and handle unrealistic zero values in medical features. After splitting the dataset into training and testing sets, a Logistic Regression model is developed for binary classification. The model’s performance is thoroughly assessed using metrics such as accuracy, precision, recall, F1-score, and confusion matrix. This notebook provides a clear demonstration of applying Logistic Regression to a real-world health prediction challenge.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    url: "https://colab.research.google.com/drive/1TbLhfxSph4ZUhw9k-CFfmjhNofaePxCu?usp=sharing"
  },
  {
    name: "house-price-prediction-using-linear-regression",
    slug: "house-price-prediction-using-linear-regression",
    description: "This project focuses on predicting house prices based on features such as area, number of bedrooms, and location. The notebook begins with preparing and analyzing the dataset to identify key factors influencing price variations. A Linear Regression model is then trained to capture relationships between input features and target values. The model is evaluated using regression metrics including Mean Absolute Error (MAE), Mean Squared Error (MSE), and R² score to assess accuracy and fit. This workflow highlights a complete example of applying Linear Regression to a practical real-estate prediction problem.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
    url: "https://colab.research.google.com/drive/1pYen-xdGyFYEQfvcAV-3cqt3p_5-8bPf?usp=sharing"
  },
  {
    name: "Nusakatha",
    slug: "nusakatha-digital-folktale-library",
    description: "Digital library of Indonesian fairy tales with TTS accessibility; preserves folklore & promotes cultural inclusion.",
    stack: ["Python", "TypeScript", "React", "Node.js", "Azure TTS"],
    url: "https://github.com/Jasonnn13/Nusakatha",
  },
  {
    name: "FitPlate",
    slug: "fitplate-calorie-tracker",
    description: "Full-stack calorie & health recipe tracker combining nutrition lookup and personalized meal guidance.",
    stack: ["Python", "Next.js", "TypeScript", "Tailwind CSS",  "Flask", "Firebase"],
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
