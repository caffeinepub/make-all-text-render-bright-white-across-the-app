export interface QuizQuestion {
  question: string;
  options: { text: string; value: string }[];
}

export interface QuizAnswer {
  questionId: number;
  answer: string;
}

export interface QuizResult {
  field: string;
  description: string;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: 'What type of activities do you enjoy most?',
    options: [
      { text: 'Working with numbers and data', value: 'analytical' },
      { text: 'Creating and designing things', value: 'creative' },
      { text: 'Helping and teaching others', value: 'social' },
      { text: 'Building and fixing things', value: 'practical' },
    ],
  },
  {
    question: 'Which environment appeals to you most?',
    options: [
      { text: 'Office with technology and computers', value: 'tech' },
      { text: 'Studio or creative workspace', value: 'creative' },
      { text: 'Hospital, school, or community center', value: 'social' },
      { text: 'Laboratory or research facility', value: 'analytical' },
    ],
  },
  {
    question: 'What are your strongest skills?',
    options: [
      { text: 'Problem-solving and logical thinking', value: 'analytical' },
      { text: 'Communication and empathy', value: 'social' },
      { text: 'Creativity and imagination', value: 'creative' },
      { text: 'Technical and hands-on skills', value: 'practical' },
    ],
  },
  {
    question: 'What motivates you most in a career?',
    options: [
      { text: 'Making a positive impact on society', value: 'social' },
      { text: 'Innovation and discovery', value: 'analytical' },
      { text: 'Self-expression and artistic freedom', value: 'creative' },
      { text: 'Building tangible results', value: 'practical' },
    ],
  },
  {
    question: 'Which subject do you find most interesting?',
    options: [
      { text: 'Mathematics and Science', value: 'analytical' },
      { text: 'Arts and Literature', value: 'creative' },
      { text: 'Social Studies and Psychology', value: 'social' },
      { text: 'Engineering and Technology', value: 'practical' },
    ],
  },
  {
    question: 'How do you prefer to work?',
    options: [
      { text: 'Independently with focused concentration', value: 'analytical' },
      { text: 'In teams helping and collaborating', value: 'social' },
      { text: 'Flexibly with creative freedom', value: 'creative' },
      { text: 'Hands-on with practical tools', value: 'practical' },
    ],
  },
];

export function calculateResult(answers: QuizAnswer[]): QuizResult {
  const scores: Record<string, number> = {
    analytical: 0,
    creative: 0,
    social: 0,
    practical: 0,
    tech: 0,
  };

  answers.forEach((answer) => {
    scores[answer.answer] = (scores[answer.answer] || 0) + 1;
  });

  const topScore = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
  const category = topScore[0];

  const results: Record<string, QuizResult> = {
    analytical: {
      field: 'STEM & Research',
      description:
        'You have a strong analytical mind and excel at problem-solving. Careers in science, technology, engineering, mathematics, and research would be ideal for you.',
      explanation:
        'Your answers show a preference for logical thinking, data analysis, and systematic approaches to challenges. You thrive in environments that require precision and critical thinking.',
    },
    creative: {
      field: 'Arts & Design',
      description:
        'You have a creative spirit and artistic vision. Careers in design, arts, media, entertainment, and creative industries would suit you well.',
      explanation:
        'Your responses indicate strong creative abilities and a desire for self-expression. You excel in environments that value innovation, aesthetics, and original thinking.',
    },
    social: {
      field: 'Healthcare & Education',
      description:
        'You have excellent interpersonal skills and a desire to help others. Careers in healthcare, education, counseling, and social services would be fulfilling for you.',
      explanation:
        'Your answers reveal strong empathy and communication skills. You thrive in roles where you can make a positive impact on individuals and communities.',
    },
    practical: {
      field: 'Engineering & Technology',
      description:
        'You enjoy hands-on work and building tangible solutions. Careers in engineering, construction, manufacturing, and technical fields would be ideal.',
      explanation:
        'Your responses show a preference for practical, hands-on work and creating real-world solutions. You excel in environments that combine technical skills with tangible outcomes.',
    },
    tech: {
      field: 'Technology & Innovation',
      description:
        'You are drawn to technology and innovation. Careers in software development, IT, data science, and emerging technologies would suit you perfectly.',
      explanation:
        'Your answers indicate a strong affinity for technology and digital solutions. You thrive in fast-paced, innovative environments that embrace cutting-edge tools.',
    },
  };

  return results[category] || results.analytical;
}
