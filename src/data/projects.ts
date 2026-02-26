export type Project = {
  title: string;
  slug: string;
  category: "AI Systems" | "Machine Learning" | "Data Engineering" | "Web Development" | "Automation";
  description: string;
  image: string;
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
    "Multi agent RAG prototype integrating semantic retrieval, structured function calling, and basic personalization. Designed to evaluate response grouding, out of scope detection, and consistency using retrieval pipelines and monitoring tools.",
    tech: [
      "Python",
      "Pinecone",
      "Google ADK",
      "LLM API",
      "Embedding Models",
      "Langfuse"
    ],
    image: "/public/images/projects/agentic.png",
  },

  // 2
  {
    title: "Breast Cancer Detection (CAD)",
    slug: "breast-cancer-detection",
    category: "Machine Learning",
    description:
    " Computer aided diagnosis model for breast cancer detection using EfficientNetV2 B0 on FFDM data. Implemented patient level Group K Fold cross validation to reduce data leakage and ensure reliable generalization across cases.",
    tech: [
      "Python",
      "TensorFlow / Keras",
      "EfficientNetV2-B0",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn"
    ],
    github: "https://github.com/alishaanggranidi/ta",
    image: "/public/images/projects/breastcancer.png",
  },

  // 3
  {
    title: "Emolog – AI Mood Journaling App",
    slug: "emolog",
    category: "AI Systems",
    description:
      "AI based journaling application that classifies user mood from text entries using transformer models. Built with a full stack architecture integrating React, backend services, and a structured NLP pipeline for text preprocessing and inference ",
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
    image: "/public/images/projects/emolog.png",
  },

  // 4
  {
    title: "End-to-End AI Implementation Framework",
    slug: "ai-implementation-framework",
    category: "AI Systems",
    description:
    " Internship research project focused on documenting structured AI development workflows within an enterprise setting. Contibuted to experimentation tracking, development process analysis, and internal technical reporting.",
    tech: [
      "AI Workflow Research",
      "Experiment Documentation",
      "Cross-Functional Collaboration"
    ],
    image: "/public/images/projects/aiframework.png",
  },

  // 5
  {
    title: "AI Maturity Assessment",
    slug: "ai-maturity-assessment",
    category: "Data Engineering",
    description:
    " Conducted AI maturity assessment across business units using a structured evaluation framework. Processed survey data, analyzed scoring dimensions, and prepared documentation to support internal strategic planning.",
    tech: [
      "Google Forms",
      "Spreadsheets",
      "Scoring Analysis",
      "Documentation"
    ],
    image: "/public/images/projects/aimaturity.png",
  },

  // 6
  {
    title: "Web Scraping & ETL Pipeline",
    slug: "etl-pipeline",
    category: "Data Engineering",
    description:
    "Automated ETL pipeline that scraped structured data from multiple web pages, performed cleaning and transformation, and stored outputs in CSV, Google Sheets, and PostgreSQL for furter analysis.",
    tech: [
      "Python",
      "BeautifulSoup",
      "Pandas",
      "PostgreSQL",
      "Google Sheets API"
    ],
    github: "https://github.com/alishaanggranidi/etl-pipeline",
    image: "/public/images/projects/etl.png",
  },

  // 7
  {
    title: "Cellphone Recommendation System",
    slug: "cellphone-recommender",
    category: "Machine Learning",
    description:
    "Hybrid recommendation system combining content based filtering and collaborative filtering approaches. Integrated product specifications and user interaction data to generate personalized smartphone recommendations.",
    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "TensorFlow / Keras"
    ],
    github: "https://github.com/alishaanggranidi/recommender-system",
    image: "/public/images/projects/recommender.png",
  },

  // 8
  {
    title: "Financial Automation System (Telegram + n8n)",
    slug: "financial-automation-system",
    category: "Automation",
    description:
    "Automated financial recording workflow integrating Telegram Bot API and n8n orchestration. Parsed incoming messages into structured financial records and stored outputs in Google Sheets using scripted transformation logic.",
    tech: [
      "n8n Cloud",
      "Telegram Bot API",
      "Groq",
      "JavaScript",
      "Google Sheets API"
    ],
    image: "/public/images/projects/automation.png",
  },

  // 9
  {
    title: "Waste Classification CNN",
    slug: "waste-classification-cnn",
    category: "Machine Learning",
    description:
    "Convolutional neural network modoel for classifying waste images into predefined categories. Trained and exported into multiple deployment formats including SavedModel, TFLite, and TensorFlow.js.",
    tech: [
      "Python",
      "TensorFlow / Keras",
      "TFLite",
      "TensorFlow.js"
    ],
    github: "https://github.com/alishaanggranidi/klasifikasigambar",
    image: "/public/images/projects/waste.png",
  },

  // 10
  {
    title: "Joypad Journey Booking System",
    slug: "joypad-journey",
    category: "Web Development",
    description:
    "Web based booking application adapted and extended with additional features for reservation management and administrative record tracking using a structured frontend backend flow.",
    tech: [
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    github: "https://github.com/alishaanggranidi/joypad",
    image: "/public/images/projects/joypad.png",
  },

  // 11
  {
    title: "Streamlit Data Dashboard",
    slug: "streamlit-data-dashboard",
    category: "Data Engineering",
    description:
    "Interactive data analysis dashboard covering data cleaning, exploratory analysis, visualization, and deployment using Streamlit for lightweight reporting and monitoring.",
    tech: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Streamlit"
    ],
    github: "https://github.com/alishaanggranidi/Analysis-Bike-Rental",
    demo: "https://analysis-bike-rental-alishaanggranidi.streamlit.app",
    image: "/public/images/projects/dashboard.png",
  }

];