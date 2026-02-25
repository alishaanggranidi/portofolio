export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'PHP', 'Golang', 'C++']
  },
  {
    name: 'AI & Machine Learning',
    skills: ['PyTorch', 'TensorFlow', 'Transformers', 'LangChain', 'RAG Architecture', 'Computer Vision', 'NLP', 'AI API Integration']
  },
  {
    name: 'Backend Frameworks',
    skills: ['Laravel', 'FastAPI']
  },
  {
    name: 'DevOps & Version Control',
    skills: ['GitHub', 'Docker', 'Jenkins']
  },
  {
    name: 'Cloud',
    skills: ['Google Cloud Platform (GCP)']
  },
  {
    name: 'Data & Database',
    skills: ['PostgreSQL', 'ETL Pipeline', 'Pandas']
  }
];

export const achievements = [
  {
    title: 'Top 5 English ILT Activity',
    organization: 'Coding Camp powered by DBS Foundation',
    description: 'Recognized for outstanding performance and communication skills.'
  },
  {
    title: 'Conference Presenter',
    organization: 'Breast Cancer AI Research',
    description: 'Presented research findings on automated histopathology analysis.'
  }
];
