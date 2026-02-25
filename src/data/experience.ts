export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  focus: string[];
  description: string;
}

export const experiences: Experience[] = [
  {
    company: 'PT. Infomedia Nusantara',
    role: 'AI Development (Automation AI Analytics) – Internship',
    period: 'Jul 2025 – Dec 2025',
    location: 'Hybrid',
    focus: ['AI APIs', 'Prompt Engineering', 'Workflow Automation', 'Business AI Integration'],
    description: 'Focused on integrating AI capabilities into enterprise workflows to improve efficiency and analytics.'
  },
  {
    company: 'Coding Camp powered by DBS Foundation',
    role: 'Machine Learning Path Cohort',
    period: 'Feb 2025 – Jul 2025',
    location: 'Remote',
    focus: ['Deep Learning', 'Machine Learning', 'Data Science'],
    description: 'Intensive training in machine learning, recognized as Top 5 in English ILT Weekly Consultation.'
  },
  {
    company: 'Telkom University',
    role: 'Assistant Lecturer',
    period: '2023 - 2025',
    location: 'Bandung',
    focus: ['Discrete Mathematics', 'Mathematical Logic'],
    description: 'Assisted professors in delivering course material and grading assignments for foundational informatics courses.'
  }
];

export const leadership = [
  {
    organization: 'Aksara Jurnalistik Telkom University',
    role: 'Head of Division',
    description: 'Led the journalism division, overseeing content creation and publication.'
  },
  {
    organization: 'Himpunan Mahasiswa S1 Informatika Telkom University',
    role: 'Business & Entrepreneurship Division Staff & Secretary',
    description: 'Managed administrative tasks and supported entrepreneurial initiatives within the student body.'
  }
];
