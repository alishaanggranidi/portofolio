export type Project = {
  title: string;
  slug: string;
  category: "AI Systems" | "Machine Learning" | "Data Engineering" | "Web Development" | "Automation";
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [

  // 1
  {
    title: "Agentic RAG Chatbot",
    slug: "agentic-rag-chatbot",
    category: "AI Systems",
    description:
      "Agentic chatbot prototype built using Retrieval Augmented Generation (RAG) architecture with multi-agent orchestration. Integrates Pinecone for semantic retrieval, Google ADK for coordination, structured function calling, simple personalization, and out-of-scope detection. Includes response evaluation for accuracy and consistency monitoring.",
    tech: [
      "Python",
      "Pinecone",
      "Google ADK",
      "LLM API",
      "Embedding Models",
      "Langfuse"
    ],
  },

  // 2
  {
    title: "Breast Cancer Detection (CAD)",
    slug: "breast-cancer-detection",
    category: "Machine Learning",
    description:
      "Computer-Aided Diagnosis (CAD) system for early breast cancer detection using Full Field Digital Mammography (FFDM). Implemented EfficientNetV2-B0 with patient-level Group K-Fold cross-validation to prevent data leakage and ensure reliable generalization. Emphasized methodological validity and computational efficiency.",
    tech: [
      "Python",
      "TensorFlow / Keras",
      "EfficientNetV2-B0",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn"
    ],
    github: "https://github.com/alishaanggranidi/ta",
  },

  // 3
  {
    title: "Emolog – AI Mood Journaling App",
    slug: "emolog",
    category: "AI Systems",
    description:
      "AI-based journaling web application that classifies user mood from diary entries using transformer models. Designed full-stack architecture with React frontend, Next.js and Express backend, and PostgreSQL database. Integrated NLP pipeline with PyTorch and HuggingFace Transformers.",
    tech: [
      "React.js",
      "Next.js",
      "Express.js",
      "PostgreSQL",
      "PyTorch",
      "HuggingFace Transformers",
      "MarianMT",
      "Scikit-learn"
    ],
    demo: "https://youtu.be/Eqh0h5OgEbU?feature=shared",
  },

  // 4
  {
    title: "End-to-End AI Implementation Framework",
    slug: "ai-implementation-framework",
    category: "AI Systems",
    description:
      "Cross-department internship research project focused on structured enterprise AI implementation practices. Contributed within the Development division by researching AI development workflows, supporting experimentation documentation, and preparing structured internal presentations.",
    tech: [
      "AI Workflow Research",
      "Experiment Documentation",
      "Cross-Functional Collaboration"
    ],
  },

  // 5
  {
    title: "AI Maturity Assessment",
    slug: "ai-maturity-assessment",
    category: "Data Engineering",
    description:
      "AI maturity assessment across business units using a multi-dimensional evaluation framework. Processed survey data, conducted scoring analysis, mapped maturity levels, and prepared structured documentation for internal reporting.",
    tech: [
      "Google Forms",
      "Spreadsheets",
      "Scoring Analysis",
      "Documentation"
    ],
  },

  // 6
  {
    title: "Web Scraping & ETL Pipeline",
    slug: "etl-pipeline",
    category: "Data Engineering",
    description:
      "Automated ETL pipeline that scraped 50 web pages, performed data cleaning and transformation, and stored outputs in CSV, Google Sheets, and PostgreSQL simultaneously.",
    tech: [
      "Python",
      "BeautifulSoup",
      "Pandas",
      "PostgreSQL",
      "Google Sheets API"
    ],
    github: "https://github.com/alishaanggranidi/etl-pipeline",
  },

  // 7
  {
    title: "Cellphone Recommendation System",
    slug: "cellphone-recommender",
    category: "Machine Learning",
    description:
      "Hybrid recommendation system combining content-based filtering using cosine similarity and collaborative filtering with neural networks. Integrates product specifications and user rating history to generate personalized smartphone recommendations.",
    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "TensorFlow / Keras"
    ],
    github: "https://github.com/alishaanggranidi/recommender-system",
  },

  // 8
  {
    title: "Financial Automation System (Telegram + n8n)",
    slug: "financial-automation-system",
    category: "Automation",
    description:
      "Automated financial recording system integrating Telegram Bot API and n8n workflow automation. Processes incoming messages, transforms them into structured financial data using Groq inference and JavaScript function nodes, and stores results in Google Sheets.",
    tech: [
      "n8n Cloud",
      "Telegram Bot API",
      "Groq",
      "JavaScript",
      "Google Sheets API"
    ],
  },

  // 9
  {
    title: "Waste Classification CNN",
    slug: "waste-classification-cnn",
    category: "Machine Learning",
    description:
      "Convolutional Neural Network (CNN) model for classifying waste into plastic, paper, and garbage categories. Achieved ≥85% accuracy. Exported model to SavedModel, TFLite, and TensorFlow.js formats for deployment flexibility.",
    tech: [
      "Python",
      "TensorFlow / Keras",
      "TFLite",
      "TensorFlow.js"
    ],
    github: "https://github.com/alishaanggranidi/klasifikasigambar",
  },

  // 10
  {
    title: "Joypad Journey Booking System",
    slug: "joypad-journey",
    category: "Web Development",
    description:
      "Web-based booking system adapted from a reference project and extended with additional features to improve reservation flow and administrative data management. Designed to streamline customer booking and backend record tracking.",
    tech: [
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    github: "https://github.com/alishaanggranidi/joypad",
  },

  // 11
  {
    title: "Streamlit Data Dashboard",
    slug: "streamlit-data-dashboard",
    category: "Data Engineering",
    description:
      "Interactive data analysis dashboard covering data collection, cleaning, exploratory data analysis, visualization, and deployment to Streamlit Cloud.",
    tech: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Streamlit"
    ],
    github: "https://github.com/alishaanggranidi/Analysis-Bike-Rental",
    demo: "https://analysis-bike-rental-alishaanggranidi.streamlit.app",
  }

];