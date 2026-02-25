export type Project = {
  title: string;
  slug: string;
  category: "AI Systems" | "Machine Learning" | "Engineering";
  description: string;
  tech: string[];
  overview: string;
  problem: string;
  approach: string;
  results: string;
  image: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Breast Cancer Detection",
    slug: "breast-cancer-detection",
    category: "Machine Learning",
    description:
      "Deep learning CAD system using EfficientNetV2 with patient-level validation.",
    tech: ["PyTorch", "Computer Vision", "Medical AI"],

    overview:
      "A deep learning-based Computer-Aided Diagnosis (CAD) system using EfficientNetV2-B0 for mammogram classification.",

    problem:
      "Medical imaging models require strict validation to prevent data leakage and ensure generalization.",

    approach:
      "Implemented Group K-Fold validation, ROI preprocessing, normalization, and full fine-tuning strategy.",

    results:
      "Strong classification performance evaluated using AUC, Recall, and ROC Curve.",

    image: "https://picsum.photos/seed/cancer/800/600",
    github: "https://github.com/alishaas/breast-cancer-project",
    demo: "",
  },

  {
    title: "Agentic RAG Chatbot",
    slug: "agentic-rag-chatbot",
    category: "AI Systems",
    description:
      "Multi-agent RAG system powered by Groq API with structured retrieval.",
    tech: ["Groq API", "LangChain", "RAG Architecture"],

    overview:
      "AI assistant using Retrieval-Augmented Generation architecture.",

    problem:
      "LLMs without retrieval generate hallucinated or context-limited answers.",

    approach:
      "Implemented embedding, vector search, and agent-based reasoning pipeline.",

    results:
      "Improved contextual accuracy and reduced hallucination.",

    image: "https://picsum.photos/seed/chatbot/800/600",
    github: "https://github.com/alishaas/rag-project",
    demo: "",
  },
  {
    title: "ETL Automation Pipeline",
    slug: "etl-automation-pipeline",
    category: "Engineering",
    description:
      "End-to-end scraping, transformation, and PostgreSQL loading system.",
    tech: ["Python", "PostgreSQL", "ETL"],
    overview: "A robust ETL system designed to handle high-frequency data ingestion and transformation for business intelligence.",
    problem: "Manual data processing was causing bottlenecks and data quality issues in the analytics department.",
    approach: "Designed a modular ETL pipeline using Python and PostgreSQL. Implemented automated validation checks and error logging.",
    results: "Automated 90% of data processing tasks and ensured 99.9% data consistency across systems.",
    image: "https://picsum.photos/seed/etl/800/600",
    github: "https://github.com/alishaas/etl-pipeline"
  },
  {
    title: "Telegram Finance Automation",
    slug: "telegram-finance-automation",
    category: "Engineering",
    description:
      "Telegram bot integrated with n8n and Google Sheets for financial logging.",
    tech: ["JavaScript", "n8n", "Automation"],
    overview: "An automated financial logging system that allows users to track expenses directly through a Telegram interface.",
    problem: "Tracking daily expenses manually is tedious and often leads to inconsistent records.",
    approach: "Developed a Telegram bot that interfaces with n8n workflows. Data is processed and automatically logged into structured Google Sheets.",
    results: "Streamlined personal finance tracking with zero manual data entry into spreadsheets.",
    image: "https://picsum.photos/seed/finance/800/600",
    github: "https://github.com/alishaas/finance-bot"
  }
];
